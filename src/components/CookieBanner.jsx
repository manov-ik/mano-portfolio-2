import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { loadGoogleAnalytics } from "../utils/analytics";

const AUTO_CLOSE_DELAY = 3000; // ms

const CookieBanner = ({ enabled = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const autoCloseRef = useRef(null);

  useEffect(() => {
    // Only show once per browser session (sessionStorage resets when tab closes)
    const shownThisSession = sessionStorage.getItem("cookieBannerShown");
    if (!shownThisSession && enabled) {
      sessionStorage.setItem("cookieBannerShown", "true");
      setTimeout(() => {
        setIsVisible(true);
      }, 1000); // Small delay before showing
    }
  }, [enabled]);

  // Start auto-accept countdown once banner becomes visible
  useEffect(() => {
    if (isVisible) {
      autoCloseRef.current = setTimeout(() => {
        handleAccept();
      }, AUTO_CLOSE_DELAY);
    }
    return () => clearTimeout(autoCloseRef.current);
  }, [isVisible]);

  const handleAccept = () => {
    setIsVisible(false);
    // Fire it immediately upon click
    loadGoogleAnalytics();
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!enabled) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={{ fontFamily: "Gaegu, cursive" }}
          className="fixed bottom-4 right-4 left-4 md:left-auto md:right-8 md:w-[380px] z-50"
        >
          <div className=" bg-white  shadow-2xl rounded-2xl p-2 flex flex-col gap-1">
            {/* <div className="flex justify-between items-start">
              <h3 className="font-semibold text-md text-gray-900 tracking-tight">
                Privacy & Cookies
              </h3>
              <button
                onClick={handleDecline}
                className="text-gray-400 hover:text-gray-800 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div> */}

            <p className="text-sm text-gray-600 leading-relaxed px-1 pt-1">
              This website uses cookies to ensure you get the best experience on
              our website.
            </p>

            <div className="flex gap-2 mt-2">
              <button
                onClick={handleAccept}
                className="flex-1 bg-black text-white text-sm font-semibold py-2.5 px-4 rounded-xl hover:bg-gray-800 transition-all active:scale-[0.98]"
              >
                Looks good
              </button>
              {/* <button
                onClick={handleDecline}
                className="flex-1 bg-gray-100 text-gray-700 text-xs font-semibold py-2.5 px-4 rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98]"
              >
                Decline
              </button> */}
            </div>

            {/* Auto-close progress bar */}
            {/* <div className="mx-1 mt-1 h-[3px] rounded-full bg-gray-100 overflow-hidden">
              <motion.div
                className="h-full bg-black rounded-full"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{
                  duration: AUTO_CLOSE_DELAY / 1000,
                  ease: "linear",
                }}
              />
            </div> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
