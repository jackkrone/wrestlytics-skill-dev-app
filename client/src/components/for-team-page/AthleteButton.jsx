// this renders each athlete name in a button
// when clicked, it will link to AthletePage and set athleteChoice appropriately

import { Link } from 'react-router-dom';

export default function AthleteButton({ athleteName, athleteId, setAthleteChoice }) {
  // set athlete choice when user clicks athlete button
  const chooseAthlete = () => {
    setAthleteChoice({ id: athleteId, name: athleteName });
  };

  return (
    <li key={athleteId}>
      <Link to="/athlete">
        <button onClick={chooseAthlete}>{athleteName}</button>
      </Link>
    </li>
  );
}
