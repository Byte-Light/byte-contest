import React from 'react';

const HowWorkss = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-red-600 mb-4">How it works</h2>
          <div className="w-16 h-1 bg-red-600 mb-6"></div>
          <p className="text-gray-700 mb-4">
            We make great design work happen with our global community of professional designers. If you'd like to speak to a human, 
            <a href="#" className="text-red-600 underline hover:no-underline"> talk to one of our design experts.</a>
          </p>
        </div>

        {/* Right Side: Video or Image */}
        <div className="md:w-1/2">
          <iframe
            className="w-full h-64 md:h-80 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/example"
            title="How it works video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HowWorkss;
