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
            text="We Help Fitness & E-Commerce Brands Scale Globally with AI"
            className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
          />
          <p className="text-xl text-white/70 text-center max-w-3xl mx-auto">
            At ThynkNext, we build AI systems that understand the unique challenges of fitness and e-commerce brands.
            More customers, global reach, automated operations.
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
                Help fitness and e-commerce brands scale globally without losing the personal touch that makes them special.
              </p>
              <div className="space-y-4">
                <div className="flex items-start bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <Target className="h-6 w-6 text-white mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Built for Your Industry</h3>
                    <p className="text-white/70">Custom solutions that understand fitness motivation and e-commerce psychology.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <Globe className="h-6 w-6 text-white mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Global Scale</h3>
                    <p className="text-white/70">Help you reach customers worldwide while maintaining personalized experiences.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <Code className="h-6 w-6 text-white mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Industry-Specific AI</h3>
                    <p className="text-white/70">AI that understands fitness goals, product catalogs, and customer journeys.</p>
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
                  We don't use generic automation templates. 
                  Every system is built specifically for fitness and e-commerce brand requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Fitness & E-Commerce Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Industry-Specific Beats Generic</h3>
              <p className="text-gray-600">
                Fitness and e-commerce have unique needs. Your AI should understand them.
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Revenue Over Features</h3>
              <p className="text-gray-600">
                We care about your sales numbers and customer satisfaction, not tech buzzwords.
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Growth Partnership</h3>
              <p className="text-gray-600">
                We're here to help you scale globally, not just automate locally.
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Scale Over Promises</h3>
              <p className="text-gray-600">
                We build systems that scale your brand globally, not just talk about automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why "We" Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8">Fitness & E-Commerce Expertise</h2>
            <div className="space-y-6 text-white/70">
              <p>
                ThynkNext understands the unique challenges of fitness and e-commerce brands.
                From seasonal demand spikes to personalized fitness recommendations, we've automated it all.
              </p>
              <p>
                We know your industry.
              </p>
              <p>
                You'll never feel like you're working with generic automation providers.
                You'll feel like you have a team that understands fitness motivation and e-commerce conversion psychology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* India-First Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-black mb-8">Global Fitness & E-Commerce Understanding</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                We understand global fitness trends and e-commerce patterns.
                From yoga studios in Mumbai to supplement brands in California, we've automated them all.
              </p>
              <p>
                Whether you're launching a new fitness app, scaling a supplement brand, or managing global e-commerce operations—
                our systems are designed to handle the complexity of modern fitness and retail businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Scale Your Brand Globally?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Let's talk about how AI can help your fitness or e-commerce brand scale globally.
            No sales pitch, just solutions that understand your industry.
          </p>
          <ButtonLink to="/strategy-call">
            Scale Your Brand Today <ChevronRight className="ml-2 h-5 w-5" />
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}

export default About;