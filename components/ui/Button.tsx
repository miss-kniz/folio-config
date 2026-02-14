import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "default", children, className, ...props },
    ref,
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-colors text-center tracking-wide";

    const variantClasses = {
      primary: "bg-primary text-white hover:bg-primary-dark shadow-md",
      outline:
        "border border-primary text-primary bg-transparent hover:bg-primary-light",
      ghost: "border border-gray-300 text-foreground hover:bg-gray-50",
    };

    const sizeClasses = {
      sm: "h-9 px-3 text-xs",
      default: "h-11 px-6 text-sm md:text-medium",
      lg: "h-12 px-8 text-base",
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ""}`;

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
