// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const socials = [
//   {
//     id: "instagram",
//     label: "Instagram",
//     handle: "@manov_ik",
//     href: "https://www.instagram.com/manov_ik/",
//     hint: "reels, stories & vibes",
//     tag: "SOCIAL",
//     color: "#e05c97",
//   },
//   {
//     id: "github",
//     label: "GitHub",
//     handle: "@manov-ik",
//     href: "https://github.com/manov-ik",
//     hint: "where the code lives",
//     tag: "CODE",
//     color: "#374151",
//   },
//   {
//     id: "linkedin",
//     label: "LinkedIn",
//     handle: "manovikramk",
//     href: "https://www.linkedin.com/in/manovikramk/",
//     hint: "let's connect professionally",
//     tag: "WORK",
//     color: "#2563eb",
//   },
//   {
//     id: "email",
//     label: "Email",
//     handle: "manozart5@gmail.com",
//     href: "mailto:manozart5@gmail.com",
//     hint: "slide into my inbox",
//     tag: "DIRECT",
//     color: "#7e57e2",
//   },
//   {
//     id: "whatsapp",
//     label: "WhatsApp",
//     handle: "+91 93610 26919",
//     href: "https://wa.me/919361026919",
//     hint: "chat on WhatsApp",
//     tag: "DIRECT",
//     color: "#16a34a",
//   },
//   {
//     id: "pinterest",
//     label: "Pinterest",
//     handle: "@manov_ik",
//     href: "https://in.pinterest.com/manov_ik/",
//     hint: "mood boards & inspo",
//     tag: "CREATIVE",
//     color: "#e11d48",
//   },
//   {
//     id: "reddit",
//     label: "Reddit",
//     handle: "@manov_ik",
//     href: "https://www.reddit.com/user/manov_ik/",
//     hint: "lurking & posting",
//     tag: "SOCIAL",
//     color: "#ea580c",
//   },
//   {
//     id: "kaggle",
//     label: "Kaggle",
//     handle: "@manovik",
//     href: "https://www.kaggle.com/manovik",
//     hint: "data & competitions",
//     tag: "DATA",
//     color: "#0891b2",
//   },
// ];

// const tagColors = {
//   SOCIAL: "#f3e8ff",
//   CODE: "#f1f5f9",
//   WORK: "#dbeafe",
//   DIRECT: "#ede9fe",
//   CREATIVE: "#ffe4e6",
//   DATA: "#cffafe",
// };

// export default function Contact() {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div
//       className="min-h-screen pt-16"
//       style={{ fontFamily: "Gaegu, cursive" }}
//     >
//       <main className="max-w-5xl mx-auto px-6 py-20">
//         {/* ── Header ── */}
//         <div className="mb-16">
//           <p className="text-xl text-gray-400 mb-2">
//             open to collabs, convos &amp; chaos
//           </p>
//           <h1 className="text-[72px] sm:text-[100px] md:text-[128px] font-bold leading-none tracking-tight text-black">
//             REACH OUT
//           </h1>
//         </div>

//         {/* ── Link Grid ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {socials.map((s) => (
//             <a
//               key={s.id}
//               href={s.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               onMouseEnter={() => setHovered(s.id)}
//               onMouseLeave={() => setHovered(null)}
//               className="group relative flex items-center justify-between p-6 border border-gray-100 bg-white transition-all duration-300 overflow-hidden"
//               style={{
//                 boxShadow:
//                   hovered === s.id
//                     ? `0 8px 30px ${s.color}22`
//                     : "0 2px 8px #0000000a",
//                 borderColor: hovered === s.id ? s.color + "55" : "#f3f4f6",
//               }}
//             >
//               {/* Animated fill background */}
//               <div
//                 className="absolute inset-0 transition-all duration-500 origin-left"
//                 style={{
//                   backgroundColor: s.color + "08",
//                   transform: hovered === s.id ? "scaleX(1)" : "scaleX(0)",
//                 }}
//               />

//               {/* Left content */}
//               <div className="relative z-10">
//                 {/* Tag pill */}
//                 <span
//                   className="text-xs font-bold tracking-widest px-2 py-0.5 rounded-full mb-3 inline-block"
//                   style={{
//                     backgroundColor: tagColors[s.tag] || "#f3f4f6",
//                     color: s.color,
//                   }}
//                 >
//                   {s.tag}
//                 </span>
//                 <p
//                   className="text-4xl font-bold leading-none transition-colors duration-300"
//                   style={{ color: hovered === s.id ? s.color : "#111" }}
//                 >
//                   {s.label}
//                 </p>
//                 <p className="text-lg text-gray-400 mt-1">{s.hint}</p>
//               </div>

//               {/* Right content */}
//               <div className="relative z-10 text-right ml-4 shrink-0">
//                 <p
//                   className="text-lg font-bold transition-colors duration-300"
//                   style={{ color: hovered === s.id ? s.color : "#9ca3af" }}
//                 >
//                   {s.handle}
//                 </p>
//                 <p
//                   className="text-3xl mt-1 transition-all duration-300"
//                   style={{ color: hovered === s.id ? s.color : "#e5e7eb" }}
//                 >
//                   ↗
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* ── Footer note ── */}
// <div className="mt-20 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
//   <p className="text-2xl text-gray-300 max-w-sm leading-snug">
//     I'm usually available. Worst case, I'll reply eventually.
//   </p>
//   <Link
//     to="/"
//     className="text-xl text-black hover:text-[#7e57e2] transition-colors duration-200"
//   >
//     back home
//   </Link>
// </div>
//       </main>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

// ── Data Constants ──
export const socials = [
  {
    id: "email",
    label: "Email",
    handle: "manozart5@gmail.com",
    href: "mailto:manozart5@gmail.com",
    color: "#7e57e2",
    hint: "drop a message in my inbox",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "manovikram k",
    href: "https://www.linkedin.com/in/manovikramk",
    color: "#2563eb",
    hint: "let's connect professionally",
  },
  {
    id: "github",
    label: "GitHub",
    handle: "@manov-ik",
    href: "https://github.com/manov-ik",
    color: "#374151",
    hint: "where the code lives",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    handle: "+91 93610 26919",
    href: "https://wa.me/919361026919",
    color: "#16a34a",
    hint: "ping me on WhatsApp",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@manov_ik",
    href: "https://www.instagram.com/manov_ik",
    color: "#e05c97",
    hint: "reels, stories & vibes",
  },
  {
    id: "pinterest",
    label: "Pinterest",
    handle: "@manov_ik",
    href: "https://in.pinterest.com/manov_ik",
    color: "#e11d48",
    hint: "mood boards & inspo",
  },
  {
    id: "reddit",
    label: "Reddit",
    handle: "@manov_ik",
    href: "https://www.reddit.com/user/manov_ik",
    color: "#ea580c",
    hint: "idk",
  },
  {
    id: "kaggle",
    label: "Kaggle",
    handle: "@manovik",
    href: "https://www.kaggle.com/manovik",
    color: "#0891b2",
    hint: "data",
  },
  {
    id: "huggingface",
    label: "HuggingFace",
    handle: "@manov-ik",
    href: "https://huggingface.co/manov-ik",
    color: "#FFD21E",
    hint: "models",
  },
  {
    id: "resume",
    label: "RESUME",
    handle: "manovikram k",
    href: "/Manovikram K's Resume.pdf",
    color: "#000",
    hint: "doc about me",
  },
];

export default function Contact() {
  return (
    <div
      className="min-h-screen py-20  flex flex-col items-center justify-center"
      style={{ fontFamily: "Gaegu, cursive" }}
    >
      <main className="max-w-5xl w-full px-6">
        {/* ── Header ── */}
        <div className="my-16">
          <p className="text-xl text-gray-400 mb-2">
            open to collabs, convos &amp; chaos
          </p>
          <h1 className="text-[72px] sm:text-[100px] md:text-[128px] font-bold leading-none tracking-tight text-black">
            REACH OUT
          </h1>
        </div>

        {/* ── The Colored Label Grid ── */}
        <div className="flex flex-wrap justify-center  gap-4 md:gap-8">
          {socials.map((s, idx) => {
            // Static rotations: purely aesthetic, no animation
            const rotations = [
              "rotate-1",
              "-rotate-2",
              "rotate-2",
              "-rotate-1",
              "rotate-3",
              "-rotate-3",
            ];
            const rotation = rotations[idx % rotations.length];

            return (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 md:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-200 ${rotation}`}
              >
                {/* Visual "Hook" - A small dashed line on top */}
                {/* <div className="absolute top-0 left-0 w-full h-[2px] border-t border-dashed border-gray-200" /> */}

                <div className="flex flex-col items-start">
                  <span className="text-sm md:text-lg text-gray-400 group-hover:text-gray-500 transition-colors">
                    {s.hint}
                  </span>
                  {/* BIG Title with Brand Color */}
                  <span
                    className="text-5xl md:text-6xl font-bold leading-none mb-1"
                    style={{ color: s.color }}
                  >
                    {s.label}
                  </span>
                  {/* SMALL Detail (Handle) */}

                  <span className="text-lg md:text-xl text-gray-400 group-hover:text-black transition-colors">
                    {s.handle}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* ── Minimal Footer ── */}
        <div className=" mt-20 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <p className="text-2xl text-gray-300 max-w-sm leading-snug">
            these are my socials, where we can connect & vibe
          </p>
          <Link
            to="/"
            className="text-xl text-black hover:text-[#7e57e2] transition-colors duration-200"
          >
            back home
          </Link>
        </div>
      </main>
    </div>
  );
}
