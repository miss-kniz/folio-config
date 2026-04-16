import React from "react";
import Heading from "./Heading";
import { SimplePara } from "./SubHeadingContainer";
import { cn } from "@/helpers/merge-helper";

interface ServiceCardProps {
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
  className?: string;
  imageWidth?: string;
  showDescriptionInMobile?: boolean;
}

const ServiceCard = ({
  id,
  title,
  description,
  imageUrl,
  onClick,
  className,
  imageWidth,
  showDescriptionInMobile = false,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "group p-1 flex flex-col lg:flex-row gap-2 shadow-sm w-full rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      {/* Image */}
      <div
        className={cn(
          "w-full h-44 lg:w-1/2 overflow-hidden rounded-xl shadow-lg",
          imageWidth,
        )}
      >
        <img
          src={imageUrl}
          alt={`Mehak Fatima naqvi (miss kniz)'s - Service ${title}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-1 pt-2 flex-1">
        {/* Badge */}
        {id && (
          <span className="hidden md:inline-block mb-2 px-2 py-1 text-xs font-medium text-white rounded-full bg-primary">
            #{id.toString().padStart(2, "0")}
          </span>
        )}

        {/* Title */}
        <Heading as="h4" className="text-left" normalText={title} />

        {/* Description */}
        <SimplePara
          className={`${showDescriptionInMobile ? "inline-block" : "hidden"} md:inline-block"`}
        >
          {description}
        </SimplePara>
      </div>
    </div>
  );
};

export default ServiceCard;
