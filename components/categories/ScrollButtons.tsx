import React from "react";

const categories = [
  { id: 1, label: "Logo & identity" },
  { id: 2, label: "Web & app design" },
  { id: 3, label: "Business & advertising" },
  { id: 4, label: "Clothing & merchandise" },
  { id: 5, label: "Illustration & design" },
  { id: 6, label: "Packaging & label" },
];

const ScrollButtons: React.FC = () => {
  return (
    <div className="w-full px-4 py-4">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        What do you need designed?
      </h2>
      
      {/* Scrollable container */}
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {/* Loop through categories */}
        {categories.map((category, index) => (
          <button
            key={category.id}
            className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium text-gray-700 border-2 ${
              index === 0
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-200 hover:bg-gray-300 border-gray-300"
            } transition-colors duration-300`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScrollButtons;
