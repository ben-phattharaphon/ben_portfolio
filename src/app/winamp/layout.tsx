// Reset body styles so webamp renders on transparent/dark bg
// without the XP wallpaper bleeding through
export default function WinampLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        html, body {
          background: transparent !important;
          background-image: none !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
        }
        /* Hide CRT overlays from root layout */
        .crt-overlay, .crt-flicker { display: none !important; }
      `}</style>
      {children}
    </>
  );
}
