// This button renders in PracticeSelections2
// When clicked, it renders an additional dropdown list for selecting a technique


export default function AddTechniqueButton(props) {
    
    const handleClick = () => {
        props.setNumTechniques((prevNum) => prevNum + 1)
    }
    
    return (
        <div className="AddTechniqueButton">
            <li><button onClick={handleClick}>Add Technique</button></li>
        </div>
    )
}