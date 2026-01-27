import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const funnelData = [
  { stage: 'Sign Up', users: 1000 },
  { stage: 'Verify Email', users: 850 },
  { stage: 'Onboarding Start', users: 800 },
  { stage: 'Data Import (Old)', users: 480 },
  { stage: 'Dashboard View', users: 450 },
];

const newFunnelData = [
  { stage: 'Sign Up', users: 1000 },
  { stage: 'Verify Email', users: 850 },
  { stage: 'Onboarding Start', users: 800 },
  { stage: 'Template Select (New)', users: 720 },
  { stage: 'Dashboard View', users: 700 },
];

export const UserRetentionDashboard: React.FC = () => {
  const [view, setView] = React.useState<'before' | 'after'>('before');

  const currentData = view === 'before' ? funnelData : newFunnelData;
  const dropOffColor = view === 'before' ? '#ef4444' : '#f97316';

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-zinc-900/50 p-1 rounded-lg border border-white/5 w-fit mx-auto mb-6">
        <button
          onClick={() => setView('before')}
          className={`px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded transition-all ${
            view === 'before' ? 'bg-zinc-700 text-white' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Baseline
        </button>
        <button
          onClick={() => setView('after')}
          className={`px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded transition-all ${
            view === 'after' ? 'bg-orange-500 text-black' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Intervention
        </button>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={currentData} margin={{ top: 5, right: 30, left: 40, bottom: 5 }} barGap={2}>
            <XAxis type="number" hide />
            <YAxis dataKey="stage" type="category" width={140} tick={{ fill: '#71717a', fontSize: 10, fontFamily: 'monospace' }} axisLine={false} tickLine={false} />
            <Tooltip
              cursor={{ fill: '#ffffff05' }}
              contentStyle={{ backgroundColor: '#09090b', borderColor: '#ffffff20', color: '#f4f4f5', fontSize: '11px', fontFamily: 'monospace' }}
            />
            <Bar dataKey="users" radius={[0, 4, 4, 0]} barSize={24} animationDuration={600}>
               {currentData.map((entry, index) => (
                 <Cell key={`cell-${index}`} fill={index === 3 ? dropOffColor : '#3f3f46'} strokeWidth={0} />
               ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className={`mt-4 p-3 rounded-lg border text-[10px] font-mono leading-relaxed transition-colors duration-500 flex items-start gap-2 ${view === 'before' ? 'bg-red-900/10 border-red-500/20 text-red-300' : 'bg-emerald-900/10 border-emerald-500/20 text-emerald-300'}`}>
        <span>{view === 'before' ? '[!]' : '[ok]'}</span>
        {view === 'before' 
          ? 'CRITICAL_DROP: -40% user loss at Data Import step. High friction detected.'
          : 'RETENTION_RECOVERED: +50% improvement in target cohort post-template system.'}
      </div>
    </div>
  );
};