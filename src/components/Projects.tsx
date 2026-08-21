import { useEffect, useRef, useState } from "react";
import car1pro from "../assets/car1pro.png";
import dhara from "../assets/dhara.png";
import project2070 from "../assets/2070.png";

type Project = {
  label: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  href: string;
};

const projects: Project[] = [
  {
    label: "All Star Technology",
    title: "ATA — Biofeedback Therapy System",
    description:
      "Medical iOS app for biofeedback respiratory therapy: gamified exercises built on FDA-cleared spirometer metrics (FVC, FEV1, PEF, and more). I worked on the backend — APIs, data flow, and integrations — using Node.js and TypeScript with MySQL, plus security tooling for a compliant healthcare stack.",
    stack: ["Node Js", "TypeScript", "MySQL", "REST APIs"],
    image: project2070,
    href: "#",
  },
  {
    label: "Dotclick Featured Project",
    title: "Planflo Web SaaS Platform",
    description:
      "Planflo is a web-based SaaS platform that helps businesses manage their projects and tasks. It is a comprehensive solution for project management, task management, and collaboration.",
    stack: ["React Js", "Tailwind CSS", "Shadcn UI", "TypeScript", "PostgreSQL", "Express Js"],
    image: car1pro,
    href: "#",
  },
  {
    label: "Dotclick Featured Project",
    title: "Flowlio CRM SaaS Platform",
    description:
      "Flowlio is a CRM SaaS platform that helps businesses manage their customers and sales. It is a comprehensive solution for customer relationship management, sales management, and marketing automation.",
    stack: ["React Js", "Tailwind CSS", "Shadcn UI", "TypeScript", "PostgreSQL", "Express Js"],
    image: dhara,
    href: "#",
  },
];

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

const ease = (t: number) => 1 - Math.pow(1 - t, 3);

/** Shared scroll-progress hook: 0 as the element enters, 1 as it leaves. */
function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        setP(clamp01((vh - rect.top) / (vh + rect.height)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return [ref, p] as const;
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [ref, p] = useScrollProgress<HTMLDivElement>();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const flipped = index % 2 === 1;

  // staged entrance
  const enter = ease(clamp01((p - 0.08) / 0.3));
  const pop = ease(clamp01((p - 0.24) / 0.3));
  const copy = ease(clamp01((p - 0.16) / 0.3));
  // inner screenshot auto-scroll while the row travels the viewport
  const shot = clamp01((p - 0.12) / 0.72);
  // gentle parallax between the mockup and the copy column
  const parallax = (p - 0.5) * 60;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 6, y: px * 8 });
  };

  return (
    <div
      ref={ref}
className="group relative grid items-start gap-8 pt-28 pb-40 md:grid-cols-12 md:pt-32 md:pb-52"
      style={{ perspective: "1400px" }}
    >
      {/* ambient glow that fades in with the row */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
        style={{
          opacity: enter * 0.35,
          background: flipped
            ? "radial-gradient(45% 55% at 75% 50%, hsl(var(--proj-teal-raw) / 0.28), transparent 70%)"
            : "radial-gradient(45% 55% at 25% 50%, hsl(var(--proj-teal-raw) / 0.28), transparent 70%)",
        }}
      />

      {/* browser mockup */}
      <div
        className={`relative z-0 md:col-span-6 ${flipped ? "md:order-2 md:col-start-7" : "md:order-1 md:col-start-1"}`}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          opacity: enter,
          transform: `translate3d(${(1 - enter) * (flipped ? 70 : -70)}px, ${parallax * 0.15}px, 0)`,
        }}
      >
        <div
          className="overflow-hidden rounded-xl border border-proj-line bg-proj-chrome shadow-[0_40px_90px_-25px_rgba(0,0,0,0.85)] transition-[transform,box-shadow] duration-500 ease-out will-change-transform hover:shadow-[0_50px_110px_-25px_hsl(var(--proj-teal-raw)/0.35)]"
          style={{
            transform: `rotateX(${tilt.x + (1 - enter) * 8}deg) rotateY(${tilt.y + (1 - enter) * (flipped ? -10 : 10)}deg) scale(${0.94 + enter * 0.06})`,
          }}
        >
          <div className="flex items-center gap-2 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <div className="mx-auto w-1/2 rounded-full bg-proj-url py-1 text-center text-[11px] text-proj-muted">
              http://localhost:1234
            </div>
          </div>
          <div className="relative h-[240px] overflow-hidden bg-proj-screen md:h-[440px]">
            <img
              src={project.image}
              alt={`${project.title} interface screenshot`}
              loading="lazy"
              width={1024}
              height={1536}
              className="absolute left-0 top-0 w-full will-change-transform"
              style={{ transform: `translateY(${-shot * 58}%)` }}
            />
          </div>
        </div>
      </div>

      {/* copy column — overlaps the mockup */}
      <div
        className={`relative z-20 md:col-span-6 md:row-start-1 ${
          flipped ? "md:order-1 md:col-start-1 md:text-left" : "md:order-2 md:col-start-7 md:text-right"
        }`}
        style={{
          opacity: copy,
          transform: `translate3d(0, ${(1 - copy) * 36 - parallax * 0.1}px, 0)`,
        }}
      >
        <p className="text-xs tracking-wide text-proj-muted">{project.label}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-proj-teal transition-colors duration-300 md:text-[2rem] md:leading-tight">
          {project.title}
        </h3>

        <div
  className={`relative z-30 mt-5 rounded-lg bg-proj-card/95 p-5 text-left text-sm leading-relaxed text-proj-body shadow-[0_25px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_35px_80px_-20px_hsl(var(--proj-teal-raw)/0.3)] ${
  flipped ? "md:-mr-24" : "md:-ml-24"
}`}
  style={{
    opacity: pop,
    transform: `translateY(${(1 - pop) * 26}px) scale(${0.94 + pop * 0.06})`,
  }}
>
  {project.description}
</div>

        <p
          className={`mt-5 flex flex-wrap gap-x-2 gap-y-1 text-xs text-proj-teal ${
            flipped ? "" : "md:justify-end"
          }`}
        >
          {project.stack.map((tech, i) => (
            <span key={tech} className="transition-colors duration-300 hover:text-proj-body">
              {tech}
              {i < project.stack.length - 1 && <span className="ml-2 text-proj-muted">|</span>}
            </span>
          ))}
        </p>

        <div className={`mt-6 flex ${flipped ? "" : "md:justify-end"}`}>
          <a
            href={project.href}
            className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-proj-line px-5 py-2.5 text-sm text-proj-body transition-colors duration-300 hover:border-proj-teal hover:text-proj-screen"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-proj-teal transition-transform duration-300 ease-out group-hover/btn:scale-x-100" />
            <span className="relative z-10">View Live Demo</span>
            <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [headRef, hp] = useScrollProgress<HTMLDivElement>();
  const reveal = ease(clamp01((hp - 0.05) / 0.25));

  return (
    <section id="works" className="overflow-hidden bg-proj-bg px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
<div ref={headRef} className="mb-8 flex items-center gap-6 md:mb-16">
            <h2
            className="whitespace-nowrap font-display text-3xl font-semibold tracking-tight text-proj-teal md:text-5xl"
            style={{
              opacity: reveal,
              transform: `translateY(${(1 - reveal) * 28}px)`,
            }}
          >
            Things I've Worked on
          </h2>
          <span
            className="h-px flex-1 origin-left bg-proj-line"
            style={{ transform: `scaleX(${reveal})` }}
          />
        </div>

        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
