// These are the routes for TeamPage, the initial page shown after user logs in

const express = require('express');
const pool = require('../db');  

const teamPageRouter = express.Router();

teamPageRouter.get('',
  async (req, res) => {
    // Set Team ID manually for now, in future could be based on session or cookie variables
    const teamId = 2;
    
    try {
      // Query athlete ids, then athlete names
      const athletesIds = await pool.query(
        `SELECT athlete_id
         FROM athletes_teams
         WHERE team_id=$1`,
        [teamId]
      );
      
      let athletesList = [];
      for (elem of athletesIds.rows) {
        const athleteName = await pool.query(
          `SELECT first_name
           FROM athletes
           WHERE athlete_id=$1`,
          [elem.athlete_id]
        );
        const id = elem.athlete_id;
        const name = athleteName.rows[0].first_name;
        athletesList.push({id, name});
      }

      // Query activity id, then techniques
      let activityId = await pool.query(
        `SELECT activity_id
         FROM teams
         WHERE team_id=$1`,
        [teamId]
      );

      activityId = activityId.rows[0].activity_id; // changes activityId to a simple integer variable
      let techniquesList = await pool.query(
        `SELECT technique_id, technique_name
         FROM techniques
         WHERE activity_id=$1`,
        [activityId]
      );
      
      techniquesList = techniquesList.rows; // changes techniquesList to array of objects like Athletes list
    
      // Send response
      infoForTeamPage  = {teamId, activityId, techniquesList, athletesList};
      res.json(infoForTeamPage); // Needs to combine athletesList and techniquesList
    } catch (err) {
      console.error(err.message);
    }
  }
);


module.exports = teamPageRouter;