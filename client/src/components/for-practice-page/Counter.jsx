// This component renders in the Main of PracticePage
// It renders once for each technique stored in techniqueChoice (state variable of App.js)

import React from 'react';
import { Grid, Box, Paper, Typography } from '@material-ui/core';

import MinusOneButton from './MinusOneButton';
import Reps from './Reps';
import PlusOneButton from './PlusOneButton';

export default function Counter({ technique, repCounts, setRepCounts }) {
  return (
    <Grid item>
      <Box pb={1}><Typography variant="button">{technique}</Typography></Box>
      <Paper>
        <Grid container alignItems="center" align="center" spacing={2}>
          <Grid item xs>
            <MinusOneButton repCounts={repCounts} setRepCounts={setRepCounts} technique={technique} />
          </Grid>
          <Grid item xs>
            <Paper variant="outlined"><Reps repCounts={repCounts} technique={technique} /></Paper>
          </Grid>
          <Grid item xs>
            <PlusOneButton setRepCounts={setRepCounts} technique={technique} />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
