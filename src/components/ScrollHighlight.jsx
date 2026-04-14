import React from "react";
import { motion } from "framer-motion";

/**
 * ScrollHighlight - A component that adds a smooth, scroll-triggered
 * highlighter effect to any word or phrase it wraps.
 *
 * @param {React.ReactNode} children - The text content to highlight.
 * @param {string} color - The highlight color (defaults to a soft purple matching the site accent).
 * @param {number} delay - Animation delay in seconds.
 * @param {number} duration - Animation duration in seconds.
 * @param {string} className - Additional CSS classes for the wrapper.
 */
const ScrollHighlight = ({
  children,
  color = "rgba(126, 87, 226, 0.25)",
  delay = 0.2,
  duration = 0.8,
  className = "",
}) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 0.7em" }}
      whileInView={{ backgroundSize: "100% 0.7em" }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`inline text-black ${className}`}
      style={{
        backgroundImage: `linear-gradient(${color}, ${color})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom 0.2em",
        backgroundColor: "transparent",
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
      }}
    >
      {children}
    </motion.span>
  );
};

export default ScrollHighlight;
