/* This component goes in main when the practice tab is selected. It follows 
after the user presses next on the AthleteSelections screen. In the future,
consider breaking this down into categories of techniques for example takedowns, 
escapes, etc. and providing a dropdown list for each category. */

import React from 'react';

export default function TechniqueSelections({
  techniquesList, techniqueChoice, setTechniqueChoice,
}) {
  const handleChange = ({ target }) => {
    // change checked property to opposite value
    setTechniqueChoice(
      (prevChoice) => {
        // Must use JSON method to update this state
        // An object property change isn't interpreted by React as state change
        // So even when using setState, it will not trigger a re-render
        const newChoice = JSON.parse(JSON.stringify(prevChoice));
        newChoice[target.id].checked = !newChoice[target.id].checked;
        return newChoice;
      },
    );
  };

  return (
    <div className="TechniqueSelections">
      {techniquesList.map(
        (elem) => (
          <div>
            <label key={elem.id} htmlFor={elem.id}>
              <input
                type="checkbox"
                id={elem.id}
                checked={techniqueChoice[elem.id].checked}
                onChange={handleChange}
              />
              {elem.name}
            </label>
          </div>
        ),
      )}
    </div>
  );
}
