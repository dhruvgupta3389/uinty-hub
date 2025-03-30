import React from "react";
import SearchBar from "@/components/platform/SearchBar";
import HackathonList from "@/components/platform/HackathonList";

const Home = () => {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Hackathons</h2>
      <SearchBar />
      <HackathonList />
    </div>
  );
};

export default Home;
