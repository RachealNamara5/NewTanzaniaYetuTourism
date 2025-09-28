import React from 'react';
import { Phone, Calendar, Camera, Eye, Mountain } from 'lucide-react';

const Tarangire = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-400 text-white py-2 px-4">
        <h1 className="text-lg font-semibold">TARANGIRE NATIONAL PARK</h1>
      </div>

      {/* Navigation Breadcrumb */}
      <div className="bg-white py-2 px-4 text-sm text-gray-600 border-b">
        
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* Main Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Tarangire National Park - Tarangire Safari Tours
        </h1>

        {/* Main Description */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Tarangire National Park forms the centerpiece of an annual migratory cycle that includes up to 3,000 elephants, 25,000 wildebeest and 30,000 zebra. It is a significant destination for safari enthusiasts. The park derives its name from the Tarangire River, which meanders its landscape and serves as a crucial water source for animals, particularly during the dry season.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Situated between the meadows of Tarangire and south of Lake Manyara National Park and a short drive from Arusha, Tarangire is conveniently located for visitors traversing the Northern Tanzania safari circuit, including routes to Ngorongoro and the Serengeti. For those seeking both luxury and adventure, the park offers various high-end safari lodges.
          </p>
        </div>

        {/* Wildlife and Scenery Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center">
            <Camera className="mr-2" size={20} />
            Wildlife and Scenery
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Tarangire is famed for its large elephant populations, especially during the peak migration from July to October when up to 3,000 gather in a single day. The park provides habitat for giraffes, ostriches, and over 550 bird species at once. Besides elephants, the park hosts a variety of other mammals such as lions, zebras, and antelopes. The park's vast grasslands and iconic baobab trees provide a rugged and distinct "Out of Africa" atmosphere.
          </p>
        </div>

        {/* Best Time to Visit Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center">
            <Calendar className="mr-2" size={20} />
            Best Time to Visit Tarangire National Park
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The best time to visit Tarangire is during the dry season from June to October. During these months, wildlife congregates around the Tarangire River, making game viewing easier and more rewarding with increased animal densities and migratory patterns. To observe large herds of animals, particularly elephants, visit between July and October. For bird watchers, the wet season from November to May offers optimal conditions as it is outside peak season but still relatively dry. The low season from late November to May is ideal for bird watching, as the park becomes lush and green.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="text-center">
            <p className="text-red-600 font-semibold mb-2">Ready to Plan a Tanzania Safari? Talk to a Travel Adviser Now (Call/WhatsApp)</p>
            <div className="flex items-center justify-center text-green-600 font-bold text-xl">
              <Phone className="mr-2" size={20} />
              +256 782 118 037
            </div>
          </div>
        </div>

        {/* Climate Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold text-red-600 mb-4">Climate</h2>
          <p className="text-gray-700 leading-relaxed">
            The climate in Tarangire is generally pleasant and temperate. The park experiences "long rains" from March to May and "short rains" from November to December, typically in the afternoon rather than throughout the day. The dry season runs from June to October with clear skies and mild temperatures, with afternoon highs around 25°C (77°F) and cooler nights at approximately 16°C (61°F). Warm clothing is recommended for early morning game drives.
          </p>
        </div>

        {/* Activities Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center">
            <Eye className="mr-2" size={20} />
            Activities and Attractions in Tarangire National Park
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                <Mountain className="mr-2" size={16} />
                Game Drives and Walking Tours:
              </h3>
              <p className="text-gray-700 leading-relaxed ml-6">
                Tarangire offers a variety of wildlife viewing opportunities, including game drives and walking tours and fly camping safaris.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Night Game Drives:</h3>
              <p className="text-gray-700 leading-relaxed ml-6">
                Night game drives are permitted in the park but only through select accommodations such as Swala and Oliver's Camp, which have Tabaka's requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Balloon Safaris:</h3>
              <p className="text-gray-700 leading-relaxed ml-6">
                Hot air balloon safaris provide an exceptional aerial view of the park's wildlife and scenery, including lions and other carnivores.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Bird Watching:</h3>
              <p className="text-gray-700 leading-relaxed ml-6">
                With over 500 bird species, Tarangire is a paradise for bird enthusiasts. The best birding period is from February to March during the wet season, offering an enriching experience for avian lovers.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mt-4">
            Tarangire National Park stands out as a premier <span className="text-blue-600 underline cursor-pointer">safari destination in Tanzania</span>, offering <span className="text-blue-600 underline cursor-pointer">diverse wildlife</span>, stunning landscapes, and unique activities for visitors.
          </p>
        </div>

        {/* Safari Packages Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-red-600 mb-6">Our Top Tanzania Safari Packages to Tarangire National Park</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Package 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 relative">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold">
                      3 Days Tanzania Luxury Safari
                    </div>
                  </div>
                  {/* Stylized cheetah silhouette */}
                  <div className="absolute right-4 top-4 text-yellow-200 opacity-70">
                    <svg width="80" height="60" viewBox="0 0 80 60" fill="currentColor">
                      <ellipse cx="20" cy="40" rx="15" ry="8"/>
                      <ellipse cx="45" cy="35" rx="12" ry="10"/>
                      <ellipse cx="65" cy="30" rx="8" ry="6"/>
                      <circle cx="25" cy="25" r="3"/>
                      <circle cx="35" cy="20" r="2"/>
                      <circle cx="50" cy="18" r="2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-600 relative">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-emerald-700 text-white px-3 py-1 rounded text-sm font-semibold">
                      5 Days Best of Tanzania Safari
                    </div>
                  </div>
                  {/* Stylized lion silhouette */}
                  <div className="absolute right-4 top-4 text-green-200 opacity-70">
                    <svg width="80" height="60" viewBox="0 0 80 60" fill="currentColor">
                      <ellipse cx="40" cy="35" rx="25" ry="15"/>
                      <circle cx="40" cy="25" r="12"/>
                      <circle cx="35" cy="22" r="2"/>
                      <circle cx="45" cy="22" r="2"/>
                      <path d="M35 28 Q40 32 45 28" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarangire;