// This component renders in the track tab view of TeamPage
// For more on why each <li> has a key="...":
// https://reactjs.org/docs/lists-and-keys.html#keys

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

import AthleteButton from './AthleteButton';

export default function TrackSelections({ athletes, setAthleteChoice }) {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        {/* Eventually convert below to its own component */}
        <Button
          variant="contained"
          fullWidth
        >
          Team Data
        </Button>
      </Grid>
      {athletes.map(
        (elem) => (
          <Grid item>
            <AthleteButton
              athleteName={elem.name}
              athleteId={elem.id}
              setAthleteChoice={setAthleteChoice}
            />
          </Grid>
        ),
      )}
      <Grid item>
        {/* Eventually convert below to its own component */}
        <Button
          variant="contained"
          startIcon={<AddRoundedIcon />}
          fullWidth
        >
          Add Athlete
        </Button>
      </Grid>
    </Grid>
  );
}
