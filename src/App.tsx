import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PageTransition } from './components/ui/motion';
import { LoadingSpinner } from './components/ui/loading-spinner';

// Lazy load pages with loading states
const Home = React.lazy(() => import('./pages/Home').then(module => {
  return new Promise(resolve => setTimeout(() => resolve(module), 100));
}));

const Services = React.lazy(() => import('./pages/Services').then(module => {
  return new Promise(resolve => setTimeout(() => resolve(module), 100));
}));

const About = React.lazy(() => import('./pages/About').then(module => {
  return new Promise(resolve => setTimeout(() => resolve(module), 100));
}));

const StrategyCall = React.lazy(() => import('./pages/StrategyCall').then(module => {
  return new Promise(resolve => setTimeout(() => resolve(module), 100));
}));

const HowWeWork = React.lazy(() => import('./pages/HowWeWork').then(module => {
  return new Promise(resolve => setTimeout(() => resolve(module), 100));
}));

const TermsOfService = React.lazy(() => import('./pages/TermsOfService').then(module => {
  return new Promise(resolve => setTimeout(() => resolve(module), 100));
}));

const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy').then(module => {
  return new Promise(resolve => setTimeout(() => resolve(module), 100));
}));

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-charcoal">
        <div className="relative z-10">
          <Navbar />
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/strategy-call" element={<PageTransition><StrategyCall /></PageTransition>} />
                <Route path="/how-we-work" element={<PageTransition><HowWeWork /></PageTransition>} />
                <Route path="/terms" element={<PageTransition><TermsOfService /></PageTransition>} />
                <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;