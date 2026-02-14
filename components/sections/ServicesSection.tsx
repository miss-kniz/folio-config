import Heading from "../ui/Heading";
import SubHeadingContainer from "../ui/SubHeadingContainer";

const ServicesSection = () => {
  return (
    <div className="bg-primary-light h-screen p-2 mx-auto flex items-center justify-center flex-col gap-4">
      <SubHeadingContainer>Service Section </SubHeadingContainer>
      <div className="max-w-5xl">
        <Heading as="h2" normalText="What I" highlightText="Help You Build" />
        <p className="text-center text-gray-500 mt-4">
          From clean landing pages to full web apps, I focus on building fast,
          scalable, and user-friendly digital experiences.
        </p>
      </div>
    </div>
  );
};
export default ServicesSection;
