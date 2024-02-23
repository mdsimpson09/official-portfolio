'use client'

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import SkillsSection from "../components/Skills";
import Navbar from "../components/Navbar";
import ContactForm from "../components/Connect";

const Resume: React.FC = () => {
  const navigateToLink = (url: string | null) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      // Handle the case where the URL is null (e.g., show a notification or tooltip)
      console.log("This service is not linked.");
    }
  };

  return (
 <div>
      <header> <Navbar /> </header>
      
      <div className="relative pt-16"> 
    {/* Photo by Scott Webb on Unsplash */}
        <img src="/images/background.jpg" alt="Background" className="-mt-64 opacity-90 w-full h-[600px] object-cover" />
        <div className="absolute -top-0 left-0 w-full h-[500px] flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-6xl font-bold green-outline">Marli Simpson</h1>
          <p className="text-white mt-4 mb-6 text-2xl">Full-Stack Software Developer</p>
          <div className="flex justify-center items-center mt-2 mb-2 text-black dark:text-white">

<ul className="flex justify-center items-center list-none p-0 -mt-2 mb-28">
  <li className="mr-4" onClick={() => navigateToLink('mailto:mdsimpson09@gmail.com')}>
    <div className="flex items-center justify-center bg-purple-600 rounded-lg cursor-pointer" style={{ width: '40px', height: '40px' }}>
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

<div className="bg-neutral-100 h-20"></div>

<main className="items-center justify-center p-8 w-full">
    <div className="text-black mb-10 p-6 bg-emerald-100 rounded-lg shadow-lg">
        <h2 className="text black text-2xl font-bold text-center mt-2 mb-4">Licenses</h2>
        <div className="text-center text-lg bg-white p-4 rounded-lg shadow-lg">
    <p className="mt-2 text-xl text-black font-bold">Licensed Professional Counselor-Mental Health Service Provider</p>
    <p className=" mt-2 text-md mb-6 text-black ">Tennessee</p>
    <p className="text-xl text-black font-bold">Clinical Professional Counselor</p>
    <p className=" mt-2 mb-2 text-black text-md">Nevada</p>
    </div>
    </div>
      {/* Education Section */}
      <section className="text-black mt-2 p-6 bg-emerald-100 rounded-lg shadow-lg">
        <h2 className="text black text-2xl font-bold text-center mt-2 mb-4">Education</h2>
        <div className="text-center text-lg bg-white p-4 rounded-lg shadow-lg">
          {/* Example Education Entry */}
          <div className="mb-4">

            <h3 className= 'font-bold mt-2'>INSERT CERTIFICATE HERE</h3>
            <h2> University of South Florida</h2>
            <p>March 2023 - May 2024</p>
           
              <br />
              <p>Invested 14 months in a full-stack software engineering bootcamp studying HTML, CSS, Tailwind, JavaScript, APIs, React, Next, Express, Prisma, PostgreSQL, Python, and Flask</p>
            <br />
          <h3 className= 'font-bold'>MA Counseling Psychology</h3>
            <h2> Ball State University </h2>
            <p>Aug 2013 - Jul 2015</p>
            <br />

            <h3 className= 'font-bold'>BS in Psychology and Interpersonal Relations</h3>
            <h2> Ball State University </h2>
            <p>Aug 1009 - May 2013</p>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="text-black mt-10 p-6 bg-emerald-100 rounded-lg shadow-lg">
        <h2 className="text black text-2xl font-bold text-center mt-2 mb-4">Professional Experience</h2>
        <div className="text-center text-lg bg-white p-4 rounded-lg shadow-lg">
          {/* Example Education Entry */}
          <div className="mb-4">
           
          <h3 className= 'font-bold mt-2'>Licensed Professional Counselor and Team Lead Supervisor</h3>
            <h3>Nashville Collaborative Counseling Center</h3>
            <p>October 2020 - Present</p>
              
              <p className='mt-2'>Nashville Collaborative Counseling Center began as a start-up group counseling center around 2020 and has grown tremendously. NCCC creates greater access to quality mental healthcare services in Tennessee by tailoring individual counseling to those in need.</p>
              <br></br>
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Provide individual outpatient therapy via telehealth to adult clients seeking treatment both in person and via tele-health services, work with
              clients to address various areas of need related to mood disorders, eating disorders, addiction and substance abuse, experiences
              of trauma, relationships, life-transitions, grief and loss, socioeconomic stress, diversity and identity issues, respond to crises as
              needed, consult with other therapists at the center.</p>
              <div className="border-b-2 border-dashed border-emerald-300 my-8"></div>

              <h3 className= 'font-bold mt-2'>Admissions Counselor</h3>
            <h3>Rolling Hills Hospital</h3>
            <p>March 2018 - March 2020</p>
          
              <p className='mt-2'>Rolling Hill Hospital, in Franklin, Tennessee, is a hospital focusing on mental health and substance abuse treatment. They offer inpatient and outpatient services.</p>
              <br></br>
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Review referrals from hospitals, crisis response teams and verify insurance benefits, while working with other team members to
              assess for level of acuity and possible acceptance. Field phone calls from referral sources and individuals seeking both
              information and treatment for themselves or others. Perform assessments on individuals either referred for treatment or walk-in,
              on a voluntarily or involuntary basis. Assist patients and their families in the transition from the admissions department to the
              specific inpatient unit or with outpatient referrals. Complete pre-authorizations with insurance companies prior to patient’s
              admission into the hospital. Assist other units as needed and respond to various codes throughout the hospital.</p>
              <div className="border-b-2 border-dashed border-emerald-300 my-8"></div>
            

            <h3 className= 'font-bold mt-2'>Case Manager and Children&apos;s Program Manager</h3>
            <h3>Renewal House</h3>
            <p>May 2017 - March 2018</p>
           
            
              <p className='mt-2'>Renewal House is a non-profit residential treatment center for women and their children.</p>
              <br />
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Manage the Children&apos;s Program for the residential treatment program. Case management for women and their children.
              Facilitate individual case management and parenting sessions, and co-facilitate a dialectical-behavioral therapy group and co-
              facilitate children&apos;s support/prevention groups. Manage quarterly and yearly reports for the grants funding the Children&apos;s
              Program. Participate in DCS and infant mental health court cases and community organizations.</p>
              <div className="border-b-2 border-dashed border-emerald-300 my-8"></div>
            


            <h3 className= 'font-bold mt-2'>Mental Health Specialist in Corrections </h3>
            <h3>Mental Health Cooperative</h3>
            <p>May 2016 - May 2017</p>
              <p className='mt-2'>Mental Health Cooperative is a community mental health center in Nashville, Tennessee, that provides outpatient individual and group counseling, case management, community case management, crisis services, short-term crisis stabilization, respite services, and mental health services in Davidson County jails.</p>
              <br></br>
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Assist in risk assessment, crisis intervention, deescalation, and supportive counseling with inmates currently incarcerated with the Davidson
              County Sheriff Office. Provide on-call coverage in order to advise nursing and medical staff on mental health decisions during
              overnight hours.</p>
              <div className="border-b-2 border-dashed border-emerald-300 my-8"></div>

            <h3 className= 'font-bold mt-2'>Crisis Counselor, PRN</h3>
            <h3>Mental Health Cooperative</h3>
            <p>January 2017 - December 2017 </p>
           
              <p>Nashville Collaborative Counseling Center began as a start-up group counseling center around 2020 and has grown tremendously. NCCC creates greater access to quality mental healthcare services in Tennessee by tailoring individual counseling to those in need.</p>
              <br></br>
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Respond to Crisis situations within the community or county jails to conduct crisis assessments and intervention services to appropriately address the needs of the consumer. If hospitalization is necessary, make appropriate referrals</p>
              <div className="border-b-2 border-dashed border-emerald-300 my-8"></div>
            

            <h3 className= 'font-bold mt-2'>Adult Outpatient and Addictions Therapist</h3>
            <h3>Meridian Health Services</h3>
            <p>August 2015 - May 2016</p>
            
              <p className='mt-2'>Meridian Health Services is a community mental health center that provides outpatient therapy, outpatient substance abuse treatment, intensive outpatient group therapy, and case management services</p>
              <br></br>
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Supervised individual counseling of adult clients enrolled in the adult outpatient unit at Meridian Health Services. Work with
              clients voluntarily in services or referred through Delaware County Community Corrections, Delaware County Department of
              Child Services and out of state referrals.</p>
            <br />
            

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <div id="skills" className="text-black mt-10 p-6 bg-emerald-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mt-6 -mb-4">My Toolkit</h2>
          <div className="rounded-lg shadow-lg">
           <SkillsSection />
          </div>
   
        </div>
        <div id="contact" className="mt-10 p-6 bg-neutral-50 rounded-lg ">
          
          <ContactForm />
        </div>

    </main>
    </div>
    
  );
};

export default Resume;