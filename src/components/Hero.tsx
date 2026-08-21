"use client";

import { useEffect, useRef, useState } from "react";
import KineticGrid from "./KineticGrid.tsx";

const phrases = [
  "A Full-Stack Developer",
  "A Freelance Web Developer",
  "A React & Node Specialist",
  "A UI-minded Engineer",
];

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}—=+*^?#";

export default function Hero() {
  const [roleText, setRoleText] = useState("");

  const currentTextRef = useRef("");
  const phraseIndexRef = useRef(0);
  const scrambleTimerRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );

  useEffect(() => {
    const scrambleTo = (text: string) => {
      const from = currentTextRef.current;
      const length = Math.max(from.length, text.length);

      const queue: {
        from: string;
        to: string;
        start: number;
        end: number;
      }[] = [];

      for (let i = 0; i < length; i++) {
        const fromChar = from[i] || "";
        const toChar = text[i] || "";

        const start = Math.floor(Math.random() * 20);
        const end = start + Math.floor(Math.random() * 20);

        queue.push({
          from: fromChar,
          to: toChar,
          start,
          end,
        });
      }

      let frame = 0;

      if (scrambleTimerRef.current) {
        clearInterval(scrambleTimerRef.current);
      }

      scrambleTimerRef.current = setInterval(() => {
        let output = "";
        let completed = 0;

        queue.forEach((item) => {
          if (frame >= item.end) {
            output += item.to;
            completed++;
          } else if (frame >= item.start) {
            output += chars[Math.floor(Math.random() * chars.length)];
          } else {
            output += item.from;
          }
        });

        setRoleText(output);
        frame++;

        if (completed === queue.length) {
          if (scrambleTimerRef.current) {
            clearInterval(scrambleTimerRef.current);
          }

          currentTextRef.current = text;
        }
      }, 28);
    };

    scrambleTo(phrases[0]);

    const phraseTimer = setInterval(() => {
      phraseIndexRef.current =
        (phraseIndexRef.current + 1) % phrases.length;

      scrambleTo(phrases[phraseIndexRef.current]);
    }, 3200);

    return () => {
      clearInterval(phraseTimer);

      if (scrambleTimerRef.current) {
        clearInterval(scrambleTimerRef.current);
      }
    };
  }, []);

  return (
<section
  id="hero"
  className="hero-section"
  data-section="hero"
>      {/* DO NOT CHANGE WAVES */}
      <div className="hero-waves" aria-hidden="true">
        <KineticGrid />
      </div>

<div className="hero-body">
  {/* LEFT */}
  <div className="hero-left">
    <div className="hero-copy">

      <div className="hero-status">
        <div className="status">
          <i />
          Immediate Joiner • Open to Relocation
        </div>
      </div>

<h1 className="hero-heading">
  Hello <span className="wave">👋</span>
  <br />
  I'm Prachi !
</h1>

<div className="hero-role-row">
  <div className="hero-role">
    <span id="scrambleText">{roleText}</span>
    <span className="cursor-bar" />
  </div>
</div>

<p className="text-[rgb(192, 192, 192)]">
  I design and build fast, dependable products end-to-end —
  from pixel-level interface work to the APIs and databases
  underneath. Four years of shipping for startups and small
  teams who need one person who can own the whole stack.
</p>
            <div className="hero-search">
              <div className="hero-search-box">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>

                linkedin.com/in/prachi-yadav
              </div>

              <a         href="YOUR_GOOGLE_DRIVE_LINK"
        target="_blank"
        rel="noopener noreferrer"
 className="hero-work-link">
                        Download Resume
 →
              </a>
            </div>
            
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="polaroid">
            <img
  src="https://i.pinimg.com/736x/7f/fa/3e/7ffa3e7ef72bb732f2640de7718adf69.jpg"
  alt="Profile photo"
/>

            
            <div className="profile-card">
              <div className="profile-name">
                Prachi Yadav <span>· she/her</span>
              </div>

              <div className="profile-loc">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                India
              </div>

              <div className="profile-quote">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>

                Thank you so much for showing interest and for viewing my
                portfolio!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}