import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Hackathon Platform</h1>
        <button className="bg-blue-600 px-4 py-2 rounded-lg text-white">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
