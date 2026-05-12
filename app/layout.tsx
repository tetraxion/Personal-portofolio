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
          {/* Subtle Animated Background */}
          <div className="fixed inset-0 z-[-1] pointer-events-none bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-blue-400/10 dark:bg-blue-500/5 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-[40rem] h-[40rem] bg-violet-400/10 dark:bg-violet-500/5 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
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
