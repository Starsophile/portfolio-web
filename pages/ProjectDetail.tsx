import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { projects } from '../data/projects';
import { DashboardContainer } from '../components/DashboardContainer';
import { ProjectAI } from '../components/ProjectAI';

const { useParams, Link, Navigate } = ReactRouterDOM;

export const ProjectDetail: React.FC = () => {
   const { id } = useParams<{ id: string }>();
   const project = projects.find(p => p.id === id);

   if (!project) return <Navigate to="/projects" replace />;

   return (
      <div className="animate-fade-in">
         <div className="px-6 md:px-12 max-w-[1400px] mx-auto pt-32" style={{ paddingBottom: '8rem' }}>

            {/* HEADER */}
            <div className="mb-16">
               <div className="flex items-center gap-3 mb-5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#CCFF00' }} />
                  <span className="font-semibold text-xs uppercase tracking-[0.2em]" style={{ color: '#CCFF00' }}>
                     {project.category}
                  </span>
                  <span style={{ color: '#333' }}>·</span>
                  <span className="text-xs font-mono" style={{ color: '#555' }}>{project.date}</span>
               </div>
               <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 max-w-4xl leading-[0.92] tracking-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  {project.title}
               </h1>
               <p className="text-lg md:text-xl max-w-3xl leading-relaxed" style={{ color: '#888' }}>
                  {project.subtitle}
               </p>
            </div>

            {/* HERO VISUAL */}
            {project.heroVisual && (
               <div className="w-full h-[280px] md:h-[450px] relative overflow-hidden mb-20 flex flex-col items-center justify-center border group"
                  style={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.06)', borderRadius: '24px' }}>
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-1000"
                     style={{ background: 'radial-gradient(circle at center, rgba(204,255,0,0.07) 0%, transparent 65%)' }} />
                  <h2 className="text-5xl md:text-8xl font-extrabold text-white z-10 text-center tracking-tighter uppercase"
                     style={{ fontFamily: "'Syne', sans-serif" }}>
                     {project.heroVisual.displayText}
                  </h2>
                  <p className="text-xs md:text-sm uppercase tracking-[0.3em] mt-4 z-10 px-5 py-2 rounded-full border font-mono"
                     style={{ color: '#CCFF00', backgroundColor: 'rgba(0,0,0,0.6)', borderColor: 'rgba(204,255,0,0.15)' }}>
                     {project.heroVisual.subText}
                  </p>
               </div>
            )}

            {/* CONTENT */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-20">
               <div className="xl:col-span-8 space-y-16">

                  <section>
                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>Objective</h3>
                     <p className="text-base md:text-lg leading-relaxed" style={{ color: '#888' }}>{project.summary}</p>
                  </section>

                  {project.dashboardId && (
                     <div className="my-12">
                        <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>Live System Prototype</h3>
                        <div className="border p-2 md:p-4" style={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.05)', borderRadius: '24px' }}>
                           <DashboardContainer dashboardId={project.dashboardId} />
                        </div>
                     </div>
                  )}

                  {project.sections.map((section, idx) => (
                     <section key={idx} className="border-t pt-10" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Syne', sans-serif" }}>
                           {section.title}
                        </h3>

                        {section.type === 'text' && (
                           <p className="leading-relaxed text-base" style={{ color: '#888' }}>{section.content}</p>
                        )}

                        {section.type === 'grid' && (
                           <div className="space-y-6">
                              {section.content && <p className="mb-6 text-base" style={{ color: '#888' }}>{section.content}</p>}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                 {section.items?.map((item, i) => (
                                    <div key={i} className="p-7 border transition-colors duration-300"
                                       style={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}
                                       onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(204,255,0,0.2)')}
                                       onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)')}>
                                       <h4 className="text-white font-bold mb-3 text-base">{item.heading}</h4>
                                       <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#888' }}>{item.body}</p>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        )}

                        {section.type === 'row' && (
                           <div className="space-y-6">
                              {section.content && <p className="mb-6 text-base" style={{ color: '#888' }}>{section.content}</p>}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                 {section.items?.map((item, i) => (
                                    <div key={i} className="p-7 border"
                                       style={{
                                          backgroundColor: i === 0 ? 'rgba(204,255,0,0.03)' : '#111',
                                          borderColor: i === 0 ? 'rgba(204,255,0,0.12)' : 'rgba(255,255,255,0.05)',
                                          borderRadius: '16px',
                                       }}>
                                       <h4 className="font-bold mb-3 uppercase tracking-[0.1em] text-xs"
                                          style={{ color: i === 0 ? '#CCFF00' : '#888' }}>{item.heading}</h4>
                                       <p className="text-sm leading-relaxed whitespace-pre-line font-medium" style={{ color: '#ccc' }}>{item.body}</p>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        )}

                        {section.type === 'list' && (
                           <ul className="space-y-4 mt-4 p-8 md:p-10 border"
                              style={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                              {section.content?.split('\n').map((item, i) => (
                                 <li key={i} className="flex items-start gap-4 text-sm md:text-base leading-relaxed" style={{ color: '#ccc' }}>
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#CCFF00' }} />
                                    {item.replace(/^- /, '')}
                                 </li>
                              ))}
                           </ul>
                        )}

                        {section.type === 'highlight' && (
                           <div className="p-8 md:p-10 my-4 text-center border"
                              style={{ background: 'linear-gradient(135deg, #111 0%, #000 100%)', borderColor: 'rgba(204,255,0,0.08)', borderRadius: '24px' }}>
                              <p className="text-xl md:text-2xl text-white font-bold leading-relaxed italic" style={{ fontFamily: "'Syne', sans-serif" }}>
                                 "{section.content}"
                              </p>
                           </div>
                        )}
                     </section>
                  ))}

                  <ProjectAI project={project} />
               </div>

               {/* SIDEBAR */}
               <div className="xl:col-span-4 space-y-12">
                  <div className="sticky top-32">
                     <div className="p-8 border" style={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.05)', borderRadius: '24px' }}>
                        <h4 className="text-base font-bold text-white mb-8 border-b pb-4"
                           style={{ fontFamily: "'Syne', sans-serif", borderColor: 'rgba(255,255,255,0.04)' }}>
                           PM Takeaways
                        </h4>
                        <ul className="space-y-7">
                           {project.keyLearnings.map((learning, i) => (
                              <li key={i} className="text-sm leading-relaxed" style={{ color: '#888' }}>
                                 <span className="block font-bold text-xs uppercase mb-2 tracking-wider" style={{ color: '#CCFF00' }}>
                                    Key Point 0{i + 1}
                                 </span>
                                 {learning}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};