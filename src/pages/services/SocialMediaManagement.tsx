import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, CheckCircle, ArrowRight, Calendar, Users, TrendingUp, Shield, Zap, Camera, BarChart3 } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { FadeIn } from '@/components/ui/fade-in';
import { ServiceCard } from '@/components/ui/service-card';

function SocialMediaManagement() {
  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  const features = [
    {
      Icon: Camera,
      title: "AI Content Creation",
      description: "Generate engaging posts, captions, and visuals that match your brand voice and audience preferences."
    },
    {
      Icon: Calendar,
      title: "Smart Scheduling",
      description: "Optimal posting times based on audience behavior analysis and platform algorithms."
    },
    {
      Icon: Users,
      title: "Automated Engagement",
      description: "Respond to comments, messages, and mentions with contextually appropriate replies."
    },
    {
      Icon: BarChart3,
      title: "Performance Analytics",
      description: "Track engagement, reach, conversions, and ROI across all social media platforms."
    }
  ];

  const benefits = [
    "Increase social media engagement by 400% with AI-optimized content",
    "Save 20+ hours per week on content creation and posting",
    "Grow follower count by 300% with consistent, quality content",
    "Generate 50% more leads from social media channels",
    "Maintain 24/7 social media presence across all platforms",
    "Reduce social media management costs by 70%"
  ];

  const platforms = [
    {
      platform: "Instagram",
      description: "Visual storytelling and brand building",
      features: ["Story automation", "Reel creation", "Hashtag optimization", "Influencer outreach"],
      results: "Average 250% increase in engagement"
    },
    {
      platform: "LinkedIn",
      description: "B2B networking and thought leadership",
      features: ["Professional content", "Connection automation", "Lead generation", "Company page management"],
      results: "5x more qualified B2B leads"
    },
    {
      platform: "Facebook",
      description: "Community building and customer service",
      features: ["Page management", "Group engagement", "Ad optimization", "Messenger automation"],
      results: "60% improvement in customer satisfaction"
    },
    {
      platform: "Twitter/X",
      description: "Real-time engagement and brand voice",
      features: ["Tweet scheduling", "Trend monitoring", "Community management", "Crisis response"],
      results: "300% increase in brand mentions"
    },
    {
      platform: "YouTube",
      description: "Video content and education",
      features: ["Video optimization", "Thumbnail creation", "Description writing", "Comment management"],
      results: "200% growth in subscriber base"
    },
    {
      platform: "TikTok",
      description: "Viral content and younger demographics",
      features: ["Trend analysis", "Video creation", "Hashtag strategy", "Influencer partnerships"],
      results: "500% increase in brand awareness"
    }
  ];

  const useCases = [
    {
      industry: "Fashion & Beauty",
      challenge: "Keeping up with fast-moving trends and maintaining consistent posting",
      solution: "AI-powered trend analysis, automated content creation, and influencer collaboration management",
      result: "400% increase in engagement, 200% growth in online sales"
    },
    {
      industry: "Professional Services",
      challenge: "Building thought leadership and generating B2B leads through social media",
      solution: "LinkedIn automation, industry-specific content creation, and lead nurturing sequences",
      result: "300% increase in qualified leads, 150% growth in consultation bookings"
    },
    {
      industry: "Restaurants & Food",
      challenge: "Showcasing menu items and driving foot traffic through social media",
      solution: "Visual content automation, local engagement, and event promotion across platforms",
      result: "250% increase in reservations, 180% growth in delivery orders"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TypewriterHeading
              text="Your Brand, Everywhere, All the Time"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <p className="text-2xl text-white/80 mb-8">
              While you sleep, your AI social media manager is building your brand.
            </p>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              Our AI social media management systems don't just post content—they create engaging 
              posts, respond to your audience, analyze trends, and optimize performance across all 
              platforms to grow your brand 24/7.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ButtonLink to="/strategy-call">
                Automate Your Social Media <ArrowRight className="ml-2 h-5 w-5" />
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
                The Social Media Burnout Every Business Faces
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-red-700 mb-6">The Current Struggle</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Posting consistently across platforms is overwhelming</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Creating fresh content daily drains creativity</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Responding to comments and messages takes hours</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Tracking what works across platforms is impossible</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Hiring social media managers costs $50K+ annually</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-green-700 mb-6">The AI Solution</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Automated posting across all platforms simultaneously</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>AI generates unlimited fresh content ideas</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Instant responses maintain audience engagement</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Comprehensive analytics show what drives results</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Professional management at a fraction of the cost</span>
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
              More Than Automation. True AI Management.
            </h2>
            <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
              Our AI doesn't just schedule posts. It understands your brand, analyzes your audience, 
              and creates content that drives real engagement and conversions.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <ServiceCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-12">
              Dominate Every Platform
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Each platform has its own algorithm, audience, and best practices. 
              Our AI masters them all to maximize your reach and engagement.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <FadeIn key={index}>
                <div className="bg-accent-dark p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-black mb-3">{platform.platform}</h3>
                  <p className="text-gray-600 mb-4">{platform.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle className="h-3 w-3 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <span className="font-semibold text-primary text-sm">Results: </span>
                    <span className="text-gray-700 text-sm">{platform.results}</span>
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
                Results That Transform Your Business
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
              Success Across Every Industry
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

      {/* Content Creation Process */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                How AI Creates Your Content
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Content Intelligence</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <TrendingUp className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Trend Analysis</span>
                        <p className="text-white/70">Monitors trending topics and hashtags in real-time</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Audience Insights</span>
                        <p className="text-white/70">Analyzes what content your audience engages with most</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Brand Voice</span>
                        <p className="text-white/70">Maintains consistent tone and messaging across all posts</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Performance Learning</span>
                        <p className="text-white/70">Improves content quality based on engagement data</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Content Types</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Educational Posts</h4>
                      <p className="text-gray-600">Industry insights, tips, and how-to content</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Promotional Content</h4>
                      <p className="text-gray-600">Product showcases and special offers</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Behind-the-Scenes</h4>
                      <p className="text-gray-600">Company culture and team highlights</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">User-Generated Content</h4>
                      <p className="text-gray-600">Customer testimonials and reviews</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Interactive Content</h4>
                      <p className="text-gray-600">Polls, Q&As, and engagement posts</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-black mb-8">
                Complete Performance Visibility
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Track every metric that matters with comprehensive analytics and reporting.
              </p>
            </FadeIn>
            <FadeIn>
              <div className="bg-accent-dark p-8 rounded-2xl">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">2.4M</div>
                    <div className="text-gray-600">Total Reach</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">156K</div>
                    <div className="text-gray-600">Engagements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">8.7%</div>
                    <div className="text-gray-600">Engagement Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">847</div>
                    <div className="text-gray-600">New Followers</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-black mb-2">Top Performing Content</h4>
                    <p className="text-gray-600 text-sm">Educational posts drive 40% more engagement</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-black mb-2">Best Posting Times</h4>
                    <p className="text-gray-600 text-sm">Tuesday 2PM and Friday 6PM show highest reach</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-black mb-2">Audience Growth</h4>
                    <p className="text-gray-600 text-sm">25% month-over-month follower increase</p>
                  </div>
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
            Ready to Dominate Social Media?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Stop struggling with social media management. Let our AI take over while you focus 
            on growing your business. Your brand will be everywhere, engaging everyone, all the time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink to="/strategy-call">
              Automate Your Social Media <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
          <p className="text-white/60 mt-6">
            Free social media audit • Custom strategy • 30-day trial
          </p>
        </div>
      </section>
    </div>
  );
}

export default SocialMediaManagement;