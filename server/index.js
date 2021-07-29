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
//app.use(cors());  // recall: cors enabls cross-origin resource sharing
//app.use(express.json()); // enables use of req.body

// ROUTES //
//========//

// Create/POST a practice session
    // THIS IS TOP PRIORITY!



// Read/GET practice data
    // For a single athlete
    // For entire team
// Update/PUT ...
// Delete/DELETE ...

// Start server
app.listen(5000, () => {console.log('wrestlytics server has started on port 5000')});
// note: use `nodemon index` rather than `node index` to auto restart server on every change