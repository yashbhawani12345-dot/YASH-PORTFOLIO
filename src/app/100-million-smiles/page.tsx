"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";

function InstagramIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const REELS = [
  "C8CNgCKCFZV",
  "C8EkrIms09Z",
  "C8Hg3LCiNXs",
  "C9PdNhPPSJa",
  "Csqt9_yIXgW"
];

const MEMES = [
  "C7_YNxURKG3",
  "DJq5ewBveZP",
  "DM4zbkRtZza",
  "DMMurGZPjXn",
  "DLKOm1_PyrA"
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


function InstagramLink({ id, index, label }: { id: string, index: number, label: string }) {
  return (
    <motion.div
      variants={itemVariants}
      className="w-full bg-white/[0.02] rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 group"
    >
      <a
        href={`https://www.instagram.com/reel/${id}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-6 w-full h-full"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#E1306C]/20 transition-colors">
            <InstagramIcon className="w-6 h-6 text-white/50 group-hover:text-[#E1306C] transition-colors" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg text-white/90 group-hover:text-white transition-colors">
              {label} #{index + 1}
            </h3>
            <span className="text-sm text-white/40 group-hover:text-white/60 transition-colors">
              View on Instagram
            </span>
          </div>
        </div>
        <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-white/80 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
      </a>
    </motion.div>
  );
}

export default function SmilesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-32 px-5 sm:px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            100 Million+ <span className="text-[#E1306C]">Smiles</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            A collection of viral moments that reached millions, spread joy, and proved the power of modern digital strategy.
          </p>
        </motion.div>

        {/* Reels Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex items-center gap-4"
          >
            <h2 className="text-3xl font-bold uppercase tracking-widest text-white/90">Reels</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl mx-auto"
          >
            {REELS.map((id, index) => (
              <InstagramLink key={id} id={id} index={index} label="Reel" />
            ))}
          </motion.div>
        </section>

        {/* Memes Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex items-center gap-4"
          >
            <h2 className="text-3xl font-bold uppercase tracking-widest text-[#f472b6]">Memes</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#f472b6]/30 to-transparent" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl mx-auto"
          >
            {MEMES.map((id, index) => (
              <InstagramLink key={id} id={id} index={index} label="Meme" />
            ))}
          </motion.div>
        </section>

      </div>
    </main>
  );
}
