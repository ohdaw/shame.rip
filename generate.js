const express = require('express');
const app = express();
const port = 3000;

app.get('/api/generate', (req, res) => {
  const { length } = req.query;
  const randomNumber = Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
  res.json({ randomNumber });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
