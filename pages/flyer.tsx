import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const FlyerPage: React.FC = () => {
  const [debug, setDebug] = useState(false);
  const [measurements, setMeasurements] = useState<Record<string, number>>({});
  const [generating, setGenerating] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);
  
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

  const generatePDF = async () => {
    if (!printRef.current) return;
    setGenerating(true);
    
    try {
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;
      
      // Create PDF - Letter size (8.5 x 11 inches)
      const pdf = new jsPDF('portrait', 'in', 'letter');
      
      // Get all flyer elements
      const flyers = printRef.current.querySelectorAll('.flyer-container');
      
      // Positions for 4-up layout (2x2 grid)
      const positions = [
        { x: 0, y: 0 },      // top-left
        { x: 4.25, y: 0 },   // top-right
        { x: 0, y: 5.5 },    // bottom-left
        { x: 4.25, y: 5.5 }  // bottom-right
      ];
      
      for (let i = 0; i < Math.min(flyers.length, 4); i++) {
        const flyer = flyers[i] as HTMLElement;
        
        // Capture at high resolution (3x for better quality)
        const canvas = await html2canvas(flyer, {
          scale: 3,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          logging: false
        });
        
        const imgData = canvas.toDataURL('image/png');
        
        // Add to PDF at correct position (4.25 x 5.5 inches each)
        pdf.addImage(imgData, 'PNG', positions[i].x, positions[i].y, 4.25, 5.5);
      }
      
      pdf.save('mendo-labor-coop-flyers.pdf');
    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Error generating PDF. Please try again.');
    }
    
    setGenerating(false);
  };

  // Flyer uses percentage-based heights to work in both screen (495px) and print (5.5in)
  const Flyer = ({ showDebug = false }: { showDebug?: boolean }) => (
    <div 
      ref={showDebug ? containerRef : undefined}
      className="flyer-container bg-white p-2 shadow-lg rounded-lg border-4 border-moss overflow-hidden flex flex-col" 
      style={{ height: '495px' }}
    >
      
      {/* Logo - 11% */}
      <div ref={showDebug ? logoRef : undefined} className="text-center flex-shrink-0 mb-1" style={{ height: '11%' }}>
        <img
          src="/mendo_labor_coop_logo.png"
          alt="Mendo Labor Cooperative"
          className="mx-auto h-full w-auto"
        />
      </div>

      {/* Headline - 8% - tighter */}
      <div ref={showDebug ? headlineRef : undefined} className="text-center flex-shrink-0 flex flex-col justify-center mb-0.5" style={{ height: '8%' }}>
        <h1 className="text-xl font-headline font-black text-gold leading-none">
          Need an Extra Hand?
        </h1>
        <p className="text-xs text-moss font-body font-semibold mt-0.5 leading-none">
          Yard work • Moving help • Odd jobs
        </p>
      </div>

      {/* Phone CTA - 13% */}
      <div ref={showDebug ? ctaRef : undefined} className="text-center flex-shrink-0 flex flex-col justify-center mb-1" style={{ height: '13%' }}>
        <p className="text-[10px] font-headline font-semibold text-moss leading-none mb-3">
          Call Our Coordinators Cheryl & Braven
        </p>
        <div className="contact-box bg-[#356A45] text-white py-2.5 px-4 rounded-md inline-block mx-auto">
          <span className="text-xl font-headline font-black whitespace-nowrap leading-none" style={{ color: '#FFFFFF', display: 'block' }}>
            (369) 216-1512
          </span>
        </div>
      </div>

      {/* Photos 2x2 grid - grows to fill space */}
      <div ref={showDebug ? photosRef : undefined} className="grid grid-cols-2 gap-2 flex-grow mx-auto" style={{ width: '75%' }}>
        <img src="/co-op-job-photo-1.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded aspect-square" />
        <img src="/co-op-job-photo-2.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded aspect-square" />
        <img src="/co-op-job-photo-3.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded aspect-square" />
        <img src="/co-op-job-photo-4.jpeg" alt="Workers" className="w-full h-full object-cover object-[center_30%] rounded aspect-square" />
      </div>

      {/* Footer - pinned to bottom */}
      <div ref={showDebug ? footerRef : undefined} className="text-center flex-shrink-0 flex items-center justify-center border-t border-moss/30 mt-1 pt-1" style={{ height: '7%' }}>
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
              border-width: 2px !important;
              display: flex !important;
              flex-direction: column !important;
            }
            .flyer-container .aspect-square {
              aspect-ratio: auto !important;
            }
            .flyer-container .flex-grow {
              flex-grow: 0 !important;
              height: 2.8in !important;
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
              onClick={generatePDF}
              disabled={generating}
              className="bg-moss text-cream px-8 py-3 rounded-lg text-lg font-headline font-semibold hover:bg-moss/90 transition-colors disabled:opacity-50"
            >
              {generating ? '⏳ Generating PDF...' : '📄 Download PDF (4 per page)'}
            </button>
            <p className="text-moss mt-2 font-body">High-quality PDF - prints exactly like it looks</p>
            
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
          <div ref={printRef} className="print-page">
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
