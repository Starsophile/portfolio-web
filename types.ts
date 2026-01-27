export enum ProjectCategory {
  STRATEGY = 'Product Strategy',
  RESEARCH = 'User Research',
  SYSTEMS = 'System Architecture',
  ANALYSIS = 'Market Analysis'
}

export interface SectionItem {
  heading?: string;
  body: string;
}

export interface ProjectSection {
  title: string;
  content?: string;
  items?: SectionItem[]; 
  type: 'text' | 'list' | 'highlight' | 'grid' | 'row';
}

export enum DashboardId {
  MARKET_LIQUIDITY = 'market-liquidity',
  USER_RETENTION = 'user-retention',
  SMARTPHONE_SURVEY = 'smartphone-survey'
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  date: string;
  tags: string[];
  summary: string;
  sections: ProjectSection[];
  dashboardId?: DashboardId;
  keyLearnings: string[];
  heroVisual?: {
    displayText: string;
    subText: string;
    gradientFrom: string;
    gradientTo: string;
  };
}