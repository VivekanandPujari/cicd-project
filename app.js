const express = require('express');
const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('CI/CD Pipeline Project is running!');
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'App is healthy' });
});

// Start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

module.exports = app;