// Renders team or athlete name and menu icon button or stopwatch

import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

export default function Header({ children, title }) {
  return (
    <Box py={1}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography
            variant="h4"
            noWrap
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
