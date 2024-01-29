const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Define your desired port

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'public/build')));

// Serve your React app for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
