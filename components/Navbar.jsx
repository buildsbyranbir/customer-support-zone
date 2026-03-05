
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            CS — Ticket System
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">FAQ</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Changelog</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Blog</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Download</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Contact</a>
            <button className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              <span>New Ticket</span>
            </button>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:text-indigo-600 py-2">Home</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 py-2">FAQ</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 py-2">Changelog</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 py-2">Blog</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 py-2">Download</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 py-2">Contact</a>
               <button className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center space-x-2 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                <span>New Ticket</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
