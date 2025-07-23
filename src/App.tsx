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
import AIVisualsShowcase from './pages/AIVisualsShowcase';

// Import service pages
import BespokeAIChatbots from './pages/services/BespokeAIChatbots';
import AIVoiceAgents from './pages/services/AIVoiceAgents';
import LeadGenerationSystems from './pages/services/LeadGenerationSystems';
import PersonalizedOutreach from './pages/services/PersonalizedOutreach';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import AutomationInfrastructure from './pages/services/AutomationInfrastructure';

// Declare global VG_CONFIG for TypeScript
declare global {
  interface Window {
    VG_CONFIG?: any;
  }
}

function ConvocoreChatbot() {
  React.useEffect(() => {
    // Check if the script is already loaded
    if (document.querySelector('script[src*="vg_bundle.js"]')) {
      return;
    }

    // Set up the configuration
    window.VG_CONFIG = {
      ID: "xZw5mE4iLR4GNXFg",
      region: 'eu',
      render: 'bottom-right',
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css"
      ],
      autostart: true,
    };

    // Create and append the script
    const VG_SCRIPT = document.createElement("script");
    VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    VG_SCRIPT.defer = true;
    document.body.appendChild(VG_SCRIPT);

    // Cleanup function
    return () => {
      // Remove the script if component unmounts
      const existingScript = document.querySelector('script[src*="vg_bundle.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div style={{ width: 0, height: 0 }} id="VG_OVERLAY_CONTAINER">
      {/* Here is where CONVOCORE renders the widget. */}
    </div>
  );
}

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
              <Route path="/ai-visuals" element={<AIVisualsShowcase />} />
              
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
          <ConvocoreChatbot />
        </div>
      </div>
    </Router>
  );
}

export default App;