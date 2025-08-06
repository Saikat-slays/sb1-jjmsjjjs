import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, Clock, Target, Users, Home } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { PhoneInput } from '@/components/ui/phone-input';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  automationGoal: string;
  customGoal: string;
}

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  company: string;
  automationGoal: string;
  customGoal: string;
}

function StrategyCall() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    automationGoal: '',
    customGoal: ''
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    company: '',
    automationGoal: '',
    customGoal: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));

    // Clear custom goal when switching away from "Other"
    if (name === 'automationGoal' && value !== 'Other') {
      setFormData(prev => ({
        ...prev,
        customGoal: ''
      }));
      setErrors(prev => ({
        ...prev,
        customGoal: ''
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      company: '',
      automationGoal: '',
      customGoal: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone is now optional, so only validate if provided
    if (formData.phone.trim() && formData.phone.length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.automationGoal) {
      newErrors.automationGoal = 'Please select an automation goal';
    }

    // Validate custom goal if "Other" is selected
    if (formData.automationGoal === 'Other' && !formData.customGoal.trim()) {
      newErrors.customGoal = 'Please describe your automation goal';
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare webhook payload
      const webhookPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        automation_goal: formData.automationGoal === 'Other' ? formData.customGoal : formData.automationGoal,
        timestamp: new Date().toISOString(),
        form_type: 'strategy_call'
      };

      // Send to webhook
      const response = await fetch('https://hook.eu2.make.com/b8as5a6y6si9gcx1ykf2bbgqlcb2ug7r', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors(prev => ({
        ...prev,
        automationGoal: 'There was an error submitting your request. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const ButtonLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to}>
      <RainbowButton className="inline-flex items-center">
        {children}
      </RainbowButton>
    </Link>
  );

  const inputClasses = `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-900 placeholder-gray-500`;
  const errorInputClasses = `border-red-500`;

  const ConfirmationMessage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center p-8"
    >
      <div className="mb-8">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-black mb-4">Thank You!</h2>
        <p className="text-xl text-gray-600 mb-6">
          We'll contact you within 24 hours to schedule your call.
        </p>
      </div>
      
      <div className="bg-accent-dark p-6 rounded-xl mb-8">
        <h3 className="font-semibold text-black mb-4">What happens next?</h3>
        <ul className="space-y-4 text-left">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary mt-1 mr-3" />
            <span className="text-gray-600">
              We'll review your business needs within 24 hours
            </span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary mt-1 mr-3" />
            <span className="text-gray-600">
              You'll get an email with available call times
            </span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary mt-1 mr-3" />
            <span className="text-gray-600">
              We'll prepare ideas for your specific business
            </span>
          </li>
        </ul>
      </div>

      <ButtonLink to="/">
        <Home className="mr-2 h-5 w-5" /> Back to Homepage
      </ButtonLink>
    </motion.div>
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TypewriterHeading
              text="Let's Talk About Scaling Your Fitness or E-Commerce Brand"
              className="text-4xl md:text-5xl font-bold text-black mb-8"
            />
            <p className="text-xl text-gray-600 mb-12">
              This is a real conversation about your fitness or e-commerce brand.
              We'll show you exactly how AI can help you scale globally without the operational complexity.
              No sales pitch, just industry-specific solutions.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                <span>30 Minutes</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Target className="h-5 w-5 mr-2" />
                <span>Custom Plan</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2" />
                <span>Free Advice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-accent-dark py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">What You'll Get From This Call</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Clear Plan to Get More Customers</h3>
                    <p className="text-gray-600">
                      We'll identify the top 3 ways AI can help your fitness or e-commerce brand scale globally and increase customer satisfaction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">See How Much Money You Could Make</h3>
                    <p className="text-gray-600">
                      We'll calculate how much extra revenue you could generate by automating your fitness or e-commerce operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Custom Solution for Your Business</h3>
                    <p className="text-gray-600">
                      Get a tailored plan that fits your specific fitness or e-commerce model and global scaling goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Timeline and Next Steps</h3>
                    <p className="text-gray-600">
                      Know exactly when you could have your AI system working and scaling your brand globally.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4">Perfect If You're:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>A fitness or e-commerce brand losing customers to slow responses</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>Spending too much time on manual customer service and order management</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>Want to scale globally without hiring massive support teams</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>Ready to invest in scaling your fitness or e-commerce brand</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Booking Form or Confirmation */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <ConfirmationMessage />
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold text-black mb-6">Book Your Free Call</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`${inputClasses} ${errors.name ? errorInputClasses : ''}`}
                          placeholder="John Doe"
                          required
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`${inputClasses} ${errors.email ? errorInputClasses : ''}`}
                          placeholder="john@example.com"
                          required
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number <span className="text-gray-500">(Optional)</span>
                        </label>
                        <PhoneInput
                          value={formData.phone}
                          onChange={(value) => {
                            setFormData(prev => ({ ...prev, phone: value }));
                            setErrors(prev => ({ ...prev, phone: '' }));
                          }}
                          error={errors.phone}
                          className={`${inputClasses} ${errors.phone ? errorInputClasses : ''}`}
                          required={false}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className={`${inputClasses} ${errors.company ? errorInputClasses : ''}`}
                          placeholder="Your Company Name"
                          required
                        />
                        {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          What's your biggest challenge? <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="automationGoal"
                          value={formData.automationGoal}
                          onChange={handleInputChange}
                          className={`${inputClasses} ${errors.automationGoal ? errorInputClasses : ''}`}
                          required
                        >
                          <option value="">Select your biggest challenge</option>
                          <option value="Not enough leads">Not enough leads</option>
                          <option value="Responding to customers too slowly">Responding to customers too slowly</option>
                          <option value="Too much manual work">Too much manual work</option>
                          <option value="Can't scale without hiring">Can't scale without hiring</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.automationGoal && (
                          <p className="mt-1 text-sm text-red-500">{errors.automationGoal}</p>
                        )}
                      </div>

                      {/* Custom Goal Input - Shows when "Other" is selected */}
                      <AnimatePresence>
                        {formData.automationGoal === 'Other' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Tell us about your challenge <span className="text-red-500">*</span>
                            </label>
                            <textarea
                              name="customGoal"
                              value={formData.customGoal}
                              onChange={handleInputChange}
                              className={`${inputClasses} ${errors.customGoal ? errorInputClasses : ''}`}
                              rows={3}
                              placeholder="What's the biggest challenge in scaling your fitness or e-commerce brand?"
                              required={formData.automationGoal === 'Other'}
                            />
                            {errors.customGoal && (
                              <p className="mt-1 text-sm text-red-500">{errors.customGoal}</p>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <RainbowButton
                        type="submit"
                        className="w-full inline-flex items-center justify-center"
                        disabled={isSubmitting}
                      >
                        <option value="">Select your biggest challenge</option>
                        <option value="Scaling customer support globally">Scaling customer support globally</option>
                        <option value="Managing inventory and orders manually">Managing inventory and orders manually</option>
                        <option value="Personalizing fitness recommendations at scale">Personalizing fitness recommendations at scale</option>
                        <option value="Converting website visitors to customers">Converting website visitors to customers</option>
                        <option value="Managing social media and content creation">Managing social media and content creation</option>
                      <p className="text-sm text-gray-600 text-center">
                        Free call. No pressure. Just honest advice about scaling your fitness or e-commerce brand.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-accent-dark p-6 rounded-xl">
              <p className="text-gray-600 mb-4">
                "The call was incredibly helpful. They showed me exactly how AI could help my fitness brand scale globally. 
                Now our customer support runs automatically and we're serving customers in 12 countries."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white text-sm font-bold">FB</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-black">Fitness Brand Founder</h4>
                  <p className="text-sm text-gray-600">Global Operations</p>
                </div>
              </div>
            </div>
            <div className="bg-accent-dark p-6 rounded-xl">
              <p className="text-gray-600 mb-4">
                "They gave me a clear plan for scaling my supplement brand internationally. 
                The AI automation handles customer inquiries in 8 languages now."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white text-sm font-bold">EC</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-black">Supplement Brand CEO</h4>
                  <p className="text-sm text-gray-600">International Markets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StrategyCall;