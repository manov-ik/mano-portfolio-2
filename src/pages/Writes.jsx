import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useWritings } from "../hooks/useWritings";

const WritingRow = ({ writing, index }) => {
  return (
    <Link to={`/writes/${writing.slug}`} className="group block">
      <div
        className="flex items-start gap-4 py-6 px-4 border border-dashed border-gray-300 h-full rounded-3xl"
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        {/* Big faded index number */}
        <span
          className="text-[56px] sm:text-[72px] leading-none font-bold text-gray-100 group-hover:text-[#7e57e2]/40 transition-colors duration-300 select-none min-w-[60px] sm:min-w-[80px] text-right"
          style={{ fontWeight: 700 }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Content */}
        <div className="flex-1 pt-1">
          {writing.category && (
            <span className="text-xs text-[#7e57e2] bg-[#7e57e2]/10 px-2 py-1 rounded-full">
              {writing.category}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold text-black leading-tight mt-2">
            {writing.title}
          </h2>
          <p className="text-gray-400 text-base mt-1 line-clamp-2 leading-relaxed">
            {writing.excerpt}
          </p>
          <div className="flex items-center gap-3 mt-3">
            <span className="text-xs text-gray-400">
              {writing.read_time || "3 min read"}
            </span>
            <span className="text-gray-400">·</span>
            <span className="text-xs text-gray-400">
              {new Date(writing.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Writes = () => {
  const { writings, loading, error, refetch } = useWritings();

  return (
    <div className="min-h-[calc(100vh-4rem)] pt-16">
      <Helmet>
        <title>Writings - Manovikram K</title>
        <meta
          name="description"
          content="Thoughts, tutorials, and insights by Manovikram K on tech, code, design, and everything in between."
        />
        <link rel="canonical" href="https://manovik.netlify.app/writes" />
      </Helmet>
      {/* ── Header ── */}
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
              Writings
            </h1>
          </div>
          <p className="text-gray-400 text-lg sm:text-xl max-w-xs sm:text-right leading-relaxed pb-2">
            Thoughts, tutorials & insights on tech, code, and design.
          </p>
        </div>
      </div>
      {/* ── Grid ── */}
      <div className="px-6 sm:px-10 md:px-16 py-6 max-w-5xl mx-auto">
        {loading ? (
          <div
            className="text-center py-20 animate-pulse text-4xl"
            style={{ fontFamily: "Gaegu, cursive" }}
          >
            fetching writings...
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
        ) : writings.length === 0 ? (
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...writings].reverse().map((writing, i) => (
                <WritingRow key={writing.slug} writing={writing} index={i} />
              ))}
            </div>
            <p
              className="text-sm text-gray-400 text-right mt-6 pb-10"
              style={{ fontFamily: "Gaegu, cursive" }}
            >
              {writings.length} {writings.length === 1 ? "entry" : "entries"}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Writes;
