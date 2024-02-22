'use client'

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import SkillsSection from "../components/Skills";
import Navbar from "../components/Navbar";
import ContactForm from "../components/Connect";

const Resume: React.FC = () => {
  return (
    <main className="items-center justify-center p-4 w-full">
      <header> <Navbar /> </header>
      <div className="flex flex-col items-center justify-center p-4">
  <div className="text-center">
    <h1 className="dark:text-white dark:bg-black text-black text-4xl font-bold">Marli Simpson</h1>
    <p className="dark:text-white dark:bg-black-white mt-2 text-xl mb-4 text-black ">Software Engineer</p>


    {/* Home and Las Vegas, NV on a single line */}
    <div className="flex justify-center items-center mb-4 text-black dark:text-white dark:bg-black px-2">
      <IoHome className="text-current" /> <span>Las Vegas, NV</span>
    </div>

    {/* Icons in a single line */}
    <div className="flex justify-center items-center gap-4 text-black dark:text-white dark:bg-black mb-10">
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
    </div>
</div>

    <div className="text-black mb-10 p-6 bg-pink-200 rounded-lg shadow-lg">
        <h2 className="text black text-2xl font-bold text-center mt-2 mb-4">Licenses</h2>
        <div className="text-center text-lg bg-white p-4 rounded-lg shadow-lg">
    <p className="mt-2 text-xl text-black font-bold">Licensed Professional Counselor-Mental Health Service Provider</p>
    <p className=" mt-2 text-md mb-6 text-black ">Tennessee</p>
    <p className="text-xl text-black font-bold">Clinical Professional Counselor</p>
    <p className=" mt-2 mb-2 text-black text-md">Nevada</p>
    </div>
    </div>
      {/* Education Section */}
      <section className="text-black mt-2 p-6 bg-pink-200 rounded-lg shadow-lg">
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
            <p>Aug 2009 - May 2013</p>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="text-black mt-10 p-6 bg-pink-200 rounded-lg shadow-lg">
        <h2 className="text black text-2xl font-bold text-center mt-2 mb-4">Professional Experience</h2>
        <div className="text-center text-lg bg-white p-4 rounded-lg shadow-lg">
          {/* Example Education Entry */}
          <div className="mb-4">
           
          <h3 className= 'font-bold mt-2'>Licensed Professional Counselor and Team Lead Supervisor</h3>
            <h2>Nashville Collaborative Counseling Center</h2>
            <p>October 2020 - Present</p>
              
              <p className='mt-2'>Nashville Collaborative Counseling Center began as a start-up group counseling center around 2020 and has grown tremendously. NCCC creates greater access to quality mental healthcare services in Tennessee by tailoring individual counseling to those in need.</p>
              <br></br>
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Provide individual outpatient therapy via telehealth to adult clients seeking treatment both in person and via tele-health services, work with
              clients to address various areas of need related to mood disorders, eating disorders, addiction and substance abuse, experiences
              of trauma, relationships, life-transitions, grief and loss, socioeconomic stress, diversity and identity issues, respond to crises as
              needed, consult with other therapists at the center.</p>
              <div className="border-b-2 border-dashed border-pink-300 my-8"></div>

              <h3 className= 'font-bold mt-2'>Admissions Counselor</h3>
            <h2>Rolling Hills Hospital</h2>
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
              <div className="border-b-2 border-dashed border-pink-300 my-8"></div>
            

            <h3 className= 'font-bold mt-2'>Case Manager and Children&apos;s Program Manager</h3>
            <h2>Renewal House</h2>
            <p>May 2017 - March 2018</p>
           
            
              <p className='mt-2'>Renewal House is a non-profit residential treatment center for women and their children.</p>
              <br />
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Manage the Children&apos;s Program for the residential treatment program. Case management for women and their children.
              Facilitate individual case management and parenting sessions, and co-facilitate a dialectical-behavioral therapy group and co-
              facilitate children&apos;s support/prevention groups. Manage quarterly and yearly reports for the grants funding the Children&apos;s
              Program. Participate in DCS and infant mental health court cases and community organizations.</p>
              <div className="border-b-2 border-dashed border-pink-300 my-8"></div>
            


            <h3 className= 'font-bold mt-2'>Mental Health Specialist in Corrections </h3>
            <h2>Mental Health Cooperative</h2>
            <p>May 2016 - May 2017</p>
              <p className='mt-2'>Mental Health Cooperative is a community mental health center in Nashville, Tennessee, that provides outpatient individual and group counseling, case management, community case management, crisis services, short-term crisis stabilization, respite services, and mental health services in Davidson County jails.</p>
              <br></br>
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Assist in risk assessment, crisis intervention, deescalation, and supportive counseling with inmates currently incarcerated with the Davidson
              County Sheriff Office. Provide on-call coverage in order to advise nursing and medical staff on mental health decisions during
              overnight hours.</p>
              <div className="border-b-2 border-dashed border-pink-300 my-8"></div>

            <h3 className= 'font-bold mt-2'>Crisis Counselor, PRN</h3>
            <h2>Mental Health Cooperative</h2>
            <p>January 2017 - December 2017 </p>
           
              <p>Nashville Collaborative Counseling Center began as a start-up group counseling center around 2020 and has grown tremendously. NCCC creates greater access to quality mental healthcare services in Tennessee by tailoring individual counseling to those in need.</p>
              <br></br>
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>Respond to Crisis situations within the community or county jails to conduct crisis assessments and intervention services to appropriately address the needs of the consumer. If hospitalization is necessary, make appropriate referrals</p>
              <div className="border-b-2 border-dashed border-pink-300 my-8"></div>
            

            <h3 className= 'font-bold mt-2'>Adult Outpatient and Addictions Therapist</h3>
            <h2>Meridian Health Services</h2>
            <p>August 2015 - May 2016</p>
            
              <p className='mt-2'>Meridian Health Services is a community mental health center that provides outpatient therapy, outpatient substance abuse treatment, intensive outpatient group therapy, and case management services</p>
              <br></br>
              <h1 className='font-bold mt-1'>Job Responsibilities</h1>
              <p>PSupervised individual counseling of adult clients enrolled in the adult outpatient unit at Meridian Health Services. Work with
              clients voluntarily in services or referred through Delaware County Community Corrections, Delaware County Department of
              Child Services and out of state referrals.</p>
            <br />
            

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <div id="skills" className="text-black mt-10 p-6 bg-pink-200 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mt-6 -mb-4">My Toolkit</h2>
          <div className="rounded-lg shadow-lg">
           <SkillsSection />
          </div>
   
        </div>
        <div id="contact" className="mt-10 p-6 bg-neutral-50 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Let's Connect</h2>
          <ContactForm />
        </div>

    </main>
    
  );
};

export default Resume;