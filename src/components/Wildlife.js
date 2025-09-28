import React, { useState } from 'react';
import './Wildlife.css';

function Wildlife() {
  const [activeFilter, setActiveFilter] = useState('All');

  const animals = [
    {
      tag: 'Big Five',
      image: 'https://images.unsplash.com/photo-1727254662367-66b2d8dab647?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbnMlMjBpbiUyMGFwYXJrfGVufDB8fDB8fHww',
      name: 'African Lion',
      description: 'The king of the savanna, lions are social cats living in prides.',
      habitat: 'Serengeti National Park',
      status: 'Vulnerable'
    },
    {
      tag: 'Big Five',
      image: 'https://plus.unsplash.com/premium_photo-1661943889401-10f6b011b24b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVsZXBoYW50cyUyMGluJTIwYXBhcmslMjB0YW56YW5pYXxlbnwwfHwwfHx8MA%3D%3D',
      name: 'African Elephant',
      description: 'The largest land mammal, known for their intelligence and family bonds.',
      habitat: 'Tarangire National Park',
      status: 'Endangered'
    },
    {
      tag: 'Big Five',
      image: 'https://images.unsplash.com/photo-1569691105751-88df003de7a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlb3BhcmR8ZW58MHx8MHx8fDA%3D',
      name: 'Leopard',
      description: 'Elusive and powerful, leopards are excellent climbers and hunters.',
      habitat: 'Ngorongoro Crater',
      status: 'Near Threatened'
    },
    {
      tag: 'Predator',
      image: 'https://images.unsplash.com/photo-1705857613164-ebd52786e41f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZWV0YWglMjBpbiUyMGElMjBncm91cHxlbnwwfHwwfHx8MA%3D%3D0',
      name: 'Cheetah',
      description: 'The fastest land animal, capable of reaching speeds up to 70 mph.',
      habitat: 'Serengeti Plains',
      status: 'Vulnerable'
    },
    {
      tag: 'Herbivore',
      image: 'https://images.unsplash.com/photo-1612358405970-e1aeba9d76c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
      name: 'Giraffe',
      description: 'The tallest mammal, with their distinctive long necks and spotted patterns.',
      habitat: 'Arusha National Park',
      status: 'Vulnerable'
    },
    {
      tag: 'Herbivore',
      image: 'https://images.unsplash.com/photo-1720263869270-c8c0c4b75475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHplYnJhJTIwaW4lMjBhJTIwZ3JvdXB8ZW58MHx8MHx8fDA%3D',
      name: 'Plains Zebra',
      description: 'Known for their distinctive black and white stripes, each pattern is unique.',
      habitat: 'Serengeti Migration',
      status: 'Least Concern'
    },
    {
      tag: 'Big Five',
      image: 'https://images.unsplash.com/photo-1508605375977-9fe795aea86a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFmcmljYW4lMjBCdWZmYWxvfGVufDB8fDB8fHww',
      name: 'African Buffalo',
      description: 'Powerful and unpredictable, often found in large herds for protection.',
      habitat: 'Lake Manyara',
      status: 'Least Concern'
    },
    {
      tag: 'Big Five',
      image: 'https://images.unsplash.com/photo-1687461313165-38dcdd0d8c20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmhpbm8lMjBjcm9zc2luZyUyMHJvYWR8ZW58MHx8MHx8fDA%3D',
      name: 'Black Rhinoceros',
      description: 'A Tanzania native, critically endangered, known for their hooked lips.',
      habitat: 'Ngorongoro Crater',
      status: 'Critically Endangered'
    },
  ];

  const physicalFeatures = [
    {
      tag: 'Mountain',
      image: 'https://images.unsplash.com/photo-1650668302199-59ac9e47f405?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW91bnQlMjBLaWxpbWFuamFybyUyMEFmcmljYSVFMiU4MCU5OXMlMjBoaWdoZXN0JTIwcGVhayUyMCg1JTJDODk1bSUyMCUyRiUyMDE5JTJDMzQxZnQpJTIwd2l0aCUyMGElMjBzbm93JTIwY2FwcGVkJTIwc3VtbWl0JTIwKFVodXJ1JTIwUGVhayl8ZW58MHx8MHx8fDA%3D',
      name: 'Mount Kilimanjaro',
      description: 'Africa’s highest peak (5,895m / 19,341ft) with a snow-capped summit (Uhuru Peak).',
      details: 'Features five vegetation/climatic zones (rainforest, moorland, alpine desert, arctic summit). Popular for trekking, hiking, and adventure tourism.'
    },
    {
      tag: 'Crater',
      image: 'https://images.unsplash.com/photo-1559749453-c16af8b24f17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5nb3Jvbmdvcm8lMjBDcmF0ZXIlMjBXb3JsZCVFMiU4MCU5OXMlMjBsYXJnZXN0JTIwdW5icm9rZW4lMjB2b2xjYW5pYyUyMGNhbGRlcmElMjAoMjBrbSUyMHdpZGUlMkMlMjA2MDBtJTIwZGVlcCl8ZW58MHx8MHx8fDA%3D',
      name: 'Ngorongoro Crater',
      description: 'World’s largest unbroken volcanic caldera (20km wide, 600m deep).',
      details: 'A natural "Garden of Eden" with grasslands, forests, and lakes. UNESCO World Heritage Site, home to dense wildlife populations.'
    },
    {
      tag: 'Valley',
      image: 'https://images.unsplash.com/photo-1637594976068-5eed79a13212?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdyZWF0JTIwUmlmdCUyMFZhbGxleSUyMEElMjBtYXNzaXZlJTIwZ2VvbG9naWNhbCUyMHRyZW5jaCUyMGN1dHRpbmclMjB0aHJvdWdoJTIwVGFuemFuaWEufGVufDB8fDB8fHww',
      name: 'Great Rift Valley',
      description: 'A massive geological trench cutting through Tanzania.',
      details: 'Features dramatic escarpments, lakes, and hot springs. Important lakes: Lake Manyara, Lake Eyasi, and Lake Natron.'
    },
    {
      tag: 'Lake',
      image: 'https://images.unsplash.com/photo-1559038210-896c348db241?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxha2UlMjB0YW5nYW55aWthfGVufDB8fDB8fHww',
      name: 'Lake Tanganyika',
      description: 'World’s second deepest and longest freshwater lake.',
      details: 'Rich in biodiversity — home to unique fish species. Scenic shorelines and fishing activities.'
    },
    {
      tag: 'Lake',
      image: 'https://images.unsplash.com/photo-1694997056334-7bf5d6553426?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFrZSUyME55YXNhJTIwKExha2UlMjBNYWxhd2kpJTIwQ3J5c3RhbCUyMGNsZWFyJTIwd2F0ZXJzJTIwYW5kJTIwc2FuZHklMjBiZWFjaGVzLnxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Lake Nyasa (Lake Malawi)',
      description: 'Crystal-clear waters and sandy beaches.',
      details: 'Known for hundreds of colorful cichlid fish species. Popular for snorkeling and diving.'
    },
    {
      tag: 'Plains',
      image: 'https://images.unsplash.com/photo-1580145575237-75fec2a0320b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VyZW5nZXRpfGVufDB8fDB8fHww',
      name: 'Serengeti Plains',
      description: 'Endless grasslands stretching across northern Tanzania.',
      details: 'Famous for the Great Migration of wildebeest and zebras. Flat plains dotted with acacia trees and kopjes (rocky outcrops).'
    },
    {
      tag: 'Mountain',
      image: 'https://images.unsplash.com/photo-1693881006587-8fb868e17946?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE1vdW50JTIwTWVydSUyMFRhbnphbmlhJUUyJTgwJTk5cyUyMHNlY29uZCUyMGhpZ2hlc3R8ZW58MHx8MHx8fDA%3D',
      name: 'Mount Meru',
      description: 'Tanzania’s second-highest peak (4,566m).',
      details: 'Located in Arusha National Park. Less crowded alternative to Kilimanjaro, with spectacular hiking trails.'
    },
    {
      tag: 'Gorge',
      image: 'https://www.ncaa.go.tz/wp-content/uploads/2022/08/Olduvai-museum-1024x681.jpg',
      name: 'Olduvai Gorge',
      description: 'Deep gorge in the Great Rift Valley.',
      details: 'Known as the “Cradle of Humankind.” Archaeological site where early human fossils were discovered.'
    },
    {
      tag: 'Island',
      image: 'https://images.unsplash.com/photo-1683322753580-6bf07759dbfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHphbnppYmFyfGVufDB8fDB8fHww',
      name: 'Zanzibar Archipelago',
      description: 'White sandy beaches, coral reefs, spice plantations.',
      details: 'Includes Mafia Island (famous for whale shark diving and marine life) and Pemba Island (lush forests and diving spots).'
    },
  ];

  const filteredAnimals = activeFilter === 'All' 
    ? animals 
    : animals.filter(animal => animal.tag === activeFilter);

  const filteredFeatures = activeFilter === 'All' 
    ? physicalFeatures 
    : physicalFeatures.filter(feature => feature.tag === activeFilter);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const getTagColor = (tag) => {
    switch(tag) {
      case 'Big Five': return 'big-five';
      case 'Predator': return 'predator';
      case 'Herbivore': return 'herbivore';
      case 'Mountain': return 'mountain';
      case 'Crater': return 'crater';
      case 'Valley': return 'valley';
      case 'Lake': return 'lake';
      case 'Plains': return 'plains';
      case 'Gorge': return 'gorge';
      case 'Island': return 'island';
      default: return 'default';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Critically Endangered': return 'critical';
      case 'Endangered': return 'endangered';
      case 'Vulnerable': return 'vulnerable';
      case 'Near Threatened': return 'near-threatened';
      default: return 'stable';
    }
  };

  return (
    <div className="wildlife-container">
      <div className="wildlife-header">
        <h1>Tanzania's Incredible Wildlife and Landscapes</h1>
        <p className="subtitle">
          Discover the diverse fauna and stunning physical features that make Tanzania a unique destination, from the legendary Big Five to iconic landscapes like Mount Kilimanjaro and the Serengeti Plains.
        </p>
      </div>

      <div className="filters-section">
        <div className="filters">
          {['All', 'Big Five', 'Predator', 'Herbivore', 'Mountain', 'Crater', 'Valley', 'Lake', 'Plains', 'Gorge', 'Island'].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="results-count">
          {filteredAnimals.length + filteredFeatures.length} {filteredAnimals.length + filteredFeatures.length === 1 ? 'item' : 'items'} found
        </div>
      </div>

      <div className="animal-grid">
        {filteredAnimals.map((animal, index) => (
          <div key={`animal-${index}`} className="animal-card">
            <div className="card-image-container">
              <img src={animal.image} alt={animal.name} className="animal-image" />
              <div className={`tag ${getTagColor(animal.tag)}`}>
                {animal.tag}
              </div>
              <div className="image-overlay"></div>
            </div>
            
            <div className="card-content">
              <h3 className="animal-name">{animal.name}</h3>
              <p className="animal-description">{animal.description}</p>
              
              <div className="animal-details">
                <div className="detail-item">
                  <span className="detail-label">Habitat:</span>
                  <span className="detail-value">{animal.habitat}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Status:</span>
                  <span className={`status-badge ${getStatusColor(animal.status)}`}>
                    {animal.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredFeatures.map((feature, index) => (
          <div key={`feature-${index}`} className="animal-card">
            <div className="card-image-container">
              <img src={feature.image} alt={feature.name} className="animal-image" />
              <div className={`tag ${getTagColor(feature.tag)}`}>
                {feature.tag}
              </div>
              <div className="image-overlay"></div>
            </div>
            
            <div className="card-content">
              <h3 className="animal-name">{feature.name}</h3>
              <p className="animal-description">{feature.description}</p>
              
              <div className="animal-details">
                <div className="detail-item">
                  <span className="detail-label">Details:</span>
                  <span className="detail-value">{feature.details}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {(filteredAnimals.length + filteredFeatures.length) === 0 && (
        <div className="no-results">
          <h3>No items found</h3>
          <p>Try selecting a different filter to see more wildlife or landscapes.</p>
        </div>
      )}
    </div>
  );
}

export default Wildlife;
