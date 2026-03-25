import React from "react";
import { useParams, Link } from "react-router-dom";
import { galleryFolders } from "../data/galleryData";

export default function GalleryDetail() {
  const { id } = useParams();
  const folder = galleryFolders.find((f) => f.id === id);

  if (!folder) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa]"
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        <h1 className="text-[120px] font-bold mb-4 leading-none text-black">
          404
        </h1>
        <p className="text-3xl text-gray-400 mb-8">
          This memory seems to be missing.
        </p>
        <Link
          to="/gallery"
          className="text-2xl px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition-transform"
        >
          Back to folders
        </Link>
      </div>
    );
  }

  // Pre-defined rotations to ensure layout remains stable but looks "messy"
  const rotations = [
    "rotate-1",
    "-rotate-1",
    "rotate-2",
    "-rotate-2",
    "rotate-[0.5deg]",
    "-rotate-[1.5deg]",
  ];

  return (
    <div
      className="min-h-screen pb-32 pt-24 selection:bg-[#7e57e2]/20"
      style={{ fontFamily: "Gaegu, cursive" }}
    >
      <main className="max-w-6xl mx-auto px-6">
        {/* ── Header Area ── */}
        <div className="mb-4">
          <Link
            to="/gallery"
            className="inline-block text-gray-400 hover:text-black transition-colors duration-200 text-xl mb-4 mt-2"
          >
            back to archives
          </Link>

          <header className="relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-[#b090ff] text-2xl font-bold tracking-widest block mb-2">
                  FOLDER / {folder.id.toUpperCase()}
                </span>
                <h1 className="text-6xl sm:text-8xl font-bold leading-none text-black">
                  {folder.title}
                </h1>
              </div>
              <p className="text-2xl text-gray-500 max-w-md md:text-right leading-tight">
                {folder.description}
              </p>
            </div>

            {/* Hand-drawn divider effect */}
            <div className="mt-16" />
          </header>
        </div>

        {/* ── Photo Scatter Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {[...folder.images]
            .sort((a, b) =>
              b.name.localeCompare(a.name, undefined, { numeric: true }),
            )
            .map((img, i) => {
              const rotation = rotations[i % rotations.length];
              return (
                <Link target="_blank" to={img.url}>
                  <div
                    key={i}
                    className={`group relative bg-white p-3 pb-10 shadow-lg transition-all duration-500 hover:z-50 ${rotation}`}
                  >
                    {/* Decorative Tape (Randomized subtle color/angle) */}
                    {/* <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#7e57e2]/5 border border-white/20 backdrop-blur-[2px] rotate-1 z-20 group-hover:bg-[#7e57e2]/15 transition-colors" /> */}

                    {/* The "Print" */}
                    <div className="aspect-4/5 overflow-hidden bg-gray-50 relative">
                      <img
                        src={img.url}
                        alt={`${folder.title} print ${img.name}`}
                        className="w-full h-full object-cover  "
                        loading="lazy"
                      />
                      {/* Grainy Overlay */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay  " />
                    </div>

                    {/* Bottom Caption (Handwritten style) */}
                    <div className="absolute bottom-2 left-4 right-4 flex justify-between items-center text-gray-400">
                      <span
                        className="text-lg truncate max-w-full"
                        title={img.name}
                      >
                        img_{String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>

        {/* ── Bottom Navigation ── */}
        <footer className="mt-32 pt-20 text-center">
          <Link to="/gallery" className="group inline-block">
            <p className="text-gray-400 text-2xl mb-2">finished exploring?</p>
            <span className="text-5xl sm:text-7xl font-bold group-hover:text-[#7e57e2] transition-colors">
              close folder
            </span>
          </Link>
          <p className="mt-8 text-gray-300 text-lg">
            {folder.images.length} items collected in this set.
          </p>
        </footer>
      </main>
    </div>
  );
}
