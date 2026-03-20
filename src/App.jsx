import Home from "./pages/Home";
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
        { label: "Experience", ariaLabel: "My Experience" },
        { label: "Education", ariaLabel: "My Education" },
      ],
    },
    {
      label: "Created",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Projects", ariaLabel: "Projects" },
        { label: "Writes", ariaLabel: "Writings" },
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
    <>
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

      <div className="bg-dot-pattern min-h-screen">
        <Home />
      </div>
    </>
  );
}

export default App;
