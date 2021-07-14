// This button renders in PracticeSelections2
// When clicked, it renders an additional dropdown list for selecting a technique


export default function AddTechnique(props) {
    
    const handleClick = () => {
        props.setNumTechniques((prevNum) => prevNum + 1)
    }
    
    return (
        <div className="AddTechnique">
            <li><button onClick={handleClick}>Add Technique</button></li>
        </div>
    )
}