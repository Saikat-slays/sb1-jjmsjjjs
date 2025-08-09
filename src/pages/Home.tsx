import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, LineChart, MessageSquare, Rocket, Shield, Users, ChevronRight, Zap, Camera, Database } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ServiceCard } from '@/components/ui/service-card';
import { CyclingTypewriter } from '@/components/ui/cycling-typewriter';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { StatsCard } from '@/components/ui/stats-card';
import { TestimonialLogoScroll } from '@/components/ui/testimonial-logo-scroll';
import { FadeIn } from '@/components/ui/fade-in';

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

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              See how we've helped Fortune 500 companies transform their operations with AI
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Solution Case Study */}
            <FadeIn>
              <Link to="/data-solution" className="block group">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center mb-6">
                    <Database className="h-12 w-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-black">$350M Data Intelligence Revolution</h3>
                      <p className="text-blue-600 font-semibold">Fortune 500 DTC Brand</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    How we transformed 24-hour data delays into 10-second insights, processing 400,000+ rows 
                    in real-time and generating $350M in revenue impact.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">24h → 10s</div>
                      <div className="text-gray-600 text-sm">Query Speed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">400K</div>
                      <div className="text-gray-600 text-sm">Data Rows</div>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Read Full Case Study <ChevronRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* AI Visuals Case Study */}
            <FadeIn>
              <Link to="/ai-visuals" className="block group">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center mb-6">
                    <Camera className="h-12 w-12 text-purple-600 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-black">AI Visuals Replace Costly Photoshoots</h3>
                      <p className="text-purple-600 font-semibold">Same $350M DTC Brand</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    How we eliminated expensive photoshoots and delivered pixel-perfect product visuals 
                    in 48 hours with CEO-approved quality: "I love those, Saikat."
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">48h</div>
                      <div className="text-gray-600 text-sm">Asset Delivery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">90%</div>
                      <div className="text-gray-600 text-sm">Cost Reduction</div>
                    </div>
                  </div>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Read Full Case Study <ChevronRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </FadeIn>
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