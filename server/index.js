const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./router.js');

const app = express();

const PORT = 3000;

// allow cross-origin requests
app.use(cors());

// use body parser to add body property to req obj
app.use(bodyParser.json());

// serve static files to browser
app.use(express.static(path.join(__dirname, '../client/dist/')));

// send test response from server
app.get('/greeting', (req, res) => {
  res.status(200).send('Hello from the server!');
});

// route all reqs for data to router file
app.use('/api', router);

// launch server and listen on specified port
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}!`);
});