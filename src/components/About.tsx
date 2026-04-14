"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    emoji: "📈",
    title: "Organic Social Media Growth",
    desc: "Creative, data-backed strategies to attract and engage without paid ads.",
  },
  {
    emoji: "🎯",
    title: "Audience Growth & Engagement",
    desc: "Turning followers into loyal brand advocates.",
  },
  {
    emoji: "🔥",
    title: "Trend Spotting",
    desc: "Keeping your brand relevant and ahead of the curve.",
  },
  {
    emoji: "🎬",
    title: "Content Creation",
    desc: "Scroll-stopping posts, videos, and visuals that convert.",
  },
  {
    emoji: "🚀",
    title: "Digital Advertising",
    desc: "Ready to scale? I can run impactful ad campaigns.",
  },
  {
    emoji: "✍️",
    title: "Content Writing",
    desc: "Optimizing visibility and driving targeted traffic.",
  },
  {
    emoji: "💻",
    title: "Website Design & Development",
    desc: "High-converting, responsive websites to elevate your brand.",
  },
  {
    emoji: "🎨",
    title: "Graphic Designing",
    desc: "Eye-catching visuals, brand identities, and design assets that make your brand unforgettable.",
  },
  {
    emoji: "🎞️",
    title: "Video Editing",
    desc: "Polished, cinematic edits that tell your story and keep viewers hooked till the last frame.",
  },
];

export default function About() {
  return (
    <section className="relative z-20 bg-[#0e0e0e] pt-24 pb-20 md:py-32 px-5 sm:px-8 md:px-24 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.4em] uppercase text-white/40 mb-6 md:mb-10 font-medium"
        >
          About Me
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="origin-left h-px bg-gradient-to-r from-white/30 to-transparent mb-12 md:mb-20"
        />

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 leading-relaxed max-w-4xl mb-10 md:mb-24"
        >
          I have{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-extrabold"
          >
            5+ years of experience
          </span>{" "}
          and a proven track record of reaching{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #f472b6, #fb923c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-extrabold"
          >
            100M+ people organically.
          </span>
        </motion.p>

        {/* What I Can Help You With */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.4em] uppercase text-white/40 mb-8 font-medium"
        >
          What I Can Help You With
        </motion.h3>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-24">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group flex gap-4 items-start rounded-2xl bg-white/[0.03] border border-white/[0.07] p-5 md:p-6 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
            >
              <span className="text-2xl shrink-0 mt-0.5">{service.emoji}</span>
              <div>
                <h4 className="text-white/90 font-semibold text-base mb-1 group-hover:text-white transition-colors">
                  {service.title}
                </h4>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-l-2 border-white/20 pl-6 md:pl-8"
        >
          <p className="text-white/60 text-sm sm:text-lg leading-relaxed italic">
            &quot;I focus on delivering results that help you grow smartly while building a powerful digital presence.&quot;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
