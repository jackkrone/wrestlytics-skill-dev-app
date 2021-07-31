// This component renders in the track tab view of TeamPage
// For more on why each <li> has a key="...":
// https://reactjs.org/docs/lists-and-keys.html#keys

import React from 'react';

export default function TrackSelections({ athletes }) {
  return (
    <div className="TrackSelections">
      <li key="team stats"><button>Team data</button></li>
      {/* ^^^ Eventually convert to its own component */}
      {athletes.map((elem) => <li key={elem.name}><button>{elem.name}</button></li>)}
      <li key="add new athlete"><button>+ add new athlete</button></li>
      {/* ^^^ Eventually convert to its own component */}
    </div>
  );
}
