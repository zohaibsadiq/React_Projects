import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const ComplainForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    })); // Update the form state
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    try {
      const response = await fetch("http://localhost:5000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          message: "",
        }); // Reset the form
        setTimeout(() => {
          navigate("/thank-you"); // Redirect to a thank-you page after submission
        }, 2000);
      } else {
        const errorResult = await response.json();
        alert(`Error: ${errorResult.message}`);
      }
    } catch (error) {
      alert("An error occurred during submission. Please try again.");
    }
  };

  return (
    <div className="w-[100%] sm:max-w-sm md:max-w-md p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Attach the submit handler */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-black"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange} // Handle input changes
            className="w-full px-4 py-2 border rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED] placeholder-black"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-black"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange} // Handle input changes
            className="w-full px-4 py-2 border rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED] placeholder-black"
            placeholder="Your phone number"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-black"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange} // Handle changes
            className="w-full px-4 py-2 border rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35] sm:text-sm bg-[#EEF4ED] placeholder-black"
            placeholder="Your message"
            required
          />
        </div>
        <button
          type="submit" // Button type submit to trigger form submission
          className="w-full py-2 text-white  rounded-md focus:ring-[#FF6B35] focus:border-[#FF6B35] text-md  placeholder-black bg-[#FF6B35]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ComplainForm;
