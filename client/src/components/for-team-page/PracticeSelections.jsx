// This component goes in main when the practice tab is selected.
// It allows the user to set up a practice session.
// In the future, consider breaking this down into categories of techniques for example
// takedowns, escapes, etc and providing a dropdown list for each category.
// I must add a key="..." to each item. For more:
// https://reactjs.org/docs/lists-and-keys.html#keys

import React from 'react';
import { Grid, Container, Box, Select, InputLabel, MenuItem, Divider, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

export default function PracticeSelections({
  athletes, athleteChoice, setAthleteChoice, techniqueChoice, setTechniqueChoice,
}) {
  // Handle athlete choice
  const chooseAthlete = (event) => {
    console.log(event.target.value);
    // find id that corresponds to name saved in event.target.value
    // (seems like there must be a better way that doesn't require find id like this)
    let fullAthleteInfo = athletes.filter((elem) => elem.name === event.target.value);
    fullAthleteInfo = fullAthleteInfo[0]; // ensure there is only one result

    // use id in new athlete choice
    setAthleteChoice(fullAthleteInfo);
  };

  // Handle technique choice... change checked property to opposite value
  const handleChange = ({ target }) => {
    setTechniqueChoice(
      (prevChoice) => {
        const newChoice = JSON.parse(JSON.stringify(prevChoice));
        const index = target.id;
        newChoice[index].checked = !newChoice[index].checked;
        return newChoice;
      },
    );
  };

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Container>
          <FormControl fullWidth>
            <InputLabel id="Choose-Athlete-Label">Choose Athlete</InputLabel>
            <Select
              labelId="Choose-Athlete-Label"
              id="Choose Athlete"
              value={athleteChoice.name}
              onChange={chooseAthlete}
            >
              {athletes.map(
                (elem) => <MenuItem key={elem.id} value={elem.name}>{elem.name}</MenuItem>,
              )}
            </Select>
          </FormControl>
        </Container>
      </Grid>
      <Grid item>
        <Box py={2}>
        <Divider />
        </Box>
      </Grid>
      <Grid item>
        <Container>
          <FormControl>
            <Box pb={2}>
              <FormLabel component="legend">Choose Techniques:</FormLabel>
            </Box>
            <FormGroup>
              {techniqueChoice.map(
                (elem, index) => (
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={elem.checked}
                        onChange={handleChange}
                        name={elem.name}
                        id={index.toString()}
                      />
                    )}
                    label={elem.name}
                  />
                ),
              )}
            </FormGroup>
          </FormControl>
        </Container>
      </Grid>
    </Grid>
  );
}
