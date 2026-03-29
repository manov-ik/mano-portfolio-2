import { useParams, Link } from "react-router-dom";
import { useProject } from "../hooks/useProjects";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const { project, loading, error, refetch } = useProject({
    slug,
    autoFetch: !!slug,
  });

  if (loading)
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center "
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        <div
          className="text-center py-20 animate-pulse text-4xl text-gray-400"
          style={{ fontFamily: "Gaegu, cursive" }}
        >
          Unfolding the story...
        </div>
        {/* <div className="w-16 h-16 border-4 border-dashed border-[#7e57e2] rounded-full animate-spin mb-4" /> */}
      </div>
    );

  if (error || !project)
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-6 text-center "
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <p className="text-3xl text-gray-500 mb-8">
          This page seems to have drifted away.
        </p>
        <Link
          to="/projects"
          className="text-2xl px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition-transform"
        >
          Back to the gallery
        </Link>
      </div>
    );

  return (
    <div
      className="min-h-screen pb-32 pt-24 selection:bg-[#7e57e2]/20"
      style={{ fontFamily: "Gaegu, cursive" }}
    >
      {/* ── Floating Navigation ── */}

      <main className="max-w-6xl mx-auto px-6">
        {/* ── Hero: The "Pinned Polaroid" ── */}

        <Link
          to="/projects"
          className="inline-block text-gray-400 hover:text-black transition-colors duration-200 mt-6 text-lg"
        >
          back to projects
        </Link>

        <header className="relative pt-16 mb-24">
          <div className="relative group max-w-4xl mx-auto">
            {/* Decorative "Tape" */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-[#7e57e2]/10 rotate-1 z-20 backdrop-blur-sm border border-white/20" />

            <div className="aspect-video rounded-sm overflow-hidden shadow-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-700 bg-white p-3">
              {project.image_url ? (
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-3xl">
                  Visual Missing
                </div>
              )}
            </div>
          </div>

          {/* Floating Title Panel */}
          <div className="absolute -bottom-16 left-0 sm:left-12 max-w-2xl bg-white p-8 shadow-xl rotate-1 ">
            <div className="flex items-center ">
              <span className="text-[#7e57e2] text-2xl font-bold tracking-widest">
                {project.year}
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold leading-none text-black mb-2">
              {project.title}
            </h1>
            <div className="flex gap-4">
              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  className="hover:text-[#7e57e2] text-lg "
                >
                  Source Code
                </a>
              )}
              {project.project_link && (
                <a
                  href={project.project_link}
                  target="_blank"
                  className="hover:text-[#7e57e2] text-lg "
                >
                  Live Site
                </a>
              )}
            </div>
          </div>
        </header>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-32">
          {/* Left Column: Narrative */}
          <section className="lg:col-span-8">
            <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-8">
              The Story
            </h2>
            <div className="bg-white p-10 shadow-sm border border-gray-100 relative">
              {/* Rule lines background effect */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(#000 1px, transparent 1px)",
                  backgroundSize: "100% 3rem",
                }}
              />

              <p className="text-2xl sm:text-3xl leading-relaxed text-gray-700 whitespace-pre-line relative z-10">
                {project.long_description || project.short_description}
              </p>
            </div>
          </section>

          {/* Right Column: Metadata / Tech */}
          <aside className="lg:col-span-4 space-y-12">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-6">
                Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-2xl bg-[#7e57e2]/5 text-[#7e57e2] px-4 py-1 rounded-full border border-[#7e57e2]/10 hover:bg-[#7e57e2] hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-black text-white rounded-3xl -rotate-2 hover:rotate-0 transition-transform">
              <h3 className="text-xl mb-2 italic">
                Thinking about this project?
              </h3>
              <p className="text-lg opacity-80 mb-4">
                I'm always down to chat about the tech behind this.
              </p>
              <a
                href="/contact"
                className="text-xl font-bold underline underline-offset-4 decoration-wavy"
              >
                Contact
              </a>
            </div>
          </aside>
        </div>

        {/* ── Bottom Nav ── */}
        <footer className="mt-2 pt-20 text-center">
          <Link to="/projects" className="group inline-block">
            <p className="text-gray-400 text-xl mb-2">Want to see more?</p>
            <span className="text-5xl sm:text-7xl font-bold group-hover:text-[#7e57e2] transition-colors">
              back to projects
            </span>
          </Link>
        </footer>
      </main>
    </div>
  );
};

export default ProjectDetailPage;
