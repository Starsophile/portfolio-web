import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Layout } from './components/Layout';
import { Landing } from './pages/Landing';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';


const { HashRouter, Routes, Route, Navigate, useLocation } = ReactRouterDOM;

const ResumeRedirect: React.FC = () => {
  useEffect(() => {
    window.open('/assets/Rishi_CV.pdf', '_blank');
    window.history.back();
  }, []);
  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumeRedirect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;