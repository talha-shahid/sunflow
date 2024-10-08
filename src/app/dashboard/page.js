"use client";

import Sidebar from "../components/Sidebar"; // No curly braces for default import

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10 bg-[#f7f8fa]">
        <h1 className="text-2xl font-bold text-[#ff5722]">Welcome to Sunflow</h1>
      </div>
    </div>
  );
}

export default Dashboard;
