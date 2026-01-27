import React, { Suspense } from 'react';
import { DashboardId } from '../types';
import { MarketLiquidityDashboard } from './dashboards/MarketLiquidityDashboard';
import { UserRetentionDashboard } from './dashboards/UserRetentionDashboard';
import { SmartphoneSurveyDashboard } from './dashboards/SmartphoneSurveyDashboard';

interface DashboardContainerProps {
  dashboardId: DashboardId;
}

export const DashboardContainer: React.FC<DashboardContainerProps> = ({ dashboardId }) => {
  const renderDashboard = () => {
    switch (dashboardId) {
      case DashboardId.MARKET_LIQUIDITY:
        return <MarketLiquidityDashboard />;
      case DashboardId.USER_RETENTION:
        return <UserRetentionDashboard />;
      case DashboardId.SMARTPHONE_SURVEY:
        return <SmartphoneSurveyDashboard />;
      default:
        return <div className="text-rose-500 font-mono text-xs">ERR_DASHBOARD_NOT_FOUND: {dashboardId}</div>;
    }
  };

  return (
    <div className="my-12 animate-fade-in w-full">
      <div className="flex items-center gap-4 mb-6 opacity-60">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent flex-1"></div>
        <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-[0.2em]">Live Module Interaction</span>
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent flex-1"></div>
      </div>
      <Suspense fallback={<div className="h-64 bg-zinc-900/30 rounded-lg animate-pulse border border-white/5"></div>}>
        {renderDashboard()}
      </Suspense>
    </div>
  );
};