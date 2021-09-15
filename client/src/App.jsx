/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // https://www.youtube.com/watch?v=aZGzwEjZrXc&t=12s
import TeamPage from './pages/TeamPage';
import PracticePage from './pages/PracticePage';
import AthletePage from './pages/AthletePage';
import appGet from './api/appGet';
import SignUp from './components/auth/SignUp';
import ConfirmSignUp from './components/auth/ConfirmSignUp';
import SignIn from './components/auth/SignIn';
import { Auth } from 'aws-amplify';

export default function App() {
  // set up amplify related state hooks
  const [formState, updateFormState] = useState({ username: '', password: '', email: '', authCode: '', formType: 'signUp' });
  const [username, updateUsername] = useState(null);
  useEffect(()=> { checkUser() }, []);
  
  // set up other state hooks
  const [tabState, setTabState] = useState('track');
  const [athleteChoice, setAthleteChoice] = useState({id: null, name: ''});
  const [userVars, setUserVars] = useState(null);
  const [techniqueChoice, setTechniqueChoice] = useState(null);
  const userReference = useRef(false);
  useEffect(() => { appGet(setUserVars, username, userReference) }, [username]);
  useEffect(() => { userUpdated() }, [userVars]);

  // Reset and adjust relevant state vars when the user is updated
  // Add useRef variable that prevents userUpdated from doing anything until an initial user is chosen
  const userUpdated = () => {
    if (userReference.current) {
      setTabState('track');
      setAthleteChoice({id: null, name: ''});
      const newTechniqueChoice = JSON.parse(JSON.stringify(userVars.techniquesList));
      newTechniqueChoice.map((elem) => elem.checked = false);
      setTechniqueChoice(newTechniqueChoice);
    }
  };

  // Check if a user is already signed in
  // If no currently authenticated username then error message will log
  async function checkUser() {
    try {
      const userObj = await Auth.currentAuthenticatedUser();
      updateUsername(userObj.username);
      updateFormState(() => ({ ...formState, formType: "signedIn"}));
    } catch (err) {
      console.error(err.message);
      console.log('No currently authenticated user');
    }
  }

  // handle changes to sign in and signup forms
  function handleChange(event) {
    event.persist(); // https://findanyanswer.com/what-is-event-persist
    updateFormState(() => ({ ...formState, [event.target.name]: event.target.value }));
  }

  // render app conditional on formState & implement using short circuiting
  const { formType } = formState;
  return (
    <>
      {
        formType === 'signUp' && (
          <SignUp
            updateFormState={updateFormState}
            formState={formState}
            handleChange={handleChange}
          />
        )
      }
      {
        formType === 'confirmSignUp' && (
          <ConfirmSignUp
            updateFormState={updateFormState}
            formState={formState}
            handleChange={handleChange}
          />
        )
      }
      {
        formType === 'signIn' && (
          <SignIn
            updateUsername={updateUsername}
            updateFormState={updateFormState}
            formState={formState}
            handleChange={handleChange}
          />
        )
      }
      {/* Problem: appGet won't run until after App renders the first time because it is an async function.
          Solution: render a loading page while the async function is retreiving the data */}
      { formType === 'signedIn' && !userVars && <h3 style={{ textAlign: 'center' }}>loading...</h3> }
      {
        formType === 'signedIn' && userVars && (
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
                      coachName={userVars.coachName}
                      coachId={userVars.coachId}
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
                      updateFormState={updateFormState}
                      coachName={userVars.coachName}
                      coachId = {userVars.coachId}
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