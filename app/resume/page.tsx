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
  
      console.log("This service is not linked.");
    }
  };

  return (
 <div>
      <header> <Navbar /> </header>
      
      <div className="relative pt-16"> 
      {/* Photo by Annie Spratt on Unsplash */}
        <img src="/images/background8.jpg" alt="Background" className=" photo -mt-52 opacity-90 w-full h-[500px] object-cover" />
        <div className="absolute -top-0 left-0 w-full h-[500px] flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold" style={{ textShadow: '0.5px 1px 0.5px rgba(0,0,0,0.5)' }}>Marli Simpson</h1>
          <p className="text-white mt-4 mb-6 text-xl sm:text-2xl md:text-3xl " style={{ textShadow: '0.5px 1px 0.5px rgba(0,0,0,0.5)' }}> Full-Stack Software Developer</p>
          <div className="flex justify-center items-center mt-2 mb-2 text-black dark:text-white">

<ul className="flex justify-center items-center list-none p-0 -mt-2 mb-28">
  <li className="mr-4" onClick={() => navigateToLink('mailto:mdsimpson09@gmail.com')}>
    <div className="flex items-center justify-center bg-green-700 rounded-lg cursor-pointer" style={{ width: '40px', height: '40px' }}>
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
{/* <main className="items-center justify-center p-8 w-full"> */}
    {/* <section className="-mt-20 text-black mb-10 p-6 text-box rounded-lg shadow-lg"> */}
    <section className="text-black p-4 text-box rounded-lg shadow-lg items-center justify-center sm:p-8 w-full -mt-20 mb-6">
    <div className="text-lg text-center bg-white p-4 rounded-lg shadow-lg">
      <h2 className='text-center text-black font-bold text-xl sm:text-2xl mb-8'>Licenses</h2>
    
        {/* <div className="text-center text-lg bg-white p-4 sm:p2 rounded-lg shadow-lg ">
        <h2 className='text-black font-bold text-2xl mb-8 '>Licenses</h2> */}
    <p className="mt-2 text-xl text-black font-bold ">Licensed Professional Counselor-Mental Health Service Provider</p>
    <p className=" mt-2 text-md mb-6 text-black ">Tennessee</p>
    <p className="text-xl text-black font-bold">Clinical Professional Counselor</p>
    <p className=" mt-2 mb-2 text-black text-md">Nevada</p>
    </div>
    </section>
     
      {/* <section className=" text-black mb-10 p-6 text-box rounded-lg shadow-lg"> */}
      <section id="education" className="text-black p-4 text-box rounded-lg shadow-lg items-center justify-center sm:p-8 w-full mb-8 ">

        <div id="education" className="text-lg text-center bg-white p-4 rounded-lg shadow-lg">
         
          <div  className="mb-4">
           <h2 className='text-black font-bold text-2xl mb-8' >Educational Experience</h2>
            <h3 className= 'font-bold mt-2'>Software Engineering Career Track</h3>
            <h2> University of South Florida</h2>
            <p>March 2023 - May 2024</p>
           
              <br />
              <p>Over a 14 month period, I completed an intensive full-stack software engineering bootcamp, gaining experience in HTML, CSS, JavaScript, React, Express, Prisma, PostgreSQL, Python, and Flask. Beyond the core curriculum, I proactively expanded my skill set to include Next.js, Prisma, TypeScript, and Cypress, specifically focusing on these advanced tools to develop my capstone project. 
              My frontend capabilities are well-rounded with proficiency in HTML, CSS (alongside the Tailwind framework), JavaScript, React, Next.js, JSON, and TypeScript. On the backend, I am skilled in Python, Express, and API development, with a strong foundation in database technologies such as PostgreSQL, MySQL, Prisma, and tools like DataGrip and Postman. My experience encompasses working with frameworks and platforms like Flask, Node.js, Heroku, Vercel, and GitHub, ensuring a versatile development and deployment process. Additionally, I have gained testing skills using Jest and Cypress
            </p>
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

   
      {/* <section id="professional" className="text-black mt-10 p-6 text-box rounded-lg shadow-lg"> */}

      <section id="professional" className="text-black p-4 text-box rounded-lg shadow-lg items-center justify-center sm:p-8 w-full">

        <div className="text-lg text-center bg-white p-4 rounded-lg shadow-lg">
        
          <div className="mb-4">
           
          <h2 className='text-black font-bold text-2xl mb-10 '>Professional Experience</h2>
          <h3 className= 'font-bold mt-2'>Licensed Professional Counselor and Team Lead Supervisor</h3>
            <h3>Nashville Collaborative Counseling Center</h3>
            <p>October 2020 - Present</p>
              
              <br></br>
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Provide individual outpatient therapy via telehealth to adult clients seeking treatment to address various areas of need related to mood disorders, eating disorders, addiction and substance abuse, experiences
              of trauma, relationships, life-transitions, grief and loss, socioeconomic stress, diversity and identity issues, respond to crises as
              needed, consult with other therapists at the center.</p>
              <p>
                Supervise and provide clinical oversight for a team therapists at NCCC, including reviewing cases, providing consultation, assisting with treatment planning, and ensuring ethical and professional standards of care are upheld. Run bi-weekly reports for each therapist and assist in leadership meetings 
              </p>
              <div className="border-b-2 border-dashed text-box my-8"></div>

              <h3 className= 'font-bold mt-2'>Admissions Counselor</h3>
            <h3>Rolling Hills Hospital</h3>
            <p>March 2018 - March 2021</p>
          
              <br></br>
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Review referrals from hospitals, crisis response teams and verify insurance benefits, while working with other team members to
              assess for level of acuity and possible acceptance. Field phone calls from referral sources and individuals seeking both
              information and treatment for themselves or others. Perform assessments on individuals either referred for treatment or walk-in,
              on a voluntarily or involuntary basis. Assist patients and their families in the transition from the admissions department to the
              specific inpatient unit or with outpatient referrals. Complete pre-authorizations with insurance companies prior to patient’s
              admission into the hospital. Assist other units as needed and respond to various codes throughout the hospital.</p>
              <div className="border-b-2 border-dashed text-box my-8"></div>
            

            <h3 className= 'font-bold mt-2'>Case Manager and Children&apos;s Program Manager</h3>
            <h3>Renewal House</h3>
            <p>May 2017 - March 2018</p>
              <br />
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Manage the Children&apos;s Program for the residential treatment program. Case management for women and their children.
              Facilitate individual case management and parenting sessions, and co-facilitate a dialectical-behavioral therapy group and co-
              facilitate children&apos;s support/prevention groups. Manage quarterly and yearly reports for the grants funding the Children&apos;s
              Program. Participate in DCS and infant mental health court cases and community organizations.</p>
              <div className="border-b-2 border-dashed text-box my-8"></div>
            


            <h3 className= 'font-bold mt-2'>Mental Health Specialist in Corrections </h3>
            <h3>Mental Health Cooperative</h3>
            <p>May 2016 - May 2017</p>
             
              <br></br>
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Assist in risk assessment, crisis intervention, deescalation, and supportive counseling with inmates currently incarcerated with the Davidson
              County Sheriff Office. Provide on-call coverage in order to advise nursing and medical staff on mental health decisions during
              overnight hours.</p>
              <div className="border-b-2 border-dashed text-box my-8"></div>

            <h3 className= 'font-bold mt-2'>Crisis Counselor, PRN</h3>
            <h3>Mental Health Cooperative</h3>
            <p>January 2017 - December 2017 </p>
              <br></br>
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Respond to Crisis situations within the community or county jails to conduct crisis assessments and intervention services to appropriately address the needs of the consumer. If hospitalization is necessary, make appropriate referrals</p>
              <div className="border-b-2 border-dashed text-box my-8"></div>
            

            <h3 className= 'font-bold mt-2'>Adult Outpatient and Addictions Therapist</h3>
            <h3>Meridian Health Services</h3>
            <p>August 2015 - May 2016</p>
            
            
              <br></br>
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Supervised individual counseling of adult clients enrolled in the adult outpatient unit at Meridian Health Services. Work with
              clients voluntarily in services or referred through Delaware County Community Corrections, Delaware County Department of
              Child Services and out of state referrals.</p>
            <br />
            

          </div>
        </div>
      </section>

   
      <div id="skills" className="text-black mt-10 p-4 text-box rounded-lg shadow-lg items-center justify-center sm:p-8 w-full">
    <div className="rounded-lg shadow-lg">
            
           <SkillsSection />
          </div>
   
        </div>          
        <div id="contact" className= "text-black text-box rounded-lg shadow-lg items-center justify-center sm:p-8 w-full p-6 mt-11">
        
        <ContactForm />
      </div>
  
    </main>
    </div>
    
  );
};

export default Resume;