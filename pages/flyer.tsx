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

          {/* COLOR FLYER */}
          <div className="flyer-container bg-white p-5 shadow-lg rounded-lg border-4 border-moss mb-8">
            
            {/* Logo - Increased size by 12%, reduced top margin */}
            <div className="text-center mb-2">
              <img
                src="/mendo_labor_coop_logo.png"
                alt="Mendo Labor Cooperative"
                className="mx-auto w-28 h-28"
              />
            </div>

            {/* Main CTA Headline - Bolder weight */}
            <div className="text-center mb-3">
              <h1 className="text-xl font-headline font-black text-gold mb-1 leading-tight">
                Hire a Temporary Worker
              </h1>
              <p className="text-sm text-moss font-body font-normal">
                Skilled local help • Fair pay
              </p>
            </div>

            {/* Primary CTA - Contact Info - Darker green, larger phone, more spacing */}
            <div className="contact-box bg-[#2d5016] text-white py-4 px-3 rounded-lg mb-3 text-center shadow-inner">
              <p className="text-xs font-headline font-semibold mb-2">
                Call or Text Cheryl
              </p>
              <a 
                href="tel:+13692161512" 
                className="text-4xl font-headline font-extrabold block my-3 hover:opacity-90 transition-opacity tracking-wide"
                style={{ color: '#FFFFFF' }}
              >
                (369) 216-1512
              </a>
              <p className="text-xs font-body mt-2">
                mendolaborcoop@gmail.com
              </p>
            </div>

            {/* Secondary Info - QR Code & Website - Larger QR, with label, closer spacing */}
            <div className="text-center pt-2">
              <p className="text-[9px] font-body text-moss mb-1 font-semibold">
                Learn more or request workers
              </p>
              <div className="flex justify-center items-center gap-2">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://mendolaborcoop.ukiahumc.org"
                  alt="QR Code"
                  className="w-14 h-14 border-2 border-moss rounded"
                />
                <p className="text-xs font-body text-moss font-semibold">
                  mendolaborcoop.ukiahumc.org
                </p>
              </div>
            </div>

          </div>

          {/* BLACK & WHITE FLYER */}
          <div className="flyer-container bg-white p-5 shadow-lg rounded-lg border-[3px] border-black">
            
            {/* Logo - Increased size, bolder */}
            <div className="text-center mb-2">
              <img
                src="/mendo_labor_coop_logo.png"
                alt="Mendo Labor Cooperative"
                className="mx-auto w-28 h-28 grayscale contrast-125"
              />
            </div>

            {/* Primary CTA - Contact Info FIRST (reordered for seniors) */}
            <div className="contact-box-bw bg-white text-black py-5 px-4 rounded-lg mb-3 text-center border-[3px] border-black">
              <a 
                href="tel:+13692161512" 
                className="text-4xl font-headline font-black block mb-3 hover:opacity-90 transition-opacity tracking-widest leading-tight"
              >
                (369) 216-1512
              </a>
              <p className="text-xs font-headline font-black mb-1">
                Call or Text Cheryl
              </p>
            </div>

            {/* Main CTA Headline - After phone for B&W priority */}
            <div className="text-center mb-3">
              <h1 className="text-xl font-headline font-black text-black mb-2 leading-tight">
                Hire a Temporary Worker
              </h1>
              <p className="text-base text-black font-body font-bold leading-relaxed">
                Skilled local help • Fair pay
              </p>
            </div>

            {/* Secondary Info - Email & QR Code */}
            <div className="text-center pt-3 border-t-[2.5px] border-black mt-3">
              <p className="text-sm font-body font-bold mb-2 text-left px-1">
                mendolaborcoop@gmail.com
              </p>
              <div className="flex justify-center items-center gap-3">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://mendolaborcoop.ukiahumc.org"
                  alt="QR Code"
                  className="w-14 h-14 border-[2.5px] border-black rounded"
                />
                <p className="text-xs font-body text-black font-bold text-left leading-snug">
                  mendolaborcoop<br/>.ukiahumc.org
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
