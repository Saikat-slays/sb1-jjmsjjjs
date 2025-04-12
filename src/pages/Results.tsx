import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUpRight, Bot, LineChart, Users, Zap } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';

function Results() {
  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <TypewriterHeading
            text="Proof of Performance"
            className="text-4xl md:text-5xl font-bold text-black text-center mb-8"
          />
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We don't do demos. We deliver revenue.
            Every system we ship is handcrafted, measurable, and built to solve the exact problem keeping our clients from scale.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-accent-dark py-20">
        <div className="container mx-auto px-6">
          {/* Interior Design Case Study */}
          <div className="bg-white rounded-2xl overflow-hidden mb-12 shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-black">Luxury Interior Design Firm</h2>
                    <p className="text-secondary">Mumbai, India</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                    <p className="text-secondary">
                      Struggling to convert website visitors into qualified leads and manage customer inquiries efficiently during peak festival seasons.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Solution</h3>
                    <p className="text-secondary">
                      Implemented an AI chatbot with live handoff and an automated lead nurturing system, integrated with their existing CRM.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Results</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-secondary">
                        <ArrowUpRight className="h-5 w-5 text-primary mr-2" />
                        2X increase in qualified leads
                      </li>
                      <li className="flex items-center text-secondary">
                        <ArrowUpRight className="h-5 w-5 text-primary mr-2" />
                        70% reduction in response time
                      </li>
                      <li className="flex items-center text-secondary">
                        <ArrowUpRight className="h-5 w-5 text-primary mr-2" />
                        30% higher conversion rate
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-accent-dark p-8 md:p-12 flex items-center">
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-primary/10 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Bot className="h-24 w-24 text-primary animate-rainbow" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Energy Utility Case Study */}
          <div className="bg-white rounded-2xl overflow-hidden mb-12 shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-black">Renewable Energy Provider</h2>
                    <p className="text-secondary">Delhi, India</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                    <p className="text-secondary">
                      Needed to scale customer acquisition and automate support for their rapidly growing solar installation business.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Solution</h3>
                    <p className="text-secondary">
                      Deployed an AI-powered lead generation system and automated customer support infrastructure.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Results</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-secondary">
                        <ArrowUpRight className="h-5 w-5 text-primary mr-2" />
                        3X increase in qualified leads
                      </li>
                      <li className="flex items-center text-secondary">
                        <ArrowUpRight className="h-5 w-5 text-primary mr-2" />
                        85% automation of support queries
                      </li>
                      <li className="flex items-center text-secondary">
                        <ArrowUpRight className="h-5 w-5 text-primary mr-2" />
                        50% reduction in customer acquisition cost
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-accent-dark p-8 md:p-12 flex items-center">
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-primary/10 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LineChart className="h-24 w-24 text-primary animate-rainbow" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* E-commerce Case Study */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-black">D2C Fashion Brand</h2>
                    <p className="text-secondary">Bangalore, India</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                    <p className="text-secondary">
                      Wanted to scale personalized customer outreach and automate post-purchase engagement during festival seasons.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Solution</h3>
                    <p className="text-secondary">
                      Implemented AI-driven personalized messaging system and automated customer engagement platform.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Results</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-secondary">
                        <ArrowUpRight className="h-5 w-5 text-primary mr-2" />
                        40% increase in customer engagement
                      </li>
                      <li className="flex items-center text-secondary">
                        <ArrowUpRight className="h-5 w-5 text-primary mr-2" />
                        25% higher repeat purchase rate
                      </li>
                      <li className="flex items-center text-secondary">
                        <ArrowUpRight className="h-5 w-5 text-primary mr-2" />
                        60% improvement in customer satisfaction
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-accent-dark p-8 md:p-12 flex items-center">
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-primary/10 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-24 w-24 text-primary animate-rainbow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Build Your Success Story</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join our growing list of successful clients and transform your business with custom AI solutions
          </p>
          <ButtonLink to="/strategy-call">
            Schedule Your Free Strategy Call <ChevronRight className="ml-2 h-5 w-5" />
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}

export default Results;