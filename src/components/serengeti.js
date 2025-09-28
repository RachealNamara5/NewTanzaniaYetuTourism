import React from 'react';
import { MapPin, Clock, Plane, Star } from 'lucide-react';

const Serengeti = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-400 text-black py-2 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">SERENGETI NATIONAL PARK</h1>
          <nav className="text-sm">
            
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Serengeti National Park - Africa's Iconic Wildlife Sanctuary
        </h2>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Serengeti National Park in northern <strong>Tanzania</strong> is a <strong>World Heritage Site</strong> spanning approximately 14,750 square kilometers. 
            Famous for its incredible <strong>annual great migration</strong> of wildebeest and zebra. Spanning over 1,700 square 
            miles, this 14,750 sq km park is a home to an array of animals including the African Big Five: giraffes, cheetahs, lions, spotted 
            hyenas, black-backed jackals, warthogs and a number of antelopes. <strong>Serengeti National Park</strong> also shelters diverse birdlife, reptiles, 
            and smaller mammals, making it a haven for wildlife enthusiasts and conservationists alike.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-8">
          <div className="relative bg-amber-100 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=400&fit=crop" 
              alt="Great Migration - Wildebeest and Zebras"
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
              The annual Great Migration at Serengeti River crossing
            </div>
          </div>
        </div>

        {/* Migration Info */}
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            The park's sweeping savannahs combined with acacia trees, provide a stunning backdrop for the <strong>annual Great Migration</strong>, where 
            millions of wildebeest, zebras, and gazelles traverse the plains in search of fresh grazing lands, creating one of nature's most 
            awe-inspiring spectacles.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond the migration, <strong>Serengeti National Park</strong> is one of the most spectacular wildlife events on the planet. Today, more 
            travellers visit this <strong>UNESCO world heritage site</strong> with unmatched wild wildebeest and diverse wildlife making this one of the best 
            African safari game reserves.
          </p>
        </div>

        {/* Best Time to Visit */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
            <Clock className="mr-2" size={24} />
            Best time to visit Serengeti National Park
          </h3>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            The Serengeti National Park is a <strong>year-round safari destination</strong>, though the best time to visit Serengeti National Park depends on 
            the traveller's interests and what you hope to experience.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            The dry season (June to October) is ideal for <strong>game watching</strong>, as animals gather around water sources, making them easier to spot. 
            The wet, dry seasons (June and July) offer sunny temperatures and lush landscapes following the rainy season, while the rains from 
            October (September and October) presents excellent opportunities for predator sightings as they hunt vulnerable prey. To <strong>witness 
            the Great Migration</strong> at its peak visit from <strong>July to September</strong> when vast herds cross the <strong>Mara river</strong>. For a more serene visit 
            less to September when fauna concentrate in the Serengeti ecosystem plains and attempt treacherous river crossings.
          </p>
        </div>

        {/* Things to do */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-red-600 mb-4">
            Things to do and see in Serengeti National Park
          </h3>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Activities in Serengeti national park include game drives, great migration, bird watching and hot air balloon safari experiences.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            A guided safari through Serengeti National Park offers an unforgettable experience as you traverse the savannahs plains. <strong>Booking 
            a Tanzania safari to Serengeti</strong> with <strong>African Adventure Travellers</strong>, guests will exploring game drives in its enclaves big land, wildlife 
            including the lions, elephants, leopards, buffaloes, rhinoceroses, cheetahs, giraffes, hyenas, and an abundance of other wildlife 
            species.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            For a more <strong>immersive experience</strong>, consider a <strong>guided walking safari</strong> to explore the park's diverse landscapes up close. Additionally, 
            don't miss the opportunity to interact with the local Maasai communities and gain insight into their traditional way of life, adding 
            cultural enrichment to your Serengeti adventure.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            You can also go for a <strong>hot air balloon experience</strong>. This provides you with a breathtaking aerial perspective of the sweeping 
            landscapes and wildlife below.
          </p>
        </div>

        {/* Getting There Section */}
        <div className="mb-8 bg-red-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
            <Plane className="mr-2" size={20} />
            How to Get to the Serengeti National Park
          </h3>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>By Air:</strong> Fly into Kilimanjaro International Airport or Julius Nyerere International Airport in Dar es Salaam, followed by a connecting 
            flight to Seronera airstrip or other airstrips within the park.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>By Road:</strong> Drive from Arusha or Kilimanjaro to Serengeti National Park - a scenic if approximately 6-10 hours, depending on road conditions. To 
            avoid inconveniences, it's advisable to opt for a <strong>guided tour with African Adventure Travellers</strong>.
          </p>
          
          <div className="bg-red-600 text-white p-4 rounded-lg mb-4">
            <h4 className="font-bold mb-2">Africa Safari Tours to Serengeti National Park</h4>
            <p className="text-sm mb-3">
              Our <strong>Africa Safari Tours</strong> offer unparalleled access through the <strong>Serengeti National Park</strong>. With any of our African safari tour 
              packages to Serengeti, travellers experience the thrill of <strong>encountering the Big Five</strong> up close, <strong>witnessing the awe-inspiring Great 
              Migration</strong> and the rich cultural heritage of the region with authentic <strong>Maasai village visits</strong>.
            </p>
            <button className="bg-white text-red-600 px-6 py-2 rounded font-bold hover:bg-gray-100 transition-colors">
              START PLANNING YOUR TANZANIA SAFARI
            </button>
          </div>
        </div>

        {/* Safari Tours Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-red-600 mb-6">
            Best Africa Safari Tours to Serengeti National Park
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tour 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=250&fit=crop" 
                alt="Wildebeest Migration Safari"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm inline-block mb-2">
                  5 Days Serengeti Wildebeest Migration Safari
                </div>
              </div>
            </div>
            
            {/* Tour 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop" 
                alt="Lake Manyara & Serengeti Safari"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm inline-block mb-2">
                  5 Days Lake Manyara & Serengeti Wildlife Safari
                </div>
              </div>
            </div>
            
            {/* Tour 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=250&fit=crop" 
                alt="Serengeti National Park Safari"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm inline-block mb-2">
                  4 Days Serengeti National Park Safari
                </div>
              </div>
            </div>
            
            {/* Tour 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=250&fit=crop" 
                alt="Serengeti & Ngorongoro Crater"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm inline-block mb-2">
                  4 Days Serengeti & Ngorongoro Crater
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
            <MapPin className="mr-2" size={24} />
            Map of Serengeti National Park
          </h3>
          
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-start mb-4">
              <div className="mr-4">
                <h4 className="font-bold text-lg">Serengeti National Park</h4>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">8,717 reviews</span>
                </div>
                <p className="text-sm text-gray-600">National park in Tanzania</p>
              </div>
            </div>
            
            {/* Simplified Map Representation */}
            <div className="bg-green-200 h-64 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center">
                  <MapPin size={20} className="mr-2" />
                  Serengeti National Park
                </div>
              </div>
              
              {/* Location labels */}
              <div className="absolute top-4 left-4 text-sm font-semibold">Musoma</div>
              <div className="absolute top-4 right-4 text-sm font-semibold">Bariadi</div>
              <div className="absolute bottom-4 left-4 text-sm font-semibold">Ngorongoro</div>
              <div className="absolute bottom-4 right-4 text-sm font-semibold">Singida</div>
              
              {/* Scale and attribution */}
              <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                Map data ©2023 Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serengeti;