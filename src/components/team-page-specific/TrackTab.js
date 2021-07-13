// This is the track tab
// Currently it is a button that does nothing


export default function TrackTab(props) {
    
    const handleClick = (event) => {
        props.setTeamState(event.target.value);
    }
    
    return (
        <div className="TrackTab">
            <button onClick={handleClick} value="track">Track</button>
        </div>
    )
}