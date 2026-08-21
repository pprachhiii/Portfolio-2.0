import { useEffect } from "react";

const MagicCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("magic-cursor");

    if (!cursor) return;

    const handleMouseMove = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div id="magic-cursor" aria-hidden="true">
      <div className="magic-cursor-ring" />

      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wand handle */}
        <line
          x1="14"
          y1="52"
          x2="38"
          y2="28"
          stroke="#4a3226"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Main sparkle */}
        <path
          d="M46 10
             C46.8 14 48 16.4 52.6 17.2
             C48 18 46.8 20.4 46 24.4
             C45.2 20.4 44 18 39.4 17.2
             C44 16.4 45.2 14 46 10 Z"
          fill="#e6a23c"
        />

        {/* Small sparkle */}
        <path
          d="M54 24
             C54.4 25.6 55 26.5 56.6 26.8
             C55 27.1 54.4 28 54 29.6
             C53.6 28 53 27.1 51.4 26.8
             C53 26.5 53.6 25.6 54 24 Z"
          fill="#e6a23c"
        />
      </svg>
    </div>
  );
};

export default MagicCursor;