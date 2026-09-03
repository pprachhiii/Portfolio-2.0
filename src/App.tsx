import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Activities from "./components/Activities";
import MagicCursor from "./components/MagicCursor";

import ProjectDetails from "./pages/projects/ProjectDetails";
import ExperienceDetails from "./pages/projects/ExperienceDetails";
import ScrollToTop from "./components/ScrollToTop";

import "./styles/hero.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/cursor.css";
import "./styles/experience.css";
import "./styles/menu.css";
import "./styles/sidebar.css";
import "./styles/global.css";
import "./styles/tailwind.css";
import "./styles/activities.css";
import "./styles/projectdetails.css";
import "./styles/experiencedetails.css";
import "./styles/skills.css";
import "./styles/project.css";

import { Routes, Route, Outlet } from "react-router-dom";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Activities />
      <Contact />
    </main>
  );
}

function Layout() {
  return (
    <>
      <ScrollToTop />

      <MagicCursor />

      <Sidebar />
      <Menu />

      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* PROJECT DETAILS */}
        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

        {/* EXPERIENCE DETAILS */}
        <Route
          path="/experience/:slug"
          element={<ExperienceDetails />}
        />

      </Route>
    </Routes>
  );
}

export default App;