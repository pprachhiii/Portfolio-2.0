import { useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Menu from "./components/Menu";

import "./styles/about.css";
import "./styles/contact.css";
import "./styles/cursor.css";
import "./styles/experience.css";
import "./styles/hero.css";
import "./styles/nav.css";
import "./styles/sidebar.css";
import "./styles/global.css";
import "./styles/tailwind.css";

import MagicCursor from "./components/MagicCursor";

function App() {
  useEffect(() => {
    /*
     * Only the section background system is handled here.
     *
     * This does NOT control the sticky animation/scrolling
     * inside Skills.tsx.
     */
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        "section[data-section]"
      )
    );

    const setBackground = (section: HTMLElement) => {
      const type = section.dataset.section;

      /*
       * HERO
       * ----
       * Hero remains transparent so KineticGrid is visible.
       */
      if (type === "hero") {
        document.documentElement.style.setProperty(
          "--section-bg",
          "transparent"
        );

        document.documentElement.dataset.bgMode = "kinetic";
        return;
      }

      /*
       * ALL OTHER SECTIONS
       * ------------------
       * Their background comes from data-bg.
       */
      const bg = section.dataset.bg;

      if (bg) {
        document.documentElement.style.setProperty(
          "--section-bg",
          bg
        );

        document.documentElement.dataset.bgMode = "color";
      }
    };

    /*
     * Find the section that occupies the largest portion
     * of the viewport.
     */
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (!visibleSections.length) return;

        const section =
          visibleSections[0].target as HTMLElement;

        setBackground(section);
      },
      {
        threshold: [
          0,
          0.1,
          0.25,
          0.5,
          0.75,
          1,
        ],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    /*
     * Initial state.
     */
    const hero = document.querySelector<HTMLElement>(
      "#hero"
    );

    if (hero) {
      setBackground(hero);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <MagicCursor />

      <Sidebar />
      <Menu />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;