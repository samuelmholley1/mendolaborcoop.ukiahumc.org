import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const ContactPage: React.FC = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  return (
    <>
      <Layout 
      title="Contact Us - Get Connected | Mendo Labor Cooperative"
      description="Connect with the Mendo Labor Cooperative in Ukiah, CA. Call (369) 216-1512 for worker support, job placement, or to join our worker-owned collective."
      keywords="contact Mendo Labor, hire workers Ukiah, join worker cooperative, Mendocino County jobs, worker solidarity, cooperative contact"
      canonical="https://mendolaborcoop.ukiahumc.org/contact"
      onContactClick={() => setShowContactPopup(true)}
    >
      {/* Hero Section */}
      <section className="bg-gold text-cream py-20">
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
              <h3 className="text-xl font-headline font-semibold mb-4 text-gold">Call or Text Our Coordinators</h3>
              <p className="text-moss mb-4 font-body">Coop Coordinators</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-body text-moss mb-1">Cheryl:</p>
                  <a href="tel:+13692161512" className="text-2xl font-headline font-bold text-moss hover:text-gold transition-colors">
                    (369) 216-1512
                  </a>
                </div>
                <div>
                  <p className="text-sm font-body text-moss mb-1">Braven:</p>
                  <a href="tel:+15598800960" className="text-2xl font-headline font-bold text-moss hover:text-gold transition-colors">
                    (559) 880-0960
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-white border-l-8 border-l-river rounded-r-lg shadow-md">
              <div className="bg-river text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-gold">Email Us</h3>
              <p className="text-moss mb-4 font-body">General inquiries</p>
              <a href="mailto:mendolaborcoop@gmail.com" className="text-xl font-headline font-bold text-moss hover:text-gold transition-colors break-all">
                mendolaborcoop@gmail.com
              </a>
            </div>

          </div>

          {/* In Person - Full Width Below */}
          <div className="mt-8">
            <div className="text-center p-8 bg-white border-l-8 border-l-gold rounded-r-lg shadow-md">
              <div className="bg-gold text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-gold">Meet In Person</h3>
              <p className="text-moss mb-4 font-body">Join us at community meetings and events</p>
              <p className="text-moss italic font-body">Check back for meeting locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Location */}
      <section className="py-16 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-gold mb-6">
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

      {/* Community Engagement */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-headline font-bold text-gold mb-12 text-center">
            Get Involved
          </h2>

          <div className="bg-white border-l-8 border-l-river p-8 rounded-r-lg shadow-md text-center max-w-2xl mx-auto">
            <div className="text-4xl mb-4">📢</div>
            <h3 className="text-xl font-headline font-semibold mb-4 text-gold">Join the Movement</h3>
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
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gold text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-headline font-bold mb-6">
            Worker Power Builds Community Power
          </h2>
          <p className="text-xl mb-8 opacity-90 font-body">
            Together we're building economic justice and worker solidarity in Mendocino County
          </p>
          <Link
            href="/"
            className="bg-cream text-gold px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block font-headline"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>

    {/* Contact Popup Modal */}
    {showContactPopup && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full border-4 border-moss">
          <div className="bg-moss text-cream px-6 py-4 rounded-t-lg">
            <h3 className="text-xl font-headline font-bold">Contact Our Coordinators</h3>
            <p className="text-sm font-body opacity-90">Cooperative Coordinators</p>
          </div>
          <div className="p-6">
            <div className="text-center">
              <p className="text-lg font-body text-moss mb-6">
                Ready to hire a worker or join our cooperative?
              </p>
              <div className="bg-sand rounded-lg p-4 mb-6 space-y-4">
                <div>
                  <p className="text-sm font-body text-moss mb-2">Cheryl:</p>
                  <a
                    href="tel:+13692161512"
                    className="text-2xl font-headline font-bold text-gold hover:text-moss transition-colors"
                  >
                    (369) 216-1512
                  </a>
                </div>
                <div>
                  <p className="text-sm font-body text-moss mb-2">Braven:</p>
                  <a
                    href="tel:+15598800960"
                    className="text-2xl font-headline font-bold text-gold hover:text-moss transition-colors"
                  >
                    (559) 880-0960
                  </a>
                </div>
              </div>
              <p className="text-sm font-body text-moss">
                Cheryl and Braven are our cooperative coordinators and will be happy to discuss your needs and answer any questions.
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowContactPopup(false)}
                className="bg-moss text-cream px-6 py-2 rounded-lg font-headline font-semibold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-4 focus:ring-sand"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);
};

export default ContactPage;
