// This is the main scrolling area on the screen
import React from 'react';
import { Box, Container } from '@material-ui/core';

export default function Main({ children }) {
  return (
    <Box py={1}>
      <Container>
        {children}
      </Container>
    </Box>
  );
}
