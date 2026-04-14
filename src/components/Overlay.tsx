"use client";

import { useTransform, motion } from "framer-motion";
import { useScrollyProgress } from "./ScrollContext";

export default function Overlay() {
  const scrollYProgress = useScrollyProgress();

  // Section 1: 0% to 15% scroll (Fades out by 15%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.16, 1], [1, 1, 0, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15, 0.16, 1], [0, -50, -50, -50]);

  // Section 2: 15% to 32% scroll
  const opacity2 = useTransform(scrollYProgress, [0, 0.14, 0.15, 0.2, 0.28, 0.32, 0.33, 1], [0, 0, 0, 1, 1, 0, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.14, 0.15, 0.2, 0.28, 0.32, 0.33, 1], [50, 50, 50, 0, 0, -50, -50, -50]);

  // Section 3: starts at 32% (after Section 2 fully fades) — appears nice and early
  const opacity3 = useTransform(scrollYProgress, [0, 0.31, 0.32, 0.38, 0.78, 0.90, 0.91, 1], [0, 0, 0, 1, 1, 0, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0, 0.31, 0.32, 0.38, 0.78, 0.90, 0.91, 1], [30, 30, 30, 0, 0, -30, -30, -30]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 w-full h-full">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 h-[100dvh]"
      >
        <p className="text-xs sm:text-sm md:text-base font-medium tracking-widest text-white/80 mb-2 sm:mb-3 uppercase">
          HELLO JI...I AM
        </p>
        <h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-none"
          style={{ textShadow: '0 2px 30px rgba(0,0,0,0.7)' }}
        >
          YASH BHAWANI.
        </h1>
        <span
          className="inline-block text-base sm:text-xl md:text-2xl font-bold text-white px-5 sm:px-8 py-2 sm:py-3 rounded-full"
          style={{ backgroundColor: '#2563eb' }}
        >
          I make memes.
        </span>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-12 md:px-24 h-[100dvh]"
      >
        <h2
          className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-tight"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
        >
          I WRITE,<br />
          I EDIT,<br />
          I CREATE.
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-10 md:px-20 h-[100dvh]"
      >
        {/* Label */}
        <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/60 mb-2 sm:mb-4 font-medium">
          Bhagavad Gita · 3.35
        </p>

        {/* Top ornament */}
        <div className="flex items-center gap-3 mb-3 sm:mb-5 w-full justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/40" />
          <span className="text-white/60 text-sm">✦</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/40" />
        </div>

        {/* Shloka — flex column ensures clean spacing between verses on all devices */}
        <h2
          className="flex flex-col gap-2 md:gap-4 text-[13px] xs:text-sm sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-snug"
          style={{
            textShadow: '0 0 40px rgba(255,220,100,0.6), 0 0 80px rgba(255,180,50,0.3), 0 2px 12px rgba(0,0,0,0.9)',
            fontFamily: 'Georgia, serif',
          }}
        >
          <span>श्रेयान्स्वधर्मो विगुण: परधर्मात्स्वनुष्ठितात् |</span>
          <span>स्वधर्मे निधनं श्रेय: परधर्मो भयावह: ||</span>
        </h2>

        {/* Bottom ornament */}
        <div className="flex items-center gap-3 mt-3 sm:mt-5 w-full justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/40" />
          <span className="text-white/60 text-sm">✦</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/40" />
        </div>
      </motion.div>
    </div>
  );
}
