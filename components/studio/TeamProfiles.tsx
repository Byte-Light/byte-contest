import React from 'react';

const TeamProfiles: React.FC = () => {
  const profiles = [
    {
      name: "Ashraf Alam",
      location: "San Francisco",
      image: "/images/ashraf.jpeg",
      description: `Ashraf brings deep expertise in strategic brand messaging and development. Prior to joining facebook in 2016, where he held several senior marketing roles, ashraf spent over a decade in global design agencies. Laura curiously seeks to understand the specific goals of her clients and thrives on translating them into a brand story that works.`,
      linkText: "Ashraf",
    },
    {
      name: "Sheikh Yeamin",
      location: "Berlin",
      image: "/images/yamin.jpeg",
      description: `Yeamin combines entrepreneurship with a love for good design. Helping founders define their positioning and visual identity is Yeamin's forte. As a founder himself, Yeamin brings a deep understanding of what it takes to grow a brand on a budget. Before founding a graphic design marketplace, which was later sold to 99designs, Yeamin worked for a decade in digital agencies.`,
      linkText: "Yeamin",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 p-8 lg:p-16">
      {profiles.map((profile, index) => (
        <div key={index} className="flex flex-col items-center text-center max-w-xs">
          {/* Image */}
          <img
            src={profile.image}
            alt={profile.name}
            className="rounded-full w-32 h-32 object-cover mb-4 shadow-lg"
          />

          {/* Name and Location */}
          <h2 className="text-xl font-semibold mb-2">
            {profile.name} | {profile.location}
          </h2>

          {/* Description */}
          <p className="text-gray-700 mb-4">
            <a href="#" className="text-blue-600 hover:underline">{profile.linkText}</a>{" "}
            {profile.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default TeamProfiles;
