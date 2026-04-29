"use client";

import Image from "next/image";
import { Star } from "phosphor-react";
import Button from "../ui/Button";
import SubHeadingContainer from "../ui/SubHeadingContainer";
import Heading from "../ui/Heading";
import aboutData from "@/config/user-data/about";
import { forwardRef, Ref } from "react";
import InfiniteScrollProjects from "./InfiniteScrollProjects";
import { highlightText } from "@/helpers/text-helper";
import { Reveal, Stagger, StaggerItem, TextReveal } from "../motion/Reveal";

const HeroSection = forwardRef<HTMLElement, { portfolioForJob: boolean }>(
  ({ portfolioForJob }, ref: Ref<HTMLElement>) => {
    const { showCurtain, topText, highlightsFromTopText, hero } = aboutData;

    return (
      <>
        <section className="relative pt-20 md:pt-16" id="home" ref={ref}>
          {showCurtain && (
            <>
              {/* Left Curtain */}
              <div className="absolute left-0 md:-top-65 lg:-top-50 -top-80 w-1/3 h-dvh opacity-30 md:opacity-50">
                <Image
                  src="/left-curtain.svg"
                  alt="Left decorative curtain"
                  fill
                  className="object-fill"
                />
              </div>
              {/* Right Curtain */}
              <div className="absolute right-0 md:-top-65 lg:-top-50 -top-80 w-1/3 h-dvh opacity-30 md:opacity-50">
                <Image
                  src="/right-curtain.svg"
                  alt="Right decorative curtain"
                  fill
                  className="object-fill"
                />
              </div>
            </>
          )}

          <div className="container mx-auto px-2 relative z-10 my-4 md:my-8">
            <div className="flex flex-col items-center max-w-7xl mx-auto text-center space-y-6 md:space-y-8">
              {/* Trust Badge */}
              <Reveal delay={0.05}>
                <SubHeadingContainer>
                  {portfolioForJob && topText ? (
                    <div className="flex items-center justify-center gap-2">
                      <span className="p-1 bg-green-500 rounded-full"></span>
                      <p className="tracking-wider">
                        {highlightText(
                          topText,
                          "text-green-500",
                          highlightsFromTopText,
                        )}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 relative justify-center">
                      <span className="hidden md:inline-block py-1 px-2 rounded-full bg-white">
                        <Star
                          weight="fill"
                          className="w-4 h-4 text-yellow-500"
                        />
                      </span>

                      <Star weight="fill" className="text-yellow-500 w-5 h-5" />

                      <div className="md:hidden absolute -top-5 flex text-yellow-500 text-lg">
                        <Star weight="fill" />
                        <Star weight="fill" />
                      </div>

                      {highlightText(
                        topText,
                        "text-green-500",
                        highlightsFromTopText,
                      )}
                    </div>
                  )}
                </SubHeadingContainer>
              </Reveal>

              {/* Main Headline */}
              <Reveal delay={0.16}>
                <Heading
                  as="h1"
                  className="my-4 max-w-7xl leading-none!"
                  normalText={
                    <>
                      {highlightText(
                        hero.headline,
                        "text-primary",
                        hero.highlightedWords,
                      )}
                    </>
                  }
                />
              </Reveal>

              {/* Subheading */}
              <Reveal delay={0.26}>
                <p className="md:text-xl font-serif text-black-light max-w-3xl">
                  <TextReveal text={hero.heroPara} delay={0.24} />
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal delay={0.34}>
                <Stagger className="flex justify-center gap-4">
                  {hero.primaryCtaText && hero.primaryCtaLink && (
                    <StaggerItem>
                      <a
                        href={hero.primaryCtaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary">{hero.primaryCtaText}</Button>
                      </a>
                    </StaggerItem>
                  )}

                  {hero.secondaryCtaText && hero.secondaryCtaLink && (
                    <StaggerItem>
                      <a
                        href={hero.secondaryCtaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary">
                          {hero.secondaryCtaText}
                        </Button>
                      </a>
                    </StaggerItem>
                  )}
                </Stagger>
              </Reveal>
            </div>
          </div>
        </section>
        <InfiniteScrollProjects />
      </>
    );
  },
);

HeroSection.displayName = "HeroSection";
export default HeroSection;
