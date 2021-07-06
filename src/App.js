import Team from './pages/Team';

// example user object... this object should be retrieved from the server following login/auth
const user = {
    teamName: 'Team Name',
    athletes: ['charlie', 'emma', 'will', 'sarah']
}

export default function App() {
    return (
        <div className="App">
            <Team teamName={user.teamName} athletes={user.athletes}/>
        </div>
    )
};