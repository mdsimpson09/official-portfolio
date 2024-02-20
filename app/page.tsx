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
    <div className="flex flex-col items-center justify-center p-4 ">
      <div className="text-center">
        <h1 className="text-4xl text-black font-bold">Marli Simpson</h1>
        <p className="mt-2 text-xl text-black mb-10">Software Engineer</p>
   
        <div className="text-black text-center my-8">
        <h3>
          <span className= 'text-black'>
            {/* Assuming you have a specific icon for Las Vegas, NV */}
            <IoHome /> Las Vegas, NV
          </span>
        </h3>
        <ul className="text-black resume-contact-list">
          <Link href='mailto:mdsimpson09@gmail.com'>
          <MdOutlineMail />
          </Link>
          <Link href= 'https://www.linkedin.com/in/marli-simpson-lpc-mhsp-cpc/'>
          <FaLinkedin />
          </Link>
          <Link href= 'https://github.com/mdsimpson09'>
          <FaGithub />

            
          </Link>
        </ul>
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
          <p className="text-lg bg-white p-4 rounded-lg shadow-lg">
            Hey there! I'm Marli Simpson, a software engineer based in Las Vegas, Nevada. With a background in Psychology and Counseling, I've found my true passion in coding, where I blend my analytical skills with creativity to build engaging digital experiences. Whether it's diving deep into problem-solving or collaborating on innovative projects, I bring a unique perspective to the tech world. Outside of coding, you'll find me training in jiu-jitsu, exploring underwater worlds through scuba diving, or enjoying video games and travel.
          </p>
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
