import React from "react";

const SixDaysSafari = () => {
  const itinerary = [
    {
      day: "Day 1: Arrival in Arusha",
      desc: "Upon arrival at the Airport, where your driver guide shall be waiting to warmly receive and welcome you to this beautiful country Tanzania. After a brief orientation with the driver guide, you will head to your accommodation in Arusha for relaxation and overnight stay before embarking on your safari the next day.",
      lodge: "Gran Melia Arusha",
    },
    {
      day: "Day 2: Transfer to Tarangire National Park",
      desc: "After your breakfast at the hotel, you will begin your park adventure with a pickup from your hotel and embark on your adventurous journey to Tarangire National Park, famous for its baobab trees and abundant wildlife including large elephant herds. Later, drive to your lodge for dinner and overnight stay.",
      lodge: "Kubu Kubu Tented Lodge",
    },
    {
      day: "Day 3: Transfer to Serengeti National Park",
      desc: "After breakfast, we will embark on our discovery journey to Serengeti National Park, traveling through the picturesque highlands of Ngorongoro Conservation Area. Serengeti is renowned for its annual migration, during which hundreds of thousands of wildebeests and zebras cross in search of fresh grass and water.",
      lodge: "Kubu Kubu Tented Lodge",
    },
    {
      day: "Day 4: Full Day in Serengeti National Park",
      desc: "You will wake up early and enjoy a full breakfast before starting our full day of game drives in the Serengeti. Depending on the time of year, you may witness the Great Migration, where millions of wildebeest and zebras traverse the plains in search of fresh grazing grounds.",
      lodge: "Kubu Kubu Tented Lodge",
    },
    {
      day: "Day 5: Serengeti to Ngorongoro Crater",
      desc: "Early in the morning after your breakfast, you will embark on your final morning game drive in the Serengeti. Later in the afternoon, transfer to the Ngorongoro Conservation Area. Upon reaching the edge of the Ngorongoro Crater you will be greeted by the stunning view of the giant caldera.",
      lodge: "Kitela Lodge",
    },
    {
      day: "Day 6: Ngorongoro Crater and Departure",
      desc: "After your morning breakfast, you will start your final day with a morning game drive in the Ngorongoro Crater, witnessing the vibrant wildlife including the Big Five. After an adventurous game watching experience, begin your journey back to Arusha or Kilimanjaro National Park for onward flight.",
      lodge: null,
    },
  ];

  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold border-b-2 border-green-700 pb-2 mb-4">
        6 DAYS TANZANIA WILDLIFE SAFARI
      </h1>

      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        Home / Tanzania / Tanzania Safari - 6 Days
      </p>

      {/* Intro */}
      <h2 className="text-xl font-semibold mb-4">
        6 Days Tanzania Wildlife Safari - Best Adventure Tanzania Tour
      </h2>
      <p className="mb-3">
        This <strong>6 Days Tanzania Wildlife Safari</strong> takes you deep into
        the heart of some of Africa’s most renowned national parks that is the
        Tarangire National Park, Serengeti National Park and Ngorongoro Crater.
        During the adventure, you will encounter vast numbers of diverse
        wildlife and the breathtaking landscapes of Tanzania.
      </p>
      <p className="mb-3">
        Tarangire National Park is commonly known for its giant baobab trees and
        large herds of elephant. Serengeti National Park is famous for its
        annual <strong>wildebeest migration</strong> and diverse wildlife like
        lions, cheetahs, and leopards and Ngorongoro Crater a UNESCO World
        Heritage Site is known for its stunning caldera and dense wildlife
        population including the Big Five.
      </p>

      {/* Image & Sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {/* Image */}
        <div className="md:col-span-2">
          <img
            src="/images/leopard-hunting.jpg"
            alt="Leopard spotted hunting"
            className="rounded-lg shadow-md"
          />
          <p className="text-center text-xs mt-2 text-gray-500">
            Leopard spotted hunting
          </p>
        </div>

        {/* Sidebar */}
        <div className="bg-green-50 border border-green-300 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2">
            6 Days Tanzania Wildlife Safari
          </h3>
          <ul className="text-sm mb-4">
            <li>6 Days, 5 Nights safari</li>
            <li>Destinations: Tarangire, Serengeti, Ngorongoro</li>
            <li>Hotel pickup – Arusha</li>
            <li>Hotel drop – Arusha</li>
          </ul>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg mb-4 hover:bg-green-700">
            Plan Your Trip Now
          </button>
          <div className="text-center text-red-600 font-bold">
            Call/WhatsApp for a Free Quote <br />
            <span className="text-xl">+256 782 118 037</span>
          </div>
        </div>
      </div>

      {/* Itinerary */}
      <h3 className="text-xl font-semibold mb-4">
        Itinerary for the 6 Days Tanzania Wildlife Safari
      </h3>

      {itinerary.map((item, index) => (
        <div key={index} className="mb-6">
          {/* Title with green background */}
          <h4 className="font-bold text-lg mb-2 bg-green-100 text-green-800 p-2 rounded">
            {item.day}
          </h4>
          {/* Description */}
          <p className="mb-2">{item.desc}</p>
          {item.lodge && (
            <p className="text-sm font-semibold">
              Accommodation:{" "}
              <span className="text-gray-700">{item.lodge}</span>
            </p>
          )}
        </div>
      ))}

      {/* Inclusions & Exclusions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div>
          <h3 className="text-lg font-bold mb-2">Inclusions</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Transportations on a 4 x 4 safari vehicle with a pop up roof</li>
            <li>Accommodations and meals as stated</li>
            <li>Entrance fees to all National Parks</li>
            <li>Game drives as mentioned</li>
            <li>Drinking water</li>
            <li>Professional English speaking driver guide</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Exclusions</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Visa Fees & flights</li>
            <li>Optional activities</li>
            <li>Tips for guides</li>
            <li>Alcoholic drinks</li>
            <li>International insurances & items of personal nature</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SixDaysSafari;
