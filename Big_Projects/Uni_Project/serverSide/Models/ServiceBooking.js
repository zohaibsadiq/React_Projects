const mongoose = require("mongoose");

const serviceBookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // Optional: comment describing the field
  },
  phoneNumber: {
    type: String,
    required: true,
    // Ensure valid phone number format, if needed
  },
  city: {
    type: String,
    required: true,
    // Default value or list of possible values (e.g., Karachi, Lahore, etc.)
  },
  service: {
    type: String,
    required: true,
    // Service type, e.g., AC Repair, Gardening, etc.
  },
  address: {
    type: String,
    required: true,
    // Address details or any additional info
  },
  description: {
    type: String,
    // Optional field for extra details or user comments
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Automatically set the creation date
  },
});

// Create the Mongoose model for service bookings
const ServiceBooking = mongoose.model("ServiceBooking", serviceBookingSchema);

module.exports = ServiceBooking; // Export the model
