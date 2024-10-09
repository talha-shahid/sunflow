"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CreateIssueForm from "../components/CreateIssueForm";
import Sidebar from "../components/Sidebar"; // No curly braces for default import

const Issues = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in by looking for user data in localStorage or sessionStorage
    const savedUser = localStorage.getItem('user') || sessionStorage.getItem('user');

    if (!savedUser) {
      // If the user is not logged in, redirect to the login page
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10 bg-[#f7f8fa]">
        <CreateIssueForm />
      </div>
    </div>
  );
}

export default Issues;