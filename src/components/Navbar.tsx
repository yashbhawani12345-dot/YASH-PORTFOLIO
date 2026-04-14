"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hireMenuOpen, setHireMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.07] shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 h-16 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="text-white font-bold text-lg tracking-tight hover:text-white/70 transition-colors"
          >
            yash<span className="text-blue-400">bhawani</span>
          </button>

          {/* Desktop Links */}
          <nav className="hidden sm:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/[0.06]"
              >
                {link.label}
              </button>
            ))}
            <div className="ml-3 relative group">
              <button
                className="px-5 py-2 text-sm font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-1.5"
                style={{ backgroundColor: "#2563eb" }}
              >
                HELLO
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-40 flex flex-col bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl transition-all duration-200 origin-top opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible z-50">
                <a href="tel:+919009199268" className="px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors">Call</a>
                <a href="mailto:yashbhawani69@gmail.com" className="px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors border-t border-white/5">Email</a>
              </div>
            </div>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block h-0.5 w-6 bg-white/80 rounded-full origin-center transition-all"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block h-0.5 w-6 bg-white/80 rounded-full"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block h-0.5 w-6 bg-white/80 rounded-full origin-center transition-all"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -12, pointerEvents: menuOpen ? "auto" : "none" }}
        transition={{ duration: 0.25 }}
        className="fixed top-16 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.07] px-5 py-4 flex flex-col gap-2 sm:hidden"
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            className="text-left px-4 py-3 text-base font-medium text-white/70 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors"
          >
            {link.label}
          </button>
        ))}
        <div className="mt-2 flex flex-col gap-2">
          <button
            onClick={() => setHireMenuOpen(!hireMenuOpen)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold text-white rounded-xl transition-all"
            style={{ backgroundColor: "#2563eb" }}
          >
            HELLO
            <svg className={`w-5 h-5 transition-transform ${hireMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </button>
          
          <div className={`flex flex-col gap-2 overflow-hidden transition-all duration-300 ${hireMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <a
              href="tel:+919009199268"
              className="w-full text-center px-5 py-3 text-base font-medium text-white rounded-xl transition-all bg-white/[0.05] border border-white/10 hover:bg-white/[0.1]"
            >
              Call
            </a>
            <a
              href="mailto:yashbhawani69@gmail.com"
              className="w-full text-center px-5 py-3 text-base font-medium text-white rounded-xl transition-all bg-white/[0.05] border border-white/10 hover:bg-white/[0.1]"
            >
              Email
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
