import React from 'react';
import { useRouter } from 'next/navigation' 

type ProjectLink = {
  url: string;
  label: string;
};

type Project = {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  links: ProjectLink[]; 
};

const projects: Project[] = [
    {
      id: 1,
      imgSrc: "/images/gamer-date.jpg",
      title: "Gamer-Date",
      description: "Next app utilizing Typescript, Tailwind, Prisma, PostgreSQL, and Cypress",
      links: [
        { url: 'https://github.com/mdsimpson09/gamer-date', label: 'GitHub Repo' },
       
        { url: 'https://gamer-date.net', label: 'Live' }
      ]
    },
    {
      id: 2,
      imgSrc: "/images/tweeter.jpg",
      title: "Twitter Clone",
      description: "Python app utilizing Flask and WTForms",
      links: [
        { url: 'https://github.com/mdsimpson09/twitter-clone', label: 'GitHub Repo' }
      ]
    },
    {
      id: 3,
      imgSrc: "/images/madlibs.jpg",
      title: "Madlibs",
      description: "React app utilizing Javascript and Jest",
      links: [
        { url: 'https://github.com/mdsimpson09/madlibs-react', label: 'GitHub Repo' }
      ]
    },
    {
      id: 4,
      imgSrc: "/images/background7.jpg", 
      title: "coming soon",
      description: "Description for Project 4.",
      links: [
        { url: '', label: 'GitHub Repo' } 
      ]
    },
  ];


  <h2 className='justify-center flex text-black font-bold text-2xl mb-10 '>My Toolkit</h2>


  const ProjectsComponent: React.FC = () => {
    return (
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="text-lg bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
         
            <img src={project.imgSrc} alt={project.title} className="max-w-full h-auto object-contain rounded-lg mb-4" />
            <h2 className="text-center text-black font-bold text-xl mb-8">{project.title}</h2>
            <h4 className="text-center text-black text-xl mb-8">{project.description}</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {project.links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => window.open(link.url, '_blank')}
                  className=" w-40 h-10 button-color text-white font-bold py-2 px-4 rounded-full"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
      export default ProjectsComponent;