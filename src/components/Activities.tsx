"use client";

import { useEffect, useState } from "react";

const activities = [
  {
    title: "1st Runner-Up",
    org: "HackWavl Hackathon",
    date: "Feb 2026",
    type: "CERTIFICATE",
    description:
      "Secured 2nd Runner-Up in my inter-college hackathon, HackWavl, competing against 20+ teams. Led a 4-member team to build a campus energy monitoring and optimization system focused on real-time energy tracking and efficiency improvement during the 8-hour hackathon.",
    link: "https://drive.google.com/file/d/15Wu4J7wxHA40EdOKDh9KWhUELbfoQKJS/view?usp=sharing",
  },
  {
    title: "Arcade Participant",
    org: "Google Cloud Skills Boost",
    date: "Apr 2025 – Jun 2025",
    type: "CERTIFICATE",
    description:
      "Completed the Google Cloud Skills Boost Arcade program, achieved the Arcade Trooper tier through hands-on cloud labs and challenges, and received official Google Cloud swag rewards.",
  },
  {
    title: "Samsung Innovation Campus",
    org: "Samsung Innovation Campus",
    date: "Aug 2025 – Sep 2025",
    type: "CERTIFICATE",
    description:
      "Completed SIC training in Coding & Programming (C&P), covering programming fundamentals and problem solving. Led a 6-member team during the final 3-day hackathon, contributing across frontend, backend, and database development.",
    link: "https://drive.google.com/file/d/1FxYIMvyRpeUpzrcG3vrafIYxBYX1C-Uj/view?usp=sharing",
  },
  {
    title: "ML Cohort Trainee",
    org: "Girls Leading Tech",
    date: "Jul 2025 – Aug 2025",
    type: "CERTIFICATE",
    description:
      "Completed a 4-week Machine Learning Cohort by Girls Leading Tech, focused on machine learning, AI development, mentorship sessions, weekly assignments, and hands-on projects. Independently participated in the final-week online hackathon.",
    link: "https://drive.google.com/file/d/1wDMX8CtoFmpj-BIQmTS6fcK6RylyB7LD/view?usp=sharing",
  },
  {
    title: "SIH Internal Round Qualifier",
    org: "Smart India Hackathon (SIH)",
    date: "2026",
    type: "CERTIFICATE",
    description:
      "Qualified for the Smart India Hackathon (SIH) Internal Round, with our team selected among the top 20 out of 60+ participating teams. Built an AI-powered document verification application to determine the authenticity and legal validity of documents.",
  },
];

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

    <strong>{activities[0].title}</strong>
  </div>

  <div className="activity-card-body">


    <div className="activity-label">{activities[0].date}</div>

    <p>{activities[0].description}</p>

    {activities[0].link && (
      <a
        href={activities[0].link}
        target="_blank"
        rel="noreferrer"
            className="activity-certificate"

      >
        Certificate ↗
      </a>
    )}
  </div>
</div>

          {/* ================= LAPTOP ================= */}

          <div className="laptop-wrapper">

            <div className="laptop">

              {/* SCREEN */}

              <div className="laptop-screen-frame">

                <div className="laptop-camera" />

                <div className="laptop-screen">

                  <video
  src="/hero-video.webm"
  autoPlay
  loop
  muted
  playsInline
    className="laptop-video"
>
  Your browser does not support the video tag.
</video>
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

    <strong>{activities[1].title}</strong>
  </div>

  <div className="activity-card-body">


    <div className="activity-label">{activities[1].date}</div>

    <p>{activities[1].description}</p>
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

    <strong>{activities[2].title}</strong>
  </div>

  <div className="activity-card-body">


    <div className="activity-label">{activities[2].date}</div>

    <p>{activities[2].description}</p>

    {activities[2].link && (
  <a
    href={activities[2].link}
    target="_blank"
    rel="noreferrer"
    className="activity-certificate"
  >
    Certificate ↗
  </a>
)}
  
  </div>
</div>

          {/* CARD 2 */}

          <div className="activity-card bottom-card bottom-card-two">
  <div className="activity-card-bar">
    <span />
    <span />

    <strong>{activities[3].title}</strong>
  </div>

  <div className="activity-card-body">


    <div className="activity-label">{activities[3].date}</div>
    <p>{activities[3].description}</p>

    {activities[3].link && (
      <a
        href={activities[3].link}
        target="_blank"
        rel="noreferrer"
            className="activity-certificate"

      >
        Certificate ↗
      </a>
    )}
  </div>
</div>


          {/* CARD 3 */}

<div className="activity-card bottom-card bottom-card-three">
  <div className="activity-card-bar">
    <span />
    <span />

    <strong>{activities[4].title}</strong>
  </div>

  <div className="activity-card-body">


    <div className="activity-label">{activities[4].date}</div>

    <p>{activities[4].description}</p>
  </div>
</div>

        </div>



      </div>
    </section>
  );
}