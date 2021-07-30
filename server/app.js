/*
This is the HQ for our back-end routes. This project is set up
so that react-router handles page resources for the end user. These
routes share athlete data with our end users that renders within the
pages that react-router serves.
*/

const express = require('express');
const cors = require('cors');
const pool = require('./db');  

// Create a new backend app
const app = express();

// Middleware
app.use(cors());  /* makes server accessible to any domain requesting resources via a browser
                  https://stackoverflow.com/questions/46024363/what-does-app-usecors-do#46024491 */
app.use(express.json()); // instructs app to parse all incoming requests with JSON payloads. Parsed object saved at req.body.

// ROUTES //
//========//

// Create/POST a practice session
/*
app.post('/practice'
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
*/

// Read/GET athlete names and technique list
app.get('/',
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

// Read/GET practice data
    // For a single athlete
    // For entire team
// Update/PUT ...
// Delete/DELETE ...


// Start server
app.listen(5000, () => {console.log('wrestlytics server has started on port 5000')});
// note: use `nodemon index` rather than `node index` to auto restart server on every change