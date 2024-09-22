import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-8 lg:px-16 flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0">
      {/* Left Text Section */}
      <div className="flex-1">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-600">
          Your business deserves great design
        </h1>
        <div className="w-16 h-1 bg-blue-600 my-4"></div>
        <p className="text-lg text-gray-700 mb-6">
          Logos, websites, packaging design and more. Our trusted designer community has helped
          thousands of businesses launch, grow, expand and rebrand with custom, professional design.
        </p>
        <Link href="/start-your-brand" className="text-lg font-semibold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
          <span>Start your brand</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="relative flex-1 lg:max-w-xl">
        {/* Primary Image */}
        <div className="relative">
          <Image
            src="/images/software-development.png" // Replace with your image path
            alt="Design for Business"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>  
        
        </div>
 
    </section>
  );
};

export default HeroSection;
