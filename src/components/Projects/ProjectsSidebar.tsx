"use client";

import React from "react";
import { Category } from "./types";

interface ProjectsSidebarProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  selectedProject: string | null;
}

export function ProjectsSidebar({ activeCategory, onCategoryChange, selectedProject }: ProjectsSidebarProps) {
  const categories: Category[] = ["All", "Web", "Design", "Personal"];

  return (
    <div className="w-[180px] bg-[#f0f0f0] p-3 flex flex-col gap-6 overflow-y-auto border-r border-[#e5e5e5] select-none font-arial">
      {/* Navigation Groups */}
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-[12px] font-bold text-[#333] mb-1 border-b border-[#ccc] pb-[2px]">Core Skills</h3>
          <ul className="flex flex-col gap-[2px]">
            {categories.map(cat => (
              <li 
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`text-[11px] cursor-pointer hover:bg-[#0033cc] hover:text-white px-1 ${
                  activeCategory === cat ? "bg-[#333] text-white font-bold" : "text-[#0033cc]"
                }`}
              >
                {cat} Stack
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[12px] font-bold text-[#333] mb-1 border-b border-[#ccc] pb-[2px]">Experience</h3>
          <ul className="flex flex-col gap-[2px] text-[11px] text-[#0033cc]">
            <li className="hover:underline cursor-pointer font-bold">• 2+ Years Coding</li>
            <li className="hover:underline cursor-pointer">• 10+ Projects Done</li>
            <li className="hover:underline cursor-pointer">• Open for Work</li>
          </ul>
        </div>
      </div>

      {/* Hire Me Box */}
      <div className="bg-[#fff9bb] border border-[#ffcc00] p-2 mt-auto">
        <h4 className="text-[11px] font-bold text-[#333] mb-1">Looking for a Dev?</h4>
        <p className="text-[10px] text-[#666] mb-2">I am currently available for new opportunities and freelance projects.</p>
        <button 
          onClick={() => {
            // Trigger contact window if possible, or just log
            console.log("Hire me clicked");
          }}
          className="w-full bg-gradient-to-b from-[#ffef00] to-[#ffcc00] border border-[#cc9900] text-[11px] font-bold py-[2px] shadow-sm active:shadow-inner"
        >
          CONTACT ME
        </button>
      </div>

      <div className="text-[10px] text-[#999] text-center italic">
        © 2006 Phattharaphon
      </div>
    </div>
  );
}
