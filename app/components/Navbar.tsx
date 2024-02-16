import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 right-0 z-50 w-full bg-transparent">
      <div className="flex justify-end p-5">
        <button
          onClick={toggleMenu}
          className="z-50 flex flex-col space-y-2"
        >
          {/* Hamburger Icon */}
          <span className={`block w-8 h-0.5 bg-black ${isOpen ? 'transform rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-black ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-black ${isOpen ? 'transform -rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>

      <ul className={`absolute top-0 right-0 mt-12 mr-6 p-6 bg-white shadow-lg rounded-lg ${isOpen ? 'flex' : 'hidden'} flex-col items-center space-y-5`}>
        <li>
          <Link href="#home">
            <span className="text-lg font-bold cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/resume">
            <span className="text-lg font-bold cursor-pointer">Resume</span>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <span className="text-lg font-bold cursor-pointer">About Me</span>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <span className="text-lg font-bold cursor-pointer">My Toolkit</span>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <span className="text-lg font-bold cursor-pointer">Projects</span>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <span className="text-lg font-bold cursor-pointer">Let's Connect</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;