# 2021.07.09 Update:
--------------------
+ Need to elaborate or change some details on Priority 0 stages.
+ Focus on viable product with NLP integration
    + Manually counting may not make a coach's job easier or improve their performance
    + Could possible change sketch2 so that the app is automatically listening, no need to press a button
+ Potential synchronous benefits with fanaticwrestling.com business model
    + Enable content creates (i.e. coaches) to earn more
    + Creator ecosystem increases notoriety
+ Potential freemium model: free video storage up to X gigs.
+ Note to self: incorporate scratch notes on wrestlytics that are stored on google drive


# Original Document:
====================

# Building Wrestlytics
### Table of Contents
0. Product, market, business model, growth model
1. Data model (document store)
2. Application stack, e.g. MERN (Mongo, Express, React, Node)
3. Devops (k8s, Jenkins, gitlab)
4. API spec (OpenAPI/SwaggerUI)
5. UX & Design


## PRIORITY 0
### Product:
**Stage 1:** A web-based tool for coaches to organize and store the training footage of their athletes and to easily track their athletes techniques and reps
+ Prefer to create *mobile-first* react-based web app, then use react native for mobile development
+ Give users a pre-defined set of skills but also let them define new skills
    + Pre-defined skills enable better easier training for stage 3
    + Define new skills option improves understanding of what coaches want tracked
+ Create dashboards for analyzing athletes performance over time

**Stage 2:** Add skill trees, i.e. learning pathways to skill mastery
+ Skill trees may or may not be visible to users or may only exist on back-end
+ Possible to generate custom trees for users as subset of the master tree
+ “Specify leaf, generate ‘critical path’ custom course”

**Stage 3:** Add computer vision algorithms to largely automate athletes’ rep tracking

**Stage 4:** Expand product offering to other sports
+ Possible route: cash cow pro sports Football, Baseball, Basketball
+ Possible route: niche upper-middle-class to upper-class sports Golf, Tennis, Gymnastics
+ Individual sports & endeavors? e.g. weightlifting, 

**Stage 5:** Expand to learning skills in general (with or without coaches/teachers??)



### Market: (initial market)
Wrestlers + coaches

### Business Model:
+ Some sort of freemium?
+ Which features to charge for and which to include free?


### Growth Model:
+ Related to product stages



## PRIORITY 1
### Data Model:
non-relational
