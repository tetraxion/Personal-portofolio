import { Metadata } from "next";
import { MainContent } from "@/components/main-content";
import { ProjectSection } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Projects | Dwi Lutfi Taufiq Ihsani",
  description:
    "Explore projects built by Dwi Lutfi — from government-scale systems to cross-platform mobile apps and AI integrations.",
};

export default function ProjectsPage() {
  return (
    <MainContent>
      <ProjectSection />
    </MainContent>
  );
}