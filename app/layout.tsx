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
  title: "Dwi Lutfi | Personal Portfolio",
  description:
    "Explore the personal portfolio of Dwi Lutfi, a mobile and web developer specializing in modern technologies including Flutter,Firebase, and Supabase.",
  keywords: [
    "Dwi Lutfi",
    "Portfolio",
    "Mobile Developer",
    "Flutter Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js",
    "Tailwind CSS",
    "Firebase",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Dwi Lutfi" }],
  creator: "Dwi Lutfi",
  publisher: "Dwi Lutfi",
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
    title: "Dwi Lutfi | Personal Portfolio",
    description:
      "Showcasing Dwi Lutfi’s projects, experience, and skills as a mobile and web developer.",
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
          <div className="flex min-h-screen md:mx-44">
            <Sidebar />
            <main className="flex-1 pt-16 md:pt-0">
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
