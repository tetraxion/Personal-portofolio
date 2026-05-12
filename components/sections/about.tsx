'use client';
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Github, Instagram, Briefcase, Users, GraduationCap, User } from 'lucide-react';
import Image from "next/image";

// Experience timeline icon
const ExperienceIcon = () => (
    <div className="absolute -left-[11px] mt-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 ring-4 ring-white dark:ring-slate-900 shadow-sm">
        <Briefcase className="h-3.5 w-3.5 text-white" />
    </div>
);

// Organization timeline icon
const OrganizationIcon = () => (
    <div className="absolute -left-[11px] mt-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-white dark:ring-slate-900 shadow-sm">
        <Users className="h-3.5 w-3.5 text-white" />
    </div>
);

export function AboutSection() {
    // Education Data
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

    // Work Experience Data
    const experiences = [
        {
            title: "Fullstack Web Developer",
            company: "Kementerian Pariwisata dan Ekonomi Kreatif RI",
            logo: "/projects/logo_kemenpar.png",
            date: "Des 2025 - Present",
            type: "Internship",
            bullets: [
                "Developed ANARA, a comprehensive Budget Management Information System.",
                "Streamlined data input, maintenance, and reporting processes for DIPA and MAK.",
                "Collaborated with the Deputy of Industry and Investment for requirement gathering.",
                "Ensured accurate, up-to-date, and well-structured financial information."
            ],
        },
        {
            title: "Mobile Developer",
            company: "PT. Pompa DEX Indoguna",
            logo: "/image/dex.webp",
            date: "Jul 2025 - Dec 2025",
            type: "Internship",
            bullets: ["Developed internal mobile apps with Flutter (Android & iOS).", "Implemented GetX architecture for efficient state management.", "Optimized cross-platform reusability (80%+), accelerating cycles.", "Applied MVC & Atomic Design, improving readability (+30%) & reducing bugs (–25%).", "Collaborated with IT team & stakeholders for operational alignment."],
        },
        {
            title: "Freelance Mobile Developer",
            company: "Telkom Indonesia",
            logo: "/image/telkom.webp",
            date: "Jun 2025 - Dec 2025",
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

    // Organization & Committee Data
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

    // Sort helper
    const monthMap: Record<string, number> = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11,
        'Des': 11, // Indonesian abbreviation for December
    };

    const getStartDate = (dateString: string) => {
        if (dateString.includes("Present")) return new Date();
        const parts = dateString.split(' ');
        const month = parts[0];
        const year = parseInt(parts[1], 10);
        const monthIndex = monthMap[month] ?? 0;
        return new Date(year, monthIndex, 1);
    };

    const sortedExperiences = [...experiences].sort((a, b) => getStartDate(b.date).getTime() - getStartDate(a.date).getTime());
    const sortedOrganizations = [...organizations].sort((a, b) => getStartDate(b.date).getTime() - getStartDate(a.date).getTime());

    const badgeColor = (type: string) => {
        switch (type) {
            case 'Internship': return 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/30';
            case 'Freelance': return 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30';
            case 'Organization': return 'bg-slate-50 dark:bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-500/30';
            case 'Committee': return 'bg-slate-50 dark:bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-500/30';
            default: return 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';
        }
    };

    return (
        <>
            {/* About Section */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16 md:mt-5">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 shadow-sm">
                        <User size={20} className="text-pink-500" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">About Me</h1>
                </div>
                <hr className="border-dashed border-slate-300 dark:border-slate-700 my-6" />
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p>Hello! I&apos;m <span className="font-semibold text-slate-900 dark:text-white">Dwi Lutfi Taufiq Ihsani</span>, an Information Systems graduate from Telkom University Surabaya, graduating <span className="font-semibold text-slate-900 dark:text-white">Cum Laude</span> (GPA 3.82/4.00).</p>
                    <p>I am a versatile Software Engineer specializing in <span className="font-semibold text-slate-900 dark:text-white">Fullstack Web Development, Mobile Engineering,</span> and <span className="font-semibold text-slate-900 dark:text-white">AI Integrations</span>. My expertise spans across modern web frameworks (Next.js, Laravel, React), cross-platform mobile development (Flutter, Dart), and robust backend architectures integrating <span className="font-semibold text-slate-900 dark:text-white">MySQL, PostgreSQL, Firebase, REST APIs</span>, and cloud services.</p>
                    <p>Through various internships, freelance roles, and government-level projects, I have cultivated a strong passion for architecting scalable, high-performance digital solutions. I am driven by clean code, intuitive UI/UX design, and creating impactful applications that solve real-world problems while elevating user satisfaction.</p>
                </div>
            </motion.section>

            {/* Quick Stats */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { value: "3.82", label: "GPA Score", sub: "Cum Laude", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
                        { value: "5+", label: "Work Experience", sub: "Companies", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
                        { value: "12+", label: "Projects", sub: "Delivered", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10" },
                        { value: "3+", label: "Specializations", sub: "Web, Mobile, AI", color: "text-slate-500", bg: "bg-slate-50 dark:bg-slate-500/10" },
                    ].map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            viewport={{ once: true }}
                            className="relative p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-300 overflow-hidden group"
                        >
                            <div className={`relative w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-3 z-0`}>
                                <span className={`text-lg font-bold ${stat.color}`}>#</span>
                            </div>
                            <p className={`text-2xl font-extrabold ${stat.color} mb-0.5`}>{stat.value}</p>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">{stat.label}</p>
                            <p className="text-xs text-slate-400 dark:text-slate-500">{stat.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
            
            {/* Education Section */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 shadow-sm">
                        <GraduationCap size={20} className="text-blue-500" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Education</h2>
                </div>
                {education.map((edu, i) => (
                    <div key={i} className="relative p-6 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                        <div className="relative flex items-start gap-4 z-0">
                            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 shrink-0">
                                <GraduationCap size={24} className="text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{edu.degree} • {edu.date}</p>
                                <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-400 mt-4">
                                    {edu.details.map((d, j) => <li key={j}>{d}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.section>

            {/* Experience Timeline Section */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 shadow-sm">
                        <Briefcase size={20} className="text-blue-500" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Experience</h2>
                </div>
                <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3">
                    {sortedExperiences.map((item, idx) => (
                        <motion.div key={idx} className="relative mb-10 pl-8" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }}>
                            <ExperienceIcon />
                            <div className="relative p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                                <div className="relative flex items-start gap-4 z-0">
                                    <Image src={item.logo} alt={`${item.company} logo`} width={48} height={48} className="w-12 h-12 rounded-xl border border-slate-100 dark:border-slate-700/60 p-1 bg-white dark:bg-slate-800 shadow-sm object-contain" />
                                    <div className="flex-grow min-w-0">
                                        <div className="flex justify-between items-start gap-2">
                                            <div className="min-w-0">
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{item.company} • {item.date}</p>
                                            </div>
                                            <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeColor(item.type)}`}>
                                                {item.type}
                                            </span>
                                        </div>
                                        <details className="group/details mt-4 text-sm">
                                            <summary className="cursor-pointer w-fit text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
                                                View Details
                                            </summary>
                                            <ul className="list-disc pl-5 mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
                                                {item.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                                            </ul>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Organization & Committee Timeline Section */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 shadow-sm">
                        <Users size={20} className="text-emerald-500" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Organization & Committee</h2>
                </div>
                <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3">
                    {sortedOrganizations.map((item, idx) => (
                        <motion.div key={idx} className="relative mb-10 pl-8" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }}>
                            <OrganizationIcon />
                            <div className="relative p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                                <div className="relative flex items-start gap-4 z-0">
                                    <Image src={item.logo} alt={`${item.company} logo`} width={48} height={48} className="w-12 h-12 rounded-xl border border-slate-100 dark:border-slate-700/60 p-1 bg-white dark:bg-slate-800 shadow-sm object-contain" />
                                    <div className="flex-grow min-w-0">
                                        <div className="flex justify-between items-start gap-2">
                                            <div className="min-w-0">
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{item.company} • {item.date}</p>
                                            </div>
                                            <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeColor(item.type)}`}>
                                                {item.type}
                                            </span>
                                        </div>
                                        <details className="group/details mt-4 text-sm">
                                            <summary className="cursor-pointer w-fit text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
                                                View Details
                                            </summary>
                                            <ul className="list-disc pl-5 mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
                                                {item.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                                            </ul>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Quick Contact */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
                <div className="relative p-6 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm shadow-sm overflow-hidden group">
                    <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4 z-0">
                        <a href="https://www.linkedin.com/in/dwi-lutfi-988026277/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-target">
                            <Linkedin className="w-6 h-6 mb-2 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">LinkedIn</span>
                        </a>
                        <a href="mailto:lutfid955@gmail.com" className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-target">
                            <Mail className="w-6 h-6 mb-2 text-slate-400 group-hover:text-red-500 transition-colors" />
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Email</span>
                        </a>
                        <a href="https://github.com/tetraxion" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-target">
                            <Github className="w-6 h-6 mb-2 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">GitHub</span>
                        </a>
                        <a href="https://www.instagram.com/lutfid955/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-target">
                            <Instagram className="w-6 h-6 mb-2 text-slate-400 group-hover:text-pink-500 transition-colors" />
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Instagram</span>
                        </a>
                    </div>
                </div>
            </motion.section>
        </>
    );
}