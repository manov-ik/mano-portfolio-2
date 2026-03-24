import { Link } from "react-router-dom";
import { useProjects } from "../hooks/useProjects";

// ── Project row: Staggered & Rotated ───────────────────────────────────────────
const ProjectRow = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group relative block mb-12 sm:mb-24 ${isEven ? "sm:pr-20" : "sm:pl-20"}`}
    >
      {/* Background Index Number - The "Anchor" */}
      <span
        className={`absolute -top-10 sm:-top-20 font-bold text-[120px] sm:text-[200px] leading-none text-gray-100/50 group-hover:text-[#7e57e2]/10 transition-colors duration-700 select-none z-0 
        ${isEven ? "-left-4" : "-right-4"}`}
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div
        className={`relative z-10 flex flex-col md:flex-row gap-6 p-2 bg-white/50 transition-all duration-500 
        ${isEven ? "rotate-1 group-hover:-rotate-1" : "-rotate-1 group-hover:rotate-1"}`}
      >
        {/* Visual Container with "Taped" Look */}
        <div className="relative w-full md:w-2/5 aspect-[4/3] overflow-hidden rounded-sm shadow-sm group-hover:shadow-xl transition-shadow duration-500">
          {/* Decorative Tape */}
          {/* <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-16 h-8 bg-gray-200/40 rotate-2 z-20 mix-blend-multiply" /> */}

          {project.image_url ? (
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
          ) : (
            <div className="w-full h-full bg-gray-50 flex items-center justify-center text-gray-300">
              No Preview
            </div>
          )}
        </div>

        {/* Content Section */}
        <div
          className="flex-1 flex flex-col justify-center py-4"
          style={{ fontFamily: "Gaegu, cursive" }}
        >
          <div className="flex items-center">
            <span className="text-lg text-[#7e57e2] font-bold ">
              {project.year}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-3 group-hover:text-[#7e57e2] transition-colors">
            {project.title}
          </h2>

          <p className="text-xl text-gray-500 leading-tight mb-6 max-w-md">
            {project.short_description}
          </p>

          {/* Tech "Scraps" */}
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.slice(0, 5).map((t) => (
              <span
                key={t}
                className="bg-gray-100 text-gray-600 px-3 py-0.5 text-lg rounded-sm "
              >
                #{t.toLowerCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

function Projects() {
  const { projects, loading, error, refetch } = useProjects();

  return (
    <div className="min-h-screen selection:bg-[#7e57e2]/20">
      {/* ── Quirky Header ── */}
      <header className="px-6 pt-16  max-w-6xl mx-auto ">
        <div
          className="px-6 sm:px-10 md:px-16 pt-16 pb-10 "
          style={{ fontFamily: "Gaegu, cursive" }}
        >
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xl text-gray-400 mb-1">here are my</p>
              <h1
                className="text-[72px] sm:text-[96px] md:text-[120px] leading-none tracking-tight text-black"
                style={{ fontWeight: 700 }}
              >
                SELECTED
                <br />
                WORKS
                {/* <span className="text-[#7e57e2]">.</span> */}
              </h1>
            </div>
            <p className="text-gray-400 text-lg sm:text-xl max-w-xs sm:text-right leading-relaxed pb-2">
              A collection of pixels, logic, and late-night caffeine.
            </p>
          </div>
        </div>
      </header>

      {/* ── Interactive List ── */}
      <main className="px-6 py-20 max-w-5xl mx-auto overflow-hidden">
        {loading ? (
          <div
            className="text-center py-20 animate-pulse text-4xl"
            style={{ fontFamily: "Gaegu, cursive" }}
          >
            fetching ideas...
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <button
              onClick={refetch}
              className="text-4xl hover:line-through"
              style={{ fontFamily: "Gaegu, cursive" }}
            >
              Error. Try again?
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            {projects
              .sort((a, b) => (b.order_index ?? 0) - (a.order_index ?? 0))
              .map((project, i) => (
                <ProjectRow key={project.slug} project={project} index={i} />
              ))}
          </div>
        )}
      </main>

      {/* Footer Stat */}
      {!loading && (
        <footer className="p-10 text-center ">
          <p
            className="text-lg text-gray-300"
            style={{ fontFamily: "Gaegu, cursive" }}
          >
            End of the line - {projects.length} artifacts found.
          </p>
        </footer>
      )}
    </div>
  );
}

export default Projects;
// import { Link } from "react-router-dom";
// import { useProjects } from "../hooks/useProjects";
// // ── Project row ─────────────────────────────────────────────────────────────────
// const ProjectRow = ({ project, index }) => (
//   <Link to={`/projects/${project.slug}`} className="group block">
//     <div
//       className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 py-6 px-4 sm:px-6 border border-dashed border-gray-300 rounded-3xl"
//       style={{ fontFamily: "Gaegu, cursive" }}
//     >
//       {/* Big faded index number */}
//       <span
//         className="hidden sm:block text-[56px] sm:text-[72px] leading-none font-bold text-gray-100 group-hover:text-[#7e57e2]/40 transition-colors duration-300 select-none min-w-[60px] sm:min-w-[80px] text-right"
//         style={{ fontWeight: 700 }}
//       >
//         {String(index + 1).padStart(2, "0")}
//       </span>

//       {/* Thumbnail */}
//       <div className="w-full sm:w-56 h-48 sm:h-36 shrink-0 overflow-hidden rounded-2xl bg-gray-50">
//         {project.image_url ? (
//           <img
//             src={project.image_url}
//             alt={project.title}
//             loading="lazy"
//             decoding="async"
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
//             No image
//           </div>
//         )}
//       </div>

//       {/* Body */}
//       <div className="flex flex-col flex-1 pt-1 w-full">
//         <div className="flex justify-between items-center mb-3">
//           <span className="text-xs text-[#7e57e2] bg-[#7e57e2]/10 px-2 py-1 rounded-full">
//             {project.year}
//           </span>
//           <span className="text-xs text-gray-400">{project.tech_stack[0]}</span>
//         </div>

//         <h2 className="text-2xl sm:text-3xl font-bold text-black leading-tight mb-2">
//           {project.title}
//         </h2>

//         <p className="text-gray-400 text-base flex-1 mb-4 line-clamp-2 leading-relaxed">
//           {project.short_description}
//         </p>

//         <div className="flex flex-wrap gap-1.5 mt-auto">
//           {project.tech_stack.slice(0, 4).map((t) => (
//             <span
//               key={t}
//               className="text-[11px] text-gray-400 border border-dashed border-gray-300 px-2 py-0.5 rounded-full hover:bg-black hover:text-white transition-colors duration-300 cursor-default"
//             >
//               {t}
//             </span>
//           ))}
//           {project.tech_stack.length > 4 && (
//             <span className="text-[11px] text-gray-300 px-2 py-0.5">
//               +{project.tech_stack.length - 4} more
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   </Link>
// );

// // ── Page ──────────────────────────────────────────────────────────────────────
// function Projects() {
//   const { projects, loading, error, refetch } = useProjects();

//   return (
//     <div className="min-h-[calc(100vh-4rem)] pt-16">
//       {/* ── Header ── */}
//       <div
//         className="px-6 sm:px-10 md:px-16 pt-16 pb-10"
//         style={{ fontFamily: "Gaegu, cursive" }}
//       >
//         <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
//           <div>
//             <p className="text-xl text-gray-400 mb-1">here are my</p>
//             <h1
//               className="text-[72px] sm:text-[96px] md:text-[120px] leading-none tracking-tight text-black"
//               style={{ fontWeight: 700 }}
//             >
//               Projects
//             </h1>
//           </div>
//           <p className="text-gray-400 text-lg sm:text-xl max-w-xs sm:text-right leading-relaxed pb-2">
//             Things I've built — from AI systems to web apps and beyond.
//           </p>
//         </div>

//         {/* Decorative ruled lines */}
//       </div>

//       {/* ── Grid ── */}
//       <div className="px-6 sm:px-10 md:px-16 pb-24 max-w-5xl mx-auto">
//         {loading && (
//           <div
//             className="flex flex-col items-center gap-3 text-center py-20"
//             style={{ fontFamily: "Gaegu, cursive" }}
//           >
//             <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#7e57e2]" />
//             <p className="text-2xl text-gray-400">loading projects...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div
//             className="flex flex-col items-center text-center gap-2 py-20"
//             style={{ fontFamily: "Gaegu, cursive" }}
//           >
//             <p className="text-2xl sm:text-3xl text-gray-400">
//               something went wrong
//             </p>
//             <p
//               className="text-[88px] sm:text-[110px] leading-none tracking-tight text-black"
//               style={{ fontWeight: 700 }}
//             >
//               oops.
//             </p>
//             <p className="text-gray-400 mt-4 text-lg max-w-sm">{error}</p>
//             <button
//               onClick={refetch}
//               className="mt-6 px-6 py-2.5 rounded-xl border border-black text-black hover:bg-black hover:text-white hover:shadow-lg duration-300 transition-all text-lg"
//               style={{ fontFamily: "Gaegu, cursive" }}
//             >
//               Try Again
//             </button>
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             {projects.length === 0 ? (
//               <div
//                 className="flex flex-col items-center text-center gap-2 py-24"
//                 style={{ fontFamily: "Gaegu, cursive" }}
//               >
//                 <p className="text-2xl text-gray-400">nothing here yet</p>
//                 <p
//                   className="text-[72px] sm:text-[90px] leading-none tracking-tight text-black"
//                   style={{ fontWeight: 700 }}
//                 >
//                   check back soon.
//                 </p>
//               </div>
//             ) : (
//               <>
//                 <div className="flex flex-col gap-4">
//                   {projects
//                     .sort((a, b) => (b.order_index ?? 0) - (a.order_index ?? 0))
//                     .map((project, i) => (
//                       <ProjectRow
//                         key={project.slug}
//                         project={project}
//                         index={i}
//                       />
//                     ))}
//                 </div>
//                 <p
//                   className="text-sm text-gray-300 text-right mt-6"
//                   style={{ fontFamily: "Gaegu, cursive" }}
//                 >
//                   {projects.length}{" "}
//                   {projects.length === 1 ? "project" : "projects"}
//                 </p>
//               </>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Projects;

// import { Link } from "react-router-dom";
// import { useProjects } from "../hooks/useProjects";

// // Deterministic rotations cycling by index — no randomness on render
// const ROTATIONS = [-3, 2.5, -1.5, 3, -2, 1.5, -2.5, 2, -1, 3.5];

// // ── Polaroid card ─────────────────────────────────────────────────────────────
// const PolaroidCard = ({ project, index }) => {
//   const rotation = ROTATIONS[index % ROTATIONS.length];

//   return (
//     <Link
//       to={`/projects/${project.slug}`}
//       className="group block"
//       style={{
//         transform: `rotate(${rotation}deg)`,
//         transition: "transform 0.3s ease, box-shadow 0.3s ease",
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform = "rotate(0deg) translateY(-6px)";
//         e.currentTarget.style.zIndex = "10";
//         e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = `rotate(${rotation}deg)`;
//         e.currentTarget.style.zIndex = "1";
//         e.currentTarget.style.boxShadow = "none";
//       }}
//     >
//       <div
//         className="bg-white border border-gray-200 flex flex-col overflow-hidden"
//         style={{
//           boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
//           borderRadius: "4px",
//           fontFamily: "Gaegu, cursive",
//         }}
//       >
//         {/* Photo area */}
//         <div className="w-full aspect-square overflow-hidden bg-gray-50">
//           {project.image_url ? (
//             <img
//               src={project.image_url}
//               alt={project.title}
//               loading="lazy"
//               decoding="async"
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center text-gray-200 text-sm">
//               No image
//             </div>
//           )}
//         </div>

//         {/* Polaroid footer */}
//         <div className="px-3 pt-3 pb-4 flex flex-col gap-1">
//           <div className="flex items-center justify-between">
//             <span className="text-xs text-[#7e57e2]">{project.year}</span>
//             <span className="text-xs text-gray-300">↗</span>
//           </div>
//           <h2 className="text-lg font-bold text-black leading-tight">
//             {project.title}
//           </h2>
//           <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
//             {project.short_description}
//           </p>
//           {/* Tech stack — first 2 only, space is tight */}
//           <div className="flex gap-1 mt-1 flex-wrap">
//             {project.tech_stack.slice(0, 2).map((t) => (
//               <span
//                 key={t}
//                 className="text-[10px] text-gray-400 border border-dashed border-gray-200 px-1.5 py-0.5 rounded-full"
//               >
//                 {t}
//               </span>
//             ))}
//             {project.tech_stack.length > 2 && (
//               <span className="text-[10px] text-gray-300 px-1 py-0.5">
//                 +{project.tech_stack.length - 2}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// // ── Page ──────────────────────────────────────────────────────────────────────
// function Projects() {
//   const { projects, loading, error, refetch } = useProjects();

//   return (
//     <div className="min-h-[calc(100vh-4rem)] mt-16">
//       {/* ── Header ── */}
//       <div
//         className="px-6 sm:px-10 md:px-16 pt-16 pb-10"
//         style={{ fontFamily: "Gaegu, cursive" }}
//       >
//         <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
//           <div>
//             <p className="text-xl text-gray-400 mb-1">here are my</p>
//             <h1
//               className="text-[72px] sm:text-[96px] md:text-[120px] leading-none tracking-tight text-black"
//               style={{ fontWeight: 700 }}
//             >
//               Projects
//             </h1>
//           </div>
//           <p className="text-gray-400 text-lg sm:text-xl max-w-xs sm:text-right leading-relaxed pb-2">
//             Things I've built — from AI systems to web apps and beyond.
//           </p>
//         </div>

//         <div className="max-w-5xl mx-auto mt-6 flex flex-col gap-1.5">
//           {[...Array(3)].map((_, i) => (
//             <div
//               key={i}
//               className="h-px bg-gray-100"
//               style={{ opacity: 1 - i * 0.3 }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* ── Content ── */}
//       <div className="px-6 sm:px-10 md:px-16 pb-24 max-w-5xl mx-auto">
//         {loading && (
//           <div
//             className="flex flex-col items-center gap-3 text-center py-20"
//             style={{ fontFamily: "Gaegu, cursive" }}
//           >
//             <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#7e57e2]" />
//             <p className="text-2xl text-gray-400">loading projects...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div
//             className="flex flex-col items-center text-center gap-2 py-20"
//             style={{ fontFamily: "Gaegu, cursive" }}
//           >
//             <p className="text-2xl sm:text-3xl text-gray-400">
//               something went wrong
//             </p>
//             <p
//               className="text-[88px] sm:text-[110px] leading-none tracking-tight text-black"
//               style={{ fontWeight: 700 }}
//             >
//               oops.
//             </p>
//             <p className="text-gray-400 mt-4 text-lg max-w-sm">{error}</p>
//             <button
//               onClick={refetch}
//               className="mt-6 px-6 py-2.5 rounded-xl border border-black text-black hover:bg-black hover:text-white hover:shadow-lg duration-300 transition-all text-lg"
//               style={{ fontFamily: "Gaegu, cursive" }}
//             >
//               Try Again
//             </button>
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             {projects.length === 0 ? (
//               <div
//                 className="flex flex-col items-center text-center gap-2 py-24"
//                 style={{ fontFamily: "Gaegu, cursive" }}
//               >
//                 <p className="text-2xl text-gray-400">nothing here yet</p>
//                 <p
//                   className="text-[72px] sm:text-[90px] leading-none tracking-tight text-black"
//                   style={{ fontWeight: 700 }}
//                 >
//                   check back soon.
//                 </p>
//               </div>
//             ) : (
//               <>
//                 {/* Pinboard: extra padding so rotated cards don't clip */}
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8 px-4">
//                   {projects
//                     .sort((a, b) => (b.order_index ?? 0) - (a.order_index ?? 0))
//                     .map((project, i) => (
//                       <PolaroidCard
//                         key={project.slug}
//                         project={project}
//                         index={i}
//                       />
//                     ))}
//                 </div>
//                 <p
//                   className="text-sm text-gray-300 text-right mt-2"
//                   style={{ fontFamily: "Gaegu, cursive" }}
//                 >
//                   {projects.length}{" "}
//                   {projects.length === 1 ? "project" : "projects"}
//                 </p>
//               </>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Projects;

// import { Link } from "react-router-dom";
// import { useProjects } from "../hooks/useProjects";

// // ── Project poster card ────────────────────────────────────────────────────────
// const ProjectCard = ({ project, index }) => (
//   <Link to={`/projects/${project.slug}`} className="group block">
//     <div
//       className="relative overflow-hidden rounded-3xl border border-dashed border-gray-200"
//       style={{ fontFamily: "Gaegu, cursive", aspectRatio: "4/5" }}
//     >
//       {/* Background image */}
//       {project.image_url ? (
//         <img
//           src={project.image_url}
//           alt={project.title}
//           loading="lazy"
//           decoding="async"
//           className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//       ) : (
//         <div className="absolute inset-0 bg-gray-50 flex items-center justify-center text-gray-200 text-sm">
//           No image
//         </div>
//       )}

//       {/* Gradient overlay — always visible at bottom */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//       {/* Top left: index number watermark */}
//       <span
//         className="absolute top-4 left-5 text-white/20 text-[64px] leading-none font-bold select-none pointer-events-none"
//         style={{ fontWeight: 700 }}
//       >
//         {String(index + 1).padStart(2, "0")}
//       </span>

//       {/* Top right: year pill */}
//       <span className="absolute top-4 right-4 text-xs text-white bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 rounded-full">
//         {project.year}
//       </span>

//       {/* Bottom content */}
//       <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
//         {/* Description — hidden by default, slides up on hover */}
//         <p className="text-white/80 text-sm leading-relaxed line-clamp-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
//           {project.short_description}
//         </p>

//         {/* Title */}
//         <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
//           {project.title}
//         </h2>

//         {/* Tech tags row */}
//         <div className="flex flex-wrap gap-1.5 items-center justify-between">
//           <div className="flex flex-wrap gap-1.5">
//             {project.tech_stack.slice(0, 3).map((t) => (
//               <span
//                 key={t}
//                 className="text-[11px] text-white/70 border border-white/20 px-2 py-0.5 rounded-full"
//               >
//                 {t}
//               </span>
//             ))}
//             {project.tech_stack.length > 3 && (
//               <span className="text-[11px] text-white/40 px-1">
//                 +{project.tech_stack.length - 3}
//               </span>
//             )}
//           </div>
//           <span className="text-white/40 group-hover:text-white/80 transition-colors duration-300 text-lg">
//             ↗
//           </span>
//         </div>
//       </div>
//     </div>
//   </Link>
// );

// // ── Page ──────────────────────────────────────────────────────────────────────
// function Projects() {
//   const { projects, loading, error, refetch } = useProjects();

//   return (
//     <div className="min-h-[calc(100vh-4rem)] mt-16">
//       {/* ── Header ── */}
//       <div
//         className="px-6 sm:px-10 md:px-16 pt-16 pb-10"
//         style={{ fontFamily: "Gaegu, cursive" }}
//       >
//         <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
//           <div>
//             <p className="text-xl text-gray-400 mb-1">here are my</p>
//             <h1
//               className="text-[72px] sm:text-[96px] md:text-[120px] leading-none tracking-tight text-black"
//               style={{ fontWeight: 700 }}
//             >
//               Projects
//             </h1>
//           </div>
//           <p className="text-gray-400 text-lg sm:text-xl max-w-xs sm:text-right leading-relaxed pb-2">
//             Things I've built — from AI systems to web apps and beyond.
//           </p>
//         </div>

//         <div className="max-w-5xl mx-auto mt-6 flex flex-col gap-1.5">
//           {[...Array(3)].map((_, i) => (
//             <div
//               key={i}
//               className="h-px bg-gray-100"
//               style={{ opacity: 1 - i * 0.3 }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* ── Grid ── */}
//       <div className="px-6 sm:px-10 md:px-16 pb-24 max-w-5xl mx-auto">
//         {loading && (
//           <div
//             className="flex flex-col items-center gap-3 text-center py-20"
//             style={{ fontFamily: "Gaegu, cursive" }}
//           >
//             <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#7e57e2]" />
//             <p className="text-2xl text-gray-400">loading projects...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div
//             className="flex flex-col items-center text-center gap-2 py-20"
//             style={{ fontFamily: "Gaegu, cursive" }}
//           >
//             <p className="text-2xl sm:text-3xl text-gray-400">
//               something went wrong
//             </p>
//             <p
//               className="text-[88px] sm:text-[110px] leading-none tracking-tight text-black"
//               style={{ fontWeight: 700 }}
//             >
//               oops.
//             </p>
//             <p className="text-gray-400 mt-4 text-lg max-w-sm">{error}</p>
//             <button
//               onClick={refetch}
//               className="mt-6 px-6 py-2.5 rounded-xl border border-black text-black hover:bg-black hover:text-white hover:shadow-lg duration-300 transition-all text-lg"
//               style={{ fontFamily: "Gaegu, cursive" }}
//             >
//               Try Again
//             </button>
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             {projects.length === 0 ? (
//               <div
//                 className="flex flex-col items-center text-center gap-2 py-24"
//                 style={{ fontFamily: "Gaegu, cursive" }}
//               >
//                 <p className="text-2xl text-gray-400">nothing here yet</p>
//                 <p
//                   className="text-[72px] sm:text-[90px] leading-none tracking-tight text-black"
//                   style={{ fontWeight: 700 }}
//                 >
//                   check back soon.
//                 </p>
//               </div>
//             ) : (
//               <>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {projects
//                     .sort((a, b) => (b.order_index ?? 0) - (a.order_index ?? 0))
//                     .map((project, i) => (
//                       <ProjectCard
//                         key={project.slug}
//                         project={project}
//                         index={i}
//                       />
//                     ))}
//                 </div>
//                 <p
//                   className="text-sm text-gray-300 text-right mt-6"
//                   style={{ fontFamily: "Gaegu, cursive" }}
//                 >
//                   {projects.length}{" "}
//                   {projects.length === 1 ? "project" : "projects"}
//                 </p>
//               </>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Projects;
