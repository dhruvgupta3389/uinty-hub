import React from "react";

const HackathonCard = ({ hackathon }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{hackathon.name}</h3>
      <p className="text-gray-400">{hackathon.location}</p>
      <p className="mt-2 bg-blue-600 px-2 py-1 inline-block rounded">
        {hackathon.topic}
      </p>
    </div>
  );
};

export default HackathonCard;
