"use client";


export default function Footer() {
  return (
    <footer className="mt-20 flex flex-wrap justify-between gap-3 border-t border-white/10 py-[26px] text-xs text-[#8FA0AC]">
      <span>
        © 2026 Kai Sorensen. Built with more coffee than sleep.
      </span>

      <nav className="flex flex-wrap gap-1">
        <a href="#hero" className="hover:text-[#33D6C4] transition-colors">
          Home
        </a>
        <span>/</span>

        <a href="#about" className="hover:text-[#33D6C4] transition-colors">
          About
        </a>
        <span>/</span>

        <a href="#skills" className="hover:text-[#33D6C4] transition-colors">
          Skills
        </a>
        <span>/</span>

        <a
          href="#experience"
          className="hover:text-[#33D6C4] transition-colors"
        >
          Work
        </a>
        <span>/</span>

        <a
          href="#projects"
          className="hover:text-[#33D6C4] transition-colors"
        >
          Projects
        </a>
        <span>/</span>

        <a
          href="#contact"
          className="hover:text-[#33D6C4] transition-colors"
        >
          Contact
        </a>
      </nav>
    </footer>
  );
}