import { Metadata } from "next";
import { MainContent } from "@/components/main-content";
import { CertificateSection } from "@/components/sections/certificate";

export const metadata: Metadata = {
  title: "Certificates | Dwi Lutfi Taufiq Ihsani",
  description:
    "View professional certifications and licenses earned by Dwi Lutfi Taufiq Ihsani, including Dicoding, SAP, and MSIB credentials.",
};

export default function CertificatePage() {
  return (
    <MainContent>
      <CertificateSection />
    </MainContent>
  );
}