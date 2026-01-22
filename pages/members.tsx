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
    skills: ['Painting (Expert - 32+ yrs)', 'Drywall', 'Heights/Tree Work (60-70ft)', 'Bilingual (Spanish/English)', 'Crew Management'],
    notes: 'Goes by "Tony". Nickname "Rambo" among painters for high intensity work. 13 years in Ukiah (from SoCal). HEALTH: Ulcerative Colitis - requires Remicade infusions, needs scheduling flexibility. In recovery (30+ yrs history, currently sober/NA). LEGAL: On probation (~4 months remaining as of Jan 2026). HOUSING: Recently unhoused (~3 weeks as of intake) due to domestic dispute/restraining order. LOW LITERACY: 7th-grade education - uncomfortable with reading/writing/computers, needs help with texts/digital scheduling. NO ELECTRICAL OR PLUMBING. Leaves job sites cleaner than found. Can run crews but prefers just working. Available Saturdays after 2:30 PM (food distribution at Methodist Church).'
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
  {
    id: 'braven-haynes',
    fullName: 'Braven Haynes',
    displayName: 'Braven',
    phone: '(Contact via Co-op channels)',
    skills: ['CO-OP COORDINATOR', 'Auto Mechanics (brakes/tires/oil)', 'Cosmetology/Hair ($25 cuts)', 'Welding/Metal Art', 'Painting', 'Landscaping', 'Heavy Lifting/Moving', 'Pallet Jack/Logistics'],
    notes: 'CO-OP COORDINATOR (with David) - handles client intake, screening, negotiating. COMPUTER LITERATE - set up Google Business & Gmail, being trained on website. AUTO: General maintenance (brakes, tires, oil, piston rings) but NOT fine-detail engine diagnostics. HAIR: Attended hair school, gentlemen\'s cuts & skin fades (~$25). ART: Welding/metal art, acrylic/oil painting, spray painting cars, bleach art clothing (fashion line). LABOR: Mowing, moving help, furniture assembly, trash crew, catering/dishwashing, stocking/unloading (Hobby Lobby pallet jack exp). Willing to do gross plumbing/septic if needed. Strong "growth mindset" philosophy, good at reading people/situations, natural team leader.'
  },
  {
    id: 'casey-faahs',
    fullName: 'Casey Faahs',
    displayName: 'Casey',
    phone: '707-510-9658',
    skills: ['Landscaping/Grunt Work', 'Property Maintenance', 'Forklift (15 yrs)', 'Mill Work (8 yrs)', 'Heavy Lifting/Moving', 'Pressure Washing', 'Computer Hardware Repair'],
    notes: 'Ukiah native, spent 20 yrs in Brookings OR, recently returned. HOUSING: Homeless (~6-7 months at shelter). NO CAR - gets around by skateboard. MANAGEMENT: Former fishery superintendent (managed 20-30 people), 17 yrs as landlord/property manager. TECH: Can fix computer hardware (RAM etc), past C++ coding (~10 yrs ago). REFUSES: Fast food (grease) and caregiving (past trauma). BACKGROUND: Lost duplex to water heater explosion/mold/insurance + spouse addiction. Recent trauma from remote cabin caregiving (patient died, no utilities, bear encounters). Ready to work immediately. Prefers manual labor, "grunt work." Calls/texts OK.'
  },
  {
    id: 'tony-maples',
    fullName: 'Tony Maples',
    displayName: 'Tony M.',
    phone: '707-510-9708',
    skills: ['General Labor', 'TBD - Interview Pending'],
    notes: 'PLACEHOLDER - Full profile interview scheduled for Saturday Dec 14, 2025 at 12:30 PM at Building Bridges. Attended December 11, 2025 meeting.'
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
                    type="text"
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
                Contact the coop at (369) 216-1512 if you need the password.
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
      <section className="py-16 bg-gradient-to-b from-cream to-sand/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-moss mb-2">
              Active Members ({members.length})
            </h2>
            <p className="text-moss/70">
              Internal contact information and skills directory
            </p>
          </div>
          
          {/* Member Cards Grid */}
          <div className="grid gap-6">
            {members.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-sand/30 overflow-hidden"
              >
                <div className="p-8">
                  {/* Name and Contact Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 pb-6 border-b border-sand/50">
                    <div>
                      <h3 className="text-2xl font-semibold text-gold mb-1">
                        {member.fullName}
                      </h3>
                      {member.displayName !== member.fullName.split(' ')[0] && (
                        <p className="text-sm text-moss/60">
                          <span className="font-medium">Goes by:</span> {member.displayName}
                        </p>
                      )}
                    </div>
                    
                    <a
                      href={`tel:${member.phone.replace(/[^\d+]/g, '')}`}
                      className="inline-flex items-center gap-2 bg-moss text-cream px-4 py-2 rounded-lg hover:bg-moss/90 transition-colors whitespace-nowrap self-start"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.908.953a16.001 16.001 0 006.753 6.753l.953-1.908a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="font-semibold">{member.phone}</span>
                    </a>
                  </div>

                  {/* Skills Section */}
                  {member.skills && member.skills.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-moss mb-3 uppercase tracking-wide">
                        Skills & Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-moss/10 to-moss/5 text-moss text-sm px-3 py-1.5 rounded-full border border-moss/20 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Notes Section */}
                  {member.notes && (
                    <div className="bg-moss/5 rounded-lg p-4 border-l-4 border-river">
                      <h4 className="text-xs font-semibold text-river mb-2 uppercase tracking-wide">
                        Additional Information
                      </h4>
                      <p className="text-sm text-moss leading-relaxed">
                        {member.notes}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 bg-river/10 border border-river/30 rounded-xl p-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-river" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-river mb-1">Add or Update Members</h3>
                <p className="text-moss/80 text-sm">
                  Contact the web coordinator to add new members or update existing information. 
                  Please include full legal name, preferred display name, phone number, skills, 
                  and any relevant notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MembersPage;
