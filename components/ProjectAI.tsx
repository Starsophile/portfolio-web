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
    if (!apiKey) { setError('ERR_MISSING_API_KEY'); return; }

    setLoading(true); setError(''); setAnswer('');
    try {
      const ai = new GoogleGenAI({ apiKey });
      const context = `You are an AI assistant for a portfolio website.\nAnswer based ONLY on:\n\nTitle: ${project.title}\nCategory: ${project.category}\nSummary: ${project.summary}\nKey Learnings: ${project.keyLearnings.join(', ')}\nSections:\n${project.sections.map(s => `${s.title}: ${s.content}`).join('\n\n')}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: context }] },
          { role: 'user', parts: [{ text: `User Question: ${question}` }] }
        ],
        config: { systemInstruction: "Keep answers technical, concise, and professional." }
      });
      setAnswer(response.text || 'No response generated.');
    } catch (err: any) {
      console.error(err);
      setError('Connection refused. Check API configuration.');
    } finally { setLoading(false); }
  };

  return (
    <div className="mt-16 border-t pt-12" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-0.5 blur opacity-10 group-hover:opacity-20 transition duration-1000"
            style={{ background: 'linear-gradient(135deg, rgba(204,255,0,0.2), rgba(204,255,0,0.05))', borderRadius: '24px' }} />

          <div className="relative overflow-hidden border" style={{ backgroundColor: '#111', borderColor: 'rgba(255,255,255,0.05)', borderRadius: '24px' }}>
            {/* Header */}
            <div className="border-b px-6 py-4 flex items-center gap-3" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.04)' }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#CCFF00' }}>
                <svg className="w-3.5 h-3.5" style={{ color: '#000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Project Intelligence</h3>
                <p className="text-[10px] font-mono uppercase" style={{ color: '#555' }}>Gemini · Context Aware</p>
              </div>
            </div>

            {/* Response */}
            <div className="p-8 min-h-[120px] flex flex-col justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
              {!loading && !answer && !error && (
                <p className="text-sm text-center" style={{ color: '#555' }}>Ask about strategy, methodology, or key learnings.</p>
              )}
              {loading && (
                <div className="space-y-3 animate-pulse max-w-lg mx-auto w-full">
                  <div className="h-2 rounded w-3/4" style={{ backgroundColor: '#1a1a1a' }} />
                  <div className="h-2 rounded w-full" style={{ backgroundColor: '#1a1a1a' }} />
                  <div className="h-2 rounded w-5/6" style={{ backgroundColor: '#1a1a1a' }} />
                </div>
              )}
              {error && <div className="p-4 rounded-lg text-sm text-center" style={{ backgroundColor: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.12)', color: '#f87171' }}>{error}</div>}
              {answer && <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#ccc' }}>{answer}</p>}
            </div>

            {/* Input */}
            <div className="p-4 border-t" style={{ backgroundColor: 'rgba(0,0,0,0.4)', borderColor: 'rgba(255,255,255,0.04)' }}>
              <div className="flex items-center gap-2 rounded-full px-4 py-2 border transition-all duration-300"
                style={{ backgroundColor: '#000', borderColor: 'rgba(255,255,255,0.06)' }}>
                <input type="text" value={question} onChange={e => setQuestion(e.target.value)}
                  placeholder="Type your question here..."
                  className="flex-1 bg-transparent border-none text-sm px-2 focus:outline-none"
                  style={{ color: '#e2e8f0' }}
                  onKeyDown={e => e.key === 'Enter' && handleAsk()}
                  onFocus={e => { const p = e.currentTarget.parentElement; if (p) p.style.borderColor = 'rgba(204,255,0,0.3)'; }}
                  onBlur={e => { const p = e.currentTarget.parentElement; if (p) p.style.borderColor = 'rgba(255,255,255,0.06)'; }} />
                <button onClick={handleAsk} disabled={loading || !question}
                  className="p-2 rounded-full disabled:opacity-30 transition-all"
                  style={{ backgroundColor: '#CCFF00', color: '#000' }}>
                  {loading ? (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};