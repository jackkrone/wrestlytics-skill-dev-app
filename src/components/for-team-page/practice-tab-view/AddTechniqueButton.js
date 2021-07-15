// This button renders in PracticeSelections2
// When clicked, it renders an additional dropdown list for selecting a technique


export default function AddTechniqueButton(props) {
    
    // This event handler increase techniqueChoice array length by 1
    // This triggers an additional render of ChooseTechniqueButton
    const handleClick = () => {
        props.setTechniqueChoice((prevChoice) => [...prevChoice, null])
    }
    
    return (
        <div className="AddTechniqueButton">
            <li><button onClick={handleClick}>Add Technique</button></li>
        </div>
    )
}