import React, { useEffect, useState } from "react";
import { IoMdRefresh } from "react-icons/io";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/bookings");
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
        setIsLoading(false);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-lg font-semibold">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-lg font-semibold text-red-600">
          Error: {error}
        </span>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Bookings List</h2>
        <button
          onClick={fetchData}
          title="Refresh"
          className="p-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300"
        >
          <IoMdRefresh />
        </button>
      </div>

      <ul className="space-y-4">
        {bookings.map((booking) => (
          <li
            key={booking._id}
            className="p-4 bg-white border rounded-lg shadow-sm"
          >
            <p>
              <strong>Name:</strong> {booking.name}
            </p>
            <p>
              <strong>Phone Number:</strong> {booking.phoneNumber}
            </p>
            <p>
              <strong>City:</strong> {booking.city}
            </p>
            <p>
              <strong>Service:</strong> {booking.service}
            </p>
            <p>
              <strong>Address:</strong> {booking.address}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
