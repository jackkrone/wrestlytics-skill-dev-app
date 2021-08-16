// These are route/s for athletePage

const express = require('express');
const pool = require('../db');  

const athletePageRouter = express.Router();

athletePageRouter.get('',
  async (req, res) => {
    // query athlete's practice info into an array
    try {
      // recover query parameters as variables
      const { teamId, athleteId } = req.query; // these query params must be inserted in the get request

      // Query relevant practice_ids and practice_dates
      const athletePractices = await pool.query(
        `SELECT practice_id, practice_date
         FROM practices
         WHERE team_id=$1 AND athlete_id=$2`,
         [teamId, athleteId],
      );
      let practicesArr = athletePractices.rows;
      console.log(practicesArr);

      // Query techniques + reps from each practice with results of previous query
      // using for loop, rather than array method such as .forEach or .map is crucial here
      // in an array method you need to define a new async function, and it throws off the logical order of information gathering
      // See commented out content at end of file for more
      let fullResponseData = [];
      for (elem of practicesArr) {
        let techniquesQuery = await pool.query(
          `SELECT technique_id, reps
          FROM practices_techniques
          WHERE practice_id = $1`,
         [elem.practice_id],          
        );
        console.log(elem);
        fullResponseData.push({ practiceDate: elem.practice_date, techniques: techniquesQuery.rows});
      }

      console.log(fullResponseData);
      
      // send response as JSON array
      res.status(200).json(fullResponseData);
    } catch (err) {
      console.error(err.message);
    }
  },
);

module.exports = athletePageRouter;





/*
queryFullResponseData = () => {
        let fullResponseData;
        return fullResponseData = practicesArr.map(
          async (elem) => {
            const techniquesData = await pool.query(
              `SELECT technique_id, reps
              FROM practices_techniques
              WHERE practice_id = $1`,
              [elem.practice_id],
            );
            console.log(elem.practice_id);
            console.log(techniquesData.rows);
            const techniques = techniquesData.rows;
            const practiceDate = elem.practice_date;
            const newElem = { practiceDate, techniques };
            console.log(newElem);
            return newElem;
          },
        );
        return fullResponseData;
      };

      for (elem in practicesArr) {

      }

      const fullResponseData = await queryFullResponseData();
      console.log(fullResponseData);
      console.log('above');

      // send response as JSON array
      res.status(200).json(fullResponseData);
*/