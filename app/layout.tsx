import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Sidebar } from "@/components/sidebar";
import ClientWrapper from "@/app/clientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://personal-portofolio-pi-three.vercel.app/"),
  title: "Dwi Lutfi Taufiq Ihsani | Software Engineer Portfolio",
  description:
    "Personal portfolio of Dwi Lutfi Taufiq Ihsani — a versatile Software Engineer specializing in Fullstack Web Development, Mobile Engineering, and AI Integrations. Built with Next.js & Tailwind CSS.",
  keywords: [
    "Dwi Lutfi Taufiq Ihsani",
    "Software Engineer",
    "Portfolio",
    "Fullstack Developer",
    "Mobile Developer",
    "Flutter Developer",
    "Web Developer",
    "AI Engineer",
    "Next.js",
    "Laravel",
    "React",
    "Tailwind CSS",
    "TypeScript",
  ],
  authors: [{ name: "Dwi Lutfi Taufiq Ihsani" }],
  creator: "Dwi Lutfi Taufiq Ihsani",
  publisher: "Dwi Lutfi Taufiq Ihsani",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/image/icon.ico",
    apple: "/image/icon.png",
    shortcut: "/image/icon.png",
  },
  openGraph: {
    title: "Dwi Lutfi Taufiq Ihsani | Software Engineer Portfolio",
    description:
      "Explore the projects, experience, and skills of Dwi Lutfi Taufiq Ihsani — a Cum Laude graduate specializing in Fullstack Web, Mobile, and AI solutions.",
    url: "https://dwilutfi.vercel.app/",
    siteName: "Dwi Lutfi Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full overflow-x-hidden transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* Subtle Professional Background */}
          <div className="fixed inset-0 z-[-1] pointer-events-none bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
            {/* Dot Pattern */}
            <div className="absolute inset-0 bg-dot-black/[0.05] dark:bg-dot-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
          </div>
          
          <div className="flex min-h-screen max-w-7xl mx-auto w-full relative z-0">
            <Sidebar />
            <main className="flex-1 w-full pt-16 md:pt-0 min-w-0">
              <ClientWrapper>
                {children}
              </ClientWrapper>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
