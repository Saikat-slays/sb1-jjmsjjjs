import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages directly for better reliability
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import StrategyCall from './pages/StrategyCall';
import HowWeWork from './pages/HowWeWork';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DeveloperDocs from './pages/DeveloperDocs';
import DataSolutionShowcase from './pages/DataSolutionShowcase';

// Import service pages
import BespokeAIChatbots from './pages/services/BespokeAIChatbots';
import AIVoiceAgents from './pages/services/AIVoiceAgents';
import LeadGenerationSystems from './pages/services/LeadGenerationSystems';
import PersonalizedOutreach from './pages/services/PersonalizedOutreach';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import AutomationInfrastructure from './pages/services/AutomationInfrastructure';

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
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/strategy-call" element={<StrategyCall />} />
              <Route path="/how-we-work" element={<HowWeWork />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/developer-docs" element={<DeveloperDocs />} />
              <Route path="/data-solution" element={<DataSolutionShowcase />} />
              
              {/* Service Pages */}
              <Route path="/services/bespoke-ai-chatbots" element={<BespokeAIChatbots />} />
              <Route path="/services/ai-voice-agents" element={<AIVoiceAgents />} />
              <Route path="/services/lead-generation-systems" element={<LeadGenerationSystems />} />
              <Route path="/services/personalized-outreach" element={<PersonalizedOutreach />} />
              <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
              <Route path="/services/automation-infrastructure" element={<AutomationInfrastructure />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;