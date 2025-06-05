import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PageTransition } from './components/ui/motion';
import { LoadingSpinner } from './components/ui/loading-spinner';

// Lazy load all pages
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/About'));
const StrategyCall = React.lazy(() => import('./pages/StrategyCall'));
const HowWeWork = React.lazy(() => import('./pages/HowWeWork'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));

function ScrollToTop() {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-charcoal">
        <Navbar />
        <main className="relative z-10">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<PageTransition key="home"><Home /></PageTransition>} />
              <Route path="/services" element={<PageTransition key="services"><Services /></PageTransition>} />
              <Route path="/about" element={<PageTransition key="about"><About /></PageTransition>} />
              <Route path="/strategy-call" element={<PageTransition key="strategy"><StrategyCall /></PageTransition>} />
              <Route path="/how-we-work" element={<PageTransition key="how"><HowWeWork /></PageTransition>} />
              <Route path="/terms" element={<PageTransition key="terms"><TermsOfService /></PageTransition>} />
              <Route path="/privacy" element={<PageTransition key="privacy"><PrivacyPolicy /></PageTransition>} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;