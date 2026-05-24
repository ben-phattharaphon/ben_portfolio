"use client";

import { useState, useEffect, useRef } from "react";
import { useWindowManager } from "./WindowManager";

interface TaskbarProps {
  onLogout: () => void;
}

export function Taskbar({ onLogout }: TaskbarProps) {
  const { windows, focusWindow, minimizeWindow, openWindow, highestZIndex } = useWindowManager();
  const [time, setTime] = useState("");
  const [isStartOpen, setIsStartOpen] = useState(false);
  const startMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (startMenuRef.current && !startMenuRef.current.contains(event.target as Node)) {
        setIsStartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openWindows = windows.filter(w => w.isOpen);

  return (
    <>
      {/* Start Menu */}
      {isStartOpen && (
        <div
          ref={startMenuRef}
          style={{
            position: "fixed",
            bottom: "35px",
            left: 0,
            width: "300px",
            background: "white",
            border: "2px solid #245edb",
            borderBottom: "none",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            zIndex: 10000,
            display: "flex",
            flexDirection: "column",
            boxShadow: "2px -2px 10px rgba(0,0,0,0.3)",
            fontFamily: "Tahoma, sans-serif"
          }}
        >
          {/* Start Menu Header */}
          <div style={{
            background: "linear-gradient(to right, #1841bd 0%, #3e88e9 100%)",
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "white",
            fontWeight: "bold",
            fontSize: "14px",
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px"
          }}>
            <img src="/hWgjp1e.png" width={32} height={32} style={{ border: "2px solid white", borderRadius: "3px" }} />
            Ben Phattharaphon
          </div>

          <div style={{ display: "flex", flex: 1 }}>
            {/* Left Column */}
            <div style={{ width: "200px", backgroundColor: "white", padding: "4px" }}>
              {[
                { id: 'About Me', title: 'About Me', icon: 'https://win98icons.alexmeub.com/icons/png/computer_explorer-5.png' },
                { id: 'resume', title: 'My Resume', icon: 'https://win98icons.alexmeub.com/icons/png/notepad-0.png' },
                { id: 'projects', title: 'Projects', icon: 'https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png' },
                { id: 'Contact Me', title: 'Contact Me', icon: 'https://win98icons.alexmeub.com/icons/png/msie1-2.png' },
              ].map(item => (
                <div
                  key={item.id}
                  onClick={() => { openWindow(item.id, item.title, item.icon); setIsStartOpen(false); }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 8px",
                    cursor: "pointer",
                    fontSize: "12px"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#3169da"}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                >
                  <img src={item.icon} width={24} height={24} />
                  <span style={{ fontWeight: "bold" }}>{item.title}</span>
                </div>
              ))}
            </div>


          </div>

          {/* Start Menu Footer */}
          <div style={{
            background: "linear-gradient(to bottom, #3e88e9 0%, #1841bd 100%)",
            padding: "8px",
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px"
          }}>
            <button
              onClick={() => { onLogout(); setIsStartOpen(false); }}
              style={{
                background: "none", border: "none", color: "white", fontSize: "11px", display: "flex", alignItems: "center", gap: "4px", cursor: "pointer"
              }}
            >
              <img src="https://win98icons.alexmeub.com/icons/png/key_win-2.png" width={16} />
              Log Off
            </button>
            <button
              onClick={() => { onLogout(); setIsStartOpen(false); }}
              style={{
                background: "none", border: "none", color: "white", fontSize: "11px", display: "flex", alignItems: "center", gap: "4px", cursor: "pointer"
              }}
            >
              <img src="https://win98icons.alexmeub.com/icons/png/shut_down_normal-2.png" width={16} />
              Turn Off
            </button>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "35px",
        background: "linear-gradient(rgb(31, 47, 134) 0px, rgb(49, 101, 196) 3%, rgb(54, 130, 229) 6%, rgb(68, 144, 230) 10%, rgb(56, 131, 229) 12%, rgb(43, 113, 224) 15%, rgb(38, 99, 218) 18%, rgb(35, 91, 214) 20%, rgb(34, 88, 213) 23%, rgb(33, 87, 214) 38%, rgb(36, 93, 219) 54%, rgb(37, 98, 223) 86%, rgb(36, 95, 220) 89%, rgb(33, 88, 212) 92%, rgb(29, 78, 192) 95%, rgb(25, 65, 165) 98%)",
        display: "flex",
        alignItems: "center",
        zIndex: 9999,
        boxShadow: "0 -1px 2px rgba(0,0,0,0.3)"
      }}>
        {/* Start Button */}
        <button
          onClick={() => setIsStartOpen(!isStartOpen)}
          style={{
            height: "100%",
            padding: "0 14px",
            background: isStartOpen
              ? "linear-gradient(to bottom, #2d6b24 0%, #3a8232 90%, #449a37 100%)"
              : "linear-gradient(to bottom, #43b02a 0%, #53c23a 10%, #43b02a 20%, #43b02a 90%, #358d24 100%)",
            border: "none",
            borderRight: "1px solid rgba(255,255,255,0.3)",
            borderTopRightRadius: "6px",
            borderBottomRightRadius: "6px",
            color: "white",
            fontWeight: "bold",
            fontStyle: "italic",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            cursor: "pointer",
            boxShadow: "inset 1px 1px 1px rgba(255,255,255,0.4)"
          }}
        >
          <img src="https://win98icons.alexmeub.com/icons/png/windows_slanted-1.png" alt="logo" width={16} />
          start
        </button>

        {/* Taskbar Items */}
        <div style={{ flex: 1, display: "flex", gap: "2px", padding: "0 4px", height: "100%", alignItems: "center" }}>
          {openWindows.map(w => (
            <button
              key={w.id}
              title={w.title}
              onClick={() => w.isMinimized ? focusWindow(w.id) : minimizeWindow(w.id)}
              style={{
                height: "24px",
                padding: "0 8px",
                backgroundColor: w.isMinimized ? "#3a7deb" : (w.zIndex === highestZIndex ? "#ffcc00" : "#d0d0d0"),
                color: "black",
                borderRadius: "2px",
                fontSize: "11px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                minWidth: "120px",
                maxWidth: "160px",
                cursor: "pointer",
                border: "none",
                outline: "none",
                boxShadow: w.isMinimized ? "inset 1px 1px 1px rgba(255,255,255,0.2)" : "inset 1px 1px 2px rgba(0,0,0,0.4)",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis"
              }}
            >
              {w.icon && <img src={w.icon} alt="icon" width={14} height={14} />}
              {w.title}
            </button>
          ))}
        </div>

        {/* System Tray */}
        <div style={{
          height: "100%",
          padding: "0 12px",
          background: "linear-gradient(rgb(12, 89, 185) 1%, rgb(19, 158, 233) 6%, rgb(24, 181, 242) 10%, rgb(19, 155, 235) 14%, rgb(18, 144, 232) 19%, rgb(13, 141, 234) 63%, rgb(13, 159, 241) 81%, rgb(15, 158, 237) 88%, rgb(17, 155, 233) 91%, rgb(19, 146, 226) 94%, rgb(19, 126, 215) 97%, rgb(9, 91, 201) 100%)",
          borderLeft: "1px solid rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          color: "white",
          fontSize: "11px",
          boxShadow: "inset 1px 0px 1px rgba(255,255,255,0.2)"
        }}>
          {time}
        </div>
      </div>
    </>
  );
}
