const express = require("express");
const servicecontroller = require("../Controllers/serviceBookingController"); // Corrected to use 'require'

const router = express.Router();

// Route to create a new booking using the controller function
router.get("/", servicecontroller.getAllBooking);
router.post("/", servicecontroller.createBooking);

module.exports = router;
