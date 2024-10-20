import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { useNavigate } from "react-router-dom"; 

const HeroFoam = () => {
  // State to hold form values
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    city: "Karachi", // Default city
    service: "",
    address: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convert formData to JSON
      });

      if (response.ok) {
        alert("Data upload Successfully !");
        setFormData({
          name: "",
          phoneNumber: "",
          city: "Karachi", // Default city
          service: "",
          address: "",
        }); // Reset the form
        setTimeout(() => {
          navigate("/BookingList");
        }, 2000); // Redirect after 2 seconds
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      alert("An error occurred while creating the account.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-xs p-6 bg-[#EEF4ED] rounded-lg bg-opacity-40"
      >
        <h1 className="mb-2 text-3xl font-bold text-center text-black">
          Book Your Service
        </h1>
        <div className="mb-2">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange} // Handle input changes
            className="w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED] placeholder-black"
          />
        </div>
        <div className="mb-2">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange} // Handle input changes
            className="w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED] placeholder-black"
          />
        </div>
        <div className="mb-2">
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange} // Handle changes
            className="w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED]"
          >
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
          </select>
        </div>
        <div className="mb-2">
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED]"
          >
            <option value="">Select a Service</option>
            <option value="Ac Repair">AC Repair</option>
            <option value="Bathing">Bathing</option>
            <option value="Gardening">Gardening</option>
            <option value="Solar Fitting">Solar Fitting</option>
          </select>
        </div>
        <div className="mb-2">
          <textarea
            id="address"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED] placeholder-black"
          />
        </div>
        <div className="flex justify-end gap-3 ">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#FF6B35] rounded-lg text-md font-semibold"
          >
            Submit
          </button>
          <div>
            {/* Modal toggle */}
            <button
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              className="block px-3.5 py-3.5 font-medium text-center text-white bg-[#FF6B35] rounded-lg text-md  focus:ring-2 focus:outline-none focus:ring-[#FF6B35]"
              type="button"
            >
              <IoMdCall />
            </button>
            {/* Main modal */}
            <div
              id="default-modal"
              tabIndex={-1}
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative w-full max-w-sm max-h-full p-4">
                {/* Modal content */}
                <div className="relative bg-gray-300 rounded-lg shadow">
                  {/* Modal header */}
                  <div className="flex items-center justify-between p-4 rounded md:p-5 ">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Our Number : 03111111111
                    </h3>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"
                      data-modal-hide="default-modal"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HeroFoam;
