"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clapperboard, Sparkles, Scissors, Palette, TrendingUp } from "lucide-react";

// Custom Instagram icon (not in lucide-react)
function InstagramIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const PROJECTS = [
  {
    id: 1,
    title: "100 Million+ Smiles",
    description:
      "Stopped 100 Million+ people from scrolling and reminded them to smile.",
    Icon: InstagramIcon,
    accent: "#E1306C",
    link: "/100-million-smiles",
  },
  {
    id: 2,
    title: "Web Series",
    description:
      "Been part of these amazing series from Script to Screen as Social Media Manager and created some amazing promotion material.",
    Icon: Clapperboard,
    accent: "#a78bfa",
    link: "https://youtube.com/playlist?list=PLtNepg6lV8d2NghEFlptGLb6QcVg-Ui-8&si=wAA25BYuhBLm9T7Q",
  },
  {
    id: 3,
    title: "AI Magic",
    description:
      "The thin line between AI or Real is in our hands now.",
    Icon: Sparkles,
    accent: "#34d399",
    link: "https://drive.google.com/drive/folders/1FkmuZCVW-qrw2ykUYtJme3rCKNdQtfeJ?usp=drive_link",
  },
  {
    id: 4,
    title: "Editing",
    description:
      "Crafting compelling narratives through seamless and engaging video editing.",
    Icon: Scissors,
    accent: "#fbbf24",
    link: "https://drive.google.com/drive/folders/1U_9YlnsZxRRqmqtL-V9JVjG05Wi235Yr?usp=drive_link",
  },
  {
    id: 5,
    title: "Graphic Designs",
    description:
      "Delivering impactful visual communication and bespoke graphic designs.",
    Icon: Palette,
    accent: "#f472b6",
    link: "https://www.behance.net/drymarketing",
  },
  {
    id: 6,
    title: "GROWTH",
    description:
      "Driving metric-based growth, analytics, and meaningful audience engagement.",
    Icon: TrendingUp,
    accent: "#38bdf8",
    link: "https://drive.google.com/drive/folders/1-N07FT4Ri4N4pHWCp418-HNf2byR3C7_?usp=sharing",
  },
];

export default function Projects() {
  const [hireMenuOpen, setHireMenuOpen] = useState(false);

  return (
    <section className="relative z-20 min-h-screen bg-[#121212] py-16 md:py-24 px-5 sm:px-8 md:px-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-16 tracking-tight text-white/90"
        >
          WORKS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8 hover:bg-white/[0.06] transition-all duration-500 flex flex-col justify-between"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none z-0"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${proj.accent}18, transparent 60%)`,
                }}
              />

              {/* Click overlay */}
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 rounded-2xl"
                  aria-label={`View ${proj.title}`}
                />
              )}

              <div className="flex justify-between items-start mb-6 sm:mb-8 relative z-20 pointer-events-none">
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: `${proj.accent}22` }}
                >
                  <proj.Icon
                    className="w-6 h-6 transition-colors duration-300"
                    style={{ color: proj.accent }}
                  />
                </div>
                <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#121212] transition-colors duration-300 text-white/50">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 tracking-tight group-hover:text-white text-white/90 transition-colors uppercase">
                  {proj.title}
                </h3>
                <p className="text-white/50 text-sm sm:text-base leading-relaxed group-hover:text-white/70 transition-colors">
                  {proj.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-24 md:mt-32 flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight"
          >
            LETS CREATE SOMETHING CRAZYY TOGETHER.
          </motion.h2>
          
          <div className="relative flex flex-col items-center sm:group">
            <button
              onClick={() => setHireMenuOpen(!hireMenuOpen)}
              className="px-8 py-4 text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]"
              style={{ backgroundColor: "#2563eb" }}
            >
              HELLO
              <svg className={`w-5 h-5 transition-transform ${hireMenuOpen ? 'rotate-180' : 'sm:group-hover:rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            {/* Options expand below */}
            <div className={`mt-4 flex flex-col sm:flex-row gap-3 overflow-hidden transition-all duration-300 ${hireMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 sm:group-hover:max-h-40 sm:group-hover:opacity-100'}`}>
              <a
                href="tel:+919009199268"
                className="px-8 py-3 text-base font-medium text-white/90 hover:text-white rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.12] transition-colors"
              >
                Call
              </a>
              <a
                href="mailto:yashbhawani69@gmail.com"
                className="px-8 py-3 text-base font-medium text-white/90 hover:text-white rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.12] transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
