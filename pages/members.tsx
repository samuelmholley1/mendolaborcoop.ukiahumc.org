import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

interface Member {
  id: string;
  fullName: string;
  displayName: string;
  phone: string;
  skills?: string[];
  notes?: string;
}

// Member directory data - internal use only
const members: Member[] = [
  {
    id: 'tony-gama',
    fullName: 'Joel "Tony" Gama',
    displayName: 'Tony',
    phone: '369-216-7883',
    skills: ['Painting', 'Drywall', 'Tree Trimming', 'Yard Work', 'Bilingual (Spanish/English)'],
    notes: '32+ years painting experience. Comfortable with heights up to 60-70 feet.'
  },
  {
    id: 'david-churchill',
    fullName: 'David Churchill',
    displayName: 'David',
    phone: '707-313-2339',
    skills: ['Masonry', 'Concrete/ADA Work', 'Irrigation', 'Groundskeeping', 'Office/Tech Setup', 'Pool Building'],
    notes: 'NO ROOFS - liability concern, uses telescoping poles. Former Masonry/Plasterers Union & SEIU member. State of CA building maintenance experience. Safety-conscious - may refuse unsafe work or negotiate hazard pay. Artist (Flash Heart style). Text or call is fine. 10+ years in Mendo County.'
  },
  {
    id: 'efren-de-la-torre',
    fullName: 'Efren De La Torre',
    displayName: 'Efren',
    phone: '559-894-8571',
    skills: ['Mechanics (Semi-trucks/Thermo King)', 'Welding (Aluminum/Stainless)', 'Heavy Equipment Operation', 'Farm Labor', 'Construction', 'Solar Installation', 'Portrait Drawing'],
    notes: 'Recently released (~6 years incarcerated). New to Ukiah (arrived ~Jan 2026 from Dos Palos/Merced County). NO VEHICLE - walks or uses public transit. NOT TECH SAVVY - needs help with digital coordination/smartphones. Willing to do dirty work/hard labor. Currently in shelter/transitional housing. Available for calls/texts anytime. May have short-term construction gig - check availability.'
  },
  // Add more members here as needed
];

const CORRECT_PASSWORD = 'labor1coop!MENDO@';

const MembersPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already authenticated in this session
    const auth = sessionStorage.getItem('members_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('members_auth', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isLoading) {
    return (
      <Layout
        title="Members Directory - Mendo Labor Cooperative"
        description="Internal members directory for Mendo Labor Cooperative."
      >
        <div className="min-h-screen bg-cream flex items-center justify-center">
          <div className="text-moss text-lg">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (!isAuthenticated) {
    return (
      <Layout
        title="Members Directory - Mendo Labor Cooperative"
        description="Internal members directory for Mendo Labor Cooperative."
      >
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        
        <section className="min-h-screen bg-cream py-20">
          <div className="max-w-md mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-moss rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-headline font-bold text-gold mb-2">
                  Members Directory
                </h1>
                <p className="text-moss/70">
                  This page is for co-op members only. Please enter the password to access the directory.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-moss mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-sand rounded-lg focus:ring-2 focus:ring-moss focus:border-moss transition-colors"
                    placeholder="Enter member password"
                    autoFocus
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-moss text-cream font-semibold py-3 px-6 rounded-lg hover:bg-moss/90 transition-colors"
                >
                  Access Directory
                </button>
              </form>

              <p className="text-center text-sm text-moss/60 mt-6">
                Contact Cheryl at (369) 216-1512 if you need the password.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout
      title="Members Directory - Mendo Labor Cooperative"
      description="Internal members directory for Mendo Labor Cooperative."
    >
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Header */}
      <section className="bg-moss text-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-headline font-bold mb-2">
                Members Directory
              </h1>
              <p className="text-cream/80">
                Internal contact information for co-op members
              </p>
            </div>
            <button
              onClick={() => {
                sessionStorage.removeItem('members_auth');
                setIsAuthenticated(false);
              }}
              className="bg-cream/10 hover:bg-cream/20 text-cream px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>
      </section>

      {/* Members List */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-sand/50 px-6 py-4 border-b border-sand">
              <h2 className="text-lg font-semibold text-moss">
                Active Members ({members.length})
              </h2>
            </div>
            
            <div className="divide-y divide-sand">
              {members.map((member) => (
                <div key={member.id} className="p-6 hover:bg-sand/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gold mb-1">
                        {member.fullName}
                      </h3>
                      {member.displayName !== member.fullName.split(' ')[0] && (
                        <p className="text-sm text-moss/60 mb-2">
                          Goes by: {member.displayName}
                        </p>
                      )}
                      
                      {member.skills && member.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {member.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="bg-moss/10 text-moss text-xs px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {member.notes && (
                        <p className="text-sm text-moss/70 mt-3">
                          {member.notes}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <a
                        href={`tel:${member.phone.replace(/-/g, '')}`}
                        className="bg-moss text-cream px-4 py-2 rounded-lg hover:bg-moss/90 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Member Note */}
          <div className="mt-8 bg-river/10 border border-river/20 rounded-lg p-6">
            <h3 className="font-semibold text-river mb-2">Need to add a member?</h3>
            <p className="text-moss/80 text-sm">
              Contact the web coordinator to add new members to this directory. 
              Please provide their full legal name, preferred display name, phone number, 
              and a list of their skills.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MembersPage;
