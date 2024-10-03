// app/contest-form/page.tsx
"use client";
import { useState, FormEvent } from 'react';
import { FiFile, FiAward, FiTag, FiAlignLeft, FiEdit2 } from 'react-icons/fi';

type ContestData = {
  category: string;
  title: string;
  picture: File | null;
  description: string;
  prize: string;
};

const ContestForm = () => {
  const [formData, setFormData] = useState<ContestData>({
    category: '',
    title: '',
    picture: null,
    description: '',
    prize: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        picture: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center p-6">
      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-10 rounded-3xl shadow-lg border border-gray-100"
      >
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Create Your Contest
        </h2>

        {/* Category Input */}
        <div className="mb-6 relative">
          <label htmlFor="category" className="block text-base font-medium text-gray-600 mb-2">
            Category
          </label>
          <div className="relative">
            <FiTag className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full pl-10 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              placeholder="e.g. Graphic Design"
              required
            />
          </div>
        </div>

        {/* Title Input */}
        <div className="mb-6 relative">
          <label htmlFor="title" className="block text-base font-medium text-gray-600 mb-2">
            Title
          </label>
          <div className="relative">
            <FiEdit2 className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full pl-10 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              placeholder="e.g. Logo Design for Coffee Shop"
              required
            />
          </div>
        </div>

        {/* Picture Input */}
        <div className="mb-6 relative">
          <label htmlFor="picture" className="block text-base font-medium text-gray-600 mb-2">
            Picture
          </label>
          <div className="relative">
            <FiFile className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="file"
              id="picture"
              name="picture"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full pl-10 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              required
            />
          </div>
        </div>

        {/* Description Input */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-base font-medium text-gray-600 mb-2">
            Description
          </label>
          <div className="relative">
            <FiAlignLeft className="absolute top-3 left-3 text-gray-400" />
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full pl-10 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              rows={4}
              placeholder="Describe the details of the contest..."
              required
            />
          </div>
        </div>

        {/* Prize Input */}
        <div className="mb-8 relative">
          <label htmlFor="prize" className="block text-base font-medium text-gray-600 mb-2">
            Prize
          </label>
          <div className="relative">
            <FiAward className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="prize"
              name="prize"
              value={formData.prize}
              onChange={handleChange}
              className="w-full pl-10 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              placeholder="e.g. $500"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Submit Contest
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContestForm;
