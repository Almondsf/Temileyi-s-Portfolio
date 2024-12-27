import React from "react";
import { Mail, Instagram, Linkedin, Phone } from "lucide-react";

export const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      href: "mailto:Sholatemi99@gmail.com",
      text: "Sholatemi99@gmail.com",
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      href: "https://instagram.com/__temileyi_",
      text: "__temileyi_",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/temileyi-morayo-paul-5871a7279/",
      text: "Temileyi Morayo Paul",
    },
    {
      icon: <Phone size={20} />,
      label: "WhatsApp",
      href: "https://wa.me/2349036081416",
      text: "+234 903 608 1416",
    },
  ];

  return (
    <div className="space-y-6">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-600 hover:text-primary-dark transition-colors"
          aria-label={link.label}
        >
          {link.icon}
          {link.text}
        </a>
      ))}
    </div>
  );
};
