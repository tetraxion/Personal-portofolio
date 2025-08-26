
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { House, User, Phone, FolderGit, FileBadge, Menu, X, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { VscVerifiedFilled } from "react-icons/vsc";
import Image from "next/image";

export const Sidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const toggleSidebar = () => setIsOpen(!isOpen);

    if (!mounted) return null;

    return (
        <>
            {/* MOBILE NAVBAR */}
            {/* Peningkatan: Latar belakang glassmorphism yang lebih terasa */}
            <div className="flex md:hidden items-center justify-between p-4 fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
                {/* Left */}
                <div className="flex items-center gap-2">
                    <Image
                        width={32}
                        height={32}
                        src="/image/foto_prib.jpg"
                        alt="Foto Pribadi"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-bold">Dwi Lutfi</span>
                    <VscVerifiedFilled size={20} className="text-blue-500" />
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full transition-colors duration-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                             <motion.div
                                key={theme}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>

                    <button
                        onClick={toggleSidebar}
                        className="p-2 rounded-md transition-colors duration-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* SIDEBAR MOBILE */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        key="sidebar"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 left-0 w-64 h-screen z-40 p-6 pt-20 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-r border-slate-200 dark:border-slate-800 md:hidden"
                    >
                        <SidebarContent
                            pathname={pathname}
                            theme={theme}
                            setTheme={setTheme}
                            onClose={() => setIsOpen(false)}
                        />
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* DESKTOP SIDEBAR */}
            <aside className="hidden md:flex flex-col w-64 p-6 h-screen sticky top-0 border-r border-slate-200 dark:border-slate-800">
                <SidebarContent pathname={pathname} theme={theme} setTheme={setTheme} />
            </aside>

            {/* BACKDROP */}
            {isOpen && (
                <div className="fixed inset-0 z-30 bg-black/40 md:hidden" onClick={toggleSidebar} />
            )}
        </>
    );
};

interface SidebarContentProps {
    pathname: string | null;
    theme: string | undefined;
    setTheme: (theme: string) => void;
    onClose?: () => void;
}

function SidebarContent({
    pathname,
    theme,
    setTheme,
    onClose,
}: SidebarContentProps) {
    const menuItems = [
        { name: "Home", icon: <House size={18} />, path: "/" },
        { name: "About", icon: <User size={18} />, path: "/about" },
        { name: "Projects", icon: <FolderGit size={18} />, path: "/projects" },
        { name: "Certificate", icon: <FileBadge size={18} />, path: "/certificate" },
        { name: "Contact", icon: <Phone size={18} />, path: "/contact" },
    ];

    return (
        <div className="flex flex-col h-full">
            <div className="my-5 flex flex-col items-center text-center">
                 {/* Peningkatan: Border gradien di sekeliling foto */}
                <div className="p-1 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 hidden md:block">
                    <Image
                        src="/image/foto_prib.JPG"
                        alt="Foto Pribadi"
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded-full border-2 border-white dark:border-gray-800"
                    />
                </div>
                <Link
                    href="/"
                    className="hidden md:block text-xl font-bold mt-3 transition-colors duration-300 text-slate-800 dark:text-slate-100"
                >
                    Dwi Lutfi
                </Link>
                <p className="hidden md:block text-sm text-slate-500 dark:text-slate-400">@tetraxion</p>
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="cursor-pointer hidden md:flex items-center justify-center w-10 h-10 rounded-full mt-4 transition-all duration-300 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
                >
                     <AnimatePresence mode="wait" initial={false}>
                         <motion.div
                            key={theme}
                            initial={{ rotate: -90, scale: 0, opacity: 0 }}
                            animate={{ rotate: 0, scale: 1, opacity: 1 }}
                            exit={{ rotate: 90, scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </motion.div>
                    </AnimatePresence>
                </button>
            </div>

            <hr className="mb-5 border-t border-slate-200 dark:border-slate-700" />

            <nav className="flex-grow">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.path}
                                    onClick={onClose}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                                        isActive
                                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-purple-500/30"
                                            : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                                    }`}
                                >
                                    <span className={isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200"}>
                                        {item.icon}
                                    </span>
                                    <span className="font-medium text-sm">{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="mt-auto">
                <hr className="my-5 border-t border-slate-200 dark:border-slate-700" />
                <div className="text-center text-slate-500 dark:text-slate-400">
                    <div className="flex justify-center gap-6 mb-4">
                        {/* Peningkatan: Ikon sosial dengan warna hover */}
                        <a href="mailto:lutfid955@gmail.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-red-500"><SiGmail size={22} /></a>
                        <a href="https://www.linkedin.com/in/dwi-lutfi-988026277/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-600"><FaLinkedin size={22} /></a>
                        <a href="https://instagram.com/lutfid955" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-pink-500"><FaInstagram size={22} /></a>
                        <a href="https://github.com/tetraxion" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-slate-900 dark:hover:text-slate-100"><FaGithub size={22} /></a>
                    </div>
                    <p className="text-xs">&copy; {new Date().getFullYear()} Dwi Lutfi</p>
                </div>
            </div>
        </div>
    );
}