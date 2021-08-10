// The footer's main rendering job is to render it's children
import React from 'react';
import { Box } from '@material-ui/core';

export default function Footer({ children }) {
  return (
    <Box py={2}>
      {children}
    </Box>
  );
}
