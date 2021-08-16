/*
This is the HQ for our back-end routes. This project is set up
so that react-router handles page resources for the end user. These
routes share athlete data with our end users that renders within the
pages that react-router serves.
*/

const express = require('express');
const cors = require('cors');
const homeRouter = require('./routes/homeRouter');
const practicePageRouter = require('./routes/practicePageRouter');
const athletePageRouter = require('./routes/athletePageRouter');

// Create a new backend app
const app = express();

// Middleware
app.use(cors());  /* makes server accessible to any domain requesting resources via a browser
                  https://stackoverflow.com/questions/46024363/what-does-app-usecors-do#46024491 */
//app.use(express.json()); // instructs app to parse all incoming requests with JSON payloads. Parsed object saved at req.body.

// ROUTES //
//========//

// Create/POST a practice session
app.use('/practice', practicePageRouter);

// Read/GET athlete names and technique list
app.use('/', homeRouter);

// Read/GET practice data for a single athlete
app.use('/athlete', athletePageRouter);

// Read/GET practice data for entire team



// Update/PUT ...

// Delete/DELETE ...


// Start server
app.listen(5000, () => {console.log('wrestlytics server has started on port 5000')});
// note: use `nodemon index` rather than `node index` to auto restart server on every change