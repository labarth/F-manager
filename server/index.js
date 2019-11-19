const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

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

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
