"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/global.css";

gsap.registerPlugin(ScrollTrigger);

type Experience = {
  year: string;
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
};

const experiences: Experience[] = [
  {
    year: "2021",
    company: "Company One",
    role: "Software Engineer",
    period: "2021 — 2023",
    description:
      "Worked on scalable digital products, engineering systems and user-facing experiences.",
    logo: "COMPANY ONE",
  },
  {
    year: "2024",
    company: "Company Two",
    role: "Senior Software Engineer",
    period: "2024 — Today",
    description:
      "Leading product engineering and designing systems across complex digital experiences.",
    logo: "COMPANY TWO",
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

      /*
       * Main route
       *
       * Initially invisible.
       * ScrollTrigger gradually reveals it.
       */
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      /*
       * Branches are hidden initially.
       */
      [branchOneRef.current, branchTwoRef.current].forEach((branch) => {
        if (!branch) return;

        const length = branch.getTotalLength();

        gsap.set(branch, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      /*
       * Experience elements start hidden.
       */
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

      /*
       * MASTER TIMELINE
       *
       * The entire animation is controlled by page scroll.
       */
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

      // Node appears
      timeline.to(
        nodeRefs.current[0],
        {
          scale: 1,
          duration: 0.18,
          ease: "back.out(2)",
        },
        "-=0.15"
      );

      // Small node pulse
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

      // Year comes in
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

      // Branch grows from node
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

      /*
       * Small pause.
       * This gives the viewer time to read
       * the first experience before the route continues.
       */
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

      // Card 2
// Card 2
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
      /*
       * Hold final state.
       */
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
        {/* Small section label */}
        <div className="experience-label">
          <span className="experience-label-line" />
          EXPERIENCE
        </div>

        {/* SVG ROUTE */}
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
              {experiences[0].logo}
            </div>

            <div className="experience-card-content">
              <span className="experience-period">
                {experiences[0].period}
              </span>

              <h3>{experiences[0].company}</h3>

              <p className="experience-role">
                {experiences[0].role}
              </p>

              <p className="experience-description">
                {experiences[0].description}
              </p>
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
              {experiences[1].logo}
            </div>

            <div className="experience-card-content">
              <span className="experience-period">
                {experiences[1].period}
              </span>

              <h3>{experiences[1].company}</h3>

              <p className="experience-role">
                {experiences[1].role}
              </p>

              <p className="experience-description">
                {experiences[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}