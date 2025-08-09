import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, LineChart, MessageSquare, Cpu, Phone, Share2, Layout, ChevronRight } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';

function Services() {
  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  const services = [
    {
      Icon: Bot,
      title: "Never Miss Another Lead",
      description: "AI chatbots that capture leads 24/7, even when you're sleeping. No more lost customers.",
      link: "/services/bespoke-ai-chatbots"
    },
    {
      Icon: Phone,
      title: "Make 500 Calls While You Have Coffee",
      description: "AI voice agents that call prospects, book appointments, and follow up automatically.",
      link: "/services/ai-voice-agents"
    },
    {
      Icon: LineChart,
      title: "Turn Website Visitors Into Paying Customers",
      description: "Smart systems that identify hot prospects and guide them to buy from you.",
      link: "/services/lead-generation-systems"
    },
    {
      Icon: MessageSquare,
      title: "Send 1000 Personal Messages in Minutes",
      description: "Reach more prospects with messages that feel personal, without the manual work.",
      link: "/services/personalized-outreach"
    },
    {
      Icon: Share2,
      title: "Post on Social Media Without Lifting a Finger",
      description: "AI creates and posts content that gets engagement while you focus on your business.",
      link: "/services/social-media-management"
    },
    {
      Icon: Layout,
      title: "Stop Doing Repetitive Tasks",
      description: "Automate the boring stuff so you can focus on growing your business and making money.",
      link: "/services/automation-infrastructure"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <TypewriterHeading
            text="Get More Customers Without Working More Hours"
            className="text-4xl md:text-5xl font-bold text-black text-center mb-8"
          />
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
            We build AI systems that do the work you don't have time for.
          </p>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            More leads, more customers, less manual work. Built specifically for your business.
          </p>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">How We Help Your Business</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="block group">
                <div className="group-hover:scale-105 transition-transform duration-300">
                  <div className="group relative bg-white p-8 rounded-2xl h-full">
                    <div className="relative z-10">
                      <service.Icon className="h-12 w-12 text-primary mb-6" />
                      <h3 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                        Learn More <ChevronRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Stop Losing Customers?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Let's talk about your business and show you exactly how AI can help you get more customers
            without working more hours.
          </p>
          <ButtonLink to="/strategy-call">
            Book Your Free Call Now <ChevronRight className="ml-2 h-5 w-5" />
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}

export default Services;