// appGet is a get request that goes in the App.jsx file

const appGet = async (setUserVars) => {
  try {
    const response = await fetch('http://localhost:5000/');
    const parsedResponse = await response.json(); // parses json response first
    setUserVars(parsedResponse);
  } catch (err) {
    console.error(err.message);
  }
};

export default appGet;
