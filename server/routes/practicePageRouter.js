// need to define this, and I need to 


const express = require('express');
const pool = require('../db');  

const practicePageRouter = express.Router();

practicePageRouter.post('/practice'
  (req, res, next) => {
    try {
      // set up async query
      const { teamId, athleteId } = req.body; // not 100% confident this is constructed correctly
      
      const addPractice = await pool.query(
        `INSERT INTO practices (team_id, athlete_id)
         VALUES ($1, $2)
         RETURNING *`,
        [teamId, athleteId]
      )
      
      // res.json(addPractice) // .json() converts to json and calls res.send()
    } catch (err) {
      console.error(err.message);
    }
  });