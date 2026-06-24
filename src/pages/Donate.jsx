import React from "react";

export default function Donate() {
  return (
    <div className="min-h-screen bg-[#dce8c9] py-6 px-4">
      {/* Heading */}
      <div className="flex justify-center mb-5">
        <button className="px-8 py-1 border border-green-700 rounded-md bg-[#edf5df] text-green-900 shadow">
          Donate Form
        </button>
      </div>

      {/* Form Container */}
      <div className="max-w-5xl mx-auto bg-[#efefef] border border-gray-500 rounded-md p-4 md:p-6">
        <form>
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4 border-b border-orange-400 pb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name<span className="text-red-500">*</span> :
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-green-700 rounded px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Mobile No<span className="text-red-500">*</span> :
              </label>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border border-green-700 rounded px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-4 border-b border-orange-400 py-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Email (optional) :
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-green-700 rounded px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Pancard No. (optional) :
              </label>
              <input
                type="text"
                placeholder="Pancard Number"
                className="w-full border border-green-700 rounded px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Address */}
          <div className="border-b border-orange-400 py-4">
            <label className="block text-sm font-medium mb-1">
              Address<span className="text-red-500">*</span> :
            </label>

            <textarea
              rows="3"
              placeholder="Address"
              className="w-full border border-green-700 rounded px-3 py-2 outline-none resize-none"
            ></textarea>
          </div>

          {/* Photo + Amount */}
          <div className="grid md:grid-cols-2 gap-4 border-b border-orange-400 py-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Photo (optional) :
              </label>

              <label className="w-24 h-24 border rounded-md bg-white shadow flex flex-col items-center justify-center cursor-pointer">
                <span className="text-xl">+</span>
                <span className="text-xs">Upload</span>

                <input type="file" className="hidden" />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Amount<span className="text-red-500">*</span> :
              </label>

              <input
                type="number"
                placeholder="Amount"
                className="w-full border border-green-700 rounded px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Bank Details & QR */}
          <div className="grid md:grid-cols-2 gap-6 border-b border-orange-400 py-6">
            {/* Bank Details */}
            <div>
              <div className="bg-green-600 text-white p-4 rounded-md shadow-md max-w-sm">
                <h3 className="font-bold mb-2">Bank Details:</h3>

                <p>STATE BANK OF INDIA, AGRA</p>
                <p>A/c No.: 43380856490</p>
                <p>IFSC: SBIN0001931</p>
                <p>MICR Code: 282002008</p>
              </div>
            </div>

            {/* QR Code */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                UPI SCAN:
              </label>

              <div className="border rounded-md bg-white p-3 w-fit shadow">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=donation"
                  alt="QR Code"
                  className="w-40 h-40"
                />
              </div>

              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded mt-3"
              >
                Download
              </button>
            </div>
          </div>

          {/* Payment Receipt */}
          <div className="border-b border-orange-400 py-4">
            <label className="block text-sm font-medium mb-2">
              Payment Receipt Upload:
            </label>

            <label className="w-24 h-24 border rounded-md bg-white shadow flex flex-col items-center justify-center cursor-pointer">
              <span className="text-xl">+</span>
              <span className="text-xs">Upload</span>

              <input type="file" className="hidden" />
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-5">
            <button
              type="submit"
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold px-8 py-2 rounded-md shadow"
            >
              DONATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}