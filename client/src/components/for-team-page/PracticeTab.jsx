// This is the practice tab
// Clicking on it will update the state of the Team page

import React from 'react';

export default function PracticeTab({ setTeamState }) {
  const handleClick = (event) => {
    setTeamState(event.target.value);
  };

  return (
    <div className="PracticeTab">
      <button onClick={handleClick} value="practice">Practice</button>
    </div>
  );
}
