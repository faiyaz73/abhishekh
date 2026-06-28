import React, { useState } from "react";
import Header from "../common/Header";

function AadhaarField() {
  const [aadharPreview, setAadharPreview] = useState(null);
  const [aadharNumber, setAadharNumber] = useState("");

  const handleAadharUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAadharPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setAadharPreview(null);
    }
  };

  return (
    <div className="md:col-span-2">
      <label className="block mb-2 font-medium">Upload Aadhaar Card (image)</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleAadharUpload}
        className="w-full border border-gray-300 rounded-lg px-4 py-2"
      />

      {aadharPreview && (
        <div className="mt-4 flex flex-col items-center space-y-3">
          <img src={aadharPreview} alt="Aadhaar preview" className="w-56 md:w-40 h-auto rounded-md border" />
          <div className="text-center">
            <div className="font-medium">Aadhaar Preview</div>
          </div>
        </div>
      )}

      <label className="block mt-4 mb-2 font-medium">Aadhaar Number</label>
      <input
        type="text"
        value={aadharNumber}
        onChange={(e) => setAadharNumber(e.target.value)}
        placeholder="Enter Aadhaar Number"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {aadharPreview && (
        <div className="mt-2 text-center text-sm text-gray-600">
          Entered number: <span className="font-semibold text-green-700">{aadharNumber || "—"}</span>
        </div>
      )}
    </div>
  );
}

export default function Member_Apply() {
  return (
    <>
    
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-2">
            NGO Membership Registration Form
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Please fill in your details to become a member.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* local state and handlers for Aadhaar upload */}
            
            {/* Full Name */}
            <div>
              <label className="block mb-2 font-medium">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block mb-2 font-medium">
                Mobile Number *
              </label>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* DOB */}
            <div>
              <label className="block mb-2 font-medium">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-2 font-medium">
                Gender
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Occupation */}
            <div>
              <label className="block mb-2 font-medium">
                Occupation
              </label>
              <input
                type="text"
                placeholder="Enter Occupation"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">
                Address *
              </label>
              <textarea
                rows="4"
                placeholder="Enter Full Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            {/* State */}
            <div>
              <label className="block mb-2 font-medium">
                State
              </label>
              <input
                type="text"
                placeholder="Enter State"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* City */}
            <div>
              <label className="block mb-2 font-medium">
                City
              </label>
              <input
                type="text"
                placeholder="Enter City"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Pincode */}
            <div>
              <label className="block mb-2 font-medium">
                Pincode
              </label>
              <input
                type="number"
                placeholder="Enter Pincode"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Aadhaar Number (with state) */}
            <AadhaarField />

            {/* Photo Upload */}
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">
                Upload Photo
              </label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Apply For Membership
              </button>
            </div>

          </form>
        </div>
      </section>
    </>
  );
}