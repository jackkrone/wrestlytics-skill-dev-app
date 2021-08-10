/*
This button goes in the footer of the Practice page. When clicked it will
send an HTTP post request to the server of the information tracked in the
UI. It should also ask the user first if they are sure they want to end.
Then it will take the user back to the TeamPage.
*/
import React from 'react';
import { Link } from 'react-router-dom';
import practicePagePost from '../../api/practicePagePost';

export default function EndButton({
  teamId, repCounts, athleteChoice, setAthleteChoice, setTechniqueChoice, setTabState,
}) {
  const endPracticeSession = () => {
    // 1a. send Post request
    // 1b. in future start with a modal that asks if the user is sure they want to end the session
    practicePagePost(teamId, athleteChoice.id, Object.values(repCounts));

    // 2. reset relevant states to their defaults
    setTabState('practice');
    setAthleteChoice({ id: null, name: 'Choose Athlete' });
    setTechniqueChoice(null); // This will trigger a re-setting in App.jsx
    // I think you would also need to reset repCounts but the console.log()s
    // in MinusOneButton and PlusOneButton indicate this is not necessary
  };

  return (
    <div className="EndButton">
      <Link to="/">
        <button onClick={endPracticeSession}>End</button>
      </Link>
    </div>
  );
}
