import React, { useState, useEffect, useCallback } from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link, useLocation } = ReactRouterDOM;

const MENU_LINKS = [
  { to: '/', label: 'Home', anchor: '#home' },
  { to: '/projects', label: 'Works', anchor: '#work' },
  { to: '/about', label: 'About', anchor: null },
];

const NAV_ANCHORS = [
  { anchor: '#home', label: 'Home' },
  { anchor: '#experience', label: 'How I Think' },
  { anchor: '#approach', label: 'Services' },
  { anchor: '#work', label: 'Works' },
  { anchor: '#insights', label: 'Insights' },
  { anchor: '#contact', label: 'Contact' },
];

const LinkedInIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const MailIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M22 4l-10 8L2 4"/>
  </svg>
);

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/rishiparmar01/', label: 'LinkedIn', icon: <LinkedInIcon /> },
  { href: 'https://www.instagram.com/starsophile/', label: 'Instagram', icon: <InstagramIcon /> },
  { href: 'mailto:01rishiparmar@gmail.com', label: 'Email', icon: <MailIcon /> },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const isHome = location.pathname === '/';

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  useEffect(() => { setSidebarOpen(false); }, [location.pathname]);

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isActive = useCallback((to: string) => {
    if (to === '/projects') return location.pathname.startsWith('/projects');
    return location.pathname === to;
  }, [location.pathname]);

  const handleAnchorClick = (anchor: string) => {
    setSidebarOpen(false);
    if (isHome) {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '/' + anchor;
    }
  };

  const formatTime = (d: Date) => {
    return d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }} className="flex flex-col relative">

      {/* ╔══════════════════════════════════════════╗
         ║  FLOATING PILL NAVBAR                    ║
         ╚══════════════════════════════════════════╝ */}
      <header className="fixed top-0 left-0 right-0 z-[80] px-4 md:px-6 pt-4">
        <div
          className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-8 py-3"
          style={{
            backgroundColor: 'rgba(17,17,17,0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '999px',
          }}
        >
          {/* Left - Location indicator */}
          <div className="hidden md:flex items-center gap-2 text-base" style={{ color: '#888' }}>
            <span className="w-2 h-2 rounded-full pulse-dot" style={{ backgroundColor: '#CCFF00' }} />
            <span>India</span>
          </div>

          {/* Center - Logo */}
          <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-lg tracking-wide z-[90]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" fill="#CCFF00" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 12 + Math.cos(rad) * 5.5;
                const y1 = 12 + Math.sin(rad) * 5.5;
                const x2 = 12 + Math.cos(rad) * 9;
                const y2 = 12 + Math.sin(rad) * 9;
                return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" />;
              })}
            </svg>
            <span style={{ color: '#fff' }}>Rishi</span>
          </Link>

          {/* Right - Grid menu button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 z-[90]"
            style={{
              backgroundColor: sidebarOpen ? '#CCFF00' : '#fff',
              color: '#000',
            }}
            aria-label="Toggle menu"
            id="nav-menu-btn"
          >
            {sidebarOpen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <rect x="0" y="0" width="4" height="4" rx="1" />
                <rect x="6" y="0" width="4" height="4" rx="1" />
                <rect x="12" y="0" width="4" height="4" rx="1" />
                <rect x="0" y="6" width="4" height="4" rx="1" />
                <rect x="6" y="6" width="4" height="4" rx="1" />
                <rect x="12" y="6" width="4" height="4" rx="1" />
                <rect x="0" y="12" width="4" height="4" rx="1" />
                <rect x="6" y="12" width="4" height="4" rx="1" />
                <rect x="12" y="12" width="4" height="4" rx="1" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ╔══════════════════════════════════════════╗
         ║  SIDEBAR OVERLAY                         ║
         ╚══════════════════════════════════════════╝ */}
      {sidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[82]"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            onClick={() => setSidebarOpen(false)}
          />
          {/* Sidebar panel */}
          <div
            className="fixed top-0 right-0 bottom-0 z-[85] w-full max-w-[480px] overflow-y-auto sidebar-enter"
            style={{
              backgroundColor: '#111',
              borderLeft: '1px solid rgba(255,255,255,0.06)',
              borderTopLeftRadius: '32px',
              borderBottomLeftRadius: '32px',
            }}
          >
            <div className="flex flex-col h-full px-6 pt-24 pb-8 md:px-10">
              {/* Close button */}
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-6 right-6 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 z-[90]"
                style={{ backgroundColor: '#CCFF00', color: '#000' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                aria-label="Close menu"
                id="sidebar-close-btn"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Menu label */}
              <div className="flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#CCFF00' }} />
                <span className="text-sm font-semibold" style={{ color: '#888' }}>Menu</span>
              </div>

              {/* Nav links - anchor-based when on home page */}
              <nav className="flex flex-col gap-1 mb-8">
                {isHome ? (
                  NAV_ANCHORS.map(link => (
                    <button
                      key={link.anchor}
                      onClick={() => handleAnchorClick(link.anchor)}
                      className="flex items-center gap-4 py-4 px-4 rounded-2xl transition-all duration-200 text-left"
                      style={{ color: '#fff', backgroundColor: 'transparent' }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#CCFF00'; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#fff'; }}
                    >
                      <span className="text-2xl font-bold font-display">{link.label}</span>
                    </button>
                  ))
                ) : (
                  MENU_LINKS.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setSidebarOpen(false)}
                      className="flex items-center gap-4 py-4 px-4 rounded-2xl transition-all duration-200"
                      style={{
                        backgroundColor: isActive(link.to) ? 'rgba(204,255,0,0.06)' : 'transparent',
                        color: isActive(link.to) ? '#CCFF00' : '#fff',
                      }}
                      onMouseEnter={e => {
                        if (!isActive(link.to)) {
                          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isActive(link.to)) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <span className="text-2xl font-bold font-display">{link.label}</span>
                    </Link>
                  ))
                )}
              </nav>

              {/* About link when on home */}
              {isHome && (
                <Link
                  to="/about"
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-4 py-4 px-4 rounded-2xl transition-all duration-200 mb-8"
                  style={{ color: '#fff', backgroundColor: 'transparent' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#CCFF00'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#fff'; }}
                >
                  <span className="text-2xl font-bold font-display">About</span>
                </Link>
              )}

              {/* Social links */}
              <div className="mt-auto">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#CCFF00' }} />
                  <span className="text-sm font-semibold" style={{ color: '#888' }}>Social Network</span>
                </div>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-200"
                      style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#fff' }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#CCFF00'; e.currentTarget.style.color = '#000'; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff'; }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ╔══════════════════════════════════════════╗
         ║  FLOATING SOCIAL ICONS (desktop only)    ║
         ╚══════════════════════════════════════════╝ */}
      <div className="social-float">
        {SOCIAL_LINKS.filter(s => !s.href.startsWith('mailto')).map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-200"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#888', border: '1px solid rgba(255,255,255,0.06)' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#CCFF00'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = '#CCFF00'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
            title={s.label}
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* ╔══════════════════════════════════════════╗
         ║  MAIN CONTENT                            ║
         ╚══════════════════════════════════════════╝ */}
      <main className="relative z-10 flex-1 w-full">
        {children}
      </main>

      {/* ╔══════════════════════════════════════════╗
         ║  FOOTER                                  ║
         ╚══════════════════════════════════════════╝ */}
      <footer className="relative z-10 border-t overflow-hidden" style={{ backgroundColor: '#0a0a0a', borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 mb-16">

            {/* Col 1 - Connect */}
            <div>
              <h4 className="text-base font-semibold mb-6" style={{ color: '#888' }}>Let's Connect</h4>
              <a
                href="mailto:01rishiparmar@gmail.com"
                className="text-lg font-medium transition-colors duration-200 block break-all"
                style={{ color: '#fff' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#CCFF00')}
                onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
              >
                01rishiparmar@gmail.com
              </a>
            </div>

            {/* Col 2 - Menu */}
            <div>
              <h4 className="text-base font-semibold mb-6" style={{ color: '#888' }}>Menu</h4>
              <div className="flex flex-col gap-3">
                {MENU_LINKS.map(l => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="text-base transition-colors duration-200"
                    style={{ color: '#fff' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#CCFF00')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 3 - Socials */}
            <div>
              <h4 className="text-base font-semibold mb-6" style={{ color: '#888' }}>Socials</h4>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.filter(s => !s.href.startsWith('mailto')).map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base transition-colors duration-200"
                    style={{ color: '#fff' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#CCFF00')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4 - Local Time */}
            <div>
              <h4 className="text-base font-semibold mb-6" style={{ color: '#888' }}>Local Time</h4>
              <p className="text-lg font-mono text-white">{formatTime(currentTime)}</p>
              <p className="text-sm mt-1" style={{ color: '#555' }}>(GMT +5:30)</p>
            </div>
          </div>

          {/* Bottom row */}
          <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <p className="text-sm" style={{ color: '#555' }}>© Rishi Parmar 2026</p>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm transition-colors duration-200"
              style={{ color: '#555' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#CCFF00')}
              onMouseLeave={e => (e.currentTarget.style.color = '#555')}
            >
              Back to top ↑
            </a>
          </div>
        </div>

        {/* Giant watermark text */}
        <div className="footer-giant-text text-center w-full px-6 pb-8 hidden md:block">
          Rishi
        </div>
      </footer>
    </div>
  );
};
