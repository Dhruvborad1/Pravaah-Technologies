
import React from 'react';
import { ArrowRight } from 'lucide-react';
import LogoIcon from '../assets/logo/Logo PNG Icon.png';

const technologiesList = [
  // LEFT WING (x < 600)
  { id: 'react', name: 'React.js', x: 300, y: 150, delay: '0s', icon: 'react' },
  { id: 'next', name: 'Next.js', x: 200, y: 250, delay: '1.2s', icon: 'next' },
  { id: 'node', name: 'Node.js', x: 120, y: 350, delay: '2.4s', icon: 'node' },
  { id: 'js', name: 'JavaScript', x: 420, y: 240, delay: '1.8s', icon: 'js' },
  { id: 'python', name: 'Python', x: 300, y: 400, delay: '0.6s', icon: 'python' },
  { id: 'ts', name: 'TypeScript', x: 400, y: 480, delay: '3s', icon: 'ts' },
  
  // RIGHT WING (x > 600)
  { id: 'mongo', name: 'MongoDB', x: 750, y: 130, delay: '0.3s', icon: 'mongo' },
  { id: 'aws', name: 'AWS', x: 860, y: 200, delay: '1.5s', icon: 'aws' },
  { id: 'docker1', name: 'Docker', x: 980, y: 270, delay: '2.7s', icon: 'docker' },
  { id: 'docker2', name: 'Docker', x: 800, y: 320, delay: '1.1s', icon: 'docker' },
  { id: 'github', name: 'GitHub', x: 700, y: 390, delay: '0.9s', icon: 'github' },
  { id: 'openai', name: 'OpenAI', x: 920, y: 390, delay: '2.1s', icon: 'openai' },
  { id: 'php', name: 'PHP', x: 620, y: 460, delay: '3.3s', icon: 'php' },
  { id: 'tailwind', name: 'Tailwind CSS', x: 800, y: 500, delay: '0.5s', icon: 'tailwind' },
];

const renderTechIcon = (type) => {
  const iconClass = "w-4 h-4 sm:w-[20px] sm:h-[20px] text-[#0f172a]";
  switch (type) {
    case 'react':
      return (
        <svg className={`${iconClass} animate-[spin_8s_linear_infinite]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'next':
      return (
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0f172a] text-white flex items-center justify-center font-bold text-[10px] sm:text-[11px]">
          N
        </div>
      );
    case 'node':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.874 1.996L3.432 6.843A1.97 1.97 0 002.43 8.563v8.948a1.97 1.97 0 001.002 1.72l8.442 4.846a1.977 1.977 0 001.994 0l8.442-4.846a1.972 1.972 0 001.002-1.72V8.564a1.97 1.97 0 00-1.002-1.72L13.868 2a1.988 1.988 0 00-1.994-.004zm-4.7 15.659L3.5 15.539V8.563l3.674 2.115v4.846a1.187 1.187 0 001.782 1.026l2.915-1.68v4.23l-4.697 2.55zM20.5 8.563v6.976l-3.674 2.116V12.81a1.187 1.187 0 00-1.782-1.026l-2.915 1.68V9.234l4.697-2.55zm-1.838-3.176l-6.788 3.906-6.788-3.906L12 1.996zm-9.7 11.75l2.912-1.677 2.912 1.677v3.355L12 22.17l-3.038-1.677z" />
        </svg>
      );
    case 'python':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-5.52 0-5.5 2.5-5.5 2.5H12V6H4.5s-2.5-.03-2.5 5.5 2.5 5.5 2.5 5.5h1.5v-2.5c0-2.5 2-2.5 2-2.5h5s2.5.03 2.5-2.5V4.5S17.52 2 12 2zm-2 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2 18c5.52 0 5.5-2.5 5.5-2.5H12V18h7.5s2.5.03 2.5-5.5c0-5.5-2.5-5.5-2.5-5.5h-1.5v2.5c0 2.5-2 2.5-2 2.5h-5s-2.5-.03-2.5 2.5v5s.03 2.5 3.5 2.5zm2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </svg>
      );
    case 'js':
      return <span className="px-1 py-[1px] bg-[#0f172a] text-white font-bold text-[9px] sm:text-[10px] rounded-[3px]">JS</span>;
    case 'ts':
      return <span className="px-1 py-[1px] bg-[#0f172a] text-white font-bold text-[9px] sm:text-[10px] rounded-[3px]">TS</span>;
    case 'mongo':
      return (
        <svg className="w-3 h-4 sm:w-[14px] sm:h-[18px] text-[#0f172a]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.66 0C8.36 0 6.64 3.73 6.64 6.77c0 4.1 3.57 6.42 4.96 11.58.11.41.22 1.34.22 1.34s.13-1.07.24-1.53c1.23-5.22 4.94-7.25 4.94-11.39C17.02 3.73 15.3 0 11.66 0z" />
          <path d="M11.83 24s.73-1.55 1.09-3.79c-1.35.43-3.15-.02-3.15-.02s.54 1.76.99 3.81z" fill="currentColor"/>
        </svg>
      );
    case 'aws':
      return <span className="text-[10px] sm:text-[12px] font-black tracking-tighter text-[#0f172a]">aws</span>;
    case 'docker':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.9 8.2h2.2v2H13.9v-2zm-2.8 0h2.2v2h-2.2v-2zm-2.8 0h2.2v2H8.3v-2zm8.4 2.6h2.2v2h-2.2v-2zm-2.8 0h2.2v2h-2.2v-2zm-2.8 0h2.2v2h-2.2v-2zm-2.8 0h2.2v2H5.5v-2zm14.8.9c-.3-.2-1.3-.7-2.7-.3-.1-.6-.5-1.2-1.1-1.6l-.6-.4-.4.6c-.5.8-.4 1.8.2 2.5-1 .5-2.2.6-3.8.6H2.2c-.6 0-1.1.5-1.1 1.1 0 4.1 3.3 7.5 7.5 7.5 4.9 0 9-3.4 9.8-8.1 1.5-.1 2.3-.9 2.5-1.1l-.6-.8z"/>
        </svg>
      );
    case 'openai':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a4 4 0 0 1 3.8 2.7l.2.8v3.5l1.6-.9a4 4 0 0 1 5.4 1.4l.5.8a4 4 0 0 1-1.4 5.4l-3 1.8v3.6a4 4 0 0 1-2 3.5l-.8.4a4 4 0 0 1-5.4-1.4l-1.6-.9-3 1.7a4 4 0 0 1-5.4-1.4l-.5-.8a4 4 0 0 1 1.4-5.4l3-1.8V8.6a4 4 0 0 1 2-3.5l.8-.4A4 4 0 0 1 12 2z"/>
        </svg>
      );
    case 'github':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );
    case 'php':
      return <span className="font-extrabold italic text-[10px] sm:text-[11px] text-[#0f172a] border border-[#0f172a] rounded-full px-1.5 py-0.5 bg-slate-100">php</span>;
    case 'tailwind':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      );
    default:
      return null;
  }
};

const Technologies = () => {
  return (
    <section className="relative w-full py-10 lg:py-16 bg-[#e2e6ed] text-slate-900 overflow-hidden font-sans select-none border-t border-white/50">
      
      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes float-badge {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        @keyframes line-flow {
          from { stroke-dashoffset: 60; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes particle-drift {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translate(150px, -80px) scale(0) rotate(180deg); opacity: 0; }
        }
        @keyframes subtle-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.85; }
        }
      `}</style>

      {/* ============================================== */}
      {/* BACKGROUND: Soft Gradients + Tech Grid + Ambient Orbs */}
      {/* ============================================== */}
      
      {/* Dynamic Grid Overlay to remove emptiness */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35]" 
        style={{
          backgroundImage: `radial-gradient(rgba(100, 116, 139, 0.25) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} 
      />

      {/* Base Soft Glows & Ambient Orbs */}
      <div className="absolute top-0 right-[-5%] w-[650px] h-[650px] bg-blue-400/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[550px] h-[550px] bg-purple-400/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-300/30 rounded-full blur-[130px] pointer-events-none" />

      {/* Background Neural Data Waves & Concentric Circuit Rings */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50 mix-blend-color-burn" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
            <stop offset="20%" stopColor="#818cf8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#4f46e5" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
            <stop offset="30%" stopColor="#a78bfa" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#818cf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Flowing background paths */}
        <g stroke="url(#wave1)" strokeWidth="1" fill="none">
          <path d="M-100 350 C 300 450, 400 250, 720 400 C 1040 550, 1140 350, 1540 450" />
          <path d="M-100 370 C 320 470, 420 270, 720 400 C 1020 530, 1120 330, 1540 470" />
          <path d="M-100 390 C 340 490, 440 290, 720 400 C 1000 510, 1100 310, 1540 490" />
          <path d="M-100 330 C 280 430, 380 230, 720 400 C 1060 570, 1160 370, 1540 430" />
          <path d="M-100 310 C 260 410, 360 210, 720 400 C 1080 590, 1180 390, 1540 410" />
          <path d="M-100 290 C 240 390, 340 190, 720 400 C 1100 610, 1200 410, 1540 390" />
        </g>
        <g stroke="url(#wave2)" strokeWidth="1.5" fill="none">
          <path d="M-100 450 C 400 550, 500 350, 720 400 C 940 450, 1040 250, 1540 350" />
          <path d="M-100 470 C 420 570, 520 370, 720 400 C 920 430, 1020 230, 1540 330" />
          <path d="M-100 430 C 380 530, 480 330, 720 400 C 960 470, 1060 270, 1540 370" />
        </g>

        {/* Center Target Circuit Radii */}
        <circle cx="720" cy="400" r="160" stroke="#6366f1" strokeWidth="0.8" fill="none" strokeDasharray="6 6" opacity="0.4" />
        <circle cx="720" cy="400" r="260" stroke="#818cf8" strokeWidth="0.8" fill="none" strokeDasharray="4 8" opacity="0.3" />
        <circle cx="720" cy="400" r="380" stroke="#94a3b8" strokeWidth="0.5" fill="none" strokeDasharray="3 6" opacity="0.25" />

        {/* Side geometric rings */}
        <circle cx="150" cy="250" r="200" stroke="#94a3b8" strokeWidth="0.5" fill="none" strokeDasharray="4 8" opacity="0.4" />
        <circle cx="150" cy="250" r="300" stroke="#94a3b8" strokeWidth="0.5" fill="none" strokeDasharray="4 8" opacity="0.3" />
        <circle cx="1250" cy="550" r="250" stroke="#94a3b8" strokeWidth="0.5" fill="none" strokeDasharray="4 8" opacity="0.4" />
        <circle cx="1250" cy="550" r="350" stroke="#94a3b8" strokeWidth="0.5" fill="none" strokeDasharray="4 8" opacity="0.3" />
      </svg>

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* ============================================== */}
        {/* HEADER */}
        {/* ============================================== */}
        <div className="text-center max-w-3xl mx-auto mb-4 lg:mb-6">
          <div className="section-label mb-4">
            <span className="section-label-text">TECHNOLOGIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#0f172a] mb-2 tracking-tight leading-tight">
            Powered by Modern Technology
          </h2>
          <p className="text-[#475569] text-[14px] sm:text-[15px] leading-relaxed max-w-xl mx-auto font-medium">
            We use the right technologies to build reliable, scalable<br className="hidden sm:inline" /> and future-ready digital solutions.
          </p>
        </div>

        {/* ============================================== */}
        {/* DESKTOP & TABLET VIEW: Interactive Network Layout */}
        {/* ============================================== */}
        <div className="relative w-full max-w-[1200px] mx-auto aspect-[2/1] hidden md:block my-2">
          
          {/* Connecting SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
            <g fill="none" stroke="#6366f1" strokeWidth="1.5" className="opacity-50" style={{ strokeDasharray: '4 8', animation: 'line-flow 15s linear infinite' }}>
              {/* Left connections */}
              <path d="M 600 300 C 500 200, 400 150, 300 150" />
              <path d="M 600 300 C 500 300, 300 250, 200 250 C 150 250, 150 350, 120 350" />
              <path d="M 600 300 C 500 260, 480 240, 420 240" />
              <path d="M 600 300 C 500 380, 400 400, 300 400" />
              <path d="M 600 300 C 550 450, 480 480, 400 480" />

              {/* Right connections */}
              <path d="M 600 300 C 650 200, 700 130, 750 130" />
              <path d="M 600 300 C 700 250, 780 200, 860 200 C 920 200, 950 270, 980 270" />
              <path d="M 600 300 C 700 320, 750 320, 800 320" />
              <path d="M 600 300 C 650 390, 680 390, 700 390 C 800 390, 850 390, 920 390" />
              <path d="M 600 300 C 600 400, 610 460, 620 460 C 680 460, 750 500, 800 500" />
            </g>

            {/* Glowing Dots */}
            <g fill="#38bdf8">
              {technologiesList.map((tech) => (
                 <circle key={`dot-${tech.id}`} cx={tech.x} cy={tech.y} r="3.5" className="animate-pulse" style={{ animationDelay: tech.delay }} />
              ))}
            </g>
          </svg>

          {/* Animated Particles bursting from center */}
          <div className="absolute top-[50%] left-[50%] w-0 h-0 pointer-events-none z-10">
            {[...Array(12)].map((_, i) => (
              <div 
                key={`particle-${i}`}
                className={`absolute rounded-sm ${i % 2 === 0 ? 'bg-indigo-600' : 'bg-purple-500'} ${i % 3 === 0 ? 'w-2 h-2' : 'w-1.5 h-1.5'}`}
                style={{
                  left: `${20 + Math.random() * 40}px`,
                  top: `${-40 + Math.random() * 80}px`,
                  animation: `particle-drift ${2 + Math.random() * 3}s linear infinite`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          {/* Center Logo - Enlarged Size & Enhanced Glow */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[30%] max-w-[360px] aspect-square flex items-center justify-center z-10">
            {/* Pulsing Core Glow */}
            <div className="absolute top-[50%] left-[50%] w-[90%] h-[90%] bg-blue-500/25 rounded-full blur-[45px]" style={{ animation: 'subtle-pulse 4s ease-in-out infinite' }} />
            <img 
              src={LogoIcon} 
              alt="Logo Core" 
              className="w-[95%] h-[95%] object-contain drop-shadow-[0_20px_45px_rgba(59,130,246,0.4)] relative z-10 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Floating Technology Badges */}
          {technologiesList.map((tech) => (
            <div
              key={tech.id}
              className="absolute z-20"
              style={{
                left: `${(tech.x / 1200) * 100}%`,
                top: `${(tech.y / 600) * 100}%`,
                transform: 'translate(-50%, -50%)',
                animation: `float-badge 5s ease-in-out infinite`,
                animationDelay: tech.delay
              }}
            >
              <div className="flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/90 backdrop-blur-md rounded-[20px] shadow-[0_6px_16px_rgba(0,0,0,0.06)] border border-white hover:bg-white hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-default group">
                <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {renderTechIcon(tech.icon)}
                </div>
                <span className="text-[12px] lg:text-[14px] font-semibold text-slate-800 tracking-tight whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* ============================================== */}
        {/* MOBILE RESPONSIVE VIEW */}
        {/* ============================================== */}
        <div className="w-full flex md:hidden flex-col items-center gap-6 my-4 relative z-10">
          
          {/* Logo Center Display on Mobile (Enlarged) */}
          <div className="w-[220px] h-[220px] flex items-center justify-center relative">
            <div className="absolute top-[50%] left-[50%] w-[90%] h-[90%] bg-blue-400/25 rounded-full blur-3xl" style={{ animation: 'subtle-pulse 3s ease-in-out infinite' }} />
            <img 
              src={LogoIcon} 
              alt="Logo Core" 
              className="w-full h-auto object-contain drop-shadow-[0_12px_30px_rgba(59,130,246,0.35)] z-10 relative"
            />
          </div>

          {/* Mobile Badges Flow */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-[360px] px-2">
            {technologiesList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-white flex items-center gap-2 text-[12px] font-semibold text-slate-800 hover:scale-105 transition-transform"
              >
                {renderTechIcon(item.icon)}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================== */}
        {/* FOOTER CTA */}
        {/* ============================================== */}
        <div className="text-center mt-4 lg:mt-6 z-20 flex flex-col items-center relative">
          <p className="text-[14px] sm:text-[15px] text-slate-700 font-medium mb-3">
            Built with the right technology for the right solution.
          </p>
          
          <a
            href="#technologies"
            className="inline-flex items-center gap-2 text-[14px] font-bold text-[#0f172a] hover:text-indigo-600 transition-colors duration-200 group bg-white/40 px-5 py-2 rounded-full border border-slate-300/50 hover:bg-white/70"
          >
            <span>Explore Our Technology Stack</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Technologies;