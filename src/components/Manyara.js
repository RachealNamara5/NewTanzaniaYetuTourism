import React from 'react';

const Manyara = () => {
  return (
    <div className="bg-white">
      {/* Header with green progress bar */}
      <div className="w-full bg-green-400 h-8 mb-20">
         <span className="font-large">Lake Manyara National Park</span>
      </div>
      
      

      

      {/* Main heading */}
      <div className="px-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Lake Manyara National Park - Tanzania Safari Tours</h1>
      </div>

      {/* Main content */}
      <div className="px-4">
        <div className="text-gray-700 leading-relaxed space-y-4 mb-8">
          <p>
            <strong>Lake Manyara National Park</strong> is located in northern Tanzania, approximately 126 kilometres west of Arusha Town. Spanning 330 
            square kilometres, the park features a lake that covers 220 square kilometres during the rainy season. Adjacent to Tarangire 
            National Park via the Kwakuchinja corridor, the two parks share a diverse range of wildlife that can be easily observed near the 
            road, making it Lake Manyara National Park's most convenient wildlife viewing area.
          </p>
          
          <p>
            Although relatively small, Lake Manyara National Park is renowned for its breathtaking beauty and rich biodiversity, particularly its 
            giraffe. The park is home to a large population of elephants, wildebeest, giraffes, and buffalo, along with significant numbers of 
            zebras, impalas, warthogs, and antelopes. The escarpment slopes provide habitat for tree-olive bark, oil-nut and big-springs.
          </p>
          
          <p>
            In <strong>Ernest Hemingway</strong> observation, Lake Manyara offers an old environment for Manyara's lion pride, famous for their tree-climbing 
            behavior. Additionally, large groups of baboons, often numbering in the hundreds, are a common sight and a highlight for many 
            visitors.
          </p>
        </div>

        {/* Activities section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Activities in Lake Manyara National Park</h2>
          <p className="text-gray-700 mb-6">
            Visitors can enjoy a variety of activities including <span className="text-orange-600 font-semibold">game drives</span> both day and night, canoeing when water levels are high, cultural 
            visits, picnics, local Maasai dances, mountain biking, abseiling, and forest walks on the escarpment outside the park.
          </p>
          
          {/* Call to action box */}
          <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-6">
            <p className="text-center font-bold text-gray-800 mb-1">
              Ready to Plan a Tanzania Safari? Talk to a Travel Advisor Now (Call/WhatsApp)
            </p>
            <p className="text-center text-2xl font-bold text-orange-600">
              +256 782 118 037
            </p>
          </div>
        </div>

        {/* Getting There section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Getting There</h2>
          <p className="text-gray-700">
            The park is accessible by road or via chartered or scheduled flights from Arusha, typically en route to the <span className="text-blue-600">Serengeti National Park</span> 
            and <span className="text-blue-600">Ngorongoro Crater</span>.
          </p>
        </div>

        {/* Safari packages section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Top Tanzania Safari Packages to Lake Manyara National Park</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Package 1 */}
            <div className="relative">
              <div className="h-48 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-3 left-3">
                  <div className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-medium">
                    3 Days Tanzania Luxury Safari
                  </div>
                </div>
              </div>
            </div>

            {/* Package 2 */}
            <div className="relative">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-3 left-3">
                  <div className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-medium">
                    3 Days Best of Tanzania Safari
                  </div>
                </div>
              </div>
            </div>

            {/* Package 3 */}
            <div className="relative">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-3 left-3">
                  <div className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-medium">
                    3 Days Lake Manyara & Serengeti Wildlife Safari
                  </div>
                </div>
              </div>
            </div>

            {/* Package 4 */}
            <div className="relative">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-3 left-3">
                  <div className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-medium">
                    3 Days Tanzania Wildlife Safari
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

export default Manyara;