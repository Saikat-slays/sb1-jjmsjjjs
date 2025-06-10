import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Cpu, Shield, Zap, GitBranch, Terminal, Cloud, ChevronRight, Copy, ExternalLink } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { FadeIn } from '@/components/ui/fade-in';

function DeveloperDocs() {
  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  const architectureComponents = [
    {
      Icon: Database,
      title: "Data Systems",
      description: "Real-time data sync across all your business systems",
      tech: ["PostgreSQL", "Redis", "Vector Databases", "Event Streaming"]
    },
    {
      Icon: Cpu,
      title: "AI Processing",
      description: "Smart AI that learns and improves from every interaction",
      tech: ["OpenAI GPT-4", "Claude", "Custom Models", "Smart Routing"]
    },
    {
      Icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Reliable, fast systems that scale with your business",
      tech: ["Auto-scaling", "99.9% Uptime", "Global CDN", "Load Balancing"]
    },
    {
      Icon: Shield,
      title: "Security",
      description: "Bank-level security to protect your business data",
      tech: ["Encryption", "Access Controls", "Compliance", "Monitoring"]
    }
  ];

  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/api/v1/chatbot/message",
      description: "Send message to AI chatbot and get intelligent response",
      example: `{
  "message": "I need help with pricing",
  "context": {
    "user_id": "user_123",
    "session_id": "sess_456"
  }
}`
    },
    {
      method: "POST",
      endpoint: "/api/v1/leads/qualify",
      description: "Automatically score and qualify incoming leads",
      example: `{
  "contact": {
    "email": "prospect@company.com",
    "company": "TechCorp Inc",
    "role": "CTO"
  },
  "source": "website_form"
}`
    },
    {
      method: "GET",
      endpoint: "/api/v1/analytics/performance",
      description: "Get real-time performance metrics and insights",
      example: `{
  "timeframe": "30d",
  "metrics": ["conversion_rate", "response_time", "satisfaction"]
}`
    }
  ];

  const integrationExamples = [
    {
      title: "Webhook Integration",
      description: "Real-time notifications when important events happen",
      code: `// Webhook setup
const webhook = {
  url: "https://your-domain.com/webhook",
  events: ["lead.created", "message.received", "conversion.completed"],
  authentication: {
    type: "bearer_token",
    token: process.env.WEBHOOK_SECRET
  }
};

// Handle incoming webhooks
app.post('/webhook', (req, res) => {
  const { event, data } = req.body;
  
  switch(event) {
    case 'lead.created':
      await processNewLead(data);
      break;
    case 'message.received':
      await handleIncomingMessage(data);
      break;
  }
  
  res.status(200).json({ received: true });
});`
    },
    {
      title: "CRM Integration",
      description: "Sync leads and customers with your existing CRM",
      code: `// Salesforce integration
const salesforceSync = {
  credentials: {
    clientId: process.env.SF_CLIENT_ID,
    clientSecret: process.env.SF_CLIENT_SECRET,
    username: process.env.SF_USERNAME,
    password: process.env.SF_PASSWORD
  },
  
  syncLead: async (leadData) => {
    const lead = {
      FirstName: leadData.firstName,
      LastName: leadData.lastName,
      Company: leadData.company,
      Email: leadData.email,
      LeadSource: 'AI_Chatbot',
      AI_Score__c: leadData.aiScore
    };
    
    return await sf.sobject('Lead').create(lead);
  }
};`
    },
    {
      title: "Custom AI Training",
      description: "Train AI specifically for your business and industry",
      code: `// Custom model training
const trainingConfig = {
  model_type: "conversational_ai",
  base_model: "gpt-4-turbo",
  training_data: {
    conversations: "./data/customer_conversations.jsonl",
    knowledge_base: "./data/company_knowledge.txt",
    faq_pairs: "./data/faq_dataset.json"
  },
  
  fine_tuning: {
    learning_rate: 0.0001,
    batch_size: 16,
    epochs: 3,
    validation_split: 0.2
  },
  
  deployment: {
    auto_deploy: true,
    fallback_model: "base_model",
    performance_threshold: 0.85
  }
};

// Deploy your custom model
const deployment = await ai.models.train(trainingConfig);`
    }
  ];

  const performanceMetrics = [
    { metric: "Response Time", value: "<100ms", description: "Lightning-fast API responses" },
    { metric: "Uptime", value: "99.9%", description: "Always available when you need it" },
    { metric: "Throughput", value: "10K req/sec", description: "Handles massive traffic spikes" },
    { metric: "Accuracy", value: "94.7%", description: "AI predictions you can trust" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-charcoal py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TypewriterHeading
              text="Technical Documentation for Developers"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <p className="text-2xl text-white/80 mb-8">
              See how our AI systems actually work under the hood.
            </p>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              This is for developers who want to understand the technical architecture, 
              APIs, and integrations that power our AI automation systems.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ButtonLink to="/strategy-call">
                Discuss Technical Requirements <ChevronRight className="ml-2 h-5 w-5" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-4">
              How Our Systems Work
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Built for scale, reliability, and real-time performance. 
              Here's the technical foundation that powers everything.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {architectureComponents.map((component, index) => (
              <FadeIn key={index}>
                <div className="bg-accent-dark p-8 rounded-2xl">
                  <component.Icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-black mb-4">{component.title}</h3>
                  <p className="text-gray-600 mb-6">{component.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {component.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              API Reference
            </h2>
            <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
              RESTful APIs with real-time WebSocket connections and comprehensive 
              SDK libraries for easy integration.
            </p>
          </FadeIn>
          <div className="space-y-8">
            {apiEndpoints.map((endpoint, index) => (
              <FadeIn key={index}>
                <div className="bg-white rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold mr-4 ${
                      endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                      endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono text-gray-800">{endpoint.endpoint}</code>
                    <button className="ml-auto p-2 hover:bg-gray-100 rounded-lg">
                      <Copy className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-6">{endpoint.description}</p>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Example Request</span>
                      <button className="text-gray-400 hover:text-white">
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{endpoint.example}</code>
                    </pre>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Examples */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-4">
              Integration Examples
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Ready-to-use code examples for common integration scenarios. 
              Copy, customize, and deploy.
            </p>
          </FadeIn>
          <div className="space-y-12">
            {integrationExamples.map((example, index) => (
              <FadeIn key={index}>
                <div className="bg-accent-dark rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-black">{example.title}</h3>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-white rounded-lg">
                        <Copy className="h-4 w-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-white rounded-lg">
                        <ExternalLink className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{example.description}</p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Performance You Can Count On
            </h2>
            <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
              Real performance metrics from production systems handling 
              millions of requests daily.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <FadeIn key={index}>
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-xl font-semibold text-black mb-2">{metric.metric}</div>
                  <div className="text-gray-600 text-sm">{metric.description}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-12">
              Technology Stack
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn>
              <div className="bg-accent-dark p-8 rounded-2xl">
                <Terminal className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Backend</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Node.js / TypeScript</li>
                  <li>• Python / FastAPI</li>
                  <li>• Go for high-performance</li>
                  <li>• GraphQL & REST APIs</li>
                  <li>• Real-time WebSockets</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-accent-dark p-8 rounded-2xl">
                <Database className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Data & AI</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• PostgreSQL with vectors</li>
                  <li>• Redis for speed</li>
                  <li>• Elasticsearch for search</li>
                  <li>• TensorFlow / PyTorch</li>
                  <li>• OpenAI, Anthropic APIs</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-accent-dark p-8 rounded-2xl">
                <Cloud className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Infrastructure</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Kubernetes orchestration</li>
                  <li>• Docker containers</li>
                  <li>• AWS / GCP multi-cloud</li>
                  <li>• Infrastructure as code</li>
                  <li>• Real-time monitoring</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Security & Compliance
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Security Features</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">End-to-End Encryption</span>
                        <p className="text-white/70">Bank-level encryption for all data</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Zero-Trust Security</span>
                        <p className="text-white/70">Every request is verified and authenticated</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                      <div>
                        <span className="font-semibold text-white">Regular Security Audits</span>
                        <p className="text-white/70">Quarterly testing and vulnerability assessments</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Compliance Standards</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">SOC 2 Type II</h4>
                      <p className="text-gray-600 text-sm">Comprehensive security and availability controls</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">GDPR Compliant</h4>
                      <p className="text-gray-600 text-sm">Full data protection and privacy compliance</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">ISO 27001</h4>
                      <p className="text-gray-600 text-sm">Information security management standards</p>
                    </div>
                  </div>
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
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Our engineering team is ready to build AI systems that push the boundaries 
            of what's possible. Let's discuss your technical requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink to="/strategy-call">
              Schedule Technical Consultation <ChevronRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
          <p className="text-white/60 mt-6">
            Free technical assessment • Custom architecture design • Enterprise solutions
          </p>
        </div>
      </section>
    </div>
  );
}

export default DeveloperDocs;