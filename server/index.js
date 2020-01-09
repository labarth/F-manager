const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const http = require('http');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);

const port = process.env.PORT || '3000';

app.set('port', port);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

server.listen(port);


const data = JSON.parse(fs.readFileSync('notes.txt', 'utf-8'));

const updateDataFile = (notes) => {
  fs.writeFileSync('notes.txt', notes);
};

app.get('/api/items', (req, res) => {
  res.send(JSON.stringify(data));
});

app.patch('/api/items', (req, res) => {
  const item = req.body;
  data.push(item);
  updateDataFile(JSON.stringify(data));
  res.sendStatus(200);
});
