// Imports Express library
const express = require('express');
// Creates instance of Express app
const app = express();
// Sets prot number our server will listen on.
const PORT = 3000;

// Middleware to parse JSON bodies, adds middleware to parse incoming JSON requests. Makes req.body available to all routes.
app.use(express.json());

// Imports the appliances router - contains all of the GET/POST/DELETE logic for appliances.
const appliancesRouter = require('./routes/appliances');
// Mounts the above router to "/api/appliances" so that all routes defined in the router are prefixed by "/api/appliances".
app.use('/api/appliances', appliancesRouter);

// To test with NGROK - start server 'node server.js' - start ngrok tunnel 'ngrok http 3000'
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}/api/appliances`);
});