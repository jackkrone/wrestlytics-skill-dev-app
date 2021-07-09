// This component goes in main when the practice tab is selected. It allows the user to set up a practice session


export default function PracticeSelections1() {
    return (
        <div className="PracticeSelections1">
            <li>
                <select name="Choose Athlete"> {/* needs a handleChange function to record choice as state 
                                                ... state needs to be stored at TeamPage level I think*/}
                    <option selected disabled>Choose Athlete</option>
                    <option>Athlete 1</option>
                    <option>Athlete 2</option>
                    <option>Athlete 3</option>
                </select>
            </li>
            <li><button>Add Athlete +</button></li> {/* onClick, add an additional instance of dropdown */}
        </div>
    )
}