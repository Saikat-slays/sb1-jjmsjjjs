import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, CheckCircle, ArrowRight, Smartphone, Users, TrendingUp, Shield, Zap, Phone, Globe, IndianRupee } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { FadeIn } from '@/components/ui/fade-in';
import { ServiceCard } from '@/components/ui/service-card';

function WhatsAppAutomationIndia() {
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
      title: "WhatsApp Business API",
      description: "Official WhatsApp Business API integration for reliable, scalable messaging."
    },
    {
      Icon: Globe,
      title: "Multi-Language Support",
      description: "Communicate in Hindi, English, Tamil, Bengali, and other Indian languages."
    },
    {
      Icon: Smartphone,
      title: "Rich Media Messages",
      description: "Send images, videos, documents, and interactive buttons through WhatsApp."
    },
    {
      Icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Track message delivery, read rates, and customer engagement metrics."
    }
  ];

  const benefits = [
    "Reach 500M+ WhatsApp users in India instantly",
    "Achieve 98% message open rates vs 20% for email",
    "Reduce customer service costs by 70%",
    "Support customers in their preferred language",
    "Send order updates and delivery notifications",
    "Handle customer queries 24/7 automatically"
  ];

  const useCases = [
    {
      industry: "Food Delivery & Restaurants",
      challenge: "Managing order confirmations, delivery updates, and customer queries",
      solution: "Automated WhatsApp notifications for order status, delivery tracking, and customer support",
      result: "50% reduction in support calls, 90% customer satisfaction"
    },
    {
      industry: "Healthcare & Clinics",
      challenge: "Appointment booking and patient communication in multiple languages",
      solution: "WhatsApp appointment booking system with multi-language support and automated reminders",
      result: "60% increase in appointment bookings, 40% reduction in no-shows"
    },
    {
      industry: "Education & Coaching",
      challenge: "Student communication, fee reminders, and course updates",
      solution: "Automated WhatsApp system for fee notifications, class schedules, and student queries",
      result: "80% improvement in fee collection, 95% student engagement"
    }
  ];

  const whatsappStats = [
    { stat: "500M+", label: "WhatsApp Users in India", description: "Largest WhatsApp market globally" },
    { stat: "98%", label: "Message Open Rate", description: "vs 20% for email marketing" },
    { stat: "90%", label: "Mobile Internet Users", description: "Prefer WhatsApp for business communication" },
    { stat: "70%", label: "Cost Reduction", description: "In customer service operations" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TypewriterHeading
              text="WhatsApp Chatbot Automation for Indian Businesses"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <p className="text-2xl text-white/80 mb-8">
              Reach 500M+ WhatsApp users in India with automated customer service and marketing.
            </p>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              WhatsApp is India's preferred communication platform. Our automation solutions help you 
              provide instant customer support, send order updates, and engage customers where they 
              already spend their time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ButtonLink to="/strategy-call">
                Get WhatsApp Automation for Your Business <ArrowRight className="ml-2 h-5 w-5" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp in India Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-4">
              Why WhatsApp Dominates Indian Business Communication
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              India is WhatsApp's largest market. Your customers are already there - 
              it's time your business joined them.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-8">
            {whatsappStats.map((item, index) => (
              <FadeIn key={index}>
                <div className="text-center bg-accent-dark p-8 rounded-2xl">
                  <div className="text-5xl font-bold text-primary mb-4">{item.stat}</div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.label}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Enterprise-Grade WhatsApp Automation
            </h2>
            <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
              Built on WhatsApp Business API for reliable, scalable business communication 
              that Indian customers trust.
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
                Transform Your Customer Communication
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
              WhatsApp Automation Across Indian Industries
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

      {/* WhatsApp Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-black text-center mb-12">
                Advanced WhatsApp Business Features
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Message Types</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-accent-dark rounded-lg">
                      <MessageSquare className="h-6 w-6 text-primary mr-3" />
                      <span className="font-semibold">Text Messages</span>
                    </div>
                    <div className="flex items-center p-4 bg-accent-dark rounded-lg">
                      <Smartphone className="h-6 w-6 text-primary mr-3" />
                      <span className="font-semibold">Interactive Buttons</span>
                    </div>
                    <div className="flex items-center p-4 bg-accent-dark rounded-lg">
                      <TrendingUp className="h-6 w-6 text-primary mr-3" />
                      <span className="font-semibold">Rich Media (Images, Videos)</span>
                    </div>
                    <div className="flex items-center p-4 bg-accent-dark rounded-lg">
                      <Shield className="h-6 w-6 text-primary mr-3" />
                      <span className="font-semibold">Document Sharing</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Business Use Cases</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-accent-dark rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Order Notifications</h4>
                      <p className="text-gray-600 text-sm">Automated order confirmations and delivery updates</p>
                    </div>
                    <div className="p-4 bg-accent-dark rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Customer Support</h4>
                      <p className="text-gray-600 text-sm">24/7 automated customer service and query resolution</p>
                    </div>
                    <div className="p-4 bg-accent-dark rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Appointment Booking</h4>
                      <p className="text-gray-600 text-sm">Schedule appointments and send reminders</p>
                    </div>
                    <div className="p-4 bg-accent-dark rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Marketing Campaigns</h4>
                      <p className="text-gray-600 text-sm">Promotional messages and offer notifications</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Language Support */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white mb-8">
                Speak Your Customer's Language
              </h2>
              <p className="text-xl text-white/70 mb-12">
                Our WhatsApp automation supports all major Indian languages, 
                ensuring every customer feels understood and valued.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-4 gap-6">
              {['Hindi', 'English', 'Tamil', 'Bengali', 'Telugu', 'Marathi', 'Gujarati', 'Kannada'].map((language, index) => (
                <FadeIn key={index}>
                  <div className="bg-white p-4 rounded-lg">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                    <span className="font-semibold text-black">{language}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Automate WhatsApp for Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Join thousands of Indian businesses using WhatsApp automation to provide better 
            customer service, increase sales, and reduce operational costs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink to="/strategy-call">
              Get WhatsApp Automation Setup <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
          <p className="text-white/60 mt-6">
            Free consultation • WhatsApp Business API setup • Multi-language support
          </p>
        </div>
      </section>
    </div>
  );
}

export default WhatsAppAutomationIndia;