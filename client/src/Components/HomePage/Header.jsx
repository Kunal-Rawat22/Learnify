import React, { useState } from 'react';
import { FaBars, FaAngleDown } from 'react-icons/fa'; // Importing the icon components
import logo from "../../assets/images/android-chrome-512x512.png"; // Import the logo image

const Header = () => {
  const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu for "Learn"
  const toggleLearnDropdown = () => {
    setIsLearnDropdownOpen(!isLearnDropdownOpen);
  };

  // Function to toggle the dropdown menu for "About Us"
  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  // Function to toggle the dropdown menu for "Contact"
  const toggleContactDropdown = () => {
    setIsContactDropdownOpen(!isContactDropdownOpen);
  };

  // Function to close all dropdown menus when clicking outside of them
  const closeDropdowns = () => {
    setIsLearnDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsContactDropdownOpen(false);
  };

  return (
    <header className="text-black py-4 px-6 flex justify-between items-center fixed w-full z-10">
      {/* Left side with website logo */}
      <div className="flex items-center">
        <img src={logo} alt="Avanti Logo" className="w-8 h-8 mr-2" /> {/* Use the imported logo */}
        <h1 className="text-xl font-bold mr-4">Avanti</h1> {/* Add margin to the right */}
      </div>
      
      {/* Right side with navigation links */}
      <nav className="text-lg">
        <ul className="flex space-x-6">
          <li className="relative">
            <a href="#" className="text-black">Home</a>
          </li>
          <li className="relative">
            <div className="flex items-center">
              <a href="#" className="text-black" onClick={toggleLearnDropdown}>
                Learn
              </a>
              <button className="focus:outline-none ml-2" onClick={toggleLearnDropdown}>
                <FaAngleDown className="text-lg" />
              </button>
            </div>
            {/* Conditional rendering for the "Learn" dropdown menu */}
            {isLearnDropdownOpen && (
              <ul className="absolute bg-white py-2 px-4 shadow-lg left-0 top-full" onClick={closeDropdowns}>
                <li><a href="#" className="text-black">Course 1</a></li>
                <li><a href="#" className="text-black">Course 2</a></li>
                <li><a href="#" className="text-black">Course 3</a></li>
              </ul>
            )}
          </li>
          <li className="relative">
            <div className="flex items-center">
              <a href="#" className="text-black" onClick={toggleAboutDropdown}>
                About Us
              </a>
              <button className="focus:outline-none ml-2" onClick={toggleAboutDropdown}>
                <FaAngleDown className="text-lg" />
              </button>
            </div>
            {/* Conditional rendering for the "About Us" dropdown menu */}
            {isAboutDropdownOpen && (
              <ul className="absolute bg-white py-2 px-4 shadow-lg left-0 top-full" onClick={closeDropdowns}>
                <li><a href="#" className="text-black">Team</a></li>
                <li><a href="#" className="text-black">Mission</a></li>
                <li><a href="#" className="text-black">Values</a></li>
              </ul>
            )}
          </li>
          <li className="relative">
            <div className="flex items-center">
              <a href="#" className="text-black" onClick={toggleContactDropdown}>
                Contact
              </a>
              <button className="focus:outline-none ml-2" onClick={toggleContactDropdown}>
                <FaAngleDown className="text-lg" />
              </button>
            </div>
            {/* Conditional rendering for the "Contact" dropdown menu */}
            {isContactDropdownOpen && (
              <ul className="absolute bg-white py-2 px-4 shadow-lg left-0 top-full" onClick={closeDropdowns}>
                <li><a href="#" className="text-black">Email</a></li>
                <li><a href="#" className="text-black">Phone</a></li>
                <li><a href="#" className="text-black">Location</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      
      {/* Right side with login and sign up links */}
      <nav className="text-lg ml-auto"> {/* Use ml-auto to push elements to the right */}
        <ul className="flex space-x-6">
          <li><a href="#" className="text-black">Login</a></li>
          <li><a href="#" className="text-black">Sign Up Free</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
