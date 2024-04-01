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
      description: "Gamer-Date is a Next.js-based dating and social networking platform for gamers, utilizing TypeScript for type-safe coding and Prisma ORM for efficient database operations with PostgreSQL. It features comprehensive API management through Next.js API Handlers and employs React Icons and Radix UI for a rich user interface, all while ensuring high functionality and reliability with Cypress for end-to-end testing",
      links: [
        { url: 'https://github.com/mdsimpson09/gamer-date', label: 'GitHub Repo' },
       
        { url: 'https://gamer-date.net', label: 'Live' }
      ]
    },
    {
      id: 2,
      imgSrc: "/images/tweeter.jpg",
      title: "Twitter Clone",
      description: "Tweeter is a Flask-based microblogging application, utilizing Python and WTForms, designed for users to share and interact with messages in a Twitter-like environment. It incorporates a PostgreSQL database for data management and employs Flask for both server-side logic and API management, ensuring a dynamic and interactive user experience.",
      links: [
        { url: 'https://github.com/mdsimpson09/twitter-clone', label: 'GitHub Repo' }
      ]
    },
    {
      id: 3,
      imgSrc: "/images/madlibs.jpg",
      title: "Madlibs",
      description: "Madlibs is a React-based interactive app, utilizing Javascript, designed for users to craft humorous and nonsensical stories by inputting words into templated story options. It leverages React's component-based architecture to offer a dynamic user experience. With a simple and intuitive UI, users can easily create, enjoy, and restart stories, making it a fun and engaging way to learn about parts of speech and storytelling. Testing is done utilizing jest.",
      links: [
        { url: 'https://github.com/mdsimpson09/madlibs-react', label: 'GitHub Repo' }
      ]
    },
    {
      id: 4,
      imgSrc: "/images/starwarsimage.jpg", 
      title: "Starwarsly",
      description: "React-based app, utilizing Javascript, that engages users in exploring the Star Wars universe. Incorporates Redux for state management. Testing in the StarWarsly app is conducted using the React Testing Library along with Jest.",
      links: [
        { url: 'https://github.com/mdsimpson09/starwarsly', label: 'GitHub Repo' } 
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