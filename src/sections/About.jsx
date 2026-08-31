import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import {
  ArrowRight,
  Lightbulb,
  Heart,
  Award,
  TrendingUp,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import aboutImage from '../assets/ABOUT US.png';

// સ્મૂથ કાઉન્ટ-અપ નંબર એનિમેશન કમ્પોનન્ટ
const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const motionVal = useMotionValue(0);

  const springVal = useSpring(motionVal, {
    damping: 30,
    stiffness: 100,
    duration: 2.5
  });

  useEffect(() => {
    if (isInView) {
      motionVal.set(value);
    }
  }, [isInView, value, motionVal]);

  useEffect(() => {
    return springVal.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springVal, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const About = () => {
  const imageCardRef = useRef(null);

  const handleImagePointerMove = (event) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !imageCardRef.current) return;

    const bounds = imageCardRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    const card = imageCardRef.current;

    card.style.setProperty('--card-rotate-x', `${y * -4}deg`);
    card.style.setProperty('--card-rotate-y', `${x * 4}deg`);
    card.style.setProperty('--image-shift-x', `${x * -8}px`);
    card.style.setProperty('--image-shift-y', `${y * -8}px`);
    card.style.setProperty('--reflection-x', `${(x + 0.5) * 100}%`);
    card.style.setProperty('--reflection-y', `${(y + 0.5) * 100}%`);
  };

  const resetImagePointer = () => {
    if (!imageCardRef.current) return;

    imageCardRef.current.style.setProperty('--card-rotate-x', '0deg');
    imageCardRef.current.style.setProperty('--card-rotate-y', '0deg');
    imageCardRef.current.style.setProperty('--image-shift-x', '0px');
    imageCardRef.current.style.setProperty('--image-shift-y', '0px');
    imageCardRef.current.style.setProperty('--reflection-x', '50%');
    imageCardRef.current.style.setProperty('--reflection-y', '50%');
  };

  const cards = [
    {
      id: '01',
      title: 'Innovation First',
      desc: 'We continuously explore better ideas, technologies and ways to solve problems.'
    },
    {
      id: '02',
      title: 'Client Focused',
      desc: 'We build solutions around the goals, needs and expectations of our clients.'
    },
    {
      id: '03',
      title: 'Quality Driven',
      desc: 'We focus on clean design, reliable technology and high-quality execution.'
    },
    {
      id: '04',
      title: 'Built for Growth',
      desc: 'We create scalable digital solutions designed to grow with your business.'
    }
  ];

  const values = [
    { icon: <Lightbulb className="w-4 h-4 text-[#4361EE]" />, label: 'Innovation' },
    { icon: <Heart className="w-4 h-4 text-[#4361EE]" />, label: 'Integrity' },
    { icon: <Award className="w-4 h-4 text-[#4361EE]" />, label: 'Quality' },
    { icon: <TrendingUp className="w-4 h-4 text-[#4361EE]" />, label: 'Growth' },
  ];

  const stats = [
    { value: 50, suffix: '+', label: 'Projects Delivered', color: 'from-blue-600 to-cyan-500' },
    { value: 25, suffix: '+', label: 'Happy Clients', color: 'from-indigo-600 to-blue-500' },
    { value: 10, suffix: '+', label: 'Digital Solutions', color: 'from-purple-600 to-indigo-500' },
    { value: 99, suffix: '%', label: 'Client Satisfaction', color: 'from-pink-600 to-rose-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative w-full py-20 bg-[#FBFDFF] text-[#1E293B] overflow-hidden font-sans">

      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="section-label mb-4">
            <span className="section-label-text">ABOUT US</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[#0B132B] tracking-tight">
            Turning Ideas Into<span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent"> Digital Solutions</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#64748B] max-w-xl mx-auto leading-relaxed">
            We combine technology, creativity and innovation to build digital experiences that make a real difference.
          </p>
        </motion.div>

        {/* Middle Graphic & Content Section */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16 relative">

          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative flex items-center justify-center group p-2 sm:p-4"
          >
            {/* Background glowing blob for the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"></div>

            {/* Animated Border Frame (Full Size) */}
            <div
              ref={imageCardRef}
              onPointerMove={handleImagePointerMove}
              onPointerLeave={resetImagePointer}
              className="about-image-card relative w-full mx-auto rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-[4px] overflow-hidden bg-[#E2E8F0] transition-transform duration-300"
            >
              {/* Rotating Gradient Animation */}
              <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_180deg,#3B82F6_240deg,#6366F1_300deg,#8B5CF6_360deg)]"></div>

              {/* Inner White Border and Image */}
              <div className="about-image-viewport relative z-10 w-full h-full rounded-[1.8rem] overflow-hidden bg-white border-[6px] border-white">
                <div className="about-image-reflection pointer-events-none absolute inset-0 z-10 opacity-0"></div>
                <div className="about-image-sweep pointer-events-none absolute inset-y-0 -left-1/2 z-20 w-1/3 skew-x-[-18deg]"></div>
                <img
                  src={aboutImage}
                  alt="About Us"
                  className="about-image w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B132B]">
              Who We Are
            </h2>
            <p className="text-[#475569] text-sm md:text-base leading-relaxed">
              Pravaah Technologies is a technology and digital solutions company focused on helping businesses transform their ideas into modern, scalable and meaningful digital experiences. From websites and applications to UI/UX, software solutions, AI and automation, we combine creativity with technology to deliver solutions built around real business needs.
            </p>
            <p className="text-[#475569] text-sm md:text-base leading-relaxed">
              Our approach is simple — understand the problem, create the right strategy, build with modern technology and deliver a solution that creates long-term value.
            </p>
            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/about"
                className="group relative inline-flex items-center gap-3.5 px-8 py-3.5 bg-[#0B132B] text-white text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-[0_8px_25px_-4px_rgba(11,19,43,0.35)] hover:shadow-[0_12px_30px_-2px_rgba(99,102,241,0.35)] border border-white/10 hover:border-indigo-500/50 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-sky-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <span className="relative z-10 tracking-wide transition-colors duration-300 group-hover:text-white">
                  Learn More About Us
                </span>

                <div className="relative z-10 w-4 h-4 overflow-hidden">
                  <ArrowRight className="w-4 h-4 text-white absolute transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:opacity-0" />
                  <ArrowRight className="w-4 h-4 text-cyan-400 absolute -translate-x-6 opacity-0 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* 4 Feature Boxes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {cards.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/90 backdrop-blur-sm p-7 rounded-2xl border border-[#E2E8F0] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.04)] hover:shadow-xl transition-shadow cursor-default"
            >
              <span className="text-2xl font-bold text-[#94A3B8] block mb-3 font-mono">
                {item.id}
              </span>
              <h3 className="text-base font-bold text-[#0B132B] mb-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Values Divider Strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 py-6 border-b border-slate-200/80 mb-12"
        >
          <span className="font-bold text-sm text-[#0B132B]">Our Values</span>
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#475569] cursor-default"
            >
              {v.icon}
              <span>{v.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlighted Numbers / Animated Counter Stats Section */}
        <div className="relative py-8 px-6 rounded-3xl bg-gradient-to-b from-white/80 to-slate-50/80 border border-slate-200/80 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative p-5 rounded-2xl bg-white/70 border border-slate-100 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300 text-center cursor-default"
              >
                {/* Glowing Animated Counter Number */}
                <div className={`text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 inline-block`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Status Indicator Dot & Label */}
                <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 group-hover:scale-125 transition-all" />
                  <span>{stat.label}</span>
                </div>

                {/* Bottom Progress Animated Underline */}
                <div className="mt-3 mx-auto w-8 h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className={`h-full w-full bg-gradient-to-r ${stat.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;