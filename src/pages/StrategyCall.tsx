import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, Clock, Target, Users, Home } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { supabase } from '@/lib/supabase';
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
      // Use custom goal if "Other" is selected, otherwise use the selected goal
      const finalGoal = formData.automationGoal === 'Other' ? formData.customGoal : formData.automationGoal;

      const { error } = await supabase
        .from('strategy_call_submissions')
        .insert([{
          name: formData.name,
          email_address: formData.email,
          phone_number: formData.phone,
          company_name: formData.company,
          automation_goal: finalGoal
        }]);

      if (error) throw error;

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors(prev => ({
        ...prev,
        submit: 'There was an error submitting your request. Please try again.'
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
          Your strategy call has been scheduled successfully.
        </p>
      </div>
      
      <div className="bg-accent-dark p-6 rounded-xl mb-8">
        <h3 className="font-semibold text-black mb-4">What happens next?</h3>
        <ul className="space-y-4 text-left">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary mt-1 mr-3" />
            <span className="text-gray-600">
              Our team will review your requirements within 24 hours
            </span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary mt-1 mr-3" />
            <span className="text-gray-600">
              You'll receive an email with available time slots
            </span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary mt-1 mr-3" />
            <span className="text-gray-600">
              We'll prepare a preliminary analysis of your automation needs
            </span>
          </li>
        </ul>
      </div>

      <ButtonLink to="/">
        <Home className="mr-2 h-5 w-5" /> Return to Homepage
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
              text="Let's Engineer the System That Grows Your Business While You Sleep"
              className="text-4xl md:text-5xl font-bold text-black mb-8"
            />
            <p className="text-xl text-gray-600 mb-12">
              This is not a demo.
              This is a 1-on-1 consultation designed to map out exactly how AI automation can be crafted around your business to multiply output and revenue—without hiring or hustle.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                <span>30 Minutes</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Target className="h-5 w-5 mr-2" />
                <span>Personalized Strategy</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2" />
                <span>Expert Consultation</span>
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
              <h2 className="text-3xl font-bold text-black mb-8">What You'll Get</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Custom Automation Roadmap</h3>
                    <p className="text-gray-600">
                      Get a clear plan to automate your top 3 business bottlenecks
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">ROI Analysis</h3>
                    <p className="text-gray-600">
                      Understand the potential return on investment for your AI implementation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Solution Blueprint</h3>
                    <p className="text-gray-600">
                      Get a tailored solution design that matches your business needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Implementation Timeline</h3>
                    <p className="text-gray-600">
                      Clear project timeline and milestones for your automation journey
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4">Perfect For:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>Interior Design & Decor Brands</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>Energy & Utility Companies</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>E-commerce & D2C Brands</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>Growing Startups & SMBs</span>
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
                    <h2 className="text-2xl font-bold text-black mb-6">Book Your Strategy Call</h2>
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
                          What's your primary automation goal? <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="automationGoal"
                          value={formData.automationGoal}
                          onChange={handleInputChange}
                          className={`${inputClasses} ${errors.automationGoal ? errorInputClasses : ''}`}
                          required
                        >
                          <option value="">Select your goal</option>
                          <option value="Generate More Leads">Generate More Leads</option>
                          <option value="Automate Customer Support">Automate Customer Support</option>
                          <option value="Scale Personal Outreach">Scale Personal Outreach</option>
                          <option value="Streamline Operations">Streamline Operations</option>
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
                              Please describe your automation goal <span className="text-red-500">*</span>
                            </label>
                            <textarea
                              name="customGoal"
                              value={formData.customGoal}
                              onChange={handleInputChange}
                              className={`${inputClasses} ${errors.customGoal ? errorInputClasses : ''}`}
                              rows={3}
                              placeholder="Tell us about your specific automation needs..."
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
                        {isSubmitting ? 'Booking...' : 'Book Your Call'} <ChevronRight className="ml-2 h-5 w-5" />
                      </RainbowButton>
                    </form>

                    <div className="mt-8 p-4 bg-accent-dark rounded-lg">
                      <p className="text-sm text-gray-600 text-center">
                        Limited spots available. Book your call now to secure priority access.
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
          <h2 className="text-3xl font-bold text-black text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-accent-dark p-6 rounded-xl">
              <p className="text-gray-600 mb-4">
                "The strategy call was eye-opening. ThynkNext helped us identify automation opportunities we hadn't even considered. Now our lead generation is fully automated and performing better than ever."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white text-sm font-bold">ID</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-black">Interior Design Studio</h4>
                  <p className="text-sm text-gray-600">Mumbai</p>
                </div>
              </div>
            </div>
            <div className="bg-accent-dark p-6 rounded-xl">
              <p className="text-gray-600 mb-4">
                "The ROI analysis and implementation roadmap we received were incredibly detailed. It helped us make an informed decision about our AI investment."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white text-sm font-bold">EC</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-black">E-commerce Brand</h4>
                  <p className="text-sm text-gray-600">Bangalore</p>
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