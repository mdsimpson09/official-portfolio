import { FaPython, FaNodeJs, FaGithub } from 'react-icons/fa';
import { DiHtml5, DiCss3, DiJavascript1, DiReact } from 'react-icons/di';
import { SiTailwindcss, SiTypescript, SiExpress, SiPostgresql, SiMysql, SiPrisma, SiFlask } from 'react-icons/si';
import { TbBrandNextjs, TbApi } from 'react-icons/tb';
import { VscJson } from 'react-icons/vsc';
import { GrHeroku } from 'react-icons/gr';
import { IoLogoVercel } from "react-icons/io5";
import { SiCypress } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiDatagrip } from "react-icons/si";
import { SiPostman } from "react-icons/si";


// Skill names by category
const skills = {
  frontend: ['HTML', 'CSS', 'Tailwind', 'Javascript', 'React', 'Next', 'JSON', 'Typescript'],
  backend: ['Python', 'Express', 'API Development'],
  database: ['PostgreSQL', 'MySQL', 'Prisma', 'DataGrip', 'Postman'],
  "frameworks and platforms": ['Flask', 'Node.js', 'Heroku', 'Vercel', 'GitHub'],
  Testing: ['Jest', 'Cypress'],
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
  DataGrip: <SiDatagrip />,
  Postman: <SiPostman />,
  Flask: <SiFlask />,
  "Node.js": <FaNodeJs />,
  Heroku: <GrHeroku />,
  Vercel: <IoLogoVercel />,
  GitHub: <FaGithub />,
  Jest: <SiJest />,
  Cypress: <SiCypress />

 
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
            <h2 className='justify-center flex text-black font-bold text-2xl mb-10 white-outline'>My Toolkit</h2>
        {Object.entries(skills).map(([category, skillNames]) => (
          <div key={category} className='text-black py-6 px-4 sm:px-6 bg-white shadow-md rounded-md overflow-y-auto hide-scrollbar w-full my-8'>
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
