import React from "react";
// import { galleryImages } from "./PhotoGalleryData";
import { galleryImages } from "./PhotoGallery.js";




export default function PhotoGallery() {
  return (
    <div className="min-h-screen bg-[#dce8c9] py-8">
      {/* Heading */}
      <div className="flex justify-center mb-10">
        <h2 className="px-12 py-2 text-3xl font-medium text-green-900 border-2 border-green-900 rounded-xl bg-[#edf5df] shadow">
          Photo Gallery
        </h2>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-[1800px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="bg-[#f2f2f2] p-3 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[280px] object-cover hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}