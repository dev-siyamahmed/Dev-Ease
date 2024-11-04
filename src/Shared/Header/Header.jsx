import React, { useState } from 'react';
import { FaSearch, FaBars, FaChevronDown } from 'react-icons/fa';

export default function Header() {
  

    return (
        <header className="flex  items-center justify-between px-6 py-4 bg-white text-gray-700 shadow-sm">
            
            {/* Search bar */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md mx-auto">
                <FaSearch className="text-gray-400 mr-3" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none text-gray-700 w-full"
                />
            </div>

            {/* Right section: Profile and Menu */}
            <div className="flex items-center space-x-4">
                {/* Profile section */}
                <div className="relative flex items-center space-x-2 cursor-pointer">
                    <img
                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                   
                    
                </div>

                {/* Menu icon (visible on small screens) */}
                <div className="md:hidden">
                    <FaBars className="text-2xl cursor-pointer" />
                </div>
            </div>
        </header>
    );
}
