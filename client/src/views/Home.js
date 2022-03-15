import React from "react";
import SideNav from "../components/Sidenav";

const Home = () => {
  return (
    <div className="min-h-screen md:flex">
      <SideNav />

      <div className="ml-5 mt-5">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-sm overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <div
                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 cursor-pointer"
              >
                Trippy
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

// https://drive.google.com/uc?id=1HjN7oTxY1eZbAa45anndbbB4wtXJvEiH
