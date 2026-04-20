import React from "react";
import logoImg from "../assets/logo Responsif.jpg";

function Navbar({ onHomeClick, onMessageMe }) {
  return (
    <nav className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button onClick={onHomeClick} className="flex items-center gap-3 group">
            <img
              className="h-10 w-10 rounded-full object-cover ring-2 ring-indigo-500 group-hover:ring-indigo-400 transition-all duration-200"
              src={logoImg}
              alt="Woor Arts"
            />
            <span className="text-white font-bold text-lg tracking-wider hidden sm:block group-hover:text-indigo-300 transition-colors duration-200">
              WOOR ARTS
            </span>
          </button>

          {/* Right nav */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onHomeClick}
              className="text-gray-400 hover:text-white text-sm font-medium tracking-widest uppercase transition-colors duration-200 px-3 py-2"
            >
              HOME
            </button>
            <button
              onClick={onMessageMe}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105"
            >
              MASSAGE ME
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
