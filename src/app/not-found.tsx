import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <Section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <div className="relative mb-8">
        <Ghost className="w-32 h-32 text-accent/20 animate-bounce" />
        <div className="absolute inset-0 bg-accent/20 blur-[50px] -z-10 rounded-full"></div>
      </div>
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-300 mb-6">Page Not Found</h2>
      <p className="text-gray-400 max-w-md mx-auto mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button variant="primary" size="lg">
          Return Home
        </Button>
      </Link>
    </Section>
  );
}
