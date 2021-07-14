/*
This component renders in PracticeSelections2. It will render an additional
time each time the user clicks the Addtechnique component. It can not render
more than times than the limit set by maxTechniques. It can not render if a
technique has not been selected in the list item above the AddTechnique component.
*/

export default function ChooseTechnique(props) {
    
    // handle user technique selection
    /* This needs to be an array, and changing a selection should not
    add an additional entry to the array */
    const chooseTechnique = (event) => {
        props.setTechniqueChoice(event.target.value);
    }

    return (
        <li key={`Technique ${props.num}`}>
            <select name="Choose Technique" onChange={chooseTechnique}> 
                <option selected disabled>Choose Technique</option>
                {props.techniqueList.map(tech => <option value={tech}>{tech}</option>)}
            </select>
        </li>
    )
}