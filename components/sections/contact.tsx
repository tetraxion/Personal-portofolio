'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';
import { SiGmail } from 'react-icons/si';

const contacts = [
  {
    title: "Get in Touch",
    desc: "Feel free to drop me an email for questions or potential projects.",
    icon: <SiGmail />,
    link: "mailto:lutfid955@gmail.com",
    btn: "Send an Email",
    bg: "bg-gradient-to-br from-red-500 to-rose-500",
    glow: "hover:shadow-red-500/40",
  },
  {
    title: "Follow My Story",
    desc: "Stay updated with my latest moments and ideas.",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/lutfid955/",
    btn: "Go to Instagram",
    bg: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
    glow: "hover:shadow-pink-500/40",
  },
  {
    title: "Professional Network",
    desc: "Let’s connect and grow together in a professional space.",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/dwi-lutfi-988026277/",
    btn: "Go to LinkedIn",
    bg: "bg-gradient-to-br from-sky-500 to-blue-600",
    glow: "hover:shadow-sky-500/40",
  },
  {
    title: "Discover My Code",
    desc: "Check out my projects and open-source contributions.",
    icon: <FaGithub />,
    link: "https://github.com/tetraxion",
    btn: "Go to GitHub",
    bg: "bg-gradient-to-br from-slate-800 to-gray-900",
    glow: "hover:shadow-slate-500/40",
  },
];

// Komponen Kartu Kontak dengan Efek 3D
const ContactCard = ({ contact }: { contact: (typeof contacts)[0] }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      className={`relative rounded-2xl p-8 flex flex-col justify-between text-white shadow-lg transition-shadow duration-500 ${contact.bg} ${contact.glow}`}
    >
      <div style={{ transform: "translateZ(50px)" }} className="flex justify-end text-white/50 text-5xl">
        {contact.icon}
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-2" style={{ transform: "translateZ(40px)" }}>{contact.title}</h3>
        <p className="text-sm opacity-80" style={{ transform: "translateZ(30px)" }}>{contact.desc}</p>
      </div>

      <div className="flex items-center justify-between mt-8">
        <span className="flex items-center gap-2 text-sm font-medium" style={{ transform: "translateZ(40px)" }}>
          {contact.btn}
          <ArrowUpRight size={16} />
        </span>
      </div>
    </motion.a>
  );
};

// Komponen Utama Section Kontak
export const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.5 },
    },
  } as const; // <-- Tambahkan 'as const'

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } },
  } as const; // <-- PERBAIKAN: Tambahkan 'as const' di sini

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mb-12 md:mt-5"
    >
      <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
      <p className="text-muted-foreground max-w-lg">
        I&apos;m currently available for freelance work and open to discussing new projects. Let&apos;s create something amazing together.
      </p>
      <hr className="my-8" />

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {contacts.map((c, i) => (
          <motion.div key={i} variants={itemVariants}>
            <ContactCard contact={c} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};