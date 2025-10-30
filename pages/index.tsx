/*
Tailwind CSS Custom Color Extensions:
Add to tailwind.config.ts theme.extend.colors:
'redwood': 'var(--redwood)',
'moss': 'var(--moss)', 
'river': 'var(--river)',
'sand': 'var(--sand)',
'cream': 'var(--cream)',
*/

import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';

const HomePage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

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
    <Layout
      title="Mendo Labor Cooperative - Skilled Local Workers | Mendocino County"
      description="Building economic justice through worker solidarity in Mendocino County. Fair pay, skilled professionals, local hiring."
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
              "sameAs": [
                "https://www.facebook.com/mendolaborcoop",
                "https://www.instagram.com/mendolaborcoop"
              ],
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
              "slogan": "Worker Power Builds Community Power"
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

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
          {/* Background - Solid color (no image) */}
          <div className="absolute inset-0 bg-sand"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="text-center md:text-left">
                  {/* Logo */}
                  <img
                    src="/mendo_labor_coop_logo.png"
                    alt="Mendo Labor Cooperative Logo"
                    width="300"
                    height="300"
                    className="mb-8 mx-auto md:mx-0 w-64 h-64 md:w-80 md:h-80"
                  />
                  
                  {/* Headlines */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-redwood mb-4">
                    {currentContent.heroTitle}
                  </h1>
                  <p className="text-xl md:text-2xl font-body text-moss mb-8">
                    {currentContent.heroSubtitle}
                  </p>
                </div>

                {/* Right Column - CTAs */}
                <div className="flex flex-col space-y-4">
                  <button
                    type="button"
                    className="bg-redwood text-cream px-8 py-4 rounded-lg text-lg font-headline font-semibold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-4 focus:ring-cream"
                    aria-label="Hire a crew now"
                  >
                    {currentContent.hireCTA}
                  </button>
                  <button
                    type="button"
                    className="bg-moss text-cream px-8 py-4 rounded-lg text-lg font-headline font-semibold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-4 focus:ring-cream"
                  >
                    {currentContent.joinCTA}
                  </button>
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
                <h3 className="text-xl font-headline font-semibold text-redwood mb-2">Fair Pay</h3>
                <p className="font-body text-moss">Living wages for skilled local workers</p>
              </li>
              <li className="text-center">
                <div 
                  className="bg-river text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  aria-label="Trained professionals icon"
                >
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-headline font-semibold text-redwood mb-2">Trained Professionals</h3>
                <p className="font-body text-moss">Skilled workers committed to quality and safety</p>
              </li>
              <li className="text-center">
                <div 
                  className="bg-redwood text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  aria-label="Local workers icon"
                >
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-headline font-semibold text-redwood mb-2">Local Workers</h3>
                <p className="font-body text-moss">Supporting our Mendocino County community</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-redwood text-center mb-12">
              Who We Are
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-redwood mb-3">Worker-Owned Cooperative</h3>
                <p className="font-body text-moss">Democratically managed by the workers themselves, ensuring fair treatment and shared prosperity.</p>
              </div>
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-redwood mb-3">Local Community Focus</h3>
                <p className="font-body text-moss">Rooted in Mendocino County, supporting local economic development and community resilience.</p>
              </div>
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-redwood mb-3">Economic Justice</h3>
                <p className="font-body text-moss">Building alternative economic models that prioritize workers and community over profit extraction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Support */}
        <section className="py-16 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-redwood text-center mb-12">
              How We Support Each Other
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-redwood mb-3">Job Placement</h3>
                <p className="font-body text-moss">Connecting skilled workers with meaningful employment opportunities throughout the region.</p>
              </div>
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-redwood mb-3">Skills Training</h3>
                <p className="font-body text-moss">Providing education and certification programs to enhance worker capabilities and earning potential.</p>
              </div>
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-redwood mb-3">Mutual Aid</h3>
                <p className="font-body text-moss">Emergency support, resource sharing, and collective care for our cooperative members.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="bg-redwood py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-cream mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl font-body text-cream mb-8 opacity-90">
              Join the movement for economic justice in Mendocino County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cream text-redwood px-8 py-3 rounded-lg text-lg font-headline font-semibold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-4 focus:ring-sand"
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
      </Layout>
  );
};

export default HomePage;




