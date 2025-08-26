/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { 
    FaNodeJs, FaGithub, FaLinkedin, FaCode, FaLaravel, FaPython, FaDatabase 
} from 'react-icons/fa';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiBootstrap,
    SiTailwindcss,
    SiMysql,
    SiPostgresql,
    SiFirebase,
    SiFigma,
    SiExpo,
    SiGit,
    SiNextdotjs,
    SiVite,
    SiFlutter,
    SiGetx,
    SiDart,
    SiSupabase,
    SiDocker,
    SiNpm,
    SiFlask,
    SiScrumalliance,
    SiJira,

} from "react-icons/si";
import { MapPinHouse, User, Briefcase, Award, Mail, LayoutPanelLeft } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { projects } from "@/lib/project";

export const HomeSection = () => {
    const router = useRouter();

    const skills = [
        { name: "Flutter", icon: SiFlutter, colors: "from-blue-500 to-cyan-500" },
        { name: "Dart", icon: SiDart, colors: "from-sky-400 to-sky-600" },
        { name: "GetX", icon: SiGetx, colors: "from-green-400 to-green-600" }, 
        { name: "Bloc", icon: SiFlutter, colors: "from-purple-400 to-purple-600" }, 
        { name: "Firebase", icon: SiFirebase, colors: "from-yellow-400 to-orange-500" },
        { name: "Supabase", icon: SiSupabase, colors: "from-emerald-400 to-emerald-600" },
        { name: "Docker", icon: SiDocker, colors: "from-blue-400 to-blue-600" },
        { name: "HTML", icon: SiHtml5, colors: "from-orange-500 to-red-500" },
        { name: "CSS", icon: SiCss3, colors: "from-blue-400 to-blue-600" },
        { name: "JavaScript", icon: SiJavascript, colors: "from-yellow-300 to-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, colors: "from-blue-300 to-blue-500" },
        { name: "React", icon: SiReact, colors: "from-cyan-400 to-blue-500" },
        { name: "Next.js", icon: SiNextdotjs, colors: "from-gray-200 to-gray-400" },
        { name: "Laravel", icon: FaLaravel, colors: "from-red-400 to-red-600" },
        { name: "Python", icon: FaPython, colors: "from-yellow-400 to-yellow-600" },
        { name: "Flask", icon: SiFlask, colors: "from-blue-400 to-blue-600" },
        { name: "Roboflow", icon: FaPython, colors: "from-green-400 to-green-600" }, // fallback Python
        { name: "Bootstrap", icon: SiBootstrap, colors: "from-purple-400 to-purple-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, colors: "from-cyan-300 to-cyan-500" },
        { name: "Node.js", icon: FaNodeJs, colors: "from-green-300 to-green-500" },
        { name: "NPM", icon: SiNpm, colors: "from-red-500 to-red-500" },
        { name: "Git", icon: SiGit, colors: "from-orange-500 to-red-500" },
        { name: "GitHub", icon: FaGithub, colors: "from-slate-500 to-slate-500" },
        { name: "MySQL", icon: SiMysql, colors: "from-blue-500 to-blue-700" },
        { name: "PostgreSQL", icon: SiPostgresql, colors: "from-indigo-400 to-indigo-600" },
        { name: "Figma", icon: SiFigma, colors: "from-pink-400 to-purple-500" },
        { name: "Expo", icon: SiExpo, colors: "from-gray-400 to-gray-600" },
        { name: "Vite", icon: SiVite, colors: "from-pink-300 to-purple-500" },
        { name: "Agile", icon: SiScrumalliance, colors: "from-blue-400 to-indigo-600" },
        { name: "Scrum", icon: SiJira, colors: "from-purple-400 to-purple-600" },
    ];

    const sections = [
        {
            icon: Briefcase,
            title: "Project Showcase",
            desc: "Showcasing projects that combine creativity with practical solutions.",
            colors: "from-indigo-500 to-blue-500",
            href: "/projects",
        },
        {
            icon: User,
            title: "About Me",
            desc: "A quick look at my background, skills, and passions.",
            colors: "from-pink-500 to-rose-500",
            href: "/about",
        },
        {
            icon: Award,
            title: "Certificates",
            desc: "Highlights of achievements from courses and events.",
            colors: "from-amber-500 to-orange-500",
            href: "/certificate",
        },
        {
            icon: Mail,
            title: "Contact",
            desc: "Reach out for opportunities, ideas, or collaborations.",
            colors: "from-violet-500 to-purple-500",
            href: "/contact",
        },
    ];

    return (
        <>
            {/* === About Section === */}
            <motion.section
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-12 md:mt-5"
            >
                <h1 className="text-2xl md:text-3xl">Hi, I&apos;m Dwi Lutfi Taufiq Ihsani</h1>
                <div className="md:flex gap-4 my-3">
                    <div className="flex mb-3 md:mb-0">
                        <MapPinHouse size={24} />
                        <p className="text-gray-400 ms-2">Based in Trenggalek, Indonesia</p>
                    </div>
                    <div className="flex">
                        <FaCode size={24} />
                        <p className="text-gray-400 ms-2">Mobile & Web Developer</p>
                    </div>
                </div>
                <p className="leading-8">
                I am a recent graduate from <span className="font-semibold">Telkom University Surabaya</span> (CumLaude, GPA 3.82/4.00) with a strong interest in <span className="font-semibold">Mobile Development</span>. 
                Through academic, freelance, and internship experiences, I have developed mobile applications using 
                <span className="font-semibold"> Flutter, Dart, GetX,</span> and <span className="font-semibold">Bloc</span>, 
                applying clean code principles such as MVC and Atomic Design. 
                I am also experienced in integrating <span className="font-semibold">MySQL, PostgreSQL, Firebase, Supabase,</span> 
                and cloud services. I am eager to continue growing as a developer and contribute to building impactful, 
                user-friendly mobile solutions.
                </p>
                <div className="flex items-center gap-2 mt-3">
                <a href="/CV-DwiLutfi.pdf" download>
                <Button 
                    variant="outline" 
                    className="cursor-pointer dark:bg-slate-700"
                >
                    Download CV
                </Button>
                </a>

                    <Link href="https://github.com/tetraxion">
                        <FaGithub size={30} className="ms-2 hover:text-slate-400 cursor-target" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/dwi-lutfi-988026277/">
                        <FaLinkedin size={30} className="ms-2 hover:text-slate-400 cursor-target" />
                    </Link>
                </div>
                <hr className='my-10' />
            </motion.section>

            {/* === Skills Section === */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-14"
            >
                <div className="flex items-center mb-8">
                    <FaCode size={24} />
                    <h2 className="text-2xl md:text-2xl font-semibold ms-2">Skills</h2>
                </div>

                <div className="grid grid-cols-6 gap-4">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="group"
                            >
                                <Card className="bg-transparent shadow-none border-0 md:border md:shadow-sm md:hover:border-slate-600 transition-all">
                                    <CardContent className="p-2 md:p-4 text-center">
                                        <motion.div
                                            whileHover={{
                                                rotate: [0, -10, 10, -10, 0],
                                                transition: { duration: 0.5 },
                                            }}
                                            className={`mx-auto bg-gradient-to-br ${skill.colors} inline-block p-2 rounded-full`}
                                        >
                                            <Icon size={24} />
                                        </motion.div>
                                        <p className="hidden md:block text-[11px] font-medium mt-1">
                                            {skill.name}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            <hr className='my-10' />

            {/* === Featured Section === */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <div className="flex items-center mb-8">
                    <LayoutPanelLeft strokeWidth={2.5} />
                    <h2 className="text-2xl md:text-3xl font-semibold ms-2">Featured Sections</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    {sections.map((sec, index) => (
                        <motion.div
                            key={sec.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className={`
                                ${index === 0 ? "md:col-span-4 md:row-span-2" : ""}
                                ${index === 1 ? "md:col-span-2" : ""}
                                ${index === 2 ? "md:col-span-2" : ""}
                                ${index === 3 ? "md:col-span-6" : ""}
                                h-full
                            `}
                        >
                            <Link href={sec.href} className="block h-full cursor-target">
                                <Card className="transition-all h-full flex flex-col">
                                    <CardHeader className="flex flex-col items-start space-y-2 pb-1">
                                        <motion.div
                                            whileHover={{
                                                rotate: [0, -10, 10, -10, 0],
                                                transition: { duration: 0.5 },
                                            }}
                                            className={`p-2 bg-gradient-to-br ${sec.colors} inline-block rounded-full text-white`}
                                        >
                                            <sec.icon size={24} />
                                        </motion.div>
                                        <CardTitle>
                                            {sec.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="pt-0 flex flex-col h-full">
                                        <p className="text-sm">
                                            {sec.desc}
                                        </p>

                                        {sec.title === "Project Showcase" && (
                                            <div className="hidden mt-6 md:grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {projects.slice(0, 2).map((project) => (
                                                    <div
                                                        key={project.slug}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            router.push(`/projects/${project.slug}`);
                                                        }}
                                                        className="cursor-target"
                                                    >
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="rounded-lg h-[160px] w-full object-cover border hover:scale-105 transition-transform"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </>
    );
};
