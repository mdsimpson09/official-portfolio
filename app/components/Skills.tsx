// import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiPostgresql, DiMysql, DiGit, DiPython } from 'react-icons/di';
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiTailwindcss } from "react-icons/si";
// import { VscJson } from "react-icons/vsc";
// import { SiTypescript } from "react-icons/si";
// import { FaPython } from "react-icons/fa";
// import { SiExpress } from "react-icons/si";
// import { TbApi } from "react-icons/tb";
// import { SiPostgresql } from "react-icons/si";
// import { SiMysql } from "react-icons/si";
// import { SiPrisma } from "react-icons/si";
// import { SiFlask } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
// import { GrHeroku } from "react-icons/gr";
// import { IoLogoVercel } from "react-icons/io5";
// import { FaGithub } from "react-icons/fa";



// // Import other necessary icons

// const skills = {
//   frontend: [
// { name: 'HTML', Icon: <DiHtml5 /> },
// { name: 'CSS', Icon: <DiCss3 /> },
// { name: 'Tailwind', Icon: <SiTailwindcss />}, // Assume DiReact is used temporarily; replace with the correct icon import
// { name: 'Javascript', Icon: <DiJavascript1 />},
// { name: 'React', Icon: <DiReact /> },
// { name: 'Next', Icon: <TbBrandNextjs />}, // Replace DiReact with the correct icon for Next.js if available
// { name: 'JSON', Icon: <VscJson />
// }, // Replace DiReact with a more appropriate icon if available
// { name: 'Typescript', Icon: <SiTypescript />
// }, // Replace DiReact with the correct icon for TypeScript if available
// // Add more frontend skills here
// ],
// backend: [
// { name: 'Python', Icon: <FaPython />},
// { name: 'Express', Icon: <SiExpress />},
// // DiReact for React here might be incorrect if it's meant to be a backend skill
// { name: 'API Development', Icon: <TbApi />},
// // Add more backend skills here
// ],
// database: [
// { name: 'PostgreSQL', Icon: <SiPostgresql />},
// { name: 'MySQL', Icon: <SiMysql />},
// { name: 'Prisma', Icon: <SiPrisma />}, // Assuming DiNodejsSmall; replace if a more specific icon is available
// // Add more database skills here
// ],
// "frameworks and platforms": [ // Corrected property name
// { name: 'Flask', Icon: <SiFlask />}, // Assuming DiPython; replace if a more specific icon is available
// { name: 'Node.js', Icon: <FaNodeJs />},
// { name: 'Heroku', Icon: <GrHeroku />
// }, // Replace DiGit with a more appropriate icon if available
// { name: 'Vercel', Icon: <IoLogoVercel />}, // Replace DiGit with a more appropriate icon if available
// { name: 'GitHub', Icon: <FaGithub />},
// // Add more frameworks and platforms here
// ],
// };
// const SkillsSection = () => {
//   return (
//     <div className="mt-10 p-6 bg-white rounded-lg shadow-lg">
//     {Object.entries(skills).map(([category, skills]) => (
//       <div key={category} className='py-6 px-4 sm:px-6 bg-white shadow-md rounded-md overflow-y-auto hide-scrollbar w-full my-8'>
//         <h3 className="text-xl font-semibold mb-2 capitalize">{category}</h3>
//         <div className="grid md:grid-cols-2 gap-6">
//           {skills.map(({ name, Icon }) => (
//             <div key={name} className="flex items-center space-x-3">
//               <Icon className="text-2xl" />
//               <p className="text-base font-medium">{name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     ))}
//   </div>
// );
// };

// export default SkillsSection;



import { FaPython, FaNodeJs, FaGithub } from 'react-icons/fa';
import { DiHtml5, DiCss3, DiJavascript1, DiReact } from 'react-icons/di';
import { SiTailwindcss, SiTypescript, SiExpress, SiPostgresql, SiMysql, SiPrisma, SiFlask } from 'react-icons/si';
import { TbBrandNextjs, TbApi } from 'react-icons/tb';
import { VscJson } from 'react-icons/vsc';
import { GrHeroku } from 'react-icons/gr';
import { IoLogoVercel } from "react-icons/io5";


// Skill names by category
const skills = {
  frontend: ['HTML', 'CSS', 'Tailwind', 'Javascript', 'React', 'Next', 'JSON', 'Typescript'],
  backend: ['Python', 'Express', 'API Development'],
  database: ['PostgreSQL', 'MySQL', 'Prisma'],
  "frameworks and platforms": ['Flask', 'Node.js', 'Heroku', 'Vercel', 'GitHub'],
};

// Icon mapping by skill name
const iconMapping = {
  HTML: <DiHtml5 />,
  CSS: <DiCss3 />,
  Tailwind: <SiTailwindcss />,
  Javascript: <DiJavascript1 />,
  React: <DiReact />,
  Next: <TbBrandNextjs />,
  JSON: <VscJson />,
  Typescript: <SiTypescript />,
  Python: <FaPython />,
  Express: <SiExpress />,
  "API Development": <TbApi />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  Prisma: <SiPrisma />,
  Flask: <SiFlask />,
  "Node.js": <FaNodeJs />,
  Heroku: <GrHeroku />,
  Vercel: <IoLogoVercel />,
  GitHub: <FaGithub />,
};

type IconMappingType = {
    [key: string]: JSX.Element;
  };
  const getIcon = (skillName: string): JSX.Element | null => {
    return (iconMapping as IconMappingType)[skillName] || null;
  };
const SkillsSection = () => {
    return (
        <div className="mt-10 p-6 bg-white rounded-lg shadow-lg">
        {Object.entries(skills).map(([category, skillNames]) => (
          <div key={category} className='py-6 px-4 sm:px-6 bg-white shadow-md rounded-md overflow-y-auto hide-scrollbar w-full my-8'>
            <h3 className="text-xl font-semibold mb-2 capitalize">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillNames.map((skillName) => (
                <div key={skillName} className="flex items-center space-x-3">
                  {getIcon(skillName)}
                  <p className="text-base font-medium">{skillName}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  export default SkillsSection;
