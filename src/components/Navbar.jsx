import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoDark from '../assets/logo/Logo Horizontal Light Transparent.png';
import logoLight from '../assets/logo/Logo Horizontal Light Transparent.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Projects', path: '/projects' },
  { name: 'Industries', path: '/industries' },
  { name: 'Why Pravaah', path: '/why-pravaah' },
  { name: 'Careers', path: '/careers' },
  { name: 'Blog', path: '/blog' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-2 lg:py-4' 
            : 'py-4 lg:py-6'
        }`}
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className={`flex items-center justify-between relative transition-all duration-500 rounded-2xl ${
            isScrolled 
              ? 'bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-4 lg:px-6 py-2' 
              : 'bg-transparent border border-transparent px-0 py-2'
          }`}>
            
            {/* Logo */}
            <Link className="flex items-center z-50 relative" to="/" onClick={() => setIsOpen(false)}>
              <img 
                src={isScrolled ? logoLight : logoDark} 
                alt="Pravaah Technology" 
                className={`w-auto object-contain transition-all duration-500 ${
                  isScrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-20'
                }`} 
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path || (location.pathname.startsWith(link.path) && link.path !== '/');
                return (
                  <Link 
                    key={i}
                    to={link.path}
                    className="relative group px-2 xl:px-3 py-2 text-[13px] xl:text-sm font-semibold whitespace-nowrap transition-colors duration-300"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-slate-600 group-hover:text-blue-600'}`}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div 
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-t-full shadow-[0_-2px_10px_rgba(37,99,235,0.4)]"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {!isActive && (
                      <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-slate-300 -translate-x-1/2 group-hover:w-[calc(100%-1.5rem)] transition-all duration-300 ease-out rounded-t-full" />
                    )}
                  </Link>
                )
              })}
            </div>
            
            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4 z-50">
              <Link 
                className="hidden lg:inline-flex relative overflow-hidden group px-5 xl:px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-[13px] xl:text-sm font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap" 
                to="/contact"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Quote
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <button 
                className={`lg:hidden relative z-50 p-2.5 rounded-xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-blue-50 text-blue-600 rotate-90' 
                    : isScrolled ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/50 backdrop-blur-md text-slate-800 hover:bg-white/80'
                }`} 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-[100dvh] w-[85%] sm:w-[400px] bg-white/95 backdrop-blur-xl shadow-2xl z-40 flex flex-col pt-24 pb-8 px-6 lg:hidden border-l border-white/50 overflow-y-auto"
            >
              <div className="flex flex-col gap-1.5 flex-grow">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path || (location.pathname.startsWith(link.path) && link.path !== '/');
                  return (
                    <motion.div
                      key={i}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.04 + 0.1, duration: 0.3 }}
                    >
                      <Link 
                        onClick={() => setIsOpen(false)} 
                        className={`group flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 active:scale-[0.98] ${
                          isActive 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/50'
                        }`} 
                        to={link.path}
                      >
                        {link.name}
                        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'text-blue-500' : 'text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.04 + 0.2 }}
                className="mt-6 pt-6 border-t border-slate-100"
              >
                <Link 
                  onClick={() => setIsOpen(false)} 
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-base font-bold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 active:scale-[0.98] transition-all" 
                  to="/contact"
                >
                  Start Your Project
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
