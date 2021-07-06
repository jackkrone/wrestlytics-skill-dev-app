// This is the practice tab
// Clicking on it will update the state of the Team page


export default function Practice(props) {
    return (
        <div className="Practice">
            <button onClick={props.handleClick}>Practice</button>
        </div>
    )
}