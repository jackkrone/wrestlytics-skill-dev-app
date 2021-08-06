// This component subtracts one from the diplayed number of reps for a given technique

import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

export default function MinusOneButton({ repCounts, setRepCounts, technique }) {
  const subtractOne = () => {
    if (repCounts[technique].reps !== 0) {
      setRepCounts(
        (prevRepCounts) => {
          const newRepCounts = JSON.parse(JSON.stringify(prevRepCounts));
          newRepCounts[technique].reps -= 1;
          console.log(newRepCounts);
          return newRepCounts;
        },
      );
    }
  };

  return (
    <IconButton onClick={subtractOne}>
      <RemoveRoundedIcon />
    </IconButton>
  );
}
