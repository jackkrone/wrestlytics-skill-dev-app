2021.07.25:
After configuring eslint, the app would not run do to the numerous errors that eslint was throwing.
I found the following solution on stack overflow:
  + https://stackoverflow.com/questions/56333488/how-do-i-make-my-react-app-still-run-with-lint-errors
  + "in node modules, react scripts, config, webpack.config.js file, I looked for the ESLintPlugin, and added as an option:
  `failOnError: false`"
  + I also added `failOnWarning: false`. These can be deleted in the future if/when all linting errors are addressed.
  + note that these comments are regarding the front end node_modules in the client directory