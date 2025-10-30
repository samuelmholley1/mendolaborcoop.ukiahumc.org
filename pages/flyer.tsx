import React from 'react';
import Head from 'next/head';

const FlyerPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mendo Labor Cooperative - Printable Flyer</title>
        <style>{`
          @media print {
            body { margin: 0; padding: 0; }
            .no-print { display: none !important; }
            .flyer-container { 
              width: 8.5in; 
              height: 11in; 
              page-break-after: always;
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
            <div className="text-center mb-8">
              <img
                src="/mendo_labor_coop_logo.png"
                alt="Mendo Labor Cooperative Logo"
                className="mx-auto w-64 h-64 mb-6"
              />
              <img
                src="/mendo_labor_coop_logo_text.png"
                alt="Mendo Labor Cooperative"
                className="mx-auto h-16 mb-4"
              />
            </div>

            {/* Tagline */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-headline font-bold text-redwood mb-4">
                Worker Power Builds Community Power
              </h1>
              <p className="text-xl text-moss font-body">
                Building economic justice and worker solidarity in Mendocino County
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-sand border-l-8 border-l-moss rounded-r-lg p-8 mb-8">
              <h2 className="text-2xl font-headline font-bold text-redwood mb-4 text-center">
                Get Connected
              </h2>
              <div className="text-center space-y-3">
                <div>
                  <p className="text-lg text-moss font-semibold">Coop Coordinator: Cheryl</p>
                  <a 
                    href="tel:+19166397174" 
                    className="text-3xl font-headline font-bold text-moss hover:text-redwood transition-colors"
                  >
                    (916) 639-7174
                  </a>
                </div>
              </div>
            </div>

            {/* QR Code & Website */}
            <div className="border-t-4 border-moss pt-8 text-center">
              <p className="text-xl font-headline font-semibold text-moss mb-4">
                Scan to Visit Our Website
              </p>
              
              {/* QR Code - Using QR Code API */}
              <div className="flex justify-center mb-4">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://mendolaborcoop.ukiahumc.org"
                  alt="QR Code to mendolaborcoop.ukiahumc.org"
                  className="w-64 h-64 border-4 border-moss rounded-lg"
                />
              </div>
              
              <p className="text-2xl font-headline font-bold text-redwood mb-2">
                mendolaborcoop.ukiahumc.org
              </p>
            </div>

            {/* Bottom Tagline */}
            <div className="text-center mt-8 pt-6 border-t-2 border-sand">
              <p className="text-lg font-body text-moss italic">
                Unhoused workers supporting unhoused workers
              </p>
              <p className="text-md font-body text-moss mt-2">
                Mutual Aid • Worker Organizing • Economic Justice
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default FlyerPage;
