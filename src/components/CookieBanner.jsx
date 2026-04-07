import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { loadGoogleAnalytics } from "../utils/analytics";

const CookieBanner = ({ enabled = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent && enabled) {
      setTimeout(() => {
        setIsVisible(true);
      }, 1000); // Small delay before showing
    }
  }, [enabled]);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    // Fire it immediately upon click
    loadGoogleAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
