import CardNav from "./components/CardNav";
import StickerPeel from "./components/StickerPeel";
import logo from "./assets/illustation 2.png";

function App() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-dot-pattern flex items-center justify-center p-4">
        <CardNav
          // logo={logo}
          logoAlt="Company Logo"
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
          theme="light"
        />

        <StickerPeel
          imageSrc={logo}
          width={200}
          rotate={-18}
          peelBackHoverPct={30}
          peelBackActivePct={40}
          shadowIntensity={0.1}
          lightingIntensity={0.01}
          initialPosition={{ x: -500, y: 200 }}
          peelDirection={40}
        />
      </div>
    </>
  );
}

export default App;
