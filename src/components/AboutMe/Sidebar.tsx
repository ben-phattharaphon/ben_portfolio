"use client";

import React from "react";

const SidebarBox = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="rounded overflow-hidden shadow-sm shrink-0">
    <div className="bg-gradient-to-r from-[#003399] to-[#3366cc] text-white text-[11px] font-bold p-[4px_8px] flex justify-between items-center cursor-pointer hover:from-[#0044cc] hover:to-[#4477dd]">
      <span>{title}</span>
      <span className="text-white transform rotate-180 text-[10px] scale-x-150">▼</span>
    </div>
    <div className="bg-[#d1dced] p-[6px_8px] border-b border-l border-r border-[#8fa0db]">
      <ul className="flex flex-col gap-[3px]">
        {children}
      </ul>
    </div>
  </div>
);

const SkillItem = ({ name, logoSlug, color, iconUrl }: { name: string, logoSlug?: string, color?: string, iconUrl?: string }) => (
  <li className="flex items-center gap-2 cursor-default text-[#003399] hover:bg-white/30 rounded px-1 py-[1px]">
    {iconUrl ? (
      <img 
        src={iconUrl} 
        width={13} 
        height={13} 
        alt={name}
        className="shrink-0 object-contain"
      />
    ) : logoSlug ? (
      <img 
        src={`https://cdn.simpleicons.org/${logoSlug}`} 
        width={13} 
        height={13} 
        alt={name}
        className="shrink-0"
      />
    ) : (
      <div className="w-[13px] h-[13px] rounded-sm shrink-0 flex items-center justify-center text-[7px] font-bold text-white leading-none" style={{ backgroundColor: color || '#003399' }}>
        {name.substring(0, 1)}
      </div>
    )}
    <span className="text-[11px] truncate">{name}</span>
  </li>
);

export function Sidebar() {
  return (
    <div className="w-[220px] shrink-0 h-full min-h-0 bg-[#6b82c6] flex flex-col p-[10px] gap-3 border-r-2 border-[#1660E8] overflow-y-auto custom-scrollbar shadow-[inset_-2px_0_4px_rgba(0,0,0,0.1)] font-tahoma">
      
      {/* Social Links */}
      <SidebarBox title="Social Links">
        <li className="mb-1">
          <a href="https://www.instagram.com/benzichan?utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-[#003399] px-1">
            <img src="https://cdn.simpleicons.org/instagram" width={13} height={13} alt="" />
            <span className="text-[11px]">Instagram</span>
          </a>
        </li>
        <li className="mb-1">
          <a href="https://github.com/ben-phattharaphon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-[#003399] px-1">
            <img src="https://cdn.simpleicons.org/github" width={13} height={13} alt="" />
            <span className="text-[11px]">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/phattharaphon-saengphak-70b210338" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-[#003399] px-1">
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" width={16} height={16} alt="" />
            <span className="text-[11px]">LinkedIn</span>
          </a>
        </li>
      </SidebarBox>

      {/* Languages */}
      <SidebarBox title="Languages">
        <SkillItem name="JavaScript" logoSlug="javascript" />
        <SkillItem name="TypeScript" logoSlug="typescript" />
        <SkillItem name="HTML5" logoSlug="html5" />
        <SkillItem name="CSS3" iconUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDwBd9LoQzBAZigXXxzQ0kKn6TwyrE0Y7Rg&s" />
      </SidebarBox>

      {/* Frameworks & Libraries */}
      <SidebarBox title="Frameworks & Libs">
        <SkillItem name="React.js" logoSlug="react" />
        <SkillItem name="Next.js" logoSlug="nextdotjs" />
        <SkillItem name="Node.js" logoSlug="nodedotjs" />
        <SkillItem name="Nest.js" logoSlug="nestjs" />
        <SkillItem name="Express.js" logoSlug="express" />
        <SkillItem name="Vue.js" logoSlug="vuedotjs" />
        <SkillItem name="Angular" logoSlug="angular" />
        <SkillItem name="TailwindCSS" logoSlug="tailwindcss" />
        <SkillItem name="Zustand" color="#433929" />
        <SkillItem name="Socket.io" logoSlug="socketdotio" />
        <SkillItem name="Mapbox GL" logoSlug="mapbox" />
      </SidebarBox>

      {/* Databases & Backend */}
      <SidebarBox title="Databases & Security">
        <SkillItem name="MySQL" logoSlug="mysql" />
        <SkillItem name="PostgreSQL" logoSlug="postgresql" />
        <SkillItem name="Prisma" logoSlug="prisma" />
        <SkillItem name="Supabase" logoSlug="supabase" />
        <SkillItem name="Firebase" logoSlug="firebase" />
        <SkillItem name="MongoDB" logoSlug="mongodb" />
        <SkillItem name="JWT" logoSlug="jsonwebtokens" />
        <SkillItem name="Bcrypt" color="#323330" />
      </SidebarBox>

      {/* DevOps & Tools */}
      <SidebarBox title="DevOps & APIs">
        <SkillItem name="Docker" logoSlug="docker" />
        <SkillItem name="Vercel" logoSlug="vercel" />
        <SkillItem name="Render" logoSlug="render" />
        <SkillItem name="RESTful API" color="#00abec" />
        <SkillItem name="Swagger" logoSlug="swagger" />
        <SkillItem name="Postman" logoSlug="postman" />
      </SidebarBox>

      {/* AI & Design */}
      <SidebarBox title="Dev & AI Tools">
        <SkillItem name="Cursor" color="#000000" />
        <SkillItem name="Gemini CLI" logoSlug="googlegemini" />
        <SkillItem name="Claude CLI" logoSlug="anthropic" />
        <SkillItem name="Figma" logoSlug="figma" />
        <SkillItem name="Git & GitHub" logoSlug="github" />
      </SidebarBox>

    </div>
  );
}
