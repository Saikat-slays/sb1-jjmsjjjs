import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, CheckCircle, ArrowRight, Mail, Users, TrendingUp, Shield, Zap, Send, Target } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { FadeIn } from '@/components/ui/fade-in';
import { ServiceCard } from '@/components/ui/service-card';
import { AnimatedCounter } from '@/components/ui/animated-counter';

function PersonalizedOutreach() {
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
      title: "Hyper-Personalized Messaging",
      description: "AI crafts unique messages for each prospect based on their industry, role, company, and behavior."
    },
    {
      Icon: Send,
      title: "Multi-Channel Campaigns",
      description: "Coordinate outreach across email, LinkedIn, WhatsApp, and SMS for maximum reach and impact."
    },
    {
      Icon: Users,
      title: "Behavioral Triggers",
      description: "Automatically adjust messaging based on prospect engagement and response patterns."
    },
    {
      Icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous A/B testing and optimization to improve open rates, response rates, and conversions."
    }
  ];

  const benefits = [
    "Increase email open rates by 300% with personalized subject lines",
    "Achieve 45% response rates on LinkedIn outreach campaigns",
    "Scale personalized outreach to 10,000+ prospects monthly",
    "Reduce time spent on manual outreach by 95%",
    "Generate 5x more qualified meetings from cold outreach",
    "Maintain personal touch while operating at enterprise scale"
  ];

  const channels = [
    {
      channel: "Email Marketing",
      description: "Personalized email sequences with dynamic content",
      features: ["Dynamic subject lines", "Behavioral triggers", "A/B testing", "Deliverability optimization"],
      results: "65% open rates, 15% click-through rates"
    },
    {
      channel: "LinkedIn Outreach",
      description: "Automated LinkedIn connection requests and follow-ups",
      features: ["Profile personalization", "Connection automation", "Message sequences", "InMail campaigns"],
      results: "40% connection acceptance, 25% response rate"
    },
    {
      channel: "WhatsApp Business",
      description: "Direct messaging for high-intent prospects",
      features: ["Rich media messages", "Broadcast lists", "Automated responses", "Click-to-WhatsApp ads"],
      results: "90% open rates, 60% response rates"
    },
    {
      channel: "SMS Marketing",
      description: "Time-sensitive offers and appointment reminders",
      features: ["Personalized messages", "Delivery optimization", "Two-way conversations", "Compliance management"],
      results: "98% open rates, 45% click-through rates"
    }
  ];

  const useCases = [
    {
      industry: "B2B Software",
      challenge: "Low response rates on cold outreach to enterprise prospects",
      solution: "Multi-touch campaigns with company research, pain point identification, and value proposition customization",
      result: "8x increase in qualified demo bookings, 60% shorter sales cycle"
    },
    {
      industry: "Professional Services",
      challenge: "Difficulty reaching decision-makers in target companies",
      solution: "LinkedIn + email sequences with industry-specific case studies and ROI calculators",
      result: "300% increase in consultation requests, 50% higher close rate"
    },
    {
      industry: "E-commerce",
      challenge: "High customer acquisition costs and low repeat purchase rates",
      solution: "Behavioral email campaigns, abandoned cart recovery, and personalized product recommendations",
      result: "40% increase in customer lifetime value, 25% reduction in CAC"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TypewriterHeading
              text="Scale Personal Touch to Enterprise Reach"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <p className="text-2xl text-white/80 mb-8">
              Send 10,000 personalized messages that feel like they were written by your best salesperson.
            </p>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              Our AI-powered outreach systems don't just send mass emails—they research prospects, 
              craft personalized messages, and engage across multiple channels to maximize response 
              rates and drive qualified conversations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ButtonLink to="/strategy-call">
                Scale Your Outreach Today <ArrowRight className="ml-2 h-5 w-5" />
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
                The Outreach Dilemma Every Business Faces
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-red-700 mb-6">The Scale vs. Personal Trap</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Personal outreach gets results but doesn't scale</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Mass emails feel generic and get ignored</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Your team spends <AnimatedCounter value={80} suffix="%" className="font-bold" /> of time on manual research</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Response rates drop as volume increases</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Inconsistent messaging hurts brand reputation</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-green-700 mb-6">The AI-Powered Solution</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Personalized messages at unlimited scale</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>AI researches and crafts unique messages</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Your team focuses on closing qualified prospects</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Higher response rates as volume increases</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Consistent brand voice across all channels</span>
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
              Personalization That Actually Converts
            </h2>
            <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
              Our AI doesn't just insert names into templates. It researches prospects, 
              understands their challenges, and crafts messages that resonate.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <ServiceCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-12">
              Multi-Channel Orchestration
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Reach prospects where they are most active with coordinated campaigns 
              across all major communication channels.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {channels.map((channel, index) => (
              <FadeIn key={index}>
                <div className="bg-accent-dark p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-black mb-4">{channel.channel}</h3>
                  <p className="text-gray-600 mb-6">{channel.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {channel.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <span className="font-semibold text-primary">Typical Results: </span>
                    <span className="text-gray-700">{channel.results}</span>
                  </div>
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
                Results That Speak Louder Than Words
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
              Success Stories Across Industries
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

      {/* Personalization Engine */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                The AI Personalization Engine
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Data Points We Analyze</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Company Intelligence</span>
                        <p className="text-white/70">Industry, size, recent news, funding, growth signals</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Role & Responsibilities</span>
                        <p className="text-white/70">Job title, department, decision-making authority</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Behavioral Signals</span>
                        <p className="text-white/70">Website visits, content engagement, social activity</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Pain Point Identification</span>
                        <p className="text-white/70">Industry challenges, competitive landscape, growth goals</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Message Customization</h3>
                  <div className="bg-white p-6 rounded-xl">
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-black">Subject Line</h4>
                        <p className="text-gray-600">"Quick question about [Company]'s Q4 expansion plans"</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-black">Opening</h4>
                        <p className="text-gray-600">"Hi [Name], I noticed [Company] just raised Series B funding..."</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-black">Value Proposition</h4>
                        <p className="text-gray-600">"We helped [Similar Company] reduce [Specific Pain Point] by <AnimatedCounter value={40} suffix="%" className="font-bold" />..."</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-black">Call to Action</h4>
                        <p className="text-gray-600">"Would you be open to a <AnimatedCounter value={15} className="font-bold" />-minute call next Tuesday?"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Deliverability */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-black mb-8">
                Built for Compliance and Deliverability
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Our systems are designed to maintain high deliverability rates while 
                staying compliant with GDPR, CAN-SPAM, and other regulations.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-black mb-2">Email Deliverability</h3>
                  <p className="text-gray-600"><AnimatedCounter value={95} suffix="%" className="font-bold" />+ inbox placement with proper authentication and reputation management</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-black mb-2">Compliance Management</h3>
                  <p className="text-gray-600">Automatic opt-out handling and consent management across all channels</p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-black mb-2">Performance Monitoring</h3>
                  <p className="text-gray-600">Real-time tracking of delivery rates, engagement metrics, and reputation scores</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Scale Your Personal Touch?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Stop choosing between scale and personalization. Our AI-powered outreach systems 
            deliver both, helping you reach more prospects with messages that actually convert.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink to="/strategy-call">
              Scale Your Outreach Today <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
          <p className="text-white/60 mt-6">
            Free outreach audit • Custom campaign design • Compliance guaranteed
          </p>
        </div>
      </section>
    </div>
  );
}

export default PersonalizedOutreach;