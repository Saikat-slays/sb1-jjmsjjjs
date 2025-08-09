import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, CheckCircle, ArrowRight, Clock, Users, TrendingUp, Shield, Zap, MessageSquare, BarChart3 } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { FadeIn } from '@/components/ui/fade-in';
import { ServiceCard } from '@/components/ui/service-card';

function BespokeAIChatbots() {
  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  const features = [
    {
      Icon: MessageSquare,
      title: "Intelligent Conversation Flow",
      description: "Your chatbot doesn't just answer questions—it guides conversations toward conversions with surgical precision."
    },
    {
      Icon: Users,
      title: "Smart Lead Qualification",
      description: "Automatically identifies high-intent prospects and routes them to your sales team while they're hot."
    },
    {
      Icon: Zap,
      title: "Instant Live Handoff",
      description: "Seamlessly transfers complex queries to human agents with full conversation context—no frustrating repeats."
    },
    {
      Icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track every interaction, conversion, and revenue opportunity with detailed performance dashboards."
    }
  ];

  const benefits = [
    "Convert 40% more website visitors into qualified leads",
    "Reduce response time from hours to seconds",
    "Handle 80% of customer queries without human intervention",
    "Capture leads 24/7, even when your team is sleeping",
    "Increase customer satisfaction by 60% with instant responses",
    "Scale customer support without hiring additional staff"
  ];

  const useCases = [
    {
      industry: "Interior Design Studios",
      challenge: "Visitors browse portfolios but leave without inquiring",
      solution: "AI chatbot qualifies design preferences, budget, and timeline, then books consultation calls automatically",
      result: "3x increase in qualified consultation bookings"
    },
    {
      industry: "Solar Installation Companies",
      challenge: "Complex technical questions overwhelm basic contact forms",
      solution: "Intelligent bot handles technical queries, calculates savings estimates, and schedules site assessments",
      result: "50% reduction in unqualified leads, 2x faster sales cycle"
    },
    {
      industry: "E-commerce Brands",
      challenge: "Cart abandonment and product questions slow conversions",
      solution: "Proactive chatbot offers assistance, answers product questions, and provides personalized recommendations",
      result: "25% reduction in cart abandonment, 35% increase in average order value"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TypewriterHeading
              text="Stop Losing Leads While You Sleep"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <p className="text-2xl text-white/80 mb-8">
              Your website visitors are ready to buy. But they're leaving because no one's there to help them.
            </p>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              Our bespoke AI chatbots don't just answer questions—they qualify prospects, handle objections, 
              and convert visitors into customers 24/7. While your competitors sleep, you're closing deals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ButtonLink to="/strategy-call">
                Get Your Custom Chatbot Strategy <ArrowRight className="ml-2 h-5 w-5" />
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
                The Hidden Revenue Leak in Your Business
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-red-700 mb-6">What's Happening Right Now</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>97% of website visitors leave without taking action</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Qualified prospects wait hours for responses and buy elsewhere</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Your team spends 60% of time answering the same basic questions</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>International visitors convert at 50% lower rates due to time zones</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-green-700 mb-6">What Could Be Happening</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Every visitor gets instant, personalized assistance</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Qualified leads are captured and nurtured automatically</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Your team focuses on closing deals, not answering FAQs</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Revenue flows in 24/7 from global markets</span>
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
              Not Just a Chatbot. Your Digital Sales Representative.
            </h2>
            <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
              Every chatbot we build is custom-engineered for your specific business model, 
              customer journey, and conversion goals.
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
                The Results Speak for Themselves
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
              Real Businesses. Real Results.
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
                Built for Performance, Not Just Conversation
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Advanced Capabilities</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold">Multi-language Support</span>
                        <p className="text-gray-600">Serve global customers in their native language</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold">CRM Integration</span>
                        <p className="text-gray-600">Automatically sync leads to your existing systems</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold">Appointment Scheduling</span>
                        <p className="text-gray-600">Book meetings directly through chat interface</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold">Behavioral Triggers</span>
                        <p className="text-gray-600">Proactive engagement based on user actions</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Integration Ecosystem</h3>
                  <div className="bg-accent-dark p-6 rounded-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <span className="font-semibold text-black">WhatsApp</span>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <span className="font-semibold text-black">Instagram</span>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <span className="font-semibold text-black">Facebook</span>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <span className="font-semibold text-black">Telegram</span>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <span className="font-semibold text-black">Slack</span>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <span className="font-semibold text-black">Email</span>
                      </div>
                    </div>
                  </div>
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
            Stop Losing Revenue to Slow Response Times
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Every minute you wait is revenue walking out the door. Let's build an AI chatbot that 
            converts visitors into customers while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink to="/strategy-call">
              Get Your Custom Chatbot Strategy <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
          <p className="text-white/60 mt-6">
            Free consultation • Custom solution design • No obligation
          </p>
        </div>
      </section>
    </div>
  );
}

export default BespokeAIChatbots;