/*
This file contains the commands for creating the database and tables.
Use it first to set up a database locally, then to configure a database
on AWS
*/

CREATE DATABASE wrestlytics;

CREATE TABLE practices (
  practice_id INTEGER PRIMARY KEY, -- Consider using SERIAL instead of INTEGER??
  coach_id INTEGER REFERENCES coaches.coach_id,
  athlete_id INTEGER REFERENCES athletes.athlete_id,
  start_time TIME,
  end_time TIME,
  activity VARCHAR,

);