import { Link } from "react-router-dom";
import { useProjects } from "../hooks/useProjects";
// ── Project row ─────────────────────────────────────────────────────────────────
const ProjectRow = ({ project, index }) => (
  <Link to={`/projects/${project.slug}`} className="group block">
    <div
      className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 py-6 px-4 sm:px-6 border border-dashed border-gray-300 rounded-3xl"
      style={{ fontFamily: "Gaegu, cursive" }}
    >
      {/* Big faded index number */}
      <span
        className="hidden sm:block text-[56px] sm:text-[72px] leading-none font-bold text-gray-100 group-hover:text-[#7e57e2]/40 transition-colors duration-300 select-none min-w-[60px] sm:min-w-[80px] text-right"
        style={{ fontWeight: 700 }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Thumbnail */}
      <div className="w-full sm:w-56 h-48 sm:h-36 shrink-0 overflow-hidden rounded-2xl bg-gray-50">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
            No image
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 pt-1 w-full">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-[#7e57e2] bg-[#7e57e2]/10 px-2 py-1 rounded-full">
            {project.year}
          </span>
          <span className="text-xs text-gray-400">{project.tech_stack[0]}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-black leading-tight mb-2">
          {project.title}
        </h2>

        <p className="text-gray-400 text-base flex-1 mb-4 line-clamp-2 leading-relaxed">
          {project.short_description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech_stack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[11px] text-gray-400 border border-dashed border-gray-300 px-2 py-0.5 rounded-full hover:bg-black hover:text-white transition-colors duration-300 cursor-default"
            >
              {t}
            </span>
          ))}
          {project.tech_stack.length > 4 && (
            <span className="text-[11px] text-gray-300 px-2 py-0.5">
              +{project.tech_stack.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  </Link>
);

// ── Page ──────────────────────────────────────────────────────────────────────
function Projects() {
  const { projects, loading, error, refetch } = useProjects();

  return (
    <div className="min-h-[calc(100vh-4rem)] pt-16">
      {/* ── Header ── */}
      <div
        className="px-6 sm:px-10 md:px-16 pt-16 pb-10"
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xl text-gray-400 mb-1">here are my</p>
            <h1
              className="text-[72px] sm:text-[96px] md:text-[120px] leading-none tracking-tight text-black"
              style={{ fontWeight: 700 }}
            >
              Projects
            </h1>
          </div>
          <p className="text-gray-400 text-lg sm:text-xl max-w-xs sm:text-right leading-relaxed pb-2">
            Things I've built — from AI systems to web apps and beyond.
          </p>
        </div>

        {/* Decorative ruled lines */}
      </div>

      {/* ── Grid ── */}
      <div className="px-6 sm:px-10 md:px-16 pb-24 max-w-5xl mx-auto">
        {loading && (
          <div
            className="flex flex-col items-center gap-3 text-center py-20"
            style={{ fontFamily: "Gaegu, cursive" }}
          >
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#7e57e2]" />
            <p className="text-2xl text-gray-400">loading projects...</p>
          </div>
        )}

        {error && !loading && (
          <div
            className="flex flex-col items-center text-center gap-2 py-20"
            style={{ fontFamily: "Gaegu, cursive" }}
          >
            <p className="text-2xl sm:text-3xl text-gray-400">
              something went wrong
            </p>
            <p
              className="text-[88px] sm:text-[110px] leading-none tracking-tight text-black"
              style={{ fontWeight: 700 }}
            >
              oops.
            </p>
            <p className="text-gray-400 mt-4 text-lg max-w-sm">{error}</p>
            <button
              onClick={refetch}
              className="mt-6 px-6 py-2.5 rounded-xl border border-black text-black hover:bg-black hover:text-white hover:shadow-lg duration-300 transition-all text-lg"
              style={{ fontFamily: "Gaegu, cursive" }}
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            {projects.length === 0 ? (
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
              <>
                <div className="flex flex-col gap-4">
                  {projects
                    .sort((a, b) => (b.order_index ?? 0) - (a.order_index ?? 0))
                    .map((project, i) => (
                      <ProjectRow
                        key={project.slug}
                        project={project}
                        index={i}
                      />
                    ))}
                </div>
                <p
                  className="text-sm text-gray-300 text-right mt-6"
                  style={{ fontFamily: "Gaegu, cursive" }}
                >
                  {projects.length}{" "}
                  {projects.length === 1 ? "project" : "projects"}
                </p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Projects;
