import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const ContactPage: React.FC = () => {
  return (
    <Layout 
      title="Contact | Mendo Labor Cooperative"
      description="Get in touch with the Mendo Labor Cooperative. Multiple ways to connect for support, organizing, or joining our worker-owned collective."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coop-blue to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-coop-gold">
              Get Connected
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Multiple ways to reach out, whether you need support or want to join the fight
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Email */}
            <div className="text-center p-8 bg-coop-cream rounded-lg">
              <div className="bg-coop-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-coop-red">Email Us</h3>
              <p className="text-gray-600 mb-4">Best for detailed questions or organizing inquiries</p>
              <a 
                href="mailto:info@mendolaborcoop.ukiahumc.org"
                className="text-coop-red hover:text-red-700 font-medium"
              >
                info@mendolaborcoop.ukiahumc.org
              </a>
            </div>

            {/* Phone */}
            <div className="text-center p-8 bg-coop-cream rounded-lg">
              <div className="bg-coop-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-coop-red">Call or Text</h3>
              <p className="text-gray-600 mb-4">For urgent needs or quick questions</p>
              <p className="text-gray-500 italic">Phone number coming soon</p>
            </div>

            {/* In Person */}
            <div className="text-center p-8 bg-coop-cream rounded-lg">
              <div className="bg-coop-gold text-coop-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-coop-red">Meet In Person</h3>
              <p className="text-gray-600 mb-4">Join us at community meetings and events</p>
              <p className="text-gray-500 italic">Meeting locations announced via email</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-coop-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-headline font-bold text-coop-red mb-6 text-center">
              Send Us a Message
            </h2>
            
            <form className="space-y-6" action="#" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coop-red focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coop-red focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  I'm reaching out because... *
                </label>
                <select
                  id="reason"
                  name="reason"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coop-red focus:border-transparent"
                >
                  <option value="">Select a reason</option>
                  <option value="need-help">I need support (job, housing, benefits, etc.)</option>
                  <option value="want-to-join">I want to join the cooperative</option>
                  <option value="organizing">I'm interested in organizing</option>
                  <option value="volunteer">I want to volunteer or donate</option>
                  <option value="media">Media inquiry</option>
                  <option value="partnership">Partnership or collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us More *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coop-red focus:border-transparent"
                  placeholder="Share your situation, questions, or ideas..."
                />
              </div>

              <div className="bg-coop-cream p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Privacy Note:</strong> We respect your privacy and will only use your information 
                  to respond to your inquiry. We never share personal information without consent.
                </p>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-coop-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Social & Community */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-headline font-bold text-coop-red mb-8 text-center">
            Follow Our Organizing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-coop-cream p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-coop-red">Social Media</h3>
              <p className="text-gray-600 mb-4">
                Stay updated on our campaigns, victories, and calls to action
              </p>
              <div className="space-x-4">
                <a href="#" className="text-coop-red hover:text-red-700 font-medium">Facebook</a>
                <span className="text-gray-400">|</span>
                <a href="#" className="text-coop-red hover:text-red-700 font-medium">Instagram</a>
              </div>
              <p className="text-sm text-gray-500 mt-2">Links coming soon</p>
            </div>
            
            <div className="bg-coop-cream p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🗞️</div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-coop-red">Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Get monthly updates on our work and upcoming organizing opportunities
              </p>
              <Link 
                href="/contact"
                className="bg-coop-red text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors inline-block"
              >
                Subscribe
              </Link>
              <p className="text-sm text-gray-500 mt-2">Email us to join the list</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="py-16 bg-coop-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-headline font-bold mb-6">
            Need Immediate Help?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            If you're facing a housing, work, or other emergency, don't wait—reach out now.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="mailto:info@mendolaborcoop.ukiahumc.org?subject=URGENT: Need Immediate Help"
              className="bg-coop-gold text-coop-red px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors inline-block"
            >
              Email for Urgent Help
            </a>
            <Link
              href="/get-help"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-coop-red transition-colors inline-block"
            >
              View All Resources
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;