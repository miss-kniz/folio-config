"use client";
import { cn } from "@/helpers/merge-helper";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "secondary";
  size?: "sm" | "default" | "lg" | "icon";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "default",
      children,
      className,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "inline-flex items-center gap-1 justify-center whitespace-nowrap rounded-full text-center tracking-wide transition-[transform,background-color,border-color,box-shadow,color] duration-300 ease-out will-change-transform hover:-translate-y-0.5";

    const variantClasses = {
      primary:
        "bg-primary font-semibold text-white hover:bg-primary-dark shadow-md",
      outline:
        "border border-primary font-semibold text-primary bg-transparent hover:bg-primary-light",
      ghost:
        "border border-primary/40 font-serif bg-primary/10 hover:bg-primary/20 hover:border-primary/70 transition-all duration-200",
      secondary:
        "border border-black-light backdrop-blur-sm font-semibold bg-transparent hover:bg-primary-light",
    };

    const sizeClasses = {
      sm: "h-9 px-3 text-sm",
      default: "h-11 px-6 text-base md:text-lg",
      lg: "h-12 px-8 text-base",
      icon: "w-10 h-10 p-2 rounded-full",
    };

    // Disabled classes
    const disabledClasses = disabled
      ? "opacity-40 cursor-not-allowed pointer-events-none"
      : "";

    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      disabledClasses,
      className,
    );

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
