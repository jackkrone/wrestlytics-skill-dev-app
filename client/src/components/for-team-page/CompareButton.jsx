// This button goes in the footer of the Team page when "track" is selected in the SubHeader
import React from 'react';
import { Button } from '@material-ui/core';

export default function CompareButton() {
  return (
    <Button variant="contained" fullWidth disabled>
      Compare
    </Button>
  );
}
