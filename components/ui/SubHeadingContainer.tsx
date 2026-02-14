import { ReactNode } from "react";

interface SubHeadingContainerProps {
  children: ReactNode;
}

const SubHeadingContainer = ({ children }: SubHeadingContainerProps) => {
  return (
    <div className="inline-flex items-center rounded-full border-4 border-white shadow-sm">
      <span className="text-gray-900 font-medium text-sm leading-none inline-flex px-4 py-1.5 rounded-full  bg-gray-100 border border-gray-200  items-center gap-2">
        {children}
      </span>
    </div>
  );
};

export default SubHeadingContainer;
