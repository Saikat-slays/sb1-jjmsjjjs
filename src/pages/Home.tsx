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
      title: "24/7 Customer Support for Your Fitness Brand",
      description: "AI chatbots that answer product questions, help with sizing, and capture leads while your customers shop around the clock.",
      link: "/services/bespoke-ai-chatbots"
    },
    {
      Icon: Zap,
      title: "Automated Personal Training Consultations",
      description: "AI voice agents that qualify fitness goals, book training sessions, and follow up with potential clients automatically.",
      link: "/services/ai-voice-agents"
    },
    {
      Icon: LineChart,
      title: "Convert Browsers Into Buyers",
      description: "Smart systems that identify high-intent shoppers and guide them to purchase your fitness products or e-commerce items.",
      link: "/services/lead-generation-systems"
    },
    {
      Icon: MessageSquare,
      title: "Personalized Fitness Journey Messages",
      description: "Send thousands of personalized messages to customers about their fitness goals and product recommendations.",
      link: "/services/personalized-outreach"
    },
    {
      Icon: Users,
      title: "Automated Fitness Content & Product Showcases",
      description: "AI creates and posts workout content, product features, and customer transformations across all social platforms.",
      link: "/services/social-media-management"
    },
    {
      Icon: Shield,
      title: "Streamline Your E-Commerce Operations",
      description: "Automate inventory management, order processing, and customer follow-ups so you can focus on scaling your brand.",
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
            We build AI systems that help fitness and e-commerce brands scale globally while you focus on what matters most.
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-white/70 mb-4">
              Stop losing customers to slow responses and manual processes.
            </p>
            <p className="text-xl text-white/70">
              Our AI handles customer inquiries, processes orders, and nurtures leads automatically.
              Scale your fitness or e-commerce brand without the operational headaches.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton className="inline-block">
              <ButtonLink to="/strategy-call">
                Scale Your Brand with AI <ChevronRight className="ml-2 h-5 w-5" />
              </ButtonLink>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatsCard value={150} suffix="+" label="Fitness & E-Commerce Brands" />
            <StatsCard value={98} suffix="%" label="Customer Satisfaction" />
            <StatsCard value={3} suffix="x" label="Revenue Growth" />
            <StatsCard value={2} suffix="M+" label="Customer Interactions Automated" />
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-4">
              Real Results from Fitness & E-Commerce Brands
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              See how we've helped fitness and e-commerce brands scale globally with AI automation
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
                      <p className="text-blue-600 font-semibold">Global Fitness E-Commerce Brand</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    How we transformed a global fitness brand's data chaos into real-time insights, processing 400,000+ customer interactions 
                    and generating $350M in revenue through personalized fitness recommendations.
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
                      <p className="text-purple-600 font-semibold">Global Fitness Equipment Brand</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    How we eliminated expensive fitness equipment photoshoots and delivered pixel-perfect product visuals 
                    in 48 hours for global marketing campaigns across 15 countries.
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
            <h2 className="text-4xl font-bold text-white mb-4">How We Help Fitness & E-Commerce Brands Scale</h2>
            <p className="text-xl text-white/70">
              We build AI systems that handle the complex operations of global fitness and e-commerce brands.
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
              Stop managing operations manually. Start scaling globally with AI.
            </p>
            <ButtonLink to="/strategy-call">
              Scale Your Brand with AI <ChevronRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Why ThynkNext Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Why Fitness & E-Commerce Brands Choose ThynkNext?</h2>
            <p className="text-xl mb-4">Because generic automation doesn't understand your industry.</p>
            <p className="text-xl mb-12">
              We build custom AI systems specifically for fitness and e-commerce operations.
            </p>
            <div className="space-y-6 text-lg text-white/80">
              <p>
                Every fitness and e-commerce brand has unique challenges. That's why we don't use templates.
                We build everything from scratch to fit your specific customer journey and product catalog.
              </p>
              <p>
                The result? AI that understands fitness goals, product recommendations, and e-commerce flows that actually drive sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Call Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Scale Your Brand Globally?</h2>
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