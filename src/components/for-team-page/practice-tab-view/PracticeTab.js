// This is the practice tab
// Clicking on it will update the state of the Team page


export default function PracticeTab(props) {
    
    const handleClick = (event) => {
        props.setTeamState(event.target.value);
    }
    
    return (
        <div className="PracticeTab">
            <button onClick={handleClick} value="practice">Practice</button>
        </div>
    )
}