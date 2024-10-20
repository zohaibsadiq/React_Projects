import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  applianceRepair,
  carpenterServices,
  cctvServices,
  cleaningServices,
  electricalServices,
  pestControl,
  plumbingServices,
} from "../Data/servicesData"; // Importing data for all services

const ServiceCard = ({ title, img, description, bookUrl }) => {
  // Add props to receive data
  return (
    <div className="my-6">
      {" "}
      {/* Adjusted spacing to fit multiple cards */}
      <div
        className="max-w-xs mx-auto overflow-hidden bg-center bg-cover border rounded-md "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${img})`,
        }}
      >
        <div className="flex flex-col p-6 text-center text-white cursor-pointer gap-7 ">
          <h1 className="text-2xl font-bold">{title}</h1>{" "}
          {/* Use passed title */}
          <p className="text-lg">{description}</p>{" "}
          <Link to={`/${bookUrl}`}>
            {" "}
            {/* Use passed description */}
            <button className="w-full p-2 my-auto text-white bg-black rounded-md hover:bg-orange-500">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Parent component to loop through CleaningServices and render ServiceCard for each
const ServiceList = () => {
  const location = useLocation(); // Get the current location
  const route = location.pathname.substring(10); // Remove leading '/' to get the route
  // Map the route to the appropriate service data
  console.log(route);
  const serviceData = {
    applianceRepair,
    cleaningServices,
    electricalServices,
    cctvServices,
    plumbingServices,
    pestControl,
    carpenterServices,
  };

  const services = serviceData[route] || []; // Get the services for the current route, or an empty array if not found

  return (
    <div className="bg-[#EEF4ED] py-6">
      <h2 className="text-3xl font-bold text-center text-black">
        Select Your Desired Service Now!
      </h2>
      <p className="mx-auto text-center text-black text-md">
        We are presenting the ultimate installation, repair, maintenance, and
        sterilizing services.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            img={Object.values(service.img)[0]} // Extract the correct image
            description={service.discreption} // Corrected spelling
            bookUrl={service.bookUrl} // Pass the bookUrl
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
