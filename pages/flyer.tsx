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
            .contact-box {
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
              🖨️ Print Flyer
            </button>
            <p className="text-moss mt-2 font-body">Optimized for quarter-page printing (4.25" x 5.5") - 4 flyers per letter sheet</p>
          </div>

          {/* Flyer Content */}
          <div className="flyer-container bg-white p-4 shadow-lg rounded-lg border-4 border-moss">
            
            {/* Logo */}
            <div className="text-center mb-3">
              <img
                src="/mendo_labor_coop_logo.png"
                alt="Mendo Labor Cooperative"
                className="mx-auto w-24 h-24"
              />
            </div>

            {/* Main CTA Headline */}
            <div className="text-center mb-3">
              <h1 className="text-xl font-headline font-extrabold text-gold mb-1 leading-tight">
                Hire a Temporary Worker
              </h1>
              <p className="text-sm text-moss font-body font-semibold">
                Skilled Local Workers • Fair Pay
              </p>
            </div>

            {/* Primary CTA - Contact Info */}
            <div className="contact-box bg-moss text-cream p-3 rounded-lg mb-3 text-center">
              <p className="text-sm font-headline font-semibold mb-1">
                Call or Text Cheryl
              </p>
              <a 
                href="tel:+13692161512" 
                className="text-2xl font-headline font-extrabold block mb-1 hover:opacity-90 transition-opacity"
              >
                (369) 216-1512
              </a>
              <p className="text-xs font-body opacity-90">
                mendolaborcoop@gmail.com
              </p>
            </div>

            {/* Secondary Info - QR Code & Website */}
            <div className="text-center pt-2 border-t border-sand">
              <div className="flex justify-center items-center gap-2">
                {/* QR Code - Using QR Code API */}
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://mendolaborcoop.ukiahumc.org"
                  alt="QR Code"
                  className="w-12 h-12 border border-sand rounded"
                />
                <p className="text-xs font-body text-moss">
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
