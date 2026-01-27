import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { projects } from '../data/projects';
import { DashboardContainer } from '../components/DashboardContainer';
import { ProjectAI } from '../components/ProjectAI';

const { useParams, Link, Navigate } = ReactRouterDOM;

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="animate-fade-in max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-amber-500 font-bold text-xs uppercase tracking-widest mb-4">
           <span>{project.category}</span>
           <span className="text-zinc-600">•</span>
           <span>{project.date}</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 max-w-3xl leading-tight">
          {project.title}
        </h1>
        <h2 className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
          {project.subtitle}
        </h2>
      </div>

      {/* Hero Visual */}
      <div className="w-full h-[300px] md:h-[400px] bg-[#111] rounded-[2rem] relative overflow-hidden mb-24 shadow-2xl flex flex-col items-center justify-center border border-white/5">
         <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-zinc-900/20"></div>
         <h2 className="text-4xl md:text-6xl font-black text-white z-10 text-center tracking-tighter">
           SAMSUNG
         </h2>
         <p className="text-amber-500 font-mono text-sm uppercase tracking-[0.3em] mt-4 z-10">Portfolio Restructuring</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-20">
           
           {/* Overview */}
           <section>
             <h3 className="text-3xl font-bold text-white mb-6">Objective</h3>
             <p className="text-zinc-400 text-lg leading-relaxed">
               {project.summary}
             </p>
           </section>

           {/* Interactive Dashboard Injection */}
           {project.dashboardId && (
              <div className="my-12">
                 <h3 className="text-xl font-bold text-white mb-6">Live System Prototype</h3>
                 <div className="bg-[#111] border border-white/10 rounded-2xl p-2">
                    <DashboardContainer dashboardId={project.dashboardId} />
                 </div>
              </div>
           )}

           {/* Detailed Sections */}
           {project.sections.map((section, idx) => (
             <section key={idx} className="border-t border-white/5 pt-12">
                <div className="flex items-baseline justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                </div>
                
                {/* Regular Text */}
                {section.type === 'text' && (
                   <p className="text-zinc-400 leading-relaxed text-lg">{section.content}</p>
                )}

                {/* Grid of Cards */}
                {section.type === 'grid' && (
                  <div className="space-y-6">
                    {section.content && <p className="text-zinc-400 mb-6">{section.content}</p>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items?.map((item, i) => (
                        <div key={i} className="bg-[#161618] border border-white/5 p-6 rounded-xl hover:border-amber-500/30 transition-colors">
                          <h4 className="text-white font-bold mb-2">{item.heading}</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed whitespace-pre-line">{item.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Row Split */}
                {section.type === 'row' && (
                  <div className="space-y-6">
                    {section.content && <p className="text-zinc-400 mb-6">{section.content}</p>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {section.items?.map((item, i) => (
                         <div key={i} className={`p-6 rounded-xl border ${i === 0 ? 'bg-amber-500/5 border-amber-500/20' : 'bg-zinc-900 border-white/5'}`}>
                            <h4 className={`font-bold mb-4 uppercase tracking-wider text-xs ${i === 0 ? 'text-amber-500' : 'text-zinc-500'}`}>{item.heading}</h4>
                            <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line font-medium">{item.body}</p>
                         </div>
                       ))}
                    </div>
                  </div>
                )}

                {/* Lists */}
                {section.type === 'list' && (
                   <ul className="space-y-4 mt-4 bg-[#111] p-8 rounded-2xl border border-white/5">
                      {section.content && section.content.split('\n').map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-300 leading-relaxed">
                           <span className="mt-2 w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0"></span>
                           {item.replace(/^- /, '')}
                        </li>
                      ))}
                   </ul>
                )}

                {/* Highlights */}
                {section.type === 'highlight' && (
                   <div className="bg-gradient-to-r from-zinc-900 to-black border border-white/10 p-8 my-8 rounded-xl text-center">
                      <p className="text-xl text-white font-bold leading-relaxed">"{section.content}"</p>
                   </div>
                )}
             </section>
           ))}

           {/* AI Helper */}
           <ProjectAI project={project} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-12">
           <div className="sticky top-32">
              <div className="bg-[#111] border border-white/10 p-6 rounded-2xl">
                 <h4 className="text-lg font-bold text-white mb-6">PM Takeaways</h4>
                 <ul className="space-y-6">
                    {project.keyLearnings.map((learning, i) => (
                       <li key={i} className="text-zinc-400 text-sm">
                          <span className="block text-amber-500 font-bold text-xs uppercase mb-1">Point 0{i+1}</span>
                          {learning}
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="mt-8">
                 <p className="text-zinc-600 text-xs uppercase tracking-widest text-center">Student Project</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};