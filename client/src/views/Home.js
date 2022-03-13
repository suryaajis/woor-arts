import React from "react";
import SideNav from "../components/Sidenav";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <SideNav />
      <Navbar />
      <p className="italic text-3xl font-bold">Hello World From The Hell</p>;
      <img
        src="https://drive.google.com/uc?id=1HjN7oTxY1eZbAa45anndbbB4wtXJvEiH"
        style={{ width: 400, height: 400 }}
      />
    </div>
  );
};

export default Home;
