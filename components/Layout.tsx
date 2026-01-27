import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link, useLocation } = ReactRouterDOM;

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-zinc-100 selection:bg-amber-500/30 relative overflow-x-hidden font-sans">
      
      {/* Top Header - Reference Style: Minimal Logo Left, Action Right */}
      <header className="fixed top-0 w-full z-50 px-6 py-6 pointer-events-none">
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
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link to="/" className={`hover:text-amber-400 transition-colors ${location.pathname === '/' ? 'text-white' : 'text-zinc-400'}`}>Home</Link>
              <Link to="/projects" className={`hover:text-amber-400 transition-colors ${location.pathname.startsWith('/projects') ? 'text-white' : 'text-zinc-400'}`}>Work</Link>
              <Link to="/about" className={`hover:text-amber-400 transition-colors ${location.pathname === '/about' ? 'text-white' : 'text-zinc-400'}`}>About</Link>
            </nav>
            
            <a href="mailto:contact@starsophile.qzz.io" className="flex items-center gap-2 text-sm font-bold bg-white text-black px-5 py-2.5 rounded-full hover:bg-amber-400 transition-colors">
               Let's Talk
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 w-full max-w-[1800px] mx-auto px-6 md:px-12 pt-32 pb-24">
        {children}
      </main>

      {/* Footer - Reference Style: Dark section at bottom */}
      <footer className="relative z-10 bg-[#0a0a0a] border-t border-white/5 py-20">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
             <div>
                <h2 className="text-5xl md:text-7xl font-bold font-['Syne'] text-white mb-6">Let's work <br/> <span className="text-amber-400">together</span></h2>
                {/* Removed extra links section as requested */}
             </div>
             
             <div className="flex flex-col md:flex-row gap-6 justify-end">
                <a href="mailto:contact@starsophile.qzz.io" className="bg-[#111] border border-white/10 p-6 rounded-xl w-full md:w-64 group hover:border-amber-500/50 transition-colors cursor-pointer block">
                   <p className="text-zinc-400 text-xs font-bold uppercase mb-4">Drop an email</p>
                   <div className="flex justify-between items-end">
                      <span className="text-amber-400 font-bold truncate">contact@starsophile.qzz.io</span>
                      <svg className="w-4 h-4 text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                   </div>
                </a>
                <a href="https://www.linkedin.com/in/rishiparmar01/" target="_blank" rel="noopener noreferrer" className="bg-[#111] border border-white/10 p-6 rounded-xl w-full md:w-64 group hover:border-amber-500/50 transition-colors cursor-pointer block">
                   <p className="text-zinc-400 text-xs font-bold uppercase mb-4">Connect on LinkedIn</p>
                   <div className="flex justify-between items-end">
                      <span className="text-amber-400 font-bold">Rishi Parmar</span>
                      <svg className="w-4 h-4 text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                   </div>
                </a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};