Update 2021.09.17:
==================
I improved this solution by including a .env variable in the npm start and npm build commands:
"scripts": {
  "start": "ESLINT_NO_DEV_ERRORS='true' react-scripts start",
  "build": "DISABLE_ESLINT_PLUGIN='true' react-scripts build",
  ...
},
  + This solution works much better as it is integrated into the package.json file and requires no extra setup before running the app
  + I don't think it's necessary to include anything wrt 'failOnWarning'
    + ESLint warnings don't seem to affect the apps ability to compile
  + ESLint is a devDependency, so I assumed production builds would be completely unaffected by the issue of ESLint errors
    + This was not the case and I had to include the DISABLE_ESLINT_PLUGIN variable in the build command

Resources:
  + Create React App advanced configuration .env variables: https://create-react-app.dev/docs/advanced-configuration
  + This issue ticket includes a comment from 2021/06/11 that describes what I did: https://github.com/facebook/create-react-app/issues/10021

2021.07.25:
===========
After configuring eslint, the app would not run do to the numerous errors that eslint was throwing.
I found the following solution on stack overflow:
  + https://stackoverflow.com/questions/56333488/how-do-i-make-my-react-app-still-run-with-lint-errors
  + "in node modules, react scripts, config, webpack.config.js file, I looked for the ESLintPlugin, and added as an option:
  `failOnError: false`"
  + I also added `failOnWarning: false`. These can be deleted in the future if/when all linting errors are addressed.
  + note that these comments are regarding the front end node_modules in the client directory