import React from "react";

type HeadingLevel = "h1" | "h2" | "h3";

interface HeadingProps
{
  as?: HeadingLevel;
  normalText: any;
  highlightText?: string;
  center?: boolean;
  className?: string;
}

export default function Heading({
  as = "h2",
  normalText,
  highlightText,
  center = true,
  className = "",
}: HeadingProps)
{
  const Tag = as;

  const sizeStyles = {
    h1: "text-3xl  font-bold md:text-5xl lg:text-7xl",
    h2: "text-2xl  font-bold md:text-4xl lg:text-5xl",
    h3: "text-xl  font-bold md:text-3xl lg:text-4xl",
    h4: "text-[14px] font-medium",
  };

  return (
    <Tag
      className={`
        leading-tight
        ${sizeStyles[as]}
        ${center ? "text-center" : "text-left"}
        ${className}
      `}
    >
      {normalText}{" "}
      {highlightText && <span className="text-primary">{highlightText}</span>}
    </Tag>
  );
}
