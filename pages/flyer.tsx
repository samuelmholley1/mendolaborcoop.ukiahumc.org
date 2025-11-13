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
              width: 8.5in; 
              height: 11in; 
            }
            .contact-box {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
          }
          @page {
            margin: 0.5in;
            size: letter portrait;
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
            <p className="text-moss mt-2 font-body">Ready to print on standard letter paper (8.5" x 11")</p>
          </div>

          {/* Flyer Content */}
          <div className="flyer-container bg-white p-12 shadow-lg rounded-lg border-8 border-moss">
            
            {/* Logo */}
            <div className="text-center mb-12">
              <img
                src="/mendo_labor_coop_logo.png"
                alt="Mendo Labor Cooperative"
                className="mx-auto w-80 h-80"
              />
            </div>

            {/* Main CTA Headline */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-redwood mb-6 leading-tight">
                Hire a Temporary Worker
              </h1>
              <p className="text-2xl text-moss font-body font-semibold">
                Skilled Local Workers • Fair Pay • Mendocino County
              </p>
            </div>

            {/* Primary CTA - Contact Info */}
            <div className="contact-box bg-moss text-cream p-12 rounded-lg mb-8 text-center">
              <p className="text-2xl font-headline font-semibold mb-3">
                Call or Text Cheryl
              </p>
              <a 
                href="tel:+13692161512" 
                className="text-6xl font-headline font-extrabold block mb-2 hover:opacity-90 transition-opacity"
              >
                (369) 216-1512
              </a>
            </div>

            {/* Secondary Info - QR Code & Website */}
            <div className="text-center pt-6 border-t border-sand">
              <div className="flex justify-center items-center gap-6">
                {/* QR Code - Using QR Code API */}
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://mendolaborcoop.ukiahumc.org"
                  alt="QR Code"
                  className="w-32 h-32 border-2 border-sand rounded"
                />
                <p className="text-lg font-body text-moss">
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
