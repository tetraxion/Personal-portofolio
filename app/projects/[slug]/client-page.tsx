"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/project";
import { FaArrowLeft, FaGithub, FaLock, FaGooglePlay, FaAppStore } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { 
  Shield, 
  Layers, 
  Terminal, 
  Check, 
  Copy, 
  Route, 
  Palette
} from "lucide-react";

export function ProjectDetailClient({ slug }: { slug: string }) {
    const project = projects.find((p) => p.slug === slug) as (typeof projects[0] & { playstore?: string; appstore?: string; website?: string });
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'features' | 'architecture' | 'setup'>('features');
    const [copiedId, setCopiedId] = useState<string | null>(null);

    if (!project) return notFound();

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

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
                className="mb-12"
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
                            <span className="relative z-0">{icon}</span>
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Rich Project Details (Tabs) */}
            {project.details && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="mb-16 border-t border-slate-200 dark:border-slate-800 pt-8"
                >
                    {/* Tab Navigation */}
                    <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto scrollbar-none gap-2">
                        <button
                            onClick={() => setActiveTab('features')}
                            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap cursor-target ${
                                activeTab === 'features'
                                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                            }`}
                        >
                            <Shield size={16} />
                            Features & Access
                        </button>
                        <button
                            onClick={() => setActiveTab('architecture')}
                            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap cursor-target ${
                                activeTab === 'architecture'
                                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                            }`}
                        >
                            <Layers size={16} />
                            Architecture & Design
                        </button>
                        <button
                            onClick={() => setActiveTab('setup')}
                            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap cursor-target ${
                                activeTab === 'setup'
                                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                            }`}
                        >
                            <Terminal size={16} />
                            Setup & Commands
                        </button>
                    </div>

                    {/* Tab Panels */}
                    <div className="min-h-[200px]">
                        <AnimatePresence mode="wait">
                            {activeTab === 'features' && (
                                <motion.div
                                    key="features"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-8"
                                >
                                    {/* Security Alert Banner */}
                                    <div className="flex gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-sm items-start">
                                        <Shield size={18} className="shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold">Security lock:</span> 5x consecutive failed login attempts triggers a temporary 15-minute lockout. Auth tokens are persisted locally.
                                        </div>
                                    </div>

                                    {/* Roles & Permissions */}
                                    {project.details.roles && (
                                        <div>
                                            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                                <Shield size={18} className="text-blue-500" />
                                                Roles & Permissions
                                            </h3>
                                            <div className="grid gap-4 md:grid-cols-2">
                                                {project.details.roles.map((r, i) => (
                                                    <div key={i} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm shadow-sm">
                                                        <div className="flex items-center justify-between mb-3">
                                                            <span className="font-bold text-slate-900 dark:text-white">{r.role}</span>
                                                            <code className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 font-mono">{r.code}</code>
                                                        </div>
                                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{r.capabilities}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* App Routing Structure */}
                                    {project.details.routes && (
                                        <div>
                                            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                                <Route size={18} className="text-blue-500" />
                                                App Routing Structure
                                            </h3>
                                            <div className="space-y-6">
                                                {project.details.routes.map((cat, i) => (
                                                    <div key={i} className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-2xl bg-white/40 dark:bg-slate-900/30">
                                                        <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                                                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{cat.category}</h4>
                                                        </div>
                                                        <div className="overflow-x-auto">
                                                            <table className="w-full text-left text-sm border-collapse">
                                                                <thead>
                                                                    <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-semibold bg-slate-50/20 dark:bg-slate-900/10">
                                                                        {cat.headers.map((h, idx) => (
                                                                            <th key={idx} className="px-5 py-3">{h}</th>
                                                                        ))}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {cat.rows.map((row, rIdx) => (
                                                                        <tr key={rIdx} className="border-b border-slate-200/60 dark:border-slate-850/60 last:border-0 hover:bg-slate-50/30 dark:hover:bg-slate-900/20">
                                                                            <td className="px-5 py-3.5 font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold">{row[0]}</td>
                                                                            <td className="px-5 py-3.5 text-slate-700 dark:text-slate-300 font-medium">{row[1]}</td>
                                                                            <td className="px-5 py-3.5 text-slate-500 dark:text-slate-400">
                                                                                {cat.category.toLowerCase().includes('dashboard') ? (
                                                                                    row[2].toLowerCase().includes('admin') ? (
                                                                                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/20">
                                                                                            {row[2]}
                                                                                        </span>
                                                                                    ) : (
                                                                                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                                                                            {row[2]}
                                                                                        </span>
                                                                                    )
                                                                                ) : (
                                                                                    row[2]
                                                                                )}
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {activeTab === 'architecture' && (
                                <motion.div
                                    key="architecture"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-8"
                                >
                                    {/* Detailed Tech Stack */}
                                    {project.details.techStack && (
                                        <div>
                                            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                                <Layers size={18} className="text-blue-500" />
                                                Extended Libraries & Tools
                                            </h3>
                                            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                                                {project.details.techStack.map((t, i) => (
                                                    <div key={i} className="flex justify-between items-center p-3.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white/40 dark:bg-slate-900/30">
                                                        <span className="text-xs text-slate-400">{t.layer}</span>
                                                        <span className="text-sm font-semibold text-slate-900 dark:text-white">{t.tool}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Folder Structure */}
                                    {project.details.structure && (
                                        <div>
                                            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                                <Terminal size={18} className="text-blue-500" />
                                                Project Directory Tree
                                            </h3>
                                            <div className="relative overflow-hidden border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-950 shadow-md">
                                                {/* Terminal Title Bar */}
                                                <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800/80">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="w-3 h-3 rounded-full bg-rose-500" />
                                                        <span className="w-3 h-3 rounded-full bg-amber-500" />
                                                        <span className="w-3 h-3 rounded-full bg-emerald-500" />
                                                    </div>
                                                    <span className="text-xs font-mono text-slate-500">velostock-workspace</span>
                                                    <button 
                                                        onClick={() => handleCopy(project.details?.structure || '', 'structure')}
                                                        className="p-1 rounded hover:bg-slate-800 text-slate-500 hover:text-white transition-colors"
                                                        title="Copy Structure"
                                                    >
                                                        {copiedId === 'structure' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                                    </button>
                                                </div>
                                                {/* Terminal Body */}
                                                <pre className="p-5 font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed bg-slate-950 max-h-[350px]">
                                                    <code>{project.details.structure}</code>
                                                </pre>
                                            </div>
                                        </div>
                                    )}

                                    {/* Color Palette */}
                                    {project.details.colors && (
                                        <div>
                                            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                                <Palette size={18} className="text-blue-500" />
                                                UI Color Palette (Tailwind Tokens)
                                            </h3>
                                            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                                                {project.details.colors.map((col, i) => (
                                                    <div key={i} className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-2xl bg-white/40 dark:bg-slate-900/30 flex flex-col hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300">
                                                        {/* Color block */}
                                                        <div 
                                                            className="h-16 w-full relative group cursor-pointer transition-all duration-300"
                                                            style={{ backgroundColor: col.hex }}
                                                            onClick={() => handleCopy(col.hex, `color-${col.token}`)}
                                                        >
                                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                                <span className="text-xs text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
                                                                    {copiedId === `color-${col.token}` ? <Check size={10} /> : <Copy size={10} />}
                                                                    Copy HEX
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Color details */}
                                                        <div className="p-4 flex-grow flex flex-col">
                                                            <div className="flex items-center justify-between mb-1">
                                                                <span className="font-bold text-slate-900 dark:text-white text-sm font-mono">{col.token}</span>
                                                                <span className="text-xs font-mono text-slate-500">{col.hex}</span>
                                                            </div>
                                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal flex-grow">{col.usage}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {activeTab === 'setup' && (
                                <motion.div
                                    key="setup"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-6"
                                >
                                    {project.details.instructions && project.details.instructions.map((inst, i) => (
                                        <div key={i} className="mb-6">
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{inst.title}</h4>
                                            {inst.description && <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{inst.description}</p>}
                                            
                                            {inst.code && (
                                                <div className="relative overflow-hidden border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-950 shadow-md">
                                                    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800/80">
                                                        <span className="text-[10px] font-mono text-slate-500">Terminal</span>
                                                        <button 
                                                            onClick={() => handleCopy(inst.code || '', `inst-${i}`)}
                                                            className="p-1 rounded hover:bg-slate-800 text-slate-500 hover:text-white transition-colors"
                                                        >
                                                            {copiedId === `inst-${i}` ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                                                        </button>
                                                    </div>
                                                    <pre className="p-4 font-mono text-xs text-slate-300 overflow-x-auto bg-slate-950 font-semibold leading-relaxed">
                                                        <code>{inst.code}</code>
                                                    </pre>
                                                </div>
                                            )}

                                            {inst.steps && (
                                                <div className="grid gap-3 sm:grid-cols-2">
                                                    {inst.steps.map((st, sIdx) => (
                                                        <div key={sIdx} className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white/40 dark:bg-slate-900/30 flex justify-between items-center group">
                                                            <div>
                                                                <p className="text-xs text-slate-400 mb-0.5">{st.name}</p>
                                                                <code className="text-xs text-slate-800 dark:text-slate-200 font-mono font-semibold">{st.cmd}</code>
                                                            </div>
                                                            <button 
                                                                onClick={() => handleCopy(st.cmd, `inst-${i}-${sIdx}`)}
                                                                className="p-1.5 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all opacity-0 group-hover:opacity-100"
                                                                title="Copy Command"
                                                            >
                                                                {copiedId === `inst-${i}-${sIdx}` ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}

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
