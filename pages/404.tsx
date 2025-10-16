import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <Layout 
      title="Page Not Found | Mendo Labor Cooperative"
      description="The page you're looking for doesn't exist. Find what you need at the Mendo Labor Cooperative."
    >
      <div className="min-h-screen bg-gradient-to-b from-coop-cream to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="text-8xl mb-4">🏠</div>
            <h1 className="text-4xl font-headline font-bold text-coop-red mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              This page doesn't exist, but the movement for worker justice continues.
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/"
              className="bg-coop-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
            >
              Back to Home
            </Link>
            <Link
              href="/get-help"
              className="border-2 border-coop-red text-coop-red px-6 py-3 rounded-lg font-semibold hover:bg-coop-red hover:text-white transition-colors inline-block"
            >
              Get Help
            </Link>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Lost? <Link href="/contact" className="text-coop-red hover:text-red-700 font-medium">Contact us</Link> and we'll help you find what you need.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;