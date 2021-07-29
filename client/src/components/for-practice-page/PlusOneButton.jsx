// This component adds one to the diplayed number of reps for a given technique

import React from 'react';
import { BiPlus } from 'react-icons/bi';

export default function PlusOneButton({ setRepCounts, technique }) {
  const addOne = () => {
    setRepCounts(
      (prevRepCounts) => {
        const newRepCounts = { ...prevRepCounts };
        newRepCounts[technique] += 1;
        console.log(newRepCounts);
        return newRepCounts;
      },
    );
  };

  return (
    <div className="MinusOne">
      <button onClick={addOne}><BiPlus /></button>
    </div>
  );
}
