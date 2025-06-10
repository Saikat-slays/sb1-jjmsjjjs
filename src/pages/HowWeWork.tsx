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
            text="How We Help You Get More Customers (Risk-Free)"
            className="text-4xl md:text-5xl font-bold text-black text-center mb-8"
          />
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            We make it simple and safe for you. Pay half now, half when you're happy with the results.
            No surprises, no risks.
          </p>
        </div>
      </section>

      {/* Risk Reversal Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why It's Risk-Free for You</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Pay Half Now, Half Later</h3>
                <p className="text-white/80">
                  Only pay the rest when you're completely happy with your AI system.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Unlimited Changes</h3>
                <p className="text-white/80">
                  We'll keep improving it until it's exactly what you want.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">10% Off First Project</h3>
                <p className="text-white/80">
                  Save money on your first project when you share your success story.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">You Own Everything</h3>
                <p className="text-white/80">
                  No monthly fees. No subscriptions. It's yours forever.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">How We Work Together</h2>
          
          <div className="space-y-16">
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-primary mr-4">01</span>
                  <h3 className="text-2xl font-bold text-black">We Talk About Your Business</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We learn about your business, your customers, and what you want to achieve. 
                  No tech jargon, just a real conversation about growing your business.
                </p>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <h4 className="font-semibold text-black mb-4">You get:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Clear plan for your AI system
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Honest pricing with no hidden costs
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Timeline for when it'll be ready
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-primary mr-4">02</span>
                  <h3 className="text-2xl font-bold text-black">You Pay Half, We Start Building</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Pay 50% to get started. This shows we're both serious about making this work.
                  The other 50% is only due when you're happy with the final result.
                </p>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <h4 className="font-semibold text-black mb-4">Why this works:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      You're protected - only pay the rest when satisfied
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      We're committed to delivering great results
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      No time-wasters, just serious business owners
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-primary mr-4">03</span>
                  <h3 className="text-2xl font-bold text-black">We Build and Show You How It Works</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We build your AI system and show you exactly how it works with real examples.
                  Don't like something? We'll change it until you love it.
                </p>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <h4 className="font-semibold text-black mb-4">You get:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Working AI system you can test and try
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Live demo showing real results
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Unlimited changes until you're happy
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Proof that your investment is working
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-primary mr-4">04</span>
                  <h3 className="text-2xl font-bold text-black">You Pay the Rest and Own Everything</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Love your new AI system? Pay the remaining 50% and it's yours forever.
                  We'll set it up and show you how to use it.
                </p>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      You own 100% of the system
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      No monthly fees or hidden costs
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Complete setup and training included
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Full support to get you started
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-primary mr-4">05</span>
                  <h3 className="text-2xl font-bold text-black">Ongoing Support (Optional)</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Want us to keep improving your system? We offer optional monthly support
                  to add new features and keep everything running smoothly.
                </p>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <h4 className="font-semibold text-black mb-4">Optional support includes:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Priority help when you need it
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Regular updates and improvements
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      New features as your business grows
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
          <h2 className="text-3xl font-bold text-black text-center mb-8">Why This Works for You</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            You're protected every step of the way. We only succeed when you succeed.
            That's why our customers trust us and recommend us to others.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get More Customers?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Let's talk about your business. No pressure, no sales pitch.
            Just a real conversation about how AI can help you grow.
          </p>
          <ButtonLink to="/strategy-call">
            Book Your Free Call <ChevronRight className="ml-2 h-5 w-5" />
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}

export default HowWeWork;