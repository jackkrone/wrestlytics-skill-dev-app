import React from 'react';
import { Container, Grid, Button, Box, TextField, Typography } from '@material-ui/core';
import { Auth } from 'aws-amplify';

export default function SignIn({ updateUsername, updateFormState, formState, handleChange }) {
  async function signIn() {
    const { username, password } = formState;
    await Auth.signIn(username, password);
    updateUsername(username); // This triggers userVars useEffect callback function
    updateFormState(() => ({ ...formState, formType: 'signedIn' }));
  }

  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h3" align="center">WRESTLYTICS</Typography>
          </Grid>
          <Grid item>
            <TextField fullWidth name="username" label="username" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item>
            <TextField fullWidth name="password" label="password" type="password" variant="outlined" onChange={handleChange} />
          </Grid>
          <Grid item>
            <Button fullWidth variant="contained" onClick={signIn}>Sign In</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
