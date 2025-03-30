import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <input
        type="text"
        placeholder="Search for hackathons..."
        className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
      />
      <select className="w-full mt-2 p-2 rounded bg-gray-700 text-white">
        <option>Filter by Topic</option>
        <option>AI</option>
        <option>Blockchain</option>
        <option>Web Development</option>
        <option>Hardware</option>
        <option>Cybersecurity</option>
        <option>AR/VR</option>
        <option>IoT</option>
      </select>
    </div>
  );
};

export default SearchBar;
