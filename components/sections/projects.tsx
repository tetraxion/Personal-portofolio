'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from "@/lib/project";
import { FaGithub } from 'react-icons/fa';

export const ProjectSection = () => {
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

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.slug} href={project.link} className="rounded-md block h-full cursor-target bg-slate-200 dark:bg-slate-700">
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

          ))}
        </div>
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
