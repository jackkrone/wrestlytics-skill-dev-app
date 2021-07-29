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
    setAthleteChoice(event.target.value);
  };

  return (
    <div className="AthleteSelections">
      <li key="Choose Athlete">
        <select value={athleteChoice} onChange={chooseAthlete}>
          <option value="Choose Athlete" disabled>Choose Athlete</option>
          {athletes.map((ath) => <option key={ath} value={ath}>{ath}</option>)}
        </select>
      </li>
      <li key="Add Athlete"><button>Add Athlete<br/>(Not functional)</button></li>
      {/* ^^^ onClick, adds an additional instance of dropdown */}
    </div>
  );
}
