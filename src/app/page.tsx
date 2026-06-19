"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Database, Code, Cpu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Section className="min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="inline-block">
              <span className="px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
                AI Engineer | Full Stack Developer | UI/UX Designer
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Building <span className="text-gradient">Intelligent AI Systems</span> & Modern Digital Experiences.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-xl">
              Final semester Computer Systems Engineering student with hands-on experience in AI applications, full-stack development, Angular frontend engineering, and UI/UX design. Passionate about creating scalable, user-focused software solutions.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href="/projects">
                <Button variant="primary" size="lg" className="gap-2">
                  View Projects <ArrowRight size={18} />
                </Button>
              </Link>
              <a href="/resume.pdf" download>
                <Button variant="outline" size="lg" className="gap-2">
                  <Download size={18} /> Download Resume
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative mx-auto lg:ml-auto w-full max-w-md aspect-square">
            <div className="w-full h-full rounded-full border-2 border-white/10 overflow-hidden relative glass flex items-center justify-center group bg-card">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-secondary/20 group-hover:opacity-100 transition-opacity opacity-50 z-20 pointer-events-none"></div>
              <img 
                src="/profile.jpg" 
                alt="Khet Maheshwari" 
                className="w-full h-full object-cover relative z-10"
                onError={(e) => {
                  // Fallback if image is missing
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML += '<div class="text-center p-8 relative z-10"><p class="text-gray-400 text-sm">Add profile.jpg<br/>to public folder</p></div>';
                }}
              />
            </div>
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-10 -left-6 glass px-4 py-3 rounded-xl shadow-lg border border-white/10 flex items-center gap-3"
            >
              <Terminal className="text-accent" size={24} />
              <div className="text-sm font-medium">Next.js</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-20 -right-8 glass px-4 py-3 rounded-xl shadow-lg border border-white/10 flex items-center gap-3"
            >
              <Database className="text-secondary" size={24} />
              <div className="text-sm font-medium">Python AI</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>

      <Section className="bg-card/50 border-y border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "AI & Full Stack Projects", value: "5+" },
            { label: "Freelance Client Projects", value: "5+" },
            { label: "Internships Completed", value: "3+" },
            { label: "Students Trained in UI/UX", value: "30+" },
          ].map((stat, i) => (
            <Card key={i} className="text-center" glow>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
