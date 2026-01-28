// Projects.jsx
import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="achievements-block">
      <h3>Projects</h3>

      {PROJECTS.map((project) => (
        <div className="project-row" key={project.slug}>
          <Link
            to={`/projects/${project.slug}`}
            className="project-thumb-link"
          >
            <img src={project.image} alt={`${project.title} thumbnail`} />
          </Link>
          <div className="project-info">
            <p className="project-title">{project.title}</p>
            <p className="ach-meta">{project.tech}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
