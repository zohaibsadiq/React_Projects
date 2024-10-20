const FormEntry = require("../Models/complainFormEntry");

exports.createFormEntry = async (req, res) => {
  try {
    const { name, phone, message } = req.body; // Extract data from request body

    // Create a new FormEntry document
    const newFormEntry = new FormEntry({
      name,
      phone,
      message,
    });

    // Save to MongoDB
    const savedFormEntry = await newFormEntry.save();

    res.status(201).json(savedFormEntry); // Return the saved document
  } catch (error) {
    console.error("Error creating form entry:", error); // Log error
    res.status(400).json({ message: "Error creating form entry" }); // Send error response
  }
};

exports.getAllComplain = async (req, res) => {
  try {
    const FormEntrys = await FormEntry.find();
    res.status(200).json(FormEntrys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
