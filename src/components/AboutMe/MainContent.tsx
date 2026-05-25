"use client";

import React from "react";

export function MainContent() {
  return (
    <div
      className="flex-1 h-full min-h-0 bg-[#3a6ea5] text-white p-8 overflow-y-auto custom-scrollbar relative"
      style={{
        // Creating a fine pixel grid texture
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        backgroundSize: "4px 4px",
        backgroundPosition: "center",
      }}
    >
      {/* Huge decorative swoop background element */}
      <div className="absolute right-[-100px] bottom-[-100px] w-[500px] h-[500px] bg-white opacity-[0.03] rounded-full mix-blend-overlay pointer-events-none blur-[2px]"></div>

      <div
        className="flex flex-col gap-6 max-w-3xl relative z-10"
        style={{ textShadow: "1px 1px 0px rgba(0,0,0,0.8)" }}
      >
        {/* Section 1 */}
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 shrink-0 flex justify-center mt-1">
            <span
              className="text-4xl"
              role="img"
              aria-label="Waving Man"
              style={{ textShadow: "none" }}
            >
              👋
            </span>
          </div>
          <p className="text-[14px] leading-relaxed font-[Arial] tracking-wide">
            I'm Phattharaphon Saengphak, a full-stack developer based in Bangkok, Thailand. My path here wasn't exactly conventional — I spent years working as a Mining Geologist in Zambia, conducting fieldwork, mapping terrain, and calculating mineral reserves. That kind of work teaches you to be systematic, precise, and comfortable with ambiguity. Turns out those same qualities matter a lot in software development.
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 shrink-0 flex justify-center mt-1">
            <span
              className="text-4xl"
              role="img"
              aria-label="Rugby Player"
              style={{ textShadow: "none" }}
            >
              🏉
            </span>
          </div>
          <p className="text-[14px] leading-relaxed font-[Arial] tracking-wide">
            I made the shift into tech deliberately, diving into a full-stack bootcamp and building real products from the ground up. I work across the whole stack — React, Next.js, Node.js, Express, TypeScript, Prisma — and I genuinely enjoy both sides. I care as much about how something feels to use as how it's built under the hood.
          </p>
        </div>

        {/* Section 3 */}
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 shrink-0 flex justify-center mt-1">
            <span
              className="text-4xl"
              role="img"
              aria-label="Thumbs up"
              style={{ textShadow: "none" }}
            >
              👍
            </span>
          </div>
          <p className="text-[14px] leading-relaxed font-[Arial] tracking-wide">
            The projects I'm most proud of reflect that. I built a social platform for connecting people through shared activities, with real-time group chat, location-based discovery, and a matching system built around niche interests. I also built an e-commerce app for natural energy crystals — complete with birth month compatibility filtering, which was a fun design challenge.
          </p>
        </div>

        {/* Section 4 */}
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 shrink-0 flex justify-center mt-1">
            <span
              className="text-4xl"
              role="img"
              aria-label="Suit Man"
              style={{ textShadow: "none" }}
            >
              👔
            </span>
          </div>
          <p className="text-[14px] leading-relaxed font-[Arial] tracking-wide">
            I'm drawn to work that has a clear purpose and leaves people with something useful. Whether it's a clean API or an interface that just makes sense, I'd rather spend more time getting it right than ship something I'm not proud of.
          </p>
        </div>
      </div>
    </div>
  );
}
