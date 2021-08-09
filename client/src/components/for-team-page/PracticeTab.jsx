// This is the practice tab
// Clicking on it will update the state of the Team page
// Must use event.currentTarget instead of event.target for click handler:
// https://stackoverflow.com/questions/61897466/adding-onclick-to-ui-material-button

import React from 'react';
import { Button, Grid } from '@material-ui/core';

export default function PracticeTab({ teamState, setTeamState }) {
  const handleClick = (event) => {
    setTeamState(event.currentTarget.value);
  };

  let variant = '';
  if (teamState === 'practice') {
    variant = 'contained';
  } else {
    variant = 'outlined';
  }

  return (
    <Grid item xs>
      <Button
        variant={variant}
        onClick={handleClick}
        value="practice"
        fullWidth
        disableElevation
        disableRipple
      >
        Practice
      </Button>
    </Grid>
  );
}
