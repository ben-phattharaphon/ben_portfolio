"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { WindowManagerProvider } from "@/components/WindowManager";
import { Taskbar } from "@/components/Taskbar";
import { DesktopIcon } from "@/components/DesktopIcon";
import { XPWindow } from "@/components/XPWindow";
import { AboutMeBrowser } from "@/components/AboutMe";
import { LoginScreen } from "@/components/LoginScreen";
import { ResumeViewer } from "@/components/ResumeViewer";
import ContactForm from "@/components/ContactForm";
import { ProjectsBrowser } from "@/components/Projects";

// Webamp uses browser DOM directly → must be client-only
const WebampPlayer = dynamic(
  () => import("@/components/MediaPlayer").then(mod => mod.WebampPlayer),
  { ssr: false, loading: () => null }
);

function DesktopContent({ onLogout }: { onLogout: () => void }) {
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      onClick={() => {
        document.querySelectorAll('.xp-icon.selected').forEach(el => el.classList.remove('selected'));
      }}
    >
      <div className="desktop-icon-grid">
        <DesktopIcon
          id="About Me"
          title="About Me"
          iconSrc="https://win98icons.alexmeub.com/icons/png/computer_explorer-5.png"
        />
        <DesktopIcon
          id="resume"
          title="My Resume"
          iconSrc="https://win98icons.alexmeub.com/icons/png/notepad-0.png"
        />
        <DesktopIcon
          id="projects"
          title="Projects"
          iconSrc="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png"
        />
        <DesktopIcon
          id="Contact Me"
          title="Contact Me"
          iconSrc="https://win98icons.alexmeub.com/icons/png/msie1-2.png"
        />
      </div>

      {/* --- Windows --- */}
      <XPWindow
        id="About Me"
        title="About Me - Microsoft Internet Explorer"
        icon="https://win98icons.alexmeub.com/icons/png/computer_explorer-5.png"
        initialX={50}
        initialY={50}
        width={850}
        height={950}
      >
        <AboutMeBrowser />
      </XPWindow>

      <XPWindow
        id="resume"
        title="My Resume.pdf - Adobe Reader"
        icon="https://win98icons.alexmeub.com/icons/png/notepad-0.png"
        initialX={100}
        initialY={30}
        width={900}
        height={950}
      >
        <ResumeViewer />
      </XPWindow>

      <XPWindow
        id="projects"
        title="C:\Projects"
        icon="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png"
        initialX={200}
        initialY={100}
        width={1000}
        height={700}
      >
        <ProjectsBrowser />
      </XPWindow>

      <XPWindow
        id="Contact Me"
        title="Contact Me"
        icon="https://win98icons.alexmeub.com/icons/png/msie1-2.png"
        initialX={350}
        initialY={200}
        width={600}
        height={500}
      >
        <ContactForm />
      </XPWindow>

      {/* --- Winamp Player Widget --- */}
      <WebampPlayer />

      {/* --- Taskbar --- */}
      <Taskbar onLogout={onLogout} />
    </div>
  );
}

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    const audio = new Audio("/startup.mp3");
    audio.play().catch(err => console.error("Audio playback failed:", err));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <WindowManagerProvider>
      <main style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative"
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="crt-overlay" />
        <div className="crt-flicker" />
        {isLoggedIn ? (
          <DesktopContent onLogout={handleLogout} />
        ) : (
          <LoginScreen onLogin={handleLogin} />
        )}
      </main>
    </WindowManagerProvider>
  );
}
