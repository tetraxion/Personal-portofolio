'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X, ExternalLink, Award, Search } from 'lucide-react';
import { certificates, Certificate } from '@/lib/certificate';

type SelectedCertificate = Pick<Certificate, 'image' | 'link' | 'title'>;

export const CertificateSection = () => {
  const [selectedCert, setSelectedCert] = useState<SelectedCertificate | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activePublisher, setActivePublisher] = useState('All');

  const publishers = ['All', 'Dicoding', 'Great Learning', 'SAP', 'Others'];

  const filteredCerts = certificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cert.publisher.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activePublisher === 'All') return matchesSearch;
    if (activePublisher === 'Dicoding') {
      return matchesSearch && cert.publisher.includes('Dicoding');
    }
    if (activePublisher === 'Great Learning') {
      return matchesSearch && cert.publisher === 'Great Learning';
    }
    if (activePublisher === 'SAP') {
      return matchesSearch && cert.publisher === 'SAP';
    }
    // Others (Govt, Telkom Univ, etc.)
    return matchesSearch && 
           !cert.publisher.includes('Dicoding') && 
           cert.publisher !== 'Great Learning' && 
           cert.publisher !== 'SAP';
  });

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

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search Bar */}
        <div className="relative flex-grow">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search certificates by title or publisher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
          />
        </div>

        {/* Publisher Filter pills */}
        <div className="flex flex-wrap gap-2 items-center">
          {publishers.map((pub) => (
            <button
              key={pub}
              onClick={() => setActivePublisher(pub)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-300 cursor-target ${
                activePublisher === pub
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md"
                  : "bg-transparent text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {pub}
            </button>
          ))}
        </div>
      </div>

      {/* Certificate Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert, index) => (
            <motion.div
              layout
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col justify-between p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-500 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              <div>
                {/* Header info (Badge and Date) */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg">
                    #{index + 1}
                  </span>
                  {cert.date && (
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-100 dark:border-blue-500/20">
                      {cert.date}
                    </span>
                  )}
                </div>

                {/* Thumbnail and Title */}
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="64px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2" title={cert.title}>
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 truncate">
                      {cert.publisher}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-target flex items-center gap-1.5"
                >
                  View Credentials
                </button>
                {cert.link !== '#' && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-target"
                  >
                    Verify <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredCerts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 bg-white/40 dark:bg-slate-900/20 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl"
        >
          <Award size={48} className="mx-auto text-slate-400 mb-4 opacity-50" />
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">No Certificates Found</h3>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Try resetting the filters or modifying your search query.</p>
        </motion.div>
      )}

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
              {selectedCert.link !== '#' && (
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
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
