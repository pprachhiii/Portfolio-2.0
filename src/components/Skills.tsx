"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SkillsIllustration } from "./SkillsIllustration";

gsap.registerPlugin(ScrollTrigger);

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function reveal(p: number, start: number, end: number) {
  return clamp01((p - start) / (end - start));
}

const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=1400",
        pin: true,
        pinSpacing: true,
        scrub: 1,

        onUpdate: (self) => {
          setP(clamp01(self.progress));
        },

        onEnter: () => {
          setP(0);
        },

        onLeave: () => {
          setP(1);
        },

        onEnterBack: (self) => {
          setP(clamp01(self.progress));
        },

        onLeaveBack: () => {
          setP(0);
        },
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        trigger.kill();
      };
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  /*
   * ---------------------------------------------
   * SKILL REVEALS
   * ---------------------------------------------
   */

  const frontend = ease(reveal(p, 0.10, 0.30));
  const backend = ease(reveal(p, 0.18, 0.38));

  const database = ease(reveal(p, 0.30, 0.50));
  const languages = ease(reveal(p, 0.38, 0.58));

  const devops = ease(reveal(p, 0.50, 0.70));
  const tools = ease(reveal(p, 0.58, 0.78));

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full"
      style={{
        height: "100vh",
        color: "#222222",
        zIndex: 2,
      }}
    >
      <div
        className="
          flex
          h-screen
          w-full
          items-center
          overflow-hidden
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1200px]
            flex-col
            px-6
            md:px-10
            lg:px-12
          "
        >

          {/* -------------------------------- */}
          {/* HEADING */}
          {/* -------------------------------- */}

          <header className="w-full shrink-0">
            <h2
              className="
                font-display
                text-4xl
                font-extrabold
                tracking-tight
                text-white
                md:text-5xl
              "
            >
              Skills I have
            </h2>
          </header>


          {/* -------------------------------- */}
          {/* MAIN CONTENT */}
          {/* -------------------------------- */}

          <div
            className="
              mt-8
              grid
              w-full
              items-center
              gap-8
              md:grid-cols-[1.1fr_0.9fr]
              lg:gap-12
            "
          >

            {/* ================================= */}
            {/* LEFT — SKILLS GRID */}
            {/* ================================= */}

            <div className="w-full">

              <div className="grid w-full grid-cols-2">

                {/* ============================= */}
                {/* FRONTEND */}
                {/* ============================= */}

                <Skill
                  title="FRONTEND"
                  description="
                    I build client-side applications
                    with modern frameworks, semantic
                    coding practices, TailwindCSS,
                    animation systems and
                    performance-focused interfaces.
                  "
                  progress={frontend}
                  right

                />

                {/* ============================= */}
                {/* BACKEND */}
                {/* ============================= */}

                <Skill
                  title="BACKEND"
                  description="
                    I build scalable and maintainable
                    backend applications using Nest.js,
                    Docker, Redis, PostgreSQL,
                    MongoDB and modern API architecture.
                  "
                  progress={backend}
                />


                {/* ============================= */}
                {/* DATABASE */}
                {/* ============================= */}

                <Skill
                  title="DATABASE"
                  description="
                    PostgreSQL, MongoDB and Redis
                    with a focus on data modelling,
                    indexing, caching, migrations
                    and query optimisation.
                  "
                  progress={database}
                  right
                />

                {/* ============================= */}
                {/* LANGUAGES */}
                {/* ============================= */}

                <Skill
                  title="LANGUAGES"
                  description="
                    TypeScript, JavaScript, Python,
                    SQL, HTML and CSS for building
                    reliable applications across
                    the entire stack.
                  "
                  progress={languages}
                />


                {/* ============================= */}
                {/* DEVOPS */}
                {/* ============================= */}

                <Skill
                  title="DEVOPS"
                  description="
                    Docker, CI/CD, deployment workflows,
                    cloud infrastructure, monitoring
                    and production reliability.
                  "
                  progress={devops}
                  right
                />

                {/* ============================= */}
                {/* TOOLS */}
                {/* ============================= */}

                <Skill
                  title="TOOLS"
                  description="
                    Git, GitHub, VS Code, Figma,
                    Postman, Linux, GSAP,
                    TailwindCSS and other tools
                    used throughout development.
                  "
                  progress={tools}
                />

              </div>
            </div>


            {/* ================================= */}
            {/* RIGHT — ILLUSTRATION */}
            {/* ================================= */}

            <div
              className="
                flex
                h-[260px]
                w-full
                items-center
                justify-center
                md:h-[380px]
                lg:h-[420px]
              "
            >
              <SkillsIllustration p={p} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


/* ================================================= */
/* SKILL CELL */
/* ================================================= */

function Skill({
  title,
  description,
  progress,
  left = false,
  right = false,
}: {
  title: string;
  description: string;
  progress: number;
  left?: boolean;
  right?: boolean;
}) {
  return (
    <div
      style={{
        position: "relative",

        /*
         * IMPORTANT:
         * Large internal spacing keeps text away
         * from the centre divider and row borders.
         */
        paddingTop: "34px",
        paddingBottom: "34px",

        /*
         * More breathing room on the left side.
         */
        paddingLeft: left ? "10px" : "10px",
        paddingRight: right ? "32px" : "32px",

        minHeight: "175px",

        opacity: progress,

        transform: `translateY(${(1 - progress) * 24}px)`,

        transition: "opacity 0.15s linear",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontSize: "18px",
          fontWeight: 500,
          letterSpacing: "0.08em",
          lineHeight: 1.2,

          /*
           * PINK HEADING
           */
          color: "rgb(255, 158, 174) ",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: "16px 0 0 0",

          maxWidth: "360px",

          fontFamily: "var(--font-body)",
          fontSize: "13px",
          fontWeight: 400,
          lineHeight: 1.75,

          /*
           * WHITE TEXT
           */
          color: "#FFFFFF",

          opacity: 0.72,
        }}
      >
        {description}
      </p>
    </div>
  );
}