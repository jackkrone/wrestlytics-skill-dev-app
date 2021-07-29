/*
This component renders in PracticeSelections2. It will render an additional
time each time the user clicks the Addtechnique component. It can not render
more than times than the limit set by maxTechniques. It can not render if a
technique has not been selected in the list item above the AddTechnique component.
*/
// This component renders a list -- be sure to include a unique key="..." for each <li>

import React from 'react';

export default function ChooseTechniqueButton({
  renderNum, techniqueChoice, setTechniqueChoice, techniqueOptionsSubArray, setTechniqueOptions
}) {
  // Handle user technique selection and set technique options for the next render
  /* techniqueChoice is an array, it will update each time use selects a new technique.
    The newly selected technique gets stored at a unique index of the array according to the
    renderNum (nth render) of this ChooseTechniqueButton component */
  const chooseTechnique = (event) => {
    setTechniqueChoice(
      (prevChoices) => {
        const newChoice = prevChoices;
        newChoice[renderNum] = event.target.value;
        return newChoice;
      },
    );

    // filter out the chosen technique from the next dropdown list to be rendered
    // create a filtered list for the next dropdown list to be rendered
    const nextDropdownList = techniqueOptionsSubArray.filter((elem) => elem !== event.target.value);

    // include the list in the TechniqueOptionsArray state of TechniqueSelections
    setTechniqueOptions((prevOptionsArray) => [...prevOptionsArray, nextDropdownList]);
  };

  return (
    <div className="ChooseTechniqueButton">
      <li>
        <select value={techniqueChoice[renderNum]} onChange={chooseTechnique}>
          <option value="Choose Technique" disabled>Choose Technique</option>
          {techniqueOptionsSubArray.map(
            (tech) => <option key={tech} value={tech}>{tech}</option>,
          )}
        </select>
      </li>
    </div>
  );
}
