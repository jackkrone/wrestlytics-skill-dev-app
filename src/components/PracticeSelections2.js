// This component goes in main when the practice tab is selected
// It follows after the user presses next on the PracticeSelections1 screen


export default function PracticeSelections2() {
    return (
        <div className="PracticeSelections2">
                <li><button>Choose Technique</button></li> {/* future: format as dropdown list */}
                <li><button>Add Technique +</button></li> {/* onClick, add an additional instance of li3 */}
        </div>
    )
}