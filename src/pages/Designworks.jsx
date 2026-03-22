import { DESIGN_WORKS } from "../data/projects";
import Masonry from "../components/Masonry";

// Bento layout pattern — cycles through span classes for visual variety
// Pattern: wide, normal, normal, tall-wide, normal, normal, wide ...
const SPAN_PATTERN = [
  "md:col-span-2", // wide
  "md:col-span-1", // normal
  "md:col-span-1", // normal
  "md:col-span-1", // normal
  "md:col-span-2", // wide
  "md:col-span-1", // normal
];

const DesignWorks = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] pt-16">
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
              Design
            </h1>
          </div>
          <p className="text-gray-400 text-lg sm:text-xl max-w-xs sm:text-right leading-relaxed pb-2">
            UI/UX, branding, and visual work — things made to be seen.
          </p>
        </div>

        {/* Decorative ruled lines */}
        <div className="max-w-5xl mx-auto mt-6 flex flex-col gap-1.5">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-px bg-gray-100"
              style={{ opacity: 1 - i * 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* ── Bento Grid ── */}
      <div className="px-6 sm:px-10 md:px-16 pb-24 max-w-5xl mx-auto">
        {DESIGN_WORKS.length === 0 ? (
          <div
            className="flex flex-col items-center text-center gap-2 py-24"
            style={{ fontFamily: "Gaegu, cursive" }}
          >
            <p className="text-2xl text-gray-400">nothing here yet</p>
            <p
              className="text-[72px] sm:text-[90px] leading-none tracking-tight text-black"
              style={{ fontWeight: 700 }}
            >
              check back soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
            {DESIGN_WORKS.map((work, i) => {
              const spanClass = SPAN_PATTERN[i % SPAN_PATTERN.length];
              const isWide = spanClass === "md:col-span-2";

              return (
                <a
                  key={work.label}
                  href={work.link || undefined}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative overflow-hidden rounded-3xl border border-dashed border-gray-300 ${spanClass}`}
                >
                  {/* Image */}
                  <img
                    src={work.imgSrc}
                    alt={work.label}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Label overlay — slides up on hover */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <div
                      className="bg-white/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between"
                      style={{ fontFamily: "Gaegu, cursive" }}
                    >
                      <span className="text-black font-bold text-lg leading-none">
                        {work.label}
                      </span>
                      {work.link && (
                        <span className="text-[#7e57e2] text-sm">↗</span>
                      )}
                    </div>
                  </div>

                  {/* Corner index */}
                  <span
                    className="absolute top-3 left-3 text-white/40 text-xs select-none"
                    style={{ fontFamily: "Gaegu, cursive" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>
              );
            })}
          </div>
        )}

        <p
          className="text-sm text-gray-300 text-right mt-6"
          style={{ fontFamily: "Gaegu, cursive" }}
        >
          {DESIGN_WORKS.length} {DESIGN_WORKS.length === 1 ? "work" : "works"}
        </p>
      </div>
    </div>
  );
};

function DesignMasonry() {
  return (
    <div className="p-4">
      <Masonry
        items={DESIGN_WORKS}
        ease="power4.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
      />
    </div>
  );
}

export default DesignMasonry;
