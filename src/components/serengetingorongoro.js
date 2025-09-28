import React from 'react';
import { MapPin, Clock, CheckCircle, XCircle } from 'lucide-react';

const SerengetiNgorongoro = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header */}
      <div className="bg-green-400 h-2"></div>
      
      {/* Breadcrumb */}
      

      {/* Main Title */}
      <div className="px-6 py-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          3 Days Serengeti National Park & Ngorongoro Crater
        </h1>
        
        <p className="text-gray-700 mb-6">
          Embark on this 3 Days Serengeti National Park & Ngorongoro Crater Safari to explore two of Africa's most regional wonders. Witness the awe-inspiring wildebeest migration in the Serengeti followed by a cultural descent into the magnificent Ngorongoro Crater. This 3 days safari culminates with the most incredible views and encounters that create lifelong memories.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Safari Image */}
          <div className="mb-6">
            <img 
              src="https://images.unsplash.com/photo-1549366021-9f761d040a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Serengeti National Park - Wildebeest migration"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Itinerary Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Itinerary for the 3 Days Serengeti National Park & Ngorongoro Crater
            </h2>

            {/* Day 1 */}
            <div className="mb-6">
              <div className="bg-green-100 border border-green-200 p-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Day 1: Transfer to Serengeti National Park</h3>
              </div>
              <p className="text-gray-700 px-2">
                After an early breakfast, you'll depart from your accommodations towards the world-famous <strong>Serengeti National Park</strong>. Our route will take us past the rim of the <strong>Ngorongoro Crater</strong>, while simultaneously affording mesmerizing aerial the vistas.
              </p>
              <p className="text-gray-700 px-2 mt-2">
                The Serengeti ecosystem and culture to be filled with excitement over the 14,750 square kilometers. Whether it be the Serengeti, is one of the most famous wildlife areas in the world, and home to the largest terrestrial wildlife migration on the planet, as well as predators such as big cats, which you can discover the Serengeti's big herds on the Heart Land.
              </p>
            </div>

            {/* Day 2 */}
            <div className="mb-6">
              <div className="bg-green-100 border border-green-200 p-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Day 2: Serengeti National Park and Transfer to Ngorongoro Crater</h3>
              </div>
              <p className="text-gray-700 px-2">
                We will start our day with early morning game drive in the central Serengeti. As the sun rises, the savannah comes alive with thousands of Thomson's and Grant's gazelles, wildebeest and zebras. You may also see lions, leopards and cheetahs.
              </p>
              <p className="text-gray-700 px-2 mt-2">
                Later, we are journeying to the <strong>Ngorongoro Conservation Area</strong>, where we will enjoy dinner and an overnight stay.
              </p>
            </div>

            {/* Day 3 */}
            <div className="mb-6">
              <div className="bg-green-100 border border-green-200 p-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Day 3: Ngorongoro Crater & Transfer back to Arusha</h3>
              </div>
              <p className="text-gray-700 px-2">
                After an early breakfast, we descend over 600 meters into the crater to view wildlife for a full-day crater tour. We'll continue with a crater tour where you get to see the great wildebeest, zebra, buffalo, eland, warthog, hippo, and giant African elephants. Another big draw card to this picturesque national park is its dense population of predators, which include lions, hyenas, jackals, cheetahs and the ever-elusive leopard, which sometimes require a trained eye to spot. We will visit Lake Magadi, a large but shallow alkaline lake in the southwestern corner, which is one of the main features of the crater. A large number of flamingos, hippos and other water birds can usually be seen here.
              </p>
              <p className="text-gray-700 px-2 mt-2">
                <strong>Ngorongoro Crater:</strong> formed from the collapse of a massive ancient volcano, stunning as a geological wonder creates this extraordinary landscape and is well stocked plains, the landscape teems with wildebeest, and grazing animals including large herds of zebra and buffalo. Large numbers of rhino also populate this enclave. We will find lunch at a scenic spot and, in the late afternoon, head back to Arusha for your onward or departure, making for a well-spent in Africa.
              </p>
              <p className="text-gray-700 px-2 mt-2">
                After an afternoon filled with wonderful wildlife sightings, we will begin our journey back to Arusha.
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          {/* Safari Details Card */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">3 Days Serengeti National Park & Ngorongoro Crater</h3>
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
                <span>Accommodation and meals as stated</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Entrance fees at National Parks</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>En-route lunches</span>
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
                <span>English Driver guide</span>
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

export default SerengetiNgorongoro;