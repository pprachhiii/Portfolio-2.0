
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Menu from "./components/Menu";
import Activities from "./components/Activities";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/cursor.css";
import "./styles/experience.css";
import "./styles/nav.css";
import "./styles/sidebar.css";
import "./styles/global.css";
import "./styles/tailwind.css";
import "./styles/activities.css";

import MagicCursor from "./components/MagicCursor";

function App() {

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
        <Activities />
        <Contact />
      </main>
    </>
  );
}

export default App;