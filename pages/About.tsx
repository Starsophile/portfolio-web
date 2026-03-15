import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="animate-fade-in">

      {/* HEADER */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto pt-32 pb-12">
        <div className="flex items-center gap-3 mb-8 anim-d1">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#CCFF00' }} />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#888' }}>
            About
          </span>
        </div>
        <h1
          className="font-extrabold text-white mb-8 leading-[0.9] tracking-tight anim-d2"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.5rem, 7vw, 6.5rem)' }}
        >
          Strategy,<br />
          Behaviour &<br />
          <span style={{ color: '#CCFF00' }}>Tech.</span>
        </h1>
      </section>

      {/* MAIN CONTENT */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto" style={{ paddingBottom: '8rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">

          {/* Left sticky */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 p-10 border" style={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.06)', borderRadius: '24px' }}>
              <p className="text-2xl md:text-3xl text-white font-medium leading-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                "I don't just use tech, I feel the tech."
              </p>
              <div className="w-12 h-[3px] rounded-full mb-6" style={{ backgroundColor: '#CCFF00' }} />
              <p className="text-sm leading-relaxed" style={{ color: '#888' }}>
                Focusing on how products perform in everyday life, how users perceive them, and why certain decisions work at scale.
              </p>
            </div>
          </div>

          {/* Right bio */}
          <div className="lg:col-span-7 space-y-8 text-base leading-relaxed" style={{ color: '#888' }}>
            <p>
              I'm <span className="text-white font-bold">Rishi</span>, an engineering student with a strong interest in product strategy, user behavior, and execution under real-world constraints.
            </p>
            <p>
              I work on self-driven case studies and research across consumer tech, especially smartphones — covering portfolio structure, pricing trade-offs, software optimization, and market dynamics. My approach blends user experience, business reality, and engineering limitations rather than isolated feature thinking.
            </p>
            <p>
              I'm comfortable analyzing ambiguity, asking the right questions, and breaking down complex problems into executable insights. I'm early in my journey, but highly hands-on and eager to learn in fast-moving startup environments where ownership, clarity, and impact matter.
            </p>

            <div className="p-8 md:p-10 border-l-[3px]"
              style={{ backgroundColor: '#111', borderColor: '#CCFF00', borderRadius: '0 16px 16px 0' }}>
              <p className="font-medium text-white italic text-base">
                This portfolio reflects how I think and work — not just polished outcomes, but honest problem-solving.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6" style={{ color: '#555' }}>Core Focus</h3>
              <div className="flex flex-wrap gap-3">
                {['Product Strategy', 'Market Dynamics', 'Execution', 'Systems Thinking'].map(skill => (
                  <span key={skill}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-200 cursor-default"
                    style={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.06)', color: '#888' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#CCFF00'; e.currentTarget.style.color = '#CCFF00'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#888'; }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <a href="mailto:01rishiparmar@gmail.com"
                className="inline-flex items-center gap-3 group transition-colors duration-300"
                style={{ color: '#fff' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#CCFF00')}
                onMouseLeave={e => (e.currentTarget.style.color = '#fff')}>
                <span className="font-bold text-xl md:text-2xl" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Let's start a conversation
                </span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* RESUME */}
        <div className="p-10 md:p-16 flex flex-col xl:flex-row items-center justify-between gap-12 relative overflow-hidden border"
          style={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.06)', borderRadius: '32px' }}>
          <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: 'rgba(204,255,0,0.04)' }} />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] block mb-4" style={{ color: '#CCFF00' }}>Professional Profile</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Resume / CV</h2>
            <p className="text-sm" style={{ color: '#888' }}>A comprehensive overview of my work, skills, and experience.</p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full xl:w-auto shrink-0">
            <button onClick={() => window.open('/assets/Rishi_CV.pdf', '_blank')}
              className="px-8 py-4 rounded-full text-sm font-semibold text-white border flex items-center justify-center gap-3 transition-all duration-300"
              style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.1)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(204,255,0,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              View Resume
            </button>
            <a href="/assets/Rishi_CV.pdf" download="Rishi_CV.pdf"
              className="px-8 py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-3 transition-all duration-300"
              style={{ backgroundColor: '#CCFF00', color: '#000' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4ff33')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#CCFF00')}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};