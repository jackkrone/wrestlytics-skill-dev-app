// This component goes in main when the practice tab is selected. It allows the user to set up a practice session


export default function PracticeSelections1(props) {

    const chooseAthlete = (event) => {
        props.setAthleteChoice(event.target.value);
    }

    return (
        <div className="PracticeSelections1">
            <li>
                <select name="Choose Athlete" onChange={chooseAthlete} >
                    <option selected disabled>Choose Athlete</option>
                    {props.athletes.map(ath => <option value={ath}>{ath}</option>)}
                </select>
            </li>
            <li><button>Add Athlete +</button></li> {/* onClick, add an additional instance of dropdown */}
        </div>
    )
}