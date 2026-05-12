"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/project";
import { FaArrowLeft, FaGithub, FaLock, FaGooglePlay, FaAppStore } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function ProjectDetailClient({ slug }: { slug: string }) {
    const project = projects.find((p) => p.slug === slug) as (typeof projects[0] & { playstore?: string; appstore?: string; website?: string });
    const router = useRouter();

    if (!project) return notFound();

    // Find adjacent projects for navigation
    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    const buttonBase = "relative overflow-hidden rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 cursor-target group";
    const buttonLight = "border-slate-200 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-500";

    return (
        <section className="max-w-4xl mx-auto md:px-6 md:py-12">
            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
            >
                <button
                    onClick={() => router.back()}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white ${buttonBase} ${buttonLight}`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
                    <span className="relative z-0 flex items-center gap-2">
                        <FaArrowLeft size={12} />
                        Back
                    </span>
                </button>
            </motion.div>

            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30">
                        {project.category}
                    </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                    {project.title}
                </h1>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                    {project.description}
                </p>
            </motion.header>

            {/* Action Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-wrap items-center gap-3 mb-10"
            >
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-2.5 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 ${buttonBase} ${buttonLight}`}
                    >
                        <FaGithub /> Source Code
                    </a>
                )}

                {project.playstore && (
                    <a
                        href={project.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-2.5 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 ${buttonBase} ${buttonLight}`}
                    >
                        <FaGooglePlay /> Play Store
                    </a>
                )}

                {project.appstore && (
                    <a
                        href={project.appstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-2.5 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 ${buttonBase} ${buttonLight}`}
                    >
                        <FaAppStore /> App Store
                    </a>
                )}

                {project.website && (
                    <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-target"
                    >
                        <BsRocketTakeoff /> Live Demo
                    </a>
                )}

                {!project.github && !project.playstore && !project.appstore && !project.website && (
                    <span className={`px-5 py-2.5 flex items-center gap-2 text-sm font-medium text-slate-400 cursor-not-allowed ${buttonBase} border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50`}>
                        <FaLock size={12} /> Private Project
                    </span>
                )}

                {!project.github && (project.website || project.playstore || project.appstore) && (
                    <span className={`px-5 py-2.5 flex items-center gap-2 text-sm font-medium text-slate-400 cursor-not-allowed ${buttonBase} border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50`}>
                        <FaLock size={12} /> Private Source
                    </span>
                )}
            </motion.div>

            {/* Project Image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-full h-[280px] md:h-[450px] mb-12 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-lg group"
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={true}
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            {/* Technologies */}
            <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">
                    Built With
                </h2>
                <div className="flex flex-wrap gap-3">
                    {project.tech.map((icon, i) => (
                        <span key={i} className="relative overflow-hidden text-2xl p-3 rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-500 shadow-sm hover:shadow-md transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white group/icon">
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 dark:via-white/10 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                            <span className="relative z-0">{icon}</span>
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Navigation to other projects */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="border-t border-slate-200 dark:border-slate-700/60 pt-10"
            >
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">
                    Other Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {prevProject && (
                        <button
                            onClick={() => router.push(prevProject.link)}
                            className={`p-5 text-left flex items-center gap-4 group cursor-target ${buttonBase} ${buttonLight}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700/60 shrink-0 z-0">
                                <Image src={prevProject.image} alt={prevProject.title} fill className="object-cover" />
                            </div>
                            <div className="relative flex-1 min-w-0 z-0">
                                <p className="text-xs text-slate-400 mb-0.5">← Previous</p>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{prevProject.title}</p>
                            </div>
                        </button>
                    )}
                    {nextProject && (
                        <button
                            onClick={() => router.push(nextProject.link)}
                            className={`p-5 text-right flex items-center gap-4 group cursor-target ${prevProject ? '' : 'md:col-start-2'} ${buttonBase} ${buttonLight}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
                            <div className="relative flex-1 min-w-0 z-0">
                                <p className="text-xs text-slate-400 mb-0.5">Next →</p>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{nextProject.title}</p>
                            </div>
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700/60 shrink-0 z-0">
                                <Image src={nextProject.image} alt={nextProject.title} fill className="object-cover" />
                            </div>
                        </button>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
