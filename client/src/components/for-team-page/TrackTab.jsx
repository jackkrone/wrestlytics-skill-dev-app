// This is the track tab
// Currently it is a button that does nothing

import React from 'react';
import { Button, Grid } from '@material-ui/core';

export default function TrackTab({ teamState, setTeamState }) {
  const handleClick = (event) => {
    setTeamState(event.currentTarget.value);
  };

  let variant = '';
  if (teamState === 'track') {
    variant = 'contained';
  } else {
    variant = 'outlined';
  }

  return (
    <Grid item xs>
      <Button
        variant={variant}
        onClick={handleClick}
        value="track"
        fullWidth
        disableElevation
        disableRipple
      >
        Track
      </Button>
    </Grid>
  );
}
