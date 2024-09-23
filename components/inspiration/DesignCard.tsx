// components/DesignCard.tsx
import React from 'react';

type Design = {
  id: number;
  imageUrl: string;
  username: string;
  likes: number;
};

const designData: Design[] = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/150', // Replace with the real image URL
    username: 'noodlemie',
    likes: 31,
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/150',
    username: 'Boja',
    likes: 8,
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/150',
    username: 'Boja',
    likes: 41,
  },
  {
    id: 4,
    imageUrl: 'https://via.placeholder.com/150',
    username: 'Shorttox™',
    likes: 93,
  },
];

const DesignCard: React.FC = () => {
  return (
    <div className="w-full p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {designData.map((design) => (
          <div key={design.id} className="bg-white rounded-lg shadow-md">
            {/* Image */}
            <div className="h-48 bg-gray-200">
              <img
                src={design.imageUrl}
                alt={`Design by ${design.username}`}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Info Section */}
            <div className="p-4 flex flex-col items-center">
              {/* Username */}
              <div className="flex items-center space-x-2">
                <img
                  src="https://via.placeholder.com/30"
                  alt={design.username}
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-gray-700 text-sm">{design.username}</p>
              </div>

              {/* Likes */}
              <div className="flex items-center space-x-1 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1.01 4.13 2.44h1.74C13.09 6.01 14.76 5 16.5 5 18.58 5 20 6.42 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <p className="text-gray-600 text-sm">{design.likes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignCard;
