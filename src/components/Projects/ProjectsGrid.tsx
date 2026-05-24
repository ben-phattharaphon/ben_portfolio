"use client";

import React from "react";
import { Category, Project } from "./types";

const projects: Project[] = [
  {
    id: "onlyfriends",
    title: "onlyfriendssss",
    category: "Web",
    description: "A massive Full-Stack platform for organizing group activities and 'parties'. Featuring real-time group chat (Socket.io), location-based features with Mapbox, friend management, and a comprehensive review system for activities and participants.",
    tech: ["Express 5", "React 19", "Socket.io", "Prisma 7", "MariaDB", "Tailwind 4", "Mapbox"],
    image: "/olf.png",
    link: "https://onlyfriendssss.vercel.app/",
  },
  {
    id: "keyring",
    title: "22:22 keyring",
    category: "Design",
    description: "An interactive 3D web application that allows users to customize their own 3D keyring in real-time. Built with a robust stack focusing on performance and immersive user experience.",
    tech: ["Next.js 16", "Three.js", "Zustand", "R3F", "Drei", "TypeScript 5"],
    image: "/keyring.png",
    link: "https://22-22keyring.vercel.app/",
  }
];

interface ProjectsGridProps {
  activeCategory: Category;
  searchQuery: string;
  onSelectProject: (id: string) => void;
  onOpenProject: (project: Project) => void;
  selectedProject: string | null;
}

export function ProjectsGrid({ activeCategory, searchQuery, onSelectProject, onOpenProject, selectedProject }: ProjectsGridProps) {
  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-1 w-full bg-white overflow-y-auto p-6 select-none relative custom-scrollbar">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-6 border-b border-[#e5e5e5] pb-3 flex justify-between items-center">
          <h2 className="text-[16px] font-bold text-[#333]">
            {searchQuery ? `Search results for "${searchQuery}"` : "My Projects"}
          </h2>
          <div className="flex items-center gap-4 text-[11px] text-[#666]">
            <span>{filteredProjects.length} projects found</span>
            <span>Sorted by: <span className="text-[#0033cc] cursor-pointer">Relevance</span> ▼</span>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-8 gap-y-10 auto-rows-max">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col cursor-pointer group`}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProject(project.id);
                }}
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  onOpenProject(project);
                }}
              >
                {/* YouTube Thumbnail Style (Larger) */}
                <div className={`relative w-full aspect-video mb-3 border-2 ${selectedProject === project.id ? "border-[#0033cc]" : "border-[#ccc] group-hover:border-[#666]"
                  } bg-black overflow-hidden shadow-sm group-hover:shadow-md transition-shadow`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#333]">
                      <img src="https://win98icons.alexmeub.com/icons/png/image_gif-2.png" className="w-12 h-12 opacity-50" alt="" />
                    </div>
                  )}
                  {/* Duration Tag */}
                  <div className="absolute bottom-2 right-2 bg-black/90 text-white text-[11px] px-1.5 font-bold rounded-sm">
                    {Math.floor(Math.random() * 5) + 1}:{Math.floor(Math.random() * 59).toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Video Info (Larger Text) */}
                <div className="flex flex-col gap-1">
                  <span className={`text-[14px] font-bold leading-tight line-clamp-2 ${selectedProject === project.id ? "text-[#0033cc] underline" : "text-[#0033cc] group-hover:underline"
                    }`}>
                    {project.title}
                  </span>
                  <div className="flex flex-col mt-1">
                    <span className="text-[11px] text-[#666]">Dev: <span className="text-[#333] font-bold hover:underline">Phattharaphon</span></span>
                    <span className="text-[11px] text-[#666] mt-[2px]">{(index + 1) * 1234} views • 2 days ago</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-2">
                    <span className="text-[10px] text-[#444] font-bold bg-[#f2f2f2] px-2 py-[1px] border border-[#ddd] rounded-sm">{project.tech[0]}</span>
                    {project.tech[1] && <span className="text-[10px] text-[#444] font-bold bg-[#f2f2f2] px-2 py-[1px] border border-[#ddd] rounded-sm">{project.tech[1]}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-[#666]">
            <img src="https://win98icons.alexmeub.com/icons/png/search_file-2.png" className="w-16 h-16 opacity-20 mb-4" alt="No results" />
            <span className="text-[14px]">No projects found matching "{searchQuery}"</span>
            <button
              onClick={() => onSelectProject("")}
              className="mt-4 text-[#0033cc] hover:underline text-[12px]"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Click outside to deselect */}
      <div
        className="h-full w-full absolute inset-0 -z-10"
        onClick={() => onSelectProject("")}
      />
    </div>
  );
}
