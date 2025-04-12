import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, LineChart, MessageSquare, Cpu, Phone, Share2, Layout, ChevronRight } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';

function Services() {
  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <TypewriterHeading
            text="Engineered Intelligence. Built for Your Business."
            className="text-4xl md:text-5xl font-bold text-black text-center mb-8"
          />
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
            We don't sell features. We craft automated systems that grow your business while you sleep.
          </p>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Each solution is custom-built, grounded in your workflow, and designed for performance at scale.
          </p>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Core Solutions</h2>
          
          {/* Bespoke AI Chatbots */}
          <div className="bg-white rounded-2xl overflow-hidden mb-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 p-12">
              <div>
                <Bot className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Bespoke AI Chatbots</h3>
                <p className="text-gray-600 mb-6">
                  Our chatbots do more than answer questions. They guide conversations, qualify leads, 
                  escalate intelligently to live agents, and drive conversions—all while syncing in real 
                  time with your backend systems.
                </p>
                <h4 className="text-lg font-semibold text-black mb-4">Delivered with:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Live-agent handoff protocols
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Smart routing based on buyer intent
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Real-time analytics dashboards
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Full integration with CRM, WhatsApp, Instagram, and more
                  </li>
                </ul>
              </div>
              <div className="bg-accent-dark rounded-xl p-8 flex items-center justify-center">
                <Bot className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>

          {/* AI Voice Agents */}
          <div className="bg-white rounded-2xl overflow-hidden mb-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 p-12">
              <div>
                <Phone className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">AI Voice Agents</h3>
                <p className="text-gray-600 mb-6">
                  Transform your outbound communication with intelligent voice agents that handle 
                  calls, follow-ups, and confirmations autonomously—freeing your team for high-value interactions.
                </p>
                <h4 className="text-lg font-semibold text-black mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Natural language processing
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Contextual response system
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Automated appointment scheduling
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Call analytics and insights
                  </li>
                </ul>
              </div>
              <div className="bg-accent-dark rounded-xl p-8 flex items-center justify-center">
                <Phone className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>

          {/* Lead Generation Systems */}
          <div className="bg-white rounded-2xl overflow-hidden mb-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 p-12">
              <div>
                <LineChart className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Lead Generation Systems</h3>
                <p className="text-gray-600 mb-6">
                  Build a predictable pipeline of qualified leads with our AI-powered lead generation 
                  systems that identify, nurture, and convert prospects automatically.
                </p>
                <h4 className="text-lg font-semibold text-black mb-4">System Components:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Multi-channel lead capture
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Automated lead scoring
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Intelligent nurture sequences
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Performance tracking dashboard
                  </li>
                </ul>
              </div>
              <div className="bg-accent-dark rounded-xl p-8 flex items-center justify-center">
                <LineChart className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>

          {/* Mass Personalized Outreach */}
          <div className="bg-white rounded-2xl overflow-hidden mb-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 p-12">
              <div>
                <MessageSquare className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Mass Personalized Outreach</h3>
                <p className="text-gray-600 mb-6">
                  Scale your personal touch across all channels with AI-driven communication 
                  that adapts to each prospect's behavior and preferences.
                </p>
                <h4 className="text-lg font-semibold text-black mb-4">Channels Covered:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Email campaigns with dynamic content
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    WhatsApp business automation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    LinkedIn outreach optimization
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    SMS marketing automation
                  </li>
                </ul>
              </div>
              <div className="bg-accent-dark rounded-xl p-8 flex items-center justify-center">
                <MessageSquare className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>

          {/* Social Media Management */}
          <div className="bg-white rounded-2xl overflow-hidden mb-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 p-12">
              <div>
                <Share2 className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">AI Social Media Management</h3>
                <p className="text-gray-600 mb-6">
                  Let AI handle your social media presence with intelligent content creation, 
                  scheduling, and engagement—while maintaining your brand's unique voice.
                </p>
                <h4 className="text-lg font-semibold text-black mb-4">Automation Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Content generation and curation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Automated posting schedule
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Engagement monitoring and response
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Analytics and optimization
                  </li>
                </ul>
              </div>
              <div className="bg-accent-dark rounded-xl p-8 flex items-center justify-center">
                <Share2 className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>

          {/* Custom Development */}
          <div className="bg-white rounded-2xl overflow-hidden mb-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 p-12">
              <div>
                <Layout className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Custom AI Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Need something unique? We build custom AI solutions tailored to your specific 
                  business challenges and operational requirements.
                </p>
                <h4 className="text-lg font-semibold text-black mb-4">Development Process:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Requirement analysis and planning
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Custom AI model development
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Integration with existing systems
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    Ongoing optimization and support
                  </li>
                </ul>
              </div>
              <div className="bg-accent-dark rounded-xl p-8 flex items-center justify-center">
                <Layout className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            We Don't Sell Products. We Build Competitive Advantages.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Every system is handcrafted. Every result is measurable.
            And it all starts with a 1-on-1 strategy call where we design the blueprint 
            to automate and scale your unique operation.
          </p>
          <ButtonLink to="/strategy-call">
            Book Your Strategy Call Now <ChevronRight className="ml-2 h-5 w-5" />
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}

export default Services;