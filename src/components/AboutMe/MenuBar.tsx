"use client";

import React from "react";

const MenuBarItem = ({ label }: { label: string }) => (
  <span
    className="hover:bg-[#1660E8] hover:text-white px-2 py-[2px] cursor-default text-[11px]"
    style={{ userSelect: "none" }}
  >
    {label}
  </span>
);

export function MenuBar() {
  return (
    <div className="flex items-center justify-between px-1 py-[1px] border-b border-[#d4d0c8] bg-[#ece9d8]">
      <div className="flex">
        <MenuBarItem label="File" />
        <MenuBarItem label="Edit" />
        <MenuBarItem label="View" />
        <MenuBarItem label="Favorites" />
        <MenuBarItem label="Tools" />
        <MenuBarItem label="Help" />
      </div>
      {/* Windows Flag logo far right */}
      <img
        src="https://win98icons.alexmeub.com/icons/png/windows_update_large-1.png"
        alt="Windows Logo"
        width={22}
        className="mr-1"
        style={{ opacity: 0.8 }}
      />
    </div>
  );
}
