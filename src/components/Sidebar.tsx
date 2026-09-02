"use client";

import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <aside id="sidebar">

      <Link
  to="/"
  className="avatar-mark"
  aria-label="Go to home"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <video
    ref={videoRef}
    className="avatar-video"
    src="/video.mp4"
    muted
    playsInline
    preload="metadata"
  />

  <span>
    Prachi
    <br />
    Yadav
  </span>
</Link>      

      <div className="side-socials">
        

{/* Email */}
<a
  className="soc email"
  href="mailto:prachiiyadav2409@gmail.com"
  aria-label="Email"
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>

  <span className="tip">
    [ send me an email ]
  </span>
</a>
        {/* GitHub */}
        <a
          className="soc github"
          href="https://github.com/pprachhiii"
          aria-label="GitHub"
          onClick={(e) => e.preventDefault()}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
          </svg>

          <span className="tip">
            [ where the commits live ]
          </span>
        </a>

        {/* LinkedIn */}
        <a
          className="soc linkedin"
          href="https://www.linkedin.com/in/prachi-yadav-dev/"
          aria-label="LinkedIn"
          onClick={(e) => e.preventDefault()}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8h-4V9Z" />
          </svg>

          <span className="tip">
            [ dw, don't have premium, <br/> can't see that you visited  ]
          </span>
        </a>
 
 
        <a
          className="soc twitter"
          href="https://x.com/pprachh11"
          aria-label="Twitter / X"
          onClick={(e) => e.preventDefault()}
        >
          <svg
            className="bird"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1Z" />
          </svg>

          <svg
            className="bird bird-ghost"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1Z" />
          </svg>

          <span className="tip">
            [ off to tweet into the void ]
          </span>
        </a>     </div>
    </aside>
  );
}