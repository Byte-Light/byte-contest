import React from 'react';

const BrandingSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-8 lg:p-16 bg-white">
      {/* Text Section */}
      <div className="lg:w-1/2">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">Branding from strategy to delivery</h1>
        <p className="text-lg text-gray-700 mb-6">
          Studio is brought to you by{' '}
          <a href="#" className="text-blue-600 underline">
            Circlemakers
          </a>
          , an independent collective of experienced Brand Strategists who help you get the best
          from the crowd. We work with a global network of creatives to bring the best ideas to your
          brief and implement them cohesively:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Brand experts with 10+ years in the creative industry</li>
          <li>Tap into the global creative community with our expert guidance</li>
          <li>
            Add-ons include brand workshops, naming, digital branding, illustration, icons,
            packaging, pitch decks & more.
          </li>
        </ul>

        <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300">
          Book a consult
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-auto relative">
          {/* Image mockups */}
          <img
            src="/images/bytelight.png"
            alt="Brand strategist"
            className="rounded-md shadow-lg w-full lg:w-96"
          />
          <p className="absolute -bottom-4 left-0 bg-white p-2 rounded-full shadow-md text-gray-800 text-sm">
            Brand Strategist
          </p>
        </div>
        <div className="w-full lg:w-auto relative">
          <img
            src="/images/bytelight.png"
            alt="Top creative talent"
            className="rounded-md shadow-lg w-full lg:w-96"
          />
          <p className="absolute -bottom-4 left-0 bg-white p-2 rounded-full shadow-md text-gray-800 text-sm">
            Top creative talent
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;
