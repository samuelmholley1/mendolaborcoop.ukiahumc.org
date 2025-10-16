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
import Head from 'next/head';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const content = {
    en: {
      heroTitle: "Skilled local workers. Fair pay. Simple hiring.",
      heroSubtitle: "Building economic justice and worker solidarity in Mendocino County.",
      hireCTA: "Hire a Crew",
      joinCTA: "Join the Co-op",
      skipLink: "Skip to main content"
    },
    es: {
      heroTitle: "Trabajadores locales calificados. Pago justo. Contratación simple.",
      heroSubtitle: "Construyendo justicia económica y solidaridad obrera en el Condado de Mendocino.",
      hireCTA: "Contratar un Equipo",
      joinCTA: "Únete a la Cooperativa",
      skipLink: "Ir al contenido principal"
    }
  };

  const currentContent = content[language];

  return (
    <>
      <Head>
        <title>Mendo Labor Cooperative - Skilled Local Workers | Mendocino County</title>
        <meta name="description" content="Building economic justice through worker solidarity in Mendocino County. Fair pay, safe workers, local hiring." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mendo Labor Cooperative",
              "areaServed": "Mendocino County",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@mendolaborcoop.ukiahumc.org",
                "telephone": "+1-XXX-XXX-XXXX"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ukiah",
                "addressRegion": "CA",
                "addressCountry": "US"
              }
            })
          }}
        />
      </Head>

      <style jsx global>{`
        :root {
          --redwood: #7A3E2E;
          --moss: #3D6B47;
          --river: #2D637A;
          --sand: #E6D9C7;
          --cream: #FAF7F2;
        }
        
        .bg-redwood { background-color: var(--redwood); }
        .bg-moss { background-color: var(--moss); }
        .bg-river { background-color: var(--river); }
        .bg-sand { background-color: var(--sand); }
        .bg-cream { background-color: var(--cream); }
        
        .text-redwood { color: var(--redwood); }
        .text-moss { color: var(--moss); }
        .text-river { color: var(--river); }
        .text-sand { color: var(--sand); }
        .text-cream { color: var(--cream); }
        
        .border-redwood { border-color: var(--redwood); }
        .border-moss { border-color: var(--moss); }
        .border-river { border-color: var(--river); }
        .border-sand { border-color: var(--sand); }
        .border-cream { border-color: var(--cream); }
        
        .border-l-moss { border-left-color: var(--moss); }
        
        .font-headline { font-family: 'Public Sans', sans-serif; }
        .font-body { font-family: 'Source Sans 3', sans-serif; }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Skip Link */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-redwood text-cream px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cream"
      >
        {currentContent.skipLink}
      </a>

      {/* Header */}
      <header className="bg-cream border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/mendo_labor_coop_favicon.png"
                alt="Mendo Labor Cooperative Logo"
                width="40"
                height="40"
                className="mr-3"
              />
              <span className="font-headline font-bold text-redwood text-lg">
                Mendo Labor Cooperative
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-redwood font-body hover:text-moss transition-colors focus:outline-none focus:ring-2 focus:ring-moss rounded px-2 py-1">
                Home
              </Link>
              <Link href="/about" className="text-redwood font-body hover:text-moss transition-colors focus:outline-none focus:ring-2 focus:ring-moss rounded px-2 py-1">
                About
              </Link>
              <Link href="/services" className="text-redwood font-body hover:text-moss transition-colors focus:outline-none focus:ring-2 focus:ring-moss rounded px-2 py-1">
                Services
              </Link>
              <Link href="/get-help" className="text-redwood font-body hover:text-moss transition-colors focus:outline-none focus:ring-2 focus:ring-moss rounded px-2 py-1">
                Get Help
              </Link>
              <Link href="/join" className="text-redwood font-body hover:text-moss transition-colors focus:outline-none focus:ring-2 focus:ring-moss rounded px-2 py-1">
                Join
              </Link>
              <Link href="/resources" className="text-redwood font-body hover:text-moss transition-colors focus:outline-none focus:ring-2 focus:ring-moss rounded px-2 py-1">
                Resources
              </Link>
              <Link href="/contact" className="text-redwood font-body hover:text-moss transition-colors focus:outline-none focus:ring-2 focus:ring-moss rounded px-2 py-1">
                Contact
              </Link>
              <Link
                href="/hire"
                className="bg-redwood text-cream px-4 py-2 rounded font-body font-semibold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-cream"
                aria-label="Hire a crew now"
              >
                {currentContent.hireCTA}
              </Link>
            </nav>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm font-body ${language === 'en' ? 'text-redwood font-semibold' : 'text-moss'} hover:text-redwood transition-colors focus:outline-none focus:ring-2 focus:ring-moss rounded`}
              >
                EN
              </button>
              <span className="text-sand">|</span>
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 text-sm font-body ${language === 'es' ? 'text-redwood font-semibold' : 'text-moss'} hover:text-redwood transition-colors focus:outline-none focus:ring-2 focus:ring-moss rounded`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </header>

      <main id="content">
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
                    width="120"
                    height="120"
                    className="mb-6 mx-auto md:mx-0"
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
                  aria-label="Safe and vetted icon"
                >
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-headline font-semibold text-redwood mb-2">Safe & Vetted</h3>
                <p className="font-body text-moss">Background-checked, trained professionals</p>
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
              <button
                type="button"
                className="bg-cream text-redwood px-8 py-3 rounded-lg text-lg font-headline font-semibold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-4 focus:ring-sand"
              >
                Hire a Crew
              </button>
              <button
                type="button"
                className="bg-moss text-cream px-8 py-3 rounded-lg text-lg font-headline font-semibold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-4 focus:ring-sand"
              >
                Join the Co-op
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-redwood text-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Navigation */}
            <div>
              <h3 className="text-lg font-headline font-semibold mb-4">Navigate</h3>
              <nav className="space-y-2">
                <Link href="/" className="block font-body hover:text-sand transition-colors focus:outline-none focus:ring-2 focus:ring-sand rounded px-1">
                  Home
                </Link>
                <Link href="/about" className="block font-body hover:text-sand transition-colors focus:outline-none focus:ring-2 focus:ring-sand rounded px-1">
                  About
                </Link>
                <Link href="/services" className="block font-body hover:text-sand transition-colors focus:outline-none focus:ring-2 focus:ring-sand rounded px-1">
                  Services
                </Link>
                <Link href="/join" className="block font-body hover:text-sand transition-colors focus:outline-none focus:ring-2 focus:ring-sand rounded px-1">
                  Join
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-headline font-semibold mb-4">Contact</h3>
              <div className="space-y-2 font-body">
                <p>
                  <a 
                    href="mailto:info@mendolaborcoop.ukiahumc.org" 
                    className="hover:text-sand transition-colors focus:outline-none focus:ring-2 focus:ring-sand rounded px-1"
                  >
                    info@mendolaborcoop.ukiahumc.org
                  </a>
                </p>
                <p>
                  <a 
                    href="tel:+1-XXX-XXX-XXXX" 
                    className="hover:text-sand transition-colors focus:outline-none focus:ring-2 focus:ring-sand rounded px-1"
                  >
                    (XXX) XXX-XXXX
                  </a>
                </p>
                <p>Mendocino County, CA</p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-headline font-semibold mb-4">Legal</h3>
              <p className="font-body text-sm opacity-75 leading-relaxed">
                Independent worker cooperative. Building Bridges is a meeting venue, not a party to services.
              </p>
            </div>
          </div>

          <div className="border-t border-cream border-opacity-20 mt-8 pt-8 text-center">
            <p className="font-body text-sm opacity-75">
              © 2025 Mendo Labor Cooperative. Worker power builds community power.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;




