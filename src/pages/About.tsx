import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Globe, Code, Users } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { NeuralNetwork } from '@/components/ui/neural-network';
import { AnimatedGradientBorder } from '@/components/ui/animated-gradient-border';

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
            text="We Engineer the Infrastructure Behind Modern Business Growth"
            className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
          />
          <p className="text-xl text-white/70 text-center max-w-3xl mx-auto">
            At ThynkNext, we don't chase trends.
            We build systems that outlast them.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Mission</h2>
              <p className="text-white/70 mb-8">
                ThynkNext exists to eliminate complexity—and weaponize intelligence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Strategic Architecture</h3>
                    <p className="text-white/70">Systems built from scratch, around your model, market, and momentum.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Performance Focus</h3>
                    <p className="text-white/70">Every solution engineered for measurable business impact.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Code className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Zero-Template Policy</h3>
                    <p className="text-white/70">Every project starts from scratch, built specifically for you.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] w-full">
              <AnimatedGradientBorder className="absolute inset-0">
                <div className="w-full h-full bg-charcoal/50 backdrop-blur-sm rounded-lg p-4">
                  <NeuralNetwork />
                </div>
              </AnimatedGradientBorder>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">What We Stand For</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Bespoke &gt; Prebuilt</h3>
              <p className="text-white/70">
                Every solution is built from the ground up. You won't find templates here.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Precision &gt; Hype</h3>
              <p className="text-white/70">
                We focus on outputs that move the needle. That means measurable results—not fluff dashboards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Partnership &gt; Transaction</h3>
              <p className="text-white/70">
                We're not a vendor. We're your AI engineering partner. And we only work with companies ready to move.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Performance &gt; Promises</h3>
              <p className="text-white/70">
                No buzzwords. No recycled strategies. Just custom-built systems that produce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why "We" Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Why "We"?</h2>
            <div className="space-y-6 text-white/70">
              <p>
                ThynkNext is built to feel like a full-stack AI firm operating inside your company—without the bloat.
                While we move lean, our execution reflects the depth, systems thinking, and technical capability of a much larger operation.
              </p>
              <p>
                That's by design.
              </p>
              <p>
                You'll never feel like you're working with freelancers.
                You'll feel like you're working with engineers who treat your business like a machine worth optimizing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* India-First Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">For the India-First, World-Class Builders</h2>
            <div className="space-y-6 text-white/70">
              <p>
                We're proud to build from India.
                Not as an outsourcing shop.
                But as a home base for innovation—where fast-growing businesses are hungry for performance, not theory.
              </p>
              <p>
                Whether you're running festival campaigns in October, scaling a solar install operation, or pushing your next ecommerce product drop—our systems are designed to win in real-world Indian markets and global scale-ups alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">ThynkNext doesn't just automate.</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            We help you build something that feels irreplicable.
            That starts with a 1-on-1 strategy call.
          </p>
          <ButtonLink to="/strategy-call">
            Book Your Strategy Call <ChevronRight className="ml-2 h-5 w-5" />
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}

export default About;