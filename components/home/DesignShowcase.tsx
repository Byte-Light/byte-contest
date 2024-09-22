import Image from 'next/image';

const DesignShowcase = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-8 py-16 px-8">
      {/* Left Side - Image and Design Elements */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/2 space-y-4">
        <div className="relative">
          <Image
            src="/images/grow-with-design.avif" // Replace with actual image path
            alt="Feel Good Tea Design"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
          {/* Designer Profile - Overlay */}
          <div className="absolute bottom-0 left-0 flex items-center bg-yellow-300 p-2 rounded-full space-x-2">
            <Image
              src="/images/bytelight.png" // Replace with actual image path
              alt="Designer Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-semibold text-gray-900">Brand Identity by Raveart</span>
          </div>
        </div>
      </div>

      {/* Right Side - Text and Call to Action */}
      <div className="lg:w-1/2 flex flex-col space-y-4 mt-8 lg:mt-0">
        <h1 className="text-4xl font-bold text-green-600">Grow with great design</h1>
        <p className="text-lg text-gray-600">
          No matter what your business needs, we can connect you with a creative expert
          to make your business look and feel professional. Because good design makes great business.
        </p>

        {/* Input Form */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center">
          <input
            type="text"
            placeholder="What do you need designed?"
            className="w-full lg:w-auto p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-green-600"
          />
          <button className="w-full lg:w-auto px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition duration-300">
            Get a design
          </button>
        </div>

        {/* Popular Tags */}
        <div className="flex space-x-2 mt-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300">Logo design</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300">Website</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300">Branding</button>
        </div>
      </div>
    </div>
  );
};

export default DesignShowcase;
