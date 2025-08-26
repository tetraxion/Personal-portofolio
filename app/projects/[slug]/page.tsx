"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/project";
import { FaArrowLeft, FaGithub, FaLock } from "react-icons/fa";
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
    const project = projects.find((p) => p.slug === slug);
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

            <motion.div
                className="flex items-center gap-3 rounded-lg bg-slate-300 dark:bg-slate-950 cursor-target shadow hover:shadow-md transition"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                {project.github ? (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 flex items-center gap-2 text-sm font-medium"
                    >
                        <FaGithub /> GitHub
                    </a>
                ) : project.demo ? (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 flex items-center gap-2 text-sm font-medium"
                    >
                        <BsRocketTakeoff /> Live Demo
                    </a>
                ) : (
                    <span className="px-4 py-2 flex items-center gap-2 text-sm font-medium cursor-not-allowed">
                        <FaLock /> Private Project
                    </span>
                )}
            </motion.div>

        </header>
    );

    const renderProjectImage = () => (
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