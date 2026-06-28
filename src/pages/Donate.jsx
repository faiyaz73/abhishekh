import React from "react";

export default function Donate() {
  const qrCodeSrc = "/donation-qr.png";

  const handleQrDownload = async () => {
    try {
      const response = await fetch(qrCodeSrc);

      if (!response.ok) {
        throw new Error("QR code file not found");
      }

      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = downloadUrl;
      link.download = "jankalyan-donation-qr.png";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      alert("QR code file public/donation-qr.png me add karein.");
    }
  };

  return (
    <div className="min-h-screen bg-[#dce8c9] px-4 py-6">
      {/* Heading */}
      <div className="flex justify-center mb-5">
        <button className="rounded-md border border-green-700 bg-[#edf5df] px-8 py-1 text-green-900 shadow">
          Donate Form
        </button>
      </div>

      {/* Form Container */}
      <div className="mx-auto max-w-5xl rounded-md border border-gray-500 bg-[#efefef] p-4 md:p-6">
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
                className="w-full rounded border border-green-700 px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Mobile No<span className="text-red-500">*</span> :
              </label>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded border border-green-700 px-3 py-2 outline-none"
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
                className="w-full rounded border border-green-700 px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Pancard No. (optional) :
              </label>
              <input
                type="text"
                placeholder="Pancard Number"
                className="w-full rounded border border-green-700 px-3 py-2 outline-none"
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
              className="w-full resize-none rounded border border-green-700 px-3 py-2 outline-none"
            ></textarea>
          </div>

          {/* Photo + Amount */}
          <div className="grid md:grid-cols-2 gap-4 border-b border-orange-400 py-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Photo (optional) :
              </label>

              <label className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-md border bg-white shadow">
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
                className="w-full rounded border border-green-700 px-3 py-2 outline-none"
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
                <p>A/c No.: 44925756083</p>
                <p>IFSC: SBIN0004619</p>
                <p>MICR Code: 226002030</p>
              </div>
            </div>

            {/* QR Code */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                UPI SCAN:
              </label>

              <div className="w-fit rounded-md border bg-white p-3 shadow">
                <img
                  src={qrCodeSrc}
                  alt="QR Code"
                  className="h-40 w-40 object-contain"
                />
              </div>

              <button
                type="button"
                onClick={handleQrDownload}
                className="mt-3 inline-flex rounded bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
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

            <label className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-md border bg-white shadow">
              <span className="text-xl">+</span>
              <span className="text-xs">Upload</span>

              <input type="file" className="hidden" />
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-5">
            <button
              type="submit"
              className="rounded-md bg-gradient-to-r from-red-500 to-orange-500 px-8 py-2 font-semibold text-white shadow"
            >
              DONATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
