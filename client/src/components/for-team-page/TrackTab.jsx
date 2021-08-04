// This is the track tab
// Currently it is a button that does nothing
import React from 'react';

export default function TrackTab({ setTeamState }) {
  const handleClick = (event) => {
    setTeamState(event.target.value);
  };

  return (
    <div className="TrackTab">
      <button onClick={handleClick} value="track">Track</button>
    </div>
  );
}
