const express = require('express');

const app = express();

const parsed = Number(process.env.PORT);
const PORT = Number.isNaN(parsed) ? 3000 : parsed;

app.get('/', async (req, res) => {

  const user = await getUser();

  res.send(`Hello ${user.name}`);
  res.send('Hello World');
});

const getUser = () => {
  if (Math.random() > 0.5) {
    return Promise.resolve({ name: 'World' });
  }
};

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${port}`);
});

Promise.reject('Unexpected rejection');
