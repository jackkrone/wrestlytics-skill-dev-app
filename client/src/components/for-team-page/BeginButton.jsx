// This button goes in the footer of the Team page when "practice" is selected in the SubHeader
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function BeginButton() {
  return (
    <div className="BeginButton">
      <Link to="/practice" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          fullWidth
        >
          Begin
        </Button>
      </Link>
    </div>
  );
}
