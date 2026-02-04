import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { projects } from '../data/projects';

const { Link } = ReactRouterDOM;

const SpecialtyCard = ({ icon, title, delay }: { icon: React.ReactNode, title: string, delay: string }) => (
   <div className={`bg-[#111] border border-white/5 p-8 rounded-2xl flex flex-col justify-between h-48 group hover:bg-[#161616] hover:border-amber-500/30 transition-all duration-500 ${delay}`}>
      <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors">
         {icon}
      </div>
      <div className="flex justify-between items-end">
         <h3 className="text-lg font-bold text-white max-w-[8ch] leading-tight">{title}</h3>
         <svg className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
      </div>
   </div>
);

export const Landing: React.FC = () => {
   return (
      <div className="animate-fade-in w-full max-w-[1600px] mx-auto">
         {/* Background Texture - Large Outlined Text */}
         <div className="fixed top-20 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden flex items-center justify-center opacity-[0.03]">
            <span className="text-[20vw] font-black uppercase tracking-tighter text-white stroke-text select-none">
               Rishi
            </span>
         </div>

         {/* Hero Section */}
         <section className="relative min-h-[85vh] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32 pt-10 pb-20">

            {/* Text Content - Widened for better PC/Laptop view */}
            <div className="z-10 max-w-4xl flex-1 flex flex-col justify-center">
               <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-amber-400"></div>
                  <span className="text-amber-400 font-bold uppercase tracking-widest text-sm">Hello,</span>
                  <span className="text-2xl animate-wave origin-bottom-right inline-block">👋</span>
               </div>

               <h1 className="text-7xl md:text-[6rem] lg:text-[7.5rem] leading-[0.9] font-bold text-white mb-8 tracking-tight">
                  I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Rishi</span>
               </h1>

               <p className="text-xl md:text-3xl text-zinc-300 max-w-2xl leading-relaxed font-normal">
                  Product Research & Strategist. <br className="hidden md:block" />
                  <span className="text-zinc-400 text-lg md:text-xl mt-4 block leading-relaxed">
                     I explore how products fail, scale, and earn user trust through real-world constraints.
                  </span>
               </p>
            </div>

            {/* Hero Visual */}
            <div className="relative w-full max-w-xl lg:max-w-2xl h-[500px] lg:h-[700px] flex items-center justify-center flex-1">
               {/* The "Blob" Background */}
               <div className="absolute inset-0 bg-[#ffaa00] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-[100px] opacity-20 animate-pulse"></div>
               <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-orange-600 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-90 transition-all duration-1000 hover:rotate-12"></div>

               {/* Abstract visual mask */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] h-[95%] bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-multiply opacity-60 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl"></div>
            </div>
         </section>

         {/* Specialties Section */}
         <section className="py-24 relative">
            {/* Section Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-900/20 -z-10 rounded-l-[4rem]"></div>

            <div className="flex flex-col lg:flex-row gap-16 items-start">
               <div className="lg:w-1/3 pt-8">
                  <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Focus Areas</h4>
                  <h2 className="text-5xl font-bold text-white mb-6">Core <br /><span className="relative z-10">Competencies <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-500/20 -z-10 skew-x-12"></span></span></h2>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                     My work sits at the intersection of business goals, technical reality, and human behavior. I don't just optimize for metrics; I optimize for value.
                  </p>
               </div>

               <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SpecialtyCard
                     title="Market Analysis"
                     icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>}
                     delay="delay-0"
                  />
                  <SpecialtyCard
                     title="Product Strategy"
                     icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a16.001 16.001 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>}
                     delay="delay-100"
                  />
                  <SpecialtyCard
                     title="Consumer Research"
                     icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>}
                     delay="delay-200"
                  />
                  <SpecialtyCard
                     title="Growth Modeling"
                     icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>}
                     delay="delay-300"
                  />
               </div>
            </div>
         </section>

         {/* Recent Work */}
         <section className="py-24">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
               <div>
                  <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2">Portfolio</h4>
                  <h2 className="text-5xl md:text-6xl font-bold text-white">Selected <span className="text-zinc-600">Work</span></h2>
               </div>
               <Link to="/projects" className="hidden md:flex items-center gap-2 text-white border-b border-white pb-1 hover:text-amber-500 hover:border-amber-500 transition-colors">
                  View Full Archive
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {projects.slice(0, 4).map((project, index) => (
                  <Link
                     key={project.id}
                     to={`/projects/${project.id}`}
                     className={`group block bg-[#111] border border-white/5 rounded-[2rem] p-10 hover:border-amber-500/50 hover:bg-[#141414] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full ${index === 0 ? 'md:col-span-2' : 'min-h-[300px]'}`}
                  >
                     <div className="w-full">
                        <div className="flex justify-between items-start mb-6">
                           <span className="bg-zinc-900 border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase text-zinc-400 group-hover:text-white transition-colors">
                              {project.category}
                           </span>
                           {index !== 0 && <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{project.date}</span>}
                        </div>

                        <h3 className={`${index === 0 ? 'text-4xl md:text-5xl max-w-4xl' : 'text-3xl'} font-bold text-white mb-4 group-hover:text-amber-500 transition-colors leading-tight`}>
                           {project.title}
                        </h3>

                        <p className={`text-zinc-500 text-sm leading-relaxed mb-8 ${index === 0 ? 'max-w-2xl text-lg' : 'line-clamp-3'}`}>
                           {project.summary}
                        </p>
                     </div>

                     {index !== 0 && (
                        <div className="flex items-center justify-between mt-auto">
                           <span className="text-xs font-mono text-zinc-600">{project.date}</span>
                           <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                           </div>
                        </div>
                     )}

                     {index === 0 && (
                        <div className="flex items-center gap-2 text-white font-bold group-hover:text-amber-500 transition-colors mt-4">
                           <span className="uppercase tracking-wider text-sm">View Case Study</span>
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </div>
                     )}
                  </Link>
               ))}
            </div>

            <div className="flex justify-center mt-12 md:hidden">
               <Link to="/projects" className="border border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-colors">
                  View All Projects
               </Link>
            </div>
         </section>
      </div>
   );
};