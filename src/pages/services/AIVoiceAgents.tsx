import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, Clock, Users, TrendingUp, Shield, Zap, Calendar, Headphones } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { FadeIn } from '@/components/ui/fade-in';
import { ServiceCard } from '@/components/ui/service-card';
import { AnimatedCounter } from '@/components/ui/animated-counter';

function AIVoiceAgents() {
  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  const features = [
    {
      Icon: Phone,
      title: "Natural Voice Conversations",
      description: "AI agents that sound human, understand context, and handle complex conversations with emotional intelligence."
    },
    {
      Icon: Calendar,
      title: "Automated Appointment Setting",
      description: "Books meetings, confirms appointments, and handles rescheduling without human intervention."
    },
    {
      Icon: Headphones,
      title: "Intelligent Call Routing",
      description: "Qualifies callers and routes them to the right department or person based on their needs."
    },
    {
      Icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track call outcomes, conversion rates, and optimize scripts for maximum effectiveness."
    }
  ];

  const benefits = [
    "Handle 500+ outbound calls per day without fatigue",
    "Reduce appointment no-shows by 70% with automated confirmations",
    "Increase lead qualification accuracy by 85%",
    "Scale your sales team's reach by 10x without hiring",
    "Convert 40% more prospects with consistent messaging",
    "Operate across all time zones simultaneously"
  ];

  const useCases = [
    {
      industry: "Real Estate Agencies",
      challenge: "Agents spend 60% of time on unqualified leads and appointment setting",
      solution: "AI voice agents qualify leads, schedule property viewings, and follow up with prospects automatically",
      result: "300% increase in qualified appointments, agents focus on closing deals"
    },
    {
      industry: "Healthcare Practices",
      challenge: "Staff overwhelmed with appointment bookings and patient follow-ups",
      solution: "Voice AI handles appointment scheduling, insurance verification, and post-treatment follow-ups",
      result: "50% reduction in administrative costs, 90% patient satisfaction rate"
    },
    {
      industry: "Financial Services",
      challenge: "High-value prospects need immediate response but advisors are in meetings",
      solution: "AI agents qualify financial needs, schedule consultations, and provide initial guidance",
      result: "2x faster response time, 60% increase in consultation bookings"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TypewriterHeading
              text="Your Sales Team Just Got 10x Bigger"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <p className="text-2xl text-white/80 mb-8">
              While your competitors make 10 calls a day, your AI voice agents make 500.
            </p>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              Our AI voice agents don't just make calls—they qualify prospects, book appointments, 
              handle objections, and follow up with the persistence of your best salesperson. 
              24/7. Without breaks. Without bad days.
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
                The Outreach Bottleneck Killing Your Growth
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-red-700 mb-6">Your Current Reality</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Your team can only call <AnimatedCounter value={20} className="font-bold" />-<AnimatedCounter value={30} className="font-bold" /> prospects per day</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span><AnimatedCounter value={80} suffix="%" className="font-bold" /> of calls go to voicemail with no follow-up</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Inconsistent messaging hurts conversion rates</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>High-value prospects slip through the cracks</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Hiring and training new sales reps costs $<AnimatedCounter value={75} className="font-bold" />K+ each</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-green-700 mb-6">With AI Voice Agents</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span><AnimatedCounter value={500} className="font-bold" />+ personalized calls per day, per agent</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Intelligent voicemail detection and callback scheduling</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Perfect pitch delivery every single time</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Automatic lead scoring and priority routing</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Scale infinitely without hiring costs</span>
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
              Beyond Human Limitations. Built for Scale.
            </h2>
            <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
              Our AI voice agents combine the best of human conversation skills with 
              machine precision and unlimited scalability.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <ServiceCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-black text-center mb-12">
                The Numbers Don't Lie
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <FadeIn key={index}>
                  <div className="flex items-center p-6 bg-accent-dark rounded-xl">
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
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Industries We're Revolutionizing
            </h2>
          </FadeIn>
          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <FadeIn key={index}>
                <div className="bg-white rounded-2xl p-8 md:p-12">
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

      {/* Technical Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-black text-center mb-12">
                Advanced Voice AI Technology
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Core Capabilities</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold">Emotion Recognition</span>
                        <p className="text-gray-600">Adapts tone and approach based on caller's emotional state</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold">Real-time Learning</span>
                        <p className="text-gray-600">Improves performance with every conversation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold">Objection Handling</span>
                        <p className="text-gray-600">Pre-programmed responses to common objections</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold">Multi-language Support</span>
                        <p className="text-gray-600">Communicate in <AnimatedCounter value={50} className="font-bold" />+ languages fluently</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Call Types We Handle</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-accent-dark rounded-lg">
                      <h4 className="font-semibold mb-2">Lead Qualification</h4>
                      <p className="text-gray-600">Identify decision-makers and budget authority</p>
                    </div>
                    <div className="p-4 bg-accent-dark rounded-lg">
                      <h4 className="font-semibold mb-2">Appointment Setting</h4>
                      <p className="text-gray-600">Schedule meetings with qualified prospects</p>
                    </div>
                    <div className="p-4 bg-accent-dark rounded-lg">
                      <h4 className="font-semibold mb-2">Follow-up Campaigns</h4>
                      <p className="text-gray-600">Nurture leads through the sales funnel</p>
                    </div>
                    <div className="p-4 bg-accent-dark rounded-lg">
                      <h4 className="font-semibold mb-2">Customer Surveys</h4>
                      <p className="text-gray-600">Gather feedback and testimonials</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white mb-8">
                Calculate Your ROI
              </h2>
              <p className="text-xl text-white/70 mb-12">
                See how much revenue you could generate with AI voice agents
              </p>
            </FadeIn>
            <FadeIn>
              <div className="bg-white p-8 rounded-2xl">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter value={500} />
                    </div>
                    <div className="text-gray-600">Calls per day</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter value={15} suffix="%" />
                    </div>
                    <div className="text-gray-600">Conversion rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter value={75} />
                    </div>
                    <div className="text-gray-600">New leads daily</div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-accent-dark rounded-xl">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">Conservative estimate:</span> If each lead is worth $500, 
                    that's <span className="text-primary font-bold">$<AnimatedCounter value={37500} className="font-bold" /> in new revenue per day</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to 10x Your Outreach Capacity?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Stop limiting your growth to human capacity. Let's build an AI voice agent army 
            that works around the clock to fill your pipeline with qualified prospects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink to="/strategy-call">
              Get Your Voice AI Strategy <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
          <p className="text-white/60 mt-6">
            Free consultation • Custom solution design • ROI guarantee
          </p>
        </div>
      </section>
    </div>
  );
}

export default AIVoiceAgents;