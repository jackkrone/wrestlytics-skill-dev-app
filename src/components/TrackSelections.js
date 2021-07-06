


export default function TrackSelections(props) {
    return (
        <div className="TrackSelections">
            <li><button>team stats</button></li> {/* Eventually convert to its own component*/}
            {props.athletes.map(ath => <li><button>{ath}</button></li>)}
            <li><button>+ add new athlete</button></li> {/* Eventually convert to its own component*/}
        </div>
    )
}