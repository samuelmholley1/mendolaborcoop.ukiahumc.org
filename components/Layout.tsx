import React, { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  onContactClick?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "Mendo Labor Cooperative - Worker Power in Mendocino County",
  description = "Building worker solidarity and economic justice in Mendocino County. Unhoused workers cooperative providing mutual aid, job placement, and community organizing support.",
  keywords = "worker cooperative, Mendocino County, labor rights, economic justice, mutual aid, Ukiah CA, worker solidarity, cooperative jobs, unhoused workers",
  ogImage = "/mendo_labor_coop_logo.png",
  canonical,
  onContactClick
}) => {
  const siteUrl = "https://mendolaborcoop.ukiahumc.org";
  const canonicalUrl = canonical || siteUrl;
  
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Mendo Labor Cooperative" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${ogImage}`} />
        <meta property="og:site_name" content="Mendo Labor Cooperative" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
        
        {/* Additional SEO */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Ukiah, California" />
        <meta name="geo.position" content="39.1502;-123.2078" />
        <meta name="ICBM" content="39.1502, -123.2078" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer onContactClick={onContactClick} />
      </div>
    </>
  );
};

export default Layout;