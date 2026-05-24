"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import { useWindowManager } from "./WindowManager";
import { motion } from "framer-motion";


interface DesktopIconProps {
  id: string;
  title: string;
  iconSrc: string;
}

export function DesktopIcon({ id, title, iconSrc }: DesktopIconProps) {
  const { openWindow } = useWindowManager();
  const [isSelected, setIsSelected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsSelected(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Click once to select, double click to open
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSelected(true);
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openWindow(id, title, iconSrc);
  };


  return (
    <motion.div
      ref={ref}
      drag
      dragMomentum={false}
      className={`xp-icon ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={{ position: "relative" }}
    >
      <img
        src={iconSrc}
        alt={title}
        width={50}
        height={50}
        style={{
          filter: isSelected ? "brightness(0.8) sepia(1) hue-rotate(180deg) saturate(3)" : "none",
          pointerEvents: "none"
        }}
      />
      <span className="xp-icon-text" style={{
        backgroundColor: "transparent",
        padding: "0 2px",
        borderRadius: isSelected ? "1px" : "0",
        display: "block",
        textAlign: "center",
        width: "100%",
        fontSize: "11px",
        color: "white",
        marginTop: "4px"
      }}>
        {title}
      </span>
    </motion.div>
  );
}
