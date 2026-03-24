import React from "react";
import mano1 from "../assets/mano1.png";
import StickerPeel from "../components/StickerPeel";

const educationData = [
  {
    dateRange: "2022 – Present",
    title: "B.E. Mechanical Engineering",
    company: "Rajalakshmi Engineering College",
    description:
      "Pursuing a degree in Mechanical Engineering while actively building software projects and leading tech initiatives.",
    tags: ["Chennai, India"],
  },
];

const achievementsData = [
  {
    dateRange: "2024 – 2025",
    title: "Vice President",
    company: "DEVS REC Club",
    description:
      "Led tech initiatives in one of REC's largest tech clubs, impacting 2000+ members through projects, innovation, and partnerships.",
    tags: ["Leadership", "Community"],
  },
];

const Card = ({ dateRange, title, company, description, tags, index }) => (
  <div
    className="group flex items-start gap-4 py-6 px-4 border border-dashed border-gray-200 rounded-3xl h-full"
    style={{ fontFamily: "Gaegu, cursive" }}
  >
    <span
      className="text-[56px] leading-none font-bold text-gray-100 group-hover:text-[#7e57e2]/40 transition-colors duration-300 select-none min-w-[56px] text-right shrink-0"
      style={{ fontWeight: 700 }}
    >
      {String(index + 1).padStart(2, "0")}
    </span>

    <div className="flex flex-col flex-1 pt-1 gap-2">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="text-xs text-[#7e57e2] bg-[#7e57e2]/10 px-2 py-1 rounded-full">
          {dateRange}
        </span>
        {tags?.[0] && (
          <span className="text-xs text-gray-400 border border-dashed border-gray-200 px-2 py-0.5 rounded-full">
            {tags[0]}
          </span>
        )}
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-black leading-tight">
        {title}
        {company && (
          <span className="text-gray-400 font-normal">, {company}</span>
        )}
      </h3>

      <p className="text-gray-400 text-base leading-relaxed">{description}</p>

      {tags && tags.length > 1 && (
        <div className="flex flex-wrap gap-1.5 mt-1">
          {tags.slice(1).map((t) => (
            <span
              key={t}
              className="text-[11px] text-gray-400 border border-dashed border-gray-200 px-2 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Education = () => (
  <div className="relative w-full overflow-hidden min-h-[calc(100vh-4rem)] pt-16">
    {/* ── Header ── */}
    <div
      className="px-6 sm:px-10 md:px-16 pt-16 pb-10"
      style={{ fontFamily: "Gaegu, cursive" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="text-xl text-gray-400 mb-1">here is my</p>
          <h1
            className="text-[72px] sm:text-[96px] md:text-[120px] leading-none tracking-tight text-black"
            style={{ fontWeight: 700 }}
          >
            Education
          </h1>
        </div>
        <p className="text-gray-400 text-lg sm:text-xl max-w-xs sm:text-right leading-relaxed pb-2">
          Where I studied and the milestones I've hit along the way.
        </p>
      </div>
    </div>

    {/* ── Education cards ── */}
    <div className="px-6 sm:px-10 md:px-16 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {educationData.map((item, i) => (
          <Card key={i} {...item} index={i} />
        ))}
      </div>
    </div>

    {/* ── Achievements section ── */}
    <div
      className="px-6 sm:px-10 md:px-16 pt-16 pb-6 max-w-5xl mx-auto"
      style={{ fontFamily: "Gaegu, cursive" }}
    >
      <div className="border-t border-dashed border-gray-200 pt-12 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <p className="text-xl text-gray-400 mb-1">and my</p>
            <h2
              className="text-[56px] sm:text-[72px] md:text-[88px] leading-none tracking-tight text-black"
              style={{ fontWeight: 700 }}
            >
              Achievements
            </h2>
          </div>
          <p className="text-gray-400 text-lg sm:text-xl max-w-xs sm:text-right leading-relaxed pb-2">
            Things I'm proud of.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievementsData.map((item, i) => (
            <Card key={i} {...item} index={i} />
          ))}
        </div>
      </div>
    </div>
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
      className="block drop-shadow-2xl drop-shadow-black/10 z-20 top-[50%] right-[5%] md:top-[35%] md:right-[8%] lg:top-[35%] lg:right-[14%]"
    />
  </div>
);

export default React.memo(Education);
