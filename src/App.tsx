import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PageTransition } from './components/ui/motion';
import { LoadingSpinner } from './components/ui/loading-spinner';

// Preload pages
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/About'));
const StrategyCall = React.lazy(() => import('./pages/StrategyCall'));
const HowWeWork = React.lazy(() => import('./pages/HowWeWork'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));

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
    // Preload all routes
    Promise.all([
      import('./pages/Home'),
      import('./pages/Services'),
      import('./pages/About'),
      import('./pages/StrategyCall'),
      import('./pages/HowWeWork'),
      import('./pages/TermsOfService'),
      import('./pages/PrivacyPolicy')
    ]).then(() => {
      setIsLoading(false);
    });
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