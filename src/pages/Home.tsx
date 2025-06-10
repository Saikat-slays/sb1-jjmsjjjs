import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, LineChart, MessageSquare, Rocket, Shield, Users, ChevronRight, Zap } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ServiceCard } from '@/components/ui/service-card';
import { CyclingTypewriter } from '@/components/ui/cycling-typewriter';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { StatsCard } from '@/components/ui/stats-card';
import { TestimonialLogoScroll } from '@/components/ui/testimonial-logo-scroll';

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
      title: "Never Miss Another Lead",
      description: "AI chatbots that capture leads 24/7, even when you're sleeping. No more lost customers.",
      link: "/services/bespoke-ai-chatbots"
    },
    {
      Icon: Zap,
      title: "Make 500 Calls While You Have Coffee",
      description: "AI voice agents that call prospects, book appointments, and follow up automatically.",
      link: "/services/ai-voice-agents"
    },
    {
      Icon: LineChart,
      title: "Turn Website Visitors Into Paying Customers",
      description: "Smart systems that identify hot prospects and guide them to buy from you.",
      link: "/services/lead-generation-systems"
    },
    {
      Icon: MessageSquare,
      title: "Send 1000 Personal Messages in Minutes",
      description: "Reach more prospects with messages that feel personal, without the manual work.",
      link: "/services/personalized-outreach"
    },
    {
      Icon: Users,
      title: "Post on Social Media Without Lifting a Finger",
      description: "AI creates and posts content that gets engagement while you focus on your business.",
      link: "/services/social-media-management"
    },
    {
      Icon: Shield,
      title: "Stop Doing Repetitive Tasks",
      description: "Automate the boring stuff so you can focus on growing your business and making money.",
      link: "/services/automation-infrastructure"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary">
        <div className="container mx-auto px-6 pt-20 pb-24 text-center">
          <CyclingTypewriter 
            className="text-5xl md:text-7xl font-bold text-white mb-4 min-h-[120px] md:min-h-[160px] flex items-center justify-center"
          />
          <p className="text-2xl text-white/80 mb-8">
            We build AI systems that work 24/7 to grow your business while you sleep.
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-white/70 mb-4">
              Stop losing customers because you can't respond fast enough.
            </p>
            <p className="text-xl text-white/70">
              Our AI handles leads, books appointments, and follows up with prospects automatically.
              You get more customers without working more hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton className="inline-block">
              <ButtonLink to="/strategy-call">
                Get More Customers on Autopilot <ChevronRight className="ml-2 h-5 w-5" />
              </ButtonLink>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatsCard value={250} suffix="+" label="Businesses Helped" />
            <StatsCard value={98} suffix="%" label="Happy Customers" />
            <StatsCard value={2} suffix="x" label="More Leads Generated" />
            <StatsCard value={500} suffix="K+" label="Leads Captured" />
          </div>
        </div>
      </section>

      {/* Testimonial Logo Scroll Section */}
      <TestimonialLogoScroll />

      {/* What We Build Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How We Help You Get More Customers</h2>
            <p className="text-xl text-white/70">
              We build AI systems that do the work you don't have time for.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="block group">
                <div className="group-hover:scale-105 transition-transform duration-300">
                  <ServiceCard 
                    Icon={service.Icon}
                    title={service.title}
                    description={service.description}
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-white/70 mb-8">
              Stop working harder. Start working smarter.
            </p>
            <ButtonLink to="/strategy-call">
              See How We Can Help Your Business <ChevronRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Why ThynkNext Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Why Choose ThynkNext?</h2>
            <p className="text-xl mb-4">Because cookie-cutter solutions don't work.</p>
            <p className="text-xl mb-12">
              We build custom AI systems specifically for your business.
            </p>
            <div className="space-y-6 text-lg text-white/80">
              <p>
                Every business is different. That's why we don't use templates.
                We build everything from scratch to fit exactly how your business works.
              </p>
              <p>
                The result? AI that actually helps you make more money instead of just looking fancy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Call Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get More Customers?</h2>
          <p className="text-xl text-white/80 mb-8">Let's talk about your business.</p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-white/80 mb-8">
              Book a free call and we'll show you exactly how AI can help your specific business
              get more leads, save time, and make more money.
            </p>
            <p className="text-lg text-white/80 mb-12">
              No sales pitch. Just a real conversation about growing your business.
            </p>
          </div>
          <ButtonLink to="/strategy-call">
            Book Your Free Call Now <ChevronRight className="ml-2 h-5 w-5" />
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}

export default Home;