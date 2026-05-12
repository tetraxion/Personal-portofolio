'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects, ProjectCategory } from "@/lib/project";
import { FaGithub } from 'react-icons/fa';

export const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const categories: ProjectCategory[] = ['All', 'Mobile', 'Web', 'IoT', 'AI'];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 md:mt-5"
      >
        <h1 className="text-2xl font-medium mb-2">Projects</h1>
        <p className="text-sm">
          A collection of both private and open-source projects I have developed or contributed to.
        </p>

        <hr className="border-t border-dashed border-gray-400 my-5" />

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-target ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                  : "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={project.link} className="rounded-md block h-full cursor-target bg-slate-200 dark:bg-slate-700">
              <div className="group flex flex-col rounded-md overflow-hidden hover:shadow-lg transition-transform duration-300">
                {/* Gambar */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      View Project →
                    </span>
                  </div>
                </div>

                {/* Konten */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-1">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-xl">
                    {project.tech.map((icon, i) => (
                      <span
                        className="text-xl"
                        key={i}
                      >
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

      <motion.div className="mb-4">
        <Link
          href="https://github.com/tetraxion"
          target="_blank"
          className="bg-slate-200 dark:bg-slate-700 cursor-target flex items-center justify-between p-5 rounded-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
        >
          <h2 className="text-lg font-semibold">More in Github</h2>
          <div className="flex items-center gap-2">
            <FaGithub className="text-2xl" />
            <span className="text-sm font-medium">Dwi Lutfi</span>
          </div>
        </Link>
      </motion.div>
    </>
  );
};
