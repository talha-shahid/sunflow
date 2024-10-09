"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in by looking for user data in localStorage or sessionStorage
    const savedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
    
    if (savedUser) {
      // If user data exists, redirect to the dashboard
      router.push('/dashboard');
    } else {
      // If no user data exists, redirect to the login page
      router.push('/login');
    }
  }, [router]); // Add router as dependency to useEffect

  return (
    <div>
      {/* You can add loading or splash screen content here while the redirect happens */}
      <p>Redirecting...</p>
    </div>
  );
}
