/*
This button goes in the footer of the Practice page. When clicked it will
send an HTTP post request to the server of the information tracked in the
UI. It should also ask the user first if they are sure they want to end.
Then it will take the user back to the TeamPage.
*/
import React from 'react';

export default function EndButton() {
  return (
    <div className="EndButton">
      <button>End</button>
    </div>
  );
}
