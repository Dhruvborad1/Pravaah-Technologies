import React from 'react';
import { motion } from 'framer-motion';

// Exact Custom SVGs
const CodeWindowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-cyan-400 stroke-[1.8]" stroke="currentColor">
    <rect x="2" y="4" width="15" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 8l2 2-2 2M11 12h2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="14" y="8" width="8" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="17" r="0.5" fill="currentColor" />
  </svg>
);

const PenRulerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-cyan-400 stroke-[1.8]" stroke="currentColor">
    <rect x="3" y="3" width="13" height="13" rx="2" />
    <path d="M6 6l7 7M6 10l4 4M10 6l4 4" strokeLinecap="round" />
    <circle cx="17" cy="17" r="3.5" />
    <path d="M19.5 19.5l2.5 2.5" strokeLinecap="round" />
  </svg>
);

const AiBrainChipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-cyan-400 stroke-[1.8]" stroke="currentColor">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2.5 2.5M16.5 16.5L19 19M5 19l2.5-2.5M16.5 7.5L19 5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const VideoPlayerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-cyan-400 stroke-[1.8]" stroke="currentColor">
    <rect x="3" y="6" width="13" height="12" rx="2" />
    <path d="M16 10l5-3v10l-5-3v-4z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 10l3 2-3 2v-4z" fill="currentColor" />
  </svg>
);

const ScreenLayersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-purple-400 stroke-[1.8]" stroke="currentColor">
    <rect x="3" y="4" width="12" height="10" rx="2" />
    <rect x="9" y="8" width="12" height="12" rx="2" />
  </svg>
);

const HandDollarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-purple-400 stroke-[1.8]" stroke="currentColor">
    <circle cx="15" cy="7" r="4" />
    <path d="M15 5.5v3M14 6.5h2a.75.75 0 010 1.5h-2" strokeLinecap="round" />
    <path d="M3 15h6l3.5-1.5a2 2 0 011.8.2L18 16a2 2 0 01-1 3.5H9l-6-2v-2.5z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BrainSideIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-purple-400 stroke-[1.8]" stroke="currentColor">
    <path d="M9.5 4a4.5 4.5 0 00-4.5 4.5c0 .7.15 1.35.42 1.95A4 4 0 004 14a4 4 0 003.8 4h.2a4 4 0 007.8-.5c1.3-.4 2.2-1.6 2.2-3 0-.6-.2-1.2-.5-1.7A4.5 4.5 0 0014 4h-4.5z" strokeLinecap="round" />
    <path d="M10 9a2 2 0 012 2M9 14h2M14 13a1 1 0 011 1" strokeLinecap="round" />
  </svg>
);

const GearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-purple-400 stroke-[1.8]" stroke="currentColor">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const services = [
  {
    icon: CodeWindowIcon,
    title: 'Web & App\nDevelopment',
    desc: 'We continuously explore ideas, and wayus ways to solve problems.',
  },
  {
    icon: PenRulerIcon,
    title: 'UI/UX & Graphic\nDesign',
    desc: 'We build aid graphic design, mi/urt UI/UX, and graphic design.',
  },
  {
    icon: AiBrainChipIcon,
    title: 'AI & Automation',
    desc: 'We morsforing ideas into digital emtorience and oonitive solutions.',
  },
  {
    icon: VideoPlayerIcon,
    title: 'Video & Creative\nServices',
    desc: 'We continuously better ideas, technologies and to sollve problems.',
  },
];

const solutions = [
  {
    icon: ScreenLayersIcon,
    title: 'Custom Software\nSolutions',
    desc: 'Pravaah focused on helping businesses transform digital experiences.',
  },
  {
    icon: HandDollarIcon,
    title: 'Digital Business\nPlatforms',
    desc: 'We create scailable digital soutore expietations and business platforms.',
  },
  {
    icon: BrainSideIcon,
    title: 'AI-Powered\nBusiness Solutions',
    desc: 'We focus on design, reliable technoloy & high-quality execution.',
  },
  {
    icon: GearIcon,
    title: 'Workflow & Process\nAutomation',
    desc: 'We create scalable digital solutions designed to grow your business.',
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const ServicesAndSolutions = () => {
  return (
    <section className="relative min-h-screen bg-[#070b18] text-slate-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans selection:bg-blue-500/30">

      {/* Inline Keyframe CSS */}
      <style>{`
        @keyframes beamFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes verticalBeam {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-beam-flow {
          animation: beamFlow 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-vertical-beam {
          animation: verticalBeam 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Background Decorative Mesh Glows with Smooth Pulse */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-blue-700/15 rounded-full blur-[140px] pointer-events-none" 
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Accent Pixels */}
      <motion.div 
        animate={{ y: [-4, 4, -4] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 left-[15%] w-2.5 h-2.5 rounded-sm border border-cyan-400/40 bg-cyan-400/10 hidden lg:block" 
      />
      <motion.div 
        animate={{ y: [4, -4, 4] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-72 left-[12%] w-2 h-2 rounded-sm bg-blue-400/30 hidden lg:block" 
      />
      <motion.div 
        animate={{ y: [-3, 5, -3] }} 
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-52 right-[10%] w-2 h-2 rounded-sm bg-purple-400/40 hidden lg:block" 
      />
      <motion.div 
        animate={{ y: [5, -5, 5] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-[8%] w-3 h-3 rounded-sm border border-cyan-400/30 hidden lg:block" 
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="section-label mb-4">
            <span className="section-label-text">WHAT WE DO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white mb-4 tracking-tight leading-tight">
            Services &amp; Solutions For the Digital Future
          </h2>

          <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-xl mx-auto">
            We combine creativity, technology and innovation to deliver digital services and business solutions designed around your goals.
          </p>
        </motion.div>

        {/* 2-Column Master Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

          {/* Vertical Glowing Line */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[1px] -translate-x-1/2 z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400 to-purple-500 opacity-80 blur-[0.5px] animate-vertical-beam" />
          </div>

          {/* Left Column: OUR SERVICES */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-left mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                OUR SERVICES
              </h3>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {services.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="group relative rounded-2xl p-6 bg-[#0b1126]/75 border border-slate-800/80 backdrop-blur-md hover:border-cyan-500/40 hover:bg-[#0f1733]/90 transition-all duration-300 flex flex-col justify-between min-h-[200px] cursor-default"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#141b38] border border-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                        <Icon />
                      </div>

                      <h4 className="text-[16px] font-semibold text-white mb-2 leading-snug whitespace-pre-line group-hover:text-cyan-200 transition-colors">
                        {card.title}
                      </h4>

                      <p className="text-slate-400 text-xs leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="flex justify-end mt-4">
                      <span className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200">
                        <ArrowRightIcon />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column: OUR SOLUTIONS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-left mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                OUR SOLUTIONS
              </h3>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {solutions.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="group relative rounded-2xl p-6 bg-[#0b1126]/75 border border-slate-800/80 backdrop-blur-md hover:border-purple-500/40 hover:bg-[#0f1733]/90 transition-all duration-300 flex flex-col justify-between min-h-[200px] cursor-default"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#141b38] border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 group-hover:border-purple-500/40 transition-all">
                        <Icon />
                      </div>

                      <h4 className="text-[16px] font-semibold text-white mb-2 leading-snug whitespace-pre-line group-hover:text-purple-200 transition-colors">
                        {card.title}
                      </h4>

                      <p className="text-slate-400 text-xs leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="flex justify-end mt-4">
                      <span className="text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-200">
                        <ArrowRightIcon />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

        </div>

        {/* Animated Pravaah Stream Line */}
        <div className="relative w-full h-px mt-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-purple-500 opacity-75 blur-[1px] animate-beam-flow" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-90 animate-beam-flow" />
        </div>

        {/* Bottom CTA Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6 }}
          className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Have a unique business requirement?
            </h4>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Let's create the right digital solution for you.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-all shadow-md text-sm whitespace-nowrap"
          >
            Start Your Project <ArrowRightIcon />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesAndSolutions;