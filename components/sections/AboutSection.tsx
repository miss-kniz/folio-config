"use client";
import Image from "next/image";
import Heading from "../ui/Heading";
import SubHeadingContainer, { SimplePara } from "../ui/SubHeadingContainer";
import { Lightbulb } from "phosphor-react";
import Button from "../ui/Button";

const AboutSection = () => {
  const buttonTitles: string[] = [
    "Full-Stack Ninja",
    "Scalable Web Solutions Expert",
    "React & Next.js Pro",
    "Web Performance Optimizer",
    "UX Expert",
    "Digital Problem Solver",
  ];

  return (
    <section className="bg-primary-light text-[13px] py-4 md:py-8 px-4 mt-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between  md:gap-8 items-center">
        {/* Left Content */}
        <div className="flex-1">
          <SubHeadingContainer>
            <div className="flex items-center gap-2 relative justify-center">
              <span className="inline-block py-1 px-1 rounded-full bg-white">
                <Lightbulb weight="fill" className="w-4 h-4 text-yellow-500" />
              </span>
              <span className="font-medium text-gray-700 uppercase tracking-wide">
                About Section
              </span>
            </div>
          </SubHeadingContainer>

          <Heading
            as="h2"
            normalText="From dusty PC"
            highlightText="to strong {Developer}"
            center={false}
          />

          <SimplePara className="mt-4 font-light md:text-sm">
            I’m <strong>Mehak Fatima Naqvi</strong> — Full-Stack Developer,
            Frontend Specialist, and aspiring freelancer. From humble
            beginnings, I’ve built my skills step by step to create fast,
            scalable, and user-friendly web applications. I love transforming
            challenges into clean, maintainable solutions that make a real
            impact.
          </SimplePara>
          <div className="flex gap-2 mt-4 flex-wrap">
            {buttonTitles.map((title, index) => (
              <span
                key={index}
                className="text-xs font-medium px-2 py-1 rounded-md bg-black-light/10 text-primary"
              >
                {title}
              </span>
            ))}
          </div>
          <Button className="mt-2">Discover My Journey</Button>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/Mehak.png"
            alt="Mehak Fatima Naqvi"
            width={400}
            height={400}
            className="rounded-2xl shadow-xl object-cover max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
