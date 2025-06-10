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

  const services = [
    {
      Icon: Bot,
      title: "Bespoke AI Chatbots",
      description: "Built for nuance, not scripts. Includes live-agent handoff and real-time dashboards.",
      link: "/services/bespoke-ai-chatbots"
    },
    {
      Icon: Phone,
      title: "AI Voice Agents",
      description: "Autonomous outbound calls, follow-ups, booking confirmations—on autopilot.",
      link: "/services/ai-voice-agents"
    },
    {
      Icon: LineChart,
      title: "Lead Generation Systems",
      description: "Custom funnels that qualify, tag, and route prospects without human drag.",
      link: "/services/lead-generation-systems"
    },
    {
      Icon: MessageSquare,
      title: "Mass Personalized Outreach",
      description: "Email, WhatsApp, SMS, LinkedIn—dialed to your exact customer persona.",
      link: "/services/personalized-outreach"
    },
    {
      Icon: Share2,
      title: "AI Social Media Management",
      description: "Content creation, publishing, responses, and optimization done automatically.",
      link: "/services/social-media-management"
    },
    {
      Icon: Layout,
      title: "Automation Infrastructure",
      description: "Full-stack systems that connect your digital operations to real-world execution.",
      link: "/services/automation-infrastructure"
    }
  ];

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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="block group">
                <div className="group-hover:scale-105 transition-transform duration-300">
                  <div className="group relative bg-white p-8 rounded-2xl h-full">
                    <div className="relative z-10">
                      <service.Icon className="h-12 w-12 text-primary mb-6" />
                      <h3 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                        Learn More <ChevronRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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