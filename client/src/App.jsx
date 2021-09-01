/* eslint-disable */
import React, { useState, useEffect } from 'react';
/* Resource on following import: https://www.youtube.com/watch?v=aZGzwEjZrXc&t=12s
    + Note that react route uses partial matching, so keyword exact is crucial */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TeamPage from './pages/TeamPage';
import PracticePage from './pages/PracticePage';
import AthletePage from './pages/AthletePage';
import appGet from './api/appGet';

import { Container, Grid, Button, Box, TextField, Typography } from '@material-ui/core';

import { Auth, Hub } from 'aws-amplify';


export default function App() {
  // set up amplify related state hooks
  // ==================================
  const [formState, updateFormState] = useState({ username: '', password: '', email: '', authCode: '', formType: 'signUp' });
  const [user, updateUser] = useState(null);
  useEffect(()=> { checkUser() }, []);

  // If there is no currently authenticated user then the error message will log
  // No need to create a conditional on the updateUser function
  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log('user: ', user );
      updateUser(user);
      updateFormState(() => ({ ...formState, formType: "signedIn"}));
    } catch (err) {
      console.error(err.message);
    }
  }

  // set up other state hooks
  // ========================
  const [tabState, setTabState] = useState('track');
  const [athleteChoice, setAthleteChoice] = useState({id: null, name: ''});
  const [userVars, setUserVars] = useState(null); // This is necessary because useEffect's callback calls an async function
  const [techniqueChoice, setTechniqueChoice] = useState(null);
  // ^^^ You can't set initial state here as it requires userVars' updated form after useEffect API call
  // set techniqueChoice initial state at the beggining of TechniqueSelections component

  // GET request for athletes, techniques, teamName
  // console.log() is only used to indicate when useEffect is running
  useEffect(() => {appGet(setUserVars); console.log('userVars retreived');}, []);

  // useEffect's callback won't run until after the this comp renders the first time.
  // Problem: it needs the variables from appGet to render and pass props correctly.
  // Solution: force a first render that renders null.
  if (userVars === null) {
    return null;
  };

  // The following if block sets techniqueChoice's initial state in a sense
  // It can't be set in useState() because it relies on the useEffect API call  
  if (techniqueChoice === null) {
    const newTechniqueChoice = JSON.parse(JSON.stringify(userVars.techniquesList));
    newTechniqueChoice.map((elem) => elem.checked = false);
    setTechniqueChoice(newTechniqueChoice);
  }

  // Auth stuff from here down
  // =========================
  function onChange(event) {
    event.persist(); // https://findanyanswer.com/what-is-event-persist
    updateFormState(() => ({ ...formState, [event.target.name]: event.target.value }));
  }

  const { formType } = formState;
  async function signUp() {
    const { username, email, password } = formState;
    await Auth.signUp({ username, password, attributes: { email }});
    updateFormState(() => ({ ...formState, formType: 'confirmSignUp'}));
  }

  async function confirmSignUp() {
    const { username, authCode } = formState;
    await Auth.confirmSignUp(username, authCode);
    updateFormState(() => ({ ...formState, formType: 'signIn'}));
  }

  async function signIn() {
    const { username, password } = formState;
    await Auth.signIn(username, password);
    updateFormState(() => ({ ...formState, formType: 'signedIn'}));
  }

  return (
    <>
      {
        formType === 'signUp' && (
          <>
            <button onClick={() => updateFormState(() => ({ ...formState, formType: 'signIn'}))}>Sign In</button>
            <br />
            <input name="username" onChange={onChange} placeholder="username" />
            <input name="password" type="password" onChange={onChange} placeholder="password" />
            <input name="email" onChange={onChange} placeholder="email" />
            <button onClick={signUp}>Sign Up</button>
          </>
        )
      }
      {
        formType === 'confirmSignUp' && (
          <>
            <input name="authCode" onChange={onChange} placeholder="confirmation code" />
            <button onClick={confirmSignUp}>Confirm Sign Up</button>
          </>
        )
      }
      {
        formType === 'signIn' && (
          <Container maxWidth="sm">
            <Box mt={10}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h3" align="center">WRESTLYTICS</Typography>
                </Grid>
                <Grid item>
                  <TextField fullWidth name="username" label="username" variant="outlined" onChange={onChange}/>
                </Grid>
                <Grid item>
                  <TextField fullWidth name="password" label="password" type="password" variant="outlined" onChange={onChange}/>
                </Grid>
                <Grid item>
                  <Button fullWidth variant="contained" onClick={signIn}>Sign In</Button>
                </Grid>
              </Grid>
            </Box>
          </ Container>
        )
      }
      {
        formType === 'signedIn' && (
          <Router>
            <Switch>
              <Route exact path="/" render={
                (routeProps) => {
                  return (
                    <TeamPage {...routeProps}
                      teamName={userVars.teamName}
                      athletes={userVars.athletesList}
                      athleteChoice={athleteChoice}
                      setAthleteChoice={setAthleteChoice}
                      techniqueChoice={techniqueChoice}
                      setTechniqueChoice={setTechniqueChoice}
                      tabState={tabState}
                      setTabState={setTabState}
                      updateFormState = {updateFormState}
                    />
                  )
                }
              }/>
            
              <Route exact path="/practice" render={
                (routeProps) => {
                  return (
                    <PracticePage {...routeProps}
                      teamId={userVars.teamId}
                      activityId={userVars.activityId}
                      athleteChoice={athleteChoice}
                      setAthleteChoice={setAthleteChoice}
                      techniqueChoice={techniqueChoice}
                      setTechniqueChoice={setTechniqueChoice}
                      setTabState={setTabState}
                    />
                  )
                }
              }/>

              <Route exact path="/athlete" render={
                (routeProps) => {
                  return (
                    <AthletePage {...routeProps}
                      teamId={userVars.teamId}
                      athleteChoice={athleteChoice}
                      setAthleteChoice={setAthleteChoice}
                      techniquesList={userVars.techniquesList}
                    />
                  )
                }
              }/>

              {/* <Route path="*" component={404NotFound} ...create eventually with 404NotFound page */}
              {/* Guide: https://knowbody.github.io/react-router-docs/guides/NotFound.html */}
            </Switch>
          </Router>
        )
      }
    </>
  )
};