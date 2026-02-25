"use client";

import Image from "next/image";
import { Info, Star } from "phosphor-react";
import Button from "../ui/Button";
import SubHeadingContainer from "../ui/SubHeadingContainer";
import Heading from "../ui/Heading";

export default function HeroSection()
{
  return (
    <section className="relative pt-10 md:pt-16">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center max-w-7xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Trust Badge */}
          <SubHeadingContainer>
            <div className="flex items-center gap-2 relative justify-center">
              <span className="hidden md:inline-block  py-1 px-2 rounded-full bg-white">

                <Star
                  weight="fill"
                  className="w-4 h-4 text-yellow-500"
                />
              </span>
              <div className="md:hidden text-yellow-500 flex absolute -top-5 text-lg">
                <Star weight="fill" />
                <Star weight="fill" />
                <Star weight="fill" />
              </div>
              <span className="text-xs md:text-sm">
                Trusted by founders, startups, and growing teams worldwide.
              </span>
            </div>
          </SubHeadingContainer>

          {/* Main Headline */}
          <Heading
            as="h1"
            normalText={
              <>
                Turning <span className="text-primary"> Ideas Into </span> High-
                <br />
                Performing
                <span className="text-primary"> Digital Products </span>
              </>
            }
          />

          {/* Subheading */}
          <p className="md:text-xl text-black-light max-w-3xl">
            I design and build fast, responsive websites and small web apps that
            help startups and businesses convert visitors into customers.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://calendar.app.google/fpRU2qDXNfbg4BSK8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Book Clarity</Button>
            </a>
            <a
              href="https://www.linkedin.com/in/mehak-fatima-naqvi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary"> Connect on LinkedIn </Button>
            </a>
          </div>

          {/* Section Divider */}
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <Info size={20} />

            <span>
              Some <span className="font-bold">Project</span> Highlights Are
              Below
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
