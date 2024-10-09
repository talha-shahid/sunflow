"use client";

import CreateIssueForm from "../components/CreateIssueForm";
import Sidebar from "../components/Sidebar"; // No curly braces for default import

const Issues = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10 bg-[#f7f8fa]">
        <CreateIssueForm/>
      </div>
    </div>
  );
}

export default Issues;
