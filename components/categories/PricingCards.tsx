import React from 'react';

interface Service {
  title: string;
  price: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'WordPress theme design',
    price: 'from US$599',
    description: 'A custom WordPress theme that does everything you need it to',
    icon: <span>🖥️</span>, // Replace this with a proper icon
  },
  {
    title: 'Landing page design',
    price: 'from US$349',
    description: 'Landing page that gets clicks',
    icon: <span>📄</span>,
  },
  {
    title: 'Icon or button',
    price: 'from US$199',
    description: 'Professionally designed icons, buttons, and favicons for web & app',
    icon: <span>🔘</span>,
  },
  {
    title: 'App Icon',
    price: 'from US$199',
    description: 'A stunning app icon guaranteed to get you downloads',
    icon: <span>📱</span>,
  },
  {
    title: 'Website Icon',
    price: 'from US$199',
    description: 'A website icon that users will recognize',
    icon: <span>🌐</span>,
  },
  {
    title: 'Form',
    price: 'from US$349',
    description: 'Forms customized to collect the data you need',
    icon: <span>📋</span>,
  },
  {
    title: 'App design',
    price: 'from US$599',
    description: 'A user-friendly app that gets downloads',
    icon: <span>📱</span>,
  },
  {
    title: 'iOS App',
    price: 'from US$599',
    description: "An iOS app design that'll be the apple of your eye",
    icon: <span>🍎</span>,
  },
];

const PricingCards: React.FC = () => {
  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-none shadow-md flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-xl group cursor-pointer"
          >
            {/* Icon */}
            <div className="text-4xl mb-4 text-gray-600 group-hover:text-blue-600">
              {service.icon}
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600">
              {service.title}
            </h3>
            {/* Price */}
            <p className="text-gray-500 text-lg mb-2">{service.price}</p>
            {/* Description */}
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
