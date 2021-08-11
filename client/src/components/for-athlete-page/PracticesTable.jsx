// This table goes in Main of AthletePage
// The comments in this file are not up to date
// They were created when designing an html table
// Now the table is done with Material UI components

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, TablePagination } from '@material-ui/core';

export default function PracticesTable({ techniquesList, practiceHistory }) {
  // Create an array of jsx table headers reading technique names
  const headers = techniquesList.map((elem) => <TableCell align="right">{elem.name}</TableCell>);

  console.log(practiceHistory);
  // For each practice in practiceHistory,
  // create a reps Array associated with the header columns of the table
  // Use practice date and an array of reps to create a full jsx table row (<tr>) entry
  // The table will have many null value entries as not every technique is chosen for every practice
  const bodyRows = [];
  // reverse the practiceHistory array to display most recent practices first
  // slice method copies practiceHistory and thus practiceHistory is not destroyed by reverse()
  practiceHistory.slice().reverse().forEach(
    (practice) => {
      // Create array of empty strings, length of array must be same as techniquesList
      const repsEntries = Array(techniquesList.length).fill('');
      // Fill array indices which correspond to techniques practiced with the correct number of reps
      practice.techniques.forEach(
        (technique) => {
          repsEntries[
            techniquesList.map((elem) => elem.id).indexOf(technique.technique_id)
          ] = technique.reps;
        },
      );
      // Add one complete jsx row to the nonHeaderRows array
      // Trim dates to only include yyyy-mm-dd
      bodyRows.push(
        (
          <TableRow>
            <TableCell component="th" scope="row">{practice.practiceDate.slice(0, 10)}</TableCell>
            {repsEntries.map((reps) => <TableCell align="right">{reps}</TableCell>)}
          </TableRow>
        ),
      );
    },
  );

  return (
    <TableContainer component={Paper}>
      <Table size="small" padding="none" style={{ tableLayout: 'fixed' }}>
        <TableHead>
          <TableRow>
            <TableCell>Practice Date</TableCell>
            {headers}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyRows}
        </TableBody>
        <TableFooter>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

