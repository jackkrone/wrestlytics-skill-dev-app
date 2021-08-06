// This page is the rep counter
// This is the main function of the app. It's what you use while you practice

import React, { useState } from 'react';
import { Container } from '@material-ui/core';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import EndButton from '../components/for-practice-page/EndButton';
import Counter from '../components/for-practice-page/Counter';

export default function PracticePage({
  teamId, athleteChoice, setAthleteChoice, techniqueChoice, setTechniqueChoice,
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
        {/* athlete name needs to be passed as props */}
        {/* <Stopwatch /> ...to be created later */}
      </Header>
      <Main>
        {/* Render a Counter component for each technique chosen */}
        {techniqueChoiceFiltered.map(
          (elem) => (
            <Counter
              technique={elem.name}
              key={elem.id}
              repCounts={repCounts}
              setRepCounts={setRepCounts}
            />
          )
        )}
      </Main>
      <Footer>
        <EndButton
          teamId={teamId}
          repCounts={repCounts}
          setRepCounts={setRepCounts}
          athleteChoice={athleteChoice}
          setAthleteChoice={setAthleteChoice}
          setTechniqueChoice={setTechniqueChoice}
        />
        {/* SpeechButton /> ... maybe unnecessary -- listen automatically */}
      </Footer>
    </Container>
  );
}
