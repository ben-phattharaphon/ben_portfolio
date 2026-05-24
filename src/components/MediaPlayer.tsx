"use client";

import { motion } from "framer-motion";

// This component renders an iframe pointing to /winamp.
// Webamp's CSS and DOM are fully isolated inside the iframe
// so they cannot affect the parent XP desktop.
export function WebampPlayer() {
  return (
    <motion.div
      drag
      dragMomentum={false}
      style={{
        position: "absolute",
        top: 60,
        right: 40,
        zIndex: 6000,
        // Wide enough for Winamp main window (275px) + small margin
        // Tall enough for main + EQ + playlist windows stacked
        width: 290,
        height: 440,
        // Transparent so we can see through gaps between Winamp windows
        background: "transparent",
        cursor: "grab",
      }}
    >
      <iframe
        src="/winamp"
        title="Winamp"
        allow="autoplay; encrypted-media; picture-in-picture"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          background: "transparent",
          display: "block",
        }}
      />
    </motion.div>
  );
}
