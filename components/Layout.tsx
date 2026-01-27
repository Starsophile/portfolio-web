import React, { useState, useEffect, useRef } from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link, useLocation } = ReactRouterDOM;

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show at the very top to avoid getting stuck in hidden state near top
      if (currentScrollY < 10) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-zinc-100 selection:bg-amber-500/30 relative overflow-x-hidden font-sans">
      
      {/* Top Header - Intelligent Hide/Show on Scroll */}
      <header 
        className={`fixed top-0 w-full z-50 px-6 py-6 pointer-events-none transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="pointer-events-auto w-full max-w-[1800px] mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
             </div>
             <span className="text-xl font-bold font-['Syne'] uppercase tracking-wider text-white">RISHI</span>
          </Link>

          {/* Right Nav Actions */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/5">
              <Link to="/" className={`hover:text-amber-400 transition-colors ${location.pathname === '/' ? 'text-white' : 'text-zinc-400'}`}>Home</Link>
              <Link to="/projects" className={`hover:text-amber-400 transition-colors ${location.pathname.startsWith('/projects') ? 'text-white' : 'text-zinc-400'}`}>Work</Link>
              <Link to="/about" className={`hover:text-amber-400 transition-colors ${location.pathname === '/about' ? 'text-white' : 'text-zinc-400'}`}>About</Link>
            </nav>
            
            <div className="flex items-center gap-3">
              <a href="mailto:contact@starsophile.qzz.io" className="flex items-center gap-2 text-sm font-bold bg-white text-black px-5 py-2.5 rounded-full hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Let's Talk
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 w-full max-w-[1800px] mx-auto px-6 md:px-12 pt-32 pb-24">
        {children}
      </main>

      {/* Footer - Redesigned for better spacing */}
      <footer className="relative z-10 bg-[#0a0a0a] border-t border-white/5 py-24 md:py-32">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-32 items-end">
             <div className="max-w-2xl">
                <h2 className="text-6xl md:text-8xl font-bold font-['Syne'] text-white mb-8 leading-[0.9]">
                  Let's work <br/> 
                  <span className="text-amber-400">together</span>
                </h2>
                <p className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed">
                  Open for collaborations, product strategy roles, and interesting conversations about tech.
                </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <a href="mailto:contact@starsophile.qzz.io" className="bg-[#111] border border-white/10 p-8 md:p-12 rounded-2xl group hover:border-amber-500/50 hover:bg-[#161616] transition-all cursor-pointer flex flex-col justify-between min-h-[240px]">
                   <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-black transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                      </div>
                      <svg className="w-6 h-6 text-zinc-500 group-hover:text-amber-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                   </div>
                   <div>
                       <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Drop an email</p>
                       <span className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-400">contact@starsophile.qzz.io</span>
                   </div>
                </a>

                <a href="https://www.linkedin.com/in/rishiparmar01/" target="_blank" rel="noopener noreferrer" className="bg-[#111] border border-white/10 p-8 md:p-12 rounded-2xl group hover:border-amber-500/50 hover:bg-[#161616] transition-all cursor-pointer flex flex-col justify-between min-h-[240px]">
                   <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </div>
                      <svg className="w-6 h-6 text-zinc-500 group-hover:text-amber-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                   </div>
                   <div>
                       <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Connect on LinkedIn</p>
                       <span className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-400">Rishi Parmar</span>
                   </div>
                </a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};