import { useState } from 'react';
import TeamPage from './pages/TeamPage';
import PracticePage from './pages/PracticePage';
/* Resource on following import: https://www.youtube.com/watch?v=aZGzwEjZrXc&t=12s
    + Note that react route uses partial matching, so exact keyword is crucial
*/
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Mock user object... this object should be retrieved from the server following login/auth
const user = {
    teamName: 'Team Name',
    athletes: ['charlie', 'emma', 'will', 'sarah']
};

export default function App() {
    // set up state hooks
    const [athleteChoice, setAthleteChoice] = useState(null);
    const [techniqueChoice, setTechniqueChoice] = useState(null);

    return (
        <div className="App">
            <Router>
                    <Switch>
                        <Route exact path="/" render={
                            (routeProps) => {
                                return (
                                    <TeamPage {...routeProps}
                                        teamName={user.teamName}
                                        athletes={user.athletes}
                                        setAthleteChoice={setAthleteChoice}
                                        setTechniqueChoice={setTechniqueChoice}
                                    />
                                )
                            }
                        }/>
                        
                        <Route exact path="/practice" render={
                            (routeProps) => {
                                return (
                                    <PracticePage
                                        {...routeProps}
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