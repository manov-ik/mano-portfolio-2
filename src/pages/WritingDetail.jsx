import { useParams, Link } from "react-router-dom";
import { useWriting } from "../hooks/useWritings";
import ScrollHighlight from "../components/ScrollHighlight";

const WritingDetail = () => {
  const { slug } = useParams();
  const { writing, loading, error, refetch } = useWriting({ slug });

  if (loading) {
    return (
      // <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      //   <div
      //     className="flex flex-col items-center gap-3 text-center"
      //     style={{ fontFamily: "Gaegu, cursive" }}
      //   >
      //     <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#7e57e2]" />
      //     <p className="text-2xl text-gray-400">loading writing...</p>
      //   </div>
      // </div>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div
          className="text-center py-20 animate-pulse text-4xl"
          style={{ fontFamily: "Gaegu, cursive" }}
        >
          loading writing...
        </div>
      </div>
    );
  }

  if (error || !writing) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-2 px-6">
        <div
          className="flex flex-col items-center text-center gap-2"
          style={{ fontFamily: "Gaegu, cursive" }}
        >
          <p
            className="text-[88px] sm:text-[110px] leading-none tracking-tight text-black"
            style={{ fontWeight: 700 }}
          >
            oops.
          </p>
        </div>
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
          to="/writes"
          className="px-6 py-2.5 sm:py-3 mt-4 rounded-xl text-black hover:bg-white hover:shadow-lg duration-300 transition-all"
          style={{ fontFamily: "Gaegu, cursive" }}
        >
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] pt-16">
      {/* ── Header ── */}

      <div
        className="px-6 sm:px-10 md:px-16 pt-16 pb-10"
        style={{ fontFamily: "Gaegu, cursive" }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            to="/writes"
            className="inline-block text-gray-400 hover:text-black transition-colors duration-200 mb-6 text-lg"
          >
            back to writings
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {writing.category && (
              <span className="text-xs text-[#7e57e2] bg-[#7e57e2]/10 px-2 py-1 rounded-full">
                {writing.category}
              </span>
            )}
            <span className="text-xs text-gray-500">
              {writing.read_time || "3 min read"}
            </span>
            <span className="text-gray-200 text-xs">·</span>
            <span className="text-xs text-gray-400">
              {new Date(writing.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-[64px] sm:text-[80px] md:text-[96px] leading-none tracking-tight text-black"
            style={{ fontWeight: 700 }}
          >
            {writing.title}
          </h1>
        </div>

        {/* Decorative ruled lines */}
      </div>

      {/* ── Content ── */}
      <div className="px-5 pb-24 max-w-3xl mx-auto">
        {/* Excerpt */}
        {/* {writing.excerpt && (
          <p
            className="text-xl text-gray-400 leading-relaxed pb-2 mb-2"
            style={{ fontFamily: "Gaegu, cursive" }}
          >
            <ScrollHighlight>{writing.excerpt}</ScrollHighlight>
          </p>
        )} */}
        <div
          className="prose pl-4 sm:pl-8 md:pl-10 lg:pl-0 prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "Gaegu, cursive" }}
        >
          {writing.content}
        </div>

        {/* Footer nav */}
        <div
          className="mt-16 pt-6 border-t border-dashed border-gray-300 flex justify-between items-center"
          style={{ fontFamily: "Gaegu, cursive" }}
        >
          <Link
            to="/writes"
            className="px-6 py-2.5 rounded-xl border border-black text-black hover:bg-black hover:text-white hover:shadow-lg duration-300 transition-all text-lg"
          >
            Back to Writings
          </Link>
          <span className="text-sm text-gray-400">
            {writing.read_time || "3 min read"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WritingDetail;
