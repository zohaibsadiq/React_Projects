const mongoose = require("mongoose");

const ComplainFormEntry = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const complainFormEntry = mongoose.model(
  "complainFormEntry",
  ComplainFormEntry
);

module.exports = complainFormEntry;
