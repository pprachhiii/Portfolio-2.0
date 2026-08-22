import { useEffect, useRef, useState } from "react";
import car1pro from "../assets/car1pro.png";
import dhara from "../assets/dhara.png";
import project2070 from "../assets/2070.png";

type Project = {
  label: string;
  title: string;
  description: string;
  stack: string[];
  image: string[];
  href: string;
};

const projects: Project[] = [
  {
    label: "All Star Technology",
    title: "ATA — Biofeedback Therapy System",
    description:
      "Medical iOS app for biofeedback respiratory therapy: gamified exercises built on FDA-cleared spirometer metrics (FVC, FEV1, PEF, and more). I worked on the backend — APIs, data flow, and integrations — using Node.js and TypeScript with MySQL, plus security tooling for a compliant healthcare stack.",
    stack: ["Node Js", "TypeScript", "MySQL", "REST APIs"],
    image: [project2070],
    href: "#",
  },
  {
    label: "Dotclick Featured Project",
    title: "Planflo Web SaaS Platform",
    description:
      "Planflo is a web-based SaaS platform that helps businesses manage their projects and tasks. It is a comprehensive solution for project management, task management, and collaboration.",
    stack: ["React Js", "Tailwind CSS", "Shadcn UI", "TypeScript", "PostgreSQL", "Express Js"],
    image: [car1pro],
    href: "#",
  },
  {
    label: "Dotclick Featured Project",
    title: "Flowlio CRM SaaS Platform",
    description:
      "Flowlio is a CRM SaaS platform that helps businesses manage their customers and sales. It is a comprehensive solution for customer relationship management, sales management, and marketing automation.",
    stack: ["React Js", "Tailwind CSS", "Shadcn UI", "TypeScript", "PostgreSQL", "Express Js"],
    image: [dhara],
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
  className="group relative grid min-h-[80vh] items-center gap-0 py-20 md:grid-cols-12 md:py-24"
  style={{ perspective: "1400px" }}
>   
      {/* ambient glow that fades in with the row */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
        style={{
          opacity: enter * 0.35,
        }}
      />

      {/* browser mockup */}
<div
  className={`relative z-0 md:col-span-6 ${
    flipped
      ? "md:order-2 md:col-start-7"
      : "md:order-1 md:col-start-1"
  }`}
  onMouseMove={onMove}
  onMouseLeave={() => setTilt({ x: 0, y: 0 })}
  style={{
    opacity: enter,
    transform: `translate3d(
      ${(1 - enter) * (flipped ? 70 : -70)}px,
      ${parallax * 0.15}px,
      0
    )`,
  }}
>
  <div
    className="overflow-hidden rounded-xl border border-proj-line bg-proj-url shadow-[0_40px_90px_-25px_rgba(0,0,0,0.85)] transition-[transform,box-shadow] duration-500 ease-out will-change-transform hover:shadow-[0_50px_110px_-25px_hsl(var(--proj-teal-raw)/0.35)]"
    style={{
      transform: `rotateX(${
        tilt.x + (1 - enter) * 8
      }deg) rotateY(${
        tilt.y + (1 - enter) * (flipped ? -10 : 10)
      }deg) scale(${0.94 + enter * 0.06})`,
    }}
  >
{/* Browser header */}
<div
  className="relative flex items-center gap-3 px-5 py-4 md:px-6 md:py-5"
  style={{ margin: "8px" }}
>
  {/* Dots stay on the left */}
  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
  <span className="h-3 w-3 rounded-full bg-[#28c840]" />

  {/* Always horizontally centered */}
  <div className="absolute left-1/2 w-1/2 -translate-x-1/2 bg-proj-chrome  py-1 text-center text-[11px] text-proj-muted">
    http://localhost:1234
  </div>
</div>
    {/* IMAGE VIEWPORT */}
    <div className="relative h-[200px] overflow-hidden bg-proj-screen md:h-[400px]">
      {/* Horizontal image track */}
      <div
        className="absolute left-0 top-0 flex h-full will-change-transform"
        style={{
          width: `${project.image.length * 100}%`,
          transform: `translateX(-${shot * (project.image.length - 1) * (100 / project.image.length)}%)`,
        }}
      >
        {project.image.map((image, imageIndex) => (
          <div
            key={`${project.title}-${imageIndex}`}
            className="h-full shrink-0"
            style={{
              width: `${100 / project.image.length}%`,
            }}
          >
            <img
              src={image}
              alt={`${project.title} screenshot ${imageIndex + 1}`}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/* copy column — overlaps the mockup */}
<div
  className={`relative z-20 flex flex-col md:col-span-6 md:row-start-1 ${
    flipped
      ? "md:order-1 md:col-start-1 md:text-left"
      : "md:order-2 md:col-start-7 md:text-right"
  }`}
  style={{
    opacity: copy,
    transform: `translate3d(0, ${(1 - copy) * 36 - parallax * 0.1}px, 0)`,
  }}
>
  {/* LABEL */}
  <p className="text-xs tracking-wide text-proj-muted">
    {project.label}
  </p>

  {/* TITLE */}
<h3
  style={{
    marginTop: "10px",
    color: "rgb(255, 158, 174)",
  }}
  className="
    mt-4
    font-display
    text-2xl
    font-semibold
    transition-colors
    duration-300
    md:text-[2rem]
    md:leading-tight
  "
>
  {project.title}
</h3>

{/* DESCRIPTION */}
<div
  className="relative z-30 rounded-lg bg-proj-card/95 text-left text-sm leading-relaxed text-proj-body shadow-[0_25px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md transition-[box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_35px_80px_-20px_hsl(var(--proj-teal-raw)/0.3)]"
  style={{
    marginTop: "20px",

    // OVERLAP — leave this exactly as it is
    marginLeft: flipped ? "0px" : "-48px",
    marginRight: flipped ? "-48px" : "0px",
    width: "calc(100% + 48px)",

    // ACTUAL INTERNAL BREATHING ROOM
    paddingTop: "32px",
    paddingRight: "32px",
    paddingBottom: "32px",
    paddingLeft: "32px",

    opacity: pop,

    // NO SCALE — this keeps the padding visually intact
    transform: `translateY(${(1 - pop) * 26}px)`,
  }}
>
  {project.description}
</div>


  {/* STACK */}
  <div
    style={{
      marginTop: "20px",
    }}
  >
    <p
      className={`flex flex-wrap gap-x-2 gap-y-1 text-sm ${
        flipped ? "" : "md:justify-end"
      }`}
      style={{
        color: "rgb(255, 158, 174)",
      }}
    >
      {project.stack.map((tech, i) => (
        <span
          key={tech}
          className="transition-colors duration-300 hover:text-proj-body"
        >
          {tech}

          {i < project.stack.length - 1 && (
            <span className="ml-2 text-proj-muted"> |</span>
          )}
        </span>
      ))}
    </p>
  </div>

  {/* VIEW LIVE DEMO */}
<div
  style={{
    marginTop: "20px",
  }}
  className={`flex ${flipped ? "" : "md:justify-end"}`}
>
  <a
    href={project.href}
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 20px",
      backgroundColor: "#ffffff",
      color: "#000000",
      border: "1px solid #000000",
      borderRadius: "2px",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
    }}
  >
    <span>View Live Demo</span>
    <span>→</span>
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
    <section
      id="works"
      className="overflow-hidden px-6 py-28 md:px-16 md:py-40"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Section heading */}
        <div
          ref={headRef}
          className="flex items-center gap-6"
        >
          <h2
            className="whitespace-nowrap font-display text-3xl font-semibold tracking-tight md:text-5xl"
            style={{
              opacity: reveal,
              transform: `translateY(${(1 - reveal) * 28}px)`,
              color:"white",
            }}
          >
            Things I've Worked on
          </h2>

          <span
            className="h-px flex-1 origin-left"
            style={{
              transform: `scaleX(${reveal})`,
              backgroundColor: "rgb(255, 158, 174)"
            }}
          />
        </div>

        {/* REAL PHYSICAL SPACE BETWEEN HEADING AND PROJECT 1 */}
        <div
          aria-hidden="true"
          className="h-10 md:h-20"
        />

        {/* Projects */}
        <div>
          {projects.map((project, i) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
}