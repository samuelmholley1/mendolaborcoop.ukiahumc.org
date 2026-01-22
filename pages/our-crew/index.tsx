import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Head from 'next/head';

export interface WorkerProfile {
  slug: string;
  name: string;
  photoUrl?: string;
  photoCaption?: string;
  tagline: string;
  skills: string[];
  yearsExperience?: string;
  isPublic: boolean; // If false, requires password to view
}

// Worker profiles data
export const workers: WorkerProfile[] = [
  {
    slug: 'tony',
    name: 'Tony',
    photoUrl: '/workers/tony.jpg',
    photoCaption: 'Tony, Skilled Painter & General Laborer',
    tagline: 'Master painter with 32+ years of experience and a tireless work ethic',
    skills: ['Professional Painting', 'Faux Finishes', 'Venetian Plaster', 'Drywall', 'Tree Trimming', 'Bilingual'],
    yearsExperience: '32+ years',
    isPublic: false, // Tony's profile is password protected per request
  },
  {
    slug: 'david',
    name: 'David',
    photoUrl: '/workers/david.jpg',
    photoCaption: 'David, Skilled Tradesman, Maintenance Specialist & Artist',
    tagline: 'Union-trained tradesman with diverse skills in masonry, maintenance, and grounds work',
    skills: ['Concrete & Masonry', 'Landscape Maintenance', 'Irrigation', 'Office Setup', 'General Maintenance'],
    yearsExperience: '10+ years',
    isPublic: true, // David's profile is public
  },
  {
    slug: 'efren',
    name: 'Efren',
    photoUrl: '/workers/efren.jpg',
    photoCaption: 'Efren, Skilled Mechanic, Welder & Heavy Equipment Operator',
    tagline: 'Central Valley veteran with hands-on expertise in mechanics, welding, and heavy machinery',
    skills: ['Mechanics', 'Welding', 'Heavy Equipment', 'Farm Labor', 'Construction', 'Solar Installation'],
    yearsExperience: '15+ years',
    isPublic: true,
  },
  {
    slug: 'braven',
    name: 'Braven',
    photoUrl: '/workers/braven.jpg',
    photoCaption: 'Braven, Co-op Coordinator | Auto Mechanic | Creative & Cosmetologist',
    tagline: 'Foundational co-op member with diverse skills from auto mechanics to cosmetology and creative arts',
    skills: ['Co-op Coordinator', 'Auto Maintenance', 'Cosmetology', 'Welding/Art', 'Logistics', 'Landscaping'],
    yearsExperience: 'Multi-skilled',
    isPublic: true,
  },
  {
    slug: 'casey',
    name: 'Casey',
    photoUrl: '/workers/casey.jpg',
    photoCaption: 'Casey, General Laborer, Landscaper & Former Property Manager',
    tagline: 'Ukiah native with 17 years property management and industrial experience ready for hands-on work',
    skills: ['Landscaping', 'Property Maintenance', 'Forklift Operation', 'Heavy Lifting', 'Pressure Washing', 'Tech Support'],
    yearsExperience: '20+ years',
    isPublic: true,
  },
  // Add more workers here as they join
];

const OurCrewPage: React.FC = () => {
  const publicWorkers = workers.filter(w => w.isPublic);
  const hasProtectedWorkers = workers.some(w => !w.isPublic);

  return (
    <Layout
      title="Our Crew - Meet the Workers | Mendo Labor Cooperative"
      description="Meet the skilled workers of Mendo Labor Cooperative. Browse our directory of experienced painters, carpenters, landscapers, and general laborers ready to help with your projects in Mendocino County."
      keywords="Ukiah workers, Mendocino County laborers, hire local workers, skilled trades, painters Ukiah, handyman services, worker cooperative"
      canonical="https://mendolaborcoop.ukiahumc.org/our-crew"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Mendo Labor Cooperative Workers",
              "description": "Skilled workers available through the Mendo Labor Cooperative",
              "numberOfItems": publicWorkers.length,
              "itemListElement": publicWorkers.map((worker, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Person",
                  "name": worker.name,
                  "description": worker.tagline,
                  "knowsAbout": worker.skills
                }
              }))
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-moss text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Our Crew
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-6">
              Meet the skilled workers who make our cooperative strong
            </p>
            <p className="text-lg max-w-2xl mx-auto opacity-80">
              Each of our members brings unique skills and experience to every job. 
              Browse their profiles to find the right worker for your project.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Banner */}
      <section className="bg-gold/20 border-y border-gold/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="bg-moss text-cream w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <span className="text-moss font-medium">Browse worker profiles</span>
            </div>
            <svg className="hidden md:block w-6 h-6 text-moss/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="flex items-center gap-2">
              <span className="bg-moss text-cream w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <span className="text-moss font-medium">Contact coordinator</span>
            </div>
            <svg className="hidden md:block w-6 h-6 text-moss/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="flex items-center gap-2">
              <span className="bg-moss text-cream w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <span className="text-moss font-medium">Negotiate directly with worker</span>
            </div>
          </div>
        </div>
      </section>

      {/* Workers Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter/Sort could go here in future */}
          
          {publicWorkers.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-sand rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-moss/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-headline font-bold text-gold mb-4">
                Worker Profiles Coming Soon
              </h2>
              <p className="text-moss/70 max-w-md mx-auto mb-8">
                We're currently building out our worker directory. In the meantime, 
                contact our coordinator to learn about available workers and their skills.
              </p>
              <Link
                href="/hire"
                className="inline-flex items-center gap-2 bg-moss text-cream px-6 py-3 rounded-lg hover:bg-moss/90 transition-colors font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us to Hire
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publicWorkers.map((worker) => (
                <WorkerCard key={worker.slug} worker={worker} />
              ))}
            </div>
          )}

          {/* Protected Profiles Notice */}
          {hasProtectedWorkers && (
            <div className="mt-12 bg-river/10 border border-river/20 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-river mb-2">
                Additional Workers Available
              </h3>
              <p className="text-moss/80 text-sm mb-4">
                Some worker profiles are only visible to authorized users. 
                Contact our coordinator for the full roster.
              </p>
              <a
                href="tel:3692161512"
                className="text-river hover:text-river/80 font-medium"
              >
                Call Cheryl: (369) 216-1512
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-headline font-bold text-gold mb-6">
            Ready to Hire a Worker?
          </h2>
          <p className="text-moss/80 text-lg mb-8 max-w-2xl mx-auto">
            The Mendo Labor Co-op connects you directly with independent workers. 
            We facilitate fair wages and community support for every job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hire"
              className="inline-flex items-center justify-center gap-2 bg-moss text-cream px-8 py-4 rounded-lg hover:bg-moss/90 transition-colors font-semibold text-lg"
            >
              Learn How to Hire
            </Link>
            <a
              href="tel:3692161512"
              className="inline-flex items-center justify-center gap-2 bg-white text-moss border-2 border-moss px-8 py-4 rounded-lg hover:bg-moss/5 transition-colors font-semibold text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-12 bg-moss text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-headline font-bold mb-4">
            Are You a Worker Looking to Join?
          </h2>
          <p className="text-cream/80 mb-6">
            We're always welcoming new members. Join the co-op and get access to fair-paying jobs, 
            community support, and worker solidarity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-cream text-moss px-6 py-3 rounded-lg hover:bg-cream/90 transition-colors font-semibold"
          >
            Learn About Joining
          </Link>
        </div>
      </section>
    </Layout>
  );
};

// Worker Card Component
const WorkerCard: React.FC<{ worker: WorkerProfile }> = ({ worker }) => {
  return (
    <Link
      href={`/our-crew/${worker.slug}`}
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Photo */}
      <div className="aspect-[4/3] bg-sand relative overflow-hidden">
        {worker.photoUrl ? (
          <img
            src={worker.photoUrl}
            alt={worker.photoCaption || worker.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-moss/20 to-river/20">
            <div className="w-24 h-24 bg-moss/30 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-moss/50">
                {worker.name.charAt(0)}
              </span>
            </div>
          </div>
        )}
        
        {/* Experience Badge */}
        {worker.yearsExperience && (
          <div className="absolute top-4 right-4 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            {worker.yearsExperience}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-headline font-bold text-gold mb-2 group-hover:text-moss transition-colors">
          {worker.name}
        </h3>
        <p className="text-moss/70 text-sm mb-4 line-clamp-2">
          {worker.tagline}
        </p>
        
        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2">
          {worker.skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="bg-sand text-moss text-xs px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
          {worker.skills.length > 3 && (
            <span className="text-moss/50 text-xs py-1">
              +{worker.skills.length - 3} more
            </span>
          )}
        </div>

        {/* View Profile Link */}
        <div className="mt-4 pt-4 border-t border-sand flex items-center justify-between">
          <span className="text-moss font-medium text-sm group-hover:text-river transition-colors">
            View Profile
          </span>
          <svg className="w-5 h-5 text-moss/50 group-hover:text-river group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default OurCrewPage;
