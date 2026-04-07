import React from "react";
import { Helmet } from "react-helmet-async";
import StickerPeel from "../components/StickerPeel";
import mano1 from "../assets/mano1.png";
import TextPressure from "../components/TextPressure";

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

const educationData = [
  {
    dateRange: "2022 – Present",
    title: "B.E. Mechanical Engineering",
    company: "Rajalakshmi Engineering College",
    description:
      "Pursuing a degree in Mechanical Engineering while actively building software projects and leading tech initiatives.",
    tags: ["Chennai, Tamil Nadu, India"],
  },
  {
    dateRange: "2009 – 2022",
    title: "1st to 12th Standard",
    company: "CK School",
    description:
      "From where it all began - the foundation for most of what I do. From programming to design, including sculpture, painting, and coding.",
    tags: ["Cuddalore, Tamil Nadu, India"],
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
  {
    dateRange: "Mar 2024",
    title: "Build Masters",
    company: "Bootup’24, REC",
    description:
      "Secured 1st Prize by completing a full PC build in just 5 minutes and 54 seconds.",
    tags: ["PC Building", "Competition"],
  },
  {
    dateRange: "Sep 2024",
    title: "Shark Tank",
    company: "IEEE, REC",
    description: "Secured 2nd Prize. Pitched an idea and won the competition.",
    tags: ["Innovation"],
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

        <div className="flex flex-col items-center shrink-0 w-12 pt-6">
          <div className="w-4 h-4 rounded-full border-2 border-[#7e57e2] bg-white z-10" />
        </div>

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

    <div>
      <h3 className="text-2xl font-bold text-black leading-tight">{title}</h3>
      {company && <p className="text-gray-400 text-base">{company}</p>}
    </div>

    <p className="text-gray-400 text-base leading-relaxed">{description}</p>

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

const languages = ["Python", "Java", "Go", "C"];
const frameworks = ["AI", "ML", "DL", "Django", "React", "FastAPI"];
const tools = ["MySQL", "PostgreSQL", "Git", "GitHub", "Power BI"];
const design = ["Blender", "Figma", "Photoshop", "Illustrator"];
const hobbies = ["Book Reading", "Sketching", "Craft"];
const other = [
  "Developer",
  "Designer / Artist",
  "Psychology",
  "Business",
  "IOT / Low-Level Dev",
];

const About = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] overflow-hidden pt-16">
      <Helmet>
        <title>About - Manovikram K</title>
        <meta
          name="description"
          content="Learn more about Manovikram K - a curious developer and designer from Chennai, building things he actually cares about. Skills, experience, and education."
        />
        <link rel="canonical" href="https://manovik.netlify.app/about" />
      </Helmet>
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
        className="block drop-shadow-2xl drop-shadow-black/10 z-20 top-[15%] right-[5%] md:top-[2%] md:right-[8%] lg:top-[6%] lg:right-[14%]"
      />

      {/* ── About Me Section ── */}
      <div
        className="px-6 sm:px-10 md:px-16 pt-16 pb-10"
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xl text-gray-400 mb-1">hello there,</p>
            <h1
              className="text-[72px] sm:text-[96px] md:text-[120px] leading-none tracking-tight text-black"
              style={{ fontWeight: 700 }}
            >
              About Me
            </h1>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-6 pl-1 sm:pl-2">
          <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-3xl text-justify">
            Hello, I’m Manovikram K. A curious guy in his early 20s trying to
            spend his time doing things he actually cares about. I like building
            things, but I’m not just about code.
            <br />
            <br />
            I enjoy understanding how things work - whether it’s software,
            design, or just how people think. Most of what I do comes from
            solving my own problems or curiosity turning into something real.
            <br />
            <br />
            Outside of that - I’m into music, books, random ideas, and figuring
            life out one step at a time. I don’t have everything planned. I just
            try to stay consistent, keep learning, and build things that matter
            to me.
            {/* 
            I’m Manovikram K, a final year engineering student focused on
            building optimal and scalable systems. As a designer and developer,
            I aim to develop solutions that are clean, minimal and highly
            functional. My work involves full-stack development and Machine
            Learning to develop structured, end-to-end applications that go from
            idea to deployment. 
            */}
          </p>
          <p className="text-black text-md lg:text-lg mt-4 lg:mt-6">
            CREATE.DEVELOP.DEPLOY.
          </p>
          <p className="text-black text-md lg:text-lg">
            #createsomethingdifferent
          </p>
        </div>
      </div>

      {/* ── Skills Section ── */}

      {/* ── Skills Section: The Hanging Gallery ── */}
      {/* ── The Bento Box Archive ── */}

      <section
        className="px-6 py-16 sm:pt-0 sm:pb-12 "
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        <div
          className="px-6 sm:px-10 md:px-16 pt-8 pb-10"
          style={{ fontFamily: "Gaegu, cursive" }}
        >
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2
                className="text-[56px] sm:text-[72px] md:text-[88px] leading-none tracking-tight text-black"
                style={{ fontWeight: 700 }}
              >
                The
                <br />
                Breakdown
                {/* <span className="text-[#7e57e2]">Artifacts</span> */}
              </h2>
            </div>
            <p className="text-gray-400 text-lg sm:text-xl max-w-xs sm:text-right leading-relaxed pb-2">
              Everything I build, the tools I use, and where my head is at
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-4">
          {/* The Bento Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto">
            {/* 1. CORE STACK (Spans 2 columns, large and prominent) */}
            <div className="md:col-span-2 bg-white rotate-2 p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-black border-b-2 border-dashed border-gray-100 pb-3 sm:pb-4 mb-6 sm:mb-8">
                Core Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                <div>
                  <h4 className="text-xl sm:text-2xl  text-gray-400 mb-3 sm:mb-4">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {languages.map((s) => (
                      <span
                        key={s}
                        className="px-3 sm:px-4 py-1.5 bg-gray-50 rounded-xl text-lg sm:text-2xl text-gray-700 border border-gray-100 cursor-default"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl  text-gray-400 mb-3 sm:mb-4">
                    Frameworks & AI
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {frameworks.map((s) => (
                      <span
                        key={s}
                        className="px-3 sm:px-4 py-1.5 bg-[#7e57e2]/10 text-[#7e57e2] rounded-xl text-lg sm:text-2xl border border-[#7e57e2]/20 cursor-default"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. THE VISION / LONG TERM (High Contrast Dark Mode, Spans 2 rows on desktop) */}
            <div className="bg-[#111] -rotate-1 text-white p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl transition-shadow duration-300 md:row-span-2 flex flex-col justify-between group">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 border-b-2 border-dashed border-gray-800 pb-3 sm:pb-4 text-gray-100">
                  Vision & Focus
                </h3>
                <ul className="space-y-4 sm:space-y-5">
                  {other.map((item, i) => (
                    <li
                      key={i}
                      className="text-xl sm:text-2xl flex items-center gap-3 sm:gap-4 text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-dashed border-gray-800 text-gray-400 text-xl sm:text-2xl italic flex flex-col gap-1 sm:gap-2">
                <span>Loves to Talk.</span>
                <span>There are lot to Learn.</span>
              </div>
            </div>

            {/* 3. TOOLS & DESIGN (Compact card) */}
            <div className="bg-white p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">
                Tools & Design
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1">
                  {tools.map((s, i, arr) => (
                    <span
                      key={s}
                      className="text-base sm:text-xl text-gray-600"
                    >
                      {s}
                      {i !== arr.length - 1 ? (
                        <span className="text-gray-300 ml-2 sm:ml-3">/</span>
                      ) : (
                        ""
                      )}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1">
                  {design.map((s, i, arr) => (
                    <span
                      key={s}
                      className="text-base sm:text-xl text-gray-600"
                    >
                      {s}
                      {i !== arr.length - 1 ? (
                        <span className="text-gray-300 ml-2 sm:ml-3">/</span>
                      ) : (
                        ""
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. HOBBIES (Soft color accent) */}
            <div className="bg-[#f4f1fa] p-6 sm:p-8 md:p-10 border border-[#eae5f5] shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">
                Off-screen
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                {hobbies.map((s) => (
                  <span
                    key={s}
                    className="text-lg sm:text-2xl text-[#7e57e2] px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience Section ── */}
      <div
        className="px-6 sm:px-10 md:px-16 pt-8 pb-10"
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2
              className="text-[56px] sm:text-[72px] md:text-[88px] leading-none tracking-tight text-black"
              style={{ fontWeight: 700 }}
            >
              Experience
            </h2>
          </div>
          <p className="text-gray-400 text-lg sm:text-xl max-w-xs sm:text-right leading-relaxed pb-2">
            Places I've worked at and things I've built along the way.
          </p>
        </div>
      </div>

      <div className="px-6 sm:px-10 md:px-16 pb-16 max-w-5xl mx-auto">
        <div className="relative">
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
          <div className="flex md:justify-center justify-start ml-[11px] md:ml-0 mt-4">
            <div className="w-3 h-3 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>

      {/* ── Education Section ── */}
      <div
        className="px-6 sm:px-10 md:px-16 pt-8 pb-10"
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2
              className="text-[56px] sm:text-[72px] md:text-[88px] leading-none tracking-tight text-black"
              style={{ fontWeight: 700 }}
            >
              Education
            </h2>
          </div>
          <p className="text-gray-400 text-lg sm:text-xl max-w-xs sm:text-right leading-relaxed pb-2">
            Where I studied and the milestones I've hit along the way.
          </p>
        </div>
      </div>

      <div className="px-6 sm:px-10 md:px-16 max-w-5xl mx-auto pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educationData.map((item, i) => (
            <Card key={i} {...item} index={i} />
          ))}
        </div>
      </div>

      {/* ── Achievements Section ── */}
      <div
        className="px-6 sm:px-10 md:px-16 pt-8 pb-10"
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
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
      </div>

      <div className="px-6 sm:px-10 md:px-16 max-w-5xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievementsData.map((item, i) => (
            <Card key={i} {...item} index={i} />
          ))}
        </div>
      </div>
      <p
        className="text-2xl text-center m-auto text-gray-400"
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        this is me
      </p>
      <TextPressure
        text="MANOVIKRAM K"
        flex
        alpha={false}
        stroke={false}
        width
        weight
        italic
        textColor="#000"
        strokeColor="#5227FF"
        minFontSize={36}
      />
    </div>
  );
};

export default React.memo(About);
