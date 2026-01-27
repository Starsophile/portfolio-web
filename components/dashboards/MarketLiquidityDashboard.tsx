import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { time: '10:00', volatility: 12, slippage: 0.4 },
  { time: '11:00', volatility: 18, slippage: 0.6 },
  { time: '12:00', volatility: 45, slippage: 1.8 },
  { time: '13:00', volatility: 32, slippage: 1.1 },
  { time: '14:00', volatility: 20, slippage: 0.5 },
  { time: '15:00', volatility: 15, slippage: 0.45 },
  { time: '16:00', volatility: 10, slippage: 0.3 },
];

const optimizationData = [
  { time: '10:00', standard: 0.4, optimized: 0.38 },
  { time: '11:00', standard: 0.6, optimized: 0.45 },
  { time: '12:00', standard: 1.8, optimized: 0.95 }, 
  { time: '13:00', standard: 1.1, optimized: 0.70 },
  { time: '14:00', standard: 0.5, optimized: 0.40 },
  { time: '15:00', standard: 0.45, optimized: 0.38 },
  { time: '16:00', standard: 0.3, optimized: 0.28 },
];

export const MarketLiquidityDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart 1 */}
        <div className="h-64 bg-zinc-900/40 rounded-xl border border-white/5 p-4">
          <div className="flex justify-between items-center mb-6">
             <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Volatility Index</h4>
             <span className="text-[10px] font-mono text-orange-500 font-bold">LIVE FEED</span>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorVol" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
              <XAxis dataKey="time" stroke="#71717a" fontSize={9} tickLine={false} axisLine={false} tickMargin={12} fontFamily="monospace" />
              <YAxis stroke="#71717a" fontSize={9} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} fontFamily="monospace" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#09090b', borderColor: '#ffffff20', color: '#f4f4f5', fontSize: '11px', fontFamily: 'monospace' }}
                itemStyle={{ color: '#fb923c' }}
              />
              <Area type="monotone" dataKey="volatility" stroke="#f97316" strokeWidth={2} fillOpacity={1} fill="url(#colorVol)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Chart 2 */}
        <div className="h-64 bg-zinc-900/40 rounded-xl border border-white/5 p-4">
          <div className="flex justify-between items-center mb-6">
             <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Slippage Optimization</h4>
             <span className="text-[10px] font-mono text-emerald-400 font-bold">-14% DELTA</span>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={optimizationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
              <XAxis dataKey="time" stroke="#71717a" fontSize={9} tickLine={false} axisLine={false} tickMargin={12} fontFamily="monospace" />
              <YAxis stroke="#71717a" fontSize={9} tickLine={false} axisLine={false} fontFamily="monospace" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#09090b', borderColor: '#ffffff20', color: '#f4f4f5', fontSize: '11px', fontFamily: 'monospace' }}
              />
              <Line type="monotone" dataKey="standard" stroke="#ef4444" strokeWidth={2} dot={false} name="Standard" />
              <Line type="monotone" dataKey="optimized" stroke="#f97316" strokeWidth={2} dot={false} name="Optimized" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="grid grid-cols-3 divide-x divide-white/5 border-t border-white/5 pt-4">
         <div className="px-4 text-center">
            <span className="block text-2xl font-bold text-white">14%</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Efficiency</span>
         </div>
         <div className="px-4 text-center">
            <span className="block text-2xl font-bold text-white">1.2ms</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Latency</span>
         </div>
         <div className="px-4 text-center">
            <span className="block text-2xl font-bold text-emerald-500">High</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Confidence</span>
         </div>
      </div>
    </div>
  );
};