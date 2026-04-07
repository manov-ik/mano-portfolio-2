export const loadGoogleAnalytics = () => {
  // Prevent loading multiple times
  if (window.dataLayer && window.dataLayer.some(e => e.event === "gtm.js")) {
    return;
  }

  // Load Google Tag Manager
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l !== "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-MRJG3BD4");

  // Optional: Since React operates as an SPA, push a pageview event manually if needed here
  // (though GTM handles the initial pageview perfectly by default on load)
};
