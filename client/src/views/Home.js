import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import HomeGrid from "../sections/HomeGrid";
import AboutMe from "../sections/AboutMe";
import BusinessCommercial from "../sections/BusinessCommercial";
import SocialMedia from "../sections/SocialMedia";
import CheckAndCheck from "../sections/CheckAndCheck";

const SECTIONS = {
  home: HomeGrid,
  about: AboutMe,
  business: BusinessCommercial,
  social: SocialMedia,
  check: CheckAndCheck,
};

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const ActiveSection = SECTIONS[activeSection] || HomeGrid;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0f1117" }}>
      <Navbar
        onHomeClick={() => setActiveSection("home")}
        onMessageMe={() => setActiveSection("business")}
      />
      <div className="flex flex-1 relative">
        <Sidenav activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="flex-1 overflow-auto">
          <ActiveSection onSectionChange={setActiveSection} />
        </main>
      </div>
    </div>
  );
};

export default Home;
