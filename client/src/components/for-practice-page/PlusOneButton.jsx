// This component adds one to the diplayed number of reps for a given technique

import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

export default function PlusOneButton({ setRepCounts, technique }) {
  const addOne = () => {
    setRepCounts(
      (prevRepCounts) => {
        const newRepCounts = JSON.parse(JSON.stringify(prevRepCounts));
        newRepCounts[technique].reps += 1;
        console.log(newRepCounts);
        return newRepCounts;
      },
    );
  };

  return (
    <IconButton onClick={addOne}>
      <AddRoundedIcon />
    </IconButton>
  );
}
