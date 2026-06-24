import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#dce8c9] py-6 px-4">
      
      {/* Heading */}
      <div className="flex justify-center mb-8">
        <h2 className="px-10 py-2 text-2xl font-medium text-green-900 border-2 border-green-900 rounded-lg bg-[#edf5df] shadow">
          Contact Us
        </h2>
      </div>

      {/* Form Container */}
      <div className="max-w-6xl mx-auto bg-[#efefef] border border-gray-500 rounded-xl p-6 md:p-8">
        
        <form>
          {/* Name & Mobile */}
          <div className="grid md:grid-cols-2 gap-8 border-b border-orange-500 pb-6">
            
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Name<span className="text-red-500">*</span> :
              </label>

              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border border-green-700 rounded px-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Mobile No.<span className="text-red-500">*</span> :
              </label>

              <input
                type="tel"
                placeholder="Number"
                required
                className="w-full border border-green-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

          </div>

          {/* Email & Topic */}
          <div className="grid md:grid-cols-2 gap-8 border-b border-orange-500 py-6">
            
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Email<span className="text-red-500">*</span> :
              </label>

              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border border-green-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Topic<span className="text-red-500">*</span> :
              </label>

              <input
                type="text"
                placeholder="Topic"
                required
                className="w-full border border-green-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

          </div>

          {/* Description */}
          <div className="border-b border-orange-500 py-6">
            <label className="block font-semibold text-gray-800 mb-3">
              Description<span className="text-red-500">*</span> :
            </label>

            <textarea
              rows="12"
              placeholder="Write your message here..."
              required
              className="w-full border border-gray-300 rounded p-4 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-10 py-3 text-white text-lg rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:opacity-90 shadow-lg"
            >
              REGISTER
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}