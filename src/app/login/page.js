// 




"use client";

import { Eye, EyeClosed, LockKeyhole, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; // Import useRouter

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [errors, setErrors] = useState({ username: '', password: '' });

  const router = useRouter(); // Initialize router

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Validate the form
  const validateForm = () => {
    let valid = true;
    let newErrors = { username: '', password: '' };

    // Validate username
    if (username.trim() === '') {
      newErrors.username = 'Username is required';
      valid = false;
    }

    // Validate password
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const userData = { username, password };

      // Store login state in localStorage or sessionStorage based on 'Keep me logged in' checkbox
      if (keepLoggedIn) {
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        sessionStorage.setItem('user', JSON.stringify(userData));
      }

      console.log('Form submitted:', userData);

      // Redirect to the dashboard after successful login
      router.push('/dashboard'); // Redirect user to dashboard
    }
  };

  // Check if the user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (savedUser) {
      const { username, password } = JSON.parse(savedUser);
      setUsername(username);
      setPassword(password);
      // Redirect to dashboard if already logged in
      router.push('/dashboard');
    }
  }, [router]); // Added router as dependency

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Left Side Logo */}
      <div className="absolute top-12 left-12">
        <img src="/logo.png" alt="Sunflow" className="w-40" />
      </div>

      {/* Login Form */}
      <div className="absolute top-[20%] left-[10%] z-10">
        <div className="w-96 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
            Log in to your account
          </h2>

          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1F2937]" htmlFor="username">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User color="#111827" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className={`pl-12 w-full mt-1 p-3 border ${
                  errors.username ? 'border-red-500' : 'border-[#1F2937]'
                } rounded-lg shadow-sm text-gray-900`}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1F2937]" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockKeyhole color="#111827" />
              </div>
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`w-full mt-1 pl-12 p-3 border ${
                  errors.password ? 'border-red-500' : 'border-[#1F2937]'
                } rounded-lg shadow-sm text-gray-900`}
              />
              <button
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400"
                onClick={togglePasswordVisibility}
                type="button"
              >
                {passwordVisible ? <EyeClosed color="#111827" /> : <Eye color="#111827" />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center mb-6">
            <input
              id="keep-logged-in"
              name="keep-logged-in"
              type="checkbox"
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(e.target.checked)}
              className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded accent-orange-500"
            />
            <label htmlFor="keep-logged-in" className="ml-2 block text-sm text-gray-900">
              Keep me logged in
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg font-medium"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="absolute right-0 bottom-0">
        <img src="/back.png" alt="background" className="w-full h-auto" />
      </div>
    </div>
  );
}
