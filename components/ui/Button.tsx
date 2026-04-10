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
      "inline-flex items-center justify-center whitespace-nowrap rounded-full transition-colors text-center tracking-wide";

    const variantClasses = {
      primary:
        "bg-primary font-semibold text-white hover:bg-primary-dark shadow-md",
      outline:
        "border border-primary font-semibold text-primary bg-transparent hover:bg-primary-light",
      ghost:
        "text-primary border-primary border bg-primary-light hover:bg-primary/30",
      secondary:
        "border border-black-light font-semibold bg-transparent hover:bg-primary-light",
    };

    const sizeClasses = {
      sm: "h-9 px-3 text-xs",
      default: "h-11 px-6 text-md md:text-lg",
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
