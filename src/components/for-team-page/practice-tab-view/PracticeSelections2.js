// This component goes in main when the practice tab is selected
// It follows after the user presses next on the PracticeSelections1 screen

import { useState } from 'react';
import AddTechnique from './AddTechnique';
import ChooseTechnique from './ChooseTechnique';

// import techniqueList from somewhere
let techniqueList = ["Technique 1", "Technique 2", "Technique 3"];
// const maxTechniques = techniqueList.length();


export default function PracticeSelections2(props) {
    // set up state hook
    const [numTechniques, setNumTechniques] = useState(1);

    // Create a counting array to use with the .map method in the JSX (cannot use for loops in JSX)
    // This looks confusing. It creates an array from 1 to numTechniques counting by 1
    let arrayForMap = [...Array(numTechniques + 1).keys()].slice(1);

    return (
        <div className="PracticeSelections2">
            {arrayForMap.map(
                (elem) => {
                    return (
                        <ChooseTechnique
                            num={elem}
                            setTechniqueChoice={props.setTechniqueChoice}
                            techniqueList={techniqueList}
                        />
                    )
                }
            )}
            <AddTechnique setNumTechniques={setNumTechniques}/>
        </div>
    )
}