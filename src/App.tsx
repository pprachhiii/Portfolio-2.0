import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Menu from "./components/Menu";
import Activities from "./components/Activities";
import MagicCursor from "./components/MagicCursor";

import ProjectDetails from "./pages/projects/ProjectDetails";

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

import { Routes, Route } from "react-router-dom";

function Home() {
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

function App() {
  return (
    <Routes>
      {/* MAIN PORTFOLIO */}
      <Route path="/" element={<Home />} />

      {/* PROJECT DETAIL */}
      <Route
        path="/projects/:slug"
        element={<ProjectDetails />}
      />
    </Routes>
  );
}

export default App;