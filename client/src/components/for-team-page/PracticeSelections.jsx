


// This component goes in main when the practice tab is selected.
// It allows the user to set up a practice session.
// In the future, consider breaking this down into categories of techniques for example
// takedowns, escapes, etc and providing a dropdown list for each category.
// I must add a key="..." to each item. For more:
// https://reactjs.org/docs/lists-and-keys.html#keys

import React from 'react';

export default function PracticeSelections({
  athletes, athleteChoice, setAthleteChoice, techniqueChoice, setTechniqueChoice
}) {
  // Handle athlete choice
  const chooseAthlete = (event) => {
    console.log(event.target.value);
    // find id that corresponds to name saved in event.target.value
    // (seems like there must be a better way that doesn't require find id like this)
    let fullAthleteInfo = athletes.filter((elem) => elem.name === event.target.value);
    fullAthleteInfo = fullAthleteInfo[0]; // ensure there is only one result

    // use id in new athlete choice
    setAthleteChoice(fullAthleteInfo);
  };

  // Handle technique choice... change checked property to opposite value
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
    <div className="PracticeSelections">
      <select key="Choose Athlete" value={athleteChoice.name} onChange={chooseAthlete}>
        <option value="Choose Athlete" disabled>Choose Athlete</option>
        {athletes.map((elem) => <option key={elem.id} value={elem.name}>{elem.name}</option>)}
      </select>
      <h4>Choose Techniques:</h4>
      {techniqueChoice.map(
        (elem, index) => (
          <div key={elem.id}>
            <label htmlFor={elem.id}>
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
