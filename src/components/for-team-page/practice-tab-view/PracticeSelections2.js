// This component goes in main when the practice tab is selected
// It follows after the user presses next on the PracticeSelections1 screen

// import techniqueList from somewhere
let techniqueList = ["Technique 1", "Technique 2", "Technique 3"];

export default function PracticeSelections2(props) {

    const chooseTechnique = (event) => {
        props.setTechniqueChoice(event.target.value);
    }

    return (
        <div className="PracticeSelections2">
                <li>
                    <select name="Choose Technique" onChange={chooseTechnique}>
                        <option selected disabled>Choose Technique</option>
                        {techniqueList.map(tech => <option value={tech}>{tech}</option>)}
                    </select>
                </li>
                <li><button>Add Technique +</button></li> {/* onClick, add an additional instance of dropdown */}
        </div>
    )
}