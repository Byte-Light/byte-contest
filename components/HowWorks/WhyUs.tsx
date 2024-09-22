import React from 'react';
import { FaStar, FaHeart, FaGlobe, FaLayerGroup } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700">
            So, why us?
          </h2>
          <div className="w-12 h-1 bg-teal-600 mx-auto mt-3"></div>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Item 1 */}
          <div className="text-center md:text-left">
            <FaStar className="text-teal-600 text-3xl mb-4 mx-auto md:mx-0" />
            <h3 className="text-lg font-semibold">4.8/5 rating</h3>
            <p className="text-gray-600 mt-2">
              That’s our average customer rating from 37,596 reviews. Happy designers = happy customers.
            </p>
          </div>

          {/* Item 2 */}
          <div className="text-center md:text-left">
            <FaHeart className="text-teal-600 text-3xl mb-4 mx-auto md:mx-0" />
            <h3 className="text-lg font-semibold">100% love it</h3>
            <p className="text-gray-600 mt-2">
              Work with award-winning designers and get a design you’ll love.
            </p>
          </div>

          {/* Item 3 */}
          <div className="text-center md:text-left">
            <FaGlobe className="text-teal-600 text-3xl mb-4 mx-auto md:mx-0" />
            <h3 className="text-lg font-semibold">24/7 creativity</h3>
            <p className="text-gray-600 mt-2">
              Professional graphic designers available worldwide from Frankfurt to Frankston.
            </p>
          </div>

          {/* Item 4 */}
          <div className="text-center md:text-left">
            <FaLayerGroup className="text-teal-600 text-3xl mb-4 mx-auto md:mx-0" />
            <h3 className="text-lg font-semibold">90+ design categories</h3>
            <p className="text-gray-600 mt-2">
              Our talented community can design everything from an iOS app to a wine label.
            </p>
          </div>
        </div>

        {/* Get started button */}
        <div className="mt-12 flex justify-center">
          <button className="bg-teal-600 text-white py-3 px-8 rounded-full hover:bg-teal-700 transition-all">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
