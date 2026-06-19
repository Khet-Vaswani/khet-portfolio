"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import projectsData from "@/data/projects.json";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AI", "Web Development", "Full Stack", "Computer Vision", "Machine Learning"];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <Section className="pt-32 pb-16">
      <SectionHeading
        title="My Projects"
        subtitle="A showcase of my recent work in AI, Full Stack Development, and Computer Vision."
        centered
      />

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
              ? "bg-accent text-accent-foreground shadow-[0_0_15px_rgba(0,212,255,0.4)]"
              : "glass text-gray-300 hover:text-white hover:bg-white/10"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <a key={project.id} href="https://github.com/Khet-Vaswani" target="_blank" rel="noreferrer" className="h-full">
            <Card className="p-0 flex flex-col h-full bg-card/60 group">
              <div className="w-full h-48 bg-black relative overflow-hidden">
                <Image
                  src={project.image.startsWith("/") ? `https://placehold.co/600x400/0a0e1a/00d4ff/svg?text=${project.title.replace(/\s+/g, '+')}` : project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/5 text-gray-300">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/5 text-gray-400">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </Section>
  );
}
