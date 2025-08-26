'use client';
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Github, Instagram, Briefcase, Users } from 'lucide-react';
import Image from "next/image";

// Komponen ikon untuk timeline Pengalaman
const ExperienceIcon = () => (
    <div className="absolute -left-[11px] mt-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 ring-8 ring-background">
        <Briefcase className="h-4 w-4 text-white" />
    </div>
);

// Komponen ikon untuk timeline Organisasi
const OrganizationIcon = () => (
    <div className="absolute -left-[11px] mt-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 ring-8 ring-background">
        <Users className="h-4 w-4 text-white" />
    </div>
);

export function AboutSection() {
    // Data Pendidikan
    const education = [
        {
            school: "Telkom University Surabaya",
            degree: "Bachelor in Information Systems | GPA 3.82 / 4.00",
            date: "2021 - 2025",
            details: [
                "MSIB Internship at Indi Teknocreasi Internasional (2024)",
                "Student exchange at Telkom Purwokerto Institute (2023)",
                "Lab Assistant of Algorithms & Programming for Digital Business (2023)",
                "Lab Assistant of Data Warehouse & BI for Digital Business (2023)",
                "Finalist BIONIX Information Systems Expo ITS (2022)"
            ],
        }
    ];

    // Data Pengalaman Kerja
    const experiences = [
        {
            title: "Mobile Developer",
            company: "PT. Pompa DEX Indoguna",
            logo: "/image/dex.webp",
            date: "Jul 2025 - Present",
            type: "Internship",
            bullets: ["Developed internal mobile apps with Flutter (Android & iOS).", "Implemented GetX architecture for efficient state management.", "Optimized cross-platform reusability (80%+), accelerating cycles.", "Applied MVC & Atomic Design, improving readability (+30%) & reducing bugs (–25%).", "Collaborated with IT team & stakeholders for operational alignment."],
        },
        {
            title: "Freelance Mobile Developer",
            company: "Telkom Indonesia",
            logo: "/image/telkom.webp",
            date: "Jun 2025 - Present",
            type: "Freelance",
            bullets: ["Developing Super App for Sidoarjo Government with Flutter.", "Implemented GetX, reducing load times by 40%.", "Applied MVC & Atomic Design, improving readability (+30%).", "Ensured 80%+ cross-platform reusability.", "Collaborated with Telkom & government stakeholders."],
        },
        {
            title: "Mobile Developer (MSIB Internship)",
            company: "Indi Teknocreasi Internasional",
            logo: "/image/inditechno.webp",
            date: "Jan 2024 - Jul 2024",
            type: "Internship",
            bullets: ["Developed 'GetCrew' app with Flutter (Android & iOS), boosting satisfaction by 30%.", "Ensured 80%+ code reusability between platforms.", "Migrated codebase to GetX, reducing load times by 40%.", "Refactored with MVC & Atomic Design, improving readability (+30%) & reducing bugs (–25%)."],
        },
        {
            title: "Business Development Coordinator",
            company: "Podcast SomeStory",
            logo: "/image/podcast.webp",
            date: "Jan 2023 - Jun 2023",
            type: "Freelance",
            bullets: ["Developed growth strategies via market research & planning.", "Coordinated teams to prospect 10–20 companies per day.", "Managed sponsorship proposals via email, WhatsApp & Instagram.", "Analyzed performance & implemented weekly improvements."],
        },
    ];

    // Data Organisasi & Kepanitiaan
    const organizations = [
        {
            title: "Member of R&D Division",
            company: "UKM Cycologi",
            logo: "/image/cycologi.webp",
            date: "Dec 2021 - Dec 2022",
            type: "Organization",
            bullets: ["Contributed 10% to Cycologi website frontend development.", "Performed monthly maintenance for 12 months.", "Executed research-driven initiatives to enhance UX."],
        },
        {
            title: "Member of Visual & Art Division",
            company: "Dies Natalis ITTelkom ke-4",
            logo: "/image/diesnatalis.webp",
            date: "May 2022 - Oct 2022",
            type: "Committee",
            bullets: ["Designed visuals, increasing attendance by 20%.", "Boosted social media interactions by 30%.", "Ensured consistent branding across channels."],
        },
        {
            title: "Member of Equipment Division",
            company: "LOYALISM 2022",
            logo: "/image/loyalism.webp",
            date: "Apr 2022 - Aug 2022",
            type: "Committee",
            bullets: ["Ensured equipment availability for 10+ events.", "Scheduled returns with 95% efficiency, reducing delays 20%.", "Minimized wear & tear on equipment loans by 10%."],
        },
    ];

    // Fungsi helper untuk mengurai tanggal awal dari string
    const getStartDate = (dateString: string) => {
        if (dateString.includes("Present")) return new Date();
        const [startMonth, startYear] = dateString.split(' ').slice(0, 2);
        return new Date(`${startMonth} 1, ${startYear}`);
    };

    // Mengurutkan data (terbaru di atas)
    const sortedExperiences = [...experiences].sort((a, b) => getStartDate(b.date).getTime() - getStartDate(a.date).getTime());
    const sortedOrganizations = [...organizations].sort((a, b) => getStartDate(b.date).getTime() - getStartDate(a.date).getTime());

    return (
        <>
            {/* About Section */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16 md:mt-5">
                <h1 className="text-3xl font-bold">About Me</h1>
                <hr className="my-4 border-dashed" />
                <div className="space-y-3 text-muted-foreground">
                    <p>Hello! I&apos;m <span className="font-semibold text-foreground">Dwi Lutfi Taufiq Ihsani</span>, a graduate in Information Systems from Telkom University Surabaya, graduating <span className="font-semibold text-foreground">Cum Laude</span> (GPA 3.82/4.00).</p>
                    <p>I specialize in scalable, user-friendly mobile applications using <span className="font-semibold text-foreground">Flutter, Dart, GetX,</span> and <span className="font-semibold text-foreground">Bloc</span>, with experience integrating <span className="font-semibold text-foreground">MySQL, PostgreSQL, Firebase, Supabase, REST APIs</span>, and cloud services.</p>
                    <p>With freelance, internships, and organizational projects, I am passionate about impactful, maintainable mobile solutions that enhance performance, scalability, and user satisfaction.</p>
                </div>
            </motion.section>
            
            <hr className="my-12" />

            {/* Education Section */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-16">
                <h1 className="text-3xl font-bold mb-8">Education</h1>
                {education.map((edu, i) => (
                    <Card key={i} className="rounded-xl">
                        <CardHeader><CardTitle>{edu.school}</CardTitle><CardDescription>{edu.degree} • {edu.date}</CardDescription></CardHeader>
                        <CardContent><ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">{edu.details.map((d, j) => <li key={j}>{d}</li>)}</ul></CardContent>
                    </Card>
                ))}
            </motion.section>

            <hr className="my-12" />

            {/* Experience Timeline Section */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-16">
                <h1 className="text-3xl font-bold mb-8">Experience</h1>
                <div className="relative border-l-2 border-border ml-3">
                    {sortedExperiences.map((item, idx) => (
                        <motion.div key={idx} className="relative mb-10 pl-8" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                            <ExperienceIcon />
                            <Card className="rounded-xl hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start gap-4">
                                        <Image src={item.logo} alt={`${item.company} logo`} width={48} height={48} className="mt-1 w-12 h-12 rounded-lg border p-1" />
                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="text-lg">{item.title}</CardTitle>
                                                    <CardDescription className="mt-1">{item.company} • {item.date}</CardDescription>
                                                </div>
                                                <Badge variant="default" className="ml-auto whitespace-nowrap">{item.type}</Badge>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="ms-16 -mt-2">
                                    <details className="group text-xs">
                                        <summary className="cursor-pointer w-fit transition-colors font-medium text-blue-600">
                                            View Details
                                        </summary>
                                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                                            {item.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                                        </ul>
                                    </details>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
            
            <hr className="my-12" />

            {/* Organization & Committee Timeline Section */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-16">
                <h1 className="text-3xl font-bold mb-8">Organization & Committee</h1>
                <div className="relative border-l-2 border-border ml-3">
                    {sortedOrganizations.map((item, idx) => (
                        <motion.div key={idx} className="relative mb-10 pl-8" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                            <OrganizationIcon />
                            <Card className="rounded-xl hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start gap-4">
                                        <Image src={item.logo} alt={`${item.company} logo`} width={48} height={48} className="mt-1 w-12 h-12 rounded-lg border p-1" />
                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="text-lg">{item.title}</CardTitle>
                                                    <CardDescription className="mt-1">{item.company} • {item.date}</CardDescription>
                                                </div>
                                                <Badge variant="secondary" className="ml-auto whitespace-nowrap">{item.type}</Badge>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="ms-16 -mt-2">
                                    <details className="group text-xs">
                                        <summary className="cursor-pointer w-fit transition-colors font-medium text-blue-600">
                                            View Details
                                        </summary>
                                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                                            {item.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                                        </ul>
                                    </details>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mb-12">
                 <Card className="rounded-xl">
                    <CardContent className="p-4">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <a href="https://www.linkedin.com/in/dwi-lutfi-988026277/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-muted transition-colors">
                                <Linkedin className="w-6 h-6 mb-1 text-blue-700" />
                                <span className="text-sm font-medium">LinkedIn</span>
                            </a>
                            <a href="mailto:lutfid955@gmail.com" className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-muted transition-colors">
                                <Mail className="w-6 h-6 mb-1 text-red-500" />
                                <span className="text-sm font-medium">Email</span>
                            </a>
                            <a href="https://github.com/tetraxion" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-muted transition-colors">
                                <Github className="w-6 h-6 mb-1" />
                                <span className="text-sm font-medium">GitHub</span>
                            </a>
                            <a href="https://www.instagram.com/lutfid955/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-muted transition-colors">
                                <Instagram className="w-6 h-6 mb-1 text-pink-500" />
                                <span className="text-sm font-medium">Instagram</span>
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </motion.section>
        </>
    );
}