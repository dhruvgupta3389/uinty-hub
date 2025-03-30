"use client"
import React, { useState } from "react";
import hackathonsData from "@/data/hackathonsData"; // Assuming you have a JSON file with hackathon data
import Link from "next/link";

const HackathonPage = () => {
  const [filters, setFilters] = useState({
    topic: "",
    city: "",
    state: "",
    teamSize: "",
  });
  const userInterests = ["Blockchain", "AI", "Cybersecurity"]; // Example user interests from signup

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filter hackathons based on selected filters using case-insensitive partial matching
  const filteredHackathons = hackathonsData.filter((hackathon) => {
    return (
      (filters.topic === "" ||
        hackathon.topic.toLowerCase().includes(filters.topic.toLowerCase())) &&
      (filters.city === "" ||
        hackathon.city.toLowerCase().includes(filters.city.toLowerCase())) &&
      (filters.state === "" ||
        hackathon.state.toLowerCase().includes(filters.state.toLowerCase())) &&
      (filters.teamSize === "" ||
        hackathon.teamSize.toLowerCase().includes(filters.teamSize.toLowerCase()))
    );
  });

  // Suggested Hackathons based on user interests
  const suggestedHackathons = hackathonsData.filter((hackathon) =>
    userInterests.includes(hackathon.topic)
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Hackathons</h1>

      {/* Signup Button */}
      <Link href="/signup">
        <button className="p-2 bg-blue-600 text-white rounded mb-4">
          Signup
        </button>
      </Link>

      {/* Search Bar & Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          name="topic"
          placeholder="Topic (Blockchain, AI, etc.)"
          value={filters.topic}
          className="p-2 bg-gray-800 text-white border rounded"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={filters.city}
          className="p-2 bg-gray-800 text-white border rounded"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={filters.state}
          className="p-2 bg-gray-800 text-white border rounded"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="teamSize"
          placeholder="Team Size"
          value={filters.teamSize}
          className="p-2 bg-gray-800 text-white border rounded"
          onChange={handleFilterChange}
        />
      </div>

      {/* Suggested Hackathons */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Suggested Hackathons</h2>
        <div className="h-60 overflow-y-auto space-y-4 p-2 bg-gray-800 rounded">
          {suggestedHackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="flex items-center bg-gray-700 p-4 rounded shadow"
            >
              <img
                src={hackathon.image}
                alt={hackathon.name}
                className="w-20 h-20 rounded mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{hackathon.name}</h3>
                <p className="text-sm">
                  {hackathon.city}, {hackathon.state}
                </p>
                <a
                  href={hackathon.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  Register
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hackathon List */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">
          All Upcoming Hackathons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="bg-gray-800 p-4 rounded shadow"
            >
              <img
                src={hackathon.image}
                alt={hackathon.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="text-lg font-semibold">{hackathon.name}</h3>
              <p className="text-sm">
                {hackathon.city}, {hackathon.state}
              </p>
              <p className="text-sm">Team Size: {hackathon.teamSize}</p>
              <a
                href={hackathon.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline block mt-2"
              >
                Register
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;
