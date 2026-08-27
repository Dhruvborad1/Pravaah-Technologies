import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-16 md:py-28">
      {/* Background Decorative Accents */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[100px]" />
        
        {/* Subtle Decorative Geometric Accents */}
        <div className="absolute right-[8%] top-24 h-2 w-2 rounded-sm bg-blue-500/30 rotate-12" />
        <div className="absolute left-[10%] top-36 h-2.5 w-2.5 rounded-sm bg-cyan-500/30 -rotate-45" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          {/* Badge */}
          <div className="section-label mb-4">
            <span className="section-label-text">Our Work</span>
          </div>

          {/* Title */}
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Featured{' '}
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          {/* Description */}
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Take a look at some of our recent work that has helped businesses achieve their digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="group relative flex flex-col justify-between rounded-[24px] border border-slate-800/80 bg-slate-900/50 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-900/20 overflow-hidden">
            <div className="h-56 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-slate-500 font-medium z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-slate-300">B2B E-Commerce</div>
            </div>
            <div className="p-7">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">Web Development</span>
                <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-100 transition-colors group-hover:text-blue-400">B2B E-Commerce Platform</h3>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                Online ordering platform for petrochemical products with secure access for distributors and an admin panel for tracking quotes and orders.
              </p>
            </div>
            {/* Bottom Accent Line */}
            <div className="h-1 w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-full" />
          </div>
          
          {/* Project 2 */}
          <div className="group relative flex flex-col justify-between rounded-[24px] border border-slate-800/80 bg-slate-900/50 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-slate-700 hover:shadow-2xl hover:shadow-cyan-900/20 overflow-hidden">
            <div className="h-56 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-slate-500 font-medium z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-slate-300">Logistics Website</div>
            </div>
            <div className="p-7">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">Web Development</span>
                <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-100 transition-colors group-hover:text-cyan-400">Logistics E-Commerce Website</h3>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                Customer-facing site for booking shipping services, managing orders, and receiving status updates.
              </p>
            </div>
            {/* Bottom Accent Line */}
            <div className="h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
          </div>
          
          {/* Project 3 */}
          <div className="group relative flex flex-col justify-between rounded-[24px] border border-slate-800/80 bg-slate-900/50 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-slate-700 hover:shadow-2xl hover:shadow-purple-900/20 overflow-hidden">
            <div className="h-56 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-slate-500 font-medium z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-slate-300">Mobile App</div>
            </div>
            <div className="p-7">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">Mobile Development</span>
                <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-100 transition-colors group-hover:text-purple-400">Finance Dashboard App</h3>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                A comprehensive dashboard for users to track their expenses, manage budgets, and generate detailed reports.
              </p>
            </div>
            {/* Bottom Accent Line */}
            <div className="h-1 w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-8 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-slate-800 hover:text-white hover:border-slate-600 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]" href="/projects">
            View All Projects <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

