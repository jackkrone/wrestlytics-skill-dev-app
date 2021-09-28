# Wrestlytics

## Overview

Wrestlytics is a web app that enables improved physical skill development. The goal is to create a tool for coaches to efficiently and effectively track their athletes' progress and provide them with meaningful feedback. Right now, Wrestlytics is a work in progress. This project started as an app for wrestling coaches, but has been extended to include coaches of any sport. In the future, it could even be applied to activities as varied as physical therapy or woodworking.

The key components of Wrestlytics UI are as follows:

  1. A tool to collect data while an athlete practices
  2. An interface to view an athlete's data in the form of tables and charts that communicate the trajectory of the athlete's efforts
  3. Tools for the coach to provide the athlete with feedback

At the moment, Wrestlytics enables coaches to count an athlete's reps of some previously chosen techniques and then to view the previous practice data of their athletes. The vision for Wrestlytics includes a mobile app and an athlete-facing form of the app that allows athletes to track their own progress and view all the same data as the coaches. Furthermore, this athlete-facing app would include a communication portal connected to the coach-facing app to enable athletes to ask questions and coaches to provide feedback. Ideally, the data collection of athlete's practice could be done using video and computer vision. An athlete could set their phone up and record their practice session and the computer vision algorithm could count reps, assign a quality score to each rep, or even automatically cut out the extraneous footage where the athlete is resting or otherwise not actively practicing a technique. For one, this would enable asynchronous remote coaching. Additionally, it could become the basis of an online coaching market where athletes record practices and then pay for specific coaches or experts to provide feedback, which could include directly marking up athletes' video footage and providing video clips of themselves or another person performing a given technique correctly.

## Setup & quick start

1. Clone the repo to your local machine
2. Run ```npm install``` inside of client directory
3. Run ```amplify init d1ev67vmtajgwp``` (d1ev67... is the app ID). Choose the foolowing setup options:

  > + Run using exisiting env? Y
  > + Choose the environment: dev (default)
  > + Use default provider awscloudformation

4. Run ```npm install``` inside of server directory
5. Run ```npm start``` inside of server directory

  > + Note that the database currently needs to be set up locally at port 5432 (see ```./server/db.js``` for setup). You must set up a postgres database called wrestlytics and run the sql commands found in ```./server/database.sql```.

6. Run ```npm start``` inside of client directory

## Wrestlytics Users

User data is shown in the second half of ```./server/database.sql```. A development goal for this project is to enable users to sign up and create their own teams.

**1. Coach Eric**
  + username: eric
  + password: ericpassword
  + Eric coaches the Hawks wrestling team

**2. Coach David**
  + username: david
  + password: davidpassword
  + David coaches the Bulldogs basketball team

**3. Coach Anne**
  + username: anne
  + password: annepassword
  + Anne coaches the Flyers volleyball team AND the Eagles swim team. Currently, Wrestlytics doesn't provide functionality for a coach to switch  between their teams. This functionality will be added in the menu drawer at some point in the future.

**4. Coach Frank**
  + username: frank
  + password: frankpassword
  + Frank coaches the Warriors powerlifting team

**5. Coach Sharon**
  + username: sharon
  + password: sharonpassword
  + Sharon coaches the Tigers wrestling team

### Notes

1. There are a number of athletes, including Emma, James, and Robert that are a part of more than one team. See if you can find them. Each athlete is only stored once in the athletes database table. This is to facilate a possible future construction of the app that is athlete-facing.
2. There are two coaches, Eric and Sharon, that coach wrestling. The wrestling techniques listed in the practice pane of the app are the same for each, and each technique is stored only once in the techniques database table.
