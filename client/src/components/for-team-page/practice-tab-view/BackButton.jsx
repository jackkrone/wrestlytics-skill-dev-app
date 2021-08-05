/* This button goes in the footer of the team page when the practice tab is selected
and the user is interacting with PracticeSelections2 component */

import React from 'react';

export default function BackButton({ setPracticeTabState }) {
  /* When the user has clicked on the practice tab and clicks the back button, this will trigger
  practiceTabState to change to "selections1" and present PracticeSelections1 */
  const handleClick = (event) => {
    setPracticeTabState(event.target.value);
  };

  return (
    <div className="BackButton">
      <button value="selections1" onClick={handleClick}>Back</button>
    </div>
  );
}
