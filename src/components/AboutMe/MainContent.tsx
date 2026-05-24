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
            I'm Phattharaphon, a designer based in Bangkok, Thailand. Originally from
            New Zealand, I attended Brisbane Boys' College before committing to
            design in my late twenties. I completed a Diploma of Graphic Design
            at Queensland TAFE and from there started freelancing in graphic
            design and video production. More recently that's extended into web
            design and front-end development. I'm drawn to interactive and
            immersive work, and I tend to invest heavily in whatever I'm
            building rather than rushing to get it out the door.
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
            Growing up in New Zealand, my interest in design grew alongside
            rugby. Playing and watching the All Blacks, I was drawn to the visual
            identity around the sport. The haka, the silver fern, the way an
            entire country's identity could be distilled into a jersey or a
            pre-match sequence. That was where I first understood the impact
            good design could have. Not just catching attention but making
            people feel something. It stuck with me, and it still shapes how I
            approach everything I work on.
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
            I've always been as interested in how things are built as how they
            look. That pulled me deeper into web development over time, where I
            found I could bring the same design thinking to interactive
            experiences. It felt like a natural extension of the work I was
            already doing. Most of what I build now is in that space, pushing
            what's possible in the browser and treating the web as its own
            medium rather than somewhere to park content.
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
            Rugby taught me more than discipline and resilience. It taught me
            what it means to hold a standard, to care about process as much as
            the result. Showing up with intent even when no one is watching.
            That carried straight into design. I'm detail-oriented to a fault,
            and I'd rather put out fewer things done properly than rush through
            a lot of things done poorly. Everything I make gets that same level
            of attention regardless of whether it's a paid job or a personal
            project.
          </p>
        </div>
      </div>
    </div>
  );
}
