import { Link, useParams } from "react-router-dom";
import ProjectGallery from "../../components/ProjectGallery";
import { projects } from "../../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050505] px-6 py-32 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-500">
            404
          </p>

          <h1 className="text-4xl font-bold">
            Project not found
          </h1>

          <Link
            to="/projects"
            className="mt-8 inline-block text-sm text-white/60 transition hover:text-white"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* HEADER */}
      <section className="px-6 pb-20 pt-32 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">

          {/* BACK */}
          <Link
            to="/projects"
            className="
              mb-16
              inline-flex
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/40
              transition
              hover:text-cyan-500
            "
          >
            ← Back to Projects
          </Link>

          {/* NUMBER */}
          <p className="mb-5 text-xs tracking-[0.3em] text-cyan-500">
            {project.number} / {project.label}
          </p>

          {/* TITLE */}
          <h1
            className="
              max-w-5xl
              text-5xl
              font-black
              leading-[0.95]
              md:text-7xl
              lg:text-8xl
            "
          >
            {project.title}
          </h1>

          {/* SUBTITLE */}
          <p className="mt-8 max-w-3xl text-lg italic leading-8 text-white/50 md:text-xl">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <ProjectGallery images={project.images} />
        </div>
      </section>

      {/* LINKS + STACK */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_2fr]">

          {/* LINKS */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
              Links
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  border border-cyan-500
                  bg-cyan-500/10
                  px-6 py-3
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  transition
                  hover:bg-cyan-500
                  hover:text-black
                "
              >
                Live Demo ↗
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  border border-white/20
                  px-6 py-3
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  transition
                  hover:border-white
                "
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* STACK */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border border-cyan-500/20
                    bg-cyan-500/5
                    px-4 py-2
                    text-xs
                    tracking-wider
                    text-cyan-400
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="border-t border-white/10 px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">

          <p className="mb-8 text-xs uppercase tracking-[0.25em] text-cyan-500">
            About the Project
          </p>

          <p className="max-w-4xl text-xl leading-9 text-white/70 md:text-2xl md:leading-10">
            {project.description}
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-white/10 px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">

          <p className="mb-10 text-xs uppercase tracking-[0.25em] text-cyan-500">
            What I Built
          </p>

          <ul className="max-w-4xl space-y-6">
            {project.features.map((feature, index) => (
              <li
                key={feature}
                className="
                  flex
                  gap-5
                  border-b
                  border-white/10
                  pb-6
                  text-base
                  leading-8
                  text-white/60
                  md:text-lg
                "
              >
                <span className="shrink-0 text-xs tracking-[0.2em] text-cyan-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
          <Link
            to="/projects"
            className="
              text-sm
              uppercase
              tracking-[0.2em]
              text-white/40
              transition
              hover:text-cyan-500
            "
          >
            ← View All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}