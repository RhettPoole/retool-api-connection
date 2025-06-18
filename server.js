// Imports Express library
const express = require('express');

// Creates Express app instance.
const app = express();
const PORT = 3000;

// Sample data to create and test endpoints
const appliances = [
    { id: 1, type: 'fridge', brand: 'Dometic', status: 'working', notes: 'No issues'},
    { id: 2, type: 'furnace', brand: 'Suburban', status: 'needs maintenance', notes: 'Ignition problem' }
];

/* Every route handler function in express receives two args, req/res. Even if we don't use req, we have to include it because express calls our handler with both arguments. */
// GET ALL ENDPOINT
app.get('/api/appliances', (req, res) => {
    res.json(appliances);
});

// GET BY ID ENDPOINT
app.get('/api/appliances/:id', (req, res) => {
    // Need to turn :id from a string to an int to search in array for id which is an int.
    const id = parseInt(req.params.id, 10);
    // Find appliance with matching id after parsing.
    const appliance = appliances.find(a => a.id === id);
    if (appliance) {
        res.json(appliance);
    } else {
        res.status(404).json({ error: 'Appliance not found' });
    }
});

// To test with NGROK - start server 'node server.js' - start ngrok tunnel 'ngrok http 3000'
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}/api/appliances`);
});