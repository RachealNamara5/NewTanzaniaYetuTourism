import React from 'react';

const FiveDaysSafari = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">5 DAYS LAKE MANYARA & SERENGETI WILDLIFE SAFARI</h1>
      <div className="text-center text-gray-600 mb-6">
        <p>Home | Tanzania | Tanzania Safari</p>
        <p className="mt-2">
          5 Days Lake Manyara & Serengeti Wildlife Safari - Experience the ultimate in Tanzania safaris with our 5 Days Lake Manyara & Serengeti Wildlife Safari through Tanzania National Park and Serengeti National Park. This exclusive 5-day Tanzania safari package offers unparalleled game viewing and unique activities such as a Hot Air Balloon Safari, all set against the stunning backdrop of Tanzania's most iconic landscapes. Enjoy stays in luxurious lodges situated in prime locations.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="md:w-1/2">
          <img src="flamingo-birds.jpg" alt="Flamingo Birds by the shores of Lake Manyara" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 p-4 text-left">
          <h3 className="text-xl font-semibold">5 Days</h3>
          <p>Lake Manyara & Serengeti Wildlife Safari</p>
          <p>Duration: 5 Days, 4 Nights safari</p>
          <p>Departures / Returns: Hotel pick-up. You are returned to your hotel.</p>
          <button className="bg-green-600 text-white px-4 py-2 mt-2 rounded hover:bg-green-700">Plan Your Trip Now</button>
          <p className="mt-2">Call/WhatsApp for a Free Quote: +255 762 118 037</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Itinerary for the 5 Days Lake Manyara & Serengeti Wildlife Safari</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-green-700 text-white p-2">Day 1: Transfer to Lake Manyara National Park</h3>
          <p className="mt-2">
            Your private guide will meet you at your hotel in Arusha for an early departure to Lake Manyara National Park. You will travel in a private 4x4 Landcruiser safari vehicle to your reserved lodge for a relaxing lunch. Later embark on an afternoon game drive, offering the chance to observe wildlife including Lions, Leopards, Cheetahs, Rhinoceros, Elephants, and Wildebeests. Your driver guide will drive you to not just the Big Five but a variety of animal species. Later return to the lodge for dinner and overnight stay.
          </p>
          <p className="mt-2"><strong>Accommodation Option:</strong> Lake Manyara Serena Lodge</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-green-700 text-white p-2">Day 2: Full Day Game Drive in Lake Manyara National Park</h3>
          <p className="mt-2">
            Today you will enjoy adventurous game drives in Lake Manyara National Park. Early mornings and late afternoons are ideal for spotting active wildlife. As the safari is private, you can adjust the schedule to suit your preferences. Alternatively, opt for a full day with a picnic lunch. Later in the evening return to the lodge for dinner and overnight stay.
          </p>
          <p className="mt-2"><strong>Accommodation Option:</strong> Lake Manyara Serena Lodge</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-green-700 text-white p-2">Day 3: Transfer to Serengeti National Park and Game Drive</h3>
          <p className="mt-2">
            After a relaxed breakfast transfer to Serengeti National Park, arriving at your lodge in the early afternoon for check-in and lunch. After lunch embark on the afternoon game drive, allowing exploration of the park's diverse ecosystem. Later in the evening return to the lodge for dinner and overnight stay.
          </p>
          <p className="mt-2"><strong>Accommodation Option:</strong> Serengeti Serena Safari Lodge</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-green-700 text-white p-2">Day 4: Full Day Game Drive in Serengeti National Park</h3>
          <p className="mt-2">
            Today is dedicated to exploring the Serengeti's remarkable wildlife. Early morning game drives and late afternoon drives are ideal for spotting predators like lions, cheetahs, and leopards. This immersion in nature promises to be a transformative experience. For a full day, opt to embark on a morning and late afternoon game drive, returning to the camp for lunch. Alternatively, opt for a full day with a picnic lunch.
          </p>
          <p className="mt-2"><strong>Accommodation Option:</strong> Serengeti Serena Safari Lodge</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-green-700 text-white p-2">Day 5: Transfer Back to Arusha</h3>
          <p className="mt-2">
            At dawn, embark on a final game drive in the Serengeti followed by a leisurely breakfast. Check and enjoy a scenic drive back to Arusha. Arrive in Arusha by late afternoon for drop-off at your hotel or transfer to the airport for your departure flight.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Inclusions</h3>
          <ul className="list-none mt-2">
            <li>Transportations in a 4x4 safari vehicle with a pop-up roof</li>
            <li>Accommodations and meals stated</li>
            <li>Entrance fees to all National Parks</li>
            <li>Bottled water</li>
            <li>Professional English speaking driver guide</li>
            <li>English Driver guide</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Exclusions</h3>
          <ul className="list-none mt-2">
            <li>Visa fees & flights</li>
            <li>Travel insurance</li>
            <li>Optional activities</li>
            <li>Personal expenses</li>
            <li>Health test requirements</li>
            <li>Gratuities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FiveDaysSafari;