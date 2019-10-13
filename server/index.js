const express = require('express');
const app = express();

const data = [
  {
    title: 'title 1',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    title: 'title 2',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    title: 'title 3',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    title: 'title 4',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    title: 'title 5',
    description: 'Lorem ipsum dolor sit amet.',
  },
];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/items', function (req, res) {
  res.send(JSON.stringify(data));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});