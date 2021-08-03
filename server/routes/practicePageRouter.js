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
         VALUES ($1, $2)`,
        [teamId, athleteId],
        (err, results) => {
          // throw error
          if (err) throw err;

          // Insert rows into practices_techniques
          const practiceId = results.rows[0].practice_id;
          repsArray.forEach(
            async (elem) => {
              await pool.query(
                `INSERT INTO practices_techniques (practice_id, technique_id, reps)
                 VALUES ($1, $2, $3)`,
                [practiceId, elem.id, elem.reps],
                (err, results) => {
                  if (err) throw err;
                  console.log(results.rows); // logs practices_techniques rows
                },
              );
            },
          );
        },
      );
      
        res.status(200).send('POST Success');
    } catch (err) {
      console.error(err.message);
    }
  },
);

module.exports = practicePageRouter;