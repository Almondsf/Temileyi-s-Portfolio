import React from 'react';
import { Scissors, Instagram, Youtube } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Video Editing",
      description: "Professional video editing services including cutting, transitions, effects, and sound design."
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Social Media Content",
      description: "Creation of engaging content optimized for various social media platforms."
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      title: "Promotional Videos",
      description: "Compelling promotional videos that tell your story and engage your audience."
    }
  ];

  return (
    <section id="services" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          My <span className="text-primary-dark">Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl card-shadow hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-6">
                <div className="text-primary-dark">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}