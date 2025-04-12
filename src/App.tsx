import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { animate } from 'motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Results from './pages/Results';
import About from './pages/About';
import Contact from './pages/Contact';
import StrategyCall from './pages/StrategyCall';
import { BackgroundEffect } from './components/ui/background-effect';
import { VoiceflowChat } from './components/ui/voiceflow-chat';

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    animate(
      containerRef.current,
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.5, easing: [0.17, 0.55, 0.55, 1] }
    );
  }, [location.pathname]);

  return <div ref={containerRef}>{children}</div>;
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-charcoal">
        <BackgroundEffect />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/results" element={<PageTransition><Results /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/strategy-call" element={<PageTransition><StrategyCall /></PageTransition>} />
          </Routes>
          <Footer />
          <VoiceflowChat />
        </div>
      </div>
    </Router>
  );
}

export default App;