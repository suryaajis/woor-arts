import React from "react";
import artistImg from "../assets/aat koclok.jpg";
import certImg   from "../assets/poltekbang 1.jpg";

const skills = ["Surrealism", "Digital Illustration", "NFT Art", "Fantasy", "Pop Art", "Psychedelic"];

const AboutMe = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold tracking-wider">About Me</h1>
        <p className="text-gray-500 text-sm mt-1">The artist behind Woor Arts</p>
      </div>

      {/* Profile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-1">
          <div className="relative rounded-2xl overflow-hidden ring-2 ring-indigo-500/30">
            <img src={artistImg} alt="Artist" className="w-full aspect-square object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col justify-center">
          <h2 className="text-white text-xl font-bold mb-1">Woor Arts</h2>
          <p className="text-indigo-400 text-sm font-medium mb-4">Digital Illustrator & Visual Artist</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            A passionate digital illustrator specializing in surrealism, psychedelic art, and fantasy.
            With a unique visual language developed over years of practice, I blend traditional concepts
            with modern digital techniques to create artwork that tells stories.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Available for commercial commissions, NFT creation, merchandise design, and custom artwork.
            Let's bring your vision to reality.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="bg-gray-800 border border-gray-700 text-indigo-300 text-xs px-3 py-1 rounded-full">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-800 flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          <h3 className="text-white font-semibold text-sm">Certifications & Credentials</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Cert image */}
          <div className="relative overflow-hidden">
            <img src={certImg} alt="Certification" className="w-full h-48 md:h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/60" />
          </div>

          {/* Cert details */}
          <div className="p-6 space-y-4">
            {[
              { title: "Professional Digital Illustrator", org: "Verified Artist" },
              { title: "NFT Creator & Digital Art", org: "Blockchain Arts Community" },
              { title: "Freelance Top Rated", org: "Fiverr & Upwork" },
            ].map((cert, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 bg-indigo-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{cert.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
