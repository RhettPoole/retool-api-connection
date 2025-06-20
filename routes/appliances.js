// Imports Express library
const express = require('express');
// Imports node's file system module with promise support, allows us to read/write files asynchronously.
const fs = require('fs/promises');
// Imports our middleware function that checks if the POST request body has all required fields.
const validateApplianceData = require('../middleware/validateApplianceData');
// Creates a new router object to define route handlers for appliances. The router object basically acts as a traffic controller. It can define paths and cecide what happens when each path is visited.
const router = express.Router();

// Async func that reads and parses the appliances.json file.
async function readData() {
    try {
        // Uses fs - FileState - to modify appliances.json
        const data = await fs.readFile('./data/appliances.json');
        return JSON.parse(data);
    } catch (error) {
        throw error;
    }
}

// GET ALL APPLIANCES, reads appliances from the JSON file and returns them as JSON.
router.get('/', async (req, res) => {
    try {
        const data = await readData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read appliances' });
    }
});

// GET APPLIANCE BY ID, converts id from the URL to an int instead of string, reads all appliances and finds the one with the matching ID
router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const data = await readData();
        const appliance = data.find(a => a.id === id);
        if (appliance) {
            res.json(appliance);
        } else {
            res.status(404).json({ error: 'Appliance not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to read appliances' });
    }
});

// POST NEW APPLIANCE, runs the validateApplianceData middleware first to check the request body, then creates a new appliance object with a unique ID and the provided fields. Then reads current appliances and adds a new one. Writes the updated list back to the file. Responds with the new 201 status if successful; otherwise returns a 500 error.
router.post('/post', validateApplianceData, async (req, res) => {
    try {
        const newAppliance = {
            id: Date.now(),
            type: req.body.type,
            brand: req.body.brand,
            status: req.body.status,
            notes: req.body.notes,
            model: req.body.model,
            manual: req.body.manual
        };
        const data = await readData();
        data.push(newAppliance);
        await fs.writeFile('./data/appliances.json', JSON.stringify(data, null, 2));
        res.status(201).json(newAppliance);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add appliance' });
    }
});

// Exports router for use elsewhere.
module.exports = router;