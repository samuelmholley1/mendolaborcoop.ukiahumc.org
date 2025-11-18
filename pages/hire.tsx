import React, { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

const HirePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'physical' | 'home' | 'specialized'>('physical');
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
      answer: 'Rates are determined based on the type of work, skill level required, and project scope. We aim for fair compensation that supports our workers while remaining competitive with local market rates. When you contact us, we\'ll discuss your project needs and provide a clear rate estimate. Our goal is to keep wealth circulating in our local community while ensuring workers receive living wages.'
    },
    {
      question: 'How do you handle safety and trust?',
      answer: 'Safety and trust are paramount. All workers are cooperative members who have been vetted through our membership process. We maintain open communication throughout projects and encourage direct feedback. Workers are accountable to the cooperative and our community values. For larger or ongoing projects, we can provide references from previous clients. Our cooperative structure ensures collective responsibility for quality and professionalism.'
    }
  ];

  const categories = {
    physical: {
      title: 'Physical Labor',
      description: 'Heavy-duty outdoor and indoor work for your home or business',
      services: [
        'Landscaping & Yard Work',
        'Tree Pruning & Care',
        'Gutter Cleaning',
        'Moving Services',
        'Loading/Unloading (U-Hauls, trucks)',
        'Junk Removal & Hauling',
        'Yard Cleanup & Debris Removal',
        'House Cleaning & Deep Cleaning',
        'Window Cleaning',
        'Pressure Washing',
        'Demolition & Cleanup'
      ]
    },
    home: {
      title: 'Home & Project Support',
      description: 'Organization, setup, and general assistance for your projects',
      services: [
        'Event Setup & Breakdown',
        'Furniture Assembly',
        'Storage Organization',
        'Packing & Unpacking',
        'Inventory Sorting',
        'General Handyman Tasks',
        'Home Organization',
        'Seasonal Cleanup',
        'Garage/Shed Organization'
      ]
    },
    specialized: {
      title: 'Specialized Services',
      description: 'Skilled trades and services requiring specific expertise',
      services: [
        'Haircuts & Barbering',
        'Pet Care & Dog Walking',
        'Painting (Interior/Exterior)',
        'Basic Carpentry',
        'Appliance Installation',
        'Minor Plumbing Repairs',
        'Basic Electrical Work',
        'Drywall Repair',
        'Fence Repair & Installation'
      ]
    }
  };

  const currentCategory = categories[selectedCategory];

  return (
    <Layout
      title="Hire Worker(s) | Mendo Labor Cooperative"
      description="Hire skilled local workers in Mendocino County for physical labor, home projects, and specialized services. Fair wages, quality work, community solidarity."
      keywords="hire workers Ukiah, local labor Mendocino County, landscaping, moving services, handyman, skilled trades"
      canonical="https://mendolaborcoop.ukiahumc.org/hire"
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
              Hire Worker(s)
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-6">
              Connect with skilled local workers for your project needs
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

      {/* Services Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-headline font-bold text-gold mb-8 text-center">
            Our Services
          </h2>

          {/* Category Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory('physical')}
              className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                selectedCategory === 'physical'
                  ? 'bg-moss text-cream border-moss shadow-lg transform scale-105'
                  : 'bg-white text-moss border-moss hover:bg-moss/10'
              }`}
            >
              <div className="text-4xl mb-2">💪</div>
              <h3 className="text-xl font-headline font-bold">Physical Labor</h3>
            </button>

            <button
              onClick={() => setSelectedCategory('home')}
              className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                selectedCategory === 'home'
                  ? 'bg-moss text-cream border-moss shadow-lg transform scale-105'
                  : 'bg-white text-moss border-moss hover:bg-moss/10'
              }`}
            >
              <div className="text-4xl mb-2">🏠</div>
              <h3 className="text-xl font-headline font-bold">Home & Project Support</h3>
            </button>

            <button
              onClick={() => setSelectedCategory('specialized')}
              className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                selectedCategory === 'specialized'
                  ? 'bg-moss text-cream border-moss shadow-lg transform scale-105'
                  : 'bg-white text-moss border-moss hover:bg-moss/10'
              }`}
            >
              <div className="text-4xl mb-2">🛠️</div>
              <h3 className="text-xl font-headline font-bold">Specialized Services</h3>
            </button>
          </div>

          {/* Service Details */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-moss p-8 min-h-[400px]">
            <div className="mb-6">
              <h3 className="text-2xl font-headline font-bold text-gold mb-2">
                {currentCategory.title}
              </h3>
              <p className="text-lg text-moss font-body">
                {currentCategory.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentCategory.services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-sand/30 rounded-lg hover:bg-sand/50 transition-colors"
                >
                  <span className="text-moss text-xl mt-1">✓</span>
                  <span className="text-black font-body">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="bg-gold text-cream rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-headline font-bold mb-4">
                Ready to hire?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Call us to discuss your project and we'll match you with the right worker
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13692161512"
                  className="inline-flex items-center gap-2 bg-cream text-gold px-8 py-4 rounded-lg font-headline font-bold text-xl hover:bg-sand transition-colors shadow-md"
                >
                  <span>📞</span>
                  <span>(369) 216-1512</span>
                </a>
                <a
                  href="mailto:mendolaborcoop@gmail.com"
                  className="inline-flex items-center gap-2 bg-moss text-cream px-8 py-4 rounded-lg font-headline font-bold text-xl hover:bg-moss/90 transition-colors shadow-md"
                >
                  <span>✉️</span>
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-16">
            <h3 className="text-2xl font-headline font-bold text-gold mb-8 text-center">
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="bg-moss text-cream w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-headline font-bold text-lg text-gold mb-2">Call or Email</h4>
                <p className="text-moss font-body">
                  Reach out to describe your project needs and timeline
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-moss text-cream w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-headline font-bold text-lg text-gold mb-2">We Match You</h4>
                <p className="text-moss font-body">
                  We connect you with qualified workers available for your job
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-moss text-cream w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-headline font-bold text-lg text-gold mb-2">Get It Done</h4>
                <p className="text-moss font-body">
                  Our workers complete quality work at fair rates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-lg shadow-lg border-2 border-moss p-8">
            <h2 className="text-3xl font-headline font-bold text-gold mb-6 text-center">
              Request Worker(s)
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-sand/30 to-white">
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

          <div className="mt-12 bg-moss text-cream rounded-lg p-8 text-center">
            <h3 className="text-2xl font-headline font-bold mb-4">
              Have more questions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              We're here to help! Give us a call and we'll be happy to discuss your project needs.
            </p>
            <a
              href="tel:+13692161512"
              className="inline-flex items-center gap-2 bg-cream text-moss px-8 py-4 rounded-lg font-headline font-bold text-xl hover:bg-sand transition-colors"
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

export default HirePage;
