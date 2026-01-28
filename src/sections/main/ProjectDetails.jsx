// sections/ProjectDetails.jsx
import "../../App.css";
import Nav from "../../components/nav/Nav.jsx";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../../data/projects.js";

function getProjectNav(slug) {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return { project: null, prev: null, next: null };

  return {
    project: PROJECTS[index],
    prev: index > 0 ? PROJECTS[index - 1] : null,
    next: index < PROJECTS.length - 1 ? PROJECTS[index + 1] : null,
  };
}

function ProjectDetails() {
  const { slug } = useParams();
  const { project, prev, next } = getProjectNav(slug);

  return (
    <>
      <Nav />

      <div className="app-layout">
        {/* LEFT COLUMN: show thumbnail/card */}
        <div className="ecard-column">
          <header className="ecard-header">
            <h1>{project ? project.title : "Project"}</h1>
          </header>

          <div className="ecard">
            {project && (
              <img
                src={project.image}
                alt={project.title}
                className="ecard-thumb"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "0.75rem",
                  objectFit: "cover",
                }}
              />
            )}
          </div>

          <footer className="ecard-footer">
            <span>© {new Date().getFullYear()} Shivangi Malik</span>
          </footer>
        </div>

        {/* RIGHT COLUMN: main details */}
        <div className="portfolio-section">
          <div className="timeline-column project-detail-column">
            {project ? (
              <div className="project-detail-content">
                <Link to="/" className="back-link">
                  ← Back to main page
                </Link>

                <h2>
                  {project.title}{" "}
                  <button>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Demo
                    </a>
                  </button>
                </h2>

                <p className="ach-meta">{project.tech}</p>
                <p>{project.description}</p>

                {/* Optional: keep/remove large image on right */}
                {/* <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "auto", display: "block" }}
                /> */}

                <main>
                  <p className="ach-txt">
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "1rem",
                      marginTop: "1.5rem",
                    }}
                  >
                    {prev ? (
                      <Link
                        to={`/projects/${prev.slug}`}
                        className="back-link"
                      >
                        ← Previous project
                      </Link>
                    ) : (
                      <span />
                    )}

                    {next && (
                      <Link
                        to={`/projects/${next.slug}`}
                        className="back-link"
                      >
                        Next project →
                      </Link>
                    )}
                  </div>
                </main>
              </div>
            ) : (
              <div className="project-detail-content">
                <p>Project not found.</p>
                <Link to="/" className="back-link">
                  ← Back to main page
                </Link>
              </div>
            )}
          </div>

          <div className="stats-column">
            <div className="stats-table">
              <div className="stats-row">
                <h3>Problems</h3>
              </div>
              <div className="stats-row">
                <ul>
                  <li>bjbjnj</li>
                  <li>jbbjnjn</li>
                </ul>
              </div>
              <div className="stats-row">
                <h3>Solutions</h3>
              </div>
              <div className="stats-row">
                <ul>
                  <li>bjbjnj</li>
                  <li>jbbjnjn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
