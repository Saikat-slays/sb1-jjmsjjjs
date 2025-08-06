import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, Cog, Rocket, Shield, CheckCircle, X, Target, Clock, Users } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { FadeIn } from '@/components/ui/fade-in';

function HowWeWork() {
  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  const processSteps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Strategy Kickoff",
      subtitle: "15-minute precision audit",
      description: "We surgically analyze your current workflows, customer journey, and operational gaps. You'll leave with a clear blueprint—even if we don't move forward.",
      deliverables: [
        "Complete workflow audit",
        "Speed & scale gap analysis", 
        "Growth bottleneck identification",
        "Custom automation blueprint"
      ],
      timeline: "15 minutes"
    },
    {
      number: "02", 
      icon: Cog,
      title: "Deep Dive & System Design",
      subtitle: "Architecture that thinks ahead",
      description: "We map critical flows, identify AI opportunities, and architect a custom system tailored to your operations—not cookie-cutter solutions.",
      deliverables: [
        "Critical flow mapping",
        "AI integration strategy",
        "Custom system architecture",
        "Revenue unlock analysis"
      ],
      timeline: "3-5 days"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Build & Deploy",
      subtitle: "AI that converts, automations that think",
      description: "We build your complete system from front to back. AI agents that don't just chat—they convert. Automations that don't just run—they adapt and improve.",
      deliverables: [
        "Full system development",
        "AI agent implementation",
        "Smart automation flows",
        "Performance optimization"
      ],
      timeline: "2-4 weeks"
    },
    {
      number: "04",
      icon: Shield,
      title: "Test, Train & Handover",
      subtitle: "Battle-tested and team-ready",
      description: "Every system goes through real-time testing, fail-safe integration, and complete team training. You can take it from here—or keep us for ongoing support.",
      deliverables: [
        "Real-time system testing",
        "Fail-safe integration",
        "Team training & knowledge transfer",
        "Complete documentation"
      ],
      timeline: "1 week"
    }
  ];

  const pricingFeatures = [
    "Setup Fee: $1.5K - $3K+ (complexity-based)",
    "Optional Support: $500/month for hosting & updates",
    "Unlimited revisions until perfect",
    "100% ownership—no subscriptions or license traps"
  ];

  const riskReversalFeatures = [
    "50% upfront, 50% after approval",
    "Unlimited revisions until exactly right",
    "10% discount for testimonials",
    "Zero long-term contracts"
  ];

  const whatWeDont = [
    "Half-baked chatbots",
    "Cookie-cutter solutions", 
    "Broken flow fixes",
    "Software licenses—we install outcomes"
  ];

  const whatWeDo = [
    "Automated infrastructure for fast-moving brands",
    "AI systems that convert and scale",
    "Custom solutions built for your operations",
    "Outcomes, not software subscriptions"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TypewriterHeading
              text="Simple. Effective. Built for Fitness & E-Commerce Scale."
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <p className="text-2xl text-white/80 mb-8">
              We don't just install AI into your fitness or e-commerce brand...
            </p>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              We surgically insert automation into your customer journey and operations, 
              so no customer inquiry, order, or opportunity slips through the cracks.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-16">
              How We Transform Fitness & E-Commerce Brands
            </h2>
          </FadeIn>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <FadeIn key={index}>
                <div className="bg-accent-dark rounded-2xl p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-6">
                          <span className="text-white font-bold text-xl">{step.number}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-black">{step.title}</h3>
                          <p className="text-primary font-semibold">{step.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-3" />
                            <span className="text-gray-700">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="bg-white p-6 rounded-xl text-center">
                        <step.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <div className="text-3xl font-bold text-primary mb-2">{step.timeline}</div>
                        <div className="text-gray-600">Timeline</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white text-center mb-4">
                We're Not Your Average Automation Provider
              </h2>
              <p className="text-xl text-white/70 text-center mb-16">
                No long contracts. No surprise fees. Just clean business.
              </p>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn>
                <div className="bg-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-black mb-6">Investment Structure</h3>
                  <div className="space-y-4">
                    {pricingFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn>
                <div className="bg-primary p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-6">Risk Reversal Guarantee</h3>
                  <div className="space-y-4">
                    {riskReversalFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Shield className="h-6 w-6 text-white mt-1 mr-3" />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-white/10 rounded-lg">
                    <p className="text-white/80 text-center font-semibold">
                      Your risk? Zero.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do/Don't Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-16">
              We're Not Your Average AI Agency
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <FadeIn>
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-2xl">
                <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
                  <X className="h-8 w-8 mr-3" />
                  What We Don't Build
                </h3>
                <div className="space-y-4">
                  {whatWeDont.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mt-1 mr-3" />
                      <span className="text-red-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-100 rounded-lg">
                  <p className="text-red-700 font-semibold">
                    We're not a generic automation agency. We specialize in fitness and e-commerce.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-r-2xl">
                <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                  <CheckCircle className="h-8 w-8 mr-3" />
                  What We Do
                </h3>
                <div className="space-y-4">
                  {whatWeDo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                      <span className="text-green-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <p className="text-green-700 font-semibold">
                    We build automated infrastructure behind fitness and e-commerce brands that scale globally.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Ready to Move Fast Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white mb-8">
               Ready to Scale Your Brand?
              </h2>
              <p className="text-xl text-white/80 mb-8">
               If you're a fitness or e-commerce brand founder tired of:
              </p>
            </FadeIn>
            
            <FadeIn>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 p-6 rounded-xl">
                  <Clock className="h-8 w-8 text-white mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Manual Customer Support</h3>
                  <p className="text-white/70 text-sm">Losing customers across time zones due to delayed responses</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <Users className="h-8 w-8 text-white mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Complex Global Operations</h3>
                  <p className="text-white/70 text-sm">Team overwhelmed managing international customers and orders</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <Target className="h-8 w-8 text-white mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Scaling Bottlenecks</h3>
                  <p className="text-white/70 text-sm">Growth limited by manual processes and operational complexity</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <p className="text-xl text-white/80 mb-12">
                ...and ready to scale globally like the top fitness and e-commerce brands—let's talk.
              </p>
              <ButtonLink to="/strategy-call">
                Scale Your Brand Today <ChevronRight className="ml-2 h-5 w-5" />
              </ButtonLink>
              <p className="text-white/60 mt-6">
                Zero fluff. Just a clear look at how to scale your fitness or e-commerce brand.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowWeWork;