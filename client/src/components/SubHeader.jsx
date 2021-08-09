// This component goes right underneath the Nav comp
import React from 'react';
import { Box, Grid } from '@material-ui/core';

// If either child within SubHeader is clicked the user will change the state of <Team />
export default function SubHeader({ children }) {
  return (
    <Box py={1}>
      <Grid container>
        {children}
      </Grid>
    </Box>
  );
}
