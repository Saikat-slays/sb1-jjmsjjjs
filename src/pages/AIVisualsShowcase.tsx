import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Zap, Users, TrendingUp, Clock, CheckCircle, Image, Palette, Target } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { FadeIn } from '@/components/ui/fade-in';
import { AnimatedNumber } from '@/components/ui/animated-number';

function AIVisualsShowcase() {
  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  const metrics = [
    { value: 350, prefix: '$', suffix: 'M', label: 'Brand Revenue', description: 'Same Fortune 500 DTC brand transformation' },
    { value: 48, suffix: 'h', label: 'Asset Delivery', description: 'From concept to campaign-ready visuals' },
    { value: 20, suffix: '+', label: 'SKUs Covered', description: 'Consistent visuals across product line' },
    { value: 90, suffix: '%', label: 'Cost Reduction', description: 'Compared to traditional photoshoots' }
  ];

  const beforeAfterData = [
    {
      category: 'Production Speed',
      before: 'Weeks of planning and shooting',
      after: '48 hours from brief to assets',
      improvement: '95% faster delivery'
    },
    {
      category: 'Visual Consistency',
      before: 'Variable lighting and quality',
      after: 'Perfect consistency across 20+ SKUs',
      improvement: '100% brand alignment'
    },
    {
      category: 'Production Costs',
      before: 'Millions on shoots, models, studios',
      after: 'Fraction of traditional costs',
      improvement: '90% cost reduction'
    },
    {
      category: 'Creative Flexibility',
      before: 'Limited by physical constraints',
      after: 'Unlimited creative possibilities',
      improvement: 'Infinite variations'
    }
  ];

  const keyBenefits = [
    {
      Icon: Zap,
      title: 'Lightning-Fast Production',
      description: 'Generate photo-realistic product visuals in hours, not weeks. No scheduling, no logistics, just results.',
      impact: 'Campaign-ready assets in under 48 hours'
    },
    {
      Icon: Palette,
      title: 'Flawless Product Integrity',
      description: 'Perfect product labels, accurate packaging, and consistent brand representation in every image.',
      impact: '100% accurate product representation'
    },
    {
      Icon: Users,
      title: 'Unlimited Creative Scenarios',
      description: 'Create diverse model shots, lifestyle scenes, and product contexts without physical limitations.',
      impact: 'Infinite creative possibilities'
    },
    {
      Icon: Target,
      title: 'Massive Cost Savings',
      description: 'Eliminate expensive photoshoots, model fees, studio rentals, and production logistics.',
      impact: '90% reduction in visual production costs'
    }
  ];

  const productionProcess = [
    {
      step: 1,
      title: 'Brief & Requirements',
      description: 'Define product, model preferences, and creative direction',
      duration: '2 hours'
    },
    {
      step: 2,
      title: 'AI Generation',
      description: 'Custom AI creates photo-realistic visuals with perfect product integrity',
      duration: '24 hours'
    },
    {
      step: 3,
      title: 'Quality Review',
      description: 'Ensure flawless product labels and brand consistency',
      duration: '12 hours'
    },
    {
      step: 4,
      title: 'Final Delivery',
      description: 'Campaign-ready assets delivered in multiple formats',
      duration: '12 hours'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Camera className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-semibold">Case Study: Fitness Brand Visual Revolution</span>
              </div>
            </FadeIn>
            <TypewriterHeading
              text="AI-Generated Fitness Product Visuals That Replace Costly Photoshoots"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <FadeIn>
              <p className="text-2xl text-white/80 mb-8">
                How we saved a $350M fitness brand millions while delivering flawless product visuals in 48 hours
              </p>
              <p className="text-xl text-white/70 mb-12 max-w-4xl mx-auto">
                Discover how our custom AI image generation system eliminated expensive fitness equipment photoshoots, 
                delivered pixel-perfect product representation, and created unlimited creative possibilities 
                for a global fitness equipment brand.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-4">
              The Visual Production Revolution
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              When AI replaces traditional fitness equipment photoshoots, brands unlock speed, consistency, and cost savings 
              that transform their entire global marketing strategy.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <FadeIn key={index}>
                <div className="text-center bg-accent-dark p-8 rounded-2xl">
                  <AnimatedNumber
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    className="text-5xl font-bold text-primary mb-4"
                  />
                  <h3 className="text-xl font-bold text-black mb-2">{metric.label}</h3>
                  <p className="text-gray-600">{metric.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              From Photoshoot Chaos to AI Precision
            </h2>
          </FadeIn>
          
          {/* Challenge */}
          <div className="mb-20">
            <FadeIn>
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-2xl mb-8">
                <h3 className="text-3xl font-bold text-red-700 mb-6 flex items-center">
                  <Target className="h-8 w-8 mr-3" />
                  The Challenge: Photoshoot Bottlenecks at Scale
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-red-600 mb-4">The Problem</h4>
                    <ul className="space-y-3 text-red-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">•</span>
                        <span>Fast-scaling DTC brand spending millions on product shoots</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">•</span>
                        <span>Needed scroll-stopping model shots without booking actors, sets, or studios</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">•</span>
                        <span>Previous AI tools produced warped labels, distorted hands, inconsistent lighting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">•</span>
                        <span>Production delays affecting campaign launches and market responsiveness</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-red-600 mb-4">Business Impact</h4>
                    <div className="bg-white p-6 rounded-xl">
                      <div className="text-center mb-4">
                        <div className="text-4xl font-bold text-red-600 mb-2">Millions</div>
                        <div className="text-gray-600">Annual photoshoot costs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">Weeks</div>
                        <div className="text-gray-600">Production delays per campaign</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Solution */}
          <div className="mb-20">
            <FadeIn>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-2xl mb-8">
                <h3 className="text-3xl font-bold text-blue-700 mb-6 flex items-center">
                  <Camera className="h-8 w-8 mr-3" />
                  Our Solution: Custom AI Image Generation System
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">Technology Features</h4>
                    <ul className="space-y-3 text-blue-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                        <span>Photo-realistic model generation with perfect product integrity</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                        <span>Flawless product label visibility and packaging accuracy</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                        <span>Consistent lighting and brand aesthetic across all visuals</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                        <span>On-brand visual consistency across 20+ SKUs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                        <span>Multiple format outputs for various marketing channels</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">Delivery Timeline</h4>
                    <div className="bg-white p-6 rounded-xl">
                      <div className="space-y-4">
                        {productionProcess.map((process, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                {process.step}
                              </div>
                              <span className="text-gray-700">{process.title}</span>
                            </div>
                            <span className="text-blue-600 font-semibold">{process.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Results */}
          <div>
            <FadeIn>
              <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-r-2xl">
                <h3 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                  <TrendingUp className="h-8 w-8 mr-3" />
                  The Results: CEO-Approved Excellence
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-green-600 mb-4">Quality Achievement</h4>
                    <ul className="space-y-3 text-green-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                        <span>Pixel-perfect product representation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                        <span>CEO personal approval: "I love those, Saikat."</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                        <span>Campaign-ready assets in 48 hours</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-600 mb-4">Operational Impact</h4>
                    <ul className="space-y-3 text-green-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                        <span>Eliminated need for live photo shoots</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                        <span>Visual consistency across 20+ SKUs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                        <span>No staging, logistics, or coordination needed</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-600 mb-4">Business Value</h4>
                    <div className="bg-white p-6 rounded-xl text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
                      <div className="text-gray-600 mb-4">Cost Reduction</div>
                      <div className="text-2xl font-bold text-green-600 mb-2">48h</div>
                      <div className="text-gray-600">Delivery Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-16">
              Traditional Photoshoots vs. AI Visual Generation
            </h2>
          </FadeIn>
          <div className="space-y-8">
            {beforeAfterData.map((item, index) => (
              <FadeIn key={index}>
                <div className="bg-accent-dark rounded-2xl p-8">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">{item.category}</h3>
                    </div>
                    <div className="bg-red-50 p-4 rounded-xl">
                      <h4 className="font-semibold text-red-600 mb-2">Traditional Method</h4>
                      <p className="text-red-700">{item.before}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl">
                      <h4 className="font-semibold text-green-600 mb-2">AI Solution</h4>
                      <p className="text-green-700">{item.after}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{item.improvement}</div>
                      <div className="text-gray-600 text-sm">Improvement</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Why AI Visuals Are the Future of Product Marketing
            </h2>
            <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
              Beyond cost savings, our AI visual generation system fundamentally transforms 
              how brands create, iterate, and deploy visual marketing assets.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {keyBenefits.map((benefit, index) => (
              <FadeIn key={index}>
                <div className="bg-white p-8 rounded-2xl">
                  <benefit.Icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-black mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6">{benefit.description}</p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <span className="font-semibold text-primary">Impact: </span>
                    <span className="text-gray-700">{benefit.impact}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Catch Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-gray-800 to-black p-12 rounded-2xl text-white text-center">
                <h2 className="text-4xl font-bold mb-8">The Catch? We Don't Do Half-Baked Platforms.</h2>
                <div className="text-xl leading-relaxed mb-8 space-y-4">
                  <p>
                    They wanted it as a standalone in-house SaaS tool — and we don't do half-baked platforms. 
                    We engineer outcomes, not logins. So we walked away.
                  </p>
                  <p className="text-white/80">
                    But the results are undeniable — and if you're tired of blowing budgets on media 
                    that AI can now create faster, cheaper, and sharper...
                  </p>
                  <p className="text-2xl font-bold text-white">
                    We can do this for your brand too.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-accent-dark">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-12 rounded-2xl text-center">
                <div className="mb-8">
                  <div className="text-6xl text-gray-200 mb-4">"</div>
                  <blockquote className="text-3xl font-light leading-relaxed mb-8 text-black">
                    I love those, Saikat.
                  </blockquote>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">CEO</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-xl text-black">Chief Executive Officer</div>
                    <div className="text-gray-600">$350M Global Fitness Equipment Brand</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Visual Production Process */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              From Brief to Campaign-Ready in 48 Hours
            </h2>
          </FadeIn>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {productionProcess.map((process, index) => (
                <FadeIn key={index}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-2xl">{process.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                    <p className="text-white/70 mb-4">{process.description}</p>
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-white font-semibold">{process.duration}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-12">
              Key Takeaways for Brand Leaders
            </h2>
          </FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn>
                <div className="bg-accent-dark p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-black mb-6">Strategic Implications</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">AI visuals eliminate production bottlenecks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">Speed-to-market becomes a competitive advantage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">Visual consistency drives brand recognition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">Cost savings can be reinvested in growth</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-accent-dark p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-black mb-6">Implementation Success Factors</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">Custom AI training ensures brand accuracy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">Quality control maintains premium standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">Iterative refinement improves output quality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">Integration with existing workflows is crucial</span>
                    </li>
                  </ul>
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
            Ready to Transform Your Visual Production?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Stop blowing budgets on photoshoots. Join the visual revolution and create stunning, 
            on-brand product visuals that convert — faster, cheaper, and better than traditional methods.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <ButtonLink to="/strategy-call">
              Get Your AI Visual Strategy <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Camera className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Free Visual Audit</h3>
              <p className="text-white/70 text-sm">Analyze your current visual production costs and timeline</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Image className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Custom Demo</h3>
              <p className="text-white/70 text-sm">See AI-generated visuals created with your products</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <TrendingUp className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">ROI Calculation</h3>
              <p className="text-white/70 text-sm">Detailed analysis of potential cost savings and efficiency gains</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AIVisualsShowcase;