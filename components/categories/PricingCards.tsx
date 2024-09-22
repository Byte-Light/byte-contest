import React from "react";

interface CardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  save?: string;
}

const cards: CardProps[] = [
  {
    title: "Logo & brand identity pack",
    price: "from US$599",
    description: "A logo plus digital and print essentials to kick-start your brand",
    features: ["Logo", "Business card", "Letterhead & Envelope", "Facebook cover"],
    popular: true,
    save: "Save 39%",
  },
  {
    title: "Logo design",
    price: "from US$299",
    description: "An unforgettable logo crafted for your brand",
    features: [],
  },
  {
    title: "Business card",
    price: "from US$169",
    description: "A unique card designed to build connections",
    features: [],
  },
  {
    title: "Logo & brand guide",
    price: "from US$429",
    description: "Extend your logo design into a real brand with matching fonts, colors, and style",
    features: ["Logo", "Brand guide document"],
    save: "Save US$70",
  },
  {
    title: "Logo & business card",
    price: "from US$449",
    description: "A logo and business card design that pair perfectly",
    features: ["Logo", "Business card"],
    save: "Save US$49",
  },
];

const PricingCards: React.FC = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-6 relative bg-white"
          >
            {card.popular && (
              <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                Most popular
              </span>
            )}
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-4">{card.price}</p>
            {card.save && (
              <span className="bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded-full inline-block mb-4">
                {card.save}
              </span>
            )}
            <p className="text-gray-500 mb-4">{card.description}</p>
            <ul className="text-gray-700 space-y-2">
              {card.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span>✔</span> <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
