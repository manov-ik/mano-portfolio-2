import { Helmet } from "react-helmet-async";
import StickerPeel from "../components/StickerPeel";
import RotatingText from "../components/RotatingText";
import logo from "../assets/illustation 2.png";
import logo127001 from "../assets/logo127001.png";
import mano1 from "../assets/mano1.png";
import mano3 from "../assets/mano3.png";

export default function Home() {
  return (
    /* Relative + overflow-hidden prevents stickers from causing horizontal
      scroll */
    <>
      <Helmet>
        <title>Manovikram K - Developer, Designer &amp; ML Engineer</title>
        <meta name="description" content="Hi, I'm Manovikram K - a developer, designer, and ML engineer. Explore my projects, writings, and design work all in one place." />
      </Helmet>
      <div className="relative overflow-hidden w-full min-h-screen flex items-center justify-center px-6 py-16 sm:px-10 md:px-16">
        {/* Decorative sticker — left side, hidden on small screens */}
        <StickerPeel
          imageSrc={logo}
          width={160}
          rotate={-18}
          peelBackHoverPct={30}
          peelBackActivePct={40}
          shadowIntensity={0.15}
          lightingIntensity={0.01}
          initialPosition="center"
          peelDirection={40}
          className="block drop-shadow-2xl drop-shadow-black/10 top-[15%] left-[1%] md:top-[15%] md:left-[6%] lg:top-[22%] lg:left-[12%]"
        />
        {/* Bottom-left: illustration, tilted right */}
        <StickerPeel
          imageSrc={mano3}
          width={260}
          rotate={14}
          peelBackHoverPct={30}
          peelBackActivePct={40}
          shadowIntensity={0.15}
          lightingIntensity={0.01}
          initialPosition="center"
          peelDirection={40}
          className="block drop-shadow-2xl drop-shadow-black/10 bottom-[3%] left-[3%] md:top-[65%] md:left-[8%] lg:top-[67%] lg:left-[14%]"
        />

        {/* ── RIGHT stickers ────────────────────────────────── */}
        {/* Top-right: photo, tilted left */}
        <StickerPeel
          imageSrc={mano1}
          width={160}
          rotate={-28}
          peelBackHoverPct={30}
          peelBackActivePct={40}
          shadowIntensity={0.15}
          lightingIntensity={0.01}
          initialPosition="center"
          peelDirection={-40}
          className="block drop-shadow-2xl drop-shadow-black/10 top-[6%] right-[5%] md:top-[18%] md:right-[8%] lg:top-[25%] lg:right-[14%]"
        />
        {/* Bottom-right: photo, tilted right */}
        <StickerPeel
          imageSrc={logo127001}
          width={240}
          rotate={-18}
          peelBackHoverPct={30}
          peelBackActivePct={40}
          shadowIntensity={0.15}
          lightingIntensity={0.01}
          initialPosition="center"
          peelDirection={-40}
          className="block drop-shadow-2xl drop-shadow-black/10 bottom-[3%] right-[1%] md:top-[67%] md:right-[10%] lg:top-[75%] lg:right-[18%]"
        />

        {/* Hero content — centered */}
        {/* <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"> */}
        <div className="relative z-10 flex flex-col items-center text-center gap-2">
          {/* Hi I'm */}
          <div
            className="my-2  text-gray-500"
            style={{ fontFamily: "Gaegu, cursive" }}
          ></div>
          <p
            className="text-2xl sm:text-3xl text-gray-500"
            style={{ fontFamily: "Gaegu, cursive" }}
          >
            Hi, I’m
          </p>
          {/* BIG NAME */}
          <p
            className="text-[88px] sm:text-[110px] md:text-[130px] lg:text-[150px] leading-none tracking-tight text-black"
            style={{ fontFamily: "Gaegu, cursive", fontWeight: 700 }}
          >
            MANO
          </p>
          {/* Rotating role */}
          <div
            className="flex items-center justify-center gap-3 text-2xl sm:text-3xl mt-1"
            style={{ fontFamily: "Gaegu, cursive" }}
          >
            <span className="text-gray-500">a</span>
            <RotatingText
              texts={["Developer", "Creator", "Designer", "ML Engineer"]}
              mainClassName="px-4 py-1 rounded-lg bg-white shadow-lg -rotate-2 text-[#7e57e2] text-2xl sm:text-3xl"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </div>
          {/* Description */}
          <p
            className="text-gray-500 max-w-sm sm:max-w-md leading-relaxed mt-6 text-lg sm:text-xl"
            style={{ fontFamily: "Gaegu, cursive" }}
          >
            Explore who I am and what I do. Everything about me, in one place.
          </p>
          {/* CTA */}
          <div className="flex flex-row gap-4 mt-6 text-lg sm:text-xl">
            <a
              href="/about"
              className="px-6 py-2.5 sm:py-3 rounded-xl border border-black text-black hover:bg-black hover:shadow-lg hover:text-white duration-300 transition-all"
              style={{ fontFamily: "Gaegu, cursive" }}
            >
              About Me
            </a>
            <a
              href="/contact"
              className="px-6 py-2.5 sm:py-3 rounded-xl text-black hover:text-black hover:bg-white hover:shadow-lg duration-300 transition-all"
              style={{ fontFamily: "Gaegu, cursive" }}
            >
              Contact
            </a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
