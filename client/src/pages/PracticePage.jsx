// This page is the rep counter
// This is the main function of the app. It's what you use while you practice

import React, { useState } from 'react';
import { Container, Box, Grid } from '@material-ui/core';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Stopwatch from '../components/for-practice-page/Stopwatch';
import EndButton from '../components/for-practice-page/EndButton';
import Counter from '../components/for-practice-page/Counter';

export default function PracticePage({
  teamId, athleteChoice, setAthleteChoice, techniqueChoice, setTechniqueChoice, setTabState,
}) {
  // filter techniqueChoice to only include techniques with checked === true
  const techniqueChoiceFiltered = techniqueChoice.filter((elem) => elem.checked);

  // set up state hook for rep numbers
  // default repCounts is an object with a key of each technique with a value of 0
  const [repCounts, setRepCounts] = useState(
    () => {
      const defaultRepState = {};
      techniqueChoiceFiltered.map((elem) => defaultRepState[elem.name] = {id: elem.id, reps: 0});
      console.log(defaultRepState);
      return defaultRepState;
    },
  );

  return (
    <Container maxWidth="sm">
      <Header title={athleteChoice.name}>
        <Stopwatch />
      </Header>
      <Main>
        <Box pt={2}>
          <Grid container direction="column" spacing={3}>
            {/* Render a Counter component for each technique chosen */}
            {techniqueChoiceFiltered.map(
              (elem) => (
                <Counter
                  technique={elem.name}
                  key={elem.id}
                  repCounts={repCounts}
                  setRepCounts={setRepCounts}
                />
              ),
            )}
          </Grid>
        </Box>
      </Main>
      <Footer>
        <EndButton
          teamId={teamId}
          repCounts={repCounts}
          setRepCounts={setRepCounts}
          athleteChoice={athleteChoice}
          setAthleteChoice={setAthleteChoice}
          setTechniqueChoice={setTechniqueChoice}
          setTabState={setTabState}
        />
        {/* SpeechButton /> ... maybe unnecessary -- listen automatically */}
      </Footer>
    </Container>
  );
}
