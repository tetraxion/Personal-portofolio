'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects, ProjectCategory } from "@/lib/project";
import { FaGithub } from 'react-icons/fa';
import { ArrowUpRight, Sparkles, Pin, Layers } from 'lucide-react';

export const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const categories: ProjectCategory[] = ['All', 'Mobile', 'Web', 'Backend', 'IoT', 'AI'];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  // First project is featured/pinned
  const featuredProject = filteredProjects[0];
  const restProjects = filteredProjects.slice(1);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mt-5"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 shadow-sm">
              <Sparkles size={20} className="text-blue-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Projects</h1>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Layers size={14} />
            {projects.length} Projects
          </div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mb-8">
          A curated collection of projects I&apos;ve built — from government-scale systems to cross-platform mobile apps.
        </p>

        <hr className="border-t border-dashed border-slate-300 dark:border-slate-700 mb-8" />

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => {
            const count = category === 'All' ? projects.length : projects.filter(p => p.category === category).length;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-target border ${
                  activeCategory === category
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-lg"
                    : "bg-transparent text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {category} <span className="ml-1 opacity-60">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Project */}
        <AnimatePresence mode="wait">
          {featuredProject && (
            <motion.div
              key={`featured-${featuredProject.slug}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="mb-6"
            >
              <Link href={featuredProject.link} className="block cursor-target group">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-500 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative flex flex-col md:flex-row z-0">
                    {/* Image */}
                    <div className="relative w-full md:w-1/2 h-56 md:h-72 overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        fill
                        priority={true}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 dark:to-slate-900/40" />
                      {/* Pinned Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                          <Pin size={12} /> Featured
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 w-fit mb-4">
                        {featuredProject.category}
                      </span>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                        {featuredProject.title}
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-5">
                        {featuredProject.description}
                      </p>
                      <div className="flex items-center gap-2.5 text-lg text-slate-500 dark:text-slate-400">
                        {featuredProject.tech.map((icon, i) => (
                          <span key={i} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                            {icon}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          <AnimatePresence mode='popLayout'>
            {restProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <Link href={project.link} className="block h-full cursor-target group">
                  <div className="relative flex flex-col h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-500 shadow-sm hover:shadow-xl transition-all duration-500">
                    {/* Image */}
                    <div className="relative w-full h-52 overflow-hidden bg-slate-100 dark:bg-slate-800 z-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                        <span className="inline-flex items-center gap-1.5 text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                          View Project <ArrowUpRight size={14} />
                        </span>
                      </div>
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-5 flex flex-col flex-grow z-0">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2.5 mt-auto text-lg text-slate-500 dark:text-slate-400">
                        {project.tech.map((icon, i) => (
                          <span key={i} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                            {icon}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* GitHub CTA */}
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="https://github.com/tetraxion"
          target="_blank"
          className="cursor-target flex items-center justify-between p-6 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-transparent hover:border-slate-300 dark:hover:border-slate-500 shadow-sm hover:shadow-lg transition-all duration-300 group"
        >
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Explore More on GitHub</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Check out my open-source contributions and experiments.</p>
          </div>
          <div className="flex items-center gap-3">
            <FaGithub className="text-3xl text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
            <ArrowUpRight size={18} className="text-slate-400 group-hover:text-blue-500 transition-all -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
          </div>
        </Link>
      </motion.div>
    </>
  );
};
