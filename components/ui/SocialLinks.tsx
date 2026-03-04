import React from "react";
import Button from "../ui/Button";
import { cn } from "@/helpers/merge-helper";

interface SocialLink {
  platform: string;
  url?: string;
  icon: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  size?: "sm" | "default" | "lg" | "icon";
  variant?: "primary" | "outline" | "ghost" | "secondary";
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  size = "icon",
  variant = "outline",
  className,
}) => {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {links.map((social) => (
        <Button
          key={social.platform}
          size={size}
          variant={variant}
          disabled={!social.url}
          onClick={() =>
            social.url &&
            window.open(social.url, "_blank", "noopener,noreferrer")
          }
          aria-label={social.platform}
        >
          <i className={`${social.icon} text-xl`} />
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
