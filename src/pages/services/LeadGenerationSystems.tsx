import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, CheckCircle, ArrowRight, Target, Users, TrendingUp, Shield, Zap, Filter, Database } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { FadeIn } from '@/components/ui/fade-in';
import { ServiceCard } from '@/components/ui/service-card';

function LeadGenerationSystems() {
  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  const features = [
    {
      Icon: Target,
      title: "Multi-Channel Lead Capture",
      description: "Capture leads from website, social media, ads, and offline sources into one unified system."
    },
    {
      Icon: Filter,
      title: "Intelligent Lead Scoring",
      description: "AI automatically scores and prioritizes leads based on behavior, demographics, and buying signals."
    },
    {
      Icon: Database,
      title: "Automated Nurture Sequences",
      description: "Personalized email and SMS campaigns that guide prospects through your sales funnel."
    },
    {
      Icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time dashboards showing lead quality, conversion rates, and revenue attribution."
    }
  ];

  const benefits = [
    "Generate 300% more qualified leads from existing traffic",
    "Reduce cost per lead by 60% through optimization",
    "Increase lead-to-customer conversion by 45%",
    "Automate 90% of lead nurturing activities",
    "Track ROI down to the individual lead source",
    "Scale lead generation without increasing ad spend"
  ];

  const leadSources = [
    {
      source: "Website Optimization",
      description: "Smart forms, exit-intent popups, and content upgrades",
      impact: "2-3x more leads from same traffic"
    },
    {
      source: "Social Media Automation",
      description: "LinkedIn, Facebook, and Instagram lead generation",
      impact: "500+ new leads monthly"
    },
    {
      source: "Content Marketing",
      description: "SEO-optimized content that attracts and converts",
      impact: "Organic traffic growth of 200%"
    },
    {
      source: "Email Marketing",
      description: "Automated sequences and behavioral triggers",
      impact: "40% higher email conversion rates"
    },
    {
      source: "Paid Advertising",
      description: "Optimized landing pages and ad campaigns",
      impact: "50% lower cost per acquisition"
    },
    {
      source: "Referral Programs",
      description: "Automated referral tracking and rewards",
      impact: "25% of new leads from referrals"
    }
  ];

  const useCases = [
    {
      industry: "SaaS Companies",
      challenge: "High customer acquisition costs and long sales cycles",
      solution: "Multi-touch lead nurturing with product demos, free trials, and educational content",
      result: "40% reduction in CAC, 60% faster sales cycle"
    },
    {
      industry: "Professional Services",
      challenge: "Difficulty demonstrating value before engagement",
      solution: "Authority-building content, case studies, and automated consultation booking",
      result: "5x increase in consultation requests, 80% higher close rate"
    },
    {
      industry: "E-commerce Brands",
      challenge: "Low conversion rates and high cart abandonment",
      solution: "Behavioral triggers, abandoned cart recovery, and personalized product recommendations",
      result: "35% increase in conversion rate, 50% reduction in cart abandonment"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TypewriterHeading
              text="Turn Your Website Into a Lead Generation Machine"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <p className="text-2xl text-white/80 mb-8">
              Stop hoping for leads. Start engineering them.
            </p>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              Our lead generation systems don't just capture contact information—they identify 
              high-intent prospects, nurture them with precision, and deliver sales-ready leads 
              to your team automatically.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ButtonLink to="/strategy-call">
                Build Your Lead Generation Engine <ArrowRight className="ml-2 h-5 w-5" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-black text-center mb-12">
                The Lead Generation Crisis Every Business Faces
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-red-700 mb-6">What's Broken</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>98% of website visitors leave without converting</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Lead quality is inconsistent and unpredictable</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Sales team wastes time on unqualified prospects</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>No clear attribution from marketing spend to revenue</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Leads go cold while waiting for follow-up</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-green-700 mb-6">What's Possible</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Every visitor is tracked, scored, and nurtured</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Only sales-ready leads reach your team</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Automated nurturing converts cold leads to hot prospects</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Complete visibility into what drives revenue</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Instant follow-up maintains momentum</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              A Complete Lead Generation Ecosystem
            </h2>
            <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
              We don't just build lead capture forms. We engineer complete systems that 
              attract, qualify, and convert prospects at scale.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <ServiceCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Sources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-12">
              Multiple Lead Sources, One Unified System
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadSources.map((source, index) => (
              <FadeIn key={index}>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-black mb-3">{source.source}</h3>
                  <p className="text-gray-600 mb-4">{source.description}</p>
                  <div className="text-primary font-semibold">{source.impact}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Measurable Results You Can Bank On
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <FadeIn key={index}>
                  <div className="flex items-center p-6 bg-white rounded-xl">
                    <CheckCircle className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-16">
              Proven Results Across Industries
            </h2>
          </FadeIn>
          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <FadeIn key={index}>
                <div className="bg-accent-dark rounded-2xl p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4">{useCase.industry}</h3>
                      <h4 className="font-semibold text-black mb-2">The Challenge</h4>
                      <p className="text-gray-600">{useCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Our Solution</h4>
                      <p className="text-gray-600">{useCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">The Result</h4>
                      <p className="text-primary font-bold text-lg">{useCase.result}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Built for Scale and Performance
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">System Components</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Lead Tracking & Attribution</span>
                        <p className="text-white/70">Track every touchpoint from first visit to closed deal</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Behavioral Triggers</span>
                        <p className="text-white/70">Automated actions based on user behavior patterns</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Lead Scoring Algorithm</span>
                        <p className="text-white/70">AI-powered scoring based on 50+ data points</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Database className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">CRM Integration</span>
                        <p className="text-white/70">Seamless sync with Salesforce, HubSpot, Pipedrive</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Analytics Dashboard</h3>
                  <div className="bg-white p-6 rounded-xl">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">2,847</div>
                        <div className="text-gray-600">Leads This Month</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">34%</div>
                        <div className="text-gray-600">Conversion Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">$127</div>
                        <div className="text-gray-600">Cost Per Lead</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">4.2x</div>
                        <div className="text-gray-600">ROI</div>
                      </div>
                    </div>
                    <div className="text-center text-gray-600">
                      Real-time performance tracking
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-12">
              From Setup to Scale in 30 Days
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-8">
            <FadeIn>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-black mb-2">Audit & Strategy</h3>
                <p className="text-gray-600">Analyze current lead flow and identify opportunities</p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-black mb-2">System Build</h3>
                <p className="text-gray-600">Custom development and integration setup</p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-black mb-2">Launch & Test</h3>
                <p className="text-gray-600">Deploy system and optimize based on initial data</p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-bold text-black mb-2">Scale & Optimize</h3>
                <p className="text-gray-600">Continuous improvement and expansion</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Stop Leaving Money on the Table
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Every day without a proper lead generation system is revenue lost forever. 
            Let's build a system that turns your website into a 24/7 sales machine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink to="/strategy-call">
              Build Your Lead Generation System <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
          <p className="text-white/60 mt-6">
            Free lead audit • Custom system design • 30-day implementation
          </p>
        </div>
      </section>
    </div>
  );
}

export default LeadGenerationSystems;