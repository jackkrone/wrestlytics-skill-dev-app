// This component renders in the track tab view of TeamPage
// For more on why each <li> has a key="...":
// https://reactjs.org/docs/lists-and-keys.html#keys

import React from 'react';
import AthleteButton from './AthleteButton';

export default function TrackSelections({ athletes, setAthleteChoice }) {
  return (
    <div className="TrackSelections">
      <li key="team stats"><button>Team data</button></li>
      {/* ^^^ Eventually convert to its own component */}
      {athletes.map(
        (elem) => (
          <AthleteButton
            athleteName={elem.name}
            athleteId={elem.id}
            setAthleteChoice={setAthleteChoice}
          />
        ),
      )}
      {/* Eventually convert below to its own component */}
      <li key="add new athlete"><button>+ add new athlete</button></li>
    </div>
  );
}
