"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

type Experience = {
  year: string;
  slug: string;
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  link: string;
};

const experiences: Experience[] = [
  {
    year: "2025",
  slug: "full-stack-developer-intern",
    company: "Shreemal Technology",
    role: "Full-Stack Developer Intern",
    period: "Jun 2025 - Aug 2025",
    description:
      "Built responsive Next.js interfaces with TypeScript and Tailwind CSS, integrated REST APIs, implemented Upstash Redis caching and rate limiting, and worked across frontend, backend, and API integration.",
    logo: "/images/exp1.jpg",
    link: "https://YOUR-SHREEMAL-LINK.com",
  },
  {
    year: "2025",
    slug: "backend-developer-intern",
    company: "GetNomik",
    role: "Backend Developer Intern",
    period: "Jul 2025 - Aug 2025",
    description:
      "Built REST APIs with Node.js, Express.js, and MySQL, implemented JWT authentication and RBAC, integrated Razorpay and SMTP services, and optimized MySQL queries across multiple API endpoints.",
    logo: "/images/exp2.jpg",
    link: "https://YOUR-GETNOMIK-LINK.com",
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const pathRef = useRef<SVGPathElement | null>(null);
  const branchOneRef = useRef<SVGPathElement | null>(null);
  const branchTwoRef = useRef<SVGPathElement | null>(null);

  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const yearRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current;

      if (!path) return;

      const pathLength = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      [branchOneRef.current, branchTwoRef.current].forEach((branch) => {
        if (!branch) return;

        const length = branch.getTotalLength();

        gsap.set(branch, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      nodeRefs.current.forEach((node) => {
        if (!node) return;

        gsap.set(node, {
          scale: 0,
          transformOrigin: "center center",
        });
      });

      yearRefs.current.forEach((year) => {
        if (!year) return;

        gsap.set(year, {
          opacity: 0,
          y: 15,
        });
      });

      cardRefs.current.forEach((card) => {
        if (!card) return;

        gsap.set(card, {
          opacity: 0,
          x: 35,
          y: 10,
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2200",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });
   

      /*
       * ------------------------------------------------
       * EXPERIENCE 1
       * ------------------------------------------------
       */

      timeline.to(path, {
        strokeDashoffset: pathLength * 0.66,
        duration: 2.2,
        ease: "none",
      });

      timeline.to(
        nodeRefs.current[0],
        {
          scale: 1,
          duration: 0.18,
          ease: "back.out(2)",
        },
        "-=0.15"
      );

      timeline.to(nodeRefs.current[0], {
        scale: 1.18,
        duration: 0.08,
        ease: "power2.out",
      });

      timeline.to(nodeRefs.current[0], {
        scale: 1,
        duration: 0.12,
        ease: "power2.inOut",
      });

      timeline.to(
        yearRefs.current[0],
        {
          opacity: 1,
          y: 0,
          duration: 0.25,
          ease: "power3.out",
        },
        "-=0.15"
      );

      timeline.to(
        branchOneRef.current,
        {
          strokeDashoffset: 0,
          duration: 0.45,
          ease: "power2.inOut",
        },
        "-=0.1"
      );

      // Company card
      timeline.to(
        cardRefs.current[0],
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.15"
      );

      timeline.to({}, { duration: 0.45 });

      /*
       * ------------------------------------------------
       * EXPERIENCE 2
       * ------------------------------------------------
       */

      timeline.to(path, {
        strokeDashoffset: pathLength * 0.31,
        duration: 2.3,
        ease: "none",
      });

      // Node 2
      timeline.to(
        nodeRefs.current[1],
        {
          scale: 1,
          duration: 0.18,
          ease: "back.out(2)",
        },
        "-=0.1"
      );

      timeline.to(nodeRefs.current[1], {
        scale: 1.18,
        duration: 0.08,
        ease: "power2.out",
      });

      timeline.to(nodeRefs.current[1], {
        scale: 1,
        duration: 0.12,
      });

      // Year 2
      timeline.to(
        yearRefs.current[1],
        {
          opacity: 1,
          y: 0,
          duration: 0.25,
          ease: "power3.out",
        },
        "-=0.15"
      );

      // Branch 2
      timeline.to(
        branchTwoRef.current,
        {
          strokeDashoffset: 0,
          duration: 0.45,
          ease: "power2.inOut",
        },
        "-=0.1"
      );

timeline.to(
  cardRefs.current[1],
  {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.4,
    ease: "power3.out",
  },
  "-=0.15"
);
       timeline.to({}, { duration: 0.6 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    
<section
  id="experience"
  ref={sectionRef}
  className="experience-section"
>      <div className="experience-grid" />

      <div className="experience-inner">
         <div className="experience-label">
          <span className="experience-label-line" />
          EXPERIENCE
        </div>

        <svg
          className="experience-route"
          viewBox="0 0 1200 1000"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Main organic route */}
          <path
            ref={pathRef}
            className="experience-main-path"
            d="
              M 610 0
              C 610 80,
                625 120,
                640 170

              C 660 230,
                720 260,
                735 315

              C 750 370,
                700 395,
                625 425

              C 540 460,
                475 495,
                500 555

              C 525 620,
                650 595,
                720 635

              C 790 675,
                810 745,
                745 800

              C 680 850,
                555 840,
                535 910

              C 520 950,
                525 980,
                530 1000
            "
          />

          {/* Branch from first experience */}
          <path
            ref={branchOneRef}
            className="experience-branch"
            d="
              M 735 315
              C 805 300,
                875 300,
                940 330
            "
          />

          {/* Branch from second experience */}
<path
  ref={branchTwoRef}
  className="experience-branch"
  d="
    M 745 800
    C 680 800,
      610 815,
      525 815
  "
/>
        </svg>

        {/* EXPERIENCE 1 */}
        <div
          ref={(el) => {
            experienceRefs.current[0] = el;
          }}
          className="experience-item experience-item-one"
        >
          <div
            ref={(el) => {
              nodeRefs.current[0] = el;
            }}
            className="experience-node"
          />

          <div
            ref={(el) => {
              yearRefs.current[0] = el;
            }}
            className="experience-year"
          >
            {experiences[0].year}
          </div>

          <div
            ref={(el) => {
              cardRefs.current[0] = el;
            }}
            className="experience-card"
          >
            <div className="experience-logo">
<a
  href={experiences[0].link}
  target="_blank"
  rel="noopener noreferrer"
  className="experience-logo"
  aria-label={`Visit ${experiences[0].company}`}
>
  <img
    src={experiences[0].logo}
    alt={`${experiences[0].company} logo`}
  />
</a>
            </div>

            <div className="experience-card-content">
              <span className="experience-period">
                {experiences[0].period}
              </span>

              <h1>                {experiences[0].role}
</h1>

<a
  href={experiences[0].link}
  target="_blank"
  rel="noopener noreferrer"
  className="experience-company"
>
  {experiences[0].company}
</a>
              <p className="experience-description">
                {experiences[0].description}
              </p>
              <Link
  to={`/experience/${experiences[0].slug}`}
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 20px",
    backgroundColor: "transparent",
    color: "#fdf14f",
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
            </div>
          </div>
        </div>

        {/* EXPERIENCE 2 */}
        <div
          ref={(el) => {
            experienceRefs.current[1] = el;
          }}
          className="experience-item experience-item-two"
        >
          <div
            ref={(el) => {
              nodeRefs.current[1] = el;
            }}
            className="experience-node"
          />

          <div
            ref={(el) => {
              yearRefs.current[1] = el;
            }}
            className="experience-year"
          >
            {experiences[1].year}
          </div>

          <div
            ref={(el) => {
              cardRefs.current[1] = el;
            }}
            className="experience-card"
          >
            <div className="experience-logo">
<a
  href={experiences[1].link}
  target="_blank"
  rel="noopener noreferrer"
  className="experience-logo"
  aria-label={`Visit ${experiences[1].company}`}
>
  <img
    src={experiences[1].logo}
    alt={`${experiences[1].company} logo`}
  />
</a>
            </div>

            <div className="experience-card-content">
              <span className="experience-period">
                {experiences[1].period}
              </span>

              <h1> {experiences[1].role} </h1>

<a
  href={experiences[0].link}
  target="_blank"
  rel="noopener noreferrer"
  className="experience-company"
>
  {experiences[1].company}
</a>
              <p className="experience-description">
                {experiences[1].description}
              </p>
              <Link
  to={`/experience/${experiences[1].slug}`}
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 20px",
    backgroundColor: "transparent",
    color: "#fdf14f",
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}