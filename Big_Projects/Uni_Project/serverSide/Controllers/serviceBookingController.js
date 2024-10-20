const ServiceBooking = require("../Models/ServiceBooking");
exports.getAllBooking = async (req, res) => {
  try {
    const ServiceBookings = await ServiceBooking.find();
    res.status(200).json(ServiceBookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.createBooking = async (req, res) => {
  // Destructure the expected fields from the request body
  const { name, phoneNumber, city, service, address } = req.body;

  // Define the data for creating a new booking
  const bookingData = {
    name,
    phoneNumber,
    city,
    service,
    address,
  };

  // Create a new booking instance
  const booking = new ServiceBooking(bookingData);

  try {
    // Save the new booking to the database
    const newBooking = await booking.save();

    // Respond with the newly created booking
    res.status(201).json(newBooking); // Return the full booking data
  } catch (err) {
    console.error("Error creating booking:", err); // Log the error for debugging

    // Respond with an error message and status code 400 for client errors
    res.status(400).json({ message: err.message });
  }
};
