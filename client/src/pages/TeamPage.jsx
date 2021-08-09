// This page appears after coach signs in, shows coach's team + track and practice tabs

import React, { useState } from 'react';
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
  teamName, athletes, athleteChoice, setAthleteChoice,
  techniqueChoice, setTechniqueChoice,
}) {
  // set up state hooks
  const [teamState, setTeamState] = useState('track');

  // render TeamPage according to teamState
  let mainList;
  let footButton;
  if (teamState === 'track') {
    mainList = (
      <TrackSelections
        athletes={athletes}
        setAthleteChoice={setAthleteChoice}
      />
    );
    footButton = <CompareButton />;
  } else if (teamState === 'practice') {
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
        <TrackTab teamState={teamState} setTeamState={setTeamState} />
        <PracticeTab teamState={teamState} setTeamState={setTeamState} />
      </SubHeader>
      <Main>
        {mainList}
      </Main>
      <Footer>
        {footButton}
      </Footer>
    </Container>
  );
}
