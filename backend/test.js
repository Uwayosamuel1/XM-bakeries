const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('🎉 This works!');
});

app.listen(PORT, () => {
  console.log(`🚀 Simple test server running at http://localhost:${PORT}`);
});
