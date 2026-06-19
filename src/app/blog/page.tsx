import { Section, SectionHeading } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import blogData from "@/data/blog.json";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogPage() {
  return (
    <Section className="pt-32 pb-16">
      <SectionHeading 
        title="Tech Blog" 
        subtitle="Thoughts, tutorials, and insights on AI, Web Development, and Software Engineering."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
        {blogData.map((post) => (
          <Card key={post.slug} className="p-0 flex flex-col h-full bg-card/60 group">
            <div className="w-full h-56 bg-black relative overflow-hidden">
              <Image 
                src={post.image.includes("placehold.co") ? post.image.replace("placehold.co", "placehold.co").replace("?", "/svg?") : post.image}
                alt={post.title} 
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-xs text-gray-400 mb-3 gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{post.description}</p>
              
              <div className="mt-auto">
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-accent text-sm font-medium hover:text-white transition-colors group/link">
                  Read Article 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
