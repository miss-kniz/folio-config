"use client";

import React from "react";
import Heading from "../ui/Heading";
import { MapPin, Phone, Envelope } from "phosphor-react";
import aboutData from "@/config/about";
import Input from "../inputs/Input";
import Textarea from "../inputs/Textarea";
import Button from "../ui/Button";

const ContactSection: React.FC = () => {
  const { contact, socialLinks, name } = aboutData;
  const firstName = name.split(" ")[0];

  return (
    <section id="contact" className="py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:gap-10 gap-4 md:grid-cols-2 items-start">
          {/* LEFT */}
          <div className="space-y-8">
            <Heading as="h2" center={false} normalText="Contact Us" />

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-light text-primary">
                  <MapPin size={18} weight="regular" />
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm text-black-light">{contact.location}</p>
                </div>
              </div>

              {/* Call (only show if phone is provided) */}
              {contact.phone && (
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-light text-primary">
                    <Phone size={18} weight="regular" />
                  </div>
                  <div>
                    <p className="font-semibold">Book a Call</p>
                    <p className="text-sm text-black-light">{contact.phone}</p>
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-light text-primary">
                  <Envelope size={18} weight="regular" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-sm text-black-light break-all">
                    {contact.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Social - Now using Remix Icons */}
            <div className="pt-6 border-t border-black/10 dark:border-white/10">
              <p className="mb-4 font-medium">Follow Us :</p>
              <div className="flex gap-4">
                {aboutData.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-primary transition-all"
                    aria-label={social.platform}
                  >
                    <i className={`${social.icon} text-xl`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM (unchanged) */}
          <div className="bg-primary-light p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-6">Leave Us Your Info.</h3>

            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" />

              <Input type="email" placeholder="Email Address" />

              <Textarea rows={4} placeholder="Message" />

              {/* Checkbox */}
              <label className="flex items-start gap-2 text-xs text-black-light">
                <input type="checkbox" className="mt-1" />
                <span>
                  You agree to our{" "}
                  <span className="text-primary font-medium">
                    privacy policy
                  </span>
                  .
                </span>
              </label>

              {/* Button */}
              <Button>Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
