// This component renders in the Main of PracticePage
// It renders once for each technique stored in techniqueChoice (state variable of App.js)

import React from 'react';
import MinusOneButton from './MinusOneButton';
import Reps from './Reps';
import PlusOneButton from './PlusOneButton';

export default function Counter({ technique, repCounts, setRepCounts }) {
  return (
    <div className="Counter">
      <h5>{technique}</h5>
      <MinusOneButton repCounts={repCounts} setRepCounts={setRepCounts} technique={technique} />
      <Reps repCounts={repCounts} technique={technique} />
      <PlusOneButton setRepCounts={setRepCounts} technique={technique} />
    </div>
  );
}
