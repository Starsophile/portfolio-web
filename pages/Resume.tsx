import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link } = ReactRouterDOM;

export const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-amber-200">
      {/* Navigation / Actions Bar (Hidden when printing) */}
      <div className="print:hidden fixed top-0 w-full bg-zinc-900 border-b border-white/10 px-4 py-3 sm:py-4 z-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <Link to="/about" className="text-zinc-400 hover:text-white text-sm font-bold flex items-center gap-2 shrink-0">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Portfolio
        </Link>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="/assets/cv.pdf"
            download="Rishi_CV.pdf"
            className="text-zinc-400 hover:text-white text-sm font-bold flex items-center gap-2"
          >
            Download Original PDF
          </a>
          <button
            onClick={handlePrint}
            className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2 rounded-full font-bold text-sm transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
            Print Web Version
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-[21cm] mx-auto bg-white pt-32 pb-20 px-12 md:px-16 print:p-0 print:max-w-none">

        {/* Header */}
        <header className="border-b-2 border-black pb-8 mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">Rishi</h1>
            <p className="text-xl font-medium text-zinc-600">Product & Consumer Tech Analyst - CSE Undergraduate</p>
          </div>
          <div className="text-right text-sm font-medium leading-relaxed">
            <p>Vadodara, India</p>
            <p>01rishiparmar@gmail.com</p>
          </div>
        </header>

        {/* Profile */}
        <section className="mb-12">
          <h2 className="text-xs font-black uppercase tracking-widest border-b border-zinc-200 pb-2 mb-4">Profile</h2>
          <p className="text-zinc-800 leading-relaxed max-w-4xl text-justify">
            Computer Science Engineering undergraduate with a strong interest in understanding how technology products succeed at scale. Focused on product strategy, consumer behavior, and smartphone ecosystems. Experienced in breaking down real-world product decisions across UX, software optimization, hardware constraints, and brand perception through independent research, surveys, and case studies. Actively building product thinking through self-driven projects rather than formal roles.
          </p>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-xs font-black uppercase tracking-widest border-b border-zinc-200 pb-2 mb-4">Education</h2>
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="font-bold text-lg">Bachelor of Technology - Computer Science Engineering</h3>
              <p className="text-sm text-zinc-600">ITM Vocational University</p>
            </div>
            <span className="text-sm font-medium text-zinc-500">2025 - 2029 (Expected)</span>
          </div>
        </section>

        {/* Product & Research Projects */}
        <section className="mb-12">
          <h2 className="text-xs font-black uppercase tracking-widest border-b border-zinc-200 pb-2 mb-6">Product & Research Projects</h2>

          <div className="mb-8">
            <h3 className="font-bold text-lg mb-2">Samsung Smartphone Experience Revamp (Independent Project)</h3>
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-zinc-800 leading-relaxed">
              <li>Analyzed mid-range Samsung smartphones to understand why consumer trust remains high despite performance complaints.</li>
              <li>Identified key constraints across hardware limitations, One UI optimization, beta testing bias, and brand reliability promises.</li>
              <li>Proposed short-term, high-feasibility fixes focused on OS tuning and inclusive beta testing rather than hardware changes.</li>
              <li>Conducted ground-level user discussions to validate perception-driven decision making over specification-based evaluation.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-lg mb-2">Global Hardware Shortage & Consumer Trade-off Study</h3>
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-zinc-800 leading-relaxed">
              <li>Studied global RAM and storage supply constraints caused by rising AI infrastructure demand.</li>
              <li>Compared UFS 2.x vs UFS 3.x trade-offs from performance, cost, and consumer experience perspectives.</li>
              <li>Found that most Indian consumers prioritize overall experience and brand trust over internal hardware specifications.</li>
              <li>Proposed pragmatic strategies balancing cost control, stability, and long-term brand perception.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Smartphone Portfolio & Brand Strategy Case Studies</h3>
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-zinc-800 leading-relaxed">
              <li>Analyzed portfolio strategies of Samsung, Vivo, iQOO, and Nothing to understand segmentation logic.</li>
              <li>Studied how brands balance innovation, margins, distribution, and consumer psychology.</li>
              <li>Focused on how expectations and perception influence product success more than raw specifications.</li>
            </ul>
          </div>
        </section>

        {/* Skills & Interests */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest border-b border-zinc-200 pb-2 mb-4">Skills</h2>
            <ul className="space-y-1.5 text-sm text-zinc-800 list-disc list-inside">
              <li>Product Analysis & Case Studies</li>
              <li>Consumer Behavior Research</li>
              <li>Smartphone & Consumer Tech Ecosystems</li>
              <li>UX & Experience Evaluation</li>
              <li>Strategic Writing & Communication</li>
              <li>Public Speaking & Event Anchoring</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest border-b border-zinc-200 pb-2 mb-4">Interests</h2>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-zinc-800">Product Strategy •</span>
              <span className="text-sm text-zinc-800">Consumer Technology •</span>
              <span className="text-sm text-zinc-800">AI & Product Systems •</span>
              <span className="text-sm text-zinc-800">Cricket •</span>
              <span className="text-sm text-zinc-800">Public Speaking</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
