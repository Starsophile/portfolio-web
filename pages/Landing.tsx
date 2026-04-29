import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { projects } from '../data/projects';

const { Link } = ReactRouterDOM;

/* ═══════════════════════════════════════════════
   SCROLL REVEAL HOOK
   ═══════════════════════════════════════════════ */
const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const el = ref.current;
    if (el) {
      el.querySelectorAll('.reveal').forEach((child) => observer.observe(child));
      if (el.classList.contains('reveal')) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};

/* ═══════════════════════════════════════════════
   COUNTER ANIMATION HOOK
   ═══════════════════════════════════════════════ */
const useCountUp = (target: number, duration: number = 2000, suffix: string = '') => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { count, ref, suffix };
};

/* ═══════════════════════════════════════════════
   FAQ ITEM
   ═══════════════════════════════════════════════ */
const FaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b transition-colors duration-300"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left transition-colors duration-200 group"
        id={`faq-${q.slice(0, 15).replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="text-lg md:text-xl font-semibold text-white pr-8" style={{ fontFamily: "'Syne', sans-serif" }}>
          {q}
        </span>
        <span
          className={`faq-icon flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl font-light transition-all duration-300 ${open ? 'open' : ''}`}
          style={{
            backgroundColor: open ? '#CCFF00' : 'rgba(255,255,255,0.05)',
            color: open ? '#000' : '#888',
          }}
        >
          +
        </span>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <p className="text-base leading-relaxed pb-4" style={{ color: '#888' }}>
          {a}
        </p>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   LANDING PAGE
   ═══════════════════════════════════════════════ */
export const Landing: React.FC = () => {
  const revealRef = useScrollReveal();

  const stat1 = useCountUp(3, 1500);
  const stat2 = useCountUp(100, 2000);
  const stat3 = useCountUp(4, 1800);
  const stat4 = useCountUp(10, 2200);

  return (
    <div className="animate-fade-in" ref={revealRef}>

      {/* ╔══════════════════════════════════════════╗
          ║  1. HERO - Full viewport                ║
          ╚══════════════════════════════════════════╝ */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-4 md:px-12 max-w-[1400px] mx-auto relative pt-24 pb-16 smoke-bg" style={{ overflow: 'hidden' }}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left - Text */}
          <div className="flex-1 z-10">
            {/* Hook line */}
            <p className="text-sm md:text-base font-medium mb-8 anim-d1 tracking-wide" style={{ color: '#CCFF00' }}>
              Most products don't fail on specs. They fail on perception.
            </p>

            <h1
              className="font-extrabold text-white anim-d2"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(2.5rem, 9vw, 10rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 0.9,
                marginBottom: '2.5rem',
              }}
            >
              <span style={{ color: '#CCFF00' }}>Rishi</span>
              <br />
              <span style={{ color: '#fff' }}>Parmar</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-4 anim-d3 leading-snug font-medium" style={{ color: '#ccc' }}>
              Decoding how products win - beyond specs, features, and surface-level thinking.
            </p>
            <p className="text-base md:text-lg mb-12 anim-d3 leading-relaxed max-w-xl" style={{ color: '#888' }}>
              I study how consumer decisions are shaped in the real world - across retail, positioning, and product experience.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 anim-d4">
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: '#CCFF00', color: '#000' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4ff33')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#CCFF00')}
                id="hero-view-work"
              >
                View Case Studies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#experience"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-sm border transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderColor: 'rgba(255,255,255,0.15)', color: '#fff', backgroundColor: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#CCFF00'; e.currentTarget.style.color = '#CCFF00'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#fff'; }}
                id="hero-contact"
              >
                See How I Think
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
              </a>
            </div>
          </div>

          {/* Right - Portrait */}
          <div className="flex-1 flex items-center justify-center w-full anim-d5" style={{ overflow: 'hidden' }}>
            <div className="relative w-full" style={{ maxWidth: 'min(320px, 75vw)', margin: '0 auto' }}>
              {/* Rotating outer ring */}
              <div className="absolute inset-[-30px] spin-slow pointer-events-none">
                <svg viewBox="0 0 540 540" className="w-full h-full" fill="none">
                  <circle cx="270" cy="270" r="260" stroke="#CCFF00" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 14" />
                </svg>
              </div>
              {/* Corner accents */}
              <svg viewBox="0 0 500 600" className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
                <path d="M15 50 L15 15 L50 15" stroke="#CCFF00" strokeOpacity="0.15" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M450 15 L485 15 L485 50" stroke="#CCFF00" strokeOpacity="0.15" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M485 550 L485 585 L450 585" stroke="#CCFF00" strokeOpacity="0.15" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M50 585 L15 585 L15 550" stroke="#CCFF00" strokeOpacity="0.15" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {/* Portrait */}
              <div className="hero-portrait w-full aspect-[5/6] rounded-[20px] overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                <img
                  src="/assets/hero-portrait.png"
                  alt="Rishi Parmar"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 rotating-badge">
                <svg viewBox="0 0 120 120" className="w-24 h-24 md:w-28 md:h-28">
                  <defs>
                    <path id="circlePath" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
                  </defs>
                  <circle cx="60" cy="60" r="56" fill="rgba(0,0,0,0.8)" stroke="#CCFF00" strokeWidth="0.5" strokeOpacity="0.3" />
                  <text fill="#CCFF00" fontSize="9" fontFamily="'Syne', sans-serif" fontWeight="600" letterSpacing="3">
                    <textPath href="#circlePath">
                      PRODUCT THINKER • STRATEGIST • RESEARCHER •
                    </textPath>
                  </text>
                  <circle cx="60" cy="60" r="4" fill="#CCFF00" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
                    const rad = (angle * Math.PI) / 180;
                    const x1 = 60 + Math.cos(rad) * 8;
                    const y1 = 60 + Math.sin(rad) * 8;
                    const x2 = 60 + Math.cos(rad) * 14;
                    const y2 = 60 + Math.sin(rad) * 14;
                    return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#CCFF00" strokeWidth="1.5" strokeLinecap="round" />;
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ╔══════════════════════════════════════════╗
          ║  2. HOW I THINK                          ║
          ╚══════════════════════════════════════════╝ */}
      <section id="experience" className="px-4 md:px-12 max-w-[1400px] mx-auto" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="mb-12 reveal">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] block mb-4" style={{ color: '#888' }}>
            Thinking Framework
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              How I <span style={{ color: '#CCFF00' }}>Think</span>
            </h2>
            <p className="text-base md:text-lg max-w-lg" style={{ color: '#aaa' }}>
              Not just learning, building a way to think about products in the real world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Consumer Reality\nMapping', desc: 'Understanding how people actually choose products - beyond specs and marketing.', tags: ['Consumer Behavior', 'Decision Making'] },
            { title: 'Retail-Level\nInsight Extraction', desc: 'Observing how in-store dynamics, incentives, and sales behavior influence buying decisions.', tags: ['Retail Strategy', 'Distribution'] },
            { title: 'Product Strategy\nBreakdowns', desc: 'Analyzing how products are positioned, where they fail, and what could be improved.', tags: ['Product Thinking', 'Strategy'] },
          ].map((card, i) => (
            <div
              key={card.title}
              className={`reveal reveal-delay-${i + 1} p-5 md:p-8 border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[280px]`}
              style={{
                backgroundColor: '#111',
                borderColor: 'rgba(255,255,255,0.06)',
                borderRadius: '24px',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(204,255,0,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 whitespace-pre-line" style={{ fontFamily: "'Syne', sans-serif", lineHeight: 1.15 }}>
                  {card.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#aaa' }}>
                  {card.desc}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {card.tags.map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-sm" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#999' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar decoration */}
        <div className="flex gap-1 mt-6 reveal">
          <div className="h-[3px] flex-1 rounded-full" style={{ backgroundColor: '#222' }} />
          <div className="h-[3px] flex-[2] rounded-full" style={{ backgroundColor: '#CCFF00' }} />
          <div className="h-[3px] flex-1 rounded-full" style={{ backgroundColor: '#222' }} />
        </div>
      </section>

      {/* ╔══════════════════════════════════════════╗
          ║  3. MARQUEE TICKER                       ║
          ╚══════════════════════════════════════════╝ */}
      <section className="py-10 overflow-hidden border-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
        <div className="marquee-track whitespace-nowrap flex items-center">
          {[...Array(2)].map((_, rep) => (
            <span key={rep} className="inline-flex items-center text-sm font-bold uppercase tracking-[0.25em]" style={{ color: '#CCFF00' }}>
              {['PRODUCT STRATEGY', 'CONSUMER BEHAVIOUR', 'MARKET ANALYSIS', 'RETAIL DYNAMICS', 'SMARTPHONE ECOSYSTEMS'].map((text, i) => (
                <React.Fragment key={`${rep}-${i}`}>
                  <span className="mx-6">{text}</span>
                  <svg className="w-5 h-5 mx-6" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="3" fill="#CCFF00" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
                      const rad = (angle * Math.PI) / 180;
                      const x1 = 10 + Math.cos(rad) * 5;
                      const y1 = 10 + Math.sin(rad) * 5;
                      const x2 = 10 + Math.cos(rad) * 8;
                      const y2 = 10 + Math.sin(rad) * 8;
                      return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#CCFF00" strokeWidth="1.5" strokeLinecap="round" />;
                    })}
                  </svg>
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* ╔══════════════════════════════════════════╗
          ║  4. APPROACH (Services)                  ║
          ╚══════════════════════════════════════════╝ */}
      <section id="approach" className="px-4 md:px-12 max-w-[1400px] mx-auto" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div className="mb-14 reveal">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] block mb-4" style={{ color: '#888' }}>
            How I Think
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              How I See Products
            </h2>
            <p className="text-base md:text-lg max-w-md" style={{ color: '#777' }}>
              I'm not an expert. I'm someone who takes products seriously enough to go beyond the surface. Here's what that looks like in practice.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { num: '01.', title: 'Market Analysis', sub: 'COMPETITIVE LANDSCAPE', desc: 'Mapping how brands compete, where gaps exist, and why certain players win in specific segments. I look for patterns that spec sheets don\'t reveal.' },
            { num: '02.', title: 'Product Strategy', sub: 'POSITIONING & ROADMAPS', desc: 'Understanding the trade-offs behind product decisions: what gets prioritized, what gets cut, and why clarity matters more than features.' },
            { num: '03.', title: 'Consumer Behaviour', sub: 'USER RESEARCH', desc: 'Going beyond surveys to understand what actually drives purchase decisions: trust, perception, word of mouth, and lived experience.' },
            { num: '04.', title: 'Competitive Research', sub: 'MARKET INTELLIGENCE', desc: 'Tracking how brands position themselves differently across price points, channels, and consumer segments, and what that reveals about their priorities.' },
          ].map((card, i) => (
            <div
              key={card.num}
              className={`reveal reveal-delay-${i + 1} group p-6 md:p-10 border transition-all duration-300 hover:-translate-y-1`}
              style={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.06)', borderRadius: '24px' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(204,255,0,0.25)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold" style={{ color: '#CCFF00', fontFamily: "'Syne', sans-serif" }}>
                  {card.num}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full hidden sm:inline-block" style={{ color: '#777', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {card.sub}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#CCFF00]" style={{ fontFamily: "'Syne', sans-serif" }}>
                {card.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#888' }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center reveal">
          <p className="text-base mb-4" style={{ color: '#777' }}>If any of this resonates, or if you think I'm wrong about something, I'd love to hear from you.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: '#CCFF00', color: '#000' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4ff33')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#CCFF00')}
          >
            Start a Conversation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
          </a>
        </div>
      </section>


      {/* ╔══════════════════════════════════════════╗
          ║  5. WHAT I SEE THAT OTHERS MISS          ║
          ╚══════════════════════════════════════════╝ */}
      <section id="insights" className="px-4 md:px-12 max-w-[1400px] mx-auto" style={{ paddingBottom: '8rem' }}>
        <div className="reveal mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] block mb-4" style={{ color: '#888' }}>
            Perspective
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5" style={{ fontFamily: "'Syne', sans-serif", lineHeight: 1 }}>
            What I See That<br />
            <span style={{ color: '#CCFF00' }}>Others Miss.</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: '#aaa' }}>
            Not just analysis, a different lens on how products actually win or fail in the real world.
          </p>
        </div>

        <div className="space-y-0 reveal">
          {[
            'Most products don\'t lose on specs - they lose on positioning and perception.',
            'Consumers don\'t choose the best product - they choose the safest decision.',
            'Retailers shape demand more than marketing does in offline markets.',
            'A product\'s real performance is defined by everyday usage, not benchmark numbers.',
            'Trust, distribution, and experience beat raw specifications in real-world decisions.',
          ].map((insight, i) => (
            <div
              key={i}
              className="group border-t py-8 md:py-10 flex items-start gap-5 md:gap-8 transition-colors duration-300"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(204,255,0,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
            >
              <span
                className="text-sm font-bold mt-2 md:mt-3 shrink-0 w-6 text-right"
                style={{ color: '#CCFF00', fontFamily: "'Syne', sans-serif" }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <p
                className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug transition-colors duration-300 group-hover:text-white"
                style={{ color: '#bbb', fontFamily: "'Syne', sans-serif" }}
              >
                {insight}
              </p>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />
        </div>
      </section>

      {/* ╔══════════════════════════════════════════╗
          ║  6. SELECTED WORK                        ║
          ╚══════════════════════════════════════════╝ */}
      <section id="work" className="px-4 md:px-12 max-w-[1400px] mx-auto" style={{ paddingTop: '4rem', paddingBottom: '8rem' }}>
        <div className="flex flex-col md:flex-row items-end justify-between mb-14 gap-4 reveal">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] block mb-4" style={{ color: '#888' }}>
              My Work
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              Selected Work
            </h2>
          </div>
          <Link to="/projects"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: '#888' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#CCFF00')}
            onMouseLeave={e => (e.currentTarget.style.color = '#888')}>
            View Full Archive →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.slice(0, 4).map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className={`reveal reveal-delay-${Math.min(index + 1, 4)} group block border transition-all duration-300 hover:-translate-y-1 ${index === 0 ? 'md:col-span-2' : ''}`}
              style={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.06)', borderRadius: '24px' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(204,255,0,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
            >
              <div className={`p-8 md:p-10 flex flex-col justify-between ${index === 0 ? 'min-h-[300px]' : 'min-h-[260px]'}`}>
                {/* Top */}
                <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide"
                      style={{ backgroundColor: 'rgba(204,255,0,0.08)', color: '#CCFF00' }}>
                      {project.category}
                    </span>
                  </div>
                  <span className="text-sm font-mono" style={{ color: '#777' }}>Date: {project.date}</span>
                </div>

                {/* Title */}
                <h3
                  className={`font-bold text-white mb-4 leading-tight transition-colors duration-300 group-hover:text-[#CCFF00] ${index === 0 ? 'text-3xl md:text-5xl' : 'text-xl md:text-3xl'
                    }`}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {project.title}
                </h3>

                {/* Summary */}
                <p className={`text-base leading-relaxed mb-6 ${index === 0 ? 'md:text-lg max-w-3xl' : 'line-clamp-2'}`}
                  style={{ color: '#888' }}>
                  {project.summary}
                </p>

                {/* Tags bottom */}
                <div className="flex flex-wrap items-center justify-between gap-2 mt-auto">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-3 py-1.5 rounded-full text-sm"
                        style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#888' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#888' }}>
                    <svg className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ╔══════════════════════════════════════════╗
          ║  7. NUMERIC STATS                        ║
          ╚══════════════════════════════════════════╝ */}
      <section id="stats" className="px-4 md:px-12 max-w-[1400px] mx-auto" style={{ paddingBottom: '8rem' }}>
        <div className="mb-12 reveal">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] block mb-4" style={{ color: '#888' }}>
            Numeric
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            Where I Stand
            <br />
            <span style={{ color: '#777' }}>Right Now.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { ref: stat1.ref, count: stat1.count, suffix: '', label: 'Projects Published', unit: '' },
            { ref: stat2.ref, count: stat2.count, suffix: '+', label: 'Users Surveyed', unit: '' },
            { ref: stat3.ref, count: stat3.count, suffix: '+', label: 'Retail Stores Visited', unit: '' },
            { ref: stat4.ref, count: stat4.count, suffix: '+', label: 'Industry Interactions', unit: '' },
          ].map((stat, i) => (
            <div
              key={i}
              ref={stat.ref}
              className="reveal p-4 md:p-10 border text-center transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.06)', borderRadius: '24px' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(204,255,0,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
            >
              <div className="stat-number text-4xl md:text-6xl font-extrabold mb-3" style={{ color: '#CCFF00', fontFamily: "'Syne', sans-serif" }}>
                {stat.count}{stat.suffix}
              </div>
              <p className="text-base font-medium" style={{ color: '#888' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ╔══════════════════════════════════════════╗
          ║  9. FAQs                                 ║
          ╚══════════════════════════════════════════╝ */}
      <section id="faq" className="px-4 md:px-12 max-w-[1400px] mx-auto" style={{ paddingBottom: '8rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div className="reveal">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] block mb-4" style={{ color: '#888' }}>
              Frequently Asked
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Things I Get<br />
              <span style={{ color: '#CCFF00' }}>Asked Often.</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#aaa' }}>
              If your question isn't here, I'd rather hear it directly.
            </p>
            <a
              href="mailto:01rishiparmar@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm border transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: 'rgba(255,255,255,0.15)', color: '#fff' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#CCFF00'; e.currentTarget.style.color = '#CCFF00'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#fff'; }}
            >
              Ask me directly
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
            </a>
          </div>

          {/* Right - Accordion */}
          <div className="reveal reveal-delay-1">
            <FaqItem
              q="What kind of work do you do?"
              a="I don't just analyze products - I try to understand how they actually win or fail in the real world. Most of my work is around consumer behavior, retail dynamics, and product positioning, especially in consumer tech."
            />
            <FaqItem
              q="Are you open to feedback on your work?"
              a="Yes, but I value honest, critical feedback over validation. I'm more interested in understanding where my thinking breaks than hearing that it's correct."
            />
            <FaqItem
              q="What drives your interest in this domain?"
              a="I'm more interested in the gap between what brands claim and what people actually experience. That gap is where most real insights come from."
            />
            <FaqItem
              q="How do you approach a new project?"
              a="I start by defining the problem clearly - not solving it immediately. Then I look at it from multiple angles: consumer, retailer, brand, and execution. The goal is not just insights, but decisions grounded in reality."
            />
            <FaqItem
              q="Can I see your resume?"
              a="Yes, but I'd prefer you explore my work first. My thinking is better reflected in what I've built than in a document."
            />
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════╗
          ║  10. GET IN TOUCH CTA                    ║
          ╚══════════════════════════════════════════╝ */}
      <section id="contact" className="px-4 md:px-12 max-w-[1400px] mx-auto" style={{ paddingBottom: '8rem' }}>
        <div
          className="p-8 md:p-20 text-center border relative overflow-hidden reveal"
          style={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.06)', borderRadius: '32px' }}
        >
          {/* Glow */}
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: 'rgba(204,255,0,0.06)' }} />

          <span className="text-sm font-semibold uppercase tracking-[0.2em] block mb-6 relative z-10" style={{ color: '#888' }}>
            Contact Me
          </span>
          <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-4 relative z-10" style={{ fontFamily: "'Syne', sans-serif" }}>
            Let's<br />
            <span style={{ color: '#CCFF00' }}>Talk.</span>
          </h2>
          <p className="text-base md:text-lg mb-8 relative z-10" style={{ color: '#777' }}>
            Want to challenge my thinking, share a perspective, or just talk consumer tech? I'm always up for a real conversation.
          </p>
          <a
            href="mailto:01rishiparmar@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 relative z-10"
            style={{ backgroundColor: '#CCFF00', color: '#000' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4ff33')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#CCFF00')}
          >
            <span className="hidden md:inline">Mail me at: 01rishiparmar@gmail.com</span><span className="md:hidden">Get In Touch</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
          </a>
        </div>
      </section>

    </div>
  );
};
