import React, { useState } from 'react';

const TeamMember = ({ name, role, email, phone, image, hoveredMember, setHoveredMember, memberId }) => {
  const isHovered = hoveredMember === memberId;
 
  return (
    <div
      className="relative flex flex-col items-center cursor-pointer group"
      onMouseEnter={() => setHoveredMember(memberId)}
      onMouseLeave={() => setHoveredMember(null)}
    >
      {/* Animated Circle */}
      <div
        className={`relative rounded-full overflow-hidden border-4 transition-all duration-500 ease-out ${
          isHovered
            ? 'w-32 h-32 border-opacity-100 shadow-2xl transform scale-110'
            : 'w-24 h-24 border-opacity-70 shadow-lg hover:shadow-xl'
        }`}
        style={{
          borderColor: isHovered ? '#2f4f2f' : '#6b7280',
        }}
      >
        {/* Profile Image */}
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover rounded-full transition-all duration-500 ${
            isHovered ? 'brightness-110 contrast-110' : 'brightness-100'
          }`}
        />
      
        {/* Subtle Pulse Effect */}
        {!isHovered && (
          <div
            className="absolute inset-0 rounded-full animate-pulse opacity-20 bg-gray-300"
          ></div>
        )}
      </div>
      {/* Member Details - Expanded on Hover */}
      <div
        className={`mt-4 text-center transition-all duration-500 ease-out ${
          isHovered
            ? 'opacity-100 transform translate-y-0 scale-105'
            : 'opacity-80 transform translate-y-2 scale-100'
        }`}
      >
        <h4
          className={`font-bold transition-all duration-300 ${
            isHovered ? 'text-xl mb-2' : 'text-lg mb-1'
          }`}
          style={{ color: '#2f4f2f' }}
        >
          {name}
        </h4>
      
        <p
          className={`font-medium transition-all duration-300 ${
            isHovered ? 'text-base mb-3' : 'text-sm mb-2'
          } text-gray-600`}
        >
          {role}
        </p>
        {/* Contact Details - Only show on hover */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isHovered
              ? 'max-h-32 opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 text-sm text-gray-600">
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, content, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out cursor-pointer border-2 ${
        isHovered
          ? 'scale-105 shadow-2xl border-yellow-green-400'
          : 'hover:shadow-xl border-transparent'
      }`}
      style={{
        height: isHovered ? 'auto' : '140px',
        minHeight: isHovered ? '320px' : '140px'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div>
            <div
              className="w-16 h-1 rounded-full mb-2"
              style={{ background: 'linear-gradient(90deg, #9acd32 0%, #228b22 100%)' }}
            ></div>
            <h2 className="text-xl font-bold tracking-wide" style={{ color: '#2f4f2f' }}>
              {title}
            </h2>
          </div>
        </div>
      
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isHovered
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-gray-700 leading-relaxed text-base">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f8fffe 0%, #f0f8f0 100%)' }}>
      {/* Hero Section */}
      <div className="relative py-12 px-8">
        <div className="max-w-6xl mx-auto text-left mt-12">
          <div className="mb-6">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: '#2f4f2f' }}
            >
              Tanzania Yetu
            </h1>
            <div
              className="w-24 h-1 rounded-full mb-6"
              style={{ background: 'linear-gradient(90deg, #9acd32 0%, #228b22 100%)' }}
            ></div>
            <p
              className="text-2xl md:text-3xl font-medium mb-6"
              style={{ color: '#228b22' }}
            >
              Our Tanzania, Your Adventure
            </p>
          </div>
        
          <p className="text-xl text-gray-700 leading-relaxed text-justify">
            Welcome to Tanzania Yetu, where "Yetu" means "Ours" in Swahili. We believe Tanzania belongs to all of us – its breathtaking wildlife, majestic landscapes, rich cultures, and warm people. As your trusted tourism partner, we're passionate about sharing the authentic beauty and wonder of Tanzania with the world.
          </p>
        </div>
      </div>

      {/* Vision, Mission, Values Cards */}
      <div className="py-4 px-8">
        <div className="max-w-6xl mx-auto text-left">
          <div className="mb-4">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: '#2f4f2f' }}
            >
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed text-justify">
              Our commitment to excellence in Tanzania's tourism industry is built on three pillars that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="OUR VISION"
              content="To be the leading destination management company in Tanzania, recognized globally for creating transformative safari and cultural experiences. We envision Tanzania as the world's premier eco-tourism destination, where conservation, community development, and authentic travel experiences converge to benefit both visitors and local communities for generations to come."
              isHovered={hoveredCard === 'vision'}
              onMouseEnter={() => setHoveredCard('vision')}
              onMouseLeave={() => setHoveredCard(null)}
            />
          
            <Card
              title="OUR MISSION"
              content="To showcase Tanzania's extraordinary wildlife, stunning landscapes, and vibrant cultures through carefully crafted, sustainable tourism experiences. We connect travelers with the soul of Tanzania while supporting conservation efforts, empowering local communities, and preserving our natural heritage. Every journey we create tells Tanzania's story with authenticity, respect, and wonder."
              isHovered={hoveredCard === 'mission'}
              onMouseEnter={() => setHoveredCard('mission')}
              onMouseLeave={() => setHoveredCard(null)}
            />
          
            <Card
              title="OUR CORE VALUES"
              content="Ubuntu (We are one) - fostering community connection; Mazingira (Environment) - protecting Tanzania's natural beauty; Utamaduni (Heritage) - celebrating local cultures; Ubora (Excellence) - delivering exceptional experiences; Uwazi (Transparency) - honest, ethical practices; Uongozi (Leadership) - pioneering sustainable tourism that benefits all stakeholders while creating memories that last a lifetime."
              isHovered={hoveredCard === 'values'}
              onMouseEnter={() => setHoveredCard('values')}
              onMouseLeave={() => setHoveredCard(null)}
            />
          </div>
        </div>
      </div>

      {/* Team Section with Animated Circles */}
      <div className="py-12 px-8">
        <div className="max-w-6xl mx-auto text-left">
          <h3
            className="text-3xl font-bold mb-8"
            style={{ color: '#2f4f2f' }}
          >
            Meet Our Expert Team
          </h3>
         
          <div className="flex flex-wrap gap-8 justify-start">
            <TeamMember
              name="Mugabe Robert "
              role="CEO & Senior Travel Consultant"
              email="robert@tanzaniayetu.com"
              phone="+255 123 456 789"
              image="https://www.uganda-safaris-tours.com/ug/img/team/robert1.jpg"
              hoveredMember={hoveredMember}
              setHoveredMember={setHoveredMember}
              memberId="ceo"
            />
           
            <TeamMember
              name="Tobias Kimmich "
              role="Global Travel Expert, Germany"
              email="farida@tanzaniayetu.com"
              phone="+255 123 456 790"
              image="https://www.adventure-travellers.com/imgs/aat-images/tobias-kimmich-global-travel-expert-at-african-adventure-travellers.jpg"
              hoveredMember={hoveredMember}
              setHoveredMember={setHoveredMember}
              memberId="manager"
            />
           
            <TeamMember
              name="Dumba Bejamin"
              role="IT Manager"
              email="beja@tanzaniayetu.com"
              phone="+255 123 456 791"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              hoveredMember={hoveredMember}
              setHoveredMember={setHoveredMember}
              memberId="guide"
            />
           
            <TeamMember
              name="Namara Racheal"
              role="IT Assistant"
              email="namara@tanzaniayetu.com"
              phone="+255 123 456 792"
              image="https://lh3.googleusercontent.com/a/ACg8ocJquBIrDjKjOWdVd9U8Qretnh7LmnRMwkv3li_hBNk0usrMGU0=s432-c-no"
              hoveredMember={hoveredMember}
              setHoveredMember={setHoveredMember}
              memberId="conservation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;