import React from 'react';
import { MapPin, Clock, CheckCircle, XCircle } from 'lucide-react';

const ThreeDaySerengeti = () => {
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
          3 Days Serengeti National Park Safari – Tanzania Adventure Wildlife Tour
        </h1>
        
        <p className="text-gray-700 mb-4">
          Experience the adventures of a 3 Days Serengeti National Park Safari, beginning with a warm transfer from Arusha through the stunning landscapes culminating into the breathtaking Serengeti ecosystem. You adventure guide ensures that each wildlife encounter becomes a cherished memory, while every landscape becomes a breathtaking backdrop for your Tanzania Wildlife safari.
        </p>
        
        <p className="text-gray-700 mb-6">
          Explore the vast expanses teeming with wildebeest, zebra, and antelopes, and spot cats such as jaguars, cheetahs yourself in the heart of Africa and will be spoiled immersion of the world renowned and Serengeti landscape with 1.5 million wildebeest migration towards Arusha.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Safari Image */}
          <div className="mb-6">
            <img 
              src="https://images.unsplash.com/photo-1551622781-8b7a216e9c15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Serengeti National Park Safari - Hyena with cubs"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Itinerary Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Itinerary for the 3 Days Serengeti National Park Safari
            </h2>

            {/* Day 1 */}
            <div className="mb-6">
              <div className="bg-green-100 border border-green-200 p-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Day 1: Transfer to Serengeti National Park</h3>
              </div>
              <p className="text-gray-700 px-2">
                You will be picked up early in the morning from your accommodation in Arusha, crossing through the Serengeti Conservation Area and passing by Olduvai Gorge – the one where Dr. Louis and Mary Leakey discovered the world of early mankind archaeology remains, where you may spot eland and zebra.
              </p>
              <p className="text-gray-700 px-2 mt-2">
                Breakfast and lunch will be provided onboard safari vehicle during the morning and midday, including en-route to reach the Serengeti Game Drive afternoon, meal, overnight at overnight accommodations, game drive including the night time observation among the magnificent abundant wildlife, which makes the Serengeti endlessly vibrant for you.
              </p>
            </div>

            {/* Day 2 */}
            <div className="mb-6">
              <div className="bg-green-100 border border-green-200 p-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Day 2: Full Day game drive in Serengeti National Park</h3>
              </div>
              <p className="text-gray-700 px-2">
                You'll be up early for breakfast, as you have a thrilling day ahead in the Great Serengeti. National park morning and afternoon wildlife viewing game drive where you will spend time tracking the Big Five and other magnificent, animals such as gazelles, zebras, thousands of wildebeest at different locations and time in the vast plains of the Serengeti landscape and big rocks, where various animals takes the big migrations between Masai Mara and Serengeti national parks.
              </p>
              <p className="text-gray-700 px-2 mt-2">
                Following this spectacular events, which would require more ways in Serengeti National Park, is particularly rewarding. The park's great expanse has endless wildlife and is home to numerous, broad-swept, short grass lands and rock, and large-spaced scrub, as well as the distant plains landscape views, which help you get the most out of game viewing.
              </p>
            </div>

            {/* Day 3 */}
            <div className="mb-6">
              <div className="bg-green-100 border border-green-200 p-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Day 3: Final game drive in Serengeti National Park & transfer to Arusha</h3>
              </div>
              <p className="text-gray-700 px-2">
                Early breakfast before embarking on a final game drive through the vast expanses of Serengeti for more wildlife viewing opportunities and return transfer back to Arusha.
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          {/* Safari Details Card */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">3 Day Serengeti National Park Safari</h3>
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
                <span>Accommodation on a safari vehicle with a pop up roof</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Game drive as per itinerary</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Entrance fees at National Parks</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Enroute lunches</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Bottled water</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Professional English speaking driver guide</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>English driver guides</span>
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
                <span>Tips</span>
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

export default ThreeDaySerengeti;