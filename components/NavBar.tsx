import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Hire Worker(s)', href: '/hire' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Newsletter', href: '/newsletter' },
  ];

  const isActivePage = (href: string) => {
    return router.pathname === href;
  };

  return (
    <nav className="bg-moss border-b border-moss">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/mendo_labor_coop_favicon.png" 
                alt="Mendo Labor Cooperative Icon" 
                className="h-10 w-10"
              />
              <img 
                src="/mendo_labor_coop_logo_text.png" 
                alt="Mendo Labor Cooperative" 
                className="h-8 ml-3"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActivePage(item.href)
                    ? 'text-cream bg-moss/80'
                    : 'text-cream hover:text-sand hover:bg-moss/60'
                } font-body`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cream hover:text-sand focus:outline-none focus:text-sand focus:ring-2 focus:ring-cream rounded"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-moss">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActivePage(item.href)
                      ? 'text-cream bg-moss/80'
                      : 'text-cream hover:text-sand hover:bg-moss/60'
                  } font-body`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;