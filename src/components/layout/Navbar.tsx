"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "../ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Certifications", href: "/certifications" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass border-b border-white/10 py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/50 group-hover:border-accent transition-colors">
            <Code2 className="text-accent w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-accent transition-colors">
            Khet.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${pathname === link.href ? "text-accent" : "text-gray-300"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="primary" size="sm">
              Hire Me
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass border-b border-white/10 py-4 px-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium px-4 py-2 rounded-md ${pathname === link.href
                  ? "bg-accent/10 text-accent"
                  : "text-gray-300 hover:bg-white/5"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-4 pt-2">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full">
                Hire Me
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
