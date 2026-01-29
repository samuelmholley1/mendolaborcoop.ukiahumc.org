import React from 'react';
import Head from 'next/head';

const FlyerPage: React.FC = () => {
  // Flyer uses percentage-based heights to work in both screen (495px) and print (5.5in)
  // Logo: 12% | Headline: 11% | CTA: 12% | Photos: 58% | Footer: 5% = 98% (2% buffer)
  const Flyer = () => (
    <div className="flyer-container bg-white p-3 shadow-lg rounded-lg border-4 border-moss overflow-hidden flex flex-col" style={{ height: '495px' }}>
      
      {/* Logo - 12% */}
      <div className="text-center flex-shrink-0" style={{ height: '12%' }}>
        <img
          src="/mendo_labor_coop_logo.png"
          alt="Mendo Labor Cooperative"
          className="mx-auto h-full w-auto"
        />
      </div>

      {/* Headline - 11% */}
      <div className="text-center flex-shrink-0 flex flex-col justify-center" style={{ height: '11%' }}>
        <h1 className="text-xl font-headline font-black text-gold leading-none">
          Need an Extra Hand?
        </h1>
        <p className="text-xs text-moss font-body font-semibold mt-1 leading-none">
          Yard work • Moving help • Odd jobs
        </p>
      </div>

      {/* Phone CTA - 12% */}
      <div className="text-center flex-shrink-0 flex flex-col justify-center" style={{ height: '12%' }}>
        <p className="text-[10px] font-headline font-semibold text-moss leading-none">
          Call or Text Cheryl
        </p>
        <div className="contact-box bg-[#356A45] text-white py-1.5 px-3 rounded-md inline-block mt-1 mx-auto">
          <span className="text-xl font-headline font-black leading-none whitespace-nowrap" style={{ color: '#FFFFFF' }}>
            (369) 216-1512
          </span>
        </div>
      </div>

      {/* Photos 2x2 grid - 58% */}
      <div className="grid grid-cols-2 gap-1 flex-shrink-0" style={{ height: '58%' }}>
        <img src="/co-op-job-photo-1.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded" />
        <img src="/co-op-job-photo-2.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded" />
        <img src="/co-op-job-photo-3.jpeg" alt="Workers" className="w-full h-full object-cover object-top rounded" />
        <img src="/co-op-job-photo-4.jpeg" alt="Workers" className="w-full h-full object-cover object-[center_30%] rounded" />
      </div>

      {/* Footer - 5% */}
      <div className="text-center flex-shrink-0 flex items-center justify-center border-t border-moss/30" style={{ height: '5%' }}>
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
            html, body { margin: 0; padding: 0; }
            .no-print { display: none !important; }
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
              width: 100% !important; 
              height: 100% !important; 
              padding: 0.15in 0.1in !important;
              margin: 0 !important;
              box-sizing: border-box;
              page-break-inside: avoid;
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
          </div>

          {/* Print wrapper for 4-per-page grid */}
          <div className="print-page">
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
