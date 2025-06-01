import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <TypewriterHeading
            text="How We Work: A Transparent, Risk-Free Partnership"
            className="text-4xl md:text-5xl font-bold text-black text-center mb-8"
          />
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            At ThynkNext, we believe that exceptional AI systems deserve exceptional delivery. That's why we've designed a risk-free, transparent process that ensures your business gets results without the guesswork. Here's exactly how we build, deliver, and support your AI-powered solution.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Process</h2>
          
          <div className="space-y-16">
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-primary mr-4">01</span>
                  <h3 className="text-2xl font-bold text-black">Discovery & Alignment</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We start with a deep dive into your business — your goals, your challenges, and your opportunities. No jargon. No fluff. Just a straightforward conversation to ensure we're aligned on what success looks like.
                </p>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <h4 className="font-semibold text-black mb-4">What you get:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Personalized consultation
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Clear project scope and deliverables
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Transparent pricing
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-primary mr-4">02</span>
                  <h3 className="text-2xl font-bold text-black">50% Upfront — Your Commitment, Our Commitment</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Once we're aligned, we ask for 50% upfront — a sign of mutual commitment. This covers the initial design, architecture, and development phases.
                </p>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <h4 className="font-semibold text-black mb-4">Why?</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      It protects both of us from time-wasters
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      It ensures we're fully invested in your project's success
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-primary mr-4">03</span>
                  <h3 className="text-2xl font-bold text-black">Build & Demonstrate</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We build your complete AI solution — tailored, branded, and production-ready. You'll see your system in action on our secure development server, complete with real data, real workflows, and real results.
                </p>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <h4 className="font-semibold text-black mb-4">You get:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      A fully functional, demo-ready AI system
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Live walkthrough of features and capabilities
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Confidence that your investment is working
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-primary mr-4">04</span>
                  <h3 className="text-2xl font-bold text-black">Final Payment — Then Handover</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Once you're fully satisfied with the system, you pay the remaining 50% — then we deploy the system to your production environment and hand over all documentation, credentials, and support details.
                </p>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      You stay in control
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      No surprises
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      No hidden fees
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-primary mr-4">05</span>
                  <h3 className="text-2xl font-bold text-black">Ongoing Partnership & Support</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  After launch, we offer a retainer plan that keeps your system sharp, relevant, and evolving with your business. Whether it's new features, integrations, or improvements, we're here to ensure your AI investment keeps delivering ROI.
                </p>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <h4 className="font-semibold text-black mb-4">What's included:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Regular updates and enhancements
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Feature expansions on request
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why This Approach Works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Why This Approach Works</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We believe in trust, transparency, and results. By sharing risk, we prove that your success is our priority. This is how we've built long-term partnerships with forward-thinking brands — and why we're confident we can help you win.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Let's build something extraordinary together. Book your free consultation now and discover how AI can revolutionize your business.
          </p>
          <ButtonLink to="/strategy-call">
            Book Your Strategy Call <ChevronRight className="ml-2 h-5 w-5" />
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}

export default HowWeWork;