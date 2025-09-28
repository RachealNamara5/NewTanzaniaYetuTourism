import React, { useState, useEffect } from 'react';

function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fullText = 'Discover the Wild Beauty of Tanzania';
  
  const images = [
    'https://images.unsplash.com/photo-1678652778466-48398e0c9edb?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  useEffect(() => {
    let index = 0;
    const typingSpeed = 100;
    
    const type = () => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        setTimeout(type, typingSpeed);
      }
    };
    
    type();

    const carouselInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    const cursor = document.createElement('style');
    cursor.innerHTML = `
      .typing-cursor::after {
        content: '|';
        animation: blink 0.7s infinite;
        margin-left: 2px;
      }
      @keyframes blink {
        50% { opacity: 0; }
      }
    `;
    document.head.appendChild(cursor);
    
    return () => {
      document.head.removeChild(cursor);
      clearInterval(carouselInterval);
    };
  }, [images.length]);

  return (
    <div 
      className="min-h-screen relative bg-cover bg-center bg-no-repeat flex flex-col overflow-x-hidden"
      style={{
        backgroundImage: `url('${images[currentImageIndex]}')`,
        transition: 'background-image 1s ease-in-out'
      }}
    >
      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-16">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 typing-cursor">
            {displayedText}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Experience unforgettable safari adventures, witness incredible wildlife, and explore stunning landscapes with our expert-guided tours.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
            <button 
              className="w-full sm:w-auto text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#2f4f2f' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1a2f1a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#2f4f2f'}
            >
              Explore Packages →
            </button>
            <button 
              className="w-full sm:w-auto bg-transparent text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              style={{ borderColor: '#2f4f2f', borderWidth: '2px' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(47, 79, 47, 0.2)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Watch Video
            </button>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-black bg-opacity-30 backdrop-blur-sm py-6 px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#2f4f2f' }}>500+</h2>
            <span className="text-sm sm:text-base">Happy Travelers</span>
          </div>
          <div className="text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#2f4f2f' }}>15+</h2>
            <span className="text-sm sm:text-base">National Parks</span>
          </div>
          <div className="text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#2f4f2f' }}>10</h2>
            <span className="text-sm sm:text-base">Years Experience</span>
          </div>
          <div className="text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#2f4f2f' }}>24/7</h2>
            <span className="text-sm sm:text-base">Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
