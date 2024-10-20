import React, { useEffect, useState } from "react"; // React and hooks
import { IoMdRefresh } from "react-icons/io"; // Refresh icon

const ThankYou = () => {
  const [submissions, setSubmissions] = useState([]); // State for submissions
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const fetchSubmissions = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/form"); // GET request
      if (response.ok) {
        const data = await response.json(); // Parse JSON response
        setSubmissions(data); // Update state
        setIsLoading(false); // End loading
      } else {
        throw new Error("Failed to fetch data"); // Handle non-200 responses
      }
    } catch (error) {
      setError(error.message); // Set the error message
      setIsLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchSubmissions(); // Fetch on mount
  }, []); // Empty dependency array ensures it runs only once

  if (isLoading) {
    return <div>Loading...</div>; // Display loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error state
  }

  return (
    <div className="w-[100%] sm:max-w-sm md:max-w-md p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center">
        Thank You for Your Submission
      </h1>
      <button onClick={fetchSubmissions} title="Refresh">
        <IoMdRefresh /> {/* Icon for manual refresh */}
      </button>
      <ul>
        {submissions.map((submission) => (
          <li key={submission._id} className="mb-4">
            <strong>Name:</strong> {submission.name} <br />
            <strong>Phone:</strong> {submission.phone} <br />
            <strong>Message:</strong> {submission.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThankYou;
