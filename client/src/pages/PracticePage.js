// This page is the rep counter
// This is the main function of the app. It's what you use while you practice

import React, { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import EndButton from '../components/for-practice-page/EndButton';
import Counter from '../components/for-practice-page/Counter';

export default function PracticePage(props) {
  // set up state hook for rep numbers
  // default repCounts is an object with a key of each technique with a value of 0
  const [repCounts, setRepCounts] = useState(
    () => {
      const defaultRepState = {};
      props.techniqueChoice.map((tech) => defaultRepState[tech] = 0);
      console.log(defaultRepState);
      return defaultRepState;
    },
  );

  return (
    <div className="PracticePage">
      <Header title={props.athleteChoice}>
        {' '}
        {/* athlete name needs to be passed as props */}
        {/* <Stopwatch /> ...to be created later */}
      </Header>
      <Main>
        {/* Render a Counter component for each technique chose */}
        {props.techniqueChoice.map(
          (tech, index) => (
            <Counter
              technique={tech}
              key={index}
              repCounts={repCounts}
              setRepCounts={setRepCounts}
            />
          ),
        )}
      </Main>
      <Footer>
        <EndButton repCounts={repCounts} />
        {/* SpeechButton /> ... maybe unnecessary -- listen automatically */}
      </Footer>
    </div>
  );
}
