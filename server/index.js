const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const http = require('http');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

const server = http.createServer(app);

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

function onListening() {
  var addr = server.address();
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}


const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const data = JSON.parse(fs.readFileSync('notes.txt', 'utf-8'));

const updateDataFile = (notes) => {
  fs.writeFileSync('notes.txt', notes);
};

app.get('/api/items', (req, res) => {
  res.send(JSON.stringify(data));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'));
});

app.patch('/api/items', (req, res) => {
  const item = req.body;
  data.push(item);
  updateDataFile(JSON.stringify(data));
  res.sendStatus(200);
});

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
