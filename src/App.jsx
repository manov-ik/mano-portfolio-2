import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Writes from "./pages/Writes";
import WritingDetail from "./pages/WritingDetail";
import Projects from "./pages/Projects";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import DesignWorks from "./pages/Designworks";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import CardNav from "./components/CardNav";
// import MagnetLines from "./components/MagnetLines";
import manoLogo from "./assets/mano-logo.png";

function App() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Experience", ariaLabel: "My Experience", href: "/experience" },
        { label: "Education", ariaLabel: "My Education", href: "/education" },
      ],
    },
    {
      label: "Created",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Projects", ariaLabel: "Projects", href: "/projects" },
        { label: "Design", ariaLabel: "Design Works", href: "/design" },
        { label: "Writes", ariaLabel: "Writings", href: "/writes" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email me" },
        { label: "Instagram", ariaLabel: "Instagram" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
        { label: "Other", ariaLabel: "Other" },
      ],
    },
  ];

  return (
    <div className="bg-dot-pattern min-h-screen">
      <CardNav
        logo={manoLogo}
        logoAlt="MANO"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        theme="light"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/design" element={<DesignWorks />} />
        <Route path="/writes" element={<Writes />} />
        <Route path="/writes/:slug" element={<WritingDetail />} />
      </Routes>
    </div>
  );
}

export default App;
