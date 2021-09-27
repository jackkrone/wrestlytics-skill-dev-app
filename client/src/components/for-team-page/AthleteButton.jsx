// this renders each athlete name in a button
// when clicked, it will link to AthletePage and set athleteChoice appropriately

import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function AthleteButton({ athleteName, athleteId, setAthleteChoice }) {
  // set athlete choice when user clicks athlete button
  const chooseAthlete = () => {
    setAthleteChoice({ id: athleteId, name: athleteName });
  };

  return (
    <div>
      <Link to="/athlete" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          onClick={chooseAthlete}
          fullWidth
        >
          {athleteName}
        </Button>
      </Link>
    </div>
  );
}
