import React from 'react';
import { User, GraduationCap, Video } from 'lucide-react';
import { FloralDecoration } from './ui/Decorative';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <FloralDecoration />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="text-primary-dark">About</span> Me
        </h2>
        <p className="text-center text-accent-dark mb-16 font-medium">The story behind my passion</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <User className="text-primary-dark" />,
              title: "Who I Am",
              description: "I'm Temileyi, a passionate video editor with a creative eye for storytelling and visual composition."
            },
            {
              icon: <GraduationCap className="text-primary-dark" />,
              title: "Education",
              description: "Currently studying Physiotherapy at the University of Lagos, bringing a unique perspective to my creative work."
            },
            {
              icon: <Video className="text-primary-dark" />,
              title: "Expertise",
              description: "Specialized in creating engaging content using CapCut and other mobile editing apps for social media and promotional purposes."
            }
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-primary-light/30 to-accent-light/30 p-8 rounded-2xl card-shadow hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}