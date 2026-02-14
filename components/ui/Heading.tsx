import React from "react";

type HeadingLevel = "h1" | "h2" | "h3";

interface HeadingProps {
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
}: HeadingProps) {
  const Tag = as;

  const sizeStyles = {
    h1: "text-4xl md:text-6xl lg:text-7xl",
    h2: "text-3xl md:text-5xl",
    h3: "text-2xl md:text-3xl",
  };

  return (
    <Tag
      className={`
        font-bold leading-tight
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
