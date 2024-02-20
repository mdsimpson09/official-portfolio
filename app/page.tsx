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



const AboutPage = () => {

  const router = useRouter();

  // Function to handle navigation programmatically
  const handleNavigation = (url?: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
<div className="flex flex-col items-center justify-center p-4">
  <div className="text-center">
    <h1 className="dark:text-white dark:bg-black text-black text-4xl font-bold">Marli Simpson</h1>
    <p className="dark:text-white dark:bg-black-white mt-2 text-xl mb-10 text-black ">Software Engineer</p>

    {/* Home and Las Vegas, NV on a single line */}
    <div className="flex justify-center items-center mb-8 text-black dark:text-white dark:bg-black px-2">
      <IoHome className="text-current" /> <span>Las Vegas, NV</span>
    </div>

    {/* Icons in a single line */}
    <div className="flex justify-center items-center gap-4 text-black dark:text-white dark:bg-black">
      <Link href='mailto:mdsimpson09@gmail.com'>
        <MdOutlineMail className="cursor-pointer" />
      </Link>
      <Link href='https://www.linkedin.com/in/marli-simpson-lpc-mhsp-cpc/'>
        <FaLinkedin className="cursor-pointer" />
      </Link>
      <Link href='https://github.com/mdsimpson09'>
        <FaGithub className="cursor-pointer" />
      </Link>
      </div>

        <div className="mt-4">
          <Link href="#about" aria-label="Scroll to About Section">
            <i className="fas fa-arrow-down animate-bounce" style={{ cursor: 'pointer' }}></i>
          </Link>
        </div>
      </div>




      <main className="mt-10 w-full ">
      
        <section id="about" className="text-black p-6 bg-pink-200 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">About Me</h2>
          <div className="text-lg bg-white p-4 rounded-lg shadow-lg ">
          <p className= "mb-6">
          I'm Marli Simpson, <small>(she/her)</small>, a software engineer based in Las Vegas, Nevada. I graduated from Ball State University in 2013 with a BS in Psychology and Interpersonal Relations and in 2015 with a MA in Counseling Psychology. I am currently a Licensed Professional Counselor in the state of Tennessee and a Clinical Professional Counselor in the state of Nevada. I most recently completed a full-stack software engineering bootcamp with the University of South Florida. I incorporate my understanding of our human behavior, our relationship dynamics, and my attention to detail into my coding experiences. I love to learn and to understand why something is or is not working as planned. It's all about solving the mystery.
          </p>
          <p className= "mb-6"> I have lived in several states and have worked in a wide range of environments, which allows me to have the experience to adapt and thrive in any setting. I enjoy collaborating with diverse teams and can easily adapt to working alone when needed. 
          </p>
          <p className= "mb-6" >When I'm not coding and learning, you can find me at the gym training jiu-jitsu, scuba diving, or spending time at home with my family or playing video games. I also love to travel as often as possible, so if you can't find me, that's likely why. </p>
          </div>
        </section>

      
        <div id="skills" className="text-black mt-10 p-6 bg-pink-200 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mt-6 -mb-4">My Toolkit</h2>
          <div className="rounded-lg shadow-lg">
           <SkillsSection />
          </div>
        </div>


        
        <div id="projects" className="text-black mt-10 p-6 bg-pink-200 rounded-lg shadow-lg">
        <h2 className="text black text-2xl font-bold text-center mt-2 mb-4">Projects</h2>
          <div className="text-lg bg-white p-4 rounded-lg shadow-lg">
          {/* Dynamically render projects list */}
          </div>
        </div>

        <div id="contact" className="mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Let's Connect</h2>
          {/* Contact form or information */}
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
