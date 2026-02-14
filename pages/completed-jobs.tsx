import React, { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

interface CompletedJob {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  workers: number;
  category: 'Yard Work' | 'Moving' | 'Landscaping' | 'Construction' | 'Cleaning' | 'Other';
}

const completedJobs: CompletedJob[] = [
  {
    id: 1,
    title: 'Residential Yard Cleanup',
    date: 'February 10, 2026',
    location: 'Ukiah, CA',
    description: 'Complete yard cleanup including debris removal, brush clearing, and basic trimming for residential property.',
    workers: 3,
    category: 'Yard Work'
  },
  {
    id: 2,
    title: 'Moving Assistance - 3 Bedroom Home',
    date: 'February 8, 2026',
    location: 'Ukiah, CA',
    description: 'Assisted family with loading, transport, and unloading of household items for local move.',
    workers: 4,
    category: 'Moving'
  },
  {
    id: 3,
    title: 'Garden Bed Installation',
    date: 'February 5, 2026',
    location: 'Hopland, CA',
    description: 'Built and installed raised garden beds, filled with soil, and prepared for spring planting.',
    workers: 2,
    category: 'Landscaping'
  },
  {
    id: 4,
    title: 'Fence Repair & Painting',
    date: 'February 1, 2026',
    location: 'Ukiah, CA',
    description: 'Repaired damaged fence sections and applied fresh coat of paint to 100 feet of perimeter fencing.',
    workers: 2,
    category: 'Construction'
  },
  {
    id: 5,
    title: 'Property Debris Removal',
    date: 'January 28, 2026',
    location: 'Redwood Valley, CA',
    description: 'Large-scale cleanup and debris removal from vacant property, hauled 3 truckloads to disposal facility.',
    workers: 5,
    category: 'Yard Work'
  },
  {
    id: 6,
    title: 'Commercial Office Cleaning',
    date: 'January 25, 2026',
    location: 'Ukiah, CA',
    description: 'Deep cleaning of commercial office space including floors, windows, and common areas.',
    workers: 3,
    category: 'Cleaning'
  },
  {
    id: 7,
    title: 'Tree Trimming & Removal',
    date: 'January 20, 2026',
    location: 'Potter Valley, CA',
    description: 'Trimmed overgrown trees and removed one hazardous tree threatening power lines.',
    workers: 4,
    category: 'Yard Work'
  },
  {
    id: 8,
    title: 'Apartment Move-Out Cleaning',
    date: 'January 15, 2026',
    location: 'Ukiah, CA',
    description: 'Complete move-out cleaning service for 2-bedroom apartment to ensure deposit return.',
    workers: 2,
    category: 'Cleaning'
  }
];

const categoryColors: Record<CompletedJob['category'], string> = {
  'Yard Work': 'bg-moss text-cream',
  'Moving': 'bg-gold text-cream',
  'Landscaping': 'bg-river text-cream',
  'Construction': 'bg-orange-600 text-cream',
  'Cleaning': 'bg-blue-600 text-cream',
  'Other': 'bg-gray-600 text-cream'
};

const CompletedJobsPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - consider using environment variable or more secure method
    if (password === 'mendocoop2026') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <Layout
        title="Completed Jobs - Internal | Mendo Labor Cooperative"
        description="Internal page - password protected"
        keywords=""
        canonical="https://mendolaborcoop.ukiahumc.org/completed-jobs"
      >
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>

        <section className="min-h-screen bg-sand flex items-center justify-center py-12 px-4">
          <div className="max-w-md w-full">
            <div className="bg-cream rounded-lg shadow-lg p-8 border-4 border-moss">
              <div className="text-center mb-6">
                <div className="bg-moss text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h1 className="text-3xl font-headline font-bold text-gold mb-2">
                  Password Required
                </h1>
                <p className="text-moss font-body">
                  This page is for internal use only.
                </p>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="password" className="block text-lg font-headline font-semibold text-gold mb-2">
                    Enter Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-moss rounded-lg font-body text-moss focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                    placeholder="Enter password"
                    autoFocus
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-moss text-cream px-6 py-3 rounded-lg text-lg font-headline font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Access Page
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout
      title="Completed Jobs - Our Work | Mendo Labor Cooperative"
      description="See the quality work completed by Mendo Labor Cooperative workers across Mendocino County. From yard work to moving help, we deliver results."
      keywords="completed jobs Ukiah, labor cooperative work, yard work examples, moving help Mendocino, local workers portfolio"
      canonical="https://mendolaborcoop.ukiahumc.org/completed-jobs"
    >
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Completed Jobs - Mendo Labor Cooperative",
              "description": "Portfolio of completed jobs by Mendo Labor Cooperative workers",
              "itemListElement": completedJobs.map((job, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Service",
                  "name": job.title,
                  "description": job.description
                }
              }))
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gold text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Completed Jobs
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Quality work delivered by our skilled cooperative members across Mendocino County
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-l-moss">
              <div className="text-4xl font-headline font-bold text-gold mb-2">
                {completedJobs.length}+
              </div>
              <div className="text-lg font-body text-moss">
                Jobs Completed
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-l-gold">
              <div className="text-4xl font-headline font-bold text-gold mb-2">
                {completedJobs.reduce((sum, job) => sum + job.workers, 0)}+
              </div>
              <div className="text-lg font-body text-moss">
                Worker Hours
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-l-river">
              <div className="text-4xl font-headline font-bold text-gold mb-2">
                100%
              </div>
              <div className="text-lg font-body text-moss">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-16 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {completedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-l-moss hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-headline font-bold text-gold flex-1">
                      {job.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-headline font-semibold whitespace-nowrap ml-4 ${categoryColors[job.category]}`}>
                      {job.category}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-moss font-body">
                      <span className="mr-2">📅</span>
                      <span>{job.date}</span>
                    </div>
                    <div className="flex items-center text-moss font-body">
                      <span className="mr-2">📍</span>
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-moss font-body">
                      <span className="mr-2">👷</span>
                      <span>{job.workers} {job.workers === 1 ? 'Worker' : 'Workers'}</span>
                    </div>
                  </div>
                  
                  <p className="text-moss font-body leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-moss text-cream py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
            Need Help With Your Next Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our skilled workers are ready to help with yard work, moving, landscaping, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13692161512"
              className="bg-gold text-cream px-8 py-4 rounded-lg text-xl font-headline font-bold hover:bg-opacity-90 transition-colors inline-block"
            >
              📞 Call (369) 216-1512
            </a>
            <a
              href="/contact-us"
              className="bg-cream text-moss px-8 py-4 rounded-lg text-xl font-headline font-bold hover:bg-opacity-90 transition-colors inline-block"
            >
              ✉️ Submit an Inquiry
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompletedJobsPage;
