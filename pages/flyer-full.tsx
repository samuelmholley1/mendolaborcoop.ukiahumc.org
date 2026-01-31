import React, { useRef, useState } from 'react';
import Head from 'next/head';

const FlyerFullPage: React.FC = () => {
  const [generating, setGenerating] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!printRef.current) return;
    setGenerating(true);
    
    try {
      const domtoimage = (await import('dom-to-image-more')).default;
      const jsPDF = (await import('jspdf')).default;
      
      // Create PDF - Letter size (8.5 x 11 inches)
      const pdf = new jsPDF('portrait', 'in', 'letter');
      
      // Get the single flyer element
      const flyer = printRef.current.querySelector('.flyer-container') as HTMLElement;
      if (!flyer) return;
      
      // Inject style tag to override Tailwind Preflight borders and box-shadows
      const styleTag = document.createElement('style');
      styleTag.id = 'pdf-export-overrides';
      styleTag.textContent = `
        /* NUCLEAR RESET: Kill ALL default Tailwind borders and backgrounds */
        .flyer-container,
        .flyer-container *,
        .flyer-container *::before,
        .flyer-container *::after {
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          outline: none !important;
          outline-offset: 0 !important;
          text-shadow: none !important;
          border-color: transparent !important;
          border-style: none !important;
          border-width: 0 !important;
        }
        
        /* Force transparent background on containers */
        .flyer-container > div {
          background-color: transparent !important;
        }
        
        /* Keep white background on main flyer */
        .flyer-container {
          background-color: #ffffff !important;
        }
        
        /* Keep green background on phone box */
        .flyer-container div[style*="#356A45"] {
          background-color: #356A45 !important;
        }
        
        /* Ensure images don't get weird borders */
        .flyer-container img {
          border: none !important;
          border-color: transparent !important;
          background-color: transparent !important;
        }
        
        /* Fix footer border */
        .flyer-container .border-t {
          border-top: 2px solid rgba(46, 89, 54, 0.3) !important;
        }
      `;
      document.head.appendChild(styleTag);
      
      // Small delay to ensure styles are applied and browser repaints
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Capture with dom-to-image-more
      const imgData = await domtoimage.toPng(flyer, {
        quality: 1,
        scale: 3,
        bgcolor: '#ffffff',
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left'
        }
      });
      
      // Add to PDF at full page size (8.5 x 11 inches)
      pdf.addImage(imgData, 'PNG', 0, 0, 8.5, 11);
      
      // Remove the injected style tag
      styleTag.remove();
      
      pdf.save('mendo-labor-coop-flyer-full.pdf');
    } catch (error) {
      console.error('PDF generation error:', error);
      // Clean up style tag on error too
      document.getElementById('pdf-export-overrides')?.remove();
      alert('Error generating PDF. Please try again.');
    }
    
    setGenerating(false);
  };

  // Full-page flyer scaled for 8.5x11 - uses larger sizes
  const Flyer = () => (
    <div 
      className="flyer-container bg-white p-6 shadow-lg rounded-lg overflow-hidden flex flex-col" 
      style={{ width: '816px', height: '1056px' }} // 8.5in x 11in at 96dpi
    >
      
      {/* Logo - 11% */}
      <div className="text-center flex-shrink-0 mb-2" style={{ height: '11%' }}>
        <img
          src="/mendo_labor_coop_logo.png"
          alt="Mendo Labor Cooperative"
          className="mx-auto h-full w-auto"
        />
      </div>

      {/* Headline - 8% */}
      <div className="text-center flex-shrink-0 flex flex-col justify-center mb-4" style={{ height: '8%' }}>
        <h1 className="text-5xl font-headline font-black text-gold leading-none">
          Need an Extra Hand?
        </h1>
        <p className="text-xl text-moss font-body font-semibold mt-2 leading-none">
          Yard work • Moving help • Odd jobs
        </p>
      </div>

      {/* Phone CTA - 12% */}
      <div className="text-center flex-shrink-0 mb-4" style={{ height: '12%' }}>
        <p className="text-lg font-headline font-semibold text-moss leading-none" style={{ marginTop: '0px', marginBottom: '16px' }}>
          Call Our Coordinators Cheryl &amp; Braven
        </p>
        <div style={{ 
          backgroundColor: '#356A45', 
          padding: '12px 40px', 
          display: 'inline-block',
          borderRadius: '12px'
        }}>
          <span style={{ 
            color: '#FFFFFF', 
            fontSize: '48px',
            lineHeight: '56px',
            fontWeight: 800, 
            fontFamily: 'Montserrat, Arial, sans-serif',
            whiteSpace: 'nowrap'
          }}>
            (369) 216-1512
          </span>
        </div>
      </div>

      {/* Photos 2x2 grid - grows to fill space */}
      <div className="grid grid-cols-2 gap-4 flex-grow mx-auto" style={{ width: '85%' }}>
        <img src="/co-op-job-photo-1.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded-lg aspect-square" />
        <img src="/co-op-job-photo-2.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded-lg aspect-square" />
        <img src="/co-op-job-photo-3.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded-lg aspect-square" />
        <img src="/co-op-job-photo-4.jpeg" alt="Workers" className="w-full h-full object-cover object-[center_30%] rounded-lg aspect-square" />
      </div>

      {/* Footer - pinned to bottom */}
      <div className="text-center flex-shrink-0 flex items-start justify-center border-t border-moss/30 mt-4 pt-3" style={{ height: '6%' }}>
        <p className="font-body text-moss leading-none whitespace-nowrap" style={{ fontSize: '24px' }}>
          mendolaborcoop@gmail.com • mendolaborcoop.ukiahumc.org
        </p>
      </div>

    </div>
  );

  return (
    <>
      <Head>
        <title>Full Page Flyer - Need an Extra Hand? | Mendo Labor Cooperative</title>
        <meta name="description" content="Print our full-page flyer to spread the word about local help for yard work, moving, and odd jobs in Mendocino County. Mendo Labor Cooperative." />
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
            .flyer-container { 
              width: 8.5in !important; 
              height: 11in !important; 
              padding: 0.5in !important;
              margin: 0 !important;
              box-sizing: border-box;
              page-break-inside: avoid;
              border-radius: 0 !important;
              box-shadow: none !important;
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
        `}</style>
      </Head>
      
      <div className="min-h-screen bg-cream p-8">
        <div className="max-w-5xl mx-auto">
          {/* Print Button */}
          <div className="no-print mb-8 text-center">
            <button
              onClick={generatePDF}
              disabled={generating}
              className="bg-moss text-cream px-8 py-3 rounded-lg text-lg font-headline font-semibold hover:bg-moss/90 transition-colors disabled:opacity-50"
            >
              {generating ? '⏳ Generating PDF...' : '📄 Download Full Page PDF'}
            </button>
          </div>

          {/* Single full-page flyer */}
          <div ref={printRef} className="flex justify-center">
            <Flyer />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlyerFullPage;
