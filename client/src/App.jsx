/* eslint-disable */
import React, { useState, useEffect } from 'react';
import TeamPage from './pages/TeamPage';
import PracticePage from './pages/PracticePage';
import appGet from './api/appGet';
/* Resource on following import: https://www.youtube.com/watch?v=aZGzwEjZrXc&t=12s
    + Note that react route uses partial matching, so keyword exact is crucial
*/
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Mock user object... this object should be retrieved from the server following login/auth
const user = {
    athletes: ['charlie', 'emma', 'will', 'sarah']
};

export default function App() {
    // set up state hooks
    const [athleteChoice, setAthleteChoice] = useState({id: 1000, name: 'Choose Athlete'});
    console.log(athleteChoice);
    const [techniqueChoice, setTechniqueChoice] = useState(["Choose Technique"]);
    const [userVars, setUserVars] = useState(null); // This is necessary because useEffect's callback calls an async function

    // GET request for athletes, techniques, teamName
    useEffect(() => {appGet(setUserVars)}, []);

    /* useEffect's callback won't run until after the this comp renders the first time.
    Problem: it needs the variables from appGet to render and pass props correctly.
    Solution: force a first render that renders null.
    */
    if (userVars === null) {
      return null;
    };
    console.log(userVars);

    return (
        <div className="App">
            <Router>
                    <Switch>
                        <Route exact path="/" render={
                            (routeProps) => {
                                return (
                                    <TeamPage {...routeProps}
                                        teamName={userVars.teamName}
                                        athletes={userVars.athletesList}
                                        setAthleteChoice={setAthleteChoice}
                                        athleteChoice={athleteChoice}
                                        setTechniqueChoice={setTechniqueChoice}
                                        techniqueChoice={techniqueChoice}
                                    />
                                )
                            }
                        }/>
                        
                        <Route exact path="/practice" render={
                            (routeProps) => {
                                return (
                                    <PracticePage {...routeProps}
                                        athleteChoice={athleteChoice}
                                        techniqueChoice={techniqueChoice}
                                    />
                                )
                            }
                        }/>

                        {/* <Route path="*" component={404NotFound} ...create eventually with 404NotFound page */}
                        {/* Guide: https://knowbody.github.io/react-router-docs/guides/NotFound.html */}
                    </Switch>
            </Router>
        </div>
    )
};