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
            .flyer-container { 
              width: 4.25in !important; 
              height: 5.5in !important; 
              page-break-after: always;
            }
            .contact-box, .contact-box-bw {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
          }
          @page {
            margin: 0.25in;
            size: 4.25in 5.5in portrait;
          }
          .flyer-container {
            width: 340px;
            max-width: 340px;
            height: 440px;
            max-height: 440px;
            aspect-ratio: 17/22;
          }
          @media print {
            .flyer-container {
              width: 4.25in !important;
              height: 5.5in !important;
            }
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
            <p className="text-moss mt-2 font-body">Color & Black/White versions - Quarter-page (4.25" x 5.5") - 4 flyers per sheet</p>
          </div>

          {/* COLOR FLYER - WINDSHIELD OPTIMIZED */}
          <div className="flyer-container bg-white p-4 shadow-lg rounded-lg border-4 border-moss mb-8 overflow-hidden">
            
            {/* Logo - Balanced size */}
            <div className="text-center mb-3">
              <img
                src="/mendo_labor_coop_logo.png"
                alt="Mendo Labor Cooperative"
                className="mx-auto w-24 h-24"
              />
            </div>

            {/* Main CTA Headline */}
            <div className="text-center mb-3">
              <h1 className="text-xl font-headline font-black text-gold leading-tight">
                Hire a Temporary Worker
              </h1>
              <p className="text-sm text-moss font-body font-semibold mt-1">
                Skilled local help • Fair pay
              </p>
            </div>

            {/* PRIMARY: PHONE NUMBER - Single line, dominant */}
            <div className="contact-box bg-[#2d5016] text-white py-4 px-3 rounded-lg mb-3 text-center shadow-inner">
              <p className="text-xs font-headline font-semibold mb-2 opacity-90">
                Call or Text Cheryl
              </p>
              <a 
                href="tel:+13692161512" 
                className="text-3xl font-headline font-black block my-3 hover:opacity-90 transition-opacity tracking-wide leading-none whitespace-nowrap"
                style={{ color: '#FFFFFF' }}
              >
                (369) 216-1512
              </a>
              <p className="text-xs font-body mt-2 opacity-80">
                mendolaborcoop@gmail.com
              </p>
            </div>

            {/* QR Code - Functional */}
            <div className="text-center pt-2">
              <p className="text-[10px] font-body text-moss mb-2 font-semibold">
                Learn more or request workers
              </p>
              <div className="flex flex-col items-center">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://mendolaborcoop.ukiahumc.org"
                  alt="QR Code"
                  className="w-12 h-12 border border-moss rounded mb-1"
                />
                <p className="text-[10px] font-body text-moss font-semibold">
                  mendolaborcoop.ukiahumc.org
                </p>
              </div>
            </div>

          </div>

          {/* BLACK & WHITE FLYER - BRUTALIST NEWSLETTER LAYOUT */}
          <div className="flyer-container bg-white p-6 shadow-lg rounded-lg border-[3px] border-black overflow-hidden">
            
            {/* 1. INSTRUCTION - Above phone */}
            <div className="text-center mb-3">
              <p className="text-sm font-body font-semibold text-black opacity-70">
                Call or Text Cheryl
              </p>
            </div>

            {/* 2. PHONE NUMBER - DOMINANT 50-60% of space */}
            <div className="text-center my-8">
              <a 
                href="tel:+13692161512" 
                className="text-7xl font-headline font-black block leading-none hover:opacity-90 transition-opacity whitespace-nowrap"
                style={{ letterSpacing: '0.03em' }}
              >
                (369) 216-1512
              </a>
            </div>

            {/* 3. WHAT THIS IS - Headline */}
            <div className="text-center mb-4 mt-8">
              <h1 className="text-2xl font-headline font-black text-black leading-tight mb-3">
                Hire a Temporary Worker
              </h1>
              <p className="text-lg text-black font-body font-bold leading-snug">
                Yard work • Errands • Odd jobs
              </p>
            </div>

            {/* 4. FOOTER - URL only */}
            <div className="text-center mt-8 pt-4 border-t border-black">
              <p className="text-xs font-body text-black font-semibold">
                mendolaborcoop.ukiahumc.org
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default FlyerPage;
