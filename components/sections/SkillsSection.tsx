"use client";

import { useState, useRef, Ref, forwardRef } from "react";
import { Lightning } from "phosphor-react";
import {
  CATEGORIES,
  Category,
  Skill,
  skillPara,
  SKILLS,
} from "@/config/user-data/skills";
import Heading from "../ui/Heading";
import SubHeadingContainer, { SimplePara } from "../ui/SubHeadingContainer";
import { capitalFirstLetter } from "@/helpers/text-helper";
import DecorativeGlowBlobs from "../ui/DecorativeGlowBlobs";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";

const RING_RADII = { inner: 90, mid: 145, outer: 198 };
const CENTER = 220;

const SkillsSection = forwardRef<HTMLElement, object>(
  (props, ref: Ref<HTMLElement>) => {
    const [activeCategory, setActiveCategory] = useState<Category>("all");
    const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
    const [centerSkill, setCenterSkill] = useState<Skill | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const filtered =
      activeCategory === "all"
        ? SKILLS
        : SKILLS.filter((s) => s.cat.includes(activeCategory));

    const handleMouseEnter = (skill: Skill, nodeX: number, nodeY: number) => {
      setHoveredSkill(skill);
      let tx = nodeX + 34;
      let ty = nodeY - 24;
      if (tx + 170 > 440) tx = nodeX - 178;
      if (ty + 90 > 440) ty = ty - 50;
      if (ty < 0) ty = 8;
      setTooltipPos({ x: tx, y: ty });
    };

    const centerData = centerSkill
      ? {
          icon: centerSkill.Icon,
          label: centerSkill.name,
          sub: centerSkill.tags.join(" · "),
        }
      : CATEGORIES[activeCategory];

    const CenterIcon = centerData.icon;

    return (
      <section
        className="relative w-full overflow-hidden bg-primary-light"
        id="skills"
        ref={ref}
      >
        {/* ── max-w-5xl centred row ─────────────────────────────────────────── */}
        <div className="relative z-10 mx-auto flex flex-col max-w-5xl items-center justify-between px-6 md:py-4">
          <div className="text-center my-2">
            <Reveal delay={0.05}>
              <SubHeadingContainer>
                <div className="flex items-center gap-2 relative justify-center">
                  <span className="inline-block py-1 px-2 rounded-full bg-white">
                    <Lightning
                      weight="fill"
                      className="w-4 h-4 text-yellow-500"
                    />
                  </span>

                  <span className="font-medium text-gray-700 uppercase tracking-wide">
                    Skills Section
                  </span>
                </div>
              </SubHeadingContainer>
            </Reveal>

            <Reveal delay={0.12}>
              <Heading as="h2" normalText="What I" highlightText="Work With" />
            </Reveal>

            <Reveal delay={0.18}>
              <SimplePara className="mt-2">{skillPara}</SimplePara>
            </Reveal>

            <Reveal delay={0.24}>
              <Stagger className="flex flex-wrap justify-start md:justify-center gap-2 mb-6" stagger={0.05}>
                {(Object.keys(CATEGORIES) as Category[]).map((category) => (
                  <StaggerItem key={category}>
                    <button
                      onClick={() => {
                        setActiveCategory(category);
                        setCenterSkill(null);
                      }}
                      className={`px-4 my-2 text-sm md:text-base py-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] ${
                        activeCategory === category
                          ? "glass-btn-active text-white"
                          : "glass-btn text-black-light"
                      }`}
                    >
                      {capitalFirstLetter(category)}
                    </button>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>

          {/* RIGHT ── orbital diagram */}
          <div className="flex items-center justify-center">
            <DecorativeGlowBlobs />
            <div
              ref={containerRef}
              className="relative shrink-0"
              style={{ width: 440, height: 440 }}
            >
              {/* Static orbit rings — three concentric circles */}
              {[
                { size: 400, offset: 20 },
                { size: 296, offset: 72 },
                { size: 194, offset: 123 },
              ].map(({ size, offset }) => (
                <div
                  key={size}
                  className="pointer-events-none absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    top: offset,
                    left: offset,
                    border: "1px solid rgba(123,44,191,0.3)",
                  }}
                />
              ))}

              {/* Animated dot — outer ring clockwise */}
              <div
                className="pointer-events-none absolute rounded-full"
                style={{
                  width: 400,
                  height: 400,
                  top: 20,
                  left: 20,
                  animation: "orbit-cw 28s linear infinite",
                }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 6,
                    height: 6,
                    top: -3,
                    left: "50%",
                    marginLeft: -3,
                    background: "#a855f7",
                    boxShadow: "0 0 8px rgba(168,85,247,0.9)",
                  }}
                />
              </div>

              {/* Animated dot — mid ring counter-clockwise */}
              <div
                className="pointer-events-none absolute rounded-full"
                style={{
                  width: 296,
                  height: 296,
                  top: 72,
                  left: 72,
                  animation: "orbit-ccw 18s linear infinite",
                }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 5,
                    height: 5,
                    bottom: -2.5,
                    left: "50%",
                    marginLeft: -2.5,
                    background: "#c084fc",
                    boxShadow: "0 0 6px rgba(192,132,252,0.9)",
                  }}
                />
              </div>

              {/* Center spotlight */}
              <div
                className="pointer-events-none absolute z-10 flex flex-col items-center justify-center text-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 110,
                }}
              >
                <CenterIcon
                  size={38}
                  weight="duotone"
                  style={{
                    filter: `drop-shadow(0 0 10px 99)`,
                  }}
                />
                <span
                  className="mt-1 block text-[13px] font-bold leading-tight text-foreground"
                  style={{ fontFamily: "'Urbanist', sans-serif" }}
                >
                  {centerData.label}
                </span>
                <span className="mt-0.5 block text-[10px] leading-snug text-primary">
                  {centerData.sub}
                </span>
              </div>

              {/* Skill nodes */}
              {filtered.map((skill) => {
                const r = RING_RADII[skill.ring];
                const rad = (skill.angle * Math.PI) / 180;
                const x = CENTER + r * Math.sin(rad);
                const y = CENTER - r * Math.cos(rad);
                const SkillIcon = skill.Icon;

                return (
                  <button
                    key={skill.id}
                    className="group absolute z-10 flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none hover:scale-110"
                    style={{
                      width: 50,
                      height: 50,
                      left: x,
                      top: y,
                      transform: "translate(-50%,-50%)",
                      background: "rgba(123,44,191,0.08)",
                      border: "1px solid rgba(123,44,191,0.35)",
                      backdropFilter: "blur(6px)",
                    }}
                    onMouseEnter={() => handleMouseEnter(skill, x, y)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => setCenterSkill(skill)}
                  >
                    <SkillIcon
                      size={28}
                      weight="duotone"
                      style={{
                        filter: `drop-shadow(0 0 4px ${skill?.color}66)`,
                      }}
                      color={skill?.color}
                    />
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-semibold text-primary opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                      {skill.label}
                    </span>
                  </button>
                );
              })}

              {/* Tooltip */}
              {hoveredSkill && (
                <div
                  className="pointer-events-none absolute z-20 min-w-[155px] rounded-xl px-3 py-2.5"
                  style={{
                    left: tooltipPos.x,
                    top: tooltipPos.y,
                    background: "var(--background)",
                    border: "1px solid rgba(123,44,191,0.4)",
                    boxShadow:
                      "0 8px 32px rgba(0,0,0,0.15), 0 0 0 1px rgba(123,44,191,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <p
                    className="mb-1.5 text-[13px] font-bold text-foreground"
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                  >
                    {hoveredSkill.name}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {hoveredSkill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded px-1.5 py-0.5 text-[10px] text-primary"
                        style={{
                          background: "rgba(123,44,191,0.1)",
                          border: "1px solid rgba(123,44,191,0.25)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <style>{`
        @keyframes orbit-cw  { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
        @keyframes orbit-ccw { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
      `}</style>
      </section>
    );
  },
);

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
