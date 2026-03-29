import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
        <div className="relative w-full md:w-2/5 aspect-4/3 overflow-hidden rounded-sm shadow-sm group-hover:shadow-xl transition-shadow duration-500">
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
      <Helmet>
        <title>Projects - Manovikram K</title>
        <meta name="description" content="Selected works by Manovikram K - a collection of full-stack, ML, and design projects built with pixels, logic, and late-night caffeine." />
      </Helmet>
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
          <div className="text-center py-20 flex flex-col items-center justify-center gap-2">
            <div className="text-center">
              <button
                onClick={refetch}
                className="text-4xl text-gray-400 hover:text-black hover:cursor-pointer transition-all duration-300"
                style={{ fontFamily: "Gaegu, cursive" }}
              >
                Error. Try again?
              </button>
            </div>
            <Link
              to="/"
              className="px-6 py-2.5 sm:py-3 mt-4 rounded-xl text-black hover:bg-white hover:shadow-lg duration-300 transition-all"
              style={{ fontFamily: "Gaegu, cursive" }}
            >
              home
            </Link>
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
