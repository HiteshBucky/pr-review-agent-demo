const express = require('express');

const app = express();

const PORT = parseInt(process.env.PORT, 10) || 3000;

app.get('/', async (req, res) => {
  try {
    const user = await getUser();
    res.send(`Hello ${user?.name ?? 'World'}`);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Internal Server Error');
  }
});

const getUser = () => {
  return Promise.resolve({ name: 'World' });
};

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

