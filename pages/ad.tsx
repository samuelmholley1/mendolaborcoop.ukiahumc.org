import React, { useRef, useState } from 'react';
import Head from 'next/head';

const AdPage: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const downloadAsPNG = async () => {
    if (!adRef.current) return;
    
    setIsExporting(true);
    
    try {
      const { toPng } = await import('html-to-image');
      
      // Wait for fonts to load
      await document.fonts?.ready?.catch(() => {});
      
      const dataUrl = await toPng(adRef.current, {
        quality: 0.98,
        backgroundColor: '#ffffff',
        cacheBust: true,
        pixelRatio: 3, // Higher resolution for better quality
      });
      
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      
      // Download
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'mendo-labor-coop-ad.png';
      a.click();
      URL.revokeObjectURL(url);
      
      setIsExporting(false);
    } catch (error) {
      console.error('Export failed:', error);
      setIsExporting(false);
    }
  };

  return (
    <>
      <Head>
        <title>B&W Ad - Download PNG | Mendo Labor Cooperative</title>
        <meta name="description" content="Download high-quality B&W ad for senior newsletters. Mendo Labor Cooperative - Worker Power Builds Community Power." />
        <meta name="robots" content="noindex, follow" />
      </Head>
      
      <div className="min-h-screen bg-cream p-8">
        <div className="max-w-md mx-auto">
          {/* Download Button */}
          <div className="mb-8 text-center">
            <button
              onClick={downloadAsPNG}
              disabled={isExporting}
              className="bg-moss text-cream px-8 py-3 rounded-lg text-lg font-headline font-semibold hover:bg-moss/90 transition-colors disabled:opacity-50"
            >
              {isExporting ? '⏳ Generating...' : '⬇️ Download PNG'}
            </button>
            <p className="text-moss mt-2 font-body">High-quality PNG for newsletters</p>
          </div>

          {/* BLACK & WHITE AD */}
          <div 
            ref={adRef}
            className="flyer-container bg-white p-5 shadow-lg rounded-lg border-[5px] border-black overflow-hidden flex flex-col justify-between mx-auto"
            style={{
              width: '340px',
              height: '440px',
            }}
          >
            
            {/* Header - Co-op Name */}
            <div className="text-center mb-3">
              <h2 className="text-base font-headline font-black text-black tracking-wider">
                MENDO LABOR COOPERATIVE
              </h2>
            </div>

            {/* Hook Question */}
            <div className="text-center mb-2">
              <h1 className="text-3xl font-headline font-black text-black leading-tight">
                Need Help<br/>With...
              </h1>
            </div>

            {/* Services - Clean list */}
            <div className="text-center mb-3">
              <p className="text-2xl text-black font-headline font-black leading-tight">
                Yard Work?<br/>
                Errands?<br/>
                Odd Jobs?
              </p>
            </div>

            {/* Tagline */}
            <div className="text-center mb-3">
              <p className="text-sm text-black font-body font-semibold">
                Skilled local help • Fair pay
              </p>
            </div>

            {/* CTA Box - Dominant */}
            <div className="bg-black text-white py-3 px-3 text-center mb-4">
              <p className="text-sm font-headline font-black mb-2 tracking-widest">
                CALL OR TEXT
              </p>
              <a 
                href="tel:+13692161512" 
                className="text-4xl font-headline font-black block leading-none hover:opacity-90 transition-opacity whitespace-nowrap"
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
        </div>
      </div>
    </>
  );
};

export default AdPage;
