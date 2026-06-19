import { Section, SectionHeading } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import certData from "@/data/certifications.json";
import { Award } from "lucide-react";

export default function CertificationsPage() {
  return (
    <Section className="pt-32 pb-16">
      <SectionHeading 
        title="Certifications" 
        subtitle="Professional credentials and specialized training."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {certData.map((cert) => (
          <a key={cert.id} href="https://www.linkedin.com/in/khet-maheshwari-8a5635269/" target="_blank" rel="noreferrer" className="h-full">
            <Card glow className="bg-card/40 flex items-start gap-4 h-full group hover:border-accent/50 transition-colors">
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20 group-hover:bg-accent/20 transition-colors">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight mb-2 group-hover:text-accent transition-colors">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-accent text-xs font-medium">{cert.date}</p>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </Section>
  );
}
