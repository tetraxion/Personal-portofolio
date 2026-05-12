'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X, ExternalLink, Award } from 'lucide-react';
import { certificates, Certificate } from '@/lib/certificate';

type SelectedCertificate = Pick<Certificate, 'image' | 'link' | 'title'>;

export const CertificateSection = () => {
  const [selectedCert, setSelectedCert] = useState<SelectedCertificate | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mt-5"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 shadow-sm">
          <Award size={20} className="text-amber-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Licenses & Certifications</h1>
        </div>
      </div>
      <p className="text-slate-500 dark:text-slate-400 max-w-2xl mb-8">
        A curated list of my professional credentials and achievements, showcasing continuous learning and expertise.
      </p>
      <hr className="border-dashed border-slate-300 dark:border-slate-700 mb-8" />

      {/* Certificate List */}
      <div className="flex flex-col gap-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative flex items-start gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-500 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
          >
            {/* Number */}
            <div className="relative flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 rounded-lg z-0">
              {index + 1}
            </div>

            {/* Thumbnail */}
            <div className="relative flex-shrink-0 w-14 h-14 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700/60 overflow-hidden shadow-sm z-0">
              <Image
                src={cert.image}
                alt={cert.title}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative flex-grow min-w-0 z-0">
              <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                {cert.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{cert.publisher}</p>
              {cert.date && (
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Issued {cert.date}</p>
              )}

              {/* Action Buttons */}
              <div className="mt-3 flex items-center gap-4">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-target"
                >
                  View Certificate
                </button>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  Verify <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white pr-8">{selectedCert.title}</h3>
                <button
                  aria-label="Close modal"
                  className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  onClick={() => setSelectedCert(null)}
                >
                  <X size={20} className="text-slate-500" />
                </button>
              </div>
              <div className="relative w-full h-[65vh] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800">
                <Image src={selectedCert.image} alt={selectedCert.title} fill className="object-contain" />
              </div>
              <div className="mt-5 flex justify-end">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-colors shadow-sm hover:shadow-md"
                >
                  <ExternalLink size={16} /> Verify Credential
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
