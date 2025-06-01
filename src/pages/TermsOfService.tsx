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
              By accessing and using ThynkNext's services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. Services</h2>
            <p>
              ThynkNext provides AI automation solutions including but not limited to chatbots, lead generation systems, 
              and personalized outreach tools. All services are provided on an "as is" and "as available" basis.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Payment Terms</h2>
            <p>
              Our standard payment structure requires 50% payment upfront and 50% upon project completion. 
              All payments are non-refundable unless otherwise specified in writing.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Intellectual Property</h2>
            <p>
              Upon full payment, clients receive ownership rights to the custom solutions developed for them. 
              ThynkNext retains ownership of all proprietary methods, frameworks, and reusable components.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding all client information and project details. 
              This includes business processes, data, and any proprietary information shared during our engagement.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Project Timeline</h2>
            <p>
              While we strive to meet all project deadlines, timelines may vary based on project complexity 
              and client responsiveness. Specific deadlines will be outlined in individual project agreements.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Support and Maintenance</h2>
            <p>
              Post-launch support and maintenance terms are specified in separate retainer agreements. 
              Standard support hours are Monday to Friday, 9am to 6pm IST.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              ThynkNext's liability is limited to the amount paid for services. We are not liable for any 
              indirect, consequential, or incidental damages.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">9. Termination</h2>
            <p>
              Either party may terminate services with written notice. Clients remain responsible for payment 
              of all work completed prior to termination.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">10. Changes to Terms</h2>
            <p>
              ThynkNext reserves the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to our website.
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