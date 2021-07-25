// This button renders in PracticeSelections2
// When clicked, it renders an additional dropdown list for selecting a technique


export default function AddTechniqueButton(props) {

    // This event handler increase techniqueChoice array length by 1
    // This triggers an additional render of ChooseTechniqueButton
    const handleClick = () => {
        if (props.techniqueChoice[props.techniqueChoice.length-1] === "Choose Technique") {
            return // This prevents the user from clicking AddTechniqueButton if they haven't chosen a technique
        } else {
            props.setTechniqueChoice((prevChoice) => [...prevChoice, "Choose Technique"])
                                                    /* ^^^ this includes "Choose Technique" to set the
                                                    default value of the next dropdown list */
        }
    }
    
    return (
        <div className="AddTechniqueButton">
            <li><button onClick={handleClick}>Add Technique</button></li>
        </div>
    )
}