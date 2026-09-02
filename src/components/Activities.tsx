"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import profile from "../assets/profile.png";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const laptopRef = useRef<HTMLDivElement | null>(null);

useLayoutEffect(() => {
  const section = sectionRef.current;
  const wrap = wrapRef.current;
  const svg = svgRef.current;
  const laptop = laptopRef.current;

  if (!section || !wrap || !svg || !laptop) return;

  const ctx = gsap.context(() => {
    const cards: HTMLElement[] = [
      wrap.querySelector<HTMLElement>(".activity-card-left"),
      wrap.querySelector<HTMLElement>(".activity-card-right"),
      wrap.querySelector<HTMLElement>(".bottom-card-one"),
      wrap.querySelector<HTMLElement>(".bottom-card-two"),
      wrap.querySelector<HTMLElement>(".bottom-card-three"),
    ].filter(
      (card): card is HTMLElement => card !== null
    );

    /*
    ========================================
    DRAW CONNECTION LINES
    ========================================
    */

    const drawLines = () => {
      const wrapRect = wrap.getBoundingClientRect();
      const laptopRect = laptop.getBoundingClientRect();

      svg.setAttribute("width", `${wrapRect.width}`);
      svg.setAttribute("height", `${wrapRect.height}`);

      svg.setAttribute(
        "viewBox",
        `0 0 ${wrapRect.width} ${wrapRect.height}`
      );

      // Remove old paths
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }

      /*
      Laptop connection point
      */

      const startX =
        laptopRect.left +
        laptopRect.width / 2 -
        wrapRect.left;

      const startY =
        laptopRect.bottom -
        wrapRect.top;

      /*
      Create one line per card
      */

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();

        const endX =
          cardRect.left +
          cardRect.width / 2 -
          wrapRect.left;

        const isBottomCard =
          card.classList.contains("bottom-card");

        /*
        LEFT / RIGHT CARDS
        Connect to the middle of the card.

        BOTTOM CARDS
        Connect to the top of the card.
        */

        const endY = isBottomCard
          ? cardRect.top - wrapRect.top
          : cardRect.top +
            cardRect.height / 2 -
            wrapRect.top;

        const path =
          document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
          );

        /*
        ========================================
        BOTTOM CARDS
        ========================================
        */

        if (isBottomCard) {
          const controlY =
            startY +
            (endY - startY) * 0.55;

          path.setAttribute(
            "d",
            `
              M ${startX} ${startY}
              C ${startX} ${controlY},
                ${endX} ${controlY},
                ${endX} ${endY}
            `
          );
        }

        /*
        ========================================
        LEFT / RIGHT CARDS
        ========================================
        */

        else {
          const direction =
            endX < startX ? -1 : 1;

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
            `
              M ${startX} ${startY}
              Q ${controlX} ${controlY}
                ${endX} ${endY}
            `
          );
        }

        /*
        ========================================
        SVG STYLE
        ========================================
        */

        path.setAttribute(
          "fill",
          "none"
        );

        path.setAttribute(
          "stroke",
          "#ffffff"
        );

        path.setAttribute(
          "stroke-width",
          "1.5"
        );

        path.setAttribute(
          "stroke-dasharray",
          "7 7"
        );

        path.setAttribute(
          "stroke-linecap",
          "round"
        );

        path.setAttribute(
          "opacity",
          "0"
        );

        /*
        ========================================
        DRAW ANIMATION
        ========================================
        */

        const length =
          path.getTotalLength();

        path.style.strokeDasharray =
          `${length}`;

        path.style.strokeDashoffset =
          `${length}`;

        svg.appendChild(path);
      });
    };

    /*
    ========================================
    INITIAL DRAW
    ========================================
    */

    drawLines();

    /*
    ========================================
    GET PATHS
    ========================================
    */

    const getPaths = () =>
      Array.from(
        svg.querySelectorAll<SVGPathElement>(
          "path"
        )
      );

    /*
    ========================================
    INITIAL CARD STATES
    ========================================
    */

    gsap.set(cards, {
      opacity: 0,
      y: 35,
      scale: 0.97,
      transformOrigin: "center center",
    });

    gsap.set(laptop, {
      opacity: 0,
      y: 20,
      scale: 0.96,
    });

    /*
    ========================================
    TIMELINE
    ========================================
    */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        once: true,
      },
    });

    /*
    ========================================
    LAPTOP
    ========================================
    */

    timeline.to(laptop, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    /*
    ========================================
    LEFT CARD
    ========================================
    */

    timeline.to(
      cards[0],
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: "power2.out",
      },
      "-=0.15"
    );

    /*
    LEFT LINE
    */

    timeline.to(
      () => {
        const path = getPaths()[0];

        if (path) {
          gsap.to(path, {
            opacity: 0.9,
            strokeDashoffset: 0,
            duration: 0.35,
            ease: "power1.out",
          });
        }
      },
      {},
      "-=0.15"
    );

    /*
    ========================================
    RIGHT CARD
    ========================================
    */

    timeline.to(
      cards[1],
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: "power2.out",
      },
      "-=0.08"
    );

    /*
    RIGHT LINE
    */

    timeline.to(
      () => {
        const path = getPaths()[1];

        if (path) {
          gsap.to(path, {
            opacity: 0.9,
            strokeDashoffset: 0,
            duration: 0.35,
            ease: "power1.out",
          });
        }
      },
      {},
      "-=0.15"
    );

    /*
    ========================================
    BOTTOM CARDS
    ========================================
    */

    cards.slice(2).forEach((card, index) => {
      const pathIndex = index + 2;

      /*
      CARD APPEARS
      */

      timeline.to(
        card,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.05"
      );

      /*
      CORRESPONDING LINE APPEARS
      */

      timeline.to(
        () => {
          const path =
            getPaths()[pathIndex];

          if (path) {
            gsap.to(path, {
              opacity: 0.9,
              strokeDashoffset: 0,
              duration: 0.35,
              ease: "power1.out",
            });
          }
        },
        {},
        "-=0.15"
      );
    });

    /*
    ========================================
    RESIZE
    ========================================
    */

    const resizeObserver =
      new ResizeObserver(() => {
        drawLines();

        /*
        Important:
        redraw the paths but don't replay
        the entrance animation.
        */

        const paths = getPaths();

        paths.forEach((path) => {
          const length =
            path.getTotalLength();

          path.style.strokeDasharray =
            `${length}`;

          path.style.strokeDashoffset =
            "0";

          path.style.opacity =
            "0.9";
        });

        ScrollTrigger.refresh();
      });

    resizeObserver.observe(wrap);

    window.addEventListener(
      "resize",
      drawLines
    );

    /*
    ========================================
    CLEANUP
    ========================================
    */

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener(
        "resize",
        drawLines
      );
    };
  }, sectionRef);

  return () => {
    ctx.revert();
  };
}, []);

  return (
    <section
      ref={sectionRef}
      id="activities"
      className="activity-section"
    >
      <div
        ref={wrapRef}
        className="activity-wrap"
      >
        {/* SVG CONNECTION LINES */}
        <svg
          ref={svgRef}
          className="activity-lines"
          aria-hidden="true"
        />

        {/* HEADER */}
        <div className="activity-header">
          <p className="activity-kicker">
            Activities
          </p>
        </div>

        {/* MAIN SCENE */}
        <div className="activity-scene">

          {/* ================================= */}
          {/* LEFT CARD */}
          {/* ================================= */}

          <div className="activity-card activity-card-left">
            <div className="activity-card-bar">
              <span />
              <span />

              <strong>
                {activities[0].title}
              </strong>
            </div>

            <div className="activity-card-body">
              <div className="activity-label">
                {activities[0].date}
              </div>

              <p>
                {activities[0].description}
              </p>

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

          {/* ================================= */}
          {/* LAPTOP */}
          {/* ================================= */}

          <div
            ref={laptopRef}
            className="laptop-wrapper"
          >
            <div className="laptop">

              <div className="laptop-screen-frame">

                <div className="laptop-camera" />

                <div className="laptop-screen">

                  <img
                    src={profile}
                    alt="Prachi's profile"
                    className="laptop-video"
                  />

                </div>
              </div>

              <div className="laptop-hinge" />

              <div className="laptop-base">

                <div className="keyboard">
                  {Array.from({
                    length: 42,
                  }).map((_, index) => (
                    <span
                      key={index}
                    />
                  ))}
                </div>

                <div className="trackpad" />

              </div>

              <div className="laptop-front" />

            </div>
          </div>

          {/* ================================= */}
          {/* RIGHT CARD */}
          {/* ================================= */}

          <div className="activity-card activity-card-right">

            <div className="activity-card-bar">
              <span />
              <span />

              <strong>
                {activities[1].title}
              </strong>
            </div>

            <div className="activity-card-body">

              <div className="activity-label">
                {activities[1].date}
              </div>

              <p>
                {activities[1].description}
              </p>

            </div>
          </div>

        </div>

        {/* ================================= */}
        {/* BOTTOM CARDS */}
        {/* ================================= */}

        <div className="activity-bottom">

          {/* CARD 3 */}
          <div className="activity-card bottom-card bottom-card-one">

            <div className="activity-card-bar">
              <span />
              <span />

              <strong>
                {activities[2].title}
              </strong>
            </div>

            <div className="activity-card-body">

              <div className="activity-label">
                {activities[2].date}
              </div>

              <p>
                {activities[2].description}
              </p>

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

          {/* CARD 4 */}
          <div className="activity-card bottom-card bottom-card-two">

            <div className="activity-card-bar">
              <span />
              <span />

              <strong>
                {activities[3].title}
              </strong>
            </div>

            <div className="activity-card-body">

              <div className="activity-label">
                {activities[3].date}
              </div>

              <p>
                {activities[3].description}
              </p>

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

          {/* CARD 5 */}
          <div className="activity-card bottom-card bottom-card-three">

            <div className="activity-card-bar">
              <span />
              <span />

              <strong>
                {activities[4].title}
              </strong>
            </div>

            <div className="activity-card-body">

              <div className="activity-label">
                {activities[4].date}
              </div>

              <p>
                {activities[4].description}
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
