import React from "react";
import { FaPenNib, FaDesktop, FaFileAlt, FaBrush, FaBox, FaTag, FaBook } from 'react-icons/fa';

const DesignSelections: React.FC = () => {
  return (
    <div className="bg-white p-6 md:p-12 rounded-lg shadow-md">
      <h3 className="text-xl md:text-2xl font-semibold mb-6">What do you need designed?</h3>
      
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Logo Design */}
        <div className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
          <FaPenNib className="text-2xl mr-4" />
          <span className="text-lg">Logo design</span>
        </div>
        
        {/* Web Page Design */}
        <div className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
          <FaDesktop className="text-2xl mr-4" />
          <span className="text-lg">Web page design</span>
        </div>
        
        {/* Postcard, Flyer or Print */}
        <div className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
          <FaFileAlt className="text-2xl mr-4" />
          <span className="text-lg">Postcard, flyer or print</span>
        </div>

        {/* Illustration or Graphics */}
        <div className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
          <FaBrush className="text-2xl mr-4" />
          <span className="text-lg">Illustration or graphics</span>
        </div>

        {/* Product Packaging */}
        <div className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
          <FaBox className="text-2xl mr-4" />
          <span className="text-lg">Product packaging</span>
        </div>

        {/* Product Label */}
        <div className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
          <FaTag className="text-2xl mr-4" />
          <span className="text-lg">Product label</span>
        </div>

        {/* Book Cover */}
        <div className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
          <FaBook className="text-2xl mr-4" />
          <span className="text-lg">Book cover</span>
        </div>

        {/* See All */}
        <div className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer">
          <span className="text-lg">See all</span>
        </div>
      </div>

      {/* Bottom Right "Next" Button */}
      <div className="flex justify-end mt-6">
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg shadow hover:bg-gray-300 transition-all">
          Next
        </button>
      </div>
    </div>
  );
};

export default DesignSelections;
