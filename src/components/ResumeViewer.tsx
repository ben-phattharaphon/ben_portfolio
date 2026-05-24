"use client";

import React, { useState } from "react";

const ToolbarButton = ({
  iconSrc,
  label,
  onClick,
}: {
  iconSrc?: string;
  label: string;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-center gap-1 px-2 py-1 border border-transparent hover:border-[#b0b0b0] hover:bg-[#e0e0e0] active:bg-[#c0c0c0] active:border-[#808080] rounded-[2px]"
    style={{ userSelect: "none" }}
  >
    {iconSrc && (
      <img src={iconSrc} width={20} height={20} alt="" className="drop-shadow-sm" />
    )}
    <span className="text-[11px] text-black">{label}</span>
  </button>
);

const ToolbarSeparator = () => (
  <div className="w-[2px] h-6 bg-[#c0c0c0] border-r border-white mx-1" />
);

export function ResumeViewer() {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 20, 200));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 20, 50));

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Phattharaphon_resume.pdf';
    link.download = 'Phattharaphon_Saengphak_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col w-full h-full bg-white text-black font-sans">
      {/* --- Toolbar --- */}
      <div className="flex items-center px-1 py-1 border-b border-[#d4d0c8] gap-1 bg-[#ece9d8]">
        <ToolbarButton
          iconSrc="https://win98icons.alexmeub.com/icons/png/search_file-2.png"
          label="Zoom In"
          onClick={handleZoomIn}
        />
        <ToolbarButton
          iconSrc="https://win98icons.alexmeub.com/icons/png/search_file-1.png"
          label="Zoom Out"
          onClick={handleZoomOut}
        />
        <div className="text-[11px] px-2 text-gray-600 min-w-[40px] text-center">
          {zoom}%
        </div>
        <ToolbarSeparator />
        <ToolbarButton
          iconSrc="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4DyN4ToMdaJ0qVitDBHIM9I0nvw0MCVXlZYBVulrjYyX88p8j8itQptQs2qAYeTcpPwkLBFP6wzUi4pR_7x4bYIWqCvEXJjJXJw2ytZJwmD82bFb6t3p2Rt12cQ9kb-CS5J_I52USlQ/s200/floppy2.png"
          label="Download"
          onClick={handleDownload}
        />
        <ToolbarSeparator />
        <ToolbarButton
          iconSrc="https://win98icons.alexmeub.com/icons/png/msie1-2.png"
          label="Contact Me"
          onClick={() => window.location.href = "mailto:phattharaphon.spk@gmail.com"}
        />
        <ToolbarButton
          iconSrc="https://cdn.simpleicons.org/github"
          label="GitHub"
          onClick={() => window.open("https://github.com/ben-phattharaphon", "_blank")}
        />
      </div>

      {/* --- Content Area --- */}
      <div className="flex-1 bg-[#525659] overflow-auto flex justify-center custom-scrollbar p-4">
        <div
          className="transition-all duration-200 ease-in-out origin-top shadow-2xl"
          style={{
            width: `${zoom}%`,
            maxWidth: zoom > 100 ? 'none' : '100%',
            height: 'fit-content'
          }}
        >
          <iframe
            src="/Phattharaphon_resume.pdf#toolbar=0&navpanes=0&view=FitH"
            className="w-full aspect-[1/1.414] border-none"
            title="Resume PDF"
            style={{ pointerEvents: zoom > 100 ? 'auto' : 'none' }}
          />
        </div>
      </div>
    </div>
  );
}
