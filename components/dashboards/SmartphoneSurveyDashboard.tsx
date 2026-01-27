import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Data Configuration
const brandDistribution = [
  { name: 'Samsung', value: 22, color: '#1428A0' },
  { name: 'Redmi/Xiaomi', value: 18, color: '#FF6900' },
  { name: 'iPhone', value: 15, color: '#e4e4e7' },
  { name: 'Realme', value: 13, color: '#F7D12E' },
  { name: 'Vivo', value: 11, color: '#0066CC' },
  { name: 'Oppo', value: 10, color: '#00B140' },
  { name: 'OnePlus', value: 8, color: '#F01B2D' },
  { name: 'Others', value: 3, color: '#71717a' }
];

const priceSegments = [
  { segment: '<10k', count: 18 },
  { segment: '10-15k', count: 22 },
  { segment: '15-20k', count: 18 },
  { segment: '20-25k', count: 13 },
  { segment: '25-30k', count: 10 },
  { segment: '30k+', count: 19 }
];

const topFeatures = [
  { feature: 'Smooth Performance', percentage: 82 },
  { feature: 'Long Battery Life', percentage: 78 },
  { feature: 'Good Camera', percentage: 71 },
  { feature: 'Gaming Perf.', percentage: 23 },
  { feature: 'Trusted Brand', percentage: 21 }
];

const osPreference = [
  { name: 'Android', value: 68, color: '#3DDC84' },
  { name: 'iOS', value: 22, color: '#e4e4e7' },
  { name: "Indifferent", value: 10, color: '#71717a' }
  ];

const expectedLifespan = [
  { years: '3+ Years', percentage: 62 },
  { years: '2 Years', percentage: 18 },
  { years: '1 Year', percentage: 4 },
  { years: 'Upgrade Lover', percentage: 16 }
];

const painPoints = [
  { issue: 'Camera Quality', count: 28 },
  { issue: 'Battery Life', count: 24 },
  { issue: 'Storage Space', count: 19 },
  { issue: 'Heating', count: 12 },
  { issue: 'UI Lag', count: 10 }
];

const trustBrands = [
  { brand: 'Samsung', votes: 48 },
  { brand: 'Apple', votes: 18 },
  { brand: 'OnePlus', votes: 8 },
  { brand: 'Vivo', votes: 6 },
  { brand: 'Realme', votes: 5 }
];

const indianBrandWillingness = [
  { response: 'Depends on Use-Case', value: 52, color: '#f59e0b' },
  { response: 'Yes', value: 38, color: '#10b981' },
  { response: 'Maybe', value: 8, color: '#3b82f6' },
  { response: 'No', value: 2, color: '#ef4444' }
];

// Reusable Components
const StatCard = ({ title, value, subtitle, accentColor }: any) => (
  <div className="bg-[#161618] border border-white/5 p-6 rounded-xl hover:border-amber-500/30 transition-all">
    <div className="flex justify-between items-start mb-2">
      <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{title}</h4>
      <div className={`w-2 h-2 rounded-full ${accentColor}`}></div>
    </div>
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <p className="text-zinc-400 text-xs font-mono">{subtitle}</p>
  </div>
);

const ChartCard = ({ title, children }: any) => (
  <div className="bg-[#111] border border-white/5 p-6 rounded-xl">
    <h3 className="text-white font-bold text-sm mb-6 border-b border-white/5 pb-2">{title}</h3>
    <div className="h-64 w-full text-xs font-mono">
      {children}
    </div>
  </div>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#09090b] border border-white/10 p-3 rounded shadow-xl">
        <p className="text-zinc-400 text-xs font-mono mb-1">{label}</p>
        <p className="text-white text-sm font-bold">
          {payload[0].value}{payload[0].unit || ''}
        </p>
      </div>
    );
  }
  return null;
};

export const SmartphoneSurveyDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features & Pain Points' },
    { id: 'brands', label: 'Brand Perception' },
    { id: 'insights', label: 'Strategic Insights' }
  ];

  return (
    <div className="space-y-8 font-sans">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === tab.id
                ? 'bg-amber-500 text-black'
                : 'bg-zinc-900 text-zinc-500 hover:text-zinc-300 border border-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="animate-fade-in">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard title="Sample Size" value="~100" subtitle="Indian Smartphone Users" accentColor="bg-blue-500" />
              <StatCard title="Market Leader" value="Samsung" subtitle="22% Share in sample" accentColor="bg-purple-500" />
              <StatCard title="Sweet Spot" value="10k-20k" subtitle="40% of users" accentColor="bg-emerald-500" />
              <StatCard title="Avg Cycle" value="3+ Years" subtitle="62% Expectation" accentColor="bg-amber-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard title="Brand Distribution">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={brandDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {brandDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-wrap gap-3 justify-center mt-4">
                   {brandDistribution.slice(0,4).map(b => (
                     <div key={b.name} className="flex items-center gap-1.5">
                       <div className="w-2 h-2 rounded-full" style={{backgroundColor: b.color}}></div>
                       <span className="text-[10px] text-zinc-500">{b.name}</span>
                     </div>
                   ))}
                </div>
              </ChartCard>

              <ChartCard title="Price Segment Distribution">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={priceSegments} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis dataKey="segment" stroke="#555" tick={{fill: '#71717a', fontSize: 10}} axisLine={false} tickLine={false} />
                    <YAxis stroke="#555" tick={{fill: '#71717a', fontSize: 10}} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: '#ffffff05'}} content={<CustomTooltip />} />
                    <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="space-y-6">
            <div className="bg-[#111] border border-white/5 p-6 rounded-xl">
               <h3 className="text-white font-bold text-sm mb-6">Feature Priorities (Ranked)</h3>
               <div className="space-y-4">
                  {topFeatures.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex justify-between mb-2 text-xs font-mono">
                        <span className="text-zinc-300">{item.feature}</span>
                        <span className="text-amber-500">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-zinc-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               <ChartCard title="OS Preference">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={osPreference}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {osPreference.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center gap-6 mt-2">
                     <span className="text-xs text-zinc-500 flex items-center gap-2"><span className="w-2 h-2 bg-[#3DDC84] rounded-full"></span>Android (68%)</span>
                     <span className="text-xs text-zinc-500 flex items-center gap-2"><span className="w-2 h-2 bg-zinc-200 rounded-full"></span>iOS (22%)</span>
                  </div>
               </ChartCard>

               <ChartCard title="Major Pain Points">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={painPoints} layout="vertical" margin={{ left: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                      <XAxis type="number" stroke="#555" tick={{fill: '#71717a', fontSize: 10}} />
                      <YAxis dataKey="issue" type="category" stroke="#555" tick={{fill: '#71717a', fontSize: 10}} width={90} />
                      <Tooltip cursor={{fill: '#ffffff05'}} content={<CustomTooltip />} />
                      <Bar dataKey="count" fill="#ef4444" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
               </ChartCard>
            </div>
          </div>
        )}

        {activeTab === 'brands' && (
           <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <ChartCard title="Trust Index (Votes)">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={trustBrands}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="brand" stroke="#555" tick={{fill: '#71717a', fontSize: 10}} axisLine={false} tickLine={false} />
                        <YAxis stroke="#555" tick={{fill: '#71717a', fontSize: 10}} axisLine={false} tickLine={false} />
                        <Tooltip cursor={{fill: '#ffffff05'}} content={<CustomTooltip />} />
                        <Bar dataKey="votes" fill="#10b981" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                 </ChartCard>

                 <ChartCard title="Willingness to buy Indian Brands">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={indianBrandWillingness}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          dataKey="value"
                          paddingAngle={2}
                        >
                          {indianBrandWillingness.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="text-center text-xs text-zinc-500 mt-2">
                       "Depends on Use-Case" is the dominant sentiment (52%)
                    </div>
                 </ChartCard>
              </div>
           </div>
        )}

        {activeTab === 'insights' && (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#161618] border border-white/5 p-6 rounded-xl hover:bg-zinc-900 transition-colors">
                 <h4 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3">01. Market Reality</h4>
                 <p className="text-zinc-300 text-sm leading-relaxed">
                    <strong className="text-white">Samsung leads (22%)</strong> due to trust, but Chinese OEMs (Vivo/Oppo/Realme) combined hold ~34%, dominating via sheer volume and specs.
                 </p>
              </div>
              
              <div className="bg-[#161618] border border-white/5 p-6 rounded-xl hover:bg-zinc-900 transition-colors">
                 <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-3">02. Price Sensitivity</h4>
                 <p className="text-zinc-300 text-sm leading-relaxed">
                    <strong className="text-white">The 10k-20k segment is the battleground.</strong> 40% of users sit here. Premium (30k+) is growing (19%), but budget is still massive.
                 </p>
              </div>

              <div className="bg-[#161618] border border-white/5 p-6 rounded-xl hover:bg-zinc-900 transition-colors">
                 <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-3">03. Feature Hierarchy</h4>
                 <p className="text-zinc-300 text-sm leading-relaxed">
                    Users tolerate bad design but punish <strong className="text-white">bad battery and lag</strong>. Brand loyalty (21%) is lower than performance demand (82%).
                 </p>
              </div>

              <div className="bg-[#161618] border border-white/5 p-6 rounded-xl hover:bg-zinc-900 transition-colors">
                 <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-3">04. The "Made in India" Factor</h4>
                 <p className="text-zinc-300 text-sm leading-relaxed">
                    Sentiment is positive (90% open), but conditional. Users won't buy "Indian" for charity; they demand <strong className="text-white">quality parity</strong>.
                 </p>
              </div>
           </div>
        )}
      </div>
    </div>
  );
};