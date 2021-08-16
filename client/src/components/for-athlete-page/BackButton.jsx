// This button goes in AthletePage footer
// When clicked, takes user back to TeamPage

import { Link } from 'react-router-dom';

export default function BackButton({ setAthleteChoice }) {
  // Click must reset athlete choice to default state
  const resetAthlete = () => {
    setAthleteChoice({ id: null, name: 'Choose Athlete' });
  };

  return (
    <Link to="/">
      <button onClick={resetAthlete}>Back</button>
    </Link>
  );
}
