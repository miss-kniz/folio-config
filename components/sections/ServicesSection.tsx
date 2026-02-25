"use client";
import { services } from "@/types/services";
import Heading from "../ui/Heading";
import ServiceCard from "../ui/ServiceCard";
import SubHeadingContainer, { SimplePara } from "../ui/SubHeadingContainer";
import { Lightbulb } from "phosphor-react";

const ServicesSection = () =>
{
  const handleCardClick = (serviceId: number) =>
  {
    console.log("Clicked service:", serviceId);
    // Later: Open modal or navigate to case study page
  };

  return (
    <section className="bg-primary-light md:py-4 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center my-3">
          <SubHeadingContainer>
            <div className="flex items-center gap-2 relative justify-center">
              <span className="inline-block py-1 px-2 rounded-full bg-white">
                <Lightbulb weight="fill" className="w-4 h-4 text-yellow-500" />
              </span>
              <span className="font-medium text-gray-700 uppercase tracking-wide">
                Service Section
              </span>
            </div>
          </SubHeadingContainer>
          <Heading as="h2" normalText="What I" highlightText="Help You Build" />
          <SimplePara className="mt-2">
            From clean landing pages to full web apps, I focus on building fast,
            scalable, and user-friendly digital experiences.
          </SimplePara>
        </div>

        <div className="grid grid-cols-2 py-2 md:grid-cols-3 gap-4 md:gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onClick={() => handleCardClick(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
