import { link } from "fs";
import Heading from "./Heading";

const Footer = () =>
{
    const socailLinks = [{
        iconClass: "ri-instagram-fill",
    }
        ,
    {
        iconClass: "ri-linkedin-fill",
        link: "https://www.linkedin.com/in/mehak-fatima-naqvi"
    }, {
        iconClass: "ri-twitter-fill",
        link: "https://www.linkedin.com/in/mehak-fatima-naqvi"
    }]
    const date = Date()
    console.log('data', date)
    return (
        <footer className="w-full bg-gray-100 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
                {/* Logo / Name */}
                <Heading as='h2' normalText={'Mehak'} />


                {/* Navigation */}
                <nav className="flex flex-wrap justify-center gap-8 text-sm  tracking-wide text-gray-600 font-medium">
                    <a href="#home" className="hover:text-primary transition-colors">Home</a>
                    <a href="#services" className="hover:text-primary transition-colors">Services</a>
                    <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                    <a href="#about" className="hover:text-primary transition-colors">About</a>
                    <a href="#contact" className="hover:text-primary transition-colors">Contact us</a>
                </nav>

                {/* Social Icons */}
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all"
                    >
                        <i className="ri-instagram-fill" />
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all"
                    >
                        <i className="ri-facebook-fill" />
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all"
                    >
                        <i className="ri-linkedin-fill" />
                    </a>

                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-200"></div>

                {/* Copyright */}
                <p className="text-xs text-gray-500 text-center">
                    © {Date()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;