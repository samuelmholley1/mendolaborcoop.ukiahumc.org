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
            <p className="text-moss mt-2 font-body">3 versions: Color, Grayscale, B&W - Quarter-page (4.25" x 5.5")</p>
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
              <p className="text-xs font-body mt-1 opacity-80">
                mendolaborcoop.ukiahumc.org
              </p>
            </div>

          </div>

          {/* GRAYSCALE VERSION - Same layout as color */}
          <div className="flyer-container bg-white p-4 shadow-lg rounded-lg border-4 border-black mb-8 overflow-hidden">
            
            {/* Logo - Grayscale */}
            <div className="text-center mb-3">
              <img
                src="/mendo_labor_coop_logo.png"
                alt="Mendo Labor Cooperative"
                className="mx-auto w-24 h-24 grayscale"
              />
            </div>

            {/* Main CTA Headline */}
            <div className="text-center mb-3">
              <h1 className="text-xl font-headline font-black text-black leading-tight">
                Hire a Temporary Worker
              </h1>
              <p className="text-sm text-black font-body font-semibold mt-1">
                Skilled local help • Fair pay
              </p>
            </div>

            {/* PRIMARY: PHONE NUMBER - Single line, dominant */}
            <div className="contact-box bg-black text-white py-4 px-3 rounded-lg mb-3 text-center shadow-inner">
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
              <p className="text-xs font-body mt-1 opacity-80">
                mendolaborcoop.ukiahumc.org
              </p>
            </div>

          </div>

          {/* BLACK & WHITE - SENIOR NEWSLETTER OPTIMIZED */}
          <div className="flyer-container bg-white p-4 shadow-lg rounded-lg border-[4px] border-black overflow-hidden">
            
            {/* Logo - centered, moderate size */}
            <div className="text-center mb-3">
              <img
                src="/mendo_labor_coop_logo.png"
                alt="Mendo Labor Cooperative"
                className="mx-auto w-16 h-16 grayscale contrast-150"
              />
            </div>

            {/* Headline - Clear and bold */}
            <div className="text-center mb-3">
              <h1 className="text-xl font-headline font-black text-black leading-tight mb-2">
                Need Help With:
              </h1>
              <p className="text-lg text-black font-body font-black leading-snug">
                Yard Work • Errands • Odd Jobs
              </p>
            </div>

            {/* PRIMARY: PHONE NUMBER BOX - Heavily emphasized */}
            <div className="bg-black text-white py-4 px-3 mb-3 text-center border-[4px] border-black">
              <p className="text-xs font-headline font-bold mb-2 tracking-wide">
                CALL OR TEXT CHERYL
              </p>
              <a 
                href="tel:+13692161512" 
                className="text-4xl font-headline font-black block leading-none hover:opacity-90 transition-opacity whitespace-nowrap"
                style={{ letterSpacing: '0.04em' }}
              >
                (369) 216-1512
              </a>
            </div>

            {/* Bottom - Simple info */}
            <div className="text-center">
              <p className="text-sm text-black font-body font-bold mb-1">
                Mendo Labor Cooperative
              </p>
              <p className="text-xs text-black font-body font-semibold">
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
