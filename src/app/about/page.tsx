import { Section, SectionHeading } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import experienceData from "@/data/experience.json";

export default function AboutPage() {
  return (
    <>
      <Section className="pt-32 pb-16">
        <SectionHeading 
          title="About Me" 
          subtitle="My journey from a Computer Systems Engineering student to an AI and software developer."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              Hi, I'm Khet Maheshwari. I'm currently in my final semester pursuing a B.E. in Computer Systems Engineering at Mehran University of Engineering & Technology, Jamshoro.
            </p>
            <p>
              My passion lies at the intersection of Artificial Intelligence and modern web development. I love building intelligent systems that can learn, adapt, and provide personalized experiences to users. From implementing RAG-based chatbots to optimizing real-time computer vision pipelines, I enjoy tackling complex technical challenges.
            </p>
            <p>
              Beyond AI, I have a strong foundation in frontend engineering, particularly with Angular and Next.js, and a keen eye for UI/UX design. I've had the opportunity to train over 30 students in design principles, bridging the gap between aesthetics and functionality.
            </p>
          </div>
          
          <Card glow className="bg-card/40">
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Education</h3>
            <div className="relative pl-8 border-l-2 border-accent">
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(0,212,255,0.8)]"></div>
              <h4 className="text-xl font-semibold text-white">B.E. Computer Systems Engineering</h4>
              <p className="text-primary mt-1 font-medium">Mehran University of Engineering & Technology, Jamshoro</p>
              <p className="text-gray-400 mt-2 text-sm">2022 – 2026</p>
              <p className="text-gray-300 mt-4">
                Currently in my final semester. Coursework focused on software engineering, artificial intelligence, database systems, and computer architecture.
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
