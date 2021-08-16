// This button goes in AthletePage footer
// When clicked, takes user back to TeamPage

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


export default function BackButton({ setAthleteChoice }) {
  // Click must reset athlete choice to default state
  const resetAthlete = () => {
    setAthleteChoice({ id: null, name: 'Choose Athlete' });
  };

  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Button variant="contained" fullWidth onClick={resetAthlete}>Back</Button>
    </Link>
  );
}
