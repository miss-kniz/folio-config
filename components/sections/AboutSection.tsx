"use client";

import Image from "next/image";
import { forwardRef, Ref, useState } from "react";
import { Lightbulb } from "phosphor-react";

import Heading from "../ui/Heading";
import SubHeadingContainer, { SimplePara } from "../ui/SubHeadingContainer";
import Button from "../ui/Button";
import JourneyModal from "../modals/JourneyModal";
import aboutData from "@/config/user-data/about";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";

const AboutSection = forwardRef<HTMLElement, object>(
  (props, ref: Ref<HTMLElement>) => {
    const { aboutMe } = aboutData;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const renderParagraph = (text: string, index: number) => {
      const regex = /(\{[^}]+\})/;
      const parts = text.split(regex);

      return (
        <SimplePara
          key={index}
          className={`mt-${index === 0 ? "2" : "1"} font-light`}
        >
          {parts.map((part, idx) => {
            if (part.startsWith("{") && part.endsWith("}")) {
              return <strong key={idx}>{part.slice(1, -1)}</strong>;
            }
            return part;
          })}
        </SimplePara>
      );
    };

    return (
      <>
        <section
          className="bg-primary-light text-[13px] py-4 md:py-8 px-4 mt-2"
          id="about"
          ref={ref}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:gap-8 items-center">
            <div className="flex-1">
              <Reveal delay={0.05}>
                <SubHeadingContainer>
                  <div className="flex items-center gap-2 relative justify-center">
                    <span className="inline-block py-1 px-1 rounded-full bg-white">
                      <Lightbulb
                        weight="fill"
                        className="w-4 h-4 text-yellow-500"
                      />
                    </span>
                    <span className="font-medium text-gray-600 uppercase tracking-wide">
                      About Section
                    </span>
                  </div>
                </SubHeadingContainer>
              </Reveal>

              <Reveal delay={0.12}>
                <Heading
                  as="h2"
                  normalText={aboutMe.heading.normalText}
                  highlightText={aboutMe.heading.highlightedText}
                  center={false}
                />
              </Reveal>

              <Stagger className="space-y-2">
                {aboutMe.paragraphs.map((paragraph, index) => (
                  <StaggerItem key={index}>
                    {renderParagraph(paragraph, index)}
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal delay={0.24}>
                <Stagger className="flex gap-2 mt-4 flex-wrap">
                  {aboutMe.highlightedAboutRole.map((title, index) => (
                    <StaggerItem
                      key={index}
                      className="text-xs font-medium px-2 py-1 rounded-md bg-black-light/10 text-primary"
                    >
                      {title}
                    </StaggerItem>
                  ))}
                </Stagger>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-2">
                  <Button
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                    className="mt-2"
                  >
                    {aboutMe.aboutCTA}
                  </Button>
                  {aboutMe.aboutSecondaryCTA && (
                    <Button
                      variant={"secondary"}
                      onClick={aboutMe.aboutSecondaryCTA.onClick}
                      className="mt-2"
                    >
                      {aboutMe.aboutSecondaryCTA.text}{" "}
                      <i
                        className={`${aboutMe.aboutSecondaryCTA.icon} text-2xl align-middle`}
                      ></i>
                    </Button>
                  )}
                </div>
              </Reveal>
            </div>

            <Reveal className="flex-1 mt-6 md:mt-0 flex justify-center" delay={0.15}>
              <Image
                src={"/photo-gallery/my-picture.png"}
                alt={`Miss kniz - Photo of ${aboutData.name}`}
                width={400}
                height={400}
                className="rounded-2xl shadow-xl object-cover max-w-full"
              />
            </Reveal>
          </div>
        </section>

        <JourneyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  },
);

AboutSection.displayName = "AboutSection";

export default AboutSection;
