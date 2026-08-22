"use client";

import { useEffect, useState } from "react";

export default function Activities() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoaded(true);
  }, 500);

  const drawLines = () => {
    const wrap = document.querySelector(".activity-wrap");
    const svg = document.querySelector(".activity-lines");
    const laptop = document.querySelector(".laptop-wrapper");

    if (!wrap || !svg || !laptop) return;

    const wrapRect = wrap.getBoundingClientRect();
    const laptopRect = laptop.getBoundingClientRect();

    const cards = [
      wrap.querySelector(".activity-card-left"),
      wrap.querySelector(".activity-card-right"),
      wrap.querySelector(".bottom-card-one"),
      wrap.querySelector(".bottom-card-two"),
      wrap.querySelector(".bottom-card-three"),
    ].filter((card): card is Element => card !== null);

    svg.setAttribute("width", `${wrapRect.width}`);
    svg.setAttribute("height", `${wrapRect.height}`);

    svg.setAttribute(
      "viewBox",
      `0 0 ${wrapRect.width} ${wrapRect.height}`
    );

    const startX =
      laptopRect.left +
      laptopRect.width / 2 -
      wrapRect.left;

    const startY =
      laptopRect.bottom -
      wrapRect.top;

    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();

      const endX =
        cardRect.left +
        cardRect.width / 2 -
        wrapRect.left;

      const isBottomCard =
        card.classList.contains("bottom-card");

      const endY = isBottomCard
        ? cardRect.top - wrapRect.top
        : cardRect.top +
          cardRect.height / 2 -
          wrapRect.top;

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );

      if (isBottomCard) {
        path.setAttribute(
          "d",
          `M ${startX} ${startY}
           L ${endX} ${endY}`
        );
      } else {
        const direction = endX < startX ? -1 : 1;

        const controlX =
          startX +
          direction *
            Math.abs(endX - startX) *
            0.45;

        const controlY =
          startY +
          (endY - startY) * 0.2;

        path.setAttribute(
          "d",
          `M ${startX} ${startY}
           Q ${controlX} ${controlY}
             ${endX} ${endY}`
        );
      }

      path.style.animationDelay =
        `${0.3 + index * 0.15}s`;

      svg.appendChild(path);
    });
  };

  const wrap = document.querySelector(".activity-wrap");

  const resizeObserver = new ResizeObserver(() => {
    requestAnimationFrame(drawLines);
  });

  if (wrap) {
    resizeObserver.observe(wrap);
  }

  window.addEventListener("resize", drawLines);

  /*
   * Wait until React has painted everything.
   */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      drawLines();
    });
  });

  /*
   * Recalculate after the entry animation.
   */
  const delayedDraw1 = setTimeout(drawLines, 700);
  const delayedDraw2 = setTimeout(drawLines, 1500);

  return () => {
    clearTimeout(timer);
    clearTimeout(delayedDraw1);
    clearTimeout(delayedDraw2);

    resizeObserver.disconnect();
    window.removeEventListener("resize", drawLines);
  };
}, []);

  return (
    <section className={`activity-section ${loaded ? "is-loaded" : ""}`}>
      <div className="activity-wrap">
<svg
  className="activity-lines"
  aria-hidden="true"
/>
        {/* ================= HEADER ================= */}

        <div className="activity-header">
          <p className="activity-kicker">Activities</p>

        </div>


        {/* ================= MAIN SCENE ================= */}

        <div className="activity-scene">

          {/* LEFT CARD */}

          <div className="activity-card activity-card-left">
            <div className="activity-card-bar">
              <span />
              <span />

              <strong>HELLO !!</strong>
            </div>

            <div className="activity-card-body">

              <div className="activity-label">PLAYER:</div>
              <p>Your Name</p>

              <div className="activity-label">ROLE:</div>
              <p>Software Engineer</p>

              <div className="activity-label">MISSION:</div>
              <p>
                Building thoughtful digital products,
                scalable systems and meaningful
                user experiences.
              </p>

              <div className="activity-label">STATUS:</div>
              <p>Ready to build.</p>

            </div>
          </div>


          {/* ================= LAPTOP ================= */}

          <div className="laptop-wrapper">

            <div className="laptop">

              {/* SCREEN */}

              <div className="laptop-screen-frame">

                <div className="laptop-camera" />

                <div className="laptop-screen">

                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Portfolio preview"
                    className="laptop-image"
                  />

                </div>

              </div>


              {/* HINGE */}

              <div className="laptop-hinge" />


              {/* BASE */}

              <div className="laptop-base">

                <div className="keyboard">

                  {Array.from({ length: 42 }).map((_, index) => (
                    <span key={index} />
                  ))}

                </div>

                <div className="trackpad" />

              </div>


              {/* FRONT EDGE */}

              <div className="laptop-front" />

            </div>

          </div>


          {/* RIGHT CARD */}

          <div className="activity-card activity-card-right">

            <div className="activity-card-bar">
              <span />
              <span />

              <strong>PLAYER DATA</strong>
            </div>

            <div className="activity-card-body">

              <div className="activity-label">EXPERIENCE:</div>
              <p>Full Stack Development</p>

              <div className="activity-label">FOCUS:</div>
              <p>
                Frontend, backend,
                architecture and performance.
              </p>

              <div className="activity-label">CURRENT:</div>
              <p>Learning. Building. Shipping.</p>

              <div className="activity-label">STATUS:</div>
              <p>ONLINE ●</p>

            </div>

          </div>



        </div>


        {/* ================= BOTTOM CARDS ================= */}

        <div className="activity-bottom">

          {/* CARD 1 */}

          <div className="activity-card bottom-card bottom-card-one">

            <div className="activity-card-bar">
              <span />
              <span />

              <strong>WEAPONS</strong>
            </div>

            <div className="activity-card-body">

              <div className="skill-grid">
                <span>TS</span>
                <span>JS</span>
                <span>REACT</span>
                <span>NEXT</span>
                <span>NODE</span>
                <span>GSAP</span>
              </div>

            </div>

          </div>


          {/* CARD 2 */}

          <div className="activity-card bottom-card bottom-card-two">

            <div className="activity-card-bar">
              <span />
              <span />

              <strong>TRAINING LOG</strong>
            </div>

            <div className="activity-card-body">

              <div className="activity-label">EDUCATION:</div>

              <p>
                Computer Science
              </p>

              <p>
                2023 — 2027
              </p>

              <div className="status-tag">
                IN PROGRESS
              </div>

            </div>

          </div>


          {/* CARD 3 */}

          <div className="activity-card bottom-card bottom-card-three">

            <div className="activity-card-bar">
              <span />
              <span />

              <strong>SKILLS</strong>
            </div>

            <div className="activity-card-body">

              <ul className="skills-list">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Database Design</li>
                <li>API Architecture</li>
                <li>UI Engineering</li>
                <li>Performance</li>
              </ul>

            </div>

          </div>



        </div>



      </div>
    </section>
  );
}