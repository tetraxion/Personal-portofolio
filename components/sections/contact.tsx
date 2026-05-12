'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { SiGmail } from 'react-icons/si';

const contacts = [
  {
    title: "Get in Touch",
    desc: "Feel free to drop me an email for questions or potential projects.",
    icon: <SiGmail />,
    link: "mailto:lutfid955@gmail.com",
    btn: "Send an Email",
    bg: "bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700/60",
    glow: "hover:border-red-500 dark:hover:border-red-500 text-slate-900 dark:text-white",
  },
  {
    title: "Follow My Story",
    desc: "Stay updated with my latest moments and ideas.",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/lutfid955/",
    btn: "Go to Instagram",
    bg: "bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700/60",
    glow: "hover:border-pink-500 dark:hover:border-pink-500 text-slate-900 dark:text-white",
  },
  {
    title: "Professional Network",
    desc: "Let's connect and grow together in a professional space.",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/dwi-lutfi-988026277/",
    btn: "Go to LinkedIn",
    bg: "bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700/60",
    glow: "hover:border-blue-500 dark:hover:border-blue-500 text-slate-900 dark:text-white",
  },
  {
    title: "Discover My Code",
    desc: "Check out my projects and open-source contributions.",
    icon: <FaGithub />,
    link: "https://github.com/tetraxion",
    btn: "Go to GitHub",
    bg: "bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700/60",
    glow: "hover:border-slate-900 dark:hover:border-slate-400 text-slate-900 dark:text-white",
  },
];

// 3D Contact Card Component
const ContactCard = ({ contact }: { contact: (typeof contacts)[0] }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-2xl p-8 flex flex-col justify-between border backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-500 cursor-target min-h-[220px] ${contact.bg} ${contact.glow}`}
    >
      <div style={{ transform: "translateZ(50px)" }} className="flex justify-end text-slate-200 dark:text-slate-800 text-5xl">
        {contact.icon}
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2" style={{ transform: "translateZ(40px)" }}>{contact.title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed" style={{ transform: "translateZ(30px)" }}>{contact.desc}</p>
      </div>

      <div className="flex items-center justify-between mt-6">
        <span className="flex items-center gap-2 text-sm font-medium" style={{ transform: "translateZ(40px)" }}>
          {contact.btn}
          <ArrowUpRight size={16} />
        </span>
      </div>
    </motion.a>
  );
};

// Main Contact Section
export const ContactSection = () => {
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
          <MessageCircle size={20} className="text-blue-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Get in Touch</h1>
        </div>
      </div>
      <p className="text-slate-500 dark:text-slate-400 max-w-lg mb-8">
        I&apos;m currently available for freelance work and open to discussing new projects. Let&apos;s create something amazing together.
      </p>
      <hr className="border-dashed border-slate-300 dark:border-slate-700 mb-8" />

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6" style={{ perspective: "1000px" }}>
        {contacts.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <ContactCard contact={c} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};