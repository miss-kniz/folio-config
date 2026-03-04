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
      {/* Grid for Experience + Education + Personal Story */}
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

        {/* Column 2: Education + Personal Story */}
        <div className="space-y-8">
          {/* Personal Story on top */}
          {aboutData.aboutMe.personalStory && (
            <div>
              <Heading
                as="h5"
                normalText="My Story"
                className="mb-3 "
                center={false}
              />
              <div className="mt-2 h-px w-full bg-linear-to-r from-primary to-transparent opacity-40 mb-2" />

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

          <div>
            <SectionHeader label="Education" />
            <ul className="space-y-4 mt-4">
              {data.education.map((edu, idx) => (
                <EducationItem key={idx} {...edu} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Hobbies Section — Full width, center-aligned */}
      {data.hobbies.length > 0 && (
        <div className="mt-8 text-center">
          <SectionHeader label="Hobbies" />
          <ul className="flex flex-wrap justify-center gap-2 mt-4">
            {data.hobbies.map((hobby, idx) => (
              <Button size="sm" key={idx} className="font-medium">
                {hobby}
              </Button>
            ))}
          </ul>
        </div>
      )}
    </Modal>
  );
};

/* ───────── Sub Components ───────── */

const SectionHeader = ({ label }: { label: string }) => (
  <div>
    <Heading as="h5" normalText={label} center={label === "Hobbies"} />
    <div className="mt-2 h-px w-full bg-linear-to-r from-primary to-transparent opacity-40" />
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
  <li className="group relative pl-4 transition-all duration-200 border-l-2 border-primary">
    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary transition-transform duration-200 group-hover:scale-125" />

    <h4 className="font-semibold text-sm leading-snug text-foreground">
      {role}
    </h4>

    {company && (
      <p className="text-xs font-medium mt-0.5 text-primary">{company}</p>
    )}

    {period && <p className="text-xs mt-0.5 text-black-light">{period}</p>}

    {description && (
      <p className="text-xs mt-1.5 leading-relaxed text-black-light">
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
  <li className="group relative pl-4 border-l-2 border-primary">
    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary transition-transform duration-200 group-hover:scale-125" />

    <h4 className="font-semibold text-sm text-foreground">{degree}</h4>

    <p className="text-xs mt-0.5 text-primary">{institution}</p>

    {period && <p className="text-xs mt-0.5 text-black-light">{period}</p>}
  </li>
);

export default JourneyModal;
