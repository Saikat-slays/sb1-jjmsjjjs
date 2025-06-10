import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { supabase } from '@/lib/supabase';
import { PhoneInput } from '@/components/ui/phone-input';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Reset errors and status
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    };
    setSubmitStatus({ type: null, message: '' });

    // Validate all fields
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

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    // Form is valid, proceed with submission
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      // Clear form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your message. Please try again.'
      });
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <TypewriterHeading
            text="Start the Conversation. Open the Possibility."
            className="text-4xl md:text-5xl font-bold text-black text-center mb-8"
          />
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Whether you're ready to build or just want to ask the right questions—this is where it begins.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-accent-dark py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
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
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`${inputClasses} ${errors.message ? errorInputClasses : ''}`}
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                <RainbowButton
                  type="submit"
                  className="w-full inline-flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <ChevronRight className="ml-2 h-5 w-5" />
                </RainbowButton>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-700">inquiries@thynknext.in</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-700">+91 6289118324</p>
                      <p className="text-gray-700">Monday to Friday, 9am to 6pm IST</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                      <p className="text-gray-700">Kolkata, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary p-8 rounded-2xl text-white">
                <h2 className="text-2xl font-bold mb-4">Book a Strategy Call</h2>
                <p className="mb-6 text-white/80">
                  Schedule a free 30-minute call to discuss your business needs and discover how our AI solutions can help you grow.
                </p>
                <ButtonLink to="/strategy-call">
                  Schedule Now <ChevronRight className="ml-2 h-5 w-5" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;