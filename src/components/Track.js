// This is the track tab
// Currently it is a button that does nothing


export default function Track(props) {
    return (
        <div className="Track">
            <button onClick={props.handleClick}>Track</button>
        </div>
    )
}