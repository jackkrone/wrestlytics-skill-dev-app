import TeamPage from './pages/TeamPage';

// example user object... this object should be retrieved from the server following login/auth
const user = {
    teamName: 'Team Name',
    athletes: ['charlie', 'emma', 'will', 'sarah']
}

export default function App() {
    return (
        <div className="App">
            <TeamPage teamName={user.teamName} athletes={user.athletes}/>
        </div>

    )
};