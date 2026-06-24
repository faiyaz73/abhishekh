import React from "react";

export default function UpComming() {
  return (
    <div className="min-h-screen bg-[#dce8c9] py-6 px-4">
      
      {/* Heading Button */}
      <div className="flex justify-center mb-8">
        <button className="px-10 py-2 border border-green-700 rounded-md text-green-900 bg-[#edf5df] shadow">
          Upcoming Event
        </button>
      </div>

      {/* Event Card */}
      <div className="max-w-6xl mx-auto bg-[#f2f2f2] shadow-md p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Side Image */}
          <div className="bg-white p-2 rounded shadow">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800"
              alt="Environment Day"
              className="w-full h-[250px] object-cover rounded"
            />
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-600 mb-3">
                <p>
                  <span className="font-semibold">Location -</span> Agra
                </p>

                <p>
                  <span className="font-semibold">Date -</span> June 5, 2025
                </p>
              </div>

              <h2 className="text-lg font-bold text-green-900 border-b border-green-700 pb-2">
                विश्व पर्यावरण दिवस के उपलक्ष्य मुख्य कार्यक्रम
              </h2>

              <p className="mt-3 text-gray-700 leading-relaxed">
                विश्व पर्यावरण दिवस के उपलक्ष्य मुख्य कार्यक्रम 05 June
                2025 को आयोजित होगा, जिसमें सभी सदस्यों की उपस्थिति
                अपेक्षित है।
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
                Book Seat
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}