'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  

  return (
    <header className="fixed top-0 w-full flex justify-between items-center bg-transparent z-50 p-5">

      
   <div className="switch-box cursor-pointer flex items-center" onClick={toggleTheme} aria-label="Toggle dark/light mode">
        <FaSun className={`text-yellow-200 text-2xl ${isDarkMode ? 'hidden' : 'block'}`} />
        <div className={`switch-btn mx-2 w-8 h-4 bg-neutral-100 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-gray-300 dark:text-white'}`}></div>
        <FaMoon className={`text-gray-400 text-xl ${isDarkMode ? 'block' : 'hidden'}`} />
      </div>


      <nav className="bg-transparent">
        <div className="flex justify-end dark:text-white z-50">
          <button onClick={toggleMenu} className="z-50 flex flex-col space-y-2">
     
            <span className={`block w-8 h-0.5 bg-black ${isOpen ? 'transform rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-black ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-black  ${isOpen ? 'transform -rotate-45 -translate-y-2.5' : ''}`}></span>
          </button>
        </div>

        <ul className={`absolute top-0 right-0 mt-12 mr-6 p-6 bg-emerald-700 shadow-lg rounded-lg ${isOpen ? 'flex' : 'hidden'} flex-col items-start space-y-5`}>
          <li className="hover:underline decoration-emerald-200">
            <Link href="/">
              <span className="text-lg text-white cursor-pointer">Home</span>
            </Link>
          </li>
          <li className="hover:underline text-white  decoration-emerald-200">
            <Link href="#skills">
              <span className="text-lg cursor-pointer">My Toolkit</span>
            </Link>
          </li>
          <li className="hover:underline text-white  decoration-emerald-200">
            <Link href="#contact">
              <span className="text-lg cursor-pointer">Connect with me</span>
            </Link>
          </li>
        </ul>
      {/* <ul className={` text-black absolute top-0 right-0 mt-12 mr-6 p-6 bg-white shadow-lg rounded-lg dark:bg-black dark:outline ${isOpen ? 'flex' : 'hidden'} flex-col items-center space-y-5 dark:text-white`}>
        <li>
          <Link href="/">
            <span className="text-lg font-bold cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <span className="text-lg font-bold cursor-pointer">My Toolkit</span>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <span className="text-lg font-bold cursor-pointer">Connect with me</span>
          </Link>
        </li>
      </ul> */}
    </nav>
     </header>
  );
};

export default Navbar;