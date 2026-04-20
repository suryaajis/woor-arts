import React, { useState } from "react";

import img1  from "../assets/THE MAGIC TREE 2.jpg";
import img2  from "../assets/MY LORD DRAGON 8.jpg";
import img3  from "../assets/BARU KARL MAX ii.png";
import img4  from "../assets/iureka.png";
import img5  from "../assets/FULL PNG.png";
import img6  from "../assets/romeo.jpg";
import img7  from "../assets/iureka2.png";
import img8  from "../assets/alter.png";
import img9  from "../assets/dep.png";
import img10 from "../assets/pose.jpg";
import img11 from "../assets/cry man.jpg";
import img12 from "../assets/stly 1.jpg";
import img13 from "../assets/PLANETMAN.jpg";
import img14 from "../assets/THE JOKUNI.jpg";
import img15 from "../assets/mas perry.jpg";
import img16 from "../assets/BEAUTIFULL WOMEN BG 2 PNG.png";

const gallery = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16];

const CheckAndCheck = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-white text-2xl font-bold tracking-wider">Check and Check</h1>
        <p className="text-gray-500 text-sm mt-1">Full portfolio gallery — click any piece to enlarge</p>
      </div>

      {/* Masonry gallery */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3">
        {gallery.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelected(img)}
            className="relative overflow-hidden rounded-xl cursor-pointer group mb-3 break-inside-avoid"
          >
            <img
              src={img}
              alt={`Artwork ${i + 1}`}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-2.5 rounded-full transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selected}
            alt="Full view"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default CheckAndCheck;
