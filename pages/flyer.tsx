import React from 'react';
import Head from 'next/head';

const FlyerPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Printable Flyer - Hire Local Workers | Mendo Labor Cooperative</title>
        <meta name="description" content="Print our flyer to spread the word about fair wages and worker solidarity in Mendocino County. Mendo Labor Cooperative - Worker Power Builds Community Power." />
        <meta name="robots" content="noindex, follow" />
        <style>{`
          @media print {
            body { margin: 0; padding: 0; }
            .no-print { display: none !important; }
            .print-page {
              width: 8.5in;
              height: 11in;
              display: grid !important;
              grid-template-columns: 4.25in 4.25in;
              grid-template-rows: 5.5in 5.5in;
              gap: 0;
              page-break-after: always;
              margin: 0;
              padding: 0;
            }
            .flyer-container { 
              width: 4.2in !important; 
              height: 5.4in !important; 
              page-break-inside: avoid;
              margin: 0.05in 0.025in !important;
              box-sizing: border-box;
            }
            .contact-box, .bg-black {
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
            <p className="text-moss mt-2 font-body">Color version - Prints 4 per page</p>
          </div>

          {/* Print wrapper for 4-per-page grid */}
          <div className="print-page">
            {/* COLOR FLYER - WINDSHIELD OPTIMIZED */}
            <div className="flyer-container bg-white p-5 shadow-lg rounded-lg border-4 border-moss mb-8 overflow-hidden">
              
              {/* Logo - Larger */}
              <div className="text-center mb-4">
                <img
                  src="/mendo_labor_coop_logo.png"
                  alt="Mendo Labor Cooperative"
                  className="mx-auto w-32 h-32"
                />
              </div>

              {/* Main CTA Headline */}
              <div className="text-center mb-5">
                <h1 className="text-2xl font-headline font-black text-gold leading-tight">
                  Hire a Temporary Worker
                </h1>
                <p className="text-base text-moss font-body font-semibold mt-2">
                  Skilled local help • Fair pay
                </p>
              </div>

              {/* PRIMARY: PHONE NUMBER - Larger, dominant */}
              <div className="contact-box bg-[#2d5016] text-white py-4 px-4 rounded-lg text-center shadow-inner">
                <p className="text-sm font-headline font-semibold mb-3 opacity-90">
                  Call or Text Cheryl
                </p>
                <a 
                  href="tel:+13692161512" 
                  className="text-4xl font-headline font-black block my-4 hover:opacity-90 transition-opacity leading-none whitespace-nowrap"
                  style={{ color: '#FFFFFF' }}
                >
                  (369) 216-1512
                </a>
                <p className="text-sm font-body mt-2 opacity-80">
                  mendolaborcoop@gmail.com
                </p>
                <p className="text-sm font-body mt-1 mb-0 pb-0 opacity-80">
                  mendolaborcoop.ukiahumc.org
                </p>
              </div>

            </div>

            {/* COLOR FLYER - Copy 2 */}
            <div className="flyer-container bg-white p-5 shadow-lg rounded-lg border-4 border-moss mb-8 overflow-hidden">
              
              {/* Logo - Larger */}
              <div className="text-center mb-4">
                <img
                  src="/mendo_labor_coop_logo.png"
                  alt="Mendo Labor Cooperative"
                  className="mx-auto w-32 h-32"
                />
              </div>

              {/* Main CTA Headline */}
              <div className="text-center mb-5">
                <h1 className="text-2xl font-headline font-black text-gold leading-tight">
                  Hire a Temporary Worker
                </h1>
                <p className="text-base text-moss font-body font-semibold mt-2">
                  Skilled local help • Fair pay
                </p>
              </div>

              {/* PRIMARY: PHONE NUMBER - Larger, dominant */}
              <div className="contact-box bg-[#2d5016] text-white py-4 px-4 rounded-lg text-center shadow-inner">
                <p className="text-sm font-headline font-semibold mb-3 opacity-90">
                  Call or Text Cheryl
                </p>
                <a 
                  href="tel:+13692161512" 
                  className="text-4xl font-headline font-black block my-4 hover:opacity-90 transition-opacity leading-none whitespace-nowrap"
                  style={{ color: '#FFFFFF' }}
                >
                  (369) 216-1512
                </a>
                <p className="text-sm font-body mt-2 opacity-80">
                  mendolaborcoop@gmail.com
                </p>
                <p className="text-sm font-body mt-1 mb-0 pb-0 opacity-80">
                  mendolaborcoop.ukiahumc.org
                </p>
              </div>

            </div>

            {/* COLOR FLYER - Copy 3 */}
            <div className="flyer-container bg-white p-5 shadow-lg rounded-lg border-4 border-moss mb-8 overflow-hidden">
              
              {/* Logo - Larger */}
              <div className="text-center mb-4">
                <img
                  src="/mendo_labor_coop_logo.png"
                  alt="Mendo Labor Cooperative"
                  className="mx-auto w-32 h-32"
                />
              </div>

              {/* Main CTA Headline */}
              <div className="text-center mb-5">
                <h1 className="text-2xl font-headline font-black text-gold leading-tight">
                  Hire a Temporary Worker
                </h1>
                <p className="text-base text-moss font-body font-semibold mt-2">
                  Skilled local help • Fair pay
                </p>
              </div>

              {/* PRIMARY: PHONE NUMBER - Larger, dominant */}
              <div className="contact-box bg-[#2d5016] text-white py-4 px-4 rounded-lg text-center shadow-inner">
                <p className="text-sm font-headline font-semibold mb-3 opacity-90">
                  Call or Text Cheryl
                </p>
                <a 
                  href="tel:+13692161512" 
                  className="text-4xl font-headline font-black block my-4 hover:opacity-90 transition-opacity leading-none whitespace-nowrap"
                  style={{ color: '#FFFFFF' }}
                >
                  (369) 216-1512
                </a>
                <p className="text-sm font-body mt-2 opacity-80">
                  mendolaborcoop@gmail.com
                </p>
                <p className="text-sm font-body mt-1 mb-0 pb-0 opacity-80">
                  mendolaborcoop.ukiahumc.org
                </p>
              </div>

            </div>

            {/* COLOR FLYER - Copy 4 */}
            <div className="flyer-container bg-white p-5 shadow-lg rounded-lg border-4 border-moss mb-8 overflow-hidden">
              
              {/* Logo - Larger */}
              <div className="text-center mb-4">
                <img
                  src="/mendo_labor_coop_logo.png"
                  alt="Mendo Labor Cooperative"
                  className="mx-auto w-32 h-32"
                />
              </div>

              {/* Main CTA Headline */}
              <div className="text-center mb-5">
                <h1 className="text-2xl font-headline font-black text-gold leading-tight">
                  Hire a Temporary Worker
                </h1>
                <p className="text-base text-moss font-body font-semibold mt-2">
                  Skilled local help • Fair pay
                </p>
              </div>

              {/* PRIMARY: PHONE NUMBER - Larger, dominant */}
              <div className="contact-box bg-[#2d5016] text-white py-4 px-4 rounded-lg text-center shadow-inner">
                <p className="text-sm font-headline font-semibold mb-3 opacity-90">
                  Call or Text Cheryl
                </p>
                <a 
                  href="tel:+13692161512" 
                  className="text-4xl font-headline font-black block my-4 hover:opacity-90 transition-opacity leading-none whitespace-nowrap"
                  style={{ color: '#FFFFFF' }}
                >
                  (369) 216-1512
                </a>
                <p className="text-sm font-body mt-2 opacity-80">
                  mendolaborcoop@gmail.com
                </p>
                <p className="text-sm font-body mt-1 mb-0 pb-0 opacity-80">
                  mendolaborcoop.ukiahumc.org
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlyerPage;
