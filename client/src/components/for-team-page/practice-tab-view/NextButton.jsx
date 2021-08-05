/* This button goes in the footer of the team page when the practice tab is selected
and the user is interacting with PracticeSelections1 component */

import React from 'react';

export default function NextButton({ setPracticeTabState }) {
  /* When the user has clicked on the practice tab and clicks the next button, this will trigger
  practiceTabState to change to "selections2" and present PracticeSelections2 */
  const handleClick = (event) => {
    setPracticeTabState(event.target.value);
  };

  return (
    <div className="NextButton">
      <button value="selections2" onClick={handleClick}>Next</button>
    </div>
  );
}
