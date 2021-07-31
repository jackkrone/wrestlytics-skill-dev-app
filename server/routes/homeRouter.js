// These are the routes for App.jsx
// These routes provide information used in multiple page views, so they are called home router

const express = require('express');
const pool = require('../db');  

const homeRouter = express.Router();

homeRouter.get('',
  async (req, res) => {
    // Set Team ID manually for now, in future could be based on session or cookie variables
    const teamId = 2;
    
    try {
      // Query team name
      const teamNameQuery = await pool.query(
        `SELECT team_name
         FROM teams
         WHERE team_id=$1`,
         [teamId]
      );
      const teamName = teamNameQuery.rows[0].team_name;

      // Query athlete ids, then athlete names
      const athletesIds = await pool.query(
        `SELECT athlete_id
         FROM athletes_teams
         WHERE team_id=$1`,
        [teamId]
      );
      
      const athletesList = [];
      for (elem of athletesIds.rows) {
        const athleteNameQuery = await pool.query(
          `SELECT first_name
           FROM athletes
           WHERE athlete_id=$1`,
          [elem.athlete_id]
        );
        const athleteId = elem.athlete_id;
        const athleteName = athleteNameQuery.rows[0].first_name;
        athletesList.push({athleteId, athleteName});
      }

      // Query activity id, then techniques
      const activityIdQuery = await pool.query(
        `SELECT activity_id
         FROM teams
         WHERE team_id=$1`,
        [teamId]
      );
      const activityId = activityIdQuery.rows[0].activity_id;
      
      const techniquesListQuery = await pool.query(
        `SELECT technique_id, technique_name
         FROM techniques
         WHERE activity_id=$1`,
        [activityId]
      );
      const techniquesList = techniquesListQuery.rows;
    
      // Send response
      infoForTeamPage  = {teamId, teamName, activityId, techniquesList, athletesList};
      res.json(infoForTeamPage); // Needs to combine athletesList and techniquesList
    } catch (err) {
      console.error(err.message);
    }
  }
);


module.exports = homeRouter;