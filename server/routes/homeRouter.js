// These are the routes for App.jsx
// These routes provide information used in multiple page views, so they are called home router

const express = require('express');
const pool = require('../db');  

const homeRouter = express.Router();

homeRouter.get('/:username',
  async (req, res) => {
    const username = req.params.username;
    console.log(`user queried: ${username}`);

    try {
      // Find coach name and coach ID with username
      const coachQuery = await pool.query(
        `SELECT first_name, coach_id
        FROM coaches
        WHERE username=$1`,
        [username]
      );
      const coachName = coachQuery.rows[0].first_name;
      const coachId = coachQuery.rows[0].coach_id;

      //Query team_id based on coach_id and default_team value
      const teamIdQuery = await pool.query(
        `SELECT team_id
         FROM coaches_teams
         WHERE coach_id=$1 AND default_team='t'`,
         [coachId]
      );
      const teamId = teamIdQuery.rows[0].team_id;

      // Query team name based on the the team id
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
        const id = elem.athlete_id;
        const name = athleteNameQuery.rows[0].first_name;
        athletesList.push({id, name});
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
        `SELECT technique_id AS id, technique_name AS name
         FROM techniques
         WHERE activity_id=$1`,
        [activityId]
      );
      const techniquesList = techniquesListQuery.rows;
    
      // Send response
      infoForTeamPage  = {teamId, coachName, coachId, teamName, activityId, techniquesList, athletesList};
      res.json(infoForTeamPage); // Needs to combine athletesList and techniquesList
    } catch (err) {
      console.error(err.message);
    }
  }
);

module.exports = homeRouter;