"use client";

import React, { useState } from "react";
import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectDetails } from "./ProjectDetails";
import { Category, Project } from "./types";
import { useWindowManager } from "../WindowManager";

export function ProjectsBrowser() {
  const { openWindow } = useWindowManager();
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [openedProject, setOpenedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className="flex flex-col w-full h-full bg-[#f0f0f0] text-black relative"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* Detail Overlay */}
      {openedProject && (
        <ProjectDetails
          project={openedProject}
          onClose={() => setOpenedProject(null)}
        />
      )}

      {/* Retro YouTube Header */}
      <div className="flex flex-col bg-white border-b border-[#e5e5e5]">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-6">
            {/* BenTube Logo (Portfolio Branding) */}
            <div className="flex items-center cursor-pointer select-none" onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}>
              <span className="text-[22px] font-bold tracking-tighter text-[#333]">Ben</span>
              <div className="bg-[#cc0000] px-1 rounded-[4px] ml-[2px]">
                <span className="text-[22px] font-bold tracking-tighter text-white">Tube</span>
              </div>
              <span className="text-[10px] self-start ml-1 text-[#666]">Portfolio</span>
            </div>

            {/* Header Search - Now Functional */}
            <div className="flex items-center h-8">
              <input
                type="text"
                placeholder="Search projects by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[400px] h-full border border-[#ccc] px-2 text-[13px] outline-none shadow-inner"
              />
              <button className="bg-[#eee] border border-[#ccc] border-l-0 h-full px-4 text-[13px] font-bold hover:bg-[#ddd]">Search</button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#0033cc]">
              <span 
                  className="font-bold cursor-pointer hover:underline text-[#cc0000]"
                  onClick={() => openWindow("Contact Me", "Contact Me", "https://win98icons.alexmeub.com/icons/png/msie1-2.png")}
              >
                  Hire Me!
              </span>
              <span className="font-bold cursor-pointer hover:underline text-black">Phattharaphon</span>
              <span className="font-bold cursor-pointer hover:underline">Settings</span>
          </div>

        </div>
      </div>

      <div className="flex flex-1 overflow-hidden min-h-0">
        <ProjectsGrid
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          onSelectProject={setSelectedProject}
          onOpenProject={setOpenedProject}
          selectedProject={selectedProject}
        />
      </div>


    </div>
  );
}
