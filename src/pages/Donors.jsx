import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Donors() {
  const donors = [
    {
      id: 1,
      name: "Rishabh Kumar Jain",
      amount: 92929,
      mobile: "65868569868",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    },
    {
      id: 2,
      name: "Pushpendra Sharma",
      amount: 200,
      mobile: "9410003897",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    },
    {
      id: 3,
      name: "Sumit Sharma",
      amount: 1000,
      mobile: "9634756818",
      image: null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#dce8c9] py-6 px-4">
      {/* Heading */}
      <div className="flex justify-center">
        <h2 className="px-10 py-1 text-3xl font-medium text-green-900 border-2 border-green-900 rounded-xl bg-[#edf5df] shadow">
          Donors
        </h2>
      </div>

      {/* Search */}
      <div className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="Search Here"
          className="w-full max-w-md border-2 border-cyan-600 rounded-xl px-5 py-3 text-2xl bg-gray-100 outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
        {donors.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <div className="bg-[#58a800] rounded-lg p-4">
              
              {/* Image */}
              <div className="bg-[#b9d88d] border-2 border-gray-200 rounded-lg h-80 flex items-center justify-center overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="text-[220px] text-blue-200" />
                )}
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="bg-[#6ca61f] text-white text-center text-2xl font-bold rounded-lg py-2 px-2">
                  {item.name}
                </h3>

                <div className="mt-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-2xl">Amount</span>
                    <span className="text-2xl">{item.amount}</span>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-2xl">Mobile</span>
                    <span className="text-2xl">{item.mobile}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}