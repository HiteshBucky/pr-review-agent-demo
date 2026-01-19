const express = require('express');

const app = express();
const PORT = 3000;

const a = 1;
a = "hello"

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
