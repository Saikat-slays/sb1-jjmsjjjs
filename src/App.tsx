import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import StrategyCall from './pages/StrategyCall';
import HowWeWork from './pages/HowWeWork';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { PageTransition } from './components/ui/motion';

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-charcoal">
        <ScrollToTop />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={
                <PageTransition key="home">
                  <Home />
                </PageTransition>
              } />
              <Route path="/services" element={
                <PageTransition key="services">
                  <Services />
                </PageTransition>
              } />
              <Route path="/about" element={
                <PageTransition key="about">
                  <About />
                </PageTransition>
              } />
              <Route path="/strategy-call" element={
                <PageTransition key="strategy-call">
                  <StrategyCall />
                </PageTransition>
              } />
              <Route path="/how-we-work" element={
                <PageTransition key="how-we-work">
                  <HowWeWork />
                </PageTransition>
              } />
              <Route path="/terms" element={
                <PageTransition key="terms">
                  <TermsOfService />
                </PageTransition>
              } />
              <Route path="/privacy" element={
                <PageTransition key="privacy">
                  <PrivacyPolicy />
                </PageTransition>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;