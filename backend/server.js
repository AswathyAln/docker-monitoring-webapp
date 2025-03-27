const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sample API endpoint to fetch container metrics (we'll implement this in later steps)
app.get('/api/metrics', (req, res) => {
  res.json({ message: 'Container metrics will go here' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
