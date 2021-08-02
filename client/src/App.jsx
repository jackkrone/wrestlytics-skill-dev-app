/* eslint-disable */
import React, { useState, useEffect } from 'react';
/* Resource on following import: https://www.youtube.com/watch?v=aZGzwEjZrXc&t=12s
    + Note that react route uses partial matching, so keyword exact is crucial */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TeamPage from './pages/TeamPage';
import PracticePage from './pages/PracticePage';
import appGet from './api/appGet';

export default function App() {
    // set up state hooks
    const [athleteChoice, setAthleteChoice] = useState({id: null, name: 'Choose Athlete'});
    const [userVars, setUserVars] = useState(null); // This is necessary because useEffect's callback calls an async function
    const [techniqueChoice, setTechniqueChoice] = useState(null);
    // ^^^ You can't set initial state here as it requires userVars' updated form after useEffect API call
    // set techniqueChoice initial state at the beggining of TechniqueSelections component

    // GET request for athletes, techniques, teamName
    useEffect(() => {appGet(setUserVars)}, []);

    // useEffect's callback won't run until after the this comp renders the first time.
    // Problem: it needs the variables from appGet to render and pass props correctly.
    // Solution: force a first render that renders null.
    if (userVars === null) {
      return null;
    };
    console.log(userVars);

    // Following if block essentially sets techniqueChoice's initial state
    // It can't be set in useState() because it relies on the useEffect API call  
    if (techniqueChoice === null) {
      const newTechniqueChoice = {};
      userVars.techniquesList.forEach(
        (elem) => {
          // This stores id, name, and checkbox state (whether the technique is chosen)
          newTechniqueChoice[elem.id] = {name: elem.name, checked: false};
        }
      );
      setTechniqueChoice(newTechniqueChoice);
      }

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
                                        athleteChoice={athleteChoice}
                                        setAthleteChoice={setAthleteChoice}
                                        techniqueChoice={techniqueChoice}
                                        setTechniqueChoice={setTechniqueChoice}
                                        techniquesList={userVars.techniquesList}
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