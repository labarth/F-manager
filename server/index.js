const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const data = [
  {
    id: '1',
    price: '400',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: '2',
    price: '550',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: '3',
    price: '430',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: '4',
    price: '500',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: '5',
    price: '450',
    description: 'Lorem ipsum dolor sit amet.',
  },
];

app.get('/api/items', (req, res) => {
  res.send(JSON.stringify(data));
});

app.post('/api/items', (req, res) => {
  const item = req.body;
  data.push(item);
  res.json(data);
});

app.patch('/api/items', (req, res) => {
  const item = req.body;
  data.push(item);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
