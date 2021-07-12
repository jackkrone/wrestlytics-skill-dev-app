import TeamPage from './pages/TeamPage';
import PracticePage from './pages/TeamPage';
/* Resource on following import: https://www.youtube.com/watch?v=aZGzwEjZrXc&t=12s
    + Note that react route uses partial matching, so exact keyword is crucial
*/
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// example user object... this object should be retrieved from the server following login/auth
// mock data
const user = {
    teamName: 'Team Name',
    athletes: ['charlie', 'emma', 'will', 'sarah']
}

export default function App() {
    return (
        <div className="App">
            <TeamPage teamName={user.teamName} athletes={user.athletes}/>
            {/* I need to clean this up before running app again... 
            I want to pass props to all routes */}
            {/*<Router>
                    <Switch>
                        <Route exact path="/" component={TeamPage} />
                        <Route exact path="/practice" component={PracticePage} />


                        {/* <Route path="*" component={404NotFound} ...create eventually with 404NotFound page /}
                        {/* Guide: https://knowbody.github.io/react-router-docs/guides/NotFound.html /}
                    </Switch>
            </Router> */}
        </div>
    )
};