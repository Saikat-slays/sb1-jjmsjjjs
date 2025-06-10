import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/About'));
const StrategyCall = React.lazy(() => import('./pages/StrategyCall'));
const HowWeWork = React.lazy(() => import('./pages/HowWeWork'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const DeveloperDocs = React.lazy(() => import('./pages/DeveloperDocs'));

// Lazy load service pages
const BespokeAIChatbots = React.lazy(() => import('./pages/services/BespokeAIChatbots'));
const AIVoiceAgents = React.lazy(() => import('./pages/services/AIVoiceAgents'));
const LeadGenerationSystems = React.lazy(() => import('./pages/services/LeadGenerationSystems'));
const PersonalizedOutreach = React.lazy(() => import('./pages/services/PersonalizedOutreach'));
const SocialMediaManagement = React.lazy(() => import('./pages/services/SocialMediaManagement'));
const AutomationInfrastructure = React.lazy(() => import('./pages/services/AutomationInfrastructure'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-charcoal flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
    </div>
  </div>
);

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
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/strategy-call" element={<StrategyCall />} />
                <Route path="/how-we-work" element={<HowWeWork />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/developer-docs" element={<DeveloperDocs />} />
                
                {/* Service Pages */}
                <Route path="/services/bespoke-ai-chatbots" element={<BespokeAIChatbots />} />
                <Route path="/services/ai-voice-agents" element={<AIVoiceAgents />} />
                <Route path="/services/lead-generation-systems" element={<LeadGenerationSystems />} />
                <Route path="/services/personalized-outreach" element={<PersonalizedOutreach />} />
                <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
                <Route path="/services/automation-infrastructure" element={<AutomationInfrastructure />} />
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