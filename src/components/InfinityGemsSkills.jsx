import { FaJs, FaReact, FaNode, FaDatabase } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiBootstrap,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

const skills = [
  {
    id: 1,
    name: "JavaScript",
    icon: <FaJs size={30} />,
    iconColor: "text-yellow-900",
    bgColor: "bg-warning",
  },
  {
    id: 2,
    name: "React.js",
    icon: <FaReact size={30} />,
    iconColor: "text-blue-900",
    bgColor: "bg-primary",
  },
  {
    id: 3,
    name: "Node.js",
    icon: <FaNode size={30} />,
    iconColor: "text-green-900",
    bgColor: "bg-success",
  },
  {
    id: 4,
    name: "Express.js",
    icon: <SiExpress size={30} />,
    iconColor: "text-gray-900",
    bgColor: "bg-secondary",
  },
  {
    id: 5,
    name: "Firebase",
    icon: <SiFirebase size={30} />,
    iconColor: "text-orange-900",
    bgColor: "bg-danger",
  },
  {
    id: 6,
    name: "Bootstrap",
    icon: <SiBootstrap size={30} />,
    iconColor: "text-purple-900",
    bgColor: "bg-info",
  },
  {
    id: 7,
    name: "Tailwind",
    icon: <SiTailwindcss size={30} />,
    iconColor: "text-cyan-900",
    bgColor: "bg-info",
  },
  {
    id: 8,
    name: "MongoDB",
    icon: <FaDatabase size={30} />,
    iconColor: "text-green-900",
    bgColor: "bg-success",
  },
  {
    id: 9,
    name: "Redux",
    icon: <SiRedux size={30} />,
    iconColor: "text-red-900",
    bgColor: "bg-danger",
  },
];

const InfinityGemsSkills = () => {
  return (
    <div className="text-right py-4">
      <h2 className="text-light mt-4 text-center">
        🔮 Tecnologías del Infinito
      </h2>

      <div className="container d-flex justify-content-end">
        <div className="row ms-5">
          {skills.map((skill) => (
            <div key={skill.id} className="col-auto p-2">
              <div
                className={`skill-item glow-bg d-flex flex-column align-items-center p-3 rounded shadow ${skill.bgColor}`}
              >
                <span className={`${skill.iconColor}`}>{skill.icon}</span>
                <span className="text-white mt-1 fw-bold">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfinityGemsSkills;
