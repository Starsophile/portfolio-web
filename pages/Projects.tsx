import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { projects } from '../data/projects';

const { Link } = ReactRouterDOM;

export const Projects: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto pt-32" style={{ paddingBottom: '8rem' }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] block mb-4 anim-d1" style={{ color: '#888' }}>
            My Work
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-6 anim-d2"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Full <span style={{ color: '#CCFF00' }}>Archive</span>
          </h1>
          <p className="text-base max-w-lg anim-d3" style={{ color: '#555' }}>
            Case studies, strategies, and product thinking across consumer tech.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group block border overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.06)', borderRadius: '24px' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(204,255,0,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
            >
              <div className="p-8 md:p-10 flex flex-col h-full min-h-[300px]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#CCFF00' }} />
                    <span className="font-semibold uppercase tracking-[0.15em] text-xs" style={{ color: '#CCFF00' }}>
                      {project.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full border"
                    style={{ color: '#555', borderColor: 'rgba(255,255,255,0.06)' }}>
                    {project.date}
                  </span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight transition-colors duration-300 group-hover:text-[#CCFF00]"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  {project.title}
                </h2>

                <p className="text-sm leading-relaxed mb-8 flex-1" style={{ color: '#888' }}>
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs"
                      style={{ border: '1px solid rgba(255,255,255,0.06)', color: '#555' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 font-semibold border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                  <span className="text-sm uppercase tracking-wider text-white">Read Case Study</span>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: '#CCFF00', color: '#000' }}>
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
    </div>
  );
};