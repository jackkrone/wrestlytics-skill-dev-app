/* eslint-disable */
import React, { useState, useEffect } from 'react';
/* Resource on following import: https://www.youtube.com/watch?v=aZGzwEjZrXc&t=12s
    + Note that react route uses partial matching, so keyword exact is crucial */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TeamPage from './pages/TeamPage';
import PracticePage from './pages/PracticePage';
import AthletePage from './pages/AthletePage';
import appGet from './api/appGet';

export default function App() {
    // set up state hooks
    const [tabState, setTabState] = useState('track');
    const [athleteChoice, setAthleteChoice] = useState({id: null, name: ''});
    const [userVars, setUserVars] = useState(null); // This is necessary because useEffect's callback calls an async function
    const [techniqueChoice, setTechniqueChoice] = useState(null);
    // ^^^ You can't set initial state here as it requires userVars' updated form after useEffect API call
    // set techniqueChoice initial state at the beggining of TechniqueSelections component

    // GET request for athletes, techniques, teamName
    // console.log() is only used to indicate when useEffect is running
    useEffect(() => {appGet(setUserVars); console.log('userVars retreived');}, []);

    // useEffect's callback won't run until after the this comp renders the first time.
    // Problem: it needs the variables from appGet to render and pass props correctly.
    // Solution: force a first render that renders null.
    if (userVars === null) {
      return null;
    };

    // The following if block sets techniqueChoice's initial state in a sense
    // It can't be set in useState() because it relies on the useEffect API call  
    if (techniqueChoice === null) {
      const newTechniqueChoice = JSON.parse(JSON.stringify(userVars.techniquesList));
      newTechniqueChoice.map((elem) => elem.checked = false);
      setTechniqueChoice(newTechniqueChoice);
    } else {
      console.log(userVars); // When this is it means rendering of App comp is about to begin
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
                                        tabState={tabState}
                                        setTabState={setTabState}
                                    />
                                )
                            }
                        }/>
                        
                        <Route exact path="/practice" render={
                            (routeProps) => {
                                return (
                                    <PracticePage {...routeProps}
                                        teamId={userVars.teamId}
                                        activityId={userVars.activityId}
                                        athleteChoice={athleteChoice}
                                        setAthleteChoice={setAthleteChoice}
                                        techniqueChoice={techniqueChoice}
                                        setTechniqueChoice={setTechniqueChoice}
                                        setTabState={setTabState}
                                    />
                                )
                            }
                        }/>

                        <Route exact path="/athlete" render={
                            (routeProps) => {
                                return (
                                    <AthletePage {...routeProps}
                                        teamId={userVars.teamId}
                                        athleteChoice={athleteChoice}
                                        setAthleteChoice={setAthleteChoice}
                                        techniquesList={userVars.techniquesList}
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