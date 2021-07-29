// This component subtracts one from the diplayed number of reps for a given technique

import React from 'react';
import { BiMinus } from 'react-icons/bi';

export default function MinusOneButton({ repCounts, setRepCounts, technique }) {
  const subtractOne = () => {
    if (repCounts[technique] !== 0) {
      setRepCounts(
        (prevRepCounts) => {
          const newRepCounts = { ...prevRepCounts };
          newRepCounts[technique] -= 1;
          console.log(newRepCounts);
          return newRepCounts;
        },
      );
    }
  };

  return (
    <div className="MinusOne">
      <button onClick={subtractOne}><BiMinus /></button>
    </div>
  );
}
