/* Hello World, start by running 'node server.js' */

// Imports Express library
const express = require('express');
// Creates Express app instance.
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});