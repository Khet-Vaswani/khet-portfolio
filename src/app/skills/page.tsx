import { Section, SectionHeading } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import skillsData from "@/data/skills.json";

export default function SkillsPage() {
  return (
    <Section className="pt-32 pb-16">
      <SectionHeading 
        title="Technical Skills" 
        subtitle="A comprehensive list of the tools, technologies, and frameworks I use to build solutions."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {skillsData.map((category, index) => (
          <Card key={index} glow className="bg-card/50">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-accent to-primary rounded-full block"></span>
              {category.category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-200 text-sm font-medium hover:bg-white/10 hover:border-accent/50 transition-colors cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
