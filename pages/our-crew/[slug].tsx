import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Head from 'next/head';

// Extended worker profile data for individual pages
interface WorkerFullProfile {
  slug: string;
  name: string;
  photoUrl?: string;
  photoCaption?: string;
  tagline: string;
  skills: string[];
  skillDetails: {
    category: string;
    items: string[];
  }[];
  yearsExperience?: string;
  isPublic: boolean;
  aboutParagraphs: string[];
  whyHire: string[];
  specialties?: string[];
  languages?: string[];
  comfortableWith?: string[];
}

// Full profile data
const workerProfiles: Record<string, WorkerFullProfile> = {
  'tony': {
    slug: 'tony',
    name: 'Tony',
    photoUrl: '/workers/tony.jpg',
    photoCaption: 'Tony, Skilled Painter & General Laborer',
    tagline: 'Master painter with 32+ years of experience and a tireless work ethic',
    skills: ['Professional Painting', 'Faux Finishes', 'Venetian Plaster', 'Drywall', 'Tree Trimming', 'Bilingual'],
    yearsExperience: '32+ years',
    isPublic: false, // Password protected
    aboutParagraphs: [
      'Tony is a dedicated tradesman and a familiar face in Ukiah, having called Mendocino County home for the past 13 years. Originally from Southern California, he moved north to work and fell in love with the area. Known among local painters as "Rambo" for his tireless work ethic and ability to tackle tough jobs, Tony is rebuilding his life with a renewed focus on sobriety, community, and hard work.',
      'With a career starting when he was just a teenager (back when minimum wage was $6.25), Tony brings over three decades of hands-on experience to the co-op. He is currently an active volunteer at local food distributions and is motivated to use his skills to help neighbors improve their homes and properties.'
    ],
    skillDetails: [
      {
        category: 'Professional Painting (32+ Years)',
        items: [
          'Expert in both residential and commercial painting',
          'Faux finishes, Venetian plaster, texturing, and detailed interior work',
          'Takes pride in work, describing his painting as "priceless works of art"'
        ]
      },
      {
        category: 'Drywall',
        items: [
          'Hanging and taping drywall since age 15',
          'Experienced with patches, repairs, and full installations'
        ]
      },
      {
        category: 'Yard & Property Maintenance',
        items: [
          'Comfortable with "grunt work," general cleanup, and hauling',
          'Tree trimming and high-ladder work'
        ]
      },
      {
        category: 'Safety & Professionalism',
        items: [
          'Extensive experience with safety protocols',
          'Setting up cones/tape for public areas (gas station experience)',
          'Detail-oriented—often cleaning up job sites better than he found them'
        ]
      }
    ],
    specialties: [
      'Faux finishes',
      'Venetian plaster',
      'Texturing',
      'Detailed interior work'
    ],
    languages: ['English', 'Spanish (fluent)'],
    comfortableWith: [
      'Heights up to 60-70 feet for tree trimming or high-ladder work',
      'Serving as an interpreter on job sites'
    ],
    whyHire: [
      'Tony takes pride in his work, describing his painting as "priceless works of art."',
      'He is detail-oriented—often cleaning up job sites better than he found them—and values safety and precision.',
      'Whether you need a high-end finish on a living room wall or someone to tackle a difficult yard cleanup that requires working at heights, Tony has the experience and the drive to get it done right.'
    ]
  },
  'david': {
    slug: 'david',
    name: 'David',
    photoUrl: '/workers/david.jpg',
    photoCaption: 'David, Skilled Tradesman, Maintenance Specialist & Artist',
    tagline: 'Union-trained tradesman with diverse skills in masonry, maintenance, and grounds work',
    skills: ['Concrete & Masonry', 'Landscape Maintenance', 'Irrigation', 'Office Setup', 'General Maintenance'],
    yearsExperience: '10+ years',
    isPublic: true,
    aboutParagraphs: [
      'David has called Mendocino County home for over a decade. With a solid work history rooted in organized labor—including time with the Masonry & Plasterers Union and the SEIU—he brings a professional, "union-grade" work ethic to the local community.',
      'Having worked for the State of California in building maintenance and the Prison Industry Authority setting up offices, he is a versatile and reliable hand. Beyond his trade skills, he is an aspiring digital creator and artist who values the concept of "heart" in his work.'
    ],
    skillDetails: [
      {
        category: 'Concrete & Masonry',
        items: [
          'Experience as a union apprentice (Masonry & Plasterers Union)',
          'Custom ADA concrete applications',
          'Flatwork and pool building'
        ]
      },
      {
        category: 'Landscape & Grounds Maintenance',
        items: [
          'Skilled in installing irrigation systems',
          'Managing drains and drainage solutions',
          'General groundskeeping and yard cleanup'
        ]
      },
      {
        category: 'Office & Tech Setup',
        items: [
          'Physical office setup including running wire for computers',
          'Comfortable navigating PC operating systems',
          'Experience setting up offices for Prison Industry Authority'
        ]
      },
      {
        category: 'General Maintenance',
        items: [
          'Building maintenance (State of California experience)',
          'Trash removal and property cleanup',
          'Gutter cleaning using extension tools from the ground'
        ]
      }
    ],
    specialties: [
      'Custom ADA concrete work',
      'Irrigation installation',
      'Union-trained craftsmanship'
    ],
    languages: ['English'],
    comfortableWith: [
      'Ground-level work with telescoping tools',
      'Domestic tasks (cooking, cleaning, trash removal)',
      'Office and tech setup projects'
    ],
    whyHire: [
      'Clients appreciate David for being "clean-cut," present, and strictly on time. He is safety-conscious—preferring to use the right tools for the job rather than taking unnecessary risks—and takes pride in seeing a job through to completion.',
      'He brings a unique mix of artistic creativity and blue-collar reliability to the co-op.',
      'As David describes his approach: "I\'m definitely reliable... I aim to be present, on time, and thorough to complete the task."'
    ]
  },
  'efren': {
    slug: 'efren',
    name: 'Efren',
    photoUrl: '/workers/efren.jpg',
    photoCaption: 'Efren, Skilled Mechanic, Welder & Heavy Equipment Operator',
    tagline: 'Central Valley veteran with hands-on expertise in mechanics, welding, and heavy machinery',
    skills: ['Mechanics', 'Welding', 'Heavy Equipment', 'Farm Labor', 'Construction', 'Solar Installation'],
    yearsExperience: '15+ years',
    isPublic: true,
    aboutParagraphs: [
      'Efren is a recent arrival to Mendocino County, bringing with him a lifetime of hands-on experience from the Central Valley. Originally from the small agricultural town of Dos Palos, Efren grew up working on farms and has a strong background in hard labor.',
      'He recently moved to Ukiah to make a fresh start and build a stable, peaceful life. He is highly motivated to stay busy, keep out of trouble, and establish himself as a reliable, hardworking member of our community.'
    ],
    skillDetails: [
      {
        category: 'Mechanics & Maintenance',
        items: [
          'Extensive experience repairing semi-truck trailers (specifically Thermo King units)',
          'Performing annual inspections and servicing air brakes',
          'Swapping car motors and general automotive repair'
        ]
      },
      {
        category: 'Welding & Fabrication',
        items: [
          'Skilled in working with aluminum and stainless steel',
          'Metal preparation and weld finishing',
          'Fabrication and repair work'
        ]
      },
      {
        category: 'Heavy Machinery',
        items: [
          'Years of experience operating agricultural equipment',
          'Tractors, discs, caterpillars, and swathers',
          'Cotton picking machines and farm equipment'
        ]
      },
      {
        category: 'General Construction',
        items: [
          'Solar panel installation',
          'Basic residential wiring (completed electrical training)',
          'General site labor and construction support'
        ]
      }
    ],
    specialties: [
      'Semi-truck trailer repair (Thermo King)',
      'Air brake servicing',
      'Agricultural equipment operation',
      'Portrait drawing'
    ],
    languages: ['English', 'Spanish'],
    comfortableWith: [
      'Heavy labor and physically demanding work',
      'Getting hands dirty - cleaning, maintenance, hard labor',
      'Farm work and agricultural settings'
    ],
    whyHire: [
      'Efren is the type of worker who isn\'t afraid of a challenge. Clients appreciate his straightforward, respectful demeanor and his willingness to tackle the "dirty work" that others might avoid.',
      'He combines the grit required for farm labor with the precision needed for mechanical repair and—surprisingly—portrait drawing.',
      'As Efren puts it: "I\'m not scared to get my hands dirty, and I\'m not scared to get tired. I just want to work."'
    ]
  },
  'braven': {
    slug: 'braven',
    name: 'Braven',
    photoUrl: '/workers/braven.jpg',
    photoCaption: 'Braven, Co-op Coordinator | Auto Mechanic | Creative & Cosmetologist',
    tagline: 'Foundational co-op member with diverse skills from auto mechanics to cosmetology and creative arts',
    skills: ['Co-op Coordinator', 'Auto Maintenance', 'Cosmetology', 'Welding/Art', 'Logistics', 'Landscaping'],
    yearsExperience: 'Multi-skilled',
    isPublic: true,
    aboutParagraphs: [
      'Braven Haynes is a foundational member of the Mendo Labor Co-op, serving not only as a skilled worker but also as one of our Coordinators. In his leadership role, Braven handles client intake and operations, ensuring that the right workers are matched with the right jobs.',
      'His background is incredibly diverse, shaped by a philosophy of lifelong learning. Braven has experience ranging from food service and retail logistics to welding and cosmetology. He operates with a "growth mindset," believing that any skill can be mastered with patience and effort. Whether he is facilitating community connections or getting his hands dirty on a job site, Braven brings professionalism and a calm, problem-solving attitude to every task.'
    ],
    skillDetails: [
      {
        category: 'Auto Maintenance',
        items: [
          'Experienced with general vehicle upkeep',
          'Tire changes and brake service',
          'Oil changes and basic troubleshooting'
        ]
      },
      {
        category: 'Creative & Cosmetology',
        items: [
          'Trained cosmetologist - gentlemen\'s cuts and fades (~$25)',
          'Welding and metal art',
          'Painting (acrylic and oil)',
          'Clothing design and bleach art'
        ]
      },
      {
        category: 'General Labor & Logistics',
        items: [
          'Heavy lifting and furniture assembly',
          'Moving assistance',
          'Commercial truck unloading (pallet jack experience)',
          'Landscaping and crew management'
        ]
      },
      {
        category: 'Cleaning & Sanitation',
        items: [
          'Willing to tackle tough cleaning jobs',
          'Septic and site cleanup',
          'Professional, non-judgmental approach'
        ]
      }
    ],
    specialties: [
      'Co-op coordination and client matching',
      'Gentlemen\'s haircuts and fades',
      'Metal art and welding',
      'Team leadership'
    ],
    languages: ['English'],
    comfortableWith: [
      'Client communication and intake',
      'Team management and delegation',
      'Tough or "gritty" jobs others might avoid',
      'Customer service and sales'
    ],
    whyHire: [
      'Clients and co-workers alike appreciate Braven for his patience and effective communication. He has a natural ability to read situations and manage teams, having stepped into leadership roles throughout his work history.',
      'He approaches every job—no matter how gritty—with dignity.',
      'In Braven\'s words: "I work to go from a fixed mindset to a growth mindset... to believe in yourself. Most of the time, our biggest limit is set by ourselves."'
    ]
  },
  'casey': {
    slug: 'casey',
    name: 'Casey',
    photoUrl: '/workers/casey.jpg',
    photoCaption: 'Casey, General Laborer, Landscaper & Former Property Manager',
    tagline: 'Ukiah native with 17 years property management and industrial experience ready for hands-on work',
    skills: ['Landscaping', 'Property Maintenance', 'Forklift Operation', 'Heavy Lifting', 'Pressure Washing', 'Tech Support'],
    yearsExperience: '20+ years',
    isPublic: true,
    aboutParagraphs: [
      'Casey Faahs is a Ukiah native with deep roots in the community, having been born and raised in the area before spending two decades in Brookings, Oregon. He has recently returned to Mendocino County and is motivated to re-establish himself through hard work.',
      'Casey brings a wealth of diverse experience to the Co-op. He spent 17 years as a landlord and property manager, giving him a sharp eye for what it takes to maintain a home. His industrial background is equally impressive, including 15 years of forklift experience, eight years in mill work, and five years at a fishery where he advanced to the role of superintendent, managing crews of up to 30 people. Casey is currently eager to utilize his strength and experience to help local clients with their property needs.'
    ],
    skillDetails: [
      {
        category: 'Landscaping & Yard Maintenance',
        items: [
          'Skilled in heavy "grunt work"',
          'Brush clearing and debris removal',
          'Gutter cleaning and tree pruning'
        ]
      },
      {
        category: 'Property Upkeep',
        items: [
          'Pressure washing and window cleaning',
          'General demolition',
          '17 years landlord experience - understands property standards'
        ]
      },
      {
        category: 'Moving & Logistics',
        items: [
          'Heavy lifting and loading/unloading',
          '15 years forklift operation',
          'Organizing and arranging spaces'
        ]
      },
      {
        category: 'Tech Support',
        items: [
          'Computer hardware troubleshooting and repair',
          'RAM replacement and component installation',
          'General PC maintenance'
        ]
      }
    ],
    specialties: [
      'Heavy manual labor and grunt work',
      'Property maintenance and upkeep',
      'Crew management (up to 30 people)',
      'Forklift operation'
    ],
    languages: ['English'],
    comfortableWith: [
      'Physically demanding work',
      'Working independently or leading teams',
      'Dirty or difficult jobs others might avoid',
      'Tight deadlines and fast-paced environments'
    ],
    whyHire: [
      'Clients appreciate Casey for his efficiency and his "lead by example" attitude. Despite having management experience, he prefers being in the thick of the work rather than standing on the sidelines.',
      'He prides himself on being fast, efficient, and tidy.',
      'In Casey\'s words: "I don\'t make messes; I clean up all my messes. I like doing grunt work... I\'m good at it. I like to get in there and show people that I care about the work."'
    ]
  },
  'tony-maples': {
    slug: 'tony-maples',
    name: 'Tony M.',
    photoUrl: '/workers/tony-maples.jpg',
    photoCaption: 'Tony M., General Laborer',
    tagline: 'Profile coming soon — interview scheduled',
    skills: ['General Labor', 'More Skills Coming Soon'],
    yearsExperience: 'TBD',
    isPublic: true,
    aboutParagraphs: [
      'Tony Maples is a new member of the Mendo Labor Cooperative. His full profile is currently being developed following his intake interview.',
      'Tony attended the December 11, 2025 co-op meeting and is scheduled for a detailed profile interview on Saturday, December 14, 2025 at 12:30 PM at Building Bridges Homeless Resource Center. Check back soon for his complete skills and background information!'
    ],
    skillDetails: [
      {
        category: 'Coming Soon',
        items: [
          'Full skill details will be added after profile interview',
          'Interview scheduled: Saturday, December 14, 2025 at 12:30 PM'
        ]
      }
    ],
    specialties: ['To be determined'],
    languages: ['English'],
    comfortableWith: ['To be determined during interview'],
    whyHire: [
      'Tony\'s full profile is being developed. Please check back after December 14, 2025 for complete information about his skills and experience.',
      'Contact the co-op at (369) 216-1512 if you have questions about Tony\'s availability.'
    ]
  },
  // Add more workers here
};

const CORRECT_PASSWORD = 'labor1coop!MENDO@';

const WorkerProfilePage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const worker = slug ? workerProfiles[slug as string] : null;

  useEffect(() => {
    if (!worker) {
      setIsLoading(false);
      return;
    }
    
    // If public, no auth needed
    if (worker.isPublic) {
      setIsAuthenticated(true);
      setIsLoading(false);
      return;
    }

    // Check if already authenticated in this session
    const auth = sessionStorage.getItem(`worker_auth_${slug}`);
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [slug, worker]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(`worker_auth_${slug}`, 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  // Loading state
  if (isLoading || router.isFallback) {
    return (
      <Layout title="Loading... | Mendo Labor Cooperative">
        <div className="min-h-screen bg-cream flex items-center justify-center">
          <div className="text-moss text-lg">Loading...</div>
        </div>
      </Layout>
    );
  }

  // Worker not found
  if (!worker) {
    return (
      <Layout title="Worker Not Found | Mendo Labor Cooperative">
        <section className="min-h-screen bg-cream py-20">
          <div className="max-w-md mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-sand rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-moss/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-2xl font-headline font-bold text-gold mb-4">
              Worker Profile Not Found
            </h1>
            <p className="text-moss/70 mb-8">
              We couldn't find a worker with that profile. They may have left the co-op or the URL may be incorrect.
            </p>
            <Link
              href="/our-crew"
              className="inline-flex items-center gap-2 bg-moss text-cream px-6 py-3 rounded-lg hover:bg-moss/90 transition-colors font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Our Crew
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  // Password gate for non-public profiles
  if (!worker.isPublic && !isAuthenticated) {
    return (
      <Layout
        title={`${worker.name}'s Profile - Mendo Labor Cooperative`}
        description="View worker profile at Mendo Labor Cooperative."
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
                  {worker.name}'s Profile
                </h1>
                <p className="text-moss/70">
                  This worker profile is password protected. Please enter the password to view.
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
                    placeholder="Enter password"
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
                  View Profile
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link
                  href="/our-crew"
                  className="text-moss/60 hover:text-moss text-sm"
                >
                  ← Back to Our Crew
                </Link>
              </div>

              <p className="text-center text-sm text-moss/60 mt-6">
                Contact Cheryl at (369) 216-1512 if you need access.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Full profile view
  return (
    <Layout
      title={`${worker.name} - Skilled Worker | Mendo Labor Cooperative`}
      description={worker.tagline}
      keywords={`${worker.name}, ${worker.skills.join(', ')}, Mendo Labor Cooperative, Ukiah worker, hire ${worker.skills[0]?.toLowerCase()}`}
      canonical={`https://mendolaborcoop.ukiahumc.org/our-crew/${worker.slug}`}
    >
      <Head>
        {!worker.isPublic && <meta name="robots" content="noindex, nofollow" />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": worker.name,
              "description": worker.tagline,
              "knowsAbout": worker.skills,
              "knowsLanguage": worker.languages,
              "memberOf": {
                "@type": "Organization",
                "name": "Mendo Labor Cooperative"
              }
            })
          }}
        />
      </Head>

      {/* Breadcrumb */}
      <div className="bg-sand/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-moss/60 hover:text-moss">Home</Link>
            <span className="text-moss/40">/</span>
            <Link href="/our-crew" className="text-moss/60 hover:text-moss">Our Crew</Link>
            <span className="text-moss/40">/</span>
            <span className="text-moss font-medium">{worker.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-moss text-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Photo */}
            <div className="w-48 h-48 rounded-full overflow-hidden bg-sand/30 flex-shrink-0 border-4 border-cream/30">
              {worker.photoUrl ? (
                <img
                  src={worker.photoUrl}
                  alt={worker.photoCaption || worker.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-cream/50">
                    {worker.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Name & Tagline */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-headline font-bold mb-3">
                {worker.name}
              </h1>
              {worker.photoCaption && (
                <p className="text-cream/80 text-lg mb-4">{worker.photoCaption}</p>
              )}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {worker.yearsExperience && (
                  <span className="bg-gold text-white text-sm font-bold px-4 py-1 rounded-full">
                    {worker.yearsExperience} Experience
                  </span>
                )}
                {worker.languages && worker.languages.length > 1 && (
                  <span className="bg-river text-white text-sm font-bold px-4 py-1 rounded-full">
                    Bilingual
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-headline font-bold text-gold mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  About {worker.name}
                </h2>
                <div className="space-y-4 text-moss leading-relaxed">
                  {worker.aboutParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Skills Section */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-headline font-bold text-gold mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Skills & Expertise
                </h2>
                <div className="space-y-6">
                  {worker.skillDetails.map((category, idx) => (
                    <div key={idx} className="border-l-4 border-moss pl-4">
                      <h3 className="font-semibold text-moss mb-2">{category.category}</h3>
                      <ul className="space-y-1">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-moss/80 flex items-start gap-2">
                            <svg className="w-5 h-5 text-river flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Hire Section */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-headline font-bold text-gold mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Why Hire {worker.name}?
                </h2>
                <div className="space-y-4 text-moss leading-relaxed">
                  {worker.whyHire.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Hire Card */}
              <div className="bg-moss text-cream rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">
                  How to Hire {worker.name}
                </h3>
                <p className="text-cream/80 text-sm mb-6">
                  The Mendo Labor Co-op connects you directly with independent workers. We are not an employer of record; we facilitate the connection to ensure fair wages and community support.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="bg-cream/20 text-cream w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                    <div>
                      <p className="font-medium">Contact Coordinator</p>
                      <p className="text-cream/70 text-sm">Call or text Cheryl to check availability</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-cream/20 text-cream w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                    <div>
                      <p className="font-medium">Negotiate</p>
                      <p className="text-cream/70 text-sm">Discuss scope and rate directly with {worker.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-cream/20 text-cream w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                    <div>
                      <p className="font-medium">Co-op Support</p>
                      <p className="text-cream/70 text-sm">$3/hour admin fee supports co-op operations</p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:3692161512"
                  className="w-full bg-cream text-moss font-bold py-3 px-6 rounded-lg hover:bg-cream/90 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Cheryl: (369) 216-1512
                </a>
              </div>

              {/* Skills Quick View */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-gold mb-4">Quick Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {worker.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-sand text-moss text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {worker.languages && worker.languages.length > 0 && (
                  <>
                    <h4 className="font-semibold text-moss mt-4 mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {worker.languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className="bg-river/10 text-river text-sm px-3 py-1 rounded-full"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {worker.comfortableWith && worker.comfortableWith.length > 0 && (
                  <>
                    <h4 className="font-semibold text-moss mt-4 mb-2">Comfortable With</h4>
                    <ul className="space-y-2">
                      {worker.comfortableWith.map((item, idx) => (
                        <li key={idx} className="text-moss/80 text-sm flex items-start gap-2">
                          <svg className="w-4 h-4 text-river flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8 bg-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/our-crew"
            className="inline-flex items-center gap-2 text-moss hover:text-river transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Our Crew
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default WorkerProfilePage;
