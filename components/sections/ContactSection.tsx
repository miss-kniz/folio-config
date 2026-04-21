"use client";

import React, { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import { MapPin, Phone, Envelope, Calendar, Check, X } from "phosphor-react";
import aboutData from "@/config/user-data/about";
import Input from "../inputs/Input";
import Textarea from "../inputs/Textarea";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";

const ContactSection: React.FC = () => {
  const { contact, hero } = aboutData;
  const ctaText = hero.secondaryCtaText;
  const ctaLink = hero.secondaryCtaLink;
  console.log("hero", hero);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const contactItems = [
    {
      key: "location",
      label: "Address",
      value: contact.location,
      icon: MapPin,
      show: true,
    },
    {
      key: "phone",
      label: "Book a Call",
      value: contact.phone,
      icon: Phone,
      show: !!contact.phone,
    },
    {
      key: "email",
      label: "Email",
      value: contact.email,
      icon: Envelope,
      show: true,
    },
  ];

  const formFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Your Name",
      required: false,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email Address",
      required: true,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setToast({ message: "Message sent!", type: "success" });
      setForm({ name: "", email: "", message: "" });
    } else {
      setToast({ message: "Something went wrong", type: "error" });
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="p-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:gap-10 gap-4 md:grid-cols-2 items-start">
          {/* LEFT */}
          <div className="space-y-8 text-left">
            <Heading as="h2" center={false} normalText="Contact" />

            <div className="space-y-6 ">
              {contactItems
                .filter((item) => item.show)
                .map(({ key, label, value, icon: Icon }) => (
                  <div key={key} className="flex items-start gap-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-light text-primary">
                      <Icon size={18} weight="regular" />
                    </div>

                    <div>
                      <p className="font-semibold">{label}</p>
                      <p className="text-sm text-black-light break-all">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Social - Using Button component */}
            <div className="pt-6 border-t border-black/10 dark:border-white/10">
              <p className="mb-4 font-medium">Follow Me :</p>
              <div className="flex gap-4">
                <SocialLinks
                  links={aboutData.socialLinks}
                  size="icon"
                  variant="secondary"
                />
              </div>
            </div>
          </div>

          {/* RIGHT FORM (unchanged) */}
          <div className="bg-primary-light p-4 rounded-2xl">
            <h3 className="text-lg font-semibold mb-6">Leave Your Info.</h3>

            <form className="space-y-2" onSubmit={handleSubmit}>
              {formFields.map((field) => (
                <Input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              ))}

              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Message"
              />

              {/* Button */}
              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? "Sending" : "Send Message"}
              </Button>

              <div className="flex items-center gap-2 text-black-light">
                <div className="h-[0.5px] w-full bg-black-light"></div>
                <div>OR</div>
                <div className="h-[0.5px] w-full bg-black-light"></div>
              </div>
              <Button
                className="w-full"
                variant="outline"
                type="button"
                onClick={() => window.open(ctaLink, "_blank")}
              >
                <Calendar size={24} />
                {ctaText}
              </Button>
            </form>
          </div>
        </div>
      </div>
      {toast && (
        <div
          className={`fixed bottom-6 border right-6 px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all duration-300
      ${
        toast.type === "success"
          ? "bg-green-500/80 border-green-500 text-white"
          : "bg-red-500/80 border-red-500 text-white"
      }
    `}
        >
          <span className="flex items-center justify-start gap-2">
            {toast.type === "success" ? <Check size={24} /> : <X />}{" "}
            {toast.message}
          </span>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
