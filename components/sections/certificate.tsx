'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { certificates } from '@/lib/certificate'; // Pastikan path ini benar

interface SelectedCertificate {
  image: string;
  link: string;
  title: string;
}

interface Certificate {
  id: number;
  title: string;
  publisher: string;
  image: string; // Ini dipakai sebagai thumbnail dan modal
  link: string;
  date?: string;
}

const typedCertificates: Certificate[] = certificates;

export const CertificateSection = () => {
  const [selectedCert, setSelectedCert] = useState<SelectedCertificate | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  } as const;

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mb-12 md:mt-5"
    >
      <h1 className="text-3xl font-bold mb-2">Licenses & Certifications</h1>
      <p className="text-muted-foreground max-w-2xl">
        A curated list of my professional credentials and achievements, showcasing my skills and expertise.
      </p>
      <hr className="my-8" />

      {/* Daftar Sertifikat */}
      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {typedCertificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            variants={itemVariants}
            className="flex items-start gap-4 p-4 rounded-xl border border-border transition-colors hover:bg-accent"
          >
            {/* Nomor Urut */}
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-sm font-bold text-muted-foreground">
              {index + 1}.
            </div>

            {/* Thumbnail Sertifikat */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-accent rounded-lg border border-border overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>

            {/* Konten Utama */}
            <div className="flex-grow">
              <h3 className="font-bold text-foreground">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.publisher}</p>
              {cert.date && (
                <p className="text-xs text-muted-foreground/80 mt-1">Issued {cert.date}</p>
              )}

              {/* Tombol Aksi */}
              <div className="mt-3 flex items-center gap-4">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View Certificate
                </button>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                >
                  Verify <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Sertifikat */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative max-w-4xl w-full bg-card rounded-xl shadow-2xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-bold mb-4 text-foreground">{selectedCert.title}</h3>
              <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
                <Image src={selectedCert.image} alt={selectedCert.title} fill className="object-contain" />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink size={16} /> Verify Credential
                </a>
                <button
                  aria-label="Close modal"
                  className="p-2 rounded-full hover:bg-accent"
                  onClick={() => setSelectedCert(null)}
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
