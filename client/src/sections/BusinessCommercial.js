import React from "react";

const workflow = [
  {
    step: 1,
    title: "Brief",
    desc: "Share your idea, reference images, preferred style, color palette, and deadline.",
    icon: "📋",
  },
  {
    step: 2,
    title: "Concept",
    desc: "Initial concepts created for your review. Revisions included until approved.",
    icon: "💡",
  },
  {
    step: 3,
    title: "Sketch",
    desc: "Detailed sketch developed from approved concept with full linework.",
    icon: "✏️",
  },
  {
    step: 4,
    title: "Delivery",
    desc: "Final artwork delivered in your required format — PNG, PDF, PSD, or vector.",
    icon: "📦",
  },
];

const BusinessCommercial = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold tracking-wider">Business & Commercial</h1>
        <p className="text-gray-500 text-sm mt-1">Commission workflow and freelance services</p>
      </div>

      {/* Intro banner */}
      <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 rounded-2xl p-6 mb-8">
        <p className="text-gray-200 text-sm leading-relaxed">
          I specialize in commercial illustration, digital art, and NFT creation. Whether you need
          artwork for merchandise, branding, book covers, or digital platforms — I deliver
          professional results tailored to your vision and deadline.
        </p>
      </div>

      {/* Workflow */}
      <div className="mb-8">
        <h2 className="text-gray-300 font-semibold text-sm uppercase tracking-widest mb-5">
          Commission Workflow
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workflow.map((item, i) => (
            <div key={item.step} className="relative">
              <div className="bg-gray-900 border border-gray-700 hover:border-indigo-500/50 rounded-2xl p-5 h-full transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>

              {/* Arrow connector */}
              {i < workflow.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-2.5 z-10 -translate-y-1/2">
                  <svg className="w-5 h-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Downloads */}
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5 mb-5">
        <h3 className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-4">Documents</h3>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-gray-200 text-sm px-4 py-2.5 rounded-xl transition-colors duration-200">
            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            Download Portfolio PDF
          </button>
          <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-gray-200 text-sm px-4 py-2.5 rounded-xl transition-colors duration-200">
            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Service Brief
          </button>
        </div>
      </div>

      {/* Freelance platforms */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="https://www.fiverr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-gray-900 border border-gray-700 hover:border-green-500/50 rounded-2xl p-5 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/10"
        >
          <div className="w-12 h-12 bg-green-500/10 group-hover:bg-green-500/20 rounded-xl flex items-center justify-center transition-colors duration-200">
            <span className="text-green-400 font-black text-xl">F</span>
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold text-sm">Fiverr</p>
            <p className="text-gray-500 text-xs mt-0.5">Order commissions on Fiverr</p>
          </div>
          <svg className="w-4 h-4 text-gray-600 group-hover:text-green-400 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <a
          href="https://www.upwork.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-gray-900 border border-gray-700 hover:border-emerald-500/50 rounded-2xl p-5 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/10"
        >
          <div className="w-12 h-12 bg-emerald-500/10 group-hover:bg-emerald-500/20 rounded-xl flex items-center justify-center transition-colors duration-200">
            <span className="text-emerald-400 font-black text-xl">U</span>
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold text-sm">Upwork</p>
            <p className="text-gray-500 text-xs mt-0.5">Hire me on Upwork</p>
          </div>
          <svg className="w-4 h-4 text-gray-600 group-hover:text-emerald-400 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BusinessCommercial;
