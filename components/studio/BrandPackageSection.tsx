import React from 'react';

const BrandPackageSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-8 lg:p-16 bg-white">
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-start">
        <div className="relative w-full lg:w-auto">
          <img
            src="/images/bytelight.png"
            alt="Brand Guidelines"
            className="rounded-lg shadow-lg w-full lg:w-[32rem]"
          />
          <p className="absolute bottom-4 left-4 bg-purple-600 text-white p-2 rounded-full shadow-md text-sm flex items-center">
            <img
              src="/images/bytelight.png"
              alt="Brand Strategist"
              className="w-6 h-6 rounded-full mr-2"
            />
            Brand Strategist
          </p>
        </div>
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-16">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">Begin with our brand package</h1>
        <p className="text-lg text-gray-700 mb-6">
          Get the brand classics, with the benefit of end-to-end guidance from Circlemakers Studio.
          Get your business off to an outstanding start, and set yourself up to scale:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Discovery session with your Brand Strategist</li>
          <li>Moodboard & creative brief</li>
          <li>We'll present 9 curated logo concepts</li>
          <li>Brand development, color & font selection, and branded business templates</li>
          <li>Calls with your dedicated team</li>
          <li>Brand guidelines</li>
        </ul>

        <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300">
          Get the package
        </button>
      </div>
    </section>
  );
};

export default BrandPackageSection;
