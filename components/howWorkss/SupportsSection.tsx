import React from "react";

const SupportsSection: React.FC = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row justify-between items-center p-6 md:p-16 space-y-8 md:space-y-0">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-red-500">Questions?</h2>
        <div className="border-b-2 border-red-500 w-12 mt-2 mb-4 mx-auto md:mx-0"></div>
        <p className="text-gray-600 text-lg mb-4">
          Our support gurus are here to help you achieve design enlightenment. 
          Check out our <a href="#" className="text-red-500 underline">FAQs</a>, <a href="#" className="text-red-500 underline">send us an email</a>, or give us a call.
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="text-red-500 text-2xl">📞</span>
            <a href="tel:01861328878" className="text-red-500 text-lg">01861328878</a>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="text-red-500 text-2xl">👥</span>
            <a href="#" className="text-red-500 text-lg underline">
              Free design consultation →
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/images/software-development.png"
          alt="Person reading design book"
          className="w-64 md:w-80"
        />
      </div>
    </div>
  );
};

export default SupportsSection;
