/* This component goes in main when the practice tab is selected. It follows 
after the user presses next on the AthleteSelections screen. In the future,
consider breaking this down into categories of techniques for example takedowns, 
escapes, etc. and providing a dropdown list for each category. */

import React from 'react';

export default function TechniqueSelections({ techniqueChoice, setTechniqueChoice }) {
  // change checked property to opposite value
  const handleChange = ({ target }) => {
    setTechniqueChoice(
      (prevChoice) => {
        const newChoice = JSON.parse(JSON.stringify(prevChoice));
        const index = target.id;
        newChoice[index].checked = !newChoice[index].checked;
        return newChoice;
      },
    );
  };


  return (
    <div className="TechniqueSelections">
      {techniqueChoice.map(
        (elem, index) => (
          <div>
            <label key={elem.id} htmlFor={elem.id}>
              <input
                type="checkbox"
                id={index}
                checked={elem.checked}
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
