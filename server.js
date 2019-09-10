
const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const request = require('request');

const app = express();
app.disable('x-powered-by');
app.use(cors());

// check requests
// const morgan = require('morgan');
// app.use(morgan('combined'));

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/memory-considerate-image', (req, res) => {
  const deviceMemory = req.headers['device-memory'];
  console.log('[server memory-considerate-image request] Device Memory => ', deviceMemory);
  const url = deviceMemory < 1 ?
    'https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmin-res.jpg?v=1562842586912' :
    'https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmax-res.jpg?v=1562842587982';

  try {
    request.get(url).pipe(res);
  } catch (error) {
    console.log('[server memory-considerate-image request proxy] error => ', error);
    res.json({error});
  }
});

app.use(express.static(path.join(__dirname, 'build')));

// need to declare a 'catch all' route on your express server 
// that captures all page requests and directs them to the client
// the react-router do the route part
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(
  process.env.PORT || 5000,
  () => {
    console.log(`Frontend start on http://localhost:5000`);
  }
);
