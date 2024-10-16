"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  return (
    <nav className="w-full bg-gray-100 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <span className="text-blue-600 text-xl font-bold tracking-wide">
              Byte Contest
            </span>
          </Link>
        </div>

        {/* Center Section: Navigation Links (Hidden on small screens) */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/categories"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
          >
            Explore Contests
          </Link>
          <Link
            href="/how-it-works"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
          >
            How it works
          </Link>
          <Link
            href="/find-a-designer"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
          >
            Find a designer
          </Link>
          <Link
            href="/contest-list"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
          >
            Contest List
          </Link>
          <Link
            href="/post-contest"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
          >
            Create Contest
          </Link>
        </div>

        {/* Right Section: Sign Up/Login */}
        <div className="flex items-center space-x-6">
          <Link
            href="/sign-up"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
          >
            Sign Up
          </Link>
          <Link
            href="/sign-in"
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Log in
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-gray-800 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle mobile menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Shown when menu is open) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/categories"
              className="block text-gray-800 hover:text-blue-600 transition duration-300"
            >
              Explore Contests
            </Link>
            <Link
              href="/how-it-works"
              className="block text-gray-800 hover:text-blue-600 transition duration-300"
            >
              How it works
            </Link>
            <Link
              href="/find-a-designer"
              className="block text-gray-800 hover:text-blue-600 transition duration-300"
            >
              Find a designer
            </Link>
            <Link
              href="/contest-list"
              className="block text-gray-800 hover:text-blue-600 transition duration-300"
            >
              Contest List
            </Link>
            <Link
              href="/post-contest"
              className="block text-gray-800 hover:text-blue-600 transition duration-300"
            >
              Create Contest
            </Link>
            <Link
              href="/sign-up"
              className="block text-gray-800 hover:text-blue-600 transition duration-300"
            >
              Sign Up
            </Link>
            <Link
              href="/sign-in"
              className="block bg-blue-600 text-white text-center py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            >
              Log in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
