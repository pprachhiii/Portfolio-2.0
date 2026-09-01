import { Link, useParams } from "react-router-dom";
import ProjectGallery from "../../components/ProjectGallery";
import { projects } from "../../data/projects";
import KineticGrid from "../../components/KineticGrid";

function highlightKeywords(text: string, keywords: string[]) {
  if (!keywords.length) return text;

  const escaped = keywords
    .filter(Boolean)
    .map((keyword) =>
      keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );

  if (!escaped.length) return text;

  const regex = new RegExp(`(${escaped.join("|")})`, "gi");

  return text.split(regex).map((part, index) => {
    const isKeyword = keywords.some(
      (keyword) => keyword.toLowerCase() === part.toLowerCase()
    );

    return isKeyword ? (
      <strong key={index}>{part}</strong>
    ) : (
      part
    );
  });
}

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <main className="project-page project-page--404">
        <div className="project-container">
          <p className="project-eyebrow">404</p>

          <h1 className="not-found-title">
            Project not found
          </h1>

          <Link
            to="/#projects"
            className="back-link"
          >
            ← View All Projects

          </Link>

        </div>
      </main>
    );
  }

  const keywords = [
    ...project.stack,
    "responsive",
    "performance",
    "design",
    "frontend",
    "user experience",
    "interaction",
  ];

  return (
    <main className="project-page">

      {/* HEADER */}
      <section className="project-hero">
        <div
          className="hero-grid"
          aria-hidden="true"
        >
          <KineticGrid />
        </div>

        <div className="project-container hero-content">

    
<Link
            to="/#projects"
            className="back-link"
          >
            ← Back to Projects
          </Link>

          <div className="project-meta">
            <span>{project.number}</span>
            <span className="meta-divider">/</span>
            <span>{project.label}</span>
          </div>

          <h1 className="project-title">
            {project.title}
          </h1>

        </div>
      </section>

      {/* GALLERY */}
      <section className="project-section gallery-section">
        <div className="project-container">
          <ProjectGallery images={project.images} />
        </div>
      </section>

      {/* LINKS + STACK */}
      <section className="project-section project-info-section">
        <div className="project-container info-grid">

          <div className="info-column">
            <p className="section-label">
              Links
            </p>

            <div className="project-actions">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="project-button project-button--primary"
              >
                Live Demo
                <span>↗</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="project-button project-button--secondary"
              >
                GitHub
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="info-column">
            <p className="section-label">
              Tech Stack
            </p>

            <div className="tech-list">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="tech-pill"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="project-section description-section">
        <div className="project-container">
          <p className="section-label section-label--accent">
            About the Project
          </p>

          <p className="project-description">
            {highlightKeywords(
              project.description,
              keywords
            )}
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="project-section features-section">
        <div className="project-container">

          <p className="section-label section-label--accent">
            What I Built
          </p>

          <ul className="feature-list">
            {project.features.map((feature, index) => (
              <li
                key={feature}
                className="feature-item"
              >
                <span className="feature-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="feature-text">
                  {highlightKeywords(
                    feature,
                    keywords
                  )}
                </span>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* BOTTOM */}
      <section className="project-footer">
        <div className="project-container">
                    <Link
            to="/#projects"
            className="back-link"
          >
            ← View All Projects

          </Link>

        </div>
      </section>

    </main>
  );
}