import React, { useState } from "react";

const navItems = [
  {
    id: "about",
    label: "About Me",
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: "business",
    label: "Business & Commercial",
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "social",
    label: "Social Media",
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    ),
  },
  {
    id: "check",
    label: "Check and Check",
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

function NavLinks({ activeSection, onSectionChange, onClose }) {
  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            onSectionChange(item.id);
            if (onClose) onClose();
          }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-medium transition-all duration-200 ${
            activeSection === item.id
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
              : "text-gray-400 hover:bg-gray-800 hover:text-white"
          }`}
        >
          {item.icon}
          <span className="flex-1">{item.label}</span>
          {activeSection === item.id && (
            <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
          )}
        </button>
      ))}
    </nav>
  );
}

const Sidenav = ({ activeSection, onSectionChange }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle bar */}
      <div className="md:hidden bg-gray-900 border-b border-gray-700 flex items-center justify-between px-4 py-3">
        <span className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Menu</span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
        >
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute left-0 right-0 z-40 bg-gray-900 border-b border-gray-700 px-4 py-4 shadow-2xl">
          <NavLinks
            activeSection={activeSection}
            onSectionChange={onSectionChange}
            onClose={() => setMobileOpen(false)}
          />
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-56 lg:w-64 bg-gray-900 border-r border-gray-700 flex-shrink-0" style={{ minHeight: "calc(100vh - 64px)" }}>
        <div className="px-4 pt-6 pb-4">
          <p className="text-gray-600 text-xs uppercase tracking-widest font-semibold">Sections</p>
        </div>
        <div className="px-3 flex-1">
          <NavLinks activeSection={activeSection} onSectionChange={onSectionChange} />
        </div>
        <div className="px-6 py-4 border-t border-gray-800">
          <p className="text-gray-700 text-xs">© 2024 Woor Arts</p>
        </div>
      </aside>
    </>
  );
};

export default Sidenav;
