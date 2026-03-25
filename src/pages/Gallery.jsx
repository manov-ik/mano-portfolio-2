import React from "react";
import { Link } from "react-router-dom";
import { galleryFolders } from "../data/galleryData";

const GalleryStack = ({ folder, index }) => {
  // Alternate rotations for a scattered look
  const rotations = ["rotate-2", "-rotate-3", "rotate-1", "-rotate-1"];
  const rotation = rotations[index % rotations.length];

  return (
    <Link
      to={`/gallery/${folder.id}`}
      className={`group relative block p-4 transition-transform duration-500 hover:scale-105 max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-none mx-auto w-full ${rotation}`}
    >
      {/* Stacked Effect (Background Cards) */}
      <div className="absolute inset-0 bg-white border border-gray-200 shadow-sm translate-x-2 translate-y-2 -rotate-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-500" />
      <div className="absolute inset-0 bg-white border border-gray-200 shadow-sm -translate-x-1 translate-y-1 rotate-1 group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-500" />

      {/* Main Card */}
      <div className="relative bg-white p-3 pb-12 shadow-md border border-gray-100 z-10">
        {/* Washi Tape Accent */}
        {/* <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-[#7e57e2]/10 backdrop-blur-sm rotate-[-2deg] border border-white/20 z-20" /> */}

        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src={folder.coverImage}
            alt={folder.title}
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>

        {/* Caption Area */}
        <div
          className="absolute bottom-0 left-0 right-0 p-4"
          style={{ fontFamily: "Gaegu, cursive" }}
        >
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-bold leading-none text-black">
                {folder.title}
              </h3>
            </div>
            <span className="text-lg text-[#7e57e2]  font-bold">
              {folder.images.length} imgs
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Gallery() {
  return (
    <div className="min-h-screen pt-16 selection:bg-[#7e57e2]/20">
      <header className="px-6 max-w-6xl mx-auto">
        <div
          className="px-6 sm:px-10 md:px-16 pt-16 pb-10"
          style={{ fontFamily: "Gaegu, cursive" }}
        >
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xl text-gray-400 mb-1">visual archives</p>
              <h1 className="text-[72px] sm:text-[96px] md:text-[120px] leading-none tracking-tight text-black font-bold">
                MOMENTS
              </h1>
            </div>
            <p className="text-gray-400 text-lg sm:text-xl max-w-xs sm:text-right leading-relaxed pb-2">
              A scrapbook of frames I didn't want to forget.
            </p>
          </div>
          {/* Hand-drawn style divider */}
          {/* <div className="max-w-5xl mx-auto mt-6 border-b-2 border-dashed border-gray-200 w-full" /> */}
        </div>
      </header>

      <main className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20">
          {galleryFolders.map((folder, i) => (
            <GalleryStack key={folder.id} folder={folder} index={i} />
          ))}
        </div>
      </main>

      <footer
        className="py-20 text-center opacity-30"
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        <p className="text-xl">click to shuffle through the memories</p>
      </footer>
    </div>
  );
}
