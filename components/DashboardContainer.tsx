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
        return <div className="text-red-400 font-mono text-xs">ERR_DASHBOARD_NOT_FOUND: {dashboardId}</div>;
    }
  };

  return (
    <div className="my-8 animate-fade-in w-full">
      <div className="flex items-center gap-4 mb-6 opacity-40">
        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(204,255,0,0.2), transparent)' }} />
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: '#CCFF00' }}>
          Live Module
        </span>
        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(204,255,0,0.2), transparent)' }} />
      </div>
      <Suspense fallback={
        <div className="h-64 animate-pulse border" style={{ backgroundColor: 'rgba(17,17,17,0.5)', borderColor: 'rgba(255,255,255,0.04)', borderRadius: '16px' }} />
      }>
        {renderDashboard()}
      </Suspense>
    </div>
  );
};