import Image from "next/image";
import Heading from "../ui/Heading";
import { SimplePara } from "../ui/SubHeadingContainer";

const AboutSection = () =>
{
    return (
        <section className="bg-primary-light md:py-4 px-2">
            <div className="max-w-5xl mx-auto flex justify-between gap-4 items-center">
                <div>
                    <Heading as="h2" normalText="Short Intro" highlightText="About Me" center={false} />
                    <SimplePara className="mt-2">
                        I’m a frontend developer passionate about building fast, scalable, and user-friendly digital experiences.
                    </SimplePara>
                </div>
                <div>
                    <Image src="/about.png" alt="About" width={500} height={500} />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;