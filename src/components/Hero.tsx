import React from "react";
import { Video } from "lucide-react";
import { FloralDecoration } from "./ui/Decorative";
import Temileyi from "../assets/TemileyiP.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center gradient-bg relative overflow-hidden"
    >
      <FloralDecoration />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left relative z-10">
            <span className="text-accent-dark text-sm font-medium tracking-wider uppercase mb-4 block animate-sparkle">
              Video Editor & Storyteller
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Crafting Your
              <span className="text-primary-dark"> Dreams</span>
              <br />
              Into Reality
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Creating magical moments through the art of video editing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#portfolio"
                className="sparkle-button text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Video size={20} />
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-primary-dark text-primary-dark px-8 py-3 rounded-full hover:bg-primary-dark hover:text-white transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="flex-1 animate-float relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-light/50 to-accent-light/50 rounded-full blur-3xl transform -rotate-12" />
            <div className="relative z-10">
              <div className="w-72 h-72 md:w-96 md:h-96 mx-auto overflow-hidden rounded-full ring-8 ring-white/50 shadow-2xl">
                {/* Replace this URL with your actual profile picture URL */}
                <img
                  src={Temileyi}
                  alt="Temileyi - Video Editor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
