import { Link, useParams } from "react-router-dom";
import KineticGrid from "../../components/KineticGrid";
import { experiences } from "../../data/experience";

function highlightKeywords(
  text: string,
  keywords: string[]
) {
  if (!keywords.length) return text;

  const escaped = keywords
    .filter(Boolean)
    .map((keyword) =>
      keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );

  if (!escaped.length) return text;

  const regex = new RegExp(
    `(${escaped.join("|")})`,
    "gi"
  );

  return text.split(regex).map((part, index) => {
    const isKeyword = keywords.some(
      (keyword) =>
        keyword.toLowerCase() === part.toLowerCase()
    );

    return isKeyword ? (
      <strong key={index}>{part}</strong>
    ) : (
      part
    );
  });
}

export default function ExperienceDetails() {
  const { slug } = useParams();

  const experience = experiences.find(
    (item) => item.slug === slug
  );

  if (!experience) {
    return (
      <main className="expd-page expd-page--404">
        <div className="expd-container">
          <p className="expd-eyebrow">404</p>

          <h1 className="expd-not-found-title">
            Experience not found
          </h1>

          <Link
            to="/#experience"
            className="expd-back-link"
          >
            ← View All Experience
          </Link>
        </div>
      </main>
    );
  }

  const keywords = [
    ...experience.stack,
    "Next.js",
    "TypeScript",
    "REST APIs",
    "Upstash Redis",
    "rate limiting",
    "Node.js",
    "Express.js",
    "MySQL",
    "JWT",
    "RBAC",
    "Razorpay",
    "SMTP",
  ];

  const currentIndex = experiences.findIndex(
    (item) => item.slug === experience.slug
  );

  const previousExperience =
    currentIndex > 0
      ? experiences[currentIndex - 1]
      : null;

  const nextExperience =
    currentIndex < experiences.length - 1
      ? experiences[currentIndex + 1]
      : null;

  return (
    <main className="expd-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="expd-hero">

        <div
          className="expd-hero-grid"
          aria-hidden="true"
        >
          <KineticGrid />
        </div>

        <div className="expd-container expd-hero-content">

          <Link
            to="/#experience"
            className="expd-back-link"
          >
            ← Back to Experience
          </Link>

          <div className="expd-meta">
            <span>{experience.number}</span>

            <span className="expd-meta-divider">
              /
            </span>

            <span>{experience.label}</span>
          </div>

          <div className="expd-heading">

            <div className="expd-logo-wrap">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="expd-logo"
              />
            </div>

            <div className="expd-heading-text">

              <p className="expd-role">
                {experience.role}
              </p>

              <h1 className="expd-title">
                {experience.company}
              </h1>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          BASIC INFO
      ========================= */}

      <section className="expd-section expd-info-section">

        <div className="expd-container expd-info-grid">

          <div className="expd-info-column">

            <p className="expd-section-label">
              Duration
            </p>

            <p className="expd-info-value">
              {experience.duration}
            </p>

          </div>

          <div className="expd-info-column">

            <p className="expd-section-label">
              Location
            </p>

            <p className="expd-type-pill">
              {experience.location}
            </p>

          </div>


        </div>

      </section>


      {/* =========================
          DESCRIPTION
      ========================= */}

      <section className="expd-section expd-description-section">

        <div className="expd-container">

          <p className="expd-section-label expd-section-label--accent">
            About the Experience
          </p>

          <p className="expd-description">
            {highlightKeywords(
              experience.description,
              keywords
            )}
          </p>

        </div>

      </section>


      {/* =========================
          TECH STACK
      ========================= */}

      <section className="expd-section expd-stack-section">

        <div className="expd-container">

          <p className="expd-section-label expd-section-label--accent">
            Technologies
          </p>

          <div className="expd-tech-list">

            {experience.stack.map((tech) => (
              <span
                key={tech}
                className="expd-tech-pill"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* =========================
          WHAT I WORKED ON
      ========================= */}

      <section className="expd-section expd-highlights-section">

        <div className="expd-container">

          <p className="expd-section-label expd-section-label--accent">
            What I Worked On
          </p>

          <ul className="expd-feature-list">

            {experience.highlights.map(
              (highlight, index) => (
                <li
                  key={highlight}
                  className="expd-feature-item"
                >

                  <span className="expd-feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="expd-feature-text">
                    {highlightKeywords(
                      highlight,
                      keywords
                    )}
                  </span>

                </li>
              )
            )}

          </ul>

        </div>

      </section>


      {/* =========================
          CERTIFICATE
      ========================= */}

      {experience.certificateUrl && (
        <section className="expd-section expd-certificate-section">

          <div className="expd-container">


            <a
              href={experience.certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="expd-button expd-button--primary"
            >
              View Certificate
              <span>↗</span>
            </a>

          </div>

        </section>
      )}


      {/* =========================
          NAVIGATION
      ========================= */}

      <section className="expd-footer">

        <div className="expd-container">

          <div className="expd-navigation">

            {previousExperience ? (
              <Link
                to={`/experience/${previousExperience.slug}`}
                className="expd-nav-card"
              >
                <span className="expd-nav-label">
                  ← Previous
                </span>

                <strong>
                  {previousExperience.company}
                </strong>
              </Link>
            ) : (
              <div />
            )}

            {nextExperience ? (
              <Link
                to={`/experience/${nextExperience.slug}`}
                className="expd-nav-card expd-nav-card--next"
              >
                <span className="expd-nav-label">
                  Next →
                </span>

                <strong>
                  {nextExperience.company}
                </strong>
              </Link>
            ) : (
              <div />
            )}

          </div>

          <Link
            to="/#experience"
            className="expd-back-bottom"
          >
            ← View All Experience
          </Link>

        </div>

      </section>

    </main>
  );
}
