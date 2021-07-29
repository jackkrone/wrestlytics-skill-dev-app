/*
This file contains the commands for creating the database and tables.
Use it first to set up a database locally, then to configure a database
on AWS
*/

CREATE DATABASE wrestlytics;


-- Set up tables --
-------------------

CREATE TABLE practices (
  practice_id SERIAL PRIMARY KEY, -- Consider using SERIAL instead of INT??
  coach_id INT REFERENCES coaches(coach_id)
  athlete_id INT REFERENCES athletes(athlete_id)
  /*start_time TIMESTAMP,
  end_time TIMESTAMP,*/
  activity_id VARCHAR REFERENCES activites(activity_id)
);

CREATE TABLE activities (
  activity_id INT PRIMARY KEY,
  activity_name VARCHAR
);

CREATE TABLE techniques (
  technique_id INT PRIMARY KEY,
  technique_name VARCHAR,
  activity_id INT REFERENCES activites(activity_id)
);

CREATE TABLE practices_techniques (
  practice_id INT REFERENCES practices(practice_id),
  technique_id INT REFERENCES techniques(technique_id),
  reps INT,
  PRIMARY KEY (practice_id, technique_id) -- Sets PK as composite/compound
);

CREATE TABLE coaches (
  coaches_id INT PRIMARY KEY,
  first_name VARCHAR,
  /* last_name VARCHAR,
  username VARCHAR,
  pass VARCHAR,
  join_date DATE */
);

CREATE TABLE athletes (
  athletes_id INT PRIMARY KEY,
  first_name VARCHAR,
  /* last_name VARCHAR,
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



-- Create some mock data --
---------------------------

-- 1) Coaches, Athletes, Teams
INSERT INTO teams (team_id, team_name)
VALUES (1, 'Globo Gym Purple Cobras');

INSERT INTO athletes (athlete_id, first_name)
VALUES
  (1, 'Charlie'),
  (2, 'Emma'),
  (3, 'Will'),
  (4, 'Sarah');

INSERT INTO athletes_teams (athlete_id, team_id)
VALUES
  (1,1),
  (2,1),
  (3,1),
  (4,1);

INSERT INTO coaches (coach_id, first_name)
VALUES (1, 'Eric');

INSERT INTO coaches_teams (coach_id, team_id)
VALUES (1, 1);


-- 2) Activies, Techniques
INSERT INTO activites (activity_id, activity_name)
VALUES (1, 'Wrestling');

INSERT INTO techniques (technique_id, technique_name, activity_id)
VALUES
  (1, 'Double Leg Takedown', 1),
  (2, 'Single Leg Takedown', 1),
  (3, 'Arm Chop', 1),
  (4, 'Half Nelson', 1),
  (5, 'Standup', 1);