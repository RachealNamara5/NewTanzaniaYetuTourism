import React from 'react';
import { MapPin, Calendar, Camera } from 'lucide-react';

const Ngorongoro = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header with green bar */}
      <div className="bg-green-200 px-4 py-2">
        <h2 className="text-sm font-medium text-gray-700">NGORONGORO CONSERVATION AREA</h2>
        <div className="text-xs text-gray-600 mt-1">
          
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Ngorongoro Conservation Area - Ngorongoro Crater
        </h1>

        {/* Introduction */}
        <div className="mb-6">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The <strong>Ngorongoro Conservation Area</strong> is a protected conservation area and World Heritage Site in northern Tanzania. It encompasses 8,292 square kilometers (3,202 sq mi). The area is named after <strong>Ngorongoro Crater</strong>, a large volcanic caldera within the area. The conservation area is administered by the Ngorongoro Conservation Area Authority, an arm of the Tanzanian government, and its boundaries follow the boundary of the Ngorongoro District in Arusha Region. The western portion of the park abuts the Serengeti National Park, and the area comprises multiple usage zones.
          </p>
          
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Lake Natron area is located in the Ngorongoro Crater and is one of the world's most unforgettable cultures. The conservation area also hosts significant archaeological sites, including <strong>Olduvai Gorge</strong>, sometimes referred to as the cradle of mankind. The northern and western rims rise 2,000 meters above the crater floor.
          </p>
          
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The primary volcanic structures, including Ngorongoro Crater and the volcanoes Olmoti and Empakaai, formed between 20 million years ago. Embedded Crater is especially notable for containing lake, which intermittently half its eastern face.
          </p>
          
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Ngorongoro Conservation Area</strong> supports the world's largest herds of ungulates, including <strong>wildebeest</strong>, plains zebras, and gazelles. The conservation area is also home to the densest population of <strong>lions</strong> in the world. Black rhinoceros, warthogs, hippopotami, elephants, flamingos, and the endangered black rhinoceros and African hunting dog. Archaeological finds more than what had been collected in the area are fossils, pottery, stone circles, and human remains, ancient cave springs, and bronze, and Maasai settlements remain to the site of the oldest found there, along with fossilized hominids, carved cave-rings, and bronze and Maasai settlements in the area.
          </p>
        </div>

        {/* Designation Info */}
        <div className="mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            Initially part of the <strong>Serengeti National Park</strong> in 1951, the <strong>Ngorongoro Conservation Area</strong> was designated as a separate entity in 1959 and as a UNESCO <strong>World Heritage Site</strong> in 1979. Through partnerships established with neighboring communities. 23 sites within Masaai are permitted to graze their livestock within the area. Concerns in the site 20th century included ecosystem damage from overgrazing but have been addressed and the area is currently conserved. Recent developments are conserving them in the area of cultural lands and World Heritage status.
          </p>
        </div>

        {/* Best time to visit section */}
        <div className="bg-orange-50 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-orange-600" />
            Best time to visit the Ngorongoro Conservation Area
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            The <strong>Ngorongoro Conservation Area</strong> experiences mild temperatures year round, with short rains occurring in October and November, and longer rains from March to May. Daytime temperatures in the crater are generally moderate while nighttime temperatures can be chilly. The dry months of July and August provide the most favorable conditions for game viewing in the Ngorongoro Crater.
          </p>
          <div className="mt-3 text-sm text-orange-700 font-medium">
            Ready to Plan a Tanzania Safari? Tell Us a Travel Advisor Now (Call/WhatsApp)
            <br />
            +255 782 118 037
          </div>
        </div>

        {/* How to get there section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-600" />
            How to get there
          </h2>
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">By Road:</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Arusha, the closest town, is about 190 miles (180 km) away, a two-hour drive passing through Karatu. Visitors typically enter the Ngorongoro Conservation Area via the Lodare Gate near Karatu. Safari travelers in the Serengeti can access the Ngorongoro Conservation Area through the Naabi Hill Gate, driving on gravel roads and keeping a lookout for wildlife along the way.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2">By Air:</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              The nearest airports to the Ngorongoro Conservation Area are Arusha International Airport and Kilimanjaro International Airport. From which guests would need to transfer by road. There are companies that offer chartered flights to an airstrip situated at the rim of the Ngorongoro Crater.
            </p>
          </div>
        </div>

        {/* Safari Packages section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <Camera className="w-5 h-5 mr-2 text-green-600" />
            Our Top Tanzania Safari Packages to Ngorongoro Crater
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Safari Package 1 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/api/placeholder/400/250" 
                alt="Leopard safari"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium inline-block mb-2">
                  5 Days Tanzania Luxury Safari
                </div>
                <p className="text-white text-sm font-medium">
                  Experience luxury wildlife viewing with expert guides
                </p>
              </div>
            </div>

            {/* Safari Package 2 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/api/placeholder/400/250" 
                alt="Lions safari"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium inline-block mb-2">
                  6 Days Best of Tanzania Safari
                </div>
                <p className="text-white text-sm font-medium">
                  Discover the best wildlife destinations in Tanzania
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ngorongoro;