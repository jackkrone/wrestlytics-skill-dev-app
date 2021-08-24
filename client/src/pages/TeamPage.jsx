// This page appears after coach signs in, shows coach's team + track and practice tabs

import React from 'react';
import { Auth } from 'aws-amplify';
import { Container } from '@material-ui/core';

import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

import TrackTab from '../components/for-team-page/TrackTab';
import CompareButton from '../components/for-team-page/CompareButton';
import TrackSelections from '../components/for-team-page/TrackSelections';

import PracticeTab from '../components/for-team-page/PracticeTab';
import PracticeSelections from '../components/for-team-page/PracticeSelections';
import BeginButton from '../components/for-team-page/BeginButton';

export default function TeamPage({
  teamName, athletes, athleteChoice, setAthleteChoice, techniqueChoice,
  setTechniqueChoice, tabState, setTabState, updateFormState,
}) {
  // Sign out function
  const signOut = () => {
    Auth.signOut();
    updateFormState((prev) => ({ ...prev, formType: 'signUp' }));
  };

  // render TeamPage according to tabState
  let mainList;
  let footButton;
  if (tabState === 'track') {
    mainList = (
      <TrackSelections
        athletes={athletes}
        setAthleteChoice={setAthleteChoice}
      />
    );
    footButton = <CompareButton />;
  } else if (tabState === 'practice') {
    mainList = (
      <PracticeSelections
        athletes={athletes}
        setAthleteChoice={setAthleteChoice}
        athleteChoice={athleteChoice}
        setTechniqueChoice={setTechniqueChoice}
        techniqueChoice={techniqueChoice}
      />
    );
    footButton = <BeginButton />;
  }

  return (
    <Container maxWidth="sm">
      <Header title={teamName}>
        <Menu />
      </Header>
      <SubHeader>
        <TrackTab tabState={tabState} setTabState={setTabState} />
        <PracticeTab tabState={tabState} setTabState={setTabState} />
      </SubHeader>
      <Main>
        {mainList}
      </Main>
      <Footer>
        {footButton}
      </Footer>
      <br />
      <button onClick={signOut}>Sign Out</button>
    </Container>
  );
}
