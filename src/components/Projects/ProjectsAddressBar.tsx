"use client";

import React from "react";

export function ProjectsAddressBar() {
  return (
    <div className="flex items-center px-2 py-[3px] bg-[#ece9d8] border-b border-[#d4d0c8] gap-2">
      <span className="text-[11px] text-[#666] ml-1">Address</span>
      <div className="flex-1 flex items-center bg-white border border-[#7f9db9] px-1 h-[22px] shadow-[inset_1px_1px_1px_rgba(0,0,0,0.1)]">
        <img 
          src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png" 
          alt="folder" 
          className="w-4 h-4 mr-1"
        />
        <input 
          type="text" 
          value="C:\Documents and Settings\Portfolio\Projects" 
          readOnly
          className="bg-transparent border-none outline-none text-[11px] w-full text-black"
        />
        <img 
          src="https://win98icons.alexmeub.com/icons/png/arrow_down-0.png" 
          alt="expand" 
          className="w-3 h-3 ml-auto cursor-pointer"
        />
      </div>
      <button className="flex items-center gap-1 px-2 hover:bg-[#d4d0c8] rounded border border-transparent">
        <span className="text-[11px] text-black">Go</span>
        <div className="w-4 h-4 bg-[#215dc6] rounded flex items-center justify-center">
            <div className="border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[4px] border-l-white ml-[2px]"></div>
        </div>
      </button>
    </div>
  );
}
