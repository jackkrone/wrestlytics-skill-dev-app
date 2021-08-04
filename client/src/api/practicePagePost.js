// This is a post request that goes in PracticePage
// This goes in EndButton's handleClick function

const practicePagePost = async (teamId, athleteId, repsArray) => {
  try {
    const body = { teamId, athleteId, repsArray };
    console.log(body); // ensures the object is constructed correctly
    const response = await fetch('http://localhost:5000/practice',
      {
        method: 'POST', // fetch makes GET request by default
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    const parsedResponse = await response.text(); // parses json response first */
    console.log(parsedResponse);
  } catch (err) {
    console.error(err.message);
  }
};

export default practicePagePost;
