import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Writes from "./pages/Writes";
import WritingDetail from "./pages/WritingDetail";
import Projects from "./pages/Projects";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import DesignWorks from "./pages/Designworks";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import GalleryDetail from "./pages/GalleryDetail";
import Contact from "./pages/Contact";
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
        { label: "About Me", ariaLabel: "About Me", href: "/about" },
        { label: "Gallery", ariaLabel: "Gallery", href: "/gallery" },
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
        {
          label: "WhatsApp",
          ariaLabel: "WhatsApp",
          href: "https://wa.me/919361026919",
        },
        {
          label: "Instagram",
          ariaLabel: "Instagram",
          href: "https://www.instagram.com/manov_ik",
        },
        {
          label: "LinkedIn",
          ariaLabel: "LinkedIn",
          href: "https://www.linkedin.com/in/manovikramk",
        },
        { label: "Other", ariaLabel: "Other", href: "/contact" },
      ],
    },
  ];

  return (
    <div
      className="bg-dot-pattern min-h-screen"
      // style={{ fontFamily: "Gaegu, cursive" }}
    >
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
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<GalleryDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/design" element={<DesignWorks />} />
        <Route path="/writes" element={<Writes />} />
        <Route path="/writes/:slug" element={<WritingDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
