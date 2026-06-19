import { Section, SectionHeading } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import experienceData from "@/data/experience.json";
import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
  return (
    <Section className="pt-32 pb-16">
      <SectionHeading 
        title="Professional Experience" 
        subtitle="My journey through internships, freelance work, and instruction."
        centered
      />
      
      <div className="max-w-4xl mx-auto mt-12 relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2"></div>
        
        {experienceData.map((exp, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={exp.id} className="relative flex flex-col md:flex-row items-center mb-16 last:mb-0">
              {/* Mobile Timeline Dot */}
              <div className="md:hidden absolute left-4 w-4 h-4 rounded-full bg-accent border-4 border-background transform -translate-x-1/2 z-10 mt-6"></div>
              
              {/* Content Box */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                <Card glow className="bg-card/50">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className={`text-accent font-medium mt-1 mb-2 ${isEven ? "md:justify-end" : ""}`}>
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 justify-start ${isEven ? 'md:justify-end' : ''}">
                    <span className="px-2 py-1 bg-white/5 rounded">{exp.date}</span>
                    <span className="px-2 py-1 bg-white/5 rounded">{exp.location}</span>
                  </div>
                  
                  <ul className={`space-y-2 text-gray-300 ${isEven ? "md:list-none md:pr-4 md:border-r md:border-white/10" : "list-disc pl-4"}`}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm">{resp}</li>
                    ))}
                  </ul>
                </Card>
              </div>
              
              {/* Desktop Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 w-10 h-10 rounded-full bg-card border-2 border-accent items-center justify-center transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                <Briefcase className="w-4 h-4 text-accent" />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
