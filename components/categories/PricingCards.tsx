"use client"
import React, { useState } from 'react';
import services from './servicesData'; // Import the services data

const PricingCards: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; // Number of services per page

  // Calculate the range of services for the current page
  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  const currentServices = services.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(services.length / pageSize);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentServices.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-none shadow-md flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-xl group cursor-pointer"
          >
            {/* Icon */}
            <div className="text-4xl mb-4 text-gray-600 group-hover:text-blue-600">
              {service.icon}
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600">
              {service.title}
            </h3>
            {/* Price */}
            <p className="text-gray-500 text-lg mb-2">{service.price}</p>
            {/* Description */}
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-200 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-gray-200 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PricingCards;
