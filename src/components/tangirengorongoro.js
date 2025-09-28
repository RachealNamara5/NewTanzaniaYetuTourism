import React from 'react';
import { MapPin, Clock, CheckCircle, XCircle } from 'lucide-react';

const TarangireNgorongoro = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header */}
      <div className="bg-green-400 h-2"></div>
      
      {/* Breadcrumb */}
      <div className="px-6 py-2 text-sm text-gray-600">
        Home / Tanzania / Tanzania Safari / <span className="text-blue-600">3 Days</span>
      </div>

      {/* Main Title */}
      <div className="px-6 py-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          3 Days Tarangire & Ngorongoro Crater Safari – Tanzania Wilderness Safari Tour
        </h1>
        
        <p className="text-gray-700 mb-6">
          Embark on an exciting 3 Days Tarangire & Ngorongoro Crater Safari adventure in Tanzania. Experience the raw excitement of wildlife on their habitat, featuring the diversity. Tanzania has one of the biggest wonders heard and stories looking like a day and are of Africa as your visit the magnificent Ngorongoro Crater, a spectacular caldera, renowned as the 8th natural World Heritage site listed by the Eighth Serengeti safari. 2 Days at Tarangire and finally the natural beauty of Ngorongoro's diverse fauna and wildlife.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Safari Image */}
          <div className="mb-6">
            <img 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Tarangire & Ngorongoro Crater Safari - African sunset landscape"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Itinerary Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Itinerary for the 3 Days Tarangire & Ngorongoro Crater Safari
            </h2>

            {/* Day 1 */}
            <div className="mb-6">
              <div className="bg-green-100 border border-green-200 p-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Day 1: Arrival in Arusha</h3>
              </div>
              <p className="text-gray-700 px-2">
                Our driver guide and team-up welcome you at the airport and transfer you to your lodging in Arusha. Here, you can unwind, spend time sightseeing around this charming city and prepare you for the adventure ahead.
              </p>
              <p className="text-gray-700 px-2 mt-2">
                Accommodation: Mountain View Lodge
              </p>
            </div>

            {/* Day 2 */}
            <div className="mb-6">
              <div className="bg-green-100 border border-green-200 p-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Day 2: Tarangire National Park</h3>
              </div>
              <p className="text-gray-700 px-2">
                Your safari adventure begins with your guide picks you up and traverses Arusha to Arusha for a scenic 2-hour drive to Tarangire National Park after a journey, immersed in the natural beauty of the land. Tarangire National Park, famed for large groups of elephants and scenic baobab trees, encompasses diverse animal life: the captivating Tarangire River, where diverse wildlife such as antelopes, bushbucks, and wild antelopes gather.
              </p>
              <p className="text-gray-700 px-2 mt-2">
                While the afternoon unfolds, myriad vibrant birds, zebras, and their elegance gazelle are able to witness a diverse animal population with predators that are as close as close and well-traveled by the guide. The day's remarkable landscape.
              </p>
              <p className="text-gray-700 px-2 mt-2">
                After a day of exploration late in the evening, where you will head to your self-contained lodge in Karatu, where you'll enjoy a delightful dinner, sunset and day, overnight in its spacious accommodations.
              </p>
            </div>

            {/* Day 3 */}
            <div className="mb-6">
              <div className="bg-green-100 border border-green-200 p-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Day 3: Ngorongoro Crater & Transfer back to Arusha</h3>
              </div>
              <p className="text-gray-700 px-2">
                We will start our early today the day descent in Ngorongoro at the <strong>Ngorongoro Conservation Area</strong>, a UNESCO World Heritage Site and arguably one of Africa's prime natural wonders. Descend over a crater floor abundant populated by a big mix of wildlife including rhino, leopards, buffalo, and more than 25,000 larger animals.
              </p>
              <p className="text-gray-700 px-2 mt-2">
                <strong>The caldera</strong>, a vast ancient caldera, teams with huge 15,000 animals, including the Big Five – lions, elephants, buffaloes, rhinos, and leopards alongside rhinos, wildebeest, grants, hyenas, and many more birds.
              </p>
              <p className="text-gray-700 px-2 mt-2">
                After an extraordinary and a picnic lunch within this crater, we will make our way back to Arusha arriving by the early evening.
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          {/* Safari Details Card */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">3 Days Tarangire & Ngorongoro Crater Safari</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-gray-600" />
                <span>Duration: 3 Days, 2 Nights safari</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-gray-600" />
                <span>Regions / Arusha</span>
              </div>
              <div className="text-xs text-gray-600 ml-6">
                Hotel pickup - Your side returned to your hotel
              </div>
            </div>
          </div>

          {/* Plan Your Trip Button */}
          <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-4">
            Plan Your Trip Now
          </button>

          {/* Contact Info */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800 font-semibold text-sm">Call/WhatsApp for Free Quick Consultation</p>
            <p className="text-red-800 font-bold text-lg">+256 782 118 037</p>
          </div>

          {/* Inclusions */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Inclusions</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Transportation via 4 x 4 safari vehicle with a pop up roof</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Accommodations and meals as stated</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Game drives as per itinerary</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Entrance fees at National Parks</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Bottled water</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>En-route lunches</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Professional English speaking driver guide</span>
              </li>
            </ul>
          </div>

          {/* Exclusions */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Exclusions</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <XCircle className="mr-2 h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Visa Fees & flights</span>
              </li>
              <li className="flex items-start">
                <XCircle className="mr-2 h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Optional activities</span>
              </li>
              <li className="flex items-start">
                <XCircle className="mr-2 h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Tips for guides</span>
              </li>
              <li className="flex items-start">
                <XCircle className="mr-2 h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Laundry</span>
              </li>
              <li className="flex items-start">
                <XCircle className="mr-2 h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Alcoholic drinks</span>
              </li>
              <li className="flex items-start">
                <XCircle className="mr-2 h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>International vaccinations & tests</span>
              </li>
              <li className="flex items-start">
                <XCircle className="mr-2 h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Health test requirements</span>
              </li>
              <li className="flex items-start">
                <XCircle className="mr-2 h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>International travel insurance</span>
              </li>
              <li className="flex items-start">
                <XCircle className="mr-2 h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Items of personal nature</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarangireNgorongoro;