import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5";

interface HeadingProps {
  as?: HeadingLevel;
  normalText?: any;
  highlightText?: string;
  center?: boolean;
  className?: string;
}

const Heading = ({
  as = "h2",
  normalText,
  highlightText,
  center = true,
  className = "",
}: HeadingProps) => {
  const Tag = as;

  const sizeStyles = {
    h1: "text-5xl  font-bold md:text-5xl lg:text-8xl",
    h2: "text-3xl  font-bold md:text-4xl lg:text-5xl",
    h3: "text-xl  font-bold md:text-3xl lg:text-4xl",
    h4: "text-[14px] font-medium",
    h5: "text-base font-semibold uppercase tracking-widest text-primary",
  };

  return (
    <Tag
      className={`
        leading-none
        ${sizeStyles[as]}
        ${center ? "text-center" : "text-left"}
        ${className}
      `}
    >
      {normalText}{" "}
      {highlightText && <span className="text-primary">{highlightText}</span>}
    </Tag>
  );
};

export default Heading;
