const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.static(path.join(__dirname, 'build')));

// -------------------------- ROUTES -------------------------- //

// GET Root Route
app.all('*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

// -------------------------- START SERVER -------------------------- //

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));