/*
Tailwind CSS Custom Color Extensions:
Add to tailwind.config.ts theme.extend.colors:
'gold': 'var(--gold)',
'moss': 'var(--moss)', 
'river': 'var(--river)',
'sand': 'var(--sand)',
'cream': 'var(--cream)',
*/

import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import HeroSlideshow from '../components/HeroSlideshow';

const HomePage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [showContactPopup, setShowContactPopup] = useState(false);

  const content = {
    en: {
      heroTitle: "Skilled local workers. Fair pay. Simple hiring.",
      heroSubtitle: "Building economic justice and worker solidarity in Mendocino County.",
      hireCTA: "Hire a Worker",
      joinCTA: "Join the Co-op",
      skipLink: "Skip to main content"
    },
    es: {
      heroTitle: "Trabajadores locales calificados. Pago justo. Contratación simple.",
      heroSubtitle: "Construyendo justicia económica y solidaridad obrera en el Condado de Mendocino.",
      hireCTA: "Contratar un Trabajador",
      joinCTA: "Únete a la Cooperativa",
      skipLink: "Ir al contenido principal"
    }
  };

  const currentContent = content[language];

  return (
    <>
      <Layout
      title="Mendo Labor Cooperative - Skilled Local Workers | Mendocino County, CA"
      description="Worker-owned cooperative providing skilled local labor in Ukiah and Mendocino County. Fair wages, quality work, community solidarity. Call (369) 216-1512 to hire or join."
      keywords="Ukiah workers, Mendocino County jobs, hire local workers, worker cooperative, fair wages, skilled labor, job placement Ukiah, cooperative jobs California"
      canonical="https://mendolaborcoop.ukiahumc.org"
      onContactClick={() => setShowContactPopup(true)}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CooperativeOrganization",
              "name": "Mendo Labor Cooperative",
              "alternateName": "Mendo Labor Co-op",
              "url": "https://mendolaborcoop.ukiahumc.org",
              "logo": "https://mendolaborcoop.ukiahumc.org/mendo_labor_coop_logo.png",
              "description": "Worker-owned cooperative providing job placement, mutual aid, and organizing support for workers in Mendocino County, California.",
              "foundingDate": "2025",
              "telephone": "+1-369-216-1512",
              "email": "coordinator@mendolaborcoop.ukiahumc.org",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "39.1502",
                  "longitude": "-123.2078"
                },
                "geoRadius": "50000"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ukiah",
                "addressRegion": "CA",
                "postalCode": "95482",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "39.1502",
                "longitude": "-123.2078"
              },
              "knowsAbout": [
                "Worker Rights",
                "Labor Organizing",
                "Cooperative Economics",
                "Mutual Aid",
                "Economic Justice",
                "Worker Solidarity"
              ],
              "memberOf": {
                "@type": "Organization",
                "name": "Worker Cooperative Movement"
              },
              "slogan": "Worker Power Builds Community Power",
              "sameAs": [
                "https://mendolaborcoop.ukiahumc.org"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Mendo Labor Cooperative",
              "image": "https://mendolaborcoop.ukiahumc.org/mendo_labor_coop_logo.png",
              "telephone": "+1-369-216-1512",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ukiah",
                "addressRegion": "CA",
                "postalCode": "95482",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "39.1502",
                "longitude": "-123.2078"
              },
              "url": "https://mendolaborcoop.ukiahumc.org",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Mendo Labor Cooperative",
              "url": "https://mendolaborcoop.ukiahumc.org",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mendolaborcoop.ukiahumc.org/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mendolaborcoop.ukiahumc.org"
              }]
            })
          }}
        />
      </Head>

      {/* Hero Section - Optimized for 13-16" laptop screens (768-900px viewport height) */}
      {/* Layout: 4 components fit in ~600-700px total height */}
      {/* Logo: ~100px | Tagline: ~80px | CTA: ~120px | Slideshow: ~280px */}
      <section className="relative w-full bg-sand">
          <div className="relative z-10 min-h-[100svh] flex flex-col justify-start pt-4 lg:pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
                
                {/* Left Column - Logo (1/3) + Tagline (2/3) + CTA */}
                <div className="flex flex-col space-y-3 lg:space-y-4">
                  
                  {/* Logo + Tagline Row */}
                  <div className="flex flex-col lg:flex-row lg:gap-6 lg:items-center">
                    {/* Component 1: LOGO - larger, minimal gap */}
                    <div className="flex-shrink-0 mx-auto lg:mx-0 lg:-ml-2">
                      <img
                        src="/mendo_labor_coop_logo.png"
                        alt="Mendo Labor Cooperative Logo"
                        width="200"
                        height="200"
                        className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56"
                      />
                    </div>
                    
                    {/* Component 2: TAGLINE - centered with logo, padded between logo and slideshow */}
                    <div className="text-center lg:text-left flex flex-col justify-center flex-1 lg:px-4">
                      <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-headline font-bold text-gold leading-tight">
                        {currentContent.heroTitle}
                      </h1>
                      <p className="text-sm sm:text-base lg:text-lg font-body text-moss mt-2 leading-snug">
                        {currentContent.heroSubtitle}
                      </p>
                    </div>
                  </div>

                  {/* Component 3: CTA - Full column width, aligned with logo */}
                  <div className="w-full lg:-ml-2">
                    <div className="bg-moss text-cream p-5 lg:p-6 xl:p-8 rounded-lg text-center border-4 border-gold shadow-xl">
                      <p className="text-sm lg:text-lg font-headline font-semibold mb-2">
                        Call Our Coordinators
                      </p>
                      <a 
                        href="tel:+13692161512" 
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-headline font-extrabold block hover:opacity-90 transition-opacity"
                      >
                        (369) 216-1512
                      </a>
                      <p className="text-sm lg:text-base font-body mt-2 opacity-90">
                        Hire a Worker • Join the Co-op
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Component 4: SLIDESHOW - ~280-320px height */}
                <div className="w-full h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem]">
                  <HeroSlideshow autoPlayInterval={5000} />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="bg-sand py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <li className="text-center">
                <div 
                  className="bg-moss text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  aria-label="Fair pay icon"
                >
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-headline font-semibold text-gold mb-2">Fair Pay</h3>
                <p className="font-body text-moss">Living wages for skilled local workers</p>
              </li>
              <li className="text-center">
                <div 
                  className="bg-river text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  aria-label="Trained professionals icon"
                >
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-headline font-semibold text-gold mb-2">Trained Professionals</h3>
                <p className="font-body text-moss">Skilled workers committed to quality and safety</p>
              </li>
              <li className="text-center">
                <div 
                  className="bg-gold text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  aria-label="Local workers icon"
                >
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-headline font-semibold text-gold mb-2">Local Workers</h3>
                <p className="font-body text-moss">Supporting our Mendocino County community</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gold text-center mb-12">
              Who We Are
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-gold mb-3">Worker-Owned Cooperative</h3>
                <p className="font-body text-moss">Democratically managed by the workers themselves, ensuring fair treatment and shared prosperity.</p>
              </div>
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-gold mb-3">Local Community Focus</h3>
                <p className="font-body text-moss">Rooted in Mendocino County, supporting local economic development and community resilience.</p>
              </div>
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-gold mb-3">Economic Justice</h3>
                <p className="font-body text-moss">Building alternative economic models that prioritize workers and community over profit extraction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Support */}
        <section className="py-16 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gold text-center mb-12">
              How We Support Each Other
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-gold mb-3">Job Placement</h3>
                <p className="font-body text-moss">Connecting skilled workers with meaningful employment opportunities throughout the region.</p>
              </div>
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-gold mb-3">Skills Training</h3>
                <p className="font-body text-moss">Providing education and certification programs to enhance worker capabilities and earning potential.</p>
              </div>
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-gold mb-3">Mutual Aid</h3>
                <p className="font-body text-moss">Emergency support, resource sharing, and collective care for our cooperative members.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 bg-cream">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-gold mb-4">
                Submit a Job Inquiry
              </h2>
              <p className="text-lg font-body text-moss">
                Tell us about your project and we'll get back to you promptly.
              </p>
            </div>

            {/* Phone CTA */}
            <div className="bg-moss text-cream p-5 rounded-lg text-center border-4 border-gold shadow-xl mb-8">
              <p className="text-base font-headline font-semibold mb-1">
                Prefer to call? Reach us directly:
              </p>
              <a 
                href="tel:+13692161512" 
                className="text-2xl md:text-3xl font-headline font-extrabold block hover:opacity-90 transition-opacity"
              >
                (369) 216-1512
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-sand rounded-lg shadow-lg p-6 md:p-8 border-4 border-moss">
              <form action="/contact-us" method="GET" className="space-y-5">
                <div>
                  <label htmlFor="home-name" className="block text-lg font-headline font-semibold text-gold mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="home-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-moss rounded-lg font-body text-moss focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="home-phone" className="block text-lg font-headline font-semibold text-gold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="home-phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-moss rounded-lg font-body text-moss focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="home-email" className="block text-lg font-headline font-semibold text-gold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="home-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-moss rounded-lg font-body text-moss focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="home-job" className="block text-lg font-headline font-semibold text-gold mb-2">
                    Job Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="home-job"
                    name="jobDescription"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-moss rounded-lg font-body text-moss focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold resize-vertical"
                    placeholder="Describe the job or work you need done..."
                  />
                </div>
                <Link
                  href="/contact-us"
                  className="block w-full py-4 rounded-lg text-xl font-headline font-bold bg-gold text-cream hover:bg-opacity-90 transition-colors text-center"
                >
                  Submit Inquiry
                </Link>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="bg-gold py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-cream mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl font-body text-cream mb-8 opacity-90">
              Join the movement for economic justice in Mendocino County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-cream text-gold px-8 py-3 rounded-lg text-lg font-headline font-semibold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-4 focus:ring-sand"
              >
                Get In Touch
              </Link>
              <Link
                href="/about"
                className="bg-moss text-cream px-8 py-3 rounded-lg text-lg font-headline font-semibold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-4 focus:ring-sand"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Popup Modal */}
        {showContactPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full border-4 border-moss">
              <div className="bg-moss text-cream px-6 py-4 rounded-t-lg">
                <h3 className="text-xl font-headline font-bold">Contact Our Coordinators</h3>
                <p className="text-sm font-body opacity-90">Cooperative Phone</p>
              </div>
              <div className="p-6">
                <div className="text-center">
                  <p className="text-lg font-body text-moss mb-6">
                    Ready to hire a worker or join our cooperative?
                  </p>
                  <div className="bg-sand rounded-lg p-4 mb-6">
                    <a
                      href="tel:+13692161512"
                      className="text-2xl font-headline font-bold text-gold hover:text-moss transition-colors"
                    >
                      (369) 216-1512
                    </a>
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
      </Layout>
    </>
  );
};

export default HomePage;


