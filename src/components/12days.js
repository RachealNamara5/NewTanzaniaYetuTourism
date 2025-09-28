import React from 'react';

const TwelveDays = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header */}
      <div className="bg-green-100 p-4 border-b-2 border-green-300">
        <div className="text-sm text-gray-600 mb-1">
          12 DAYS TANZANIA LUXURY SAFARI & ZANZIBAR BEACH TOUR
        </div>
        <h1 className="text-2xl font-bold text-gray-800">
          12 Days Tanzania Luxury Safari & Zanzibar Beach Tour
        </h1>
      </div>

      {/* Main content with image and details */}
      <div className="flex">
        {/* Left side - Main content */}
        <div className="flex-1 p-6">
          <p className="text-sm text-gray-700 mb-4">
            <strong>Embark on a 12 Days Tanzania Luxury Safari & Zanzibar Beach Tour</strong> and experience Tanzania at its Finest. Explore Tarangire 
            National Park, renowned for its elephant herds, and witness the awe-inspiring Great Migration in Serengeti National Park. Venture into 
            the remarkable <strong>Ngorongoro Crater</strong>, the ultimate destination in Tanzania to witness the Big Five in their 
            natural habitat.
          </p>
          <p className="text-sm text-gray-700 mb-6">
            Conclude your 12-day adventure tour on the pristine beaches of Zanzibar, where the warm turquoise waters and white sands of 
            the Indian Ocean beckon.
          </p>

          {/* Beach image with boat */}
          <div className="mb-6">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='sky' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23e6f3ff'/%3E%3Cstop offset='100%25' style='stop-color:%2387ceeb'/%3E%3C/linearGradient%3E%3ClinearGradient id='water' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234682b4'/%3E%3Cstop offset='100%25' style='stop-color:%23006994'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='120' fill='url(%23sky)'/%3E%3Crect y='120' width='400' height='80' fill='url(%23water)'/%3E%3C!-- Palm tree --%3E%3Cline x1='40' y1='120' x2='50' y2='60' stroke='%23654321' stroke-width='4'/%3E%3Cellipse cx='52' cy='55' rx='15' ry='8' fill='%2332cd32'/%3E%3C!-- Boat --%3E%3Cellipse cx='200' cy='140' rx='40' ry='15' fill='%23ffffff'/%3E%3Crect x='180' y='130' width='40' height='20' fill='%23d2691e'/%3E%3Cline x1='200' y1='130' x2='200' y2='110' stroke='%23654321' stroke-width='2'/%3E%3Cpolygon points='200,110 220,120 200,125' fill='%23ffffff'/%3E%3C!-- Beach --%3E%3Cpath d='M 0 180 Q 100 170 200 175 T 400 180 L 400 200 L 0 200 Z' fill='%23f5deb3'/%3E%3C/svg%3E" 
              alt="Zanzibar Beach" 
              className="w-full rounded-lg"
            />
          </div>

          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Itinerary for the 12 Days Tanzania Luxury Safari & Zanzibar Beach Tour
          </h2>

          {/* Day 1 */}
          <div className="mb-6 bg-green-50 p-4 rounded">
            <h3 className="text-base font-bold text-gray-800 mb-2">Day 1. Arrival in Arusha</h3>
            <p className="text-sm text-gray-700 mb-2">
              Upon your arrival at the airport, a representative from African Adventure Travellers will greet you and transport you to your 
              accommodation in Arusha. Here, you will unwind, relax, and gear up for the exciting adventures ahead. Your stay at the Gran Melia 
              Arusha will be a serene and restful experience, offering a peaceful retreat.
            </p>
            <p className="text-sm font-semibold">Accommodation: Gran Melia Arusha</p>
          </div>

          {/* Day 2 */}
          <div className="mb-6 bg-gray-50 p-4 rounded">
            <h3 className="text-base font-bold text-gray-800 mb-2">Day 2. Journey to Tarangire National Park</h3>
            <p className="text-sm text-gray-700 mb-2">
              In the morning, our safari driver guide will pick you up from your hotel in Arusha, beginning our journey to Tarangire National Park. 
              We will travel on a well-paved road across the rolling hills of Masai land and finally reach Tarangire National Park. After checking 
              in at our accommodation, we will embark on the early morning game by the roadside, taking in river, baobab trees, and walking savka herds.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              Tarangire National Park, famed for the large elephant herds, also boasts a diverse array of over 550 bird species. The majestic 
              giant roof of our modern safari tent, we will traverse riverine savanna, savannas, and the life-giving Tarangire River, seeking 
              encounters with various wildlife, including giants with others.
            </p>
            <p className="text-sm font-semibold">Accommodation: Maramboi Tented Lodge</p>
          </div>
        </div>

        {/* Right side - Tour details box */}
        <div className="w-80 bg-gray-100 p-4 border-l">
          <div className="bg-white border rounded p-4 mb-4">
            <div className="text-center mb-3">
              <div className="text-sm font-bold">12 Days Tanzania</div>
              <div className="text-sm font-bold">Zanzibar Beach Tour</div>
              <div className="text-xs text-gray-600 mt-1">Duration</div>
              <div className="text-xs">12 Days / 11 Nights safari</div>
              <div className="text-xs text-gray-600 mt-2">Departure / Return</div>
              <div className="text-xs">Every day - Year-round activity</div>
            </div>
            
            <div className="bg-green-600 text-white text-center py-2 rounded mb-3 font-semibold">
              Plan Your Trip Now
            </div>
            
            <div className="text-center">
              <div className="text-xs text-gray-600 mb-1">Call/WhatsApp us for Free Cost</div>
              <div className="text-lg font-bold">+256 782 118 037</div>
            </div>
          </div>
        </div>
      </div>

      {/* Day 3 */}
      <div className="px-6 pb-4">
        <div className="mb-6 bg-green-50 p-4 rounded">
          <h3 className="text-base font-bold text-gray-800 mb-2">Day 3. Transfer to Lake Manyara National Park</h3>
          <p className="text-sm text-gray-700 mb-2">
            After breakfast, we will embark on the next leg of your unforgettable safari to Lake Manyara National Park. Located 120 kilometres 
            west of Arusha, this compact yet diverse park is named after the shallow soda lake that covers approximately 70% of its surface. 
            This park forms part of the ecosystem that hosts the impressive flamingos and more than 400 bird species.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            As we explore the park, we will encounter a variety of wildlife including monkeys, giraffes, zebras, wildebeests, buffaloes, and 
            antelope, as well as populations of graceful tree roosting in the trees. Lake Manyara National Park is celebrated for its varied 
            ecosystems, alkaline soda lake, forest springs, and surrounding woodlands.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            After an exhilarating game drive enriched by the sights and sounds of the African wilderness, we will depart with cherished 
            memories to last a lifetime.
          </p>
          <p className="text-sm font-semibold">Accommodation: Mbuzi Kubu Tented Lodge</p>
        </div>

        {/* Day 4 */}
        <div className="mb-6 bg-gray-50 p-4 rounded">
          <h3 className="text-base font-bold text-gray-800 mb-2">Day 4. Drive to Serengeti National Park</h3>
          <p className="text-sm text-gray-700 mb-2">
            After breakfast, we will continue our journey towards the Kenin highlands where the Iraqw people cultivate wheat and corn. Our 
            route will take us through the misty rainforests of the Ngorongoro Conservation area, where you may catch glimpses of buffaloes, 
            baboons, or even elephants amidst the thick vegetation.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            As we traverse the Ngorongoro Conservation Area, you will be treated to a view of the stunning Ngorongoro Crater before we head 
            onward to the Serengeti National Park, arriving by midday. Serengeti National Park, Tanzania's largest park, boasts a rich tapestry 
            of landscapes, including grassy plains, swamps, lakes, savannas, and mountains. Following an extensive game drive, we will 
            proceed to our accommodation where dinner and a memorable overnight stay await you.
          </p>
          <p className="text-sm font-semibold">Accommodation: Mbuzi Kubu Tented Lodge</p>
        </div>

        {/* Day 5 */}
        <div className="mb-6 bg-green-50 p-4 rounded">
          <h3 className="text-base font-bold text-gray-800 mb-2">Day 5. Full Day Game Drive in Serengeti National Park</h3>
          <p className="text-sm text-gray-700 mb-2">
            The Serengeti offers an extraordinary array of resident wildlife throughout the year, and it's abundantly clear why it requires a 
            more extended stay to truly appreciate its wonders. The Serengeti, renowned for hosting the annual Great Migration, showcases an 
            incredible variety of zebra, antelope, and wildebeest. The Serengeti also hosts a diverse array of wildlife, including impala, buffalo, crocodile, and 
            hippo. The majestic predators of these lands are influenced by careful and well-adapted species balances to encounter. Our 
            journey from the woodland northern regions and hilly areas to the southern grassy plains. During the main rainy season from April to 
            June,
          </p>
          <p className="text-sm text-gray-700 mb-2">
            In addition to the migratory herds, we may encounter resident predators such as leopards, cheetahs, and lions, playing their part in 
            this Serengeti's intricate ecosystem. After an adventurous day of wildlife observation, we will return to the Lodge to relax, enjoy 
            dinner, and sleep amidst the splendor of the Endless Plain.
          </p>
          <p className="text-sm font-semibold">Accommodation: Mbuzi Kubu Tented Lodge</p>
        </div>

        {/* Day 6 */}
        <div className="mb-6 bg-gray-50 p-4 rounded">
          <h3 className="text-base font-bold text-gray-800 mb-2">Day 6. Transfer to Ngorongoro Crater</h3>
          <p className="text-sm text-gray-700 mb-2">
            After breakfast, embark on an en-route game drive through the Serengeti, with a chance to spot the African Big Five that is the 
            lions, elephants, buffaloes, rhinos and leopards before continuing your journey to Ngorongoro Crater. This UNESCO World Heritage 
            site, formed millions of years ago, is often MoU as an eighth wonder of the world due to its incredible topography and diverse 
            wildlife population of around 25,000 animals. The Crater offers some of the best game viewing in Tanzania.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            As we arrive near Lake Natron buffalo herds, then descend into the Crater, where you will quickly encounter wildebeest, zebras, 
            gazelles, elephants, and over 500 bird species. With some luck, you might even spot the endangered black rhino among the 
            acacia trees.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            Following such a brief afternoon exploring the Crater, you will proceed to your accommodation for dinner and an overnight stay.
          </p>
          <p className="text-sm font-semibold">Accommodation: Lake Manyara Kilimambo Lodge</p>
        </div>

        {/* Day 7 */}
        <div className="mb-6 bg-green-50 p-4 rounded">
          <h3 className="text-base font-bold text-gray-800 mb-2">Day 7. Karatu to Zanzibar</h3>
          <p className="text-sm text-gray-700 mb-2">
            You will be picked up from your accommodation and driven directly to the airport to catch your flight to Zanzibar. Your first night 
            will be spent at Stone Town, where you can relax and enjoy stunning views of this historic city.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            Optional activities can be arranged, including a guided tour of the Old Town, a Spice Tour, or a visit to Prison Island. Additionally, a tour 
            to Jozani Forest can be organized.
          </p>
          <p className="text-sm font-semibold">Accommodation: Zanzibar Serena Hotel</p>
        </div>

        {/* Day 8-11 */}
        <div className="mb-6 bg-gray-50 p-4 rounded">
          <h3 className="text-base font-bold text-gray-800 mb-2">Day 8 – 11: Stone Town to North Coast (Nungwi)</h3>
          <p className="text-sm text-gray-700 mb-2">
            Nungwi, nestled in the northern expanse of the island, emerges as a vibrant village enriched by Zanzibar's pristine beaches. Your 
            journey will lead you to this enchanting locale, roughly 55 km away from Stone Town.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            Evolving from its roots as a prominent fishing community, Nungwi has blossomed into a sought-after island retreat teeming with 
            vitality. Notably, it stands as one of the few spots where the spectacle of both sunrise and sunset gracing the ocean can be 
            witnessed. Here, amidst the breathtaking backdrop of ivory sands and the azure embrace of the Indian Ocean, indulge in moments 
            of tranquility and captivating oceanic charm of ocean hours.
          </p>
          <p className="text-sm font-semibold">Accommodation: Melia Zanzibar</p>
        </div>

        {/* Day 12 */}
        <div className="mb-6 bg-green-50 p-4 rounded">
          <h3 className="text-base font-bold text-gray-800 mb-2">Day 12. Departure</h3>
          <p className="text-sm text-gray-700 mb-2">
            Spend your final hours unwinding at leisure. At a suitable time, you'll be transported to the airport, ensuring you arrive in time for 
            your flight.
          </p>
          <p className="text-sm font-semibold">Inclusions</p>
        </div>

        {/* Inclusions & Exclusions */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-bold text-gray-800 mb-3">Inclusions</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Transportation on a 4 x 4 safari vehicle with a pop-up roof</li>
              <li>• Accommodations and meals as stated</li>
              <li>• Entrance fees to all National Parks</li>
              <li>• En-route lunches</li>
              <li>• Bottled water</li>
              <li>• Professional English speaking driver guide</li>
              <li>• English Driver guide</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-gray-800 mb-3">Exclusions</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Visa Fees & flights</li>
              <li>• Optional activities</li>
              <li>• Travel insurance</li>
              <li>• Laundry</li>
              <li>• Alcoholic drinks</li>
              <li>• Beverages, soft/alcoholic drinks & tips</li>
              <li>• Health tour requirements</li>
              <li>• Personal travel insurance</li>
              <li>• Items of personal nature</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwelveDays;