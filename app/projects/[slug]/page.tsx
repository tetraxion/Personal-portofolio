"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/project";
import { FaArrowLeft, FaGithub, FaLock, FaGooglePlay, FaAppStore } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";
import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import { MainContent } from "@/components/main-content";

interface Props {
    params: Promise<{ slug: string }>;
}

export default function ProjectDetail({ params }: Props) {
    const { slug } = React.use(params);
    const project = projects.find((p) => p.slug === slug) as (typeof projects[0] & { playstore?: string; appstore?: string });
    const router = useRouter();

    if (!project) return notFound();

    const renderBackButton = () => (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 ">
            <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 transition cursor-target"
            >
                <FaArrowLeft />
                Back
            </button>
        </motion.div>
    );

    const renderHeader = () => (
        <header className="mb-6 flex items-start justify-between flex-wrap gap-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <h1 className="text-3xl font-bold">
                    {project.title}
                </h1>
                <p className="mt-2 leading-relaxed">
                    {project.description}
                </p>
            </motion.div>

            {/* --- LOGIKA DIPERBARUI DI SINI --- */}
            {/* 1. Ini adalah container BARU untuk menampung tombol-tombol */}
            <div className="flex items-center gap-3">
                
                {/* 2. motion.div sekarang membungkus SETIAP link secara individual */}
                
                {project.github && (
                    <motion.div
                        className="rounded-lg bg-slate-300 dark:bg-slate-950 cursor-target shadow hover:shadow-md transition"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 flex items-center gap-2 text-sm font-medium"
                        >
                            <FaGithub /> GitHub
                        </a>
                    </motion.div>
                )}

                {project.playstore && (
                    <motion.div
                        className="rounded-lg bg-slate-300 dark:bg-slate-950 cursor-target shadow hover:shadow-md transition"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }} // delay diubah
                    >
                        <a
                            href={project.playstore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 flex items-center gap-2 text-sm font-medium"
                        >
                            <FaGooglePlay /> Play Store
                        </a>
                    </motion.div>
                )}
                {project.appstore && (
                    <motion.div
                        className="rounded-lg bg-slate-300 dark:bg-slate-950 cursor-target shadow hover:shadow-md transition"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }} // delay diubah
                    >
                        <a
                            href={project.appstore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 flex items-center gap-2 text-sm font-medium"
                        >
                            <FaAppStore /> App Store
                        </a>
                    </motion.div>
                )}

                {project.link && (
                    <motion.div
                        className="rounded-lg bg-slate-300 dark:bg-slate-950 cursor-target shadow hover:shadow-md transition"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }} // delay diubah
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 flex items-center gap-2 text-sm font-medium"
                        >
                            <BsRocketTakeoff /> Live Demo
                        </a>
                    </motion.div>
                )}

                {!project.github && !project.playstore && !project.appstore && (
                    <motion.div
                        className="rounded-lg bg-slate-300 dark:bg-slate-950 cursor-target shadow hover:shadow-md transition"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <span className="px-4 py-2 flex items-center gap-2 text-sm font-medium cursor-not-allowed">
                            <FaLock /> Private Project
                        </span>
                    </motion.div>
                )}
            </div>
            {/* --- AKHIR PERUBAHAN --- */}
        </header>
    );

    const renderProjectImage = () => (
        // ... (Tidak ada perubahan di sini) ...
        <div className="relative w-full h-[250] md:h-[400px] mb-10 overflow-hidden rounded-md shadow">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full"
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="w-100 object-cover hover:scale-[1.02] transition-transform duration-300"
                />
            </motion.div>
        </div>
    );

    const renderTechnologies = () => (
        // ... (Tidak ada perubahan di sini) ...
        <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
            <h2 className="text-lg font-semibold mb-4">
                Technologies :
            </h2>
            <div className="flex gap-4 text-3xl">
                {project.tech.map((icon, i) => (
                    <span key={i} className="hover:scale-110 transition-transform">
                        {icon}
                    </span>
                ))}
            </div>
        </motion.div>
    );

    return (
        <MainContent >
            <section className="max-w-6xl mx-auto md:px-6 md:py-12">
                {renderBackButton()}
                {renderHeader()}
                {renderProjectImage()}
                {renderTechnologies()}
            </section>
        </MainContent>
    );
}