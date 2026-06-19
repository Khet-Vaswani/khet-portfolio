import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import blogData from "@/data/blog.json";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

// In a real app, this would be markdown or rich text. We're using a placeholder text for now.
const DUMMY_CONTENT = `
## Introduction
This is a detailed post about the topic. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## The Core Concept
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Key Takeaways
1. Always be learning.
2. Technology moves fast, adaptability is key.
3. Build things that matter.

## Conclusion
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
`;

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogData.find(p => p.slug === resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <Section className="pt-32 pb-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
        
        <div className="mb-8">
          <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs rounded-full mb-4 inline-block font-medium">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center text-gray-400 text-sm gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
        </div>
        
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-12 border border-white/10 relative">
          <Image 
            src={post.image.includes("placehold.co") ? post.image.replace("placehold.co", "placehold.co").replace("?", "/svg?") : post.image} 
            alt={post.title} 
            fill
            className="object-cover"
          />
        </div>
        
        <div className="prose prose-invert prose-accent max-w-none text-gray-300">
          <p className="text-xl mb-8 text-gray-200 leading-relaxed font-medium">
            {post.description}
          </p>
          
          <div dangerouslySetInnerHTML={{ __html: DUMMY_CONTENT.replace(/\n/g, '<br/>').replace(/## (.*?)<br\/>/g, '<h2 className="text-2xl font-bold text-white mt-8 mb-4">$1</h2>').replace(/### (.*?)<br\/>/g, '<h3 className="text-xl font-bold text-white mt-6 mb-3">$1</h3>') }} />
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <p className="text-gray-400">Share this article</p>
          <div className="flex gap-4">
            {/* Social sharing placeholders */}
            <Button variant="outline" size="sm">Twitter</Button>
            <Button variant="outline" size="sm">LinkedIn</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}
