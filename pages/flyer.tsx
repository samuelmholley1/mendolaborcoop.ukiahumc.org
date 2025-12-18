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
              width: 4.25in; 
              height: 5.5in; 
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
            size: 4.25in 5.5in;
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
          <div className="flyer-container bg-white p-3 shadow-lg rounded-lg border-4 border-moss mb-8">
            
            {/* Logo - Reduced 40%, tighter spacing */}
            <div className="text-center mb-1">
              <img
                src="/mendo_labor_coop_logo.png"
                alt="Mendo Labor Cooperative"
                className="mx-auto w-20 h-20"
              />
            </div>

            {/* Main CTA Headline - Supporting role */}
            <div className="text-center mb-2">
              <h1 className="text-lg font-headline font-black text-gold leading-tight">
                Hire a Temporary Worker
              </h1>
              <p className="text-xs text-moss font-body font-normal mt-1">
                Skilled local help • Fair pay
              </p>
            </div>

            {/* PRIMARY: PHONE NUMBER - Dominant, 6xl */}
            <div className="contact-box bg-[#2d5016] text-white py-5 px-2 rounded-lg mb-2 text-center shadow-inner">
              <p className="text-[10px] font-headline font-semibold mb-2 opacity-90">
                Call or Text Cheryl
              </p>
              <a 
                href="tel:+13692161512" 
                className="text-6xl font-headline font-black block my-4 hover:opacity-90 transition-opacity tracking-wide leading-none"
                style={{ color: '#FFFFFF' }}
              >
                (369) 216-1512
              </a>
              <p className="text-[10px] font-body mt-2 opacity-80">
                mendolaborcoop@gmail.com
              </p>
            </div>

            {/* QR Code - Smaller, functional */}
            <div className="text-center pt-1">
              <p className="text-[8px] font-body text-moss mb-1 font-semibold">
                Learn more or request workers
              </p>
              <div className="flex justify-center items-center gap-2">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://mendolaborcoop.ukiahumc.org"
                  alt="QR Code"
                  className="w-10 h-10 border border-moss rounded"
                />
                <p className="text-[9px] font-body text-moss font-semibold leading-tight">
                  mendolaborcoop<br/>.ukiahumc.org
                </p>
              </div>
            </div>

          </div>

          {/* BLACK & WHITE FLYER - SENIOR NEWSLETTER OPTIMIZED */}
          <div className="flyer-container bg-white p-3 shadow-lg rounded-lg border-[3px] border-black relative">
            
            {/* Tiny corner logo mark - optional trust signal */}
            <div className="absolute top-2 right-2">
              <img
                src="/mendo_labor_coop_logo.png"
                alt="Logo"
                className="w-8 h-8 grayscale opacity-40"
              />
            </div>

            {/* Service Description - Context first */}
            <div className="text-center mb-2 mt-1">
              <p className="text-sm text-black font-body font-bold leading-snug">
                Yard work • Errands • Odd jobs
              </p>
            </div>

            {/* PRIMARY: PHONE NUMBER - MASSIVE 7xl, 50% of height */}
            <div className="contact-box-bw bg-white text-black py-6 px-2 rounded-lg mb-2 text-center border-[3px] border-black">
              <a 
                href="tel:+13692161512" 
                className="text-7xl font-headline font-black block leading-none hover:opacity-90 transition-opacity"
                style={{ letterSpacing: '0.05em' }}
              >
                (369) 216-1512
              </a>
              <p className="text-sm font-headline font-black mt-3">
                Call or Text Cheryl
              </p>
            </div>

            {/* Headline - Supporting role */}
            <div className="text-center mb-2">
              <h1 className="text-base font-headline font-black text-black leading-tight">
                Hire a Temporary Worker
              </h1>
              <p className="text-xs text-black font-body font-bold mt-1 leading-relaxed">
                Skilled local help • Fair pay
              </p>
            </div>

            {/* Footer - Email only */}
            <div className="text-center pt-2 border-t border-black">
              <p className="text-[9px] font-body text-black font-semibold">
                mendolaborcoop@gmail.com
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default FlyerPage;
