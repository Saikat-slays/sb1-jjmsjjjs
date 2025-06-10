import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight, Cpu, Users, TrendingUp, Zap, Database, Settings, Network } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { FadeIn } from '@/components/ui/fade-in';
import { ServiceCard } from '@/components/ui/service-card';
import { AnimatedCounter } from '@/components/ui/animated-counter';

function AutomationInfrastructure() {
  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  const features = [
    {
      Icon: Network,
      title: "System Integration",
      description: "Connect all your business tools and platforms into one unified, intelligent ecosystem."
    },
    {
      Icon: Cpu,
      title: "Process Automation",
      description: "Automate complex workflows that span multiple departments and systems."
    },
    {
      Icon: Database,
      title: "Data Orchestration",
      description: "Intelligent data flow between systems with real-time synchronization and validation."
    },
    {
      Icon: Settings,
      title: "Custom Workflows",
      description: "Build unique automation sequences tailored to your specific business processes."
    }
  ];

  const benefits = [
    "Reduce manual work by 80% across all departments",
    "Eliminate data silos and improve decision-making",
    "Scale operations without proportional staff increases",
    "Reduce human error by 95% in routine processes",
    "Increase operational efficiency by 300%",
    "Free up 40+ hours per week for strategic work"
  ];

  const automationTypes = [
    {
      type: "Sales Automation",
      description: "End-to-end sales process automation",
      processes: ["Lead qualification", "Proposal generation", "Contract management", "Follow-up sequences"],
      impact: "50% faster sales cycle, 200% more qualified leads"
    },
    {
      type: "Marketing Automation",
      description: "Complete marketing funnel automation",
      processes: ["Campaign management", "Lead scoring", "Content distribution", "Performance tracking"],
      impact: "300% increase in marketing qualified leads"
    },
    {
      type: "Operations Automation",
      description: "Streamlined operational workflows",
      processes: ["Inventory management", "Order processing", "Quality control", "Reporting"],
      impact: "60% reduction in operational costs"
    },
    {
      type: "Customer Service Automation",
      description: "Intelligent customer support systems",
      processes: ["Ticket routing", "Response automation", "Escalation management", "Satisfaction tracking"],
      impact: "80% faster resolution times, 90% customer satisfaction"
    },
    {
      type: "Financial Automation",
      description: "Automated financial processes",
      processes: ["Invoice generation", "Payment processing", "Expense tracking", "Financial reporting"],
      impact: "75% reduction in accounting workload"
    },
    {
      type: "HR Automation",
      description: "Human resources workflow automation",
      processes: ["Recruitment screening", "Onboarding", "Performance tracking", "Payroll processing"],
      impact: "50% faster hiring process, 90% employee satisfaction"
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      challenge: "Manual processes causing delays and quality issues across production line",
      solution: "End-to-end automation from order intake to shipping, with quality control and inventory management",
      result: "40% increase in production efficiency, 60% reduction in defects"
    },
    {
      industry: "Healthcare",
      challenge: "Patient data scattered across multiple systems, causing delays in care",
      solution: "Unified patient data platform with automated scheduling, billing, and care coordination",
      result: "30% faster patient processing, 95% data accuracy improvement"
    },
    {
      industry: "Financial Services",
      challenge: "Compliance reporting taking weeks of manual work each month",
      solution: "Automated compliance monitoring, reporting, and risk assessment across all client accounts",
      result: "90% reduction in compliance workload, 100% accuracy in reporting"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TypewriterHeading
              text="Transform Your Business Into an Intelligent Machine"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <p className="text-2xl text-white/80 mb-8">
              Stop running a business. Start engineering one.
            </p>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              Our automation infrastructure doesn't just connect your tools—it creates an intelligent 
              nervous system for your business that thinks, learns, and optimizes itself while you 
              focus on strategy and growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ButtonLink to="/strategy-call">
                Engineer Your Business Infrastructure <ArrowRight className="ml-2 h-5 w-5" />
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
                The Infrastructure Crisis Holding You Back
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-red-700 mb-6">The Chaos You're Living</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Data trapped in silos across <AnimatedCounter value={20} className="font-bold" />+ different tools</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Manual processes eating <AnimatedCounter value={60} suffix="%" className="font-bold" /> of your team's time</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Critical information lost between departments</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Scaling requires hiring exponentially more people</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Human errors compound into major business problems</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-green-700 mb-6">The Intelligent Infrastructure</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>All systems connected in one intelligent network</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Processes run automatically without human intervention</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Real-time data flows seamlessly between departments</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Business scales without proportional staff increases</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>AI prevents errors before they happen</span>
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
              Beyond Integration. True Intelligence.
            </h2>
            <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
              We don't just connect your tools. We create an intelligent infrastructure that 
              learns, adapts, and optimizes your entire business operation.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <ServiceCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-12">
              Complete Business Automation
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              From sales to operations, we automate every critical business process 
              to create a self-running organization.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationTypes.map((automation, index) => (
              <FadeIn key={index}>
                <div className="bg-accent-dark p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-black mb-3">{automation.type}</h3>
                  <p className="text-gray-600 mb-4">{automation.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2">Key Processes:</h4>
                    <ul className="space-y-1">
                      {automation.processes.map((process, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle className="h-3 w-3 text-primary mr-2" />
                          {process}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <span className="font-semibold text-primary text-sm">Impact: </span>
                    <span className="text-gray-700 text-sm">{automation.impact}</span>
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
                The Transformation You'll Experience
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
              Infrastructure Transformations
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

      {/* Technical Architecture */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Enterprise-Grade Architecture
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Core Components</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Security Layer</span>
                        <p className="text-white/70">Enterprise-grade security with encryption and access controls</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Database className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Data Layer</span>
                        <p className="text-white/70">Unified data warehouse with real-time synchronization</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Cpu className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Processing Engine</span>
                        <p className="text-white/70">AI-powered workflow engine with machine learning</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Network className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Integration Layer</span>
                        <p className="text-white/70">API-first architecture connecting all business systems</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">System Capabilities</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Real-time Processing</h4>
                      <p className="text-gray-600">Process millions of data points per second</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Scalable Architecture</h4>
                      <p className="text-gray-600">Auto-scales based on business demand</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Fault Tolerance</h4>
                      <p className="text-gray-600"><AnimatedCounter value={99.9} decimals={1} />% uptime with automatic failover</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Monitoring & Alerts</h4>
                      <p className="text-gray-600">Proactive monitoring with intelligent alerts</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-12">
              From Chaos to Intelligence in 90 Days
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-8">
            <FadeIn>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-black mb-2">Discovery & Mapping</h3>
                <p className="text-gray-600">Audit current systems and map data flows</p>
                <div className="text-primary font-semibold mt-2">Week 1-2</div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-black mb-2">Infrastructure Build</h3>
                <p className="text-gray-600">Develop core automation infrastructure</p>
                <div className="text-primary font-semibold mt-2">Week 3-8</div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-black mb-2">Integration & Testing</h3>
                <p className="text-gray-600">Connect systems and test all workflows</p>
                <div className="text-primary font-semibold mt-2">Week 9-11</div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-bold text-black mb-2">Launch & Optimize</h3>
                <p className="text-gray-600">Go live and continuous optimization</p>
                <div className="text-primary font-semibold mt-2">Week 12+</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white mb-8">
                Calculate Your Infrastructure ROI
              </h2>
              <p className="text-xl text-white/70 mb-12">
                See how much time and money you'll save with intelligent automation
              </p>
            </FadeIn>
            <FadeIn>
              <div className="bg-white p-8 rounded-2xl">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter value={40} />
                    </div>
                    <div className="text-gray-600">Hours saved per week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      $<AnimatedCounter value={150} />K
                    </div>
                    <div className="text-gray-600">Annual cost savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter value={300} />%
                    </div>
                    <div className="text-gray-600">Efficiency increase</div>
                  </div>
                </div>
                <div className="bg-accent-dark p-6 rounded-xl">
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">Conservative estimate:</span> Most businesses see 
                    <span className="text-primary font-bold"> <AnimatedCounter value={5} />x ROI within the first year</span> from 
                    automation infrastructure implementation.
                  </p>
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
            Ready to Engineer Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Stop running your business manually.  Let's build an intelligent infrastructure 
            that runs itself while you focus on strategy, growth, and the future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink to="/strategy-call">
              Engineer Your Infrastructure <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
          <p className="text-white/60 mt-6">
            Free infrastructure audit • Custom architecture design • 90-day implementation
          </p>
        </div>
      </section>
    </div>
  );
}

export default AutomationInfrastructure;