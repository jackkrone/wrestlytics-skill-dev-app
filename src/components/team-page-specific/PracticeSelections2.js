// This component goes in main when the practice tab is selected
// It follows after the user presses next on the PracticeSelections1 screen


export default function PracticeSelections2() {
    return (
        <div className="PracticeSelections2">
                <li>
                    <select name="Choose Technique"> {/* requires a handleChange function to record choice as state 
                                                    ... state needs to be stored at TeamPage level I think*/}
                        <option selected disabled>Choose Technique</option>
                        <option>Technique 1</option>
                        <option>Technique 2</option>
                        <option>Technique 3</option>
                    </select>
                </li>
                <li><button>Add Technique +</button></li> {/* onClick, add an additional instance of dropdown */}
        </div>
    )
}