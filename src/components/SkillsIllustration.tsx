type Props = {
  /** 0 -> 1 build progress */
  p: number;
};

// Simple staged reveal helper: each layer gets a window of the progress.
function stage(p: number, start: number, end: number) {
  return Math.min(1, Math.max(0, (p - start) / (end - start)));
}

const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export function SkillsIllustration({ p }: Props) {
const person = ease(stage(p, 0.00, 0.12));
const desk = ease(stage(p, 0.10, 0.24));
const monitor = ease(stage(p, 0.20, 0.36));
const code = ease(stage(p, 0.30, 0.44));
const winRight = ease(stage(p, 0.40, 0.56));
const winLeft = ease(stage(p, 0.52, 0.66));
const winTop = ease(stage(p, 0.62, 0.76));
  return (
    <svg
      viewBox="0 0 620 520"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a developer building frontend and backend systems"
    >
      {/* floating side window - left */}
      <g
        opacity={winLeft}
        style={{ transform: `translate(${(1 - winLeft) * -30}px, 0px)` }}
      >
        <rect x="30" y="180" width="120" height="86" rx="6" className="fill-ill-panel" />
        <rect x="30" y="180" width="120" height="14" rx="6" className="fill-ill-blue" />
        <rect x="42" y="206" width="60" height="7" rx="3.5" className="fill-ill-blue" />
        <rect x="42" y="222" width="90" height="7" rx="3.5" className="fill-ill-soft" />
        <rect x="42" y="238" width="48" height="7" rx="3.5" className="fill-ill-soft" />
      </g>

      {/* floating window - top left chart */}
      <g
        opacity={winTop}
        style={{ transform: `translate(0px, ${(1 - winTop) * -24}px)` }}
      >
        <rect x="60" y="60" width="150" height="104" rx="6" className="fill-ill-panel" />
        <rect x="60" y="60" width="150" height="14" rx="6" className="fill-ill-blue" />
        <rect x="76" y="126" width="16" height="24" className="fill-ill-blue" />
        <rect x="100" y="108" width="16" height="42" className="fill-ill-teal" />
        <rect x="124" y="94" width="16" height="56" className="fill-ill-orange" />
        <rect x="148" y="116" width="16" height="34" className="fill-ill-blue" />
        <rect x="172" y="86" width="16" height="64" className="fill-ill-teal" />
      </g>

      {/* floating windows - right stack */}
      <g
        opacity={winRight}
        style={{ transform: `translate(${(1 - winRight) * 34}px, 0px)` }}
      >
        <rect x="418" y="46" width="168" height="112" rx="6" className="fill-ill-panel" />
        <rect x="418" y="46" width="168" height="14" rx="6" className="fill-ill-blue" />
        <rect x="432" y="74" width="120" height="6" rx="3" className="fill-ill-teal" />
        <rect x="432" y="88" width="140" height="6" rx="3" className="fill-ill-soft" />
        <rect x="432" y="102" width="96" height="6" rx="3" className="fill-ill-soft" />
        <rect x="432" y="116" width="132" height="6" rx="3" className="fill-ill-soft" />
        <rect x="432" y="130" width="70" height="6" rx="3" className="fill-ill-teal" />

        <rect x="452" y="172" width="140" height="92" rx="6" className="fill-ill-panel" />
        <rect x="452" y="172" width="140" height="14" rx="6" className="fill-ill-teal" />
        <rect x="466" y="200" width="104" height="6" rx="3" className="fill-ill-soft" />
        <rect x="466" y="214" width="80" height="6" rx="3" className="fill-ill-soft" />
        <rect x="466" y="228" width="112" height="6" rx="3" className="fill-ill-soft" />
      </g>

      {/* main monitor */}
      <g
        opacity={monitor}
        style={{
          transform: `translate(0px, ${(1 - monitor) * 22}px) scale(${0.96 + monitor * 0.04})`,
          transformOrigin: "310px 240px",
        }}
      >
        <rect x="212" y="128" width="212" height="150" rx="8" className="fill-ill-blue" />
        <rect x="222" y="138" width="192" height="130" rx="4" className="fill-ill-screen" />
        {/* code lines on screen */}
        <g opacity={code}>
          <rect x="234" y="152" width="80" height="6" rx="3" className="fill-ill-yellow" />
          <rect x="234" y="166" width="130" height="6" rx="3" className="fill-ill-pinkline" />
          <rect x="242" y="180" width="100" height="6" rx="3" className="fill-ill-yellow" />
          <rect x="242" y="194" width="150" height="6" rx="3" className="fill-ill-pinkline" />
          <rect x="234" y="208" width="70" height="6" rx="3" className="fill-ill-yellow" />
          <rect x="234" y="222" width="120" height="6" rx="3" className="fill-ill-pinkline" />
          <rect x="242" y="236" width="90" height="6" rx="3" className="fill-ill-yellow" />
          <rect x="242" y="250" width="140" height="6" rx="3" className="fill-ill-pinkline" />
        </g>
      </g>

      {/* desk */}
      <g
        opacity={desk}
        style={{ transform: `translate(0px, ${(1 - desk) * 28}px)` }}
      >
        <rect x="150" y="278" width="336" height="10" rx="5" className="fill-ill-blue" />
        <rect x="170" y="288" width="9" height="140" rx="4" className="fill-ill-blue" />
        <rect x="458" y="288" width="9" height="140" rx="4" className="fill-ill-blue" />
      </g>

      {/* person + chair */}
      <g
        opacity={person}
        style={{
          transform: `translate(0px, ${(1 - person) * 26}px)`,
        }}
      >
        <ellipse cx="318" cy="452" rx="86" ry="16" className="fill-ill-shadow" />
        {/* chair post */}
        <rect x="312" y="392" width="12" height="52" className="fill-ill-dark" />
        <rect x="286" y="440" width="64" height="8" rx="4" className="fill-ill-dark" />
        {/* chair back */}
        <rect x="278" y="300" width="80" height="98" rx="20" className="fill-ill-teal" />
        {/* arms of the chair */}
        <path
          d="M278 342c-22 0-30 12-30 26s10 24 26 24"
          className="stroke-ill-blue"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M358 342c22 0 30 12 30 26s-10 24-26 24"
          className="stroke-ill-blue"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
        {/* body */}
        <path
          d="M288 318c0-26 18-42 30-42s30 16 30 42v46h-60z"
          className="fill-ill-orange"
        />
        <path
          d="M296 322c0-22 12-34 22-34s22 12 22 34v42h-44z"
          className="fill-ill-teal"
        />
        {/* head */}
        <rect x="300" y="236" width="36" height="48" rx="16" className="fill-ill-skin" />
        <path
          d="M298 252c0-16 10-26 20-26s20 10 20 26c0 6-4 6-6 2-6-8-28-8-34 2-1 2-0 -4 0-4z"
          className="fill-ill-dark"
        />
      </g>
    </svg>
  );
}
