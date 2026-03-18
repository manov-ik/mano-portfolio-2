import CardNav from "../components/CardNav";
import StickerPeel from "../components/StickerPeel";
import RotatingText from "../components/RotatingText";
import logo from "../assets/illustation 2.png";
import mano4 from "../assets/mano2.png";

export default function Home() {
  return (
    <>
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

      <StickerPeel
        imageSrc={mano4}
        width={200}
        rotate={18}
        peelBackHoverPct={30}
        peelBackActivePct={40}
        shadowIntensity={0.1}
        lightingIntensity={0.01}
        initialPosition={{ x: -100, y: 200 }}
        peelDirection={40}
      />
      <div className="flex flex-col gap-8 items-start">
        <div className="left-0 items-center flex text-center text-6xl gap-2">
          <p
            style={{
              fontFamily: "Gaegu, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
            }}
          >
            This is MANO
          </p>

          <RotatingText
            texts={["Developer", "Creator", "Designer", "ML Engineer"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-purple-400 text-white bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            style={{
              fontFamily: "Gaegu, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
            }}
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </div>
        <p
          className="text-lg w-[90%] sm:w-[80%] md:w-[60%] text-left"
          style={{
            fontFamily: "Gaegu, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
          }}
        >
          I’m Manovikram K, a final year engineering student focused on building
          optimal and scalable systems. As a designer and developer, I aim to
          develop solutions that are clean, minimal and highly functional. My
          work involves full-stack development and Machine Learning to develop
          structured, end-to-end applications that go from idea to deployment.
        </p>
      </div>
    </>
  );
}
