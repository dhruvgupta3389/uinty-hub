import React from "react";
import HackathonCard from "./HackathonCard";

const hackathons = [
  { id: 1, name: "AI Challenge 2025", location: "New Delhi, India", topic: "AI" },
  { id: 2, name: "Blockchain Summit", location: "Bangalore, India", topic: "Blockchain" },
  { id: 3, name: "IoT Innovation Fest", location: "Hyderabad, India", topic: "IoT" },
];

const HackathonList = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Upcoming Hackathons</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hackathons.map((hackathon) => (
          <HackathonCard key={hackathon.id} hackathon={hackathon} />
        ))}
      </div>
    </div>
  );
};

export default HackathonList;
