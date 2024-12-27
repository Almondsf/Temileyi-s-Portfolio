import React from "react";
import { Play, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Social Media Campaign",
      category: "Social Media",
      image:
        "https://images.unsplash.com/photo-1533561797500-4fad4750814e?auto=format&fit=crop&q=80",
    },
    {
      title: "Brand Story",
      category: "Promotional",
      image:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80",
    },
    {
      title: "Event Highlights",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-primary-dark">Portfolio</span>
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Tap to watch my video edits
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href="#" // Add your video links here
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl card-shadow cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 to-transparent opacity-90 md:opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Play className="text-white w-12 h-12 mb-2" />
                  <p className="text-white text-sm flex items-center gap-1">
                    Watch Video <ExternalLink size={16} />
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-primary-light">{project.category}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
