/*
This component goes in main when the practice tab is selected.
It allows the user to set up a practice session.
*/
// I must add a key="..." to each item. Currently a warning shows up in the console. For more:
// https://reactjs.org/docs/lists-and-keys.html#keys

import React from 'react';

export default function AthleteSelections({ athletes, athleteChoice, setAthleteChoice }) {
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

  return (
    <div className="AthleteSelections">
      <li key="Choose Athlete">
        <select value={athleteChoice.name} onChange={chooseAthlete}>
          <option value="Choose Athlete" disabled>Choose Athlete</option>
          {athletes.map((elem) => <option key={elem.id} value={elem.name}>{elem.name}</option>)}
        </select>
      </li>
      <li key="Add Athlete"><button>Add Athlete<br/>(Not functional)</button></li>
      {/* ^^^ onClick, adds an additional instance of dropdown */}
    </div>
  );
}
