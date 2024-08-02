'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoHome } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import SkillsSection from './components/Skills';
import Navbar from "./components/NavbarMain";
import ContactForm from './components/Connect';
import Projects from './components/Projects';


const AboutPage = () => {

  const router = useRouter();

  const navigateToLink = (url: string | null) => {
    if (url) {
      window.open(url, '_blank');
    } else {
  
      console.log("This service is not linked.");
    }
  };
  
  const handleNavigation = (url?: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
  <div>
    <header> <Navbar /></header>
    
    <div className="relative pt-16"> 
    {/* Photo by Annie Spratt on Unsplash */}
        <img src="/images/background8.jpg" alt="Background" className=" photo -mt-52 opacity-90 w-full h-[500px] object-cover" />
        <div className="absolute -top-0 left-0 w-full h-[500px] flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold" style={{ textShadow: '0.5px 1px 0.5px rgba(0,0,0,0.5)' }}>Marli Simpson</h1>
          <p className="text-white mt-4 mb-6 text-xl sm:text-2xl md:text-3xl " style={{ textShadow: '0.5px 1px 0.5px rgba(0,0,0,0.5)' }}> Full-Stack Software Developer</p>
          <div className="flex justify-center items-center mt-2 mb-2 text-black dark:text-white">

<ul className="flex justify-center items-center list-none p-0 -mt-2 mb-28">
  <li className="mr-4" onClick={() => navigateToLink('mailto:mdsimpson09@gmail.com')}>
    <div className="flex items-center justify-center bg-green-800 rounded-lg cursor-pointer" style={{ width: '40px', height: '40px' }}>
      <MdOutlineMail className="text-white text-2xl"/>
    </div>
  </li>
  <li className="mr-4" onClick={() => navigateToLink('https://www.linkedin.com/in/marli-simpson/')}>
    <div className="flex items-center justify-center bg-blue-600 rounded-lg cursor-pointer" style={{ width: '40px', height: '40px' }}>
      <FaLinkedin className="text-white text-2xl" />
    </div>
  </li>
  <li onClick={() => navigateToLink('https://github.com/mdsimpson09')}>
    <div className="flex items-center justify-center bg-gray-900 rounded-lg cursor-pointer" style={{ width: '40px', height: '40px' }}>
      <FaGithub className="text-white text-2xl" />
    </div>
    </li>
  </ul>
</div>
</div>
</div>


<div className="background-color h-20 dark:bg-black "></div>

<main className="flex flex-col items-center justify-center p-4 sm:p-8 w-full dark:bg-black">
  
  <section id="about" className="text-black p-4 text-box rounded-lg shadow-lg items-center justify-center sm:p-8 w-full -mt-20">
    
    <div className="text-lg bg-white p-4 rounded-lg shadow-lg">
      <h2 className='text-center text-black font-bold text-xl sm:text-2xl mb-8'>About Me</h2>
      <p className="mb-6">
      Hi! My name is Marli and I'm a multifaceted professional with a diverse skill set. In April 2024, I successfully completed an intensive full-stack software engineering certificate program, equipping myself with cutting-edge skills and technologies. I was able to complete that program while maintaining my full-time job as a therapist and managing my business. I am now also working as a freelance full-stack developer.  This professional pivot marks the beginning of my transition from a clinical role in the mental health sector, as I embrace my passion for technology and digital innovation. 
      
        It's important that i continue to enhance my skills, so i continue my education through online courses on platforms like LinkedIn, Udemy, HackerRank, and NowLearning. These experiences and ongoing learning enable me to excel in various professional settings and adapt to new challenges.
          </p>
          <p className= "mb-6"> Continuing to enhance my skills is crucial, so I actively pursue further education through online courses on platforms like LinkedIn, Udemy, HackerRank, and NowLearning. These experiences and ongoing learning enable me to excel in various professional settings and adapt to new challenges. My background in the mental health field allows me to incorporate a deep understanding of human behavior, interpersonal communication, and attention to detail into my coding experiences. I thrive on solving complex problems and enjoy the process of understanding why something does or doesn't work as planned. My diverse experiences, including living in several states and working in various environments, have equipped me to adapt and thrive in any setting, whether collaborating with teams or working independently.
          </p>
          <p>
          </p>
          </div>
        </section>

      
        <div id="skills" className="text-black mt-10 p-4 text-box rounded-lg shadow-lg items-center justify-center sm:p-8 w-full">
    <div className="rounded-lg shadow-lg">
           <SkillsSection />
          </div>
        </div>


        
        <div id="projects" className="text-black mt-10 p-4 text-box rounded-lg shadow-lg items-center justify-center sm:p-8 w-full">
    <div className="rounded-lg shadow-lg">
           <Projects />
          </div>
        </div>


        <div id="contact" className= "text-black text-box rounded-lg shadow-lg items-center justify-center sm:p-8 w-full p-6 mt-11">
        
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
