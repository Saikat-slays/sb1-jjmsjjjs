import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <Link 
              to="/" 
              className="inline-flex items-center mb-4 hover:text-white transition"
              role="link"
              aria-label="Go to homepage"
            >
              <Zap className="h-6 w-6 text-white" />
              <span className="ml-2 text-xl text-white">ThynkNext</span>
            </Link>
            <p className="text-sm mb-6">
              Crafting bespoke AI automation solutions for business growth.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61576841385912"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/thynk_next/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://x.com/Thynk_Next"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white mb-4 font-semibold">Solutions</h3>
            <ul className="space-y-3">
              {[
                ['Bespoke AI Chatbots', '/services/bespoke-ai-chatbots'],
                ['AI Voice Agents', '/services/ai-voice-agents'],
                ['Lead Generation Systems', '/services/lead-generation-systems'],
                ['Personalized Outreach', '/services/personalized-outreach'],
                ['Social Media Management', '/services/social-media-management'],
                ['Automation Infrastructure', '/services/automation-infrastructure']
              ].map(([label, path]) => (
                <li key={label}>
                  <Link 
                    to={path}
                    className="inline-block py-2 hover:text-white transition-colors"
                    role="link"
                    aria-label={`Go to ${label}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-4 font-semibold">Company</h3>
            <ul className="space-y-3">
              {[
                ['About Us', '/about'],
                ['How We Work', '/how-we-work'],
                ['Book a Call', '/strategy-call']
              ].map(([label, path]) => (
                <li key={label}>
                  <Link 
                    to={path}
                    className="inline-block py-2 hover:text-white transition-colors"
                    role="link"
                    aria-label={`Go to ${label}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 hover:text-white transition-colors"
                  role="link"
                  aria-label="View sitemap"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-4 font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:inquiries@thynknext.in"
                  className="inline-block py-2 hover:text-white transition-colors"
                  role="link"
                  aria-label="Send email"
                >
                  Email: inquiries@thynknext.in
                </a>
              </li>
              <li>
                <a 
                  href="tel:+916289118324"
                  className="inline-block py-2 hover:text-white transition-colors"
                  role="link"
                  aria-label="Call us"
                >
                  WhatsApp: +91 6289118324
                </a>
              </li>
              <li className="py-2">Kolkata, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-center sm:text-left">
              © 2024 ThynkNext. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6">
              {[
                ['Privacy Policy', '/privacy'],
                ['Terms of Service', '/terms']
              ].map(([label, path]) => (
                <Link 
                  key={label}
                  to={path}
                  className="inline-block py-2 hover:text-white transition-colors text-center sm:text-left"
                  role="link"
                  aria-label={`View ${label}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;