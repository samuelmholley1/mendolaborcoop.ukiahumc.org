import React, { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

const HireCrewPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    jobType: '',
    dates: '',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real implementation, this would send to an API endpoint or email service
    // For now, we'll just show a success message and suggest calling
    setTimeout(() => {
      setSubmitMessage('Thank you! We\'ll contact you soon. For immediate assistance, please call (369) 216-1512.');
      setIsSubmitting(false);
      setFormData({ name: '', phone: '', jobType: '', dates: '', details: '' });
    }, 1000);
  };

  const faqs = [
    {
      question: 'Who are your workers?',
      answer: 'Our workers are members of the Mendo Labor Cooperative—local community members who are unemployed or underemployed and seeking fair work opportunities. Many of our members are experiencing housing insecurity and are working to build economic stability. All workers are cooperative members committed to quality work, mutual support, and community solidarity.'
    },
    {
      question: 'How do you set rates?',
      answer: 'Rates are determined based on the type of work, skill level required, and project scope. We aim for fair compensation that supports our workers while remaining competitive with local market rates. When you contact us, we\'ll discuss your project needs and provide a clear rate estimate. Our goal is to keep resources circulating in our local community while ensuring workers receive living wages.'
    },
    {
      question: 'How do you handle safety and trust?',
      answer: 'Safety and trust are paramount. All workers are cooperative members who have been vetted through our membership process. We maintain open communication throughout projects and encourage direct feedback. Workers are accountable to the cooperative and our community values. For larger or ongoing projects, we can provide references from previous clients. Our cooperative structure ensures collective responsibility for quality and professionalism.'
    }
  ];

  return (
    <Layout
      title="Hire a Crew | Mendo Labor Cooperative"
      description="Hire a crew of skilled local workers for your project. Fair rates, quality work, and community support in Mendocino County."
      keywords="hire crew Ukiah, labor crew Mendocino County, project workers, team hire, local workforce"
      canonical="https://mendolaborcoop.ukiahumc.org/hire-crew"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <section className="bg-moss text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Hire a Crew
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-6">
              Connect with a team of skilled local workers for your project
            </p>
            <div className="inline-flex items-center gap-3 bg-gold text-cream px-6 py-3 rounded-lg">
              <span className="text-2xl font-bold">📞</span>
              <div className="text-left">
                <div className="text-sm opacity-90">Call us today</div>
                <a href="tel:+13692161512" className="text-2xl font-bold hover:underline">
                  (369) 216-1512
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg border-2 border-moss p-8">
            <h2 className="text-3xl font-headline font-bold text-gold mb-6 text-center">
              Request a Crew
            </h2>
            <p className="text-center text-moss mb-8">
              Fill out the form below and we'll get back to you shortly. For immediate assistance, please call us.
            </p>

            {submitMessage && (
              <div className="mb-6 p-4 bg-moss/10 border-l-4 border-moss rounded">
                <p className="text-moss font-body">{submitMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-moss rounded-lg focus:outline-none focus:ring-2 focus:ring-moss focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-moss rounded-lg focus:outline-none focus:ring-2 focus:ring-moss focus:border-transparent"
                  placeholder="(707) 555-0123"
                />
              </div>

              {/* Job Type */}
              <div>
                <label htmlFor="jobType" className="block text-sm font-bold text-gold mb-2">
                  Type of Job *
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  required
                  value={formData.jobType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-moss rounded-lg focus:outline-none focus:ring-2 focus:ring-moss focus:border-transparent"
                >
                  <option value="">Select a job type...</option>
                  <option value="landscaping">Landscaping & Yard Work</option>
                  <option value="moving">Moving Services</option>
                  <option value="cleaning">Cleaning Services</option>
                  <option value="demolition">Demolition & Cleanup</option>
                  <option value="assembly">Assembly & Installation</option>
                  <option value="painting">Painting</option>
                  <option value="general">General Labor</option>
                  <option value="other">Other (please describe below)</option>
                </select>
              </div>

              {/* Dates */}
              <div>
                <label htmlFor="dates" className="block text-sm font-bold text-gold mb-2">
                  Preferred Dates *
                </label>
                <input
                  type="text"
                  id="dates"
                  name="dates"
                  required
                  value={formData.dates}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-moss rounded-lg focus:outline-none focus:ring-2 focus:ring-moss focus:border-transparent"
                  placeholder="e.g., November 25-26, or ASAP"
                />
              </div>

              {/* Additional Details */}
              <div>
                <label htmlFor="details" className="block text-sm font-bold text-gold mb-2">
                  Project Details (Optional)
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-moss rounded-lg focus:outline-none focus:ring-2 focus:ring-moss focus:border-transparent"
                  placeholder="Tell us more about your project, crew size needed, location, etc."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-moss text-cream py-4 px-6 rounded-lg font-headline font-bold text-lg hover:bg-moss/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>

              <p className="text-sm text-gray-600 text-center">
                By submitting this form, you agree to be contacted by Mendo Labor Cooperative regarding your project.
              </p>
            </form>
          </div>

          {/* Alternative Contact */}
          <div className="mt-8 text-center">
            <p className="text-moss mb-4">Prefer to reach out directly?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13692161512"
                className="inline-flex items-center justify-center gap-2 bg-gold text-cream px-6 py-3 rounded-lg font-headline font-bold hover:bg-gold/90 transition-colors"
              >
                <span>📞</span>
                <span>(369) 216-1512</span>
              </a>
              <a
                href="mailto:mendolaborcoop@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-moss text-cream px-6 py-3 rounded-lg font-headline font-bold hover:bg-moss/90 transition-colors"
              >
                <span>✉️</span>
                <span>mendolaborcoop@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-white to-sand/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-headline font-bold text-gold mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border-2 border-moss p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-headline font-bold text-moss mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 font-body leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-moss text-cream rounded-lg p-8 text-center">
            <h3 className="text-2xl font-headline font-bold mb-4">
              Have more questions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              We're here to help! Give us a call and we'll be happy to discuss your project needs.
            </p>
            <a
              href="tel:+13692161512"
              className="inline-flex items-center gap-2 bg-cream text-gold px-8 py-4 rounded-lg font-headline font-bold text-xl hover:bg-sand transition-colors"
            >
              <span>📞</span>
              <span>(369) 216-1512</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HireCrewPage;
