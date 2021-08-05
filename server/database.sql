/*
This file contains the commands for creating the database and tables.
Use it first to set up a database locally, then to configure a database
on AWS
*/

CREATE DATABASE wrestlytics;


-- Set up tables --
-------------------

CREATE TABLE activities (
  activity_id INT PRIMARY KEY,
  activity_name VARCHAR
);

CREATE TABLE techniques (
  technique_id INT PRIMARY KEY,
  technique_name VARCHAR,
  activity_id INT REFERENCES activities(activity_id)
);

CREATE TABLE coaches (
  coach_id INT PRIMARY KEY,
  first_name VARCHAR /*,
  last_name VARCHAR,
  username VARCHAR,
  pass VARCHAR,
  join_date DATE */
);

CREATE TABLE athletes (
  athlete_id INT PRIMARY KEY,
  first_name VARCHAR /*,
  last_name VARCHAR,
  username VARCHAR,
  pass VARCHAR,
  join_date DATE */
);

CREATE TABLE teams (
  team_id INT PRIMARY KEY,
  team_name VARCHAR,
  coach_id INT REFERENCES coaches(coach_id),
  activity_id INT REFERENCES activities(activity_id)
);

CREATE TABLE coaches_teams (
  coach_id INT REFERENCES coaches(coach_id),
  team_id INT REFERENCES teams(team_id),
  PRIMARY KEY (coach_id, team_id)
);

CREATE TABLE athletes_teams (
  athlete_id INT REFERENCES athletes(athlete_id),
  team_id INT REFERENCES teams(team_id),
  PRIMARY KEY (athlete_id, team_id)
);

CREATE TABLE practices (
  practice_id SERIAL PRIMARY KEY,
  team_id INT REFERENCES teams(team_id),
  athlete_id INT REFERENCES athletes(athlete_id),
  /*start_time TIMESTAMP,
  end_time TIMESTAMP,*/ -- Start and end time not crucial for a demo app. use CURRENT_DATE instead
  practice_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE practices_techniques (
  practice_id INT REFERENCES practices(practice_id),
  technique_id INT REFERENCES techniques(technique_id),
  reps INT,
  PRIMARY KEY (practice_id, technique_id) -- Sets PK as composite/compound
);




-- Create some mock data --
---------------------------


-- 1) Activies, Techniques
INSERT INTO activities (activity_id, activity_name)
VALUES (1, 'Wrestling');

INSERT INTO techniques (technique_id, technique_name, activity_id)
VALUES
  (1, 'Double Leg Takedown', 1),
  (2, 'Single Leg Takedown', 1),
  (3, 'Arm Chop', 1),
  (4, 'Half Nelson', 1),
  (5, 'Standup', 1)
;


-- 2) Coaches, Athletes, Teams
INSERT INTO athletes (athlete_id, first_name)
VALUES
  (1, 'Charlie'),
  (2, 'Emma'),
  (3, 'Will'),
  (4, 'Sarah'),
  (5, 'Uthred'),
  (6, 'Steapa'),
  (7, 'Aethelflaed'),
  (8, 'Beocca'),
  (9, 'Sihtric'),
  (10, 'Finan')
;

INSERT INTO coaches (coach_id, first_name)
VALUES
  (1, 'Eric'),
  (2, 'Alfred')
;

INSERT INTO teams (team_id, team_name, coach_id, activity_id)
VALUES
  (1, 'Globo Gym Purple Cobras', 1, 1),
  (2, 'Wessex', 2, 1)
;

INSERT INTO athletes_teams (athlete_id, team_id)
VALUES
  (1,1),
  (2,1),
  (3,1),
  (4,1),
  (5,2),
  (6,2),
  (7,2),
  (8,2),
  (9,2),
  (10,2)
;

INSERT INTO coaches_teams (coach_id, team_id)
VALUES
  (1, 1),
  (2, 2)
;