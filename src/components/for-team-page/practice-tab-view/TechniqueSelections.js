// This component goes in main when the practice tab is selected
// It follows after the user presses next on the AthleteSelections screen

import { useState } from 'react';
import AddTechniqueButton from './AddTechniqueButton';
import ChooseTechniqueButton from './ChooseTechniqueButton';

// import techniqueList from somewhere
// Not sure it's best to import this list here
// May be preferable to import elsewhere and pass as in props to this component
let techniqueList = ["Technique 1", "Technique 2", "Technique 3"];


export default function TechniqueSelections(props) {
    // set up state hook
    const [numTechniques, setNumTechniques] = useState(1);
    const maxTechniques = techniqueList.length;

    // Create a counting array to use with the .map method in the JSX (cannot use for loops in JSX)
    // This code looks confusing. It creates an array from 1 to numTechniques counting by 1
    let arrayForMap = [...Array(numTechniques + 1).keys()].slice(1);

    // Do not render the AddTechnique button anymore if numTechniques=maxTechniques
    let addTechOrNot;
    if (numTechniques < maxTechniques) {
        addTechOrNot = <AddTechniqueButton setNumTechniques={setNumTechniques}/>;
    } else {
        addTechOrNot = null;
    }

    return (
        <div className="TechniqueSelections">
            {arrayForMap.map(
                (elem) => {
                    return (
                        <ChooseTechniqueButton
                            num={elem}
                            setTechniqueChoice={props.setTechniqueChoice}
                            techniqueList={techniqueList}
                        />
                    )
                }
            )}
            {addTechOrNot}
        </div>
    )
}