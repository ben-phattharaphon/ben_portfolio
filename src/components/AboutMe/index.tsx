"use client";

import React from "react";
import { MenuBar } from "./MenuBar";

import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";

export function AboutMeBrowser() {
  return (
    <div
      className="flex flex-col w-full h-full bg-[#ece9d8] text-black"
      style={{ fontFamily: "Tahoma, 'Segoe UI', sans-serif" }}
    >



      {/* ── Main Layout Split ── */}
      <div className="flex flex-1 overflow-hidden min-h-0">
        <Sidebar />
        <MainContent />
      </div>

      {/* ── Status Bar ── */}
      <div className="flex items-center px-2 py-[2px] bg-[#ece9d8] border-t border-[#d4d0c8] shadow-[inset_0_1px_0_white]">
        <span className="text-[11px] text-black w-full text-left">
          Learn more about Phattharaphon
        </span>
      </div>
    </div>
  );
}
