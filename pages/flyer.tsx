import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const FlyerPage: React.FC = () => {
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
      
      // Get all flyer elements
      const flyers = printRef.current.querySelectorAll('.flyer-container');
      
      // Positions for 4-up layout (2x2 grid)
      const positions = [
        { x: 0, y: 0 },      // top-left
        { x: 4.25, y: 0 },   // top-right
        { x: 0, y: 5.5 },    // bottom-left
        { x: 4.25, y: 5.5 }  // bottom-right
      ];
      
      // Inject style tag to override Tailwind Preflight borders and box-shadows
      // Tailwind's Preflight sets border-color: #e5e7eb on all elements, which
      // dom-to-image can render as visible gray lines even with border-width: 0
      const styleTag = document.createElement('style');
      styleTag.id = 'pdf-export-overrides';
      styleTag.textContent = `
        /* NUCLEAR RESET: Kill ALL default Tailwind borders globally */
        .flyer-container *,
        .flyer-container *::before,
        .flyer-container *::after {
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          outline: none !important;
          outline-offset: 0 !important;
          text-shadow: none !important;
          border-color: transparent !important;
        }
        
        /* RE-ENABLE borders ONLY for intentional border elements */
        .flyer-container.border-4.border-moss {
          border-color: #2e5936 !important;
        }
        .flyer-container .border-t.border-moss\\/30 {
          border-color: rgba(46, 89, 54, 0.3) !important;
        }
        
        /* Ensure images don't get weird borders */
        .flyer-container img {
          border: none !important;
          border-color: transparent !important;
        }
        
        /* Fix any text rendering artifacts */
        .flyer-container h1,
        .flyer-container h2,
        .flyer-container h3,
        .flyer-container p,
        .flyer-container span,
        .flyer-container div {
          text-shadow: none !important;
        }
      `;
      document.head.appendChild(styleTag);
      
      // Small delay to ensure styles are applied and browser repaints
      await new Promise(resolve => setTimeout(resolve, 100));
      
      for (let i = 0; i < Math.min(flyers.length, 4); i++) {
        const flyer = flyers[i] as HTMLElement;
        
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
        
        // Add to PDF at correct position (4.25 x 5.5 inches each)
        pdf.addImage(imgData, 'PNG', positions[i].x, positions[i].y, 4.25, 5.5);
      }
      
      // Remove the injected style tag
      styleTag.remove();
      
      pdf.save('mendo-labor-coop-flyers.pdf');
    } catch (error) {
      console.error('PDF generation error:', error);
      // Clean up style tag on error too
      document.getElementById('pdf-export-overrides')?.remove();
      alert('Error generating PDF. Please try again.');
    }
    
    setGenerating(false);
  };

  // Flyer uses percentage-based heights to work in both screen (495px) and print (5.5in)
  const Flyer = () => (
    <div 
      className="flyer-container bg-white p-2 shadow-lg rounded-lg border-4 border-moss overflow-hidden flex flex-col" 
      style={{ height: '495px' }}
    >
      
      {/* Logo - 11% */}
      <div className="text-center flex-shrink-0 mb-1" style={{ height: '11%' }}>
        <img
          src="/mendo_labor_coop_logo.png"
          alt="Mendo Labor Cooperative"
          className="mx-auto h-full w-auto"
        />
      </div>

      {/* Headline - 8% */}
      <div className="text-center flex-shrink-0 flex flex-col justify-center mb-2" style={{ height: '8%' }}>
        <h1 className="text-xl font-headline font-black text-gold leading-none">
          Need an Extra Hand?
        </h1>
        <p className="text-xs text-moss font-body font-semibold mt-0.5 leading-none">
          Yard work • Moving help • Odd jobs
        </p>
      </div>

      {/* Phone CTA - 12% */}
      <div className="text-center flex-shrink-0 mb-2" style={{ height: '12%' }}>
        <p className="text-[10px] font-headline font-semibold text-moss leading-none" style={{ marginTop: '0px', marginBottom: '8px' }}>
          Call Our Coordinators Cheryl &amp; Braven
        </p>
        <div style={{ 
          backgroundColor: '#356A45', 
          padding: '5px 16px', 
          display: 'inline-block',
          borderRadius: '6px',
          textAlign: 'center'
        }}>
          <span style={{ 
            color: '#FFFFFF', 
            fontSize: '20px',
            lineHeight: '1',
            fontWeight: 800, 
            fontFamily: 'Montserrat, Arial, sans-serif',
            whiteSpace: 'nowrap',
            display: 'inline-block',
            textAlign: 'center'
          }}>
            (369) 216-1512
          </span>
        </div>
      </div>

      {/* Photos 2x2 grid - grows to fill space */}
      <div className="grid grid-cols-2 gap-2 flex-grow mx-auto" style={{ width: '75%' }}>
        <img src="/co-op-job-photo-1.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded aspect-square" />
        <img src="/co-op-job-photo-2.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded aspect-square" />
        <img src="/co-op-job-photo-3.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded aspect-square" />
        <img src="/co-op-job-photo-4.jpeg" alt="Workers" className="w-full h-full object-cover object-[center_30%] rounded aspect-square" />
      </div>

      {/* Footer - pinned to bottom */}
      <div className="text-center flex-shrink-0 flex items-start justify-center border-t border-moss/30 mt-2 pt-1" style={{ height: '7%' }}>
        <p className="font-body text-moss leading-none whitespace-nowrap" style={{ fontSize: '12px' }}>
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
          </div>

          {/* Print wrapper for 4-per-page grid */}
          <div ref={printRef} className="print-page">
            <Flyer />
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
