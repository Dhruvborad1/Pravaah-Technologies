import React, { useState } from 'react';
import { ArrowRight, Bot, Check, Code2, Cloud, Database, Globe2, Layers3, Link2, Server, Sparkles, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import pravaahLogo from '../assets/logo/Logo Horizontal Light Transparent.png';

const WindowBar = ({ title, dark = false }) => (
  <div className={`flex items-center gap-1.5 border-b px-3 py-2 ${dark ? 'border-white/10' : 'border-slate-200'}`}>
    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#f7c948]" />
    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#30c878]" />
    <span className={`ml-2 truncate text-[8px] font-semibold tracking-wide ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{title}</span>
  </div>
);

const ScreenFrame = ({ children, className = '', dark = false, screenName, isActive, onSelect }) => (
  <button type="button" aria-label={`Show ${screenName} screen`} aria-pressed={isActive} onClick={onSelect} className={`hero-app-window absolute overflow-hidden rounded-2xl border p-1.5 text-left ${dark ? 'border-slate-600/80 bg-slate-700/80' : 'border-blue-100 bg-white/95'} ${isActive ? 'hero-app-window-active' : ''} ${className}`}>
    <div className={`relative h-full w-full overflow-hidden rounded-xl ${dark ? 'bg-[#071225] text-white' : 'bg-white text-slate-900'}`}>
      {children}
      <div aria-hidden="true" className="hero-window-reflection absolute inset-0 pointer-events-none" />
    </div>
  </button>
);

const LeftScreen = ({ isActive, onSelect }) => (
  <ScreenFrame screenName="Pravaah Services" isActive={isActive} onSelect={onSelect} className="hero-left-screen">
    <WindowBar title="Pravaah Services / Build" />
    <div className="p-3">
      <div className="flex items-center justify-between"><div><p className="text-[8px] font-bold uppercase tracking-[0.16em] text-blue-600">Build</p><h3 className="mt-1 text-sm font-bold">Pravaah Services</h3></div><Code2 className="h-4 w-4 text-cyan-500" /></div>
      <div className="mt-3 space-y-1.5">
        {[['Web Development', 'React / Node.js', '92%', 'bg-cyan-400'], ['Mobile Development', 'iOS / Android', '84%', 'bg-blue-500'], ['UI/UX Design', 'Design systems', '96%', 'bg-indigo-500'], ['AI Solutions', 'Automation', '78%', 'bg-purple-500']].map(([label, detail, value, color]) => <div key={label} className="rounded-lg border border-slate-100 bg-slate-50 p-2"><div className="flex items-center gap-1.5"><span className="hero-service-icon h-1.5 w-1.5 rounded-full bg-blue-500" /><div className="min-w-0 flex-1"><div className="flex justify-between gap-2 text-[8px] font-semibold"><span className="truncate">{label}</span><span className="text-slate-400">{value}</span></div><p className="mt-0.5 text-[7px] text-slate-400">{detail}</p></div></div><div className="mt-1.5 h-1 rounded-full bg-slate-200"><div className={`hero-service-progress h-full rounded-full ${color}`} style={{ width: value }} /></div></div>)}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg bg-blue-50 p-2 text-[8px] font-semibold text-blue-700"><Layers3 className="h-3.5 w-3.5" /> Build with purpose</div>
    </div>
  </ScreenFrame>
);

const MainScreen = ({ isActive, onSelect }) => (
  <ScreenFrame screenName="Digital Solutions" isActive={isActive} onSelect={onSelect} className="hero-main-screen" dark>
    <WindowBar title="Pravaah Technology / Digital Platform" dark />
    <div className="p-3.5 sm:p-4">
      <div className="flex items-start justify-between gap-3"><div className="min-w-0"><img src={pravaahLogo} alt="Pravaah Technology" className="hero-main-logo h-7 w-auto object-contain object-left" /><p className="mt-3 text-[8px] font-bold uppercase tracking-[0.2em] text-cyan-300">Digital platform</p><h2 className="mt-1 text-xl font-bold sm:text-2xl">Digital Solutions</h2><p className="mt-1 text-[9px] text-slate-400">Building scalable digital experiences for modern businesses.</p></div><span className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-1 text-[8px] font-bold text-emerald-300"><i className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Active</span></div>
      <div className="mt-4 grid grid-cols-[1.25fr_0.9fr] gap-2.5"><div className="rounded-xl border border-white/10 bg-white/[0.06] p-2.5"><div className="flex items-center justify-between"><span className="text-[9px] text-slate-400">Project overview</span><span className="text-[9px] font-bold text-cyan-300">Live</span></div><div className="mt-2 grid grid-cols-2 gap-2"><div><p className="text-lg font-bold">24+</p><p className="text-[8px] text-slate-500">Projects</p></div><div><p className="text-lg font-bold text-cyan-300">18</p><p className="text-[8px] text-slate-500">Active</p></div><div><p className="text-lg font-bold text-emerald-300">6</p><p className="text-[8px] text-slate-500">Completed</p></div><div><p className="text-lg font-bold">98%</p><p className="text-[8px] text-slate-500">Satisfaction</p></div></div></div><div className="space-y-2"><div className="rounded-xl border border-white/10 bg-white/[0.06] p-2"><p className="text-[8px] text-slate-400">System health</p><p className="mt-1 text-base font-bold text-emerald-300">99.9%</p><div className="mt-2 h-1 rounded-full bg-white/10"><div className="h-full w-[99%] rounded-full bg-emerald-400" /></div></div><div className="rounded-xl border border-white/10 bg-white/[0.06] p-2"><p className="text-[8px] text-slate-400">AI solutions</p><p className="mt-1 flex items-center gap-1 text-xs font-bold text-cyan-300"><Bot className="h-3 w-3" /> Active</p></div></div></div>
      <div className="mt-3 flex flex-wrap gap-1.5"><span className="hero-tech-chip">React</span><span className="hero-tech-chip">Node.js</span><span className="hero-tech-chip">MongoDB</span><span className="hero-tech-chip">AI</span><span className="hero-tech-chip">Cloud</span><span className="hero-tech-chip">API</span></div>
      <div className="mt-4 flex items-center justify-between text-[8px] font-semibold text-slate-400"><span className="text-cyan-300">Design</span><span className="hero-flow-segment" /><span>Develop</span><span className="hero-flow-segment" /><span>Test</span><span className="hero-flow-segment" /><span className="text-purple-300">Deploy</span></div>
    </div>
  </ScreenFrame>
);

const RightScreen = ({ isActive, onSelect }) => (
  <ScreenFrame screenName="Technology System" isActive={isActive} onSelect={onSelect} className="hero-right-screen">
    <WindowBar title="Technology System / Architecture" />
    <div className="p-3"><div className="flex items-center justify-between"><div><p className="text-[8px] font-bold uppercase tracking-[0.16em] text-purple-600">Scale</p><h3 className="mt-1 text-sm font-bold">Technology System</h3></div><Workflow className="h-4 w-4 text-blue-600" /></div><div className="mt-3 space-y-1.5"><div className="hero-architecture-node"><Globe2 className="h-3 w-3 text-blue-600" /><span>Frontend</span><Check className="ml-auto h-3 w-3 text-emerald-500" /></div><div className="hero-architecture-line" /><div className="hero-architecture-node"><Link2 className="h-3 w-3 text-cyan-600" /><span>API layer</span><Check className="ml-auto h-3 w-3 text-emerald-500" /></div><div className="hero-architecture-line" /><div className="hero-architecture-node"><Server className="h-3 w-3 text-blue-600" /><span>Backend</span><Check className="ml-auto h-3 w-3 text-emerald-500" /></div><div className="hero-architecture-line" /><div className="hero-architecture-node"><Database className="h-3 w-3 text-purple-600" /><span>Database</span><Check className="ml-auto h-3 w-3 text-emerald-500" /></div><div className="hero-architecture-line" /><div className="hero-architecture-node"><Cloud className="h-3 w-3 text-cyan-600" /><span>Cloud</span><Check className="ml-auto h-3 w-3 text-emerald-500" /></div></div><div className="mt-3 grid grid-cols-2 gap-1.5 text-[8px]"><div className="rounded-lg bg-emerald-50 p-2 text-emerald-700"><span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />API Active</div><div className="rounded-lg bg-blue-50 p-2 text-blue-700"><span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-400" />Cloud Running</div></div></div>
  </ScreenFrame>
);

const FlowConnector = () => <svg aria-hidden="true" className="hero-flow-connector absolute inset-0 z-0 h-full w-full" viewBox="0 0 700 520" preserveAspectRatio="none"><path d="M30 250 C155 160 205 150 300 235 S480 310 675 225" fill="none" stroke="url(#hero-flow-gradient)" strokeWidth="1.5" strokeDasharray="5 8" /><defs><linearGradient id="hero-flow-gradient" x1="0" x2="1"><stop stopColor="#06b6d4" /><stop offset="0.5" stopColor="#2563eb" /><stop offset="1" stopColor="#7c3aed" /></linearGradient></defs><circle r="4" fill="#22d3ee"><animateMotion dur="6s" repeatCount="indefinite" path="M30 250 C155 160 205 150 300 235 S480 310 675 225" /></circle></svg>;

const HeroScreens = () => {
  const [activeScreen, setActiveScreen] = useState('main');

  return (
  <div className={`hero-screens hero-screens-active-${activeScreen} relative mx-auto h-[28rem] w-full max-w-[46rem] sm:h-[31rem] lg:h-[34rem]`} aria-label="Three connected Pravaah Technology application screens">
    <div className="hero-screen-glow absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full" aria-hidden="true" />
    <div className="hero-flow-arc hero-flow-arc-one absolute" aria-hidden="true" /><div className="hero-flow-arc hero-flow-arc-two absolute" aria-hidden="true" />
    <FlowConnector />
    <LeftScreen isActive={activeScreen === 'left'} onSelect={() => setActiveScreen('left')} /><MainScreen isActive={activeScreen === 'main'} onSelect={() => setActiveScreen('main')} /><RightScreen isActive={activeScreen === 'right'} onSelect={() => setActiveScreen('right')} />
    <div className="hero-screen-status hero-screen-status-ai absolute z-40 flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-lg shadow-blue-100/70"><span className="hero-status-dot h-2 w-2 rounded-full bg-emerald-400" /> AI Ready</div>
    <div className="hero-screen-status hero-screen-status-live absolute z-40 flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-lg shadow-blue-100/70"><Sparkles className="h-3.5 w-3.5 text-cyan-500" /> System Active</div>
  </div>
  );
};

const Hero = () => (
  <section className="hero-light relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
    <div className="hero-light-grid absolute inset-0 pointer-events-none" />
    <div className="container relative z-10 mx-auto px-5 md:px-8"><div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
      <div className="hero-copy max-w-2xl"><div className="hero-rise mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm"><Sparkles className="h-4 w-4 text-cyan-500" /> Digital solutions for ambitious teams</div><h1 className="hero-rise hero-rise-delay-1 font-display text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">Build what moves your business <span className="pravaah-gradient-text">forward.</span></h1><p className="hero-rise hero-rise-delay-2 mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">Pravaah Technology turns complex ideas into clear, reliable digital products that help your team grow with confidence.</p><div className="hero-rise hero-rise-delay-3 mt-9 flex flex-col gap-3 sm:flex-row"><Link to="/services" className="pravaah-btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold shadow-lg shadow-blue-200 transition-transform hover:-translate-y-1">Explore our services <ArrowRight className="h-5 w-5" /></Link><Link to="/contact" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-700 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700">Start a conversation</Link></div><div className="hero-rise hero-rise-delay-4 mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">{['Design', 'Develop', 'Scale'].map((item) => <span key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-600" /> {item}</span>)}</div></div>
      <HeroScreens />
    </div></div>
  </section>
);

export default Hero;
