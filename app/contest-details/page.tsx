// app/contest-details/page.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { FiTag, FiAward, FiAlignLeft } from 'react-icons/fi';

type ContestData = {
  category: string;
  title: string;
  picture: string; // URL to the image stored in Firebase or a placeholder.
  description: string;
  prize: string;
};

const ContestDetails = () => {
  // Placeholder data for the contest (you can replace this with actual data or fetch from Firestore).
  const contestData: ContestData = {
    category: 'Graphic Design',
    title: 'Logo Design for Coffee Shop',
    picture: '/images/software-development.png', // Replace with the actual URL of the image.
    description:
      'We are looking for a modern, creative logo design for our new coffee shop. The design should reflect the cozy and inviting atmosphere of the shop, with an emphasis on coffee culture.',
    prize: '$500',
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-100 to-gray-50 flex items-center justify-center p-6">
      {/* Contest Details Container */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center">
        {/* Contest Image */}
        <div className="w-full max-w-3xl mb-8">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-md">
            <Image
              src={contestData.picture}
              alt="Contest Image"
              layout="fill"
              objectFit="contain"
              className="rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Contest Title */}
        <h1 className="text-5xl font-bold text-gray-800 text-center mb-6">
          {contestData.title}
        </h1>

        {/* Contest Category */}
        <div className="flex items-center justify-center mb-4 text-xl text-gray-500">
          <FiTag className="mr-2" />
          <span>{contestData.category}</span>
        </div>

        {/* Contest Description */}
        <div className="w-full mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            <FiAlignLeft className="inline-block mr-2 text-gray-400" />
            Description
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {contestData.description}
          </p>
        </div>

        {/* Prize Information */}
        <div className="flex items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 p-4 rounded-xl shadow-inner mb-8">
          <FiAward className="text-3xl text-yellow-500 mr-4" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Prize</h3>
            <p className="text-xl text-gray-700">{contestData.prize}</p>
          </div>
        </div>

        {/* Edit Contest Button */}
        <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Edit Contest
        </button>
      </div>
    </div>
  );
};

export default ContestDetails;
