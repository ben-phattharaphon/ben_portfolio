"use client";

import { useEffect } from "react";

// ── Add your tracks here ──────────────────────────────────────────────────────
// ✅ BEST: put your own .mp3 files in /public/music/ → url: "/music/filename.mp3"
// ✅ OK: direct .mp3 URLs from CORS-enabled servers
// ❌ WON'T WORK: YouTube, SoundCloud, Spotify, or any streaming platform URLs
const TRACKS = [
  {
    metaData: { artist: "Charli XCX", title: "Track10" },
    // Local file, 100% works with no CORS issues
    url: "/music/CharliXCX-Track10.mp3",
    duration: 326,
  },
  {
    metaData: { artist: "Illit", title: "I Like You" },
    // Remote file that explicitly allows CORS
    url: "/music/ILLIT-ILLLIKEYOU.mp3",
    duration: 166,
  },
];

export default function WinampPage() {
  useEffect(() => {
    (async () => {
      const Webamp = (await import("webamp")).default;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const wa = new (Webamp as any)({ 
        initialTracks: TRACKS,
        initialSkin: {
          url: "/The_Aqua_Amp.wsz"
        }
      });
      await wa.renderWhenReady(document.body);
    })();
  }, []);

  // Webamp mounts into <body> directly
  return null;
}
