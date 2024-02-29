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
  <li className="mr-4" onClick={() => navigateToLink('https://www.linkedin.com/in/marli-simpson-lpc-mhsp-cpc/')}>
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
          My name is Marli Simpson. I'm a full-stack software developer based in Las Vegas, Nevada. I will graduate, in May 2024, from a full-stack software engineering bootcamp with the University of South Florida. I graduated from Ball State University in 2013 with a BS in Psychology and Interpersonal Relations and in 2015 with a MA in Counseling Psychology. I am currently a Licensed Professional Counselor in the state of Tennessee and a Clinical Professional Counselor in the state of Nevada. 
          </p>
          <p className= "mb-6"> Due to my experiences working in the mental health field, I am able to incorporate my understanding of human behavior, relationship dynamics, and my attention to detail into my coding experiences. I love to learn and to understand why something is or is not working as planned. It's all about solving the mystery. I have also lived in several states and have worked in a wide range of environments, which allows me to have the experience to adapt and thrive in any setting. I enjoy collaborating with diverse teams and can easily adapt to working alone when needed. 
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
