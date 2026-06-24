import React from "react";

export default function IdCardDownload() {
  return (
    <div className="min-h-screen bg-[#dce8c9] flex flex-col items-center pt-5">
      
      {/* Print Button */}
      <button className="border border-green-700 text-green-900 px-12 py-1 rounded-md bg-[#e8f2d8] hover:bg-[#dce8c9] transition">
        Print ID Card
      </button>

      {/* Form Box */}
      <div className="bg-[#efefef] border border-green-700 rounded-xl shadow-lg mt-8 w-full max-w-md p-6">
        
        {/* User ID */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            User Id :
          </label>

          <input
            type="text"
            placeholder="User Id"
            className="w-full border border-green-700 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* DOB */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-2">
            Date Of Birth :
          </label>

          <input
            type="date"
            className="w-full border border-green-700 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded">
            ID Card Download
          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded">
            Appointment Letter
          </button>
        </div>

      </div>
    </div>
  );
}