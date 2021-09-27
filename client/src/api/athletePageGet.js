// athleteGet is a GET request for a specific athlete's practice history

// Should send a get request with a router parameter such as "/athlete/:id"

const athletePageGet = async (teamId, athleteId, setPracticeHistory) => {
  try {
    const response = await fetch(`http://localhost:5001/athlete/?teamId=${teamId}&athleteId=${athleteId}`);
    const parsedResponse = await response.json();
    setPracticeHistory(parsedResponse);
  } catch (err) {
    console.error(err.message);
  }
};

export default athletePageGet;
