import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Zap, Users, TrendingUp, Clock, CheckCircle, BarChart3, Brain, Target } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { FadeIn } from '@/components/ui/fade-in';
import { AnimatedNumber } from '@/components/ui/animated-number';

function DataSolutionShowcase() {
  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  const metrics = [
    { value: 350, prefix: '$', suffix: 'M', label: 'Revenue Impact', description: 'Generated through data-driven decisions' },
    { value: 24, suffix: 'h → 10s', label: 'Query Speed', description: 'From hours to seconds for complex analysis' },
    { value: 400, suffix: 'K', label: 'Data Rows', description: 'Processed in real-time queries' },
    { value: 95, suffix: '%', label: 'Time Saved', description: 'Reduction in analyst dependency' }
  ];

  const beforeAfterData = [
    {
      category: 'Data Access Speed',
      before: '24 hours for complex queries',
      after: '10 seconds with natural language',
      improvement: '99.99% faster'
    },
    {
      category: 'Team Efficiency',
      before: 'Data analysts bottleneck',
      after: 'Self-service for all teams',
      improvement: '500% productivity gain'
    },
    {
      category: 'Decision Making',
      before: 'Weekly data reviews',
      after: 'Real-time insights',
      improvement: 'Instant strategic pivots'
    },
    {
      category: 'Resource Allocation',
      before: '80% time on data prep',
      after: '80% time on strategy',
      improvement: 'Complete role transformation'
    }
  ];

  const keyBenefits = [
    {
      Icon: Zap,
      title: 'Instant Data Accessibility',
      description: 'Transform complex SQL queries into simple conversations. Ask questions in plain English and get immediate answers.',
      impact: '10-second response time for any data query'
    },
    {
      Icon: Users,
      title: 'Non-Technical User Empowerment',
      description: 'Marketing, sales, and operations teams access data independently without technical barriers.',
      impact: '100% of teams now data-driven'
    },
    {
      Icon: TrendingUp,
      title: 'Cross-Departmental Efficiency',
      description: 'Break down data silos. Every department gets the insights they need when they need them.',
      impact: '500% increase in data-driven decisions'
    },
    {
      Icon: Target,
      title: 'Reduced Analyst Dependency',
      description: 'Free your data analysts from routine queries to focus on strategic analysis and insights.',
      impact: '95% reduction in routine query requests'
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
                <BarChart3 className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-semibold">Case Study: Enterprise DTC Transformation</span>
              </div>
            </FadeIn>
            <TypewriterHeading
              text="How We Generated $350M in Revenue with AI-Powered Data Intelligence"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <FadeIn>
              <p className="text-2xl text-white/80 mb-8">
                From 24-hour data delays to 10-second insights: The complete transformation of enterprise decision-making
              </p>
              <p className="text-xl text-white/70 mb-12 max-w-4xl mx-auto">
                Discover how our AI data solution turned a Fortune 500 DTC brand's data bottleneck into their biggest competitive advantage, 
                processing 400,000+ rows in real-time and empowering every team member to make data-driven decisions instantly.
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
              The Numbers That Changed Everything
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              When data becomes instantly accessible, businesses transform. Here's the quantifiable impact 
              of our AI-powered data intelligence solution.
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
              The Complete Transformation Story
            </h2>
          </FadeIn>
          
          {/* Challenge */}
          <div className="mb-20">
            <FadeIn>
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-2xl mb-8">
                <h3 className="text-3xl font-bold text-red-700 mb-6 flex items-center">
                  <Target className="h-8 w-8 mr-3" />
                  The Challenge: Data Paralysis at Scale
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-red-600 mb-4">The Problem</h4>
                    <ul className="space-y-3 text-red-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">•</span>
                        <span>Marketing teams waited 24+ hours for campaign performance data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">•</span>
                        <span>Data analysts became bottlenecks, overwhelmed with routine queries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">•</span>
                        <span>Critical business decisions delayed by data accessibility issues</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">•</span>
                        <span>400,000+ rows of valuable data locked behind technical barriers</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-red-600 mb-4">Business Impact</h4>
                    <div className="bg-white p-6 rounded-xl">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-red-600 mb-2">$50M</div>
                        <div className="text-gray-600">Annual revenue at risk due to delayed decisions</div>
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
                  <Brain className="h-8 w-8 mr-3" />
                  Our Solution: AI-Powered Data Intelligence
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">Technology Stack</h4>
                    <ul className="space-y-3 text-blue-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                        <span>Natural Language to SQL AI engine</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                        <span>Real-time PostgreSQL integration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                        <span>Intelligent query optimization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                        <span>Role-based access controls</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                        <span>Automated insight generation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">Implementation</h4>
                    <div className="bg-white p-6 rounded-xl">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Data Integration</span>
                          <span className="text-blue-600 font-semibold">Week 1-2</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">AI Training</span>
                          <span className="text-blue-600 font-semibold">Week 3-4</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">User Training</span>
                          <span className="text-blue-600 font-semibold">Week 5</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Full Deployment</span>
                          <span className="text-blue-600 font-semibold">Week 6</span>
                        </div>
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
                  The Results: $350M Revenue Impact
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-green-600 mb-4">Immediate Impact</h4>
                    <ul className="space-y-3 text-green-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                        <span>10-second query responses</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                        <span>100% team data accessibility</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                        <span>Real-time decision making</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-600 mb-4">6-Month Results</h4>
                    <ul className="space-y-3 text-green-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                        <span>40% increase in campaign ROI</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                        <span>60% faster product launches</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                        <span>95% reduction in data requests</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-600 mb-4">Annual Impact</h4>
                    <div className="bg-white p-6 rounded-xl text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">$350M</div>
                      <div className="text-gray-600">Additional revenue generated</div>
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
              Before vs. After: The Complete Transformation
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
                      <h4 className="font-semibold text-red-600 mb-2">Before</h4>
                      <p className="text-red-700">{item.before}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl">
                      <h4 className="font-semibold text-green-600 mb-2">After</h4>
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
              Why This Solution Changes Everything
            </h2>
            <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
              Beyond the numbers, here's how our AI data solution fundamentally transforms 
              how enterprises operate and make decisions.
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

      {/* Client Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary to-gray-800 p-12 rounded-2xl text-white text-center">
                <div className="mb-8">
                  <div className="text-6xl text-white/20 mb-4">"</div>
                  <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
                    This AI data solution didn't just improve our efficiency—it completely transformed 
                    how we operate. Every team member now has the power of a data analyst at their fingertips. 
                    The $350M revenue impact speaks for itself.
                  </blockquote>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">CTO</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-xl">Chief Technology Officer</div>
                    <div className="text-white/80">Fortune 500 DTC Brand</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Data Flow Visualization */}
      <section className="py-20 bg-accent-dark">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-16">
              How It Works: From Question to Insight in Seconds
            </h2>
          </FadeIn>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4 items-center">
              <FadeIn>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-bold text-black mb-2">Ask in Plain English</h3>
                  <p className="text-gray-600 text-sm">"Show me last month's top performing campaigns"</p>
                </div>
              </FadeIn>
              <div className="hidden md:block text-center">
                <ArrowRight className="h-8 w-8 text-primary mx-auto" />
              </div>
              <FadeIn>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-bold text-black mb-2">AI Processes</h3>
                  <p className="text-gray-600 text-sm">Natural language converted to optimized SQL</p>
                </div>
              </FadeIn>
              <div className="hidden md:block text-center">
                <ArrowRight className="h-8 w-8 text-primary mx-auto" />
              </div>
              <FadeIn>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-bold text-black mb-2">Instant Results</h3>
                  <p className="text-gray-600 text-sm">Visual insights delivered in 10 seconds</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Key Takeaways for Enterprise Leaders
            </h2>
          </FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn>
                <div className="bg-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-black mb-6">Strategic Implications</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">Data accessibility directly impacts revenue generation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">AI democratizes data analysis across all departments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">Real-time insights enable agile business decisions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">Technical barriers limit business potential</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-black mb-6">Implementation Success Factors</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">Executive sponsorship ensures adoption</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">Comprehensive training drives user engagement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">Gradual rollout minimizes disruption</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3" />
                      <span className="text-gray-700">Continuous optimization maximizes ROI</span>
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
            Ready to Transform Your Data Operations?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Join the ranks of Fortune 500 companies leveraging AI to turn data into their biggest competitive advantage. 
            Let's discuss how our solution can generate similar results for your enterprise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <ButtonLink to="/strategy-call">
              Schedule Your Data Transformation Call <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Clock className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Free Consultation</h3>
              <p className="text-white/70 text-sm">45-minute data assessment and strategy session</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Database className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Custom Demo</h3>
              <p className="text-white/70 text-sm">See the solution working with your actual data</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <TrendingUp className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">ROI Projection</h3>
              <p className="text-white/70 text-sm">Detailed analysis of potential revenue impact</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataSolutionShowcase;