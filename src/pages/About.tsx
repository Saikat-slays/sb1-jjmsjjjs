import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Globe, Code, Users } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';

function About() {
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
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <TypewriterHeading
            text="We Help Businesses Get More Customers Without Working More Hours"
            className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
          />
          <p className="text-xl text-white/70 text-center max-w-3xl mx-auto">
            At ThynkNext, we build AI systems that do the work you don't have time for.
            More leads, more customers, less manual work.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/70 mb-8">
                Help business owners stop losing money to slow responses and missed opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <Target className="h-6 w-6 text-white mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Built for Your Business</h3>
                    <p className="text-white/70">Custom solutions that fit exactly how your business works.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <Globe className="h-6 w-6 text-white mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Real Results</h3>
                    <p className="text-white/70">More leads, more customers, more revenue. That's what matters.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <Code className="h-6 w-6 text-white mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">No Cookie-Cutter Solutions</h3>
                    <p className="text-white/70">Everything we build is made specifically for you.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Custom AI That Actually Works</h3>
                <p className="text-gray-600">
                  We don't use templates or one-size-fits-all solutions. 
                  Every system is built from scratch for your specific business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">What We Believe</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Custom Beats Generic</h3>
              <p className="text-gray-600">
                Your business is unique. Your AI should be too.
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Results Over Hype</h3>
              <p className="text-gray-600">
                We care about your bottom line, not fancy buzzwords.
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Partnership Over Sales</h3>
              <p className="text-gray-600">
                We're here to help you succeed, not just sell you something.
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Action Over Promises</h3>
              <p className="text-gray-600">
                We build systems that work, not just talk about what's possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why "We" Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8">Why We Say "We"</h2>
            <div className="space-y-6 text-white/70">
              <p>
                ThynkNext feels like having a full AI team working inside your company.
                We move fast, but our work has the depth and quality of a much larger operation.
              </p>
              <p>
                That's intentional.
              </p>
              <p>
                You'll never feel like you're working with freelancers.
                You'll feel like you have a dedicated team that cares about your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* India-First Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-black mb-8">Built in India, Built for Growth</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                We're proud to build from India.
                Not as a cheap outsourcing option, but as a home base for innovation.
              </p>
              <p>
                Whether you're running Diwali campaigns, scaling a solar business, or launching your next product—
                our systems are designed to work in real Indian markets and scale globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get More Customers?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Let's talk about how AI can help your specific business grow.
            No sales pitch, just real solutions.
          </p>
          <ButtonLink to="/strategy-call">
            Book Your Free Call <ChevronRight className="ml-2 h-5 w-5" />
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}

export default About;