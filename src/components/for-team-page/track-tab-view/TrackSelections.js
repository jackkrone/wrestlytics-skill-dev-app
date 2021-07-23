// This component renders in the track tab view of TeamPage
// For more on why each <li> has a key="...":
// https://reactjs.org/docs/lists-and-keys.html#keys


export default function TrackSelections(props) {
    return (
        <div className="TrackSelections">
            <li key="team stats"><button>team stats</button></li> {/* Eventually convert to its own component*/}
            {props.athletes.map(ath => <li key={ath}><button>{ath}</button></li>)}
            <li key="add new athlete"><button>+ add new athlete</button></li> {/* Eventually convert to its own component*/}
        </div>
    )
}