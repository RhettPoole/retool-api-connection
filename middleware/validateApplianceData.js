// Middleware to validate appliance data
function validateApplianceData(req, res, next) {
    const {type, brand, status, notes, model, manual} = req.body;

    if (!type, !brand, !status, !notes, !model, !manual) {
        return res.status(400).json({error: "Missing required fields"});
    }

    // If the data is valid, proceed to the next route handler
    next();
}

module.exports = validateApplianceData;