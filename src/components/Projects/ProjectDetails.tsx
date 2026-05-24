"use client";

import React from "react";
import { Project } from "./types";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  return (
    <div className="absolute inset-0 bg-[#ece9d8] z-50 flex flex-col font-tahoma border-2 border-white shadow-xl overflow-hidden animate-in fade-in zoom-in duration-150">
      {/* Mini Title Bar */}
      <div className="flex items-center justify-between px-2 py-1 bg-gradient-to-r from-[#0058ee] to-[#3593ff] text-white select-none">
        <div className="flex items-center gap-2">
          <img src="https://win98icons.alexmeub.com/icons/png/image_gif-2.png" className="w-4 h-4 filter brightness-200" alt="" />
          <span className="text-[11px] font-bold">{project.title} - Preview</span>
        </div>
        <button 
          onClick={onClose}
          className="w-4 h-4 bg-[#e81123] text-white flex items-center justify-center text-[10px] rounded-[2px] hover:bg-red-600 border border-white/30"
        >
          ✕
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 custom-scrollbar bg-white">
        {/* Banner Image */}
        <div className="w-full h-64 bg-[#000] border-2 border-[#808080] shadow-md overflow-hidden">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-contain mx-auto block" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#333]">
              <img src="https://win98icons.alexmeub.com/icons/png/image_gif-2.png" className="w-16 h-16 opacity-50" alt="" />
            </div>
          )}
        </div>

        {/* Info Grid */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-bold text-[#003399] border-b border-[#003399] pb-1 mb-2">
              {project.title}
            </h2>
            <p className="text-[13px] text-black leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#f0f0f0] p-3 border border-[#d4d0c8]">
              <h3 className="text-[11px] font-bold text-[#666] uppercase mb-2">Category</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#215dc6]" />
                <span className="text-[12px]">{project.category}</span>
              </div>
            </div>
            <div className="bg-[#f0f0f0] p-3 border border-[#d4d0c8]">
              <h3 className="text-[11px] font-bold text-[#666] uppercase mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-1">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-[2px] bg-[#d6dff7] text-[#215dc6] text-[10px] rounded border border-[#215dc6]/30 font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button 
              onClick={() => {
                if (project.link) window.open(project.link, "_blank", "noopener,noreferrer");
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#215dc6] text-black text-[12px] font-bold border-b-2 border-r-2 border-[#00000050] active:border-none active:translate-y-[1px] cursor-pointer pointer-events-auto"
            >
              <img src="https://win98icons.alexmeub.com/icons/png/msie1-2.png" className="w-4 h-4 filter brightness-200" alt="" />
              View Live Project
            </button>
            <button 
              onClick={onClose}
              className="flex-1 py-2 bg-[#ece9d8] text-black text-[12px] font-bold border-2 border-b-[#808080] border-r-[#808080] border-t-white border-l-white active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white cursor-pointer pointer-events-auto"
            >
              Back to Folder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
