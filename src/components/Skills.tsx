import { useEffect, useRef, useState } from "react";
import { SkillsIllustration } from "./SkillsIllustration";

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

  useEffect(() => {
    let raf = 0;

    const updateProgress = () => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();

        /*
         * =====================================================
         * SKILLS SCROLL TIMELINE
         * =====================================================
         *
         * The section is 200vh:
         *
         * 100vh = animation
         * 100vh = completed-content HOLD
         *
         * Therefore:
         *
         * 0%   -> Skills starts
         * 85%  -> animation is completely finished
         * 85-100% -> completed Skills stays visible
         * 100% -> Experience starts
         */

        const totalScroll = section.offsetHeight - window.innerHeight;

        if (totalScroll <= 0) {
          setP(1);
          return;
        }

        const progress = clamp01(
          -rect.top / totalScroll
        );

        /*
         * Animation finishes at 85%.
         *
         * This gives the user a final completed view
         * before the next section begins.
         */
        const animationProgress = clamp01(
          progress / 0.85
        );

        setP(animationProgress);
      });
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(raf);

      window.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, []);

  

  const frontend = ease(
    reveal(p, 0.12, 0.34)
  );

  const backend = ease(
    reveal(p, 0.34, 0.56)
  );


  /*
   * Everything is completely visible after p = 0.82.
   *
   * It NEVER fades out.
   */

  return (
    <section
      ref={sectionRef}
      id="skills"
      data-section="skills"
      data-bg="#f7edc8"
      className="relative w-full"
      style={{
        /*
         * 200vh TOTAL
         *
         * First 100vh-ish = animation
         * Remaining = completed hold
         */
        height: "100vh",

        backgroundColor: "var(--section-bg)",
        color: "#222222",

        transition:
          "background-color 1s cubic-bezier(0.4, 0, 0.2, 1)",

        zIndex: 2,
      }}
    >
      {/* =====================================================
          STICKY VIEWPORT
          ===================================================== */}

      <div
        className="
          sticky
          top-0
          flex
          h-screen
          w-full
          flex-col
          justify-center
          overflow-hidden
        "
      >
        {/* ===================================================
            MAIN CONTAINER
            =================================================== */}

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
          {/* =================================================
              HEADER
              ================================================= */}

          <header className="w-full">
            <h2
              className="
                font-display
                text-4xl
                font-extrabold
                tracking-tight
                md:text-5xl
              "
            >
              My Top Skills
            </h2>


          </header>

          {/* =================================================
              CONTENT
              ================================================= */}

          <div
            className="
              mt-8
              w-full
              rounded-sm
              px-4
              py-6
              md:px-8
              md:py-8
              lg:px-10
            "
           
          >
            <div
              className="
                grid
                w-full
                items-center
                gap-8
                md:grid-cols-[0.9fr_1.1fr]
                lg:gap-12
              "
            >
              {/* =================================================
                  TEXT
                  ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  items-center
                  text-center
                  md:items-start
                  md:text-left
                "
              >
                {/* BACKEND */}

                <div
                  style={{
                    opacity: backend,
                    transform: `translateY(${
                      (1 - backend) * 24
                    }px)`,
                  }}
                >
                  <h3
                    className="
                      font-display
                      text-lg
                      font-bold
                      tracking-wide
                    "
                  >
                    BACKEND
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-relaxed
                      opacity-60
                    "
                  >
                    I build scalable and maintainable
                    backend applications using
                    cutting-edge technologies like
                    Nest.js, Docker, Redis,
                    PostgreSQL, and MongoDB.
                  </p>
                </div>

                {/* FRONTEND */}

                <div
                  className="mt-8"
                  style={{
                    opacity: frontend,
                    transform: `translateY(${
                      (1 - frontend) * 24
                    }px)`,
                  }}
                >
                  <h3
                    className="
                      font-display
                      text-lg
                      font-bold
                      tracking-wide
                    "
                  >
                    FRONTEND
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-relaxed
                      opacity-60
                    "
                  >
                    I build client-side applications
                    with modern features like SPA
                    and maintain semantic coding
                    style among other best practices
                    for SEO optimisation, using
                    modern tech like Nuxt
                    (Vue.js), TailwindCSS, Pinia,
                    and GSAP.
                  </p>
                </div>

                {/* CTA */}

                
              </div>

              {/* =================================================
                  ILLUSTRATION
                  ================================================= */}

              <div
                className="
                  flex
                  h-[280px]
                  w-full
                  items-center
                  justify-center
                  md:h-[400px]
                "
              >
                <SkillsIllustration p={p} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}