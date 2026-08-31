import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Project = {
  slug: string;
  label: string;
  title: string;
  description: string;
  stack: string[];
  image: string[];
  href: string;
};

const projects: Project[] = [
  {
    slug: "car1pro",
    label: "Featured Project",
    title: "Car1Pro - Automotive Marketplace",
    description:
      "A production-oriented automotive marketplace built with modern full-stack architecture. I developed a full-stack platform with 12+ responsive pages, 15+ REST APIs, secure authentication, product management, carts, orders, CRUD operations, and relational database models using Next.js, TypeScript, Prisma ORM, and PostgreSQL. The project also includes reusable UI components and automated CI/CD deployment with Docker, GitHub Actions, and Vercel.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    image: ["/images/car1pro.png"],
    href: "https://car1pro.vercel.app/",
  },

  {
    slug: "dhara",
    label: "Featured Project",
    title: "Dhara - Civic Engagement Platform",
    description:
      "A civic platform designed to turn community reports into actionable public accountability. I built a full-stack civic engagement platform with 7+ responsive workflows, 30+ REST APIs, and 20+ relational database models supporting authentication, issue reporting, tracking, and user management. The platform also uses Zustand for state management, React Hook Form for validated workflows, ImageKit for media uploads, and reusable Tailwind CSS components.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Zustand",
    ],
    image: ["/images/dhara.png"],
    href: "https://dhara-six.vercel.app/",
  },

  {
    slug: "item-manager",
    label: "Featured Project",
    title: "Item Manager - Inventory Management",
    description:
      "An inventory management application focused on modular architecture and efficient CRUD operations. I built a full-stack inventory management system using React, Node.js, Express.js, and MongoDB, implementing REST APIs for inventory and product management. The application integrates frontend and backend through API-driven data synchronization and uses a modular component architecture with reusable UI components for scalability and maintainability.",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
    image: ["/images/item-manager.png"],
    href: "https://item-manager-cee0.onrender.com/",
  },

  {
    slug: "2070",
    label: "Featured Project",
    title: "2070 - Wildlife & Environmental Dashboard",
    description:
      "An interactive dashboard for environmental monitoring, geospatial insights, and data visualization. I built an environmental analytics dashboard using React, TypeScript, and Tailwind CSS, with interactive maps, heatmaps, and geospatial visualizations powered by Leaflet and reusable chart components using Recharts. The dashboard is responsive and designed around reusable UI components and efficient state management for smooth data-driven interactions.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Leaflet",
      "Recharts",
    ],
    image: ["/images/2070.png"],
    href: "https://2070-ten.vercel.app/",
  },

  {
    slug: "stayease",
    label: "Featured Project",
    title: "StayEase - Rental Marketplace",
    description:
      "A rental marketplace engineered around search, authentication, and media management. I built a full-stack rental marketplace using React, Node.js, Express.js, and MongoDB for property discovery and management. The platform includes REST APIs, secure authentication, complete CRUD workflows, property listings, bookings, user accounts, property search and filtering, image uploads, and a responsive rental experience.",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
      "REST APIs",
    ],
    image: ["/images/stayease.png"],
    href: "https://stayease-smsm.onrender.com/listings/",
  },
];

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

const ease = (t: number) => 1 - Math.pow(1 - t, 3);

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

  const enter = ease(clamp01((p - 0.08) / 0.3));
  const pop = ease(clamp01((p - 0.24) / 0.3));
  const copy = ease(clamp01((p - 0.16) / 0.3));
  const shot = clamp01((p - 0.12) / 0.72);
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
        style={{
          opacity: enter * 0.35,
        }}
      />

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
<div
  className="relative flex items-center gap-3 px-5 py-4 md:px-6 md:py-5"
  style={{ margin: "8px" }}
>
  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
  <span className="h-3 w-3 rounded-full bg-[#28c840]" />

  <div className="absolute left-1/2 w-1/2 -translate-x-1/2 bg-proj-chrome  py-1 text-center text-[11px] text-proj-muted">
    http://localhost:1234
  </div>
</div>
    <div className="relative h-[200px] overflow-hidden bg-proj-screen md:h-[400px]">
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
            <Link
  to={`/projects/${project.slug}`}
  className="block h-full w-full"
  aria-label={`View details for ${project.title}`}
>
  <img
    src={image}
    alt={`${project.title} screenshot ${imageIndex + 1}`}
    loading="lazy"
    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
  />
</Link>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

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


<Link
  to={`/projects/${project.slug}`}
  className="block w-fit"
  aria-label={`View details for ${project.title}`}
>
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
      hover:opacity-80
      md:text-[2rem]
      md:leading-tight
    "
  >
    {project.title}
  </h3>
</Link>


<Link
  to={`/projects/${project.slug}`}
  className="block"
  aria-label={`View details for ${project.title}`}
>
  <div
    className="
      relative z-30
      rounded-lg
      bg-proj-card/95
      text-left
      text-sm
      leading-relaxed
      text-proj-body
      shadow-[0_25px_60px_-20px_rgba(0,0,0,0.9)]
      backdrop-blur-md
      transition-all
      duration-500
      ease-out
      hover:-translate-y-1.5
      hover:shadow-[0_35px_80px_-20px_hsl(var(--proj-teal-raw)/0.3)]
    "
    style={{
      marginTop: "20px",
      marginLeft: flipped ? "0px" : "-48px",
      marginRight: flipped ? "-48px" : "0px",
      width: "calc(100% + 48px)",

      paddingTop: "32px",
      paddingRight: "32px",
      paddingBottom: "32px",
      paddingLeft: "32px",

      opacity: pop,

      transform: `translateY(${(1 - pop) * 26}px)`,
    }}
  >
    {project.description}
  </div>
</Link>


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

<div
  style={{
    marginTop: "20px",
  }}
  className={`flex flex-wrap gap-3 ${
    flipped ? "" : "md:justify-end"
  }`}
>
 
  <Link
    to={`/projects/${project.slug}`}
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 20px",
      backgroundColor: "transparent",
      color: "#ffffff",
      border: "1px solid rgba(255,255,255,0.35)",
      borderRadius: "2px",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
    }}
  >
    <span>View Details</span>
    <span>→</span>
  </Link>

   <a
    href={project.href}
    target="_blank"
    rel="noreferrer"
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
  id="projects"
  className="
    overflow-hidden
    py-28
    pl-40
    pr-8
    md:py-40
    md:pl-50
    md:pr-8
    -translate-x-10
    md:-translate-x-10
    lg:translate-x-12
  "
>
  <div className="w-full max-w-none">

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