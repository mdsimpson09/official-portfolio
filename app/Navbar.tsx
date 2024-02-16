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
        <li><Link href="#home"><a className="text-lg font-bold">Home</a></Link></li>
        <li><Link href="/resume"><a className="text-lg font-bold">Resume</a></Link></li>
        <li><Link href="#about"><a className="text-lg font-bold">About Me</a></Link></li>
        <li><Link href="#skills"><a className="text-lg font-bold">My Toolkit</a></Link></li>
        <li><Link href="#projects"><a className="text-lg font-bold">Projects</a></Link></li>
        <li><Link href="#contact"><a className="text-lg font-bold">Let's Connect</a></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;