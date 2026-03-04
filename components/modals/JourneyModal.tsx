"use client";

import { useState, useEffect } from "react";
import Modal from "./Modal";
import aboutData from "@/config/user-data/about";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import ServiceCard from "../ui/ServiceCard";

const JourneyModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [data, setData] = useState({
    education: aboutData.education || [],
    experience: aboutData.experience,
    hobbies: aboutData.hobbies,
  });

  useEffect(() => {
    if (isOpen) {
      setData({
        education: aboutData.education || [],
        experience: aboutData.experience,
        hobbies: aboutData.hobbies,
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="My Journey">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Column 1: Experience */}
        <div>
          <SectionHeader label="Experience" />
          <ul className="space-y-5 mt-4">
            {data.experience.map((exp, idx) => (
              <ExperienceItem key={idx} {...exp} />
            ))}
          </ul>
        </div>

        {/* Column 2: Education + Hobbies */}
        <div className="space-y-8">
          <div>
            <SectionHeader label="Education" />
            <ul className="space-y-4 mt-4">
              {data.education.map((edu, idx) => (
                <EducationItem key={idx} {...edu} />
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader label="Hobbies" />
            <ul className="flex flex-wrap gap-2 mt-4">
              {data.hobbies.map((hobby, idx) => (
                <Button size="sm" key={idx} className="font-medium">
                  {hobby}
                </Button>
              ))}
            </ul>
          </div>
          {aboutData.aboutMe.personalStory && (
            <div className="mt-6">
              <ServiceCard
                title={aboutData.aboutMe.personalStory.title}
                description={aboutData.aboutMe.personalStory.description}
                imageUrl={aboutData.aboutMe.personalStory.imageUrl}
                onClick={() =>
                  window.open(
                    aboutData.aboutMe.personalStory!.link,
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              />
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

/* ── Sub-components ── */

const SectionHeader = ({ label }: { label: string }) => (
  <div>
    <Heading
      as="h4"
      normalText={label}
      center={false}
      className="text-base tracking-widest text-primary font-semibold uppercase"
    />
    <div
      className="mt-2 h-px w-full"
      style={{
        background: "linear-gradient(to right, var(--primary), transparent)",
        opacity: 0.4,
      }}
    />
  </div>
);

const ExperienceItem = ({
  role,
  company,
  period,
  description,
}: {
  role: string;
  company?: string;
  period?: string;
  description?: string;
}) => (
  <li
    className="group relative pl-4 transition-all duration-200"
    style={{
      borderLeft: "2px solid var(--primary)",
    }}
  >
    {/* Animated dot on the border */}
    <span
      className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full transition-transform duration-200 group-hover:scale-125"
      style={{ background: "var(--primary)" }}
    />
    <h4
      className="font-semibold text-sm leading-snug"
      style={{ color: "var(--foreground)" }}
    >
      {role}
    </h4>
    {company && (
      <p
        className="text-xs font-medium mt-0.5"
        style={{ color: "var(--primary)" }}
      >
        {company}
      </p>
    )}
    {period && (
      <p className="text-xs mt-0.5" style={{ color: "var(--black-light)" }}>
        {period}
      </p>
    )}
    {description && (
      <p
        className="text-xs mt-1.5 leading-relaxed"
        style={{ color: "var(--black-light)" }}
      >
        {description}
      </p>
    )}
  </li>
);

const EducationItem = ({
  degree,
  institution,
  period,
}: {
  degree: string;
  institution: string;
  period?: string;
}) => (
  <li
    className="group relative pl-4"
    style={{ borderLeft: "2px solid var(--primary)" }}
  >
    <span
      className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full transition-transform duration-200 group-hover:scale-125"
      style={{ background: "var(--primary)" }}
    />
    <h4
      className="font-semibold text-sm"
      style={{ color: "var(--foreground)" }}
    >
      {degree}
    </h4>
    <p className="text-xs mt-0.5" style={{ color: "var(--primary)" }}>
      {institution}
    </p>
    {period && (
      <p className="text-xs mt-0.5" style={{ color: "var(--black-light)" }}>
        {period}
      </p>
    )}
  </li>
);
export default JourneyModal;
