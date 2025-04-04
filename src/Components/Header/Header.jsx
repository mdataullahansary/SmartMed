import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/pLogo.png"; // Adjust path based on your file structure


function Header() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                id="logo"
                className="h-10 w-auto"
                src={logo}
                alt="Logo"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink
                to="/"
                className="border-custom text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/Booking"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Book Now
              </NavLink>
              <NavLink
                to="/Contact"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Emergency Contacts
              </NavLink>
            </div>
          </div>

          {/* Emergency Call Button */}
          <div className="flex flex-row items-center justify-center h-full ">
            
            <button
              
              className=" hidden w-44 h-10 md:flex rounded-lg bg-gray-600 px-4 py-2 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom mr-10"
            >   <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 mt-1" />
            Emergency Call
            </button>
            <button className="h-10  px-6 py-2 bg-blue-400 text-white font-medium rounded-2xl justify-center border-collapse border-black border-1"> <FontAwesomeIcon icon={faUser} className="mr-2 mt-1" />Login</button>

            {/* Mobile Menu Button */}
            <div className="relative">
              <button id="menu-btn" className="md:hidden focus:outline-none w-10 h-10 z-20 relative">
                <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
              </button>

              {/* Mobile Menu */}
              <div
                id="mobile-menu"
                className="hidden absolute h-[100vh] right-1 mt-2 w-[120px] flex bg-gray-50 border-transparent rounded-lg flex-col items-center space-y-4 md:hidden z-10 transition delay-150 duration-300 ease-in-out"
              >
                <Link to="/" className="hover:text-gray-600 text-lg font-medium">
                  Home
                </Link>
                <Link to="/booking" className="hover:text-gray-600 text-lg font-medium">
                  Book Now
                </Link>
                <Link to="/live-tracking" className="hover:text-gray-600 text-lg font-medium">
                  Live Tracking
                </Link>
                <Link to="/contacts" className="hover:text-gray-600 text-lg hover:text-xl font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;