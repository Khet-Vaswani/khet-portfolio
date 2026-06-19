import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-bold text-2xl tracking-tight text-white mb-4 block">
              Khet.
            </Link>
            <p className="text-gray-400 max-w-sm">
              Building Intelligent AI Systems & Modern Digital Experiences.
              Final semester Computer Systems Engineering student.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-accent transition-colors">Projects</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Khet-Vaswani" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/khet-maheshwari-8a5635269/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:[EMAIL_ADDRESS]" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Khet Maheshwari. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
