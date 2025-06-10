import React from 'react';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';

function PrivacyPolicy() {
  return (
    <div className="pt-20">
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <TypewriterHeading
            text="Privacy Policy"
            className="text-4xl md:text-5xl font-bold text-black text-center mb-8"
          />
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. What Information We Collect</h2>
            <p>
              We collect information you give us directly:
            </p>
            <ul>
              <li>Your name and contact details</li>
              <li>Company information</li>
              <li>Project requirements</li>
              <li>Communication preferences</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use your information to:
            </p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Communicate about your project</li>
              <li>Send important updates</li>
              <li>Process payments</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. How We Protect Your Data</h2>
            <p>
              We use industry-standard security measures:
            </p>
            <ul>
              <li>Encrypted data transmission</li>
              <li>Secure data storage</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. How Long We Keep Your Data</h2>
            <p>
              We keep your information as long as necessary to provide our services. 
              You can request deletion of your data at any time.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Third-Party Services</h2>
            <p>
              We may use third-party services for:
            </p>
            <ul>
              <li>Payment processing</li>
              <li>Cloud storage</li>
              <li>Analytics</li>
              <li>Communication tools</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request data deletion</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Cookies and Tracking</h2>
            <p>
              We use cookies to improve user experience and analyze website traffic. 
              You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. Contact Us</h2>
            <p>
              For privacy questions, contact us at:
            </p>
            <ul>
              <li>Email: privacy@thynknext.in</li>
              <li>Phone: +91 6289118324</li>
              <li>Address: Kolkata, India</li>
            </ul>

            <div className="mt-12 p-6 bg-accent-dark rounded-lg">
              <p className="text-sm">
                Last updated: April 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;