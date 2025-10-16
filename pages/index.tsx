import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <Layout 
      title="Home | Mendo Labor Cooperative - Worker Power in Mendocino County"
      description="Building worker solidarity and economic justice in Mendocino County. Unhoused workers cooperative providing mutual aid, job placement, and community organizing support."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coop-red to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Main Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="mb-8">
                <img 
                  src="/logo.png" 
                  alt="Mendo Labor Cooperative Logo" 
                  className="h-16 w-auto mx-auto lg:mx-0 mb-4"
                  onError={(e) => {
                    // Fallback if logo doesn't exist yet
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 text-coop-gold">
                  Mendo Labor Cooperative
                </h1>
                <p className="text-2xl md:text-3xl font-headline italic text-coop-gold mb-6">
                  &ldquo;Worker power builds community power&rdquo;
                </p>
              </div>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto lg:mx-0">
                Building economic justice and worker solidarity in Mendocino County.
              </p>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto lg:mx-0 opacity-90">
                Unhoused workers supporting unhoused workers through mutual aid, job placement, and organizing.
              </p>
              
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center lg:justify-start">
                <Link
                  href="/get-help"
                  className="bg-coop-gold text-coop-red px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors inline-block shadow-lg"
                >
                  Get Help Now
                </Link>
                <Link
                  href="/join"
                  className="border-2 border-coop-gold text-coop-gold px-8 py-4 rounded-lg text-lg font-semibold hover:bg-coop-gold hover:text-coop-red transition-colors inline-block"
                >
                  Join the Cooperative
                </Link>
              </div>
            </div>
            
            {/* Community Photo */}
            <div className="order-1 lg:order-2">
              <div className="relative max-w-md mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-coop-gold">
                  <div className="bg-coop-green h-80 sm:h-96 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">✊</div>
                      <p className="text-white text-lg font-medium">
                        Solidarity with all workers
                      </p>
                      <p className="text-green-200 text-sm mt-2">
                        Photo coming soon: Our community in action
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-coop-red via-coop-red/90 to-transparent p-6">
                    <h3 className="text-xl font-headline font-bold text-white mb-1">United We Stand</h3>
                    <p className="text-coop-gold font-medium mb-1">Workers Supporting Workers</p>
                    <p className="text-white text-sm opacity-90">Mendocino County Labor Cooperative</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-b from-coop-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-coop-red mb-6">
              Who We Are
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="order-2 lg:order-1">
              <div className="bg-coop-green h-80 rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center text-white p-8">
                  <div className="text-5xl mb-4">🏠</div>
                  <span className="font-medium">Our community organizing space</span>
                  <p className="text-green-200 text-sm mt-2">Photo coming soon</p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="prose-custom space-y-6">
                <p className="text-lg leading-relaxed">
                  The Mendo Labor Cooperative is a worker-owned collective of unhoused and precariously housed 
                  people organizing for economic justice in Mendocino County.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We believe that those most impacted by economic inequality are best positioned to create 
                  solutions. Our cooperative provides mutual aid, job placement, skills training, and 
                  organizing support to build worker power in our community.
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-coop-gold">
                  <p className="text-lg font-medium text-coop-red italic">
                    &ldquo;We don't just want a seat at the table—we want to build our own table.&rdquo;
                  </p>
                  <p className="text-sm text-gray-600 mt-2">— Cooperative Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - What We Do */}
      <section id="services" className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-coop-red mb-4">
              How We Support Each Other
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Worker-to-worker support through mutual aid and collective action
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-coop-red">
              <div className="bg-coop-red text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                <span>💼</span>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-coop-red">
                Job Placement & Advocacy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We help members find dignified work and advocate for fair wages, safe conditions, 
                and workers' rights in every workplace.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-coop-green">
              <div className="bg-coop-green text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                <span>🤝</span>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-coop-red">
                Mutual Aid Network
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Emergency assistance, resource sharing, and collective support to help members 
                meet basic needs and stay housed and healthy.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-coop-gold">
              <div className="bg-coop-gold text-coop-red rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                <span>✊</span>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-coop-red">
                Organizing & Education
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Building collective power through worker education, community organizing, 
                and campaigns for economic and housing justice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-coop-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-coop-red mb-4">
              Our Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-coop-gold text-2xl mb-4">✊</div>
              <h3 className="text-lg font-headline font-semibold mb-3 text-coop-red">Solidarity</h3>
              <p className="text-gray-700 leading-relaxed">
                We stand together as workers, understanding that our individual struggles are 
                part of a collective fight for dignity and justice.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-coop-green text-2xl mb-4">🏠</div>
              <h3 className="text-lg font-headline font-semibold mb-3 text-coop-red">Housing Justice</h3>
              <p className="text-gray-700 leading-relaxed">
                Everyone deserves stable, dignified housing. We organize for policies and practices 
                that treat housing as a human right, not a commodity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-coop-blue text-2xl mb-4">⚖️</div>
              <h3 className="text-lg font-headline font-semibold mb-3 text-coop-red">Economic Democracy</h3>
              <p className="text-gray-700 leading-relaxed">
                Workers should have control over their workplaces and communities. We build 
                cooperative alternatives to exploitative economic systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-coop-earth text-2xl mb-4">🌱</div>
              <h3 className="text-lg font-headline font-semibold mb-3 text-coop-red">Mutual Aid</h3>
              <p className="text-gray-700 leading-relaxed">
                We care for each other through direct action and resource sharing, building 
                community resilience from the ground up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-coop-red mb-4">
              Join the Movement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need support or want to support others, there's a place for you in our cooperative
            </p>
          </div>
          
          {/* Action CTAs */}
          <div className="bg-gradient-to-br from-coop-red to-red-800 rounded-lg shadow-lg p-12 mb-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-headline font-bold mb-4 text-coop-gold">
                Ready to Build Worker Power?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Join fellow workers in creating economic justice in Mendocino County. 
                Together we are stronger.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Link
                  href="/get-help"
                  className="bg-coop-gold text-coop-red px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors inline-block shadow-lg"
                >
                  Get Support
                </Link>
                <Link
                  href="/join"
                  className="border-2 border-coop-gold text-coop-gold px-8 py-4 rounded-lg text-lg font-semibold hover:bg-coop-gold hover:text-coop-red transition-colors inline-block"
                >
                  Join the Co-op
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-coop-red transition-colors inline-block"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-coop-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-lg font-headline font-semibold mb-2 text-coop-red">Email</h3>
              <p className="text-gray-600">info@mendolaborcoop.ukiahumc.org</p>
            </div>
            
            <div>
              <div className="bg-coop-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-headline font-semibold mb-2 text-coop-red">Phone/Text</h3>
              <p className="text-gray-600">Coming soon</p>
            </div>
            
            <div>
              <div className="bg-coop-gold text-coop-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-headline font-semibold mb-2 text-coop-red">Location</h3>
              <p className="text-gray-600">Mendocino County, CA</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;