// This component is disabled
// In the future it will count up from 0 as the practice goes on

import React from 'react';
import Button from '@material-ui/core/button';

export default function Stopwatch() {
  return (
    <Button variant="outlined" size="large" disabled>00:00</Button>
  )
}