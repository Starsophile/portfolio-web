import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-10 pb-20 w-full">

      {/* Content Wrapper - Increased max-width */}
      <div className="max-w-[1400px] mx-auto">
        {/* Header Block */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-amber-500"></span>
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">The Profile</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">
            Strategy, <br />
            <span className="text-zinc-800">Behavior & Tech.</span>
          </h1>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">

          {/* Left Column: Key Statement (Sticky) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <p className="text-3xl md:text-4xl text-white font-medium leading-tight">
                "I don’t just use tech, I feel the tech."
              </p>
              <div className="w-12 h-1 bg-amber-500"></div>
              <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest leading-relaxed">
                Focusing on how products perform in everyday life, how users perceive them, and why certain decisions work at scale.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Bio */}
          <div className="lg:col-span-7 space-y-10 text-lg md:text-xl text-zinc-400 leading-relaxed">
            <p>
              I’m <span className="text-white font-bold">Rishi</span>, an engineering student with a strong interest in product strategy, user behavior, and execution under real-world constraints.
            </p>

            <p>
              I work on self-driven case studies and research across consumer tech, especially smartphones - covering portfolio structure, pricing trade-offs, software optimization, and market dynamics. My approach blends user experience, business reality, and engineering limitations rather than isolated feature thinking.
            </p>

            <p>
              I’m comfortable analyzing ambiguity, asking the right questions, and breaking down complex problems into executable insights. I’m early in my journey, but highly hands-on and eager to learn in fast-moving startup environments where ownership, clarity, and impact matter.
            </p>

            <div className="bg-zinc-900/50 border border-white/5 p-8 md:p-10 rounded-xl border-l-4 border-l-amber-500/50">
              <p className="font-medium text-white italic">
                This portfolio reflects how I think and work—not just polished outcomes, but honest problem-solving.
              </p>
            </div>

            {/* Skills/Tags */}
            <div className="pt-8">
              <h3 className="text-zinc-600 text-xs font-bold uppercase tracking-widest mb-6">Core Focus</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2.5 bg-zinc-900 border border-white/10 rounded-full text-xs font-bold text-zinc-300 uppercase tracking-wider hover:border-amber-500/50 transition-colors cursor-default">Product Strategy</span>
                <span className="px-5 py-2.5 bg-zinc-900 border border-white/10 rounded-full text-xs font-bold text-zinc-300 uppercase tracking-wider hover:border-amber-500/50 transition-colors cursor-default">Market Dynamics</span>
                <span className="px-5 py-2.5 bg-zinc-900 border border-white/10 rounded-full text-xs font-bold text-zinc-300 uppercase tracking-wider hover:border-amber-500/50 transition-colors cursor-default">Execution</span>
                <span className="px-5 py-2.5 bg-zinc-900 border border-white/10 rounded-full text-xs font-bold text-zinc-300 uppercase tracking-wider hover:border-amber-500/50 transition-colors cursor-default">Systems Thinking</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-10 border-t border-white/5 mt-8">
              <a href="mailto:contact@starsophile.qzz.io" className="inline-flex items-center gap-3 text-white hover:text-amber-500 transition-colors group">
                <span className="font-bold text-2xl">Let's start a conversation</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded CV Section */}
      <div className="mt-12 max-w-[1400px] mx-auto">
        <div className="bg-[#111] border border-white/5 rounded-3xl p-10 md:p-16 flex flex-col xl:flex-row items-center justify-between gap-12 relative overflow-hidden group">

          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-amber-500"></span>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Professional Profile</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Resume / CV</h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
              For those who prefer a structured snapshot. <br className="hidden md:block" />
              A comprehensive overview of my work, skills, and experience designed for recruiters and hiring managers.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full xl:w-auto shrink-0">
            <button
              onClick={() => window.open('/assets/Rishi_CV.pdf', '_blank')}
              className="px-8 py-5 bg-zinc-900 border border-white/10 rounded-xl text-base font-bold text-white hover:bg-zinc-800 hover:border-white/20 transition-all text-center flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              View Resume
            </button>
            <a
              href="/assets/Rishi_CV.pdf"
              download="Rishi_CV.pdf"
              className="px-8 py-5 bg-white text-black border border-white rounded-xl text-base font-bold hover:bg-amber-400 hover:border-amber-400 hover:scale-105 transition-all flex items-center justify-center gap-3 text-center shadow-lg shadow-amber-900/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};