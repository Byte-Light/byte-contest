import Image from 'next/image';
import Link from 'next/link';

const DesignCategories = () => {
  // Data for the cards
  const categories = [
    {
      title: 'Logo & branding design',
      image: '/images/logo-design.avif', // Replace with actual image path
    },
    {
      title: 'Website & app design',
      image: '/images/website-design.avif', // Replace with actual image path
    },
    {
      title: 'Business & advertising',
      image: '/images/business-design.avif', // Replace with actual image path
    },
    {
      title: 'Art & illustration',
      image: '/images/art-design.avif', // Replace with actual image path
    },
    {
      title: 'Packaging & label',
      image: '/images/packaging-design.avif', // Replace with actual image path
    },
  ];

  return (
    <div className="py-16 px-8 bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Design for what you need</h2>
        <Link href="/design-categories" className="text-sm font-semibold text-gray-600 hover:text-gray-900 flex items-center space-x-2">
         
            <span>View all design categories</span>
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

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignCategories;
