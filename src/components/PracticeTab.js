// This is the practice tab
// Clicking on it will update the state of the Team page


export default function PracticeTab(props) {
    return (
        <div className="PracticeTab">
            <button onClick={props.handleClick}>Practice</button>
        </div>
    )
}