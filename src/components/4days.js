import React from 'react';
import { MapPin, Clock, CheckCircle, XCircle } from 'lucide-react';

const FourDays = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header */}
      <div className="bg-green-400 h-2"></div>
      
      {/* Breadcrumb */}
      <div className="px-6 py-2 text-sm text-gray-600">
        Home / Tanzania / Tanzania Safari / <span className="text-blue-600">4 Days</span>
      </div>

      {/* Main Title */}
      <div className="px-6 py-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          4 Days Tanzania Wildlife Safari – Best of Tarangire, Ngorongoro and Lake Manyara National Parks
        </h1>
        
        <p className="text-gray-700 mb-6">
          Embark on a captivating 4 days Tanzania wildlife safari to explore the highlights of Tanzania's Northern Safari Circuit. Immerse yourself in the awe-inspiring wildlife amidst diverse landscapes, open savannas in the forest, large baobab in trees, elephants roaming through the bush, and an enchanting array of animals within a collapsed volcano.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Safari Image */}
          <div className="mb-6">
            <img 
              src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Tanzania Wildlife Safari - Antelopes in savanna"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Itinerary Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Itinerary for the 4 Days Tanzania Wildlife Safari
            </h2>

            {/* Day 1 */}
            <div className="mb-6">
              <div className="bg-green-100 border border-green-200 p-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Day 1: Arrival | Arusha</h3>
              </div>
              <p className="text-gray-700 px-2">
                The company representative will greet you at the airport and transport you to your accommodation in Arusha. Depending on your arrival time, you can enjoy a city tour around Arusha and gear up for the adventure of a lifetime. Bustling Arusha is a pivotal hub in northern Tanzania's safari experience, with most travelers passing through at some point.
              </p>
            </div>

            {/* Day 2 */}
            <div className="mb-6">
              <div className="bg-green-100 border border-green-200 p-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Day 2: Transfer to Tarangire National Park</h3>
              </div>
              <p className="text-gray-700 px-2">
                After breakfast, your safari driver guide will pick you up from your accommodation and drive you to Tarangire National Park, a journey of about two and a half hours to well-paved roads. The park, named after the Tarangire River, serves as the only water source for wildlife during the dry season. The landscape is dotted with distinctive baobab trees, and you can expect to spot large elephant herds, often seen gathering by the river, as well as giraffes, bushbucks, and hartebeests. Predators like lions and leopards frequently follow these animals for easy prey, while the trees are adorned with numerous bird species like bee-eaters, hornbills, and ground hornbills, enhancing your wildlife experience. Some Baobab trees, some over a thousand years old.
              </p>
            </div>

            {/* Day 3 */}
            <div className="mb-6">
              <div className="bg-green-100 border border-green-200 p-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Day 3: Transfer to Ngorongoro Crater</h3>
              </div>
              <p className="text-gray-700 px-2">
                After breakfast, you will drive into the crater regions of the Ngorongoro Conservation Area. As you approach Ngorongoro Crater, it appears as a forgotten world hidden by steep volcanic walls in a pristine wilderness featuring sweeping savanna, pockets of acacia woodland, and glimmering lakes and swamps. The Crater formed by a massive volcanic explosion and collapse two to three million years ago, is a breathtaking natural amphitheater and a UNESCO World Heritage Site, hosting some of Africa's densest large mammal populations. Descending into the Crater, you will encounter large herds of wildebeest and zebra, impala, and gazelle.
              </p>
            </div>

            {/* Day 4 */}
            <div className="mb-6">
              <div className="bg-green-100 border border-green-200 p-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Day 4: Lake Manyara National Park & Transfer back to Arusha</h3>
              </div>
              <p className="text-gray-700 px-2">
                After breakfast, you will drive to Lake Manyara National Park, a small but diverse park located 120 km west of Arusha. This park offers unique experiences for nature enthusiasts, including the towering Great Rift Escarpment on its western boundary. The park's namesake is a shallow salt lake, which floods and dries with the seasons, attracting thousands of wading birds, including flamingos and over 400 other bird species. In the park's dense evergreen forests, you may spot baboons and elephants, and be on the lookout for the famous tree-climbing lions.
              </p>
              <p className="text-gray-700 mt-2 px-2">
                You will enjoy a picnic lunch after your game drive, you will bid farewell to your guide and be dropped off at your chosen location, whether it be the Arusha Kilimanjaro Airport, or Arusha Airport.
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          {/* Safari Details Card */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Tanzania Wildlife Safari</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-gray-600" />
                <span>Duration: 4 Days, 3 Nights safari</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-gray-600" />
                <span>Regions / Parks</span>
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
                <span>Transportation via 4x4 safari vehicle with a pop up roof</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Accommodation and meals as stated</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Entrance fees to all National Parks</span>
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
                <span>Game drives as per itinerary</span>
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
                <span>Travel insurance</span>
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

export default FourDays;