"use client";

import React from "react";

export function ProjectsToolbar() {
  const tools = [
    { name: "Back", icon: "https://win98icons.alexmeub.com/icons/png/arrow_left-0.png" },
    { name: "Forward", icon: "https://win98icons.alexmeub.com/icons/png/arrow_right-0.png" },
    { name: "Up", icon: "https://win98icons.alexmeub.com/icons/png/up_dir-0.png" },
    { divider: true },
    { name: "Search", icon: "https://win98icons.alexmeub.com/icons/png/search_file-2.png" },
    { name: "Folders", icon: "https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png" },
    { divider: true },
    { name: "Views", icon: "https://win98icons.alexmeub.com/icons/png/directory_explorer-0.png" },
  ];

  return (
    <div className="flex items-center px-2 py-1 bg-[#ece9d8] border-b border-[#d4d0c8] gap-1 shadow-[inset_0_1px_0_white]">
      {tools.map((tool, index) => (
        tool.divider ? (
          <div key={`div-${index}`} className="w-[1px] h-8 bg-[#d4d0c8] mx-1" />
        ) : (
          <button
            key={tool.name}
            className="flex flex-col items-center px-2 py-1 hover:bg-[#d4d0c8] rounded border border-transparent hover:border-white/50 active:border-[#808080]"
          >
            <img src={tool.icon} alt={tool.name} className="w-6 h-6 mb-[2px]" />
            <span className="text-[10px] text-black">{tool.name}</span>
          </button>
        )
      ))}
    </div>
  );
}
