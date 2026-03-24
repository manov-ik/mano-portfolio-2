import React from "react";
import StickerPeel from "../components/StickerPeel";
import mano1 from "../assets/mano1.png";
import mano3 from "../assets/mano3.png";

const experienceData = [
  {
    dateRange: "Mar 2025 – Jul 2025",
    title: "3D Artist",
    company: "TIC Global Services",
    description:
      "Created high-quality 3D models and visual assets for branding and web projects.",
    tags: ["Blender", "3D Modeling"],
  },
  {
    dateRange: "Oct 2024 – Nov 2024",
    title: "Frontend Intern",
    company: "FLY91",
    description:
      "Developed a web app for employees to request cabs and flights.",
    tags: ["React", "JavaScript"],
  },
  {
    dateRange: "Apr 2024 – Apr 2025",
    title: "Graphic Designer",
    company: "QPo Cabs",
    description:
      "Designed the official logo, promotional posters, and graphic illustrations for QPo Cabs.",
    tags: ["Illustrator", "Figma"],
  },
];

const TimelineEntry = ({
  dateRange,
  title,
  company,
  description,
  tags,
  index,
}) => {
  const isLeft = index % 2 === 0;

  return (
    <div
      className="relative flex items-start w-full"
      style={{ fontFamily: "Gaegu, cursive" }}
    >
      {/* ── Desktop layout: alternating sides ── */}
      <div className="hidden md:flex w-full items-start gap-0">
        {/* Left slot */}
        <div
          className={`w-[calc(50%-24px)] ${isLeft ? "flex justify-end pr-8" : ""}`}
        >
          {isLeft && (
            <EntryCard
              dateRange={dateRange}
              title={title}
              company={company}
              description={description}
              tags={tags}
              index={index}
              align="right"
            />
          )}
        </div>

        {/* Center dot */}
        <div className="flex flex-col items-center shrink-0 w-12 pt-6">
          <div className="w-4 h-4 rounded-full border-2 border-[#7e57e2] bg-white z-10" />
        </div>

        {/* Right slot */}
        <div
          className={`w-[calc(50%-24px)] ${!isLeft ? "flex justify-start pl-8" : ""}`}
        >
          {!isLeft && (
            <EntryCard
              dateRange={dateRange}
              title={title}
              company={company}
              description={description}
              tags={tags}
              index={index}
              align="left"
            />
          )}
        </div>
      </div>

      {/* ── Mobile layout: all left ── */}
      <div className="flex md:hidden w-full items-start gap-4">
        {/* Dot + line */}
        <div className="flex flex-col items-center shrink-0 pt-6">
          <div className="w-3 h-3 rounded-full border-2 border-[#7e57e2] bg-white z-10" />
        </div>
        <div className="flex-1 pb-10">
          <EntryCard
            dateRange={dateRange}
            title={title}
            company={company}
            description={description}
            tags={tags}
            index={index}
            align="left"
          />
        </div>
      </div>
    </div>
  );
};

const EntryCard = ({
  dateRange,
  title,
  company,
  description,
  tags,
  index,
  align,
}) => (
  <div
    className={`group w-full max-w-sm border border-dashed border-gray-200 rounded-3xl p-5 flex flex-col gap-3 ${
      align === "right" ? "items-end text-right" : "items-start text-left"
    }`}
  >
    {/* Index + date row */}
    <div
      className={`flex items-center gap-3 w-full ${align === "right" ? "flex-row-reverse" : "flex-row"}`}
    >
      <span
        className="text-[48px] leading-none font-bold text-gray-100 group-hover:text-[#7e57e2]/40 transition-colors duration-300 select-none"
        style={{ fontWeight: 700 }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="text-xs text-[#7e57e2] bg-[#7e57e2]/10 px-2 py-1 rounded-full whitespace-nowrap">
        {dateRange}
      </span>
    </div>

    {/* Title */}
    <div>
      <h3 className="text-2xl font-bold text-black leading-tight">{title}</h3>
      {company && <p className="text-gray-400 text-base">{company}</p>}
    </div>

    {/* Description */}
    <p className="text-gray-400 text-base leading-relaxed">{description}</p>

    {/* Tags */}
    {tags && tags.length > 0 && (
      <div
        className={`flex flex-wrap gap-1.5 ${align === "right" ? "justify-end" : "justify-start"}`}
      >
        {tags.map((t) => (
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
);

const Experience = () => (
  <div className="relative w-full min-h-[calc(100vh-4rem)] overflow-hidden pt-16">
    {/* ── Header ── */}
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
      className="block drop-shadow-2xl drop-shadow-black/10 z-20 top-[58%] right-[0%] md:top-[60%] md:left-[8%] lg:top-[70%] lg:left-[14%]"
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
      className="block drop-shadow-2xl drop-shadow-black/10 z-20 top-[17%] right-[5%] md:top-[24%] md:right-[8%] lg:top-[25%] lg:right-[14%]"
    />
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
            Experience
          </h1>
        </div>
        <p className="text-gray-400 text-lg sm:text-xl max-w-xs sm:text-right leading-relaxed pb-2">
          Places I've worked at and things I've built along the way.
        </p>
      </div>
    </div>

    {/* ── Timeline ── */}
    <div className="px-6 sm:px-10 md:px-16 pb-24 max-w-5xl mx-auto">
      <div className="relative">
        {/* Vertical dashed line — desktop center, mobile left */}
        <div
          className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #e5e7eb 0px, #e5e7eb 8px, transparent 8px, transparent 16px)",
          }}
        />

        <div className="flex flex-col gap-10">
          {experienceData.map((item, i) => (
            <TimelineEntry key={i} {...item} index={i} />
          ))}
        </div>

        {/* End cap */}
        <div className="flex md:justify-center justify-start ml-[11px] md:ml-0 mt-4">
          <div className="w-3 h-3 rounded-full bg-gray-200" />
        </div>
      </div>

      <p
        className="text-sm text-gray-300 text-right mt-10"
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        {experienceData.length} {experienceData.length === 1 ? "role" : "roles"}
      </p>
    </div>
  </div>
);

export default React.memo(Experience);
