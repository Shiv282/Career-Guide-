import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          
          <div className="text-white text-2xl font-bold font-fredoka-one">
            Career Guide
          </div>

          <div className="flex items-center space-x-4 justify-start">
            <a href="/" className="mx-3 text-white hover:text-gray-200 hover:transform hover:scale-125 transition duration-300 ease-in-out">
              Home
            </a>
            <a href="/test" className="mx-3 text-white hover:text-gray-200 hover:transform hover:scale-125 transition duration-300 ease-in-out">
              Take Test
            </a>
            
          </div>

          <div>
          <button className="bg-white text-black py-2 px-3 rounded-md hover:bg-red-200 hover:text-red-600">
              Logout
            </button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
