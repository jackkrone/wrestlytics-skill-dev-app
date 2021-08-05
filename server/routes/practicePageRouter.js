// need to define this, and I need to 


const express = require('express');
const pool = require('../db');  

const practicePageRouter = express.Router();
practicePageRouter.use(express.json()); // instructs app to parse all incoming requests with JSON payloads. Parsed object saved at req.body

practicePageRouter.post('',
  async (req, res) => {
    try {
      // set up async query
      const { teamId, athleteId, repsArray } = req.body;
      
      const addPractice = await pool.query(
        `INSERT INTO practices (team_id, athlete_id)
         VALUES ($1, $2)
         RETURNING *`,
        [teamId, athleteId],
      );
      
      // Insert rows into practices_techniques
      console.log(addPractice); // log this to see if it looks correct
      const practiceId = addPractice.rows[0].practice_id;
      repsArray.forEach(
        async (elem) => {
          const addReps = await pool.query(
            `INSERT INTO practices_techniques (practice_id, technique_id, reps)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [practiceId, elem.id, elem.reps],
          );
          console.log(addReps.rows[0]); // logs the practices_techniques rows added
        },
      );
      
      res.status(200).send('POST Success');
    } catch (err) {
      console.error(err.message);
    }
  },
);

module.exports = practicePageRouter;