import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, Calendar, Users, TrendingUp, Shield, Zap, Clock, Headphones, MapPin } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { FadeIn } from '@/components/ui/fade-in';
import { ServiceCard } from '@/components/ui/service-card';

function VoiceAgentAppointmentBusiness() {
  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  const features = [
    {
      Icon: Calendar,
      title: "Smart Scheduling",
      description: "AI automatically manages your calendar, prevents double bookings, and optimizes appointment slots."
    },
    {
      Icon: Phone,
      title: "Natural Voice Conversations",
      description: "Human-like voice interactions that understand context and handle complex booking requests."
    },
    {
      Icon: Clock,
      title: "24/7 Availability",
      description: "Customers can book appointments anytime, even outside business hours or holidays."
    },
    {
      Icon: Headphones,
      title: "Multi-Language Support",
      description: "Communicate with customers in Hindi, English, and regional Indian languages."
    }
  ];

  const benefits = [
    "Reduce no-shows by 70% with automated reminders",
    "Increase bookings by 300% with 24/7 availability",
    "Save 20+ hours per week on appointment management",
    "Handle multiple languages for diverse Indian customers",
    "Integrate with Google Calendar, Calendly, and other tools",
    "Reduce staff workload and improve customer satisfaction"
  ];

  const appointmentBusinesses = [
    {
      business: "Healthcare Clinics",
      description: "Doctor appointments, health checkups, specialist consultations",
      features: ["Patient history integration", "Insurance verification", "Prescription reminders", "Follow-up scheduling"],
      results: "60% reduction in missed appointments"
    },
    {
      business: "Beauty & Wellness",
      description: "Salon appointments, spa bookings, beauty treatments",
      features: ["Service duration management", "Stylist preferences", "Package bookings", "Loyalty program integration"],
      results: "40% increase in repeat bookings"
    },
    {
      business: "Fitness & Yoga",
      description: "Personal training, group classes, yoga sessions",
      features: ["Class capacity management", "Trainer scheduling", "Membership verification", "Equipment booking"],
      results: "50% improvement in class utilization"
    },
    {
      business: "Professional Services",
      description: "Legal consultations, financial planning, business meetings",
      features: ["Consultation type selection", "Document preparation", "Meeting room booking", "Client screening"],
      results: "80% reduction in scheduling conflicts"
    }
  ];

  const useCases = [
    {
      industry: "Dental Clinics",
      challenge: "Managing complex appointment schedules with multiple doctors and treatment types",
      solution: "AI voice agent handles appointment booking, rescheduling, and sends automated reminders with treatment prep instructions",
      result: "50% reduction in no-shows, 90% patient satisfaction score"
    },
    {
      industry: "Beauty Salons",
      challenge: "Customers calling outside business hours and complex service combinations",
      solution: "24/7 voice booking system with service recommendations and stylist preferences",
      result: "200% increase in after-hours bookings, 60% higher revenue"
    },
    {
      industry: "Fitness Centers",
      challenge: "Managing group class bookings and personal trainer schedules",
      solution: "Automated class booking with waitlist management and trainer availability optimization",
      result: "40% increase in class attendance, 30% more personal training sessions"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TypewriterHeading
              text="Voice Agent Automation for Appointment-Based Businesses"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <p className="text-2xl text-white/80 mb-8">
              Never miss another booking. Your AI receptionist works 24/7.
            </p>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              Perfect for healthcare, beauty, fitness, and professional services across India. 
              Our AI voice agents handle appointment booking, confirmations, and follow-ups 
              automatically in multiple Indian languages.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ButtonLink to="/strategy-call">
                Get Your AI Appointment System <ArrowRight className="ml-2 h-5 w-5" />
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
                The Appointment Booking Nightmare
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn>
                <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-red-700 mb-6">Current Problems</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Customers call outside business hours and can't book</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Staff spend 60% of time on phone bookings</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Double bookings and scheduling conflicts</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>High no-show rates due to poor communication</span>
                    </li>
                    <li className="flex items-start text-red-600">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span>Language barriers with diverse Indian customers</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-green-700 mb-6">AI Voice Solution</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>24/7 appointment booking in multiple languages</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Staff focus on providing service, not booking calls</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Intelligent calendar management prevents conflicts</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Automated reminders reduce no-shows by 70%</span>
                    </li>
                    <li className="flex items-start text-green-600">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span>Seamless communication in Hindi, English, regional languages</span>
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
              More Than Just Appointment Booking
            </h2>
            <p className="text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto">
              Our AI voice agents understand your business, manage complex schedules, 
              and provide exceptional customer service.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <ServiceCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-black text-center mb-12">
              Perfect for Appointment-Based Businesses
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {appointmentBusinesses.map((business, index) => (
              <FadeIn key={index}>
                <div className="bg-accent-dark p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-black mb-4">{business.business}</h3>
                  <p className="text-gray-600 mb-6">{business.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {business.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <span className="font-semibold text-primary">Typical Results: </span>
                    <span className="text-gray-700">{business.results}</span>
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
                Transform Your Appointment Management
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
              Success Stories from Indian Businesses
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

      {/* How It Works */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              How Voice Agent Booking Works
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-8">
            <FadeIn>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-white mb-2">Customer Calls</h3>
                <p className="text-white/70">Customer calls your business number anytime, 24/7</p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-white mb-2">AI Conversation</h3>
                <p className="text-white/70">Voice agent understands requirements and preferences</p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-white mb-2">Smart Scheduling</h3>
                <p className="text-white/70">AI checks availability and books optimal time slot</p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-bold text-white mb-2">Confirmation & Reminders</h3>
                <p className="text-white/70">Automatic confirmation and reminder messages</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Automate Your Appointment Booking?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Join hundreds of Indian businesses using AI voice agents to increase bookings, 
            reduce no-shows, and provide better customer service 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink to="/strategy-call">
              Get Your Voice Agent Setup <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
          <p className="text-white/60 mt-6">
            Free consultation • 24/7 booking system • Multi-language support
          </p>
        </div>
      </section>
    </div>
  );
}

export default VoiceAgentAppointmentBusiness;