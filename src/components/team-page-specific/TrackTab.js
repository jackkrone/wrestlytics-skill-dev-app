// This is the track tab
// Currently it is a button that does nothing


export default function TrackTab(props) {
    return (
        <div className="TrackTab">
            <button onClick={props.handleClick}>Track</button>
        </div>
    )
}