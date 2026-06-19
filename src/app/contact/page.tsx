"use client";

import { Section, SectionHeading } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Section className="pt-32 pb-16">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        centered
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto">
        <div>
          <Card glow className="bg-card/50 h-full">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              Fill out the form and I will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Mail className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:khetvaswani@gmail.com" className="font-medium">khetvaswani@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:03318096987" className="font-medium">0331-8096987</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                  <MapPin className="text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-medium text-white mb-4">Connect Socially</h4>
              <div className="flex gap-4">
                <a href="https://github.com/Khet-Vaswani" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white transition-all border border-white/10 hover:border-white/30">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/khet-maheshwari-8a5635269/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-accent/20 hover:text-accent transition-all border border-white/10 hover:border-accent/50">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="bg-card/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full py-6 text-lg"
                disabled={status === "submitting" || status === "success"}
              >
                {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
}
