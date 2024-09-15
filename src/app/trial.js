"use client";
import { useState } from "react";
export default function Home() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white transition-all duration-300 ${
          isSidebarExpanded ? "w-64" : "w-20"
        } flex flex-col justify-between py-6`}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col items-center justify-center flex-grow space-y-6">
          {/* Toggle Button */}
          <button onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Icons with labels */}
          <div className="flex flex-col items-center space-y-6">
            <div className="text-2xl">🏠</div>
            {isSidebarExpanded && <p className="text-sm">Home</p>}

            <div className="text-2xl">👤</div>
            {isSidebarExpanded && <p className="text-sm">Profile</p>}

            <div className="text-2xl">👁️</div>
            {isSidebarExpanded && <p className="text-sm">Projects</p>}

            <div className="text-2xl">✉️</div>
            {isSidebarExpanded && <p className="text-sm">Contact</p>}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-black flex-grow flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl sm:text-6xl font-bold">
          Hi, <span className="text-pink-500">I'm Jack,</span> web developer.
        </h1>
        <p className="text-gray-400 text-xl sm:text-2xl mt-4">
          Front End Developer / WordPress Expert
        </p>

        {/* Contact Button */}
        <button className="mt-8 px-8 py-2 bg-green-500 text-white rounded-full hover:bg-green-400 transition">
          Contact me!
        </button>

        {/* Decorative lines */}
        <div className="relative w-64 h-12 mt-12">
          <div className="absolute left-0 top-0 w-full h-0.5 bg-gray-600"></div>
          <div className="absolute left-0 top-4 w-full h-0.5 bg-gray-600"></div>
          <div className="absolute left-0 top-8 w-full h-0.5 bg-gray-600"></div>
          {/* Circles */}
          <div className="absolute right-2 top-2 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute left-2 top-6 w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
