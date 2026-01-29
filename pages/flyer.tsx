import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';

const FlyerPage: React.FC = () => {
  const [debug, setDebug] = useState(false);
  const [measurements, setMeasurements] = useState<Record<string, number>>({});
  
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (debug) {
      const measure = () => {
        setMeasurements({
          container: containerRef.current?.offsetHeight || 0,
          containerInner: containerRef.current?.clientHeight || 0,
          logo: logoRef.current?.offsetHeight || 0,
          headline: headlineRef.current?.offsetHeight || 0,
          cta: ctaRef.current?.offsetHeight || 0,
          photos: photosRef.current?.offsetHeight || 0,
          footer: footerRef.current?.offsetHeight || 0,
        });
      };
      measure();
      window.addEventListener('resize', measure);
      return () => window.removeEventListener('resize', measure);
    }
  }, [debug]);

  // Flyer uses percentage-based heights to work in both screen (495px) and print (5.5in)
  const Flyer = ({ showDebug = false }: { showDebug?: boolean }) => (
    <div 
      ref={showDebug ? containerRef : undefined}
      className="flyer-container bg-white p-3 shadow-lg rounded-lg border-4 border-moss overflow-hidden flex flex-col" 
      style={{ height: '495px' }}
    >
      
      {/* Logo - 12% */}
      <div ref={showDebug ? logoRef : undefined} className="text-center flex-shrink-0 mb-2" style={{ height: '12%' }}>
        <img
          src="/mendo_labor_coop_logo.png"
          alt="Mendo Labor Cooperative"
          className="mx-auto h-full w-auto"
        />
      </div>

      {/* Headline - 11% */}
      <div ref={showDebug ? headlineRef : undefined} className="text-center flex-shrink-0 flex flex-col justify-center mb-2" style={{ height: '11%' }}>
        <h1 className="text-xl font-headline font-black text-gold leading-none">
          Need an Extra Hand?
        </h1>
        <p className="text-xs text-moss font-body font-semibold mt-1 leading-none">
          Yard work • Moving help • Odd jobs
        </p>
      </div>

      {/* Phone CTA - 12% */}
      <div ref={showDebug ? ctaRef : undefined} className="text-center flex-shrink-0 flex flex-col justify-center mb-3" style={{ height: '12%' }}>
        <p className="text-[10px] font-headline font-semibold text-moss leading-none">
          Call Our Coordinators Cheryl & Braven
        </p>
        <div className="contact-box bg-[#356A45] text-white py-1.5 px-3 rounded-md inline-block mt-1 mx-auto">
          <span className="text-xl font-headline font-black leading-none whitespace-nowrap" style={{ color: '#FFFFFF' }}>
            (369) 216-1512
          </span>
        </div>
      </div>

      {/* Photos 2x2 grid - grows to fill space */}
      <div ref={showDebug ? photosRef : undefined} className="grid grid-cols-2 gap-3 flex-grow mx-auto" style={{ width: '75%' }}>
        <img src="/co-op-job-photo-1.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded aspect-square" />
        <img src="/co-op-job-photo-2.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded aspect-square" />
        <img src="/co-op-job-photo-3.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded aspect-square" />
        <img src="/co-op-job-photo-4.jpeg" alt="Workers" className="w-full h-full object-cover object-[center_30%] rounded aspect-square" />
      </div>

      {/* Footer - pinned to bottom */}
      <div ref={showDebug ? footerRef : undefined} className="text-center flex-shrink-0 flex items-center justify-center border-t border-moss/30 mt-2 pt-1">
        <p className="text-[9px] font-body text-moss leading-none">
          mendolaborcoop@gmail.com • mendolaborcoop.ukiahumc.org
        </p>
      </div>

    </div>
  );

  return (
    <>
      <Head>
        <title>Printable Flyer - Need an Extra Hand? | Mendo Labor Cooperative</title>
        <meta name="description" content="Print our flyer to spread the word about local help for yard work, moving, and odd jobs in Mendocino County. Mendo Labor Cooperative." />
        <meta name="robots" content="noindex, follow" />
        <style>{`
          @media print {
            html, body { 
              margin: 0; 
              padding: 0;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .no-print { display: none !important; }
            .min-h-screen { min-height: auto !important; }
            .bg-cream { background: white !important; }
            .p-8 { padding: 0 !important; }
            .print-page {
              width: 8.5in;
              height: 11in;
              display: grid !important;
              grid-template-columns: 4.25in 4.25in;
              grid-template-rows: 5.5in 5.5in;
              gap: 0;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              page-break-after: avoid;
            }
            .flyer-container { 
              width: 4.25in !important; 
              height: 5.5in !important; 
              padding: 0.15in !important;
              margin: 0 !important;
              box-sizing: border-box;
              page-break-inside: avoid;
              border-radius: 0 !important;
              box-shadow: none !important;
              display: block !important;
            }
            .flyer-container > div {
              flex: none !important;
            }
            .flyer-container .grid {
              display: grid !important;
              grid-template-columns: 1fr 1fr !important;
              grid-template-rows: 1fr 1fr !important;
              height: 2.5in !important;
              width: 80% !important;
              margin: 0 auto !important;
              flex: none !important;
            }
            .flyer-container .grid img {
              width: 100% !important;
              height: 100% !important;
              aspect-ratio: auto !important;
            }
            .contact-box {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
          }
          @page {
            margin: 0;
            size: letter portrait;
          }
          .print-page {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
          }
          .flyer-container {
            width: 380px;
            max-width: 380px;
            height: 495px;
            max-height: 495px;
            aspect-ratio: 17/22;
          }
        `}</style>
      </Head>
      
      <div className="min-h-screen bg-cream p-8">
        <div className="max-w-4xl mx-auto">
          {/* Print Button */}
          <div className="no-print mb-8 text-center">
            <button
              onClick={() => window.print()}
              className="bg-moss text-cream px-8 py-3 rounded-lg text-lg font-headline font-semibold hover:bg-moss/90 transition-colors"
            >
              🖨️ Print Flyers
            </button>
            <p className="text-moss mt-2 font-body">Ink-saving version - Prints 4 per page</p>
            
            {/* Debug toggle */}
            <button
              onClick={() => setDebug(!debug)}
              className="mt-4 ml-4 bg-red-600 text-white px-4 py-2 rounded text-sm"
            >
              {debug ? '🔴 Debug ON' : '⚪ Debug OFF'}
            </button>
          </div>

          {/* Debug measurements panel */}
          {debug && (
            <div className="no-print mb-4 p-4 bg-yellow-100 border-2 border-red-500 rounded font-mono text-sm">
              <h3 className="font-bold text-red-600 mb-2">📏 ACTUAL RENDERED HEIGHTS (pixels)</h3>
              <div className="grid grid-cols-2 gap-2">
                <div><strong>Container:</strong> {measurements.container}px (target: 495px)</div>
                <div><strong>Container Inner:</strong> {measurements.containerInner}px</div>
                <div><strong>Logo (12%):</strong> {measurements.logo}px (target: {Math.round(495 * 0.12)}px)</div>
                <div><strong>Headline (11%):</strong> {measurements.headline}px (target: {Math.round(495 * 0.11)}px)</div>
                <div><strong>CTA (12%):</strong> {measurements.cta}px (target: {Math.round(495 * 0.12)}px)</div>
                <div><strong>Photos (58%):</strong> {measurements.photos}px (target: {Math.round(495 * 0.58)}px)</div>
                <div><strong>Footer (5%):</strong> {measurements.footer}px (target: {Math.round(495 * 0.05)}px)</div>
              </div>
              <div className="mt-2 pt-2 border-t border-red-300">
                <strong>Total Children:</strong> {measurements.logo + measurements.headline + measurements.cta + measurements.photos + measurements.footer}px
                <span className={measurements.logo + measurements.headline + measurements.cta + measurements.photos + measurements.footer > measurements.containerInner ? ' text-red-600 font-bold' : ' text-green-600'}>
                  {' '}({measurements.logo + measurements.headline + measurements.cta + measurements.photos + measurements.footer > measurements.containerInner ? '❌ OVERFLOW!' : '✅ Fits'})
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-600">Note: Container inner height excludes padding. Children should sum to less than inner height.</p>
            </div>
          )}

          {/* Print wrapper for 4-per-page grid */}
          <div className="print-page">
            <Flyer showDebug={debug} />
            <Flyer />
            <Flyer />
            <Flyer />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlyerPage;
