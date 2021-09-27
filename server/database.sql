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
  activity_id INT REFERENCES activities(activity_id)
);

CREATE TABLE coaches_teams (
  coach_id INT REFERENCES coaches(coach_id),
  team_id INT REFERENCES teams(team_id),
  default_team BOOLEAN
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
  PRIMARY KEY (practice_id, technique_id) -- Uses composite/compound as a PK
);




-- Create some mock data --
--=======================--

-- 1) Activies, Techniques
--------------------------
INSERT INTO activities (activity_id, activity_name)
VALUES
  (1, 'Wrestling'),
  (2, 'Basketball'),
  (3, 'Volleyball'),
  (4, 'Powerlifting'),
  (5, 'Swimming')
;

INSERT INTO techniques (technique_id, technique_name, activity_id)
VALUES
  -- Wrestling
  (1, 'Double Leg Takedown', 1),
  (2, 'Single Leg Takedown', 1),
  (3, 'Arm Chop', 1),
  (4, 'Half Nelson', 1),
  (5, 'Standup', 1),

  -- Basketball
  (6, 'Free Throw', 2),
  (7, 'Layup', 2),
  (8, 'Jumper', 2),
  (9, 'Hook', 2),
  (10, 'Dunk', 2),

  -- Volleyball
  (11, 'Set', 3),
  (12, 'Spike', 3),
  (13, 'Block', 3),
  (14, 'Dig', 3),
  (15, 'Serve', 3),

  -- Powerlifting
  (16, 'Squat', 4),
  (17, 'Deadlift', 4),
  (18, 'Hang clean', 4),
  (19, 'Snatch', 4),

  -- Swimming
  (20, 'Freestyle', 5),
  (21, 'Breaststroke', 5),
  (23, 'Backstroke', 5),
  (24, 'Butterfly', 5),
;


-- 2) Coaches, Athletes, Teams
------------------------------
INSERT INTO athletes (athlete_id, first_name)
VALUES
  -- Hawks Wrestling
  (1, 'Charlie'),
  (2, 'Emma'),
  (3, 'Will'),
  (4, 'Sarah'),

  -- Bulldogs Basketball
  (5, 'James'),
  (6, 'Matt'),
  (7, 'Andrew'),
  (8, 'John'),
  (9, 'Sam'),

  -- Flyers Volleyball
  (10, 'Emily'),
  (11, 'Molly'),
  (12, 'Jenna'),
  (13, 'Ellie'),
  (14, 'Hannah'),
  (15, 'Sadie'),
  -- Emma also on this team

  -- Eagles co-ed swimming
  (16, 'Robert'),
  (17, 'Alex'),
  (18, 'Grace'),
  -- Emma also on this team

  -- Warriors powerlifting
  (19, 'Greg'),
  (20, 'Phillip'),
  -- robert, james, will also on this team

  -- tigers wrestling
  (21, 'Nick')
  -- robert, alex, grace on this team too
;

INSERT INTO coaches (coach_id, first_name, username)
VALUES
  (1, 'Eric', 'eric'),
  (2, 'David', 'david'),
  (3, 'Anne', 'anne'),
  (4, 'Frank', 'frank'),
  (5, 'Sharon', 'sharon')
;

INSERT INTO teams (team_id, team_name, activity_id)
VALUES
  (1, 'Hawks', 1),
  (2, 'Bulldogs', 2),
  (3, 'Flyers', 3),
  (4, 'Eagles', 5),
  (5, 'Warriors', 4),
  (6, 'Tigers', 1)
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

  (10, 3),
  (11, 3),
  (12, 3),
  (13, 3),
  (14, 3),
  (15, 3),
  (2, 3),

  (16, 4),
  (17, 4),
  (18, 4),
  (2, 4),

  (19, 5),
  (20, 5),
  (16, 5),
  (5, 5),
  (3, 5),

  (21, 6),
  (16, 6),
  (17, 6),
  (18, 6)
;

INSERT INTO coaches_teams (coach_id, team_id, default_team)
VALUES
  (1, 1, true),
  (2, 2, true),
  (3, 3, true),
  (3, 4, false),
  (4, 5, true),
  (5, 6, true)
;