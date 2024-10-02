import React from 'react';

const StepWithButton = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Steps */}
        <div className="flex space-x-6 items-center">
          <div className="text-orange-600 font-semibold flex flex-col items-center">
            <span>1. Brief</span>
            <div className="w-full h-1 mt-1 bg-orange-600"></div>
          </div>
          <div className="text-gray-700 font-medium">
            <span>2. Connect</span>
          </div>
          <div className="text-gray-700 font-medium">
            <span>3. Collaborate</span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 md:mt-0">
          <button className="bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700 transition-all">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepWithButton;
