/*
This module connects our db with our server. Currently the db is local
and you must run the code in database.sql to set up the db locally.
*/

// pg library is the postgres library, a "Non-blocking PostgreSQL client for Node.js"
const Pool = require('pg').Pool;

// Set up configurations
const pool = new Pool({
    user: 'postgres',
    // password: didn't set one
    host: 'localhost',
    port: 5432, // By default Postgres runs on port 5432 
    database: 'wrestlytics'
});

module.exports = pool;