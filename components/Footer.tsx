import React from 'react';
import Link from 'next/link';

const Footer: React.FC<{ onContactClick?: () => void }> = ({ onContactClick }) => {
  return (
    <footer className="bg-gold text-cream">
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
              <h3 className="text-lg font-headline font-semibold text-cream mb-3">Contact</h3>
              <div>
                <p className="text-sm text-cream">Cheryl Vinson & Braven Haynes, Co-Coordinators</p>
                <a href="tel:+13692161512" className="hover:text-sand transition-colors">
                  (369) 216-1512
                </a>
              </div>
              <div className="mt-3">
                <p className="text-sm text-cream">Email</p>
                <a href="mailto:mendolaborcoop@gmail.com" className="hover:text-sand transition-colors text-sm">
                  mendolaborcoop@gmail.com
                </a>
              </div>
              <div className="mt-4">
              <p className="text-sm text-cream">Building worker power in Mendocino County</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="border-t border-cream border-opacity-20 mt-8 pt-6 text-center">
          <p className="text-cream text-sm italic max-w-2xl mx-auto leading-relaxed">
            <span className="font-headline font-semibold not-italic">Our Mission:</span>{' '}
            Local workers. Local jobs. Local prosperity. We connect unemployed and underemployed community members with opportunities that build economic stability, support housing security, and keep resources where we live.
          </p>
        </div>

        <div className="border-t border-cream border-opacity-20 mt-6 pt-6 text-center">
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