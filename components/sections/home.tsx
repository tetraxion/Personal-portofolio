'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaNodeJs, FaGithub, FaLinkedin, FaCode, FaLaravel, FaPython, FaMobileAlt, FaLaptopCode, FaServer
} from 'react-icons/fa';
import { BiBlock } from 'react-icons/bi';
import {
    SiHtml5, SiTypescript, SiReact, SiTailwindcss,
    SiMysql, SiPostgresql, SiFirebase, SiFigma, SiExpo, SiGit, SiNextdotjs, SiVite,
    SiFlutter, SiGetx, SiDart, SiSupabase, SiDocker, SiScrumalliance, SiJira, SiGo, SiVuedotjs
} from "react-icons/si";
import { User, Briefcase, Award, Mail, LayoutPanelLeft, Download, ArrowRight, Terminal } from 'lucide-react';

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { projects } from "@/lib/project";

const roles = ["Mobile Developer.", "Frontend Engineer.", "AI Engineer.", "Fullstack Web Engineer."];

export const HomeSection = () => {
    const router = useRouter();
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

    const skillCategories = [
        {
            title: "Mobile Development",
            icon: <FaMobileAlt size={18} />,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            skills: [
                { name: "Flutter", icon: SiFlutter },
                { name: "Dart", icon: SiDart },
                { name: "GetX", icon: SiGetx },
                { name: "Bloc", icon: BiBlock },
                { name: "Expo", icon: SiExpo },
            ]
        },
        {
            title: "Frontend & Web",
            icon: <FaLaptopCode size={18} />,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            skills: [
                { name: "React", icon: SiReact },
                { name: "Vue", icon: SiVuedotjs },
                { name: "Next.js", icon: SiNextdotjs },
                { name: "TypeScript", icon: SiTypescript },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "Vite", icon: SiVite },
                { name: "HTML/CSS", icon: SiHtml5 },
            ]
        },
        {
            title: "Backend & Database",
            icon: <FaServer size={18} />,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            skills: [
                { name: "Node.js", icon: FaNodeJs },
                { name: "Golang", icon: SiGo },
                { name: "Python", icon: FaPython },
                { name: "Laravel", icon: FaLaravel },
                { name: "Firebase", icon: SiFirebase },
                { name: "Supabase", icon: SiSupabase },
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "MySQL", icon: SiMysql },
            ]
        },
        {
            title: "Tools & Methodology",
            icon: <Terminal size={18} />,
            color: "text-slate-500",
            bg: "bg-slate-500/10",
            skills: [
                { name: "Git", icon: SiGit },
                { name: "Docker", icon: SiDocker },
                { name: "Figma", icon: SiFigma },
                { name: "Scrum", icon: SiJira },
                { name: "Agile", icon: SiScrumalliance },
            ]
        }
    ];

    const sections = [
        {
            icon: Briefcase,
            title: "Project Showcase",
            desc: "Explore my latest works combining creativity with practical solutions.",
            href: "/projects",
            color: "text-blue-500"
        },
        {
            icon: User,
            title: "About Me",
            desc: "My background, skills, and passions.",
            href: "/about",
            color: "text-slate-500"
        },
        {
            icon: Award,
            title: "Certificates",
            desc: "Highlights of achievements and learning.",
            href: "/certificate",
            color: "text-amber-500"
        },
        {
            icon: Mail,
            title: "Contact",
            desc: "Let's collaborate on your next big idea.",
            href: "/contact",
            color: "text-emerald-500"
        },
    ];

    return (
        <div className="relative w-full pb-10">


            {/* === Hero Section === */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-14 mt-4 md:mt-8 max-w-4xl"
            >
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium mb-8 text-slate-700 dark:text-slate-300 shadow-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    Available for new opportunities
                </div>
                
                {/* Typography */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900 dark:text-white">
                    Hi, I&apos;m <br className="hidden md:block" />
                    <span className="text-blue-600 dark:text-blue-400">
                        Dwi Lutfi Taufiq Ihsani.
                    </span>
                </h1>
                
                <div className="text-2xl md:text-3xl lg:text-4xl text-slate-600 dark:text-slate-300 font-semibold h-12 flex items-center mb-6">
                    <span className="shrink-0">I build</span>
                    <div className="ml-3 relative w-full min-w-0 sm:min-w-[300px] md:min-w-[450px] overflow-hidden h-full flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentRoleIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute left-0 text-slate-900 dark:text-white whitespace-nowrap"
                            >
                                {roles[currentRoleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>

                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-10">
                    A dedicated Software Engineer and <strong className="font-semibold text-slate-900 dark:text-slate-200">Cum Laude</strong> graduate from <strong className="font-semibold text-slate-900 dark:text-slate-200">Telkom University Surabaya</strong>. 
                    I specialize in bridging the gap between innovative design and robust engineering, architecting high-performance solutions across <strong className="font-medium text-slate-800 dark:text-slate-300">Fullstack Web</strong>, <strong className="font-medium text-slate-800 dark:text-slate-300">Mobile</strong>, and <strong className="font-medium text-slate-800 dark:text-slate-300">AI integrations</strong>. 
                    Driven by a passion for clean code and scalable architecture, I transform complex challenges into elegant digital experiences.
                </p>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4">
                    <Button asChild className="rounded-lg h-12 px-6 shadow-md hover:shadow-lg transition-all bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 border-0 text-base font-medium cursor-target">
                        <a href="/CV-DwiLutfi.pdf" download>
                            <Download size={18} className="mr-2" /> 
                            Download CV
                        </a>
                    </Button>
                    <Button variant="outline" className="rounded-lg h-12 px-6 border-slate-300 dark:border-slate-700 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-base font-medium text-slate-700 dark:text-slate-300 cursor-target" onClick={() => router.push('/projects')}>
                        View Projects
                        <ArrowRight size={18} className="ml-2" />
                    </Button>
                    
                    <div className="flex items-center gap-3 ml-2 md:ml-4">
                        <Link href="https://github.com/tetraxion" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-target">
                            <FaGithub size={22} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/dwi-lutfi-988026277/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-target">
                            <FaLinkedin size={22} />
                        </Link>
                    </div>
                </div>
            </motion.section>

            {/* === Stats Section === */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                className="mb-14"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { value: "12+", label: "Projects Built", color: "text-blue-500" },
                        { value: "5+", label: "Work Experience", color: "text-emerald-500" },
                        { value: "25+", label: "Technologies", color: "text-orange-500" },
                        { value: "3.82", label: "GPA (Cum Laude)", color: "text-slate-500" },
                    ].map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            viewport={{ once: true }}
                            className="relative p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-300 text-center group overflow-hidden"
                        >
                            <p className={`relative text-3xl md:text-4xl font-extrabold ${stat.color} mb-1 group-hover:scale-110 transition-transform duration-300`}>
                                {stat.value}
                            </p>
                            <p className="relative text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* === Skills Section === */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-24"
            >
                <div className="flex items-center mb-10">
                    <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 mr-4 shadow-sm">
                        <FaCode size={20} className="text-slate-700 dark:text-slate-300" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Technical Skills</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <div className="relative h-full p-6 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-500 transition-all overflow-hidden group/skill">
                                <div className="relative flex items-center gap-3 mb-6">
                                    <span className={`p-2 rounded-lg ${category.bg} ${category.color}`}>
                                        {category.icon}
                                    </span>
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                                </div>
                                
                                <div className="flex flex-wrap gap-2.5">
                                    {category.skills.map((skill) => {
                                        const Icon = skill.icon;
                                        return (
                                            <div 
                                                key={skill.name} 
                                                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-500 transition-colors"
                                            >
                                                <Icon size={16} className={`${category.color} opacity-80`} />
                                                {skill.name}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* === Featured Sections === */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="flex items-center mb-10">
                    <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 mr-4 shadow-sm">
                        <LayoutPanelLeft strokeWidth={2} size={20} className="text-slate-700 dark:text-slate-300" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Explore More</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sections.map((sec, index) => {
                        const isLarge = index === 0; 
                        return (
                            <motion.div
                                key={sec.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`
                                    ${isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"}
                                    h-full
                                `}
                            >
                                <Link href={sec.href} className="block h-full outline-none cursor-target group">
                                    <div className="relative overflow-hidden h-full p-8 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-500 transition-all flex flex-col justify-between">
                                        <div className="relative">
                                            <div className="flex items-center justify-between mb-6">
                                                <div className={`p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/60 ${sec.color}`}>
                                                    <sec.icon size={24} />
                                                </div>
                                                <ArrowRight size={20} className="text-slate-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            </div>
                                            
                                            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {sec.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                                                {sec.desc}
                                            </p>
                                        </div>

                                        {isLarge && (
                                            <div className="hidden sm:flex mt-8 gap-4 w-full h-32">
                                                {projects.slice(0, 2).map((project, i) => (
                                                    <div 
                                                        key={project.slug} 
                                                        className={`relative flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 cursor-target ${i===1 ? 'hidden md:block' : ''}`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            router.push(`/projects/${project.slug}`);
                                                        }}
                                                    >
                                                        <Image
                                                            src={project.image}
                                                            alt={project.title}
                                                            fill
                                                            className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>
        </div>
    );
};
