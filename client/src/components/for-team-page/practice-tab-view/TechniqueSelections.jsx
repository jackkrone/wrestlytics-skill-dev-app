/* This component goes in main when the practice tab is selected. It follows 
after the user presses next on the AthleteSelections screen. In the future,
consider breaking this down into categories of techniques for example takedowns, 
escapes, etc. and providing a dropdown list for each category. */

import React, { useState } from 'react';
import AddTechniqueButton from './AddTechniqueButton';
import ChooseTechniqueButton from './ChooseTechniqueButton';

// import techniqueList from somewhere (Not sure it's best to import this list here)
// It may be preferable to import further up in the hierarchy and pass as in props to this component
const techniqueList = ['Double Leg Takedown', 'Single Leg Takedown', 'Arm Chop', 'Half Nelson', 'Standup'];

export default function TechniqueSelections({ techniqueChoice, setTechniqueChoice }) {
  // set up state hook for techniqueOptionsArray
  // initial state is array with a nested array techniqueList at index 0
  const [techniqueOptionsArray, setTechniqueOptions] = useState([techniqueList])

  // Set max allowable techniques and number of chosen techniques (numTechniques)
  const maxTechniques = techniqueList.length;
  const numTechniques = techniqueChoice.length; /* this starts at value of 1, given that
                                                  techniqueChoice default value is [null] */

  // Create a counting array to use with the .map method in the JSX (cannot use for loops in JSX)
  // This code looks confusing. It creates an array from 0 to numTechniques-1 counting by 1
  const arrayForMap = [...Array(numTechniques).keys()];

  // Do not render the AddTechnique button anymore if numTechniques=maxTechniques
  // addTechOrNot will be included as a variable in the return statement of this component
  let addTechniqueOrNot;
  if (numTechniques < maxTechniques) {
    addTechniqueOrNot = (
      <AddTechniqueButton
        key="Add Technique"
        setTechniqueChoice={setTechniqueChoice}
        techniqueChoice={techniqueChoice}
      />
    );
  } else {
    addTechniqueOrNot = null;
  }

  return (
    <div className="TechniqueSelections">
      {arrayForMap.map(
        (elem) =>
          (
            <ChooseTechniqueButton
              key={`Technique ${elem}`}
              renderNum={elem} /* This prop provides important functionality for
                              proper handling of setTechniqueChoice() and for
                              setting the key value of this component's <li>s */
              setTechniqueChoice={setTechniqueChoice}
              techniqueChoice={techniqueChoice}
              setTechniqueOptions={setTechniqueOptions}
              techniqueOptionsSubArray={techniqueOptionsArray[elem]}
            />
          ),
      )}
      {addTechniqueOrNot}
    </div>
  );
}
