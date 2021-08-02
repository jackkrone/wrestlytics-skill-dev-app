/*
{
1: {name: "Double Leg Takedown", checked: false},
2: {name: "Single Leg Takedown", checked: false},
3: {name: "Arm Chop", checked: true},
4: {name: "Half Nelson", checked: false},
5: {name: "Standup", checked: false}
}
*/




// This page is the rep counter
// This is the main function of the app. It's what you use while you practice

import React, { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import EndButton from '../components/for-practice-page/EndButton';
import Counter from '../components/for-practice-page/Counter';

export default function PracticePage({ techniqueChoice, athleteChoice }) {
  // format techniqueChoice object into array for mapping over with counter components
  let techniquesToList = [];
  for (const [key, value] of Object.entries(techniqueChoice)) {
    if (value.checked) {
      techniquesToList.push({id: key, name: value.name});
    }
  }
  console.log(techniquesToList);

  // set up state hook for rep numbers
  // default repCounts is an object with a key of each technique with a value of 0
  const [repCounts, setRepCounts] = useState(
    () => {
      const defaultRepState = {};
      techniquesToList.map((elem) => defaultRepState[elem.name] = {id: elem.id, reps: 0});
      console.log(defaultRepState);
      return defaultRepState;
    },
  );

  return (
    <div className="PracticePage">
      <Header title={athleteChoice.name}>
        {/* athlete name needs to be passed as props */}
        {/* <Stopwatch /> ...to be created later */}
      </Header>
      <Main>
        {/* Render a Counter component for each technique chosen */}
        {techniquesToList.map(
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
          repCounts={repCounts}
        />
        {/* SpeechButton /> ... maybe unnecessary -- listen automatically */}
      </Footer>
    </div>
  );
}
