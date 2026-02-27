import { cn } from "@/helpers/merge-helper";
import { ReactNode } from "react";

interface SubHeadingContainerProps {
  children: ReactNode;
}

const SubHeadingContainer = ({ children }: SubHeadingContainerProps) => {
  return (
    <div className="inline-flex my-2 mt-8 items-center rounded-full border-4 border-white shadow-sm">
      <span className="text-gray-900 font-medium text-sm leading-none inline-flex px-4 py-1 rounded-full  bg-gray-100 border border-gray-200  items-center gap-2">
        {children}
      </span>
    </div>
  );
};

export default SubHeadingContainer;

export const SimplePara = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        `text-black-light max-w-2xl mx-auto text-sm md:text-base ${className}`,
      )}
    >
      {children}
    </p>
  );
};
