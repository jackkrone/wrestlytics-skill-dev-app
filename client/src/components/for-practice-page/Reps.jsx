// This component shows the number of Reps for a given technique

/*
Note: initially this component would not re-render when clicking MinusOne or PlusOne.
This source explains the issue: https://erikmartinjordan.com/react-rerender-props
React was not detecting a change in props, as I was modifying the original object
rather than replacing it. The solution was to use the spread operator in MinusOneButton
and in PlusOneButton
*/
import React from 'react';
import Typography from '@material-ui/core/typography';

export default function Reps({ repCounts, technique}) {
  return (
    <Typography variant="h6">{repCounts[technique].reps}</Typography>
  );
}
