import React, { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import ConfirmationModal from '../components/ConfirmationModal';

interface FormData {
  name: string;
  phone: string;
  email: string;
  jobDescription: string;
}

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    jobDescription: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', jobDescription: '' });
        setShowConfirmationModal(true);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="Contact Us - Mendo Labor Cooperative"
      description="Get in touch with Mendo Labor Cooperative. Submit a job inquiry or request skilled workers in Mendocino County."
      keywords="contact Mendo Labor, hire workers Ukiah, job inquiry Mendocino, labor cooperative contact"
      canonical="https://mendolaborcoop.ukiahumc.org/contact-us"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Mendo Labor Cooperative",
              "url": "https://mendolaborcoop.ukiahumc.org/contact-us"
            })
          }}
        />
      </Head>

      <section className="py-12 bg-sand min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-gold mb-4">
              Contact Us
            </h1>
            <p className="text-lg font-body text-moss mb-4">
              Submit your job inquiry and we'll get back to you promptly.
            </p>
            <div className="bg-gold/10 border-l-4 border-l-gold p-4 rounded-r-lg max-w-xl mx-auto">
              <p className="text-base font-body text-moss">
                ⏱️ <span className="font-semibold">Response Time:</span> Our coordinators will contact you within 72 hours.
              </p>
            </div>
          </div>

          {/* Phone CTA */}
          <div className="bg-moss text-cream p-6 rounded-lg text-center border-4 border-gold shadow-xl mb-8">
            <p className="text-base font-headline font-semibold mb-2">
              Prefer to call? Reach us directly:
            </p>
            <a 
              href="tel:+13692161512" 
              className="text-3xl md:text-4xl font-headline font-extrabold block hover:opacity-90 transition-opacity"
            >
              (369) 216-1512
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-cream rounded-lg shadow-lg p-6 md:p-8 border-4 border-moss">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  {errorMessage}
                </div>
              )}

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-lg font-headline font-semibold text-gold mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-moss rounded-lg font-body text-moss focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                    placeholder="Your full name"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-lg font-headline font-semibold text-gold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-moss rounded-lg font-body text-moss focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-lg font-headline font-semibold text-gold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-moss rounded-lg font-body text-moss focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Job Description Field */}
                <div>
                  <label htmlFor="jobDescription" className="block text-lg font-headline font-semibold text-gold mb-2">
                    Job Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="jobDescription"
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-moss rounded-lg font-body text-moss focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold resize-vertical"
                    placeholder="Describe the job or work you need done..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg text-xl font-headline font-bold transition-colors ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-gold text-cream hover:bg-opacity-90'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onClose={() => {
          setShowConfirmationModal(false);
          setSubmitStatus('idle');
        }}
      />
    </Layout>
  );
};

export default ContactUsPage;
