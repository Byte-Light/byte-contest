import React from "react";

const DesignerSection: React.FC = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 md:py-24 space-y-8 md:space-y-0">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-red-500">
          Find a designer you’ll love
        </h2>
        <div className="border-b-2 border-red-500 w-12 mt-2 mb-6 mx-auto md:mx-0"></div>
        <p className="text-gray-600 text-lg">
          We have professional designers in over 90 design skill sets. 
          <br />
          <a href="#" className="text-red-500 underline">Sign up</a> to find the perfect designer for whatever you need.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="relative">
          {/* Illustration Image */}
          <img
            src="/images/book-cover.png"
            alt="Designer illustration"
            className="w-64 md:w-80"
          />
          {/* Quote */}
          <div className="absolute top-0 right-0 text-gray-600 text-sm">
            <p className="italic">"Book cover, done!"</p>
            <p className="text-right">by obicatlia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerSection;
