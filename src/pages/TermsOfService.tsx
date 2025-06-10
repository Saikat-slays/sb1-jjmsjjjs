import React from 'react';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';

function TermsOfService() {
  return (
    <div className="pt-20">
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <TypewriterHeading
            text="Terms of Service"
            className="text-4xl md:text-5xl font-bold text-black text-center mb-8"
          />
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By using ThynkNext's services, you agree to these terms. 
              If you don't agree, please don't use our services.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. Our Services</h2>
            <p>
              ThynkNext provides AI automation solutions including chatbots, lead generation systems, 
              and personalized outreach tools. All services are provided "as is".
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Payment Terms</h2>
            <p>
              We require 50% payment upfront and 50% upon project completion. 
              All payments are non-refundable unless specified in writing.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Ownership Rights</h2>
            <p>
              After full payment, you own the custom solutions we develop for you. 
              ThynkNext keeps ownership of our methods, frameworks, and reusable components.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Confidentiality</h2>
            <p>
              We keep all client information and project details confidential. 
              This includes your business processes, data, and any proprietary information.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Project Timeline</h2>
            <p>
              We work hard to meet all deadlines, but timelines may vary based on project complexity 
              and how quickly you respond. Specific deadlines are outlined in individual project agreements.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Support and Maintenance</h2>
            <p>
              Post-launch support and maintenance terms are in separate agreements. 
              Standard support hours are Monday to Friday, 9am to 6pm IST.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              ThynkNext's liability is limited to the amount you paid for services. We're not liable for any 
              indirect, consequential, or incidental damages.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">9. Termination</h2>
            <p>
              Either party can terminate services with written notice. You remain responsible for payment 
              of all work completed before termination.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">10. Changes to Terms</h2>
            <p>
              ThynkNext can modify these terms at any time. Changes are effective 
              immediately when posted on our website.
            </p>

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

export default TermsOfService;