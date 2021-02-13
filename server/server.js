const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

/**
 * require routers
 */
const apirouter = require('./routes/api.js');
const favsrouter = require('./routes/favs.js');
const charrouter = require('./routes/characters.js');

/**
 * handle parsing request body
 */
app.use(bodyParser.json());

/**
 * handle requests for static files
 */
app.use('/assets', express.static(path.join(__dirname, '../client/assets')));

/**
 * define route handlers
 */
app.use('/api', apirouter);
app.use('/api/favs', favsrouter);
app.use('/api/characters', charrouter);

// route handler to respond with main app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// catch-all route handler for any requests to an unknown route
app.get('*', (req, res) => {
  res.status(404).send('404 Not found');
});

/**
 * configire express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
// eslint-disable-next-line no-unused-vars

app.use(function(err, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).send(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
