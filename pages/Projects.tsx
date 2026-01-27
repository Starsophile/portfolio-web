import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { projects } from '../data/projects';

const { Link } = ReactRouterDOM;

export const Projects: React.FC = () => {
  return (
    <div className="animate-fade-in w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">Work <span className="text-amber-500">Index</span></h1>
        <p className="text-zinc-400 text-lg max-w-2xl">
           A collection of systems, strategies, and interfaces designed to solve complex problems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            to={`/projects/${project.id}`}
            className="group block bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
          >
            <div className="p-10 md:p-12 flex flex-col h-full">
               <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">{project.category}</span>
                   </div>
                   <span className="text-zinc-400 text-xs font-mono border border-white/10 px-3 py-1 rounded-full">{project.date}</span>
               </div>
               
               <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-[0.95] group-hover:text-amber-500 transition-colors">
                 {project.title}
               </h2>
               
               <p className="text-zinc-400 text-lg leading-relaxed mb-8 flex-1">
                 {project.summary}
               </p>

               <div className="flex flex-wrap gap-2 mb-10">
                 {project.tags.slice(0, 3).map(tag => (
                   <span key={tag} className="px-3 py-1 bg-zinc-900 border border-white/5 rounded-md text-zinc-500 text-xs font-bold uppercase tracking-wider">
                     {tag}
                   </span>
                 ))}
                 {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-zinc-900 border border-white/5 rounded-md text-zinc-500 text-xs font-bold uppercase tracking-wider">+{project.tags.length - 3}</span>
                 )}
               </div>
               
               <div className="flex items-center gap-3 text-white font-bold transition-all border-t border-white/5 pt-6">
                  <span className="text-sm uppercase tracking-wider">Read Case Study</span>
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                      <svg className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                  </div>
               </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};