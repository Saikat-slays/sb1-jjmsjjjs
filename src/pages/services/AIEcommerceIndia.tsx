import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, CheckCircle, ArrowRight, ShoppingCart, Users, TrendingUp, Shield, Zap, MessageSquare, BarChart3, IndianRupee, Globe } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { FadeIn } from '@/components/ui/fade-in';
import { ServiceCard } from '@/components/ui/service-card';

function AIEcommerceIndia() {
  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  const features = [
    {
      Icon: MessageSquare,
      title: "WhatsApp Integration",
      description: "Seamlessly integrate with WhatsApp Business API - the most popular messaging platform in India."
    },
    {
      Icon: Globe,
      title: "Multi-Language Support",
      description: "Support customers in Hindi, English, Tamil, Bengali, and other regional languages."
    },
    {
      Icon: ShoppingCart,
      title: "Shopify & WooCommerce Ready",
      description: "Direct integration with popular eCommerce platforms used by Indian businesses."
    },
    {
      Icon: IndianRupee,
      title: "Payment Gateway Integration",
      description: "Works with Razorpay, PayU, and other Indian payment gateways for seamless transactions."
    }
  ];

  const benefits = [
    "Increase conversion rates by 40% with instant customer support",
    "Reduce cart abandonment by 35% with proactive assistance",
    "Handle 1000+ customer queries daily without hiring staff",
    "Support customers in their preferred Indian language",
    "Integrate with popular Indian payment gateways",
    "Work seamlessly with Shopify, WooCommerce, and Magento"
  ];

  const indianChallenges = [
    {
      challenge: "Language Barriers",
      solution: "Multi-language AI that understands Hindi, English, and regional languages",
      impact: "60% better customer satisfaction"
    },
    {
      challenge: "Price-Sensitive Customers",
      solution: "Smart discount and offer recommendations based on customer behavior",
      impact: "25% increase in average order value"
    },
    {
      challenge: "Mobile-First Shopping",
      solution: "Mobile-optimized chatbot interface designed for Indian smartphone users",
      impact: "50% better mobile conversion rates"
    },
    {
      challenge: "Festival Season Traffic",
      solution: "Auto-scaling chatbot that handles 10x traffic during Diwali, Dussehra",
      impact: "Zero downtime during peak seasons"
    }
  ];

  const useCases = [
    {
      industry: "Fashion & Apparel",
      challenge: "Size and fit queries overwhelming customer service during sale seasons",
      solution: "AI chatbot with size guide integration, virtual try-on recommendations, and instant size suggestions",
      result: "40% reduction in returns, 60% faster query resolution"
    },
    {
      industry: "Electronics & Gadgets",
      challenge: "Complex product specifications and comparison queries",
      solution: "Technical specification chatbot with product comparison features and expert recommendations",
      result: "50% increase in high-value product sales"
    },
    {
      industry: "Beauty & Personal Care",
      challenge: "Personalized product recommendations based on skin type and preferences",
      solution: "AI-powered beauty advisor with skin analysis and personalized product suggestions",
      result: "70% increase in repeat purchases"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TypewriterHeading
              text="AI Chatbots for Indian eCommerce & DTC Brands"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <p className="text-2xl text-white/80 mb-8">
              Built specifically for the Indian market - WhatsApp ready, multi-language, festival-season proof.
            </p>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              Our AI chatbots understand Indian customers, speak their language, and integrate with 
              the platforms they use most. From Shopify stores to WhatsApp Business, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ButtonLink to="/strategy-call">
                Get Your Indian eCommerce Chatbot <ArrowRight className="ml-2 h-5 w-5" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Market Challenges */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-black text-center mb-12">
                Built for Indian eCommerce Challenges
              </h2>
            </FadeIn>
            <div className="space-y-8">
              {indianChallenges.map((item, index) => (
                <FadeIn key={index}>
                  <div className="bg-accent-dark rounded-2xl p-8">
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2">{item.challenge}</h3>
                        <p className="text-red-600">Common Problem</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-2">Our Solution</h4>
                        <p className="text-gray-600">{item.solution}</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{item.impact}</div>
                        <div className="text-gray-600 text-sm">Typical Result</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Made for Indian Customers & Platforms
            </h2>
            <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
              Every feature is designed with the Indian market in mind - from WhatsApp integration 
              to regional language support.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <ServiceCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-black text-center mb-12">
                Results That Matter for Indian Businesses
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <FadeIn key={index}>
                  <div className="flex items-center p-6 bg-accent-dark rounded-xl">
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
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Success Stories Across Indian Industries
            </h2>
          </FadeIn>
          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <FadeIn key={index}>
                <div className="bg-white rounded-2xl p-8 md:p-12">
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

      {/* Platform Integrations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-black text-center mb-12">
                Seamless Integration with Indian Platforms
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">eCommerce Platforms</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-accent-dark rounded-lg">
                      <ShoppingCart className="h-6 w-6 text-primary mr-3" />
                      <span className="font-semibold">Shopify India</span>
                    </div>
                    <div className="flex items-center p-4 bg-accent-dark rounded-lg">
                      <ShoppingCart className="h-6 w-6 text-primary mr-3" />
                      <span className="font-semibold">WooCommerce</span>
                    </div>
                    <div className="flex items-center p-4 bg-accent-dark rounded-lg">
                      <ShoppingCart className="h-6 w-6 text-primary mr-3" />
                      <span className="font-semibold">Magento</span>
                    </div>
                    <div className="flex items-center p-4 bg-accent-dark rounded-lg">
                      <ShoppingCart className="h-6 w-6 text-primary mr-3" />
                      <span className="font-semibold">Custom Platforms</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Payment & Communication</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-accent-dark rounded-lg">
                      <IndianRupee className="h-6 w-6 text-primary mr-3" />
                      <span className="font-semibold">Razorpay</span>
                    </div>
                    <div className="flex items-center p-4 bg-accent-dark rounded-lg">
                      <IndianRupee className="h-6 w-6 text-primary mr-3" />
                      <span className="font-semibold">PayU India</span>
                    </div>
                    <div className="flex items-center p-4 bg-accent-dark rounded-lg">
                      <MessageSquare className="h-6 w-6 text-primary mr-3" />
                      <span className="font-semibold">WhatsApp Business</span>
                    </div>
                    <div className="flex items-center p-4 bg-accent-dark rounded-lg">
                      <MessageSquare className="h-6 w-6 text-primary mr-3" />
                      <span className="font-semibold">Instagram DM</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Season Readiness */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white mb-8">
                Festival Season Ready
              </h2>
              <p className="text-xl text-white/70 mb-12">
                Your chatbot automatically scales during Diwali, Dussehra, and other peak shopping seasons.
                No crashes, no delays, no lost sales.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-black mb-4">Auto-Scaling</h3>
                  <p className="text-gray-600">
                    Handles 10x traffic during festival seasons without any manual intervention.
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-black mb-4">Festival Offers</h3>
                  <p className="text-gray-600">
                    Automatically promotes Diwali, Holi, and regional festival offers to customers.
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-black mb-4">Gift Recommendations</h3>
                  <p className="text-gray-600">
                    Smart gift suggestions based on festivals, relationships, and customer preferences.
                  </p>
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
            Ready to Dominate Indian eCommerce?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Join hundreds of Indian DTC brands using AI chatbots to increase sales, 
            reduce costs, and provide better customer service. Built for India, by Indians.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink to="/strategy-call">
              Get Your Indian eCommerce Chatbot <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
          <p className="text-white/60 mt-6">
            Free consultation • WhatsApp integration • Multi-language support
          </p>
        </div>
      </section>
    </div>
  );
}

export default AIEcommerceIndia;