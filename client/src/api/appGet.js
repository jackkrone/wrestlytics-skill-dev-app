// appGet is a get request that is called in the App.jsx file
// It GETs all relevant team and athlete info for the user

const appGet = async (setUserVars, username, userReference) => {
  // Do nothing if no username is provided
  if (!username) {
    return;
  }

  // Request user's team and athlete info if username is provided
  try {
    const response = await fetch(`http://localhost:5000/${username}`);
    const parsedResponse = await response.json(); // parses json response first
    setUserVars(parsedResponse);
    // Update userReference to indicate a user has been chosen
    userReference.current = true;
  } catch (err) {
    console.error(err.message);
  }
};

export default appGet;
