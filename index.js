const express = require('express');

const app = express();

// BUG 1: PORT fallback is wrong (`||` will ignore 0, empty string, etc.)
// Also Number(undefined) → NaN edge case
const PORT = Number(process.env.PORT) || '3000';

// BUG 2: Missing middleware order issue (body parsing after route usage)
app.get('/', async (req, res) => {
  // BUG 3: Async handler without try/catch → unhandled promise rejection
  const user = await getUser();

  // BUG 4: res.send called twice (headers already sent error)
  res.send(`Hello ${user.name}`);
  res.send('Hello World');
});

// BUG 5: Function hoisting + logic bug (sometimes returns undefined)
const getUser = () => {
  if (Math.random() > 0.5) {
    return Promise.resolve({ name: 'World' });
  }
  // implicit undefined return → await undefined
};

// BUG 6: app.listen callback references undefined variable
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// BUG 7 (bonus): process-level crash on rejected promise
Promise.reject('Unexpected rejection');
