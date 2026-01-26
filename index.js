const express = require('express');

const app = express();

const PORT = Number(process.env.PORT) || '3000';

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
