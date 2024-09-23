// components/StudioCard.tsx
import React from 'react';

const StudioCard: React.FC = () => {
  return (
    <div className="w-full bg-white p-6 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between max-w-7xl mx-auto space-y-6 lg:space-y-0">
      {/* Left: Image Section */}
      <div className="relative flex-shrink-0 w-full lg:w-1/2">
        <div className="bg-purple-800 p-6 rounded-lg">
          <img
            src="https://via.placeholder.com/400" // Replace with the actual image URL
            alt="Phone designs"
            className="w-full h-auto object-contain"
          />
        </div>
        <p className="mt-2 text-gray-500 text-sm">by Ashraf</p>
      </div>

      {/* Right: Text Section */}
      <div className="w-full lg:w-1/2 lg:pl-10">
        <p className="text-gray-400 text-lg font-semibold">Pro</p>
        <h1 className="text-5xl lg:text-6xl font-bold text-black mt-2">Studio</h1>

        <p className="text-gray-800 mt-4 text-lg">
          The brand agency for ByteContest
        </p>

        <p className="text-gray-600 mt-2 text-base">
          Your creative project, led by strategists who love to build brands and know the ByteContest community by heart:
        </p>

        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>Dedicated Brand Strategist leading your brief</li>
          <li>We'll shape your brand story with the top talent</li>
          <li>More than visual identity; business naming, brand messaging, campaigns & more</li>
        </ul>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-md text-lg font-semibold">
          Talk to us
        </button>

        <div className="mt-4">
          <a href="#" className="text-gray-800 font-semibold hover:underline">
            Get the full-service brand pack →
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudioCard;
