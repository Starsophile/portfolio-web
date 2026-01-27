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
    <div className="animate-fade-in max-w-[1400px] mx-auto w-full">
      {/* Header Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 text-amber-500 font-bold text-xs uppercase tracking-widest mb-4">
           <span>{project.category}</span>
           <span className="text-zinc-600">•</span>
           <span>{project.date}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 max-w-4xl leading-[0.95] tracking-tight">
          {project.title}
        </h1>
        <h2 className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-12">
          {project.subtitle}
        </h2>
      </div>

      {/* Hero Visual - Dynamic per project */}
      {project.heroVisual && (
         <div className="w-full h-[300px] md:h-[500px] bg-[#111] rounded-[2rem] relative overflow-hidden mb-24 shadow-2xl flex flex-col items-center justify-center border border-white/5 group">
            <div className={`absolute inset-0 bg-gradient-to-tr ${project.heroVisual.gradientFrom} ${project.heroVisual.gradientTo} opacity-80 group-hover:scale-105 transition-transform duration-1000`}></div>
            <h2 className="text-5xl md:text-8xl font-black text-white z-10 text-center tracking-tighter uppercase drop-shadow-xl">
              {project.heroVisual.displayText}
            </h2>
            <p className="text-amber-500 font-mono text-sm md:text-base uppercase tracking-[0.3em] mt-4 z-10 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5">{project.heroVisual.subText}</p>
         </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-24">
        {/* Main Content */}
        <div className="xl:col-span-8 space-y-20">
           
           {/* Overview */}
           <section>
             <h3 className="text-3xl font-bold text-white mb-6">Objective</h3>
             <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
               {project.summary}
             </p>
           </section>

           {/* Interactive Dashboard Injection */}
           {project.dashboardId && (
              <div className="my-12">
                 <h3 className="text-xl font-bold text-white mb-6">Live System Prototype</h3>
                 <div className="bg-[#111] border border-white/10 rounded-2xl p-2 md:p-4">
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
                   <p className="text-zinc-400 leading-relaxed text-lg md:text-xl">{section.content}</p>
                )}

                {/* Grid of Cards */}
                {section.type === 'grid' && (
                  <div className="space-y-6">
                    {section.content && <p className="text-zinc-400 mb-6 text-lg">{section.content}</p>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.items?.map((item, i) => (
                        <div key={i} className="bg-[#161618] border border-white/5 p-8 rounded-2xl hover:border-amber-500/30 transition-colors">
                          <h4 className="text-white font-bold mb-3 text-lg">{item.heading}</h4>
                          <p className="text-zinc-400 text-base leading-relaxed whitespace-pre-line">{item.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Row Split */}
                {section.type === 'row' && (
                  <div className="space-y-6">
                    {section.content && <p className="text-zinc-400 mb-6 text-lg">{section.content}</p>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {section.items?.map((item, i) => (
                         <div key={i} className={`p-8 rounded-2xl border ${i === 0 ? 'bg-amber-500/5 border-amber-500/20' : 'bg-zinc-900 border-white/5'}`}>
                            <h4 className={`font-bold mb-4 uppercase tracking-wider text-xs ${i === 0 ? 'text-amber-500' : 'text-zinc-500'}`}>{item.heading}</h4>
                            <p className="text-zinc-300 text-base leading-relaxed whitespace-pre-line font-medium">{item.body}</p>
                         </div>
                       ))}
                    </div>
                  </div>
                )}

                {/* Lists */}
                {section.type === 'list' && (
                   <ul className="space-y-4 mt-4 bg-[#111] p-10 rounded-2xl border border-white/5">
                      {section.content && section.content.split('\n').map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-zinc-300 text-lg leading-relaxed">
                           <span className="mt-2.5 w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0"></span>
                           {item.replace(/^- /, '')}
                        </li>
                      ))}
                   </ul>
                )}

                {/* Highlights */}
                {section.type === 'highlight' && (
                   <div className="bg-gradient-to-r from-zinc-900 to-black border border-white/10 p-10 my-8 rounded-2xl text-center shadow-lg">
                      <p className="text-2xl text-white font-bold leading-relaxed italic">"{section.content}"</p>
                   </div>
                )}
             </section>
           ))}

           {/* AI Helper */}
           <ProjectAI project={project} />
        </div>

        {/* Sidebar */}
        <div className="xl:col-span-4 space-y-12">
           <div className="sticky top-32">
              <div className="bg-[#111] border border-white/10 p-8 rounded-2xl shadow-xl">
                 <h4 className="text-lg font-bold text-white mb-8 border-b border-white/5 pb-4">PM Takeaways</h4>
                 <ul className="space-y-8">
                    {project.keyLearnings.map((learning, i) => (
                       <li key={i} className="text-zinc-400 text-sm leading-relaxed">
                          <span className="block text-amber-500 font-bold text-xs uppercase mb-2">Key Point 0{i+1}</span>
                          {learning}
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="mt-8 flex justify-center">
                 <p className="text-zinc-700 text-[10px] uppercase tracking-[0.2em] font-bold">Student Case Study</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};