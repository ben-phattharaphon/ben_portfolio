"use client";

import { motion } from "framer-motion";
import { useWindowManager } from "./WindowManager";
import { ReactNode } from "react";

interface XPWindowProps {
  id: string;
  title: string;
  icon?: string;
  initialX?: number;
  initialY?: number;
  width?: number;
  height?: number;
  children: ReactNode;
}

export function XPWindow({ 
  id, 
  title, 
  icon,
  initialX = 100, 
  initialY = 100, 
  width = 400, 
  height = 300,
  children 
}: XPWindowProps) {
  const { windows, closeWindow, minimizeWindow, maximizeWindow, focusWindow } = useWindowManager();
  const windowState = windows.find(w => w.id === id);

  if (!windowState || !windowState.isOpen || windowState.isMinimized) {
    return null;
  }

  const isMaximized = windowState.isMaximized;

  return (
    <motion.div
      drag={!isMaximized}
      dragMomentum={false}
      onPointerDown={() => focusWindow(id)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x: isMaximized ? 0 : initialX,
        y: isMaximized ? 0 : initialY,
        width: isMaximized ? "100vw" : width,
        height: isMaximized ? "calc(100vh - 35px)" : height
      }}
      transition={{ duration: 0.15 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: windowState.zIndex,
        display: "flex",
        flexDirection: "column",
        pointerEvents: "auto",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.5)"
      }}
      className="window"
    >
      <div className="title-bar" style={{ 
        cursor: isMaximized ? "default" : "grab",
        background: "linear-gradient(to bottom, rgba(0, 88, 238, 0.9) 0%, rgba(53, 147, 255, 0.9) 100%)",
        backdropFilter: "blur(4px)"
      }}>
        <div className="title-bar-text" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {icon && <img src={icon} alt="icon" style={{ width: 14, height: 14 }} />}
          {title}
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}></button>
          <button aria-label="Maximize" onClick={(e) => { e.stopPropagation(); maximizeWindow(id); }}></button>
          <button aria-label="Close" onClick={(e) => { e.stopPropagation(); closeWindow(id); }}></button>
        </div>
      </div>
      
      <div className="window-body" style={{ margin: 0, flex: 1, overflow: "auto", backgroundColor: "white", padding: "8px" }}>
        {children}
      </div>
    </motion.div>
  );
}
