"use client";

import React from "react";

const ToolbarButton = ({
  iconSrc,
  label,
  disabled = false,
}: {
  iconSrc?: string;
  label: string;
  disabled?: boolean;
}) => (
  <button
    className={`flex items-center gap-1 px-2 py-1 border border-transparent hover:border-[#b0b0b0] hover:bg-[#e0e0e0] active:bg-[#c0c0c0] active:border-[#808080] rounded-[2px] ${disabled ? "opacity-50 grayscale" : ""
      }`}
    style={{ userSelect: "none" }}
  >
    {iconSrc && (
      <img src={iconSrc} width={24} height={24} alt="" className="drop-shadow-sm" />
    )}
    <span className="text-[11px] text-black">{label}</span>
  </button>
);

const ToolbarSeparator = () => (
  <div className="w-[2px] h-8 bg-[#c0c0c0] border-r border-white mx-1" />
);


