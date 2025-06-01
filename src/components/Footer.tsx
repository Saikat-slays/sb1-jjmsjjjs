import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-white" />
              <span className="ml-2 text-xl text-white">ThynkNext</span>
            </Link>
            <p className="text-sm">
              Crafting bespoke AI automation solutions for business growth.
            </p>
          </div>
          <div>
            <h3 className="text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-white transition">AI Chatbots</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Lead Generation</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Personalized Outreach</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Custom Development</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/how-we-work" className="hover:text-white transition">How We Work</Link></li>
              <li><Link to="/strategy-call" className="hover:text-white transition">Book a Call</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: inquiries@thynknext.in</li>
              <li>WhatsApp: +91 6289118324</li>
              <li>Kolkata, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © 2024 ThynkNext. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;