import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-redwood text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-lg font-headline font-bold mb-4 text-cream">Mendo Labor Cooperative</h3>
            <p className="text-cream mb-2 italic">
              "Worker power builds community power"
            </p>
            <p className="text-cream text-sm">
              Building economic justice and worker solidarity in Mendocino County.
            </p>
            <p className="text-cream text-sm mt-2">
              Unhoused workers supporting unhoused workers
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cream">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cream hover:text-sand transition-colors font-body">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream hover:text-sand transition-colors font-body">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream hover:text-sand transition-colors font-body">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-headline font-bold mb-4 text-cream">Get Connected</h3>
            <div className="space-y-2 text-cream font-body">
              <p>� Phone: Coming soon</p>
              <p className="pt-2">Serving unhoused workers in Mendocino County</p>
              <p>Mutual aid • Worker organizing • Economic justice</p>
            </div>
            
            {/* Social Links */}
            <div className="mt-4 space-y-2">
              <p className="text-sm text-cream">Follow our organizing:</p>
              <div className="flex space-x-4">
                {/* Placeholder for social media links */}
                <a href="#" className="text-cream hover:text-sand transition-colors text-sm">
                  Facebook
                </a>
                <a href="#" className="text-cream hover:text-sand transition-colors text-sm">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-cream text-sm">
            © 2025 Mendo Labor Cooperative. Built by and for the working class.
          </p>
          <p className="text-cream text-xs mt-2">
            Solidarity with all workers fighting for dignity and justice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;