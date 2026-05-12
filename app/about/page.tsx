import { Metadata } from "next";
import { MainContent } from "@/components/main-content";
import { AboutSection } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About | Dwi Lutfi Taufiq Ihsani",
  description:
    "Learn about Dwi Lutfi Taufiq Ihsani — a Cum Laude graduate from Telkom University Surabaya specializing in Fullstack Web, Mobile Engineering, and AI Integrations.",
};

export default function AboutPage() {
  return (
    <MainContent>
      <AboutSection />
    </MainContent>
  );
}