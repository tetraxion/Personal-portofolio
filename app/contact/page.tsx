import { Metadata } from "next";
import { MainContent } from "@/components/main-content";
import { ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact | Dwi Lutfi Taufiq Ihsani",
  description:
    "Get in touch with Dwi Lutfi Taufiq Ihsani for freelance work, collaborations, or new project opportunities.",
};

export default function ContactPage() {
  return (
    <MainContent>
      <ContactSection />
    </MainContent>
  );
}