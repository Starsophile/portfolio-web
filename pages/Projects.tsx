import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { projects } from '../data/projects';

const { Link } = ReactRouterDOM;

export const Projects: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-6xl font-bold text-white mb-4">Work <span className="text-amber-500">Index</span></h1>
        <p className="text-zinc-400 max-w-xl">
           A collection of systems, strategies, and interfaces designed to solve complex problems.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            to={`/projects/${project.id}`}
            className="group block bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-amber-500/50 transition-all duration-300"
          >
            <div className="p-10 md:p-12 flex flex-col justify-center">
               <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">{project.category}</span>
                  <span className="text-zinc-600">|</span>
                  <span className="text-zinc-400 text-xs font-mono">{project.date}</span>
               </div>
               
               <h2 className="text-4xl font-bold text-white mb-6 leading-tight group-hover:text-amber-500 transition-colors">
                 {project.title}
               </h2>
               
               <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl">
                 {project.summary}
               </p>

               <div className="flex flex-wrap gap-2 mb-8">
                 {project.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 border border-zinc-800 rounded-full text-zinc-500 text-xs font-bold uppercase">
                     {tag}
                   </span>
                 ))}
               </div>
               
               <div className="flex items-center gap-2 text-white font-bold transition-all">
                  Read Case Study
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
               </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};