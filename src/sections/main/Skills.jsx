import { FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3, SiDjango, SiElectron, SiFlutter } from "react-icons/si";

const SKILLS = [
  { label: "Java", icon: <FaJava /> },
  { label: "Python", icon: <FaPython /> },
  { label: "JavaScript", icon: <SiJavascript /> },
  { label: "HTML", icon: <SiHtml5 /> },
  { label: "CSS", icon: <SiCss3 /> },
  { label: "React", icon: <FaReact /> },
  { label: "Node.js", icon: <FaNodeJs /> },
  { label: "Flutter", icon: <SiFlutter /> },
  { label: "Electron.js", icon: <SiElectron /> },
  { label: "Django", icon: <SiDjango /> },
  { label: "Git", icon: <FaGitAlt /> },
];

function Skills() {
  // duplicate list once so scroll looks continuous
  const marqueeItems = [...SKILLS, ...SKILLS];

  return (
    <section id="skills" className="achievements-block">
      <h3>Skills</h3>

      <div className="skills-marquee">
        <div className="skills-marquee-track">
          {marqueeItems.map((skill, index) => (
            <span className="skills-marquee-item" key={index}>
              {skill.icon}
              <span>{skill.label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
