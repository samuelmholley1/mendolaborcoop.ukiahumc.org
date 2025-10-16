import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const ContactPage: React.FC = () => {
  return (
    <Layout 
      title="Contact | Mendo Labor Cooperative"
      description="Get in touch with the Mendo Labor Cooperative. Connect for support, organizing, or joining our worker-owned collective."
    >
      {/* Hero Section */}
      <section className="bg-redwood text-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              Get Connected
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              We're building a movement for worker power and economic justice in Mendocino County
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Phone */}
            <div className="text-center p-8 bg-white border-l-8 border-l-moss rounded-r-lg shadow-md">
              <div className="bg-moss text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-redwood">Call or Text</h3>
              <p className="text-moss mb-4 font-body">For urgent needs or quick questions</p>
              <p className="text-moss italic font-body">Phone number coming soon</p>
            </div>

            {/* In Person */}
            <div className="text-center p-8 bg-white border-l-8 border-l-river rounded-r-lg shadow-md">
              <div className="bg-river text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-redwood">Meet In Person</h3>
              <p className="text-moss mb-4 font-body">Join us at community meetings and events</p>
              <p className="text-moss italic font-body">Check back for meeting locations</p>
            </div>

          </div>
        </div>
      </section>

      {/* About Location */}
      <section className="py-16 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-redwood mb-6">
            Serving Mendocino County
          </h2>
          <p className="text-xl font-body text-moss mb-8">
            We're organizing unhoused workers and building solidarity across Ukiah and surrounding communities
          </p>
          <div className="bg-white border-l-8 border-l-moss p-8 rounded-r-lg shadow-md max-w-2xl mx-auto">
            <p className="text-moss font-body mb-4">
              📍 Based in Ukiah, CA
            </p>
            <p className="text-moss font-body">
              Serving workers throughout Mendocino County
            </p>
          </div>
        </div>
      </section>

      {/* Social & Community */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-headline font-bold text-redwood mb-12 text-center">
            Follow Our Organizing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-l-8 border-l-moss p-8 rounded-r-lg shadow-md text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-redwood">Social Media</h3>
              <p className="text-moss mb-4 font-body">
                Stay updated on our campaigns, victories, and calls to action
              </p>
              <div className="space-x-4">
                <a href="#" className="text-moss hover:text-redwood font-medium transition-colors">Facebook</a>
                <span className="text-sand">|</span>
                <a href="#" className="text-moss hover:text-redwood font-medium transition-colors">Instagram</a>
              </div>
              <p className="text-sm text-moss mt-2 italic">Links coming soon</p>
            </div>
            
            <div className="bg-white border-l-8 border-l-river p-8 rounded-r-lg shadow-md text-center">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-redwood">Join the Movement</h3>
              <p className="text-moss mb-4 font-body">
                Learn more about becoming a cooperative member or supporting our work
              </p>
              <Link 
                href="/about"
                className="bg-moss text-cream px-6 py-3 rounded-lg font-medium hover:bg-moss/90 transition-colors inline-block font-headline"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-redwood text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-headline font-bold mb-6">
            Worker Power Builds Community Power
          </h2>
          <p className="text-xl mb-8 opacity-90 font-body">
            Together we're building economic justice and worker solidarity in Mendocino County
          </p>
          <Link
            href="/"
            className="bg-cream text-redwood px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block font-headline"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
