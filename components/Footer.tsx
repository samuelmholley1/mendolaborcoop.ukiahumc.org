import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coop-red text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-lg font-headline font-bold mb-4 text-white">Mendo Labor Cooperative</h3>
            <p className="text-red-100 mb-2 italic">
              "Worker power builds community power"
            </p>
            <p className="text-red-200 text-sm">
              Building economic justice and worker solidarity in Mendocino County.
            </p>
            <p className="text-red-200 text-sm mt-2">
              Unhoused workers supporting unhoused workers
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-red-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-red-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-red-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/get-help" className="text-red-200 hover:text-white transition-colors">
                  Get Help
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-red-200 hover:text-white transition-colors">
                  Join the Cooperative
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-red-200 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-red-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-headline font-bold mb-4 text-white">Get Connected</h3>
            <div className="space-y-2 text-red-200">
              <p>📧 info@mendolaborcoop.ukiahumc.org</p>
              <p>📞 Call/Text: (TBD)</p>
              <p className="pt-2">Serving unhoused workers in Mendocino County</p>
              <p>Mutual aid • Worker organizing • Economic justice</p>
            </div>
            
            {/* Social Links */}
            <div className="mt-4 space-y-2">
              <p className="text-sm text-red-200">Follow our organizing:</p>
              <div className="flex space-x-4">
                {/* Placeholder for social media links */}
                <a href="#" className="text-red-200 hover:text-white transition-colors text-sm">
                  Facebook
                </a>
                <a href="#" className="text-red-200 hover:text-white transition-colors text-sm">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-700 mt-8 pt-8 text-center">
          <p className="text-red-200 text-sm">
            © 2025 Mendo Labor Cooperative. Built by and for the working class.
          </p>
          <p className="text-red-200 text-xs mt-2">
            Solidarity with all workers fighting for dignity and justice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;