import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Project } from '../types';

interface ProjectAIProps {
  project: Project;
}

export const ProjectAI: React.FC<ProjectAIProps> = ({ project }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAsk = async () => {
    if (!question.trim()) return;
    
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      setError('ERR_MISSING_API_KEY');
      return;
    }

    setLoading(true);
    setError('');
    setAnswer('');

    try {
      const ai = new GoogleGenAI({ apiKey });
      const context = `
        You are an AI assistant for a portfolio website. 
        Answer the user's question based ONLY on the following project details.
        
        Project Title: ${project.title}
        Category: ${project.category}
        Summary: ${project.summary}
        Key Learnings: ${project.keyLearnings.join(', ')}
        Content Sections:
        ${project.sections.map(s => `${s.title}: ${s.content}`).join('\n\n')}
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: context }] },
          { role: 'user', parts: [{ text: `User Question: ${question}` }] }
        ],
        config: {
            systemInstruction: "Keep answers technical, concise, and professional. Adopt a helpful analyst tone."
        }
      });

      setAnswer(response.text || 'No response generated.');
    } catch (err: any) {
      console.error(err);
      setError('Connection refused. Please check your API configuration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-24 border-t border-white/5 pt-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Decorative background glow */}
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-[#09090b] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="bg-white/5 border-b border-white/5 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-900/20">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-white tracking-wide">Project Intelligence</h3>
                            <p className="text-[10px] text-zinc-500 font-mono uppercase">Gemini 1.5 Flash • Context Aware</p>
                        </div>
                    </div>
                </div>

                {/* Response / State Area */}
                <div className="p-8 min-h-[160px] flex flex-col justify-center transition-all bg-[#0c0c0e]">
                    {!loading && !answer && !error && (
                        <div className="text-center space-y-2">
                             <p className="text-zinc-500 text-sm">Ask me about the strategy, methodology, or key learnings of this project.</p>
                             <p className="text-zinc-700 text-xs font-mono">Example: "What was the core problem?"</p>
                        </div>
                    )}

                    {loading && (
                        <div className="space-y-3 animate-pulse max-w-lg mx-auto w-full">
                            <div className="h-2 bg-zinc-800 rounded w-3/4"></div>
                            <div className="h-2 bg-zinc-800 rounded w-full"></div>
                            <div className="h-2 bg-zinc-800 rounded w-5/6"></div>
                        </div>
                    )}

                    {error && (
                        <div className="p-4 bg-red-900/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
                            {error}
                        </div>
                    )}

                    {answer && (
                        <div className="prose prose-invert prose-sm max-w-none">
                            <p className="text-zinc-300 leading-relaxed whitespace-pre-line">{answer}</p>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-black/40 border-t border-white/5 backdrop-blur-sm">
                    <div className="relative flex items-center gap-2 bg-[#18181b] border border-white/10 rounded-xl px-2 py-2 focus-within:border-amber-500/50 focus-within:ring-1 focus-within:ring-amber-500/50 transition-all">
                        <input 
                            type="text" 
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Type your question here..."
                            className="flex-1 bg-transparent border-none text-zinc-200 placeholder-zinc-600 focus:ring-0 text-sm px-3"
                            onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                        />
                        <button 
                            onClick={handleAsk}
                            disabled={loading || !question}
                            className="p-2 bg-white text-black rounded-lg hover:bg-amber-400 disabled:opacity-50 disabled:hover:bg-white transition-colors"
                        >
                            {loading ? (
                                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>
                            )}
                        </button>
                    </div>
                    
                    {/* Disclaimer */}
                    <div className="mt-3 text-center">
                        <p className="text-[10px] text-zinc-600">
                            <span className="text-amber-500/80 font-bold mr-1">DISCLAIMER:</span> 
                            AI-generated responses may contain inaccuracies. Please verify critical data independently.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};