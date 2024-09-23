// components/SearchInspiration.tsx
"use client"
import { useState } from 'react';

const SearchInspiration = () => {
  const [filterLiked, setFilterLiked] = useState(false);

  return (
    <div className="w-full p-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Discover graphic design ideas & inspiration
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex-1 w-full mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search tags and keywords"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Filter Options */}
          <div className="flex items-center gap-4">
            <span className="text-gray-500">856,505 designs found for:</span>
            <select className="px-4 py-2 border border-gray-300 rounded-md">
              <option value="all">all designs</option>
            </select>
          </div>
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Filter your liked designs</span>
          <button
            onClick={() => setFilterLiked(!filterLiked)}
            className={`w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 transition duration-300 ease-in-out ${
              filterLiked ? 'bg-green-500' : ''
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform ${
                filterLiked ? 'translate-x-7' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchInspiration;
