import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, LineChart, MessageSquare, Rocket, Shield, Users, ChevronRight, Zap } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ServiceCard } from '@/components/ui/service-card';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { StatsCard } from '@/components/ui/stats-card';

function Home() {
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
      description: "Built for nuance, not scripts. Includes live-agent handoff and real-time dashboards."
    },
    {
      Icon: Zap,
      title: "AI Voice Agents",
      description: "Autonomous outbound calls, follow-ups, booking confirmations—on autopilot."
    },
    {
      Icon: LineChart,
      title: "Lead Generation Systems",
      description: "Custom funnels that qualify, tag, and route prospects without human drag."
    },
    {
      Icon: MessageSquare,
      title: "Mass Personalized Outreach",
      description: "Email, WhatsApp, SMS, LinkedIn—dialed to your exact customer persona."
    },
    {
      Icon: Users,
      title: "AI Social Media Managers",
      description: "Content creation, publishing, responses, and optimization done automatically."
    },
    {
      Icon: Shield,
      title: "Automation Infrastructure",
      description: "Full-stack systems that connect your digital operations to real-world execution."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary">
        <div className="container mx-auto px-6 pt-20 pb-24 text-center">
          <TypewriterHeading 
            text="Custom AI. Limitless Growth."
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          />
          <p className="text-2xl text-white/80 mb-8">
            Every system we build is designed to outperform, outlast, and outscale anything you've touched before.
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-white/70 mb-4">
              We craft bespoke AI infrastructure for ambitious businesses.
              Engineered for precision. Designed to compound.
            </p>
            <p className="text-xl text-white/70">
              This is not automation.
              This is evolution—built for revenue.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton className="inline-block">
              <ButtonLink to="/strategy-call">
                Book Your Private Strategy Call <ChevronRight className="ml-2 h-5 w-5" />
              </ButtonLink>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatsCard value={250} suffix="+" label="Clients Served" />
            <StatsCard value={98} suffix="%" label="Client Satisfaction" />
            <StatsCard value={2} suffix="x" label="Average Revenue Growth" />
            <StatsCard value={500} suffix="K+" label="Leads Generated" />
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Build</h2>
            <p className="text-xl text-white/70">
              Every business is a machine.
              We build the intelligence behind it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-white/70 mb-8">
              These aren't tools. These are your digital workforce.
            </p>
            <ButtonLink to="/strategy-call">
              See What We'd Build for You <ChevronRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">Decor Client — 2X Inbound Leads in 3 Weeks</h2>
            <p className="text-xl text-white/70 mb-8">
              This wasn't a chatbot. It was a command center.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-sm mb-8">
              <p className="text-lg text-white/80 mb-6">
                For a top-tier interior decor brand, we engineered a multi-layer AI system:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white/80">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Real-time lead capture through WhatsApp and Instagram
                </li>
                <li className="flex items-center text-white/80">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Instant qualification and routing to sales
                </li>
                <li className="flex items-center text-white/80">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  CRM integration and dynamic dashboards
                </li>
                <li className="flex items-center text-white/80">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  Personalized AI follow-ups based on product interest
                </li>
              </ul>
              <div className="border-t border-white/10 pt-8">
                <h3 className="text-xl font-bold text-white mb-4">Results:</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Twice the leads.</li>
                  <li>Fifty percent more bookings.</li>
                  <li>Zero human input until the closing call.</li>
                </ul>
              </div>
            </div>
            <p className="text-xl text-white/70 text-center mb-8">
              Now imagine that operating inside your business.
            </p>
            <div className="text-center">
              <ButtonLink to="/strategy-call">
                Let's Build Yours Next — Book Now <ChevronRight className="ml-2 h-5 w-5" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Why ThynkNext Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Why ThynkNext?</h2>
            <p className="text-xl mb-4">Because templates are for tourists.</p>
            <p className="text-xl mb-12">
              We are not a SaaS. We are your growth architecture team.
            </p>
            <div className="space-y-6 text-lg text-white/80">
              <p>
                No shortcuts. No generic bots.
                Everything we build is handcrafted, proprietary, and engineered from the ground up for your specific business model.
              </p>
              <p>
                Think Neuralink, but for your operations.
                Not just intelligent. Surgical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Call Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">The Strategy Call</h2>
          <p className="text-xl text-white/80 mb-8">We don't guess. We diagnose.</p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-white/80 mb-8">
              Before we build anything, we start with a private strategy session.
              We break down your business.
              Map your operational choke points.
              Design your AI growth engine from the ground up.
            </p>
            <p className="text-lg text-white/80 mb-12">
              This is not for everyone.
              We take on only a few new clients each month to keep every system handcrafted and irreplicable.
            </p>
          </div>
          <ButtonLink to="/strategy-call">
            Book Your Strategy Call Now <ChevronRight className="ml-2 h-5 w-5" />
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}

export default Home;