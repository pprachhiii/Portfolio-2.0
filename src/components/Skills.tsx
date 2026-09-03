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
        end: "+=1600",

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

  /* ============================================================
     ALL SIX SKILLS
     ============================================================ */

  const frontend = ease(reveal(p, 0.04, 0.18));
  const backend = ease(reveal(p, 0.12, 0.28));

  const database = ease(reveal(p, 0.22, 0.38));
  const languages = ease(reveal(p, 0.32, 0.48));

  const devops = ease(reveal(p, 0.42, 0.60));
  const tools = ease(reveal(p, 0.54, 0.72));

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full"
      style={{
        zIndex: 2,
      }}
    >
      <div className="skills-viewport">

        <div className="skills-container">


          <header className="skills-heading">
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



          <div className="skills-main">


            <div className="skills-list">

              <Skill
                title="FRONTEND"
                description="
                  React, Next.js, Tailwind CSS, HTML5, CSS3,
                  Zustand, React Context, Responsive Web Design
                "
                progress={frontend}
              />

              <Skill
                title="BACKEND"
                description="
                  Node.js, Express.js, RESTful APIs,
                  Prisma ORM, Redis
                "
                progress={backend}
              />

              <Skill
                title="DATABASE"
                description="
                  PostgreSQL, MySQL, MongoDB, Database Design
                "
                progress={database}
              />

              <Skill
                title="LANGUAGES"
                description="
                  TypeScript, JavaScript, SQL, HTML and CSS
                "
                progress={languages}
              />

              <Skill
                title="DEVOPS"
                description="
                  Docker, GitHub Actions (CI/CD)
                "
                progress={devops}
              />

              <Skill
                title="TOOLS"
                description="
                  Git, GitHub, Postman, Apidog, VS Code
                "
                progress={tools}
              />

            </div>



            <div className="skills-illustration">
              <SkillsIllustration p={p} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}



function Skill({
  title,
  description,
  progress,
}: {
  title: string;
  description: string;
  progress: number;
}) {
  return (
    <article
      className="skill-item"
      style={{
        opacity: progress,

        transform: `
          translateY(${(1 - progress) * 24}px)
        `,
      }}
    >
      <h3 className="skill-title">
        {title}
      </h3>

      <p className="skill-description">
        {description}
      </p>
    </article>
  );
}
