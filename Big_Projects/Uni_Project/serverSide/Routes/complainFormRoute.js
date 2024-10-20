const express = require("express");
const createFormcontroller = require("../Controllers/complainFormController"); // Import controller function

const router = express.Router();

// Route for form submission
router.post("/", createFormcontroller.createFormEntry); // POST request to create a new form entry
router.get("/", createFormcontroller.getAllComplain);

module.exports = router; // Export the router
