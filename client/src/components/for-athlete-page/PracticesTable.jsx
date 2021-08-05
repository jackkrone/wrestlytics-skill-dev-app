// This table goes in Main of AthletePage

export default function PracticesTable({ techniquesList, practiceHistory }) {
  // Create an array of jsx table headers reading technique names
  const headers = techniquesList.map((elem) => <th>{elem.name}</th>);

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
          repsEntries[technique.technique_id - 1] = technique.reps;
        },
      );
      // Add one complete jsx row to the nonHeaderRows array
      // Trim dates to only include yyyy-mm-dd
      bodyRows.push(
        (
          <tr>
            <td>{practice.practiceDate.slice(0, 10)}</td>
            {repsEntries.map((reps) => <td>{reps}</td>)}
          </tr>
        ),
      );
    },
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Practice Date</th>
          {headers}
        </tr>
      </thead>
      <tbody>
        {bodyRows}
      </tbody>
    </table>
  );
}
