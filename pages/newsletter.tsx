import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

const NewsletterPage: React.FC = () => {
  return (
    <Layout
      title="Newsletter Article - Mendo Labor Cooperative"
      description="Newsletter article about the Mendo Labor Cooperative for church and community distribution"
      keywords="Mendo Labor Cooperative, Ukiah, church newsletter, community support"
      canonical="https://mendolaborcoop.ukiahumc.org/newsletter"
    >
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>

      {/* Print-optimized Newsletter Article */}
      <section className="bg-white min-h-screen py-8">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Header with Logo */}
          <div className="text-center mb-8 border-b-4 border-gold pb-6">
            <img
              src="/mendo_labor_coop_logo.png"
              alt="Mendo Labor Cooperative Logo"
              className="w-32 h-32 mx-auto mb-4"
            />
            <h1 className="text-3xl font-headline font-bold text-moss mb-2">
              Mendo Labor Cooperative
            </h1>
            <p className="text-lg font-body text-gold italic">
              Local workers. Local jobs. Local prosperity.
            </p>
          </div>

          {/* Article Content */}
          <article className="space-y-6 text-moss font-body leading-relaxed">
            <h2 className="text-2xl font-headline font-bold text-gold mb-4">
              Supporting Our Community Through Cooperative Work
            </h2>

            <p className="text-lg">
              We're excited to share news about an important community project the church 
              is sponsoring: the <strong>Mendo Labor Cooperative</strong>, a worker-owned 
              cooperative connecting unemployed and underemployed community members with 
              opportunities for meaningful work right here in Ukiah.
            </p>

            <div className="bg-sand p-6 rounded-lg border-l-4 border-moss my-6">
              <h3 className="text-xl font-headline font-semibold text-moss mb-3">
                What is the Mendo Labor Cooperative?
              </h3>
              <p>
                The cooperative connects local residents who need work with community members 
                who need help with projects—everything from yard work and cleaning to home 
                repairs and moving assistance. It's a democratic, worker-led organization 
                focused on building economic stability, supporting housing security, and 
                keeping wealth in our community.
              </p>
            </div>

            <h3 className="text-xl font-headline font-semibold text-gold mt-8 mb-3">
              How You Can Help
            </h3>

            <p>
              As we work out the details and get the cooperative fully operational, we're 
              looking for <strong>early supporters</strong> from our church community who 
              might have projects—big or small—that could provide work opportunities for 
              our members.
            </p>

            <div className="bg-cream p-6 rounded-lg my-6">
              <h4 className="text-lg font-headline font-semibold text-moss mb-3">
                We're looking for help with:
              </h4>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Yard work and landscaping</li>
                <li>House cleaning and organization</li>
                <li>Moving and hauling</li>
                <li>Home repairs and maintenance</li>
                <li>Painting and general labor</li>
                <li>Seasonal projects (storm cleanup, etc.)</li>
              </ul>
            </div>

            <p>
              By hiring through the cooperative, you're not just getting quality work done—you're 
              directly supporting community members working toward economic stability while helping 
              us develop sustainable systems that will serve Ukiah for years to come.
            </p>

            <div className="bg-moss text-cream p-6 rounded-lg my-8 text-center">
              <h3 className="text-2xl font-headline font-bold mb-4">
                Ready to Support Local Workers?
              </h3>
              <p className="text-lg mb-4">
                Contact Cheryl, our Cooperative Coordinator
              </p>
              <div className="bg-cream text-moss px-6 py-4 rounded-lg inline-block mb-4">
                <p className="text-sm font-semibold mb-1">Call or Text:</p>
                <p className="text-3xl font-headline font-bold text-gold">
                  (369) 216-1512
                </p>
              </div>
              <p className="text-sm opacity-90">
                Email: mendolaborcoop@gmail.com
              </p>
            </div>

            <p className="text-sm italic border-t-2 border-gold pt-6 mt-8">
              Your patience and support as we work through the early stages of this project 
              means everything. Every job, no matter how small, helps us learn, grow, and 
              build a model that can truly make a difference in our community. Thank you 
              for being part of this journey with us.
            </p>
          </article>

          {/* QR Code Section */}
          <div className="mt-12 pt-8 border-t-4 border-gold text-center">
            <h3 className="text-xl font-headline font-semibold text-moss mb-4">
              Learn More & See Current Opportunities
            </h3>
            <div className="bg-cream p-6 rounded-lg inline-block">
              <p className="text-sm text-moss mb-3 font-body">Scan to visit our website:</p>
              {/* QR Code placeholder - will be generated */}
              <div className="w-48 h-48 mx-auto bg-white border-4 border-moss rounded-lg flex items-center justify-center">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://mendolaborcoop.ukiahumc.org')}`}
                  alt="QR Code for mendolaborcoop.ukiahumc.org"
                  className="w-full h-full p-2"
                />
              </div>
              <p className="text-xs text-moss mt-3 font-body">
                mendolaborcoop.ukiahumc.org
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t-2 border-sand text-center text-sm text-moss">
            <p className="font-body">
              The Mendo Labor Cooperative is a project sponsored by<br />
              Ukiah United Methodist Church
            </p>
            <p className="mt-2 text-xs opacity-75">
              Empowering workers. Strengthening community.
            </p>
          </div>

        </div>
      </section>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          nav, footer, button {
            display: none !important;
          }
          .max-w-3xl {
            max-width: 100%;
          }
          section {
            padding: 0.5in;
          }
        }
      `}</style>
    </Layout>
  );
};

export default NewsletterPage;
