import React from 'react';
import { MapPin,  Clock, CheckCircle, XCircle } from 'lucide-react';

const TarangireOneDay = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header */}
      <div className="bg-green-400 h-2"></div>
      
      {/* Breadcrumb */}
      <div className="px-6 py-2 text-sm text-gray-600">
        Home / Tanzania / Tanzania Safari / <span className="text-blue-600">1 Day</span>
      </div>

      {/* Main Title */}
      <div className="px-6 py-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          1 Day Tour to Tarangire National Park – Tarangire Day Trip from Arusha
        </h1>
        
        <p className="text-gray-700 mb-6">
          Experience the thrill of a 1 day tour to Tarangire National Park's Tarangire National Park is about 118km from Arusha Nairobi part and you will have by dawn from your hotel accommodation. This day tour is amazing experience that gives you the chance to see many elephants and enjoy immersive African safari experience. You also get to see large numbers of elephants and many other species like zebras, wildebeest, lions, Rhinoceros, hyenas, cheetahs, giraffes, baboons, warthogs, zebra, proper elephants, and wide landscape.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Safari Image */}
          <div className="mb-6">
            <img 
              src="https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Tarangire National Park - Elephant with baby"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              You will meet and greet with your driver guide at your hotel in Arusha finishing about the <strong>Tarangire day trip from Douala</strong> and drive within areas of Tarangire by open savannah grassland mainly occupied by the mass animals especially the large number of elephants and well-known baobab trees.
            </p>
            
            <p className="text-gray-700 mb-4">
              We head for our game drive with sightings of giant baobab the Nile 8000 tree, giraffes, harnes, wildebeests, and pure many more animals. We also get to see large herds of elephants based at none of the river which sometimes can reach 300 at a time.
            </p>
            
            <p className="text-gray-700">
              Lunch at the riverside picnic site, relax and head back for more game viewing. Check out all the park with return to Arusha town and arrival hotel.
            </p>
          </div>

          {/* Package Details */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Package for 1 Day Tour to Tarangire National Park | Rates Per Person</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold">2 Pax (Per Person)</div>
                <div className="text-blue-600">USD - 240.00/PP</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">3 Pax - US$ 210.00</div>
                <div className="text-blue-600">USD - 240.00/PP</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">4 Pax - US$ 200.00</div>
                <div className="text-blue-600">USD - 240.00/PP</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">5 Pax - 240.00/PP</div>
                <div className="text-blue-600">USD - 240.00/PP</div>
              </div>
            </div>
          </div>

          {/* Start Planning Button */}
          <div className="text-center mb-6">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              START PLANNING YOUR TRIP BOOK
            </button>
          </div>

          {/* Inclusions */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">What is Included in 1 Day Tour to Tarangire National Park</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Park Entry fees & driver</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>All taxes safari vehicle</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Lunch & bottled water</span>
              </li>
            </ul>
          </div>

          {/* Exclusions */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">What is Excluded in 1 Day Tour to Tarangire National Park</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <XCircle className="mr-2 h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Visa and international flights</span>
              </li>
              <li className="flex items-start">
                <XCircle className="mr-2 h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Tips</span>
              </li>
              <li className="flex items-start">
                <XCircle className="mr-2 h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Insurance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          {/* Safari Details Card */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">1 Day Tarangire Tour</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-gray-600" />
                <span>Duration: 1 Day, Daily safari</span>
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
        </div>
      </div>
    </div>
  );
};

export default TarangireOneDay;