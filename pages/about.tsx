import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <Layout 
      title="About Us | Mendo Labor Cooperative"
      description="Learn about the Mendo Labor Cooperative: unhoused workers organizing for economic justice, worker power, and housing rights in Mendocino County."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coop-red to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-coop-gold">
              About the Mendo Labor Cooperative
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              By workers, for workers. Building economic justice from the ground up.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-headline font-bold text-coop-red mb-8 text-center">
            Our Story
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              The Mendo Labor Cooperative was born from the recognition that unhoused and precariously housed 
              workers face unique challenges in the labor market—and that we're best positioned to create 
              solutions for ourselves.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              In Mendocino County, rising housing costs and stagnant wages have pushed many working people 
              into homelessness. Rather than accepting charity-based approaches that treat symptoms, we chose 
              to organize as workers to address root causes of economic inequality.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Our cooperative model puts worker ownership and democratic decision-making at the center. 
              We believe that those most impacted by economic injustice should lead the fight for change.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-coop-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-headline font-bold text-coop-red mb-12 text-center">
            Our Approach
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-headline font-semibold mb-4 text-coop-red">
                Worker-Led Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We reject top-down charity models. Instead, we organize democratically, with decisions 
                made by worker-members who understand the challenges firsthand.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-headline font-semibold mb-4 text-coop-red">
                Mutual Aid + Organizing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We combine immediate mutual aid with long-term organizing for systemic change. 
                We meet people's needs while building power for bigger victories.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-headline font-semibold mb-4 text-coop-red">
                Economic Democracy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe workers should control their workplaces and communities. Our cooperative 
                model is a step toward broader economic democracy.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-headline font-semibold mb-4 text-coop-red">
                Housing Justice
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Housing is a human right. We organize for policies that treat housing as a public 
                good, not a commodity for profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-headline font-bold text-coop-red mb-12 text-center">
            What We Do
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-coop-red pl-6">
              <h3 className="text-xl font-headline font-semibold mb-3 text-coop-red">
                Job Placement & Worker Advocacy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We help members find dignified work and fight for fair wages, safe conditions, and 
                respect on the job. We also support workers facing exploitation or discrimination.
              </p>
            </div>
            
            <div className="border-l-4 border-coop-green pl-6">
              <h3 className="text-xl font-headline font-semibold mb-3 text-coop-red">
                Mutual Aid Network
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Emergency assistance, resource sharing, and collective care to help members meet 
                basic needs. We share tools, transportation, food, and support each other through crises.
              </p>
            </div>
            
            <div className="border-l-4 border-coop-gold pl-6">
              <h3 className="text-xl font-headline font-semibold mb-3 text-coop-red">
                Community Organizing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Campaigns for living wages, affordable housing, tenant protections, and other policies 
                that benefit working people. We build coalitions and take collective action.
              </p>
            </div>
            
            <div className="border-l-4 border-coop-blue pl-6">
              <h3 className="text-xl font-headline font-semibold mb-3 text-coop-red">
                Skills & Leadership Development
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Worker education, organizing training, and skill-sharing to build our collective 
                capacity and develop new leaders from within our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-br from-coop-green to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-headline font-bold mb-4">
            Ready to Join the Movement?
          </h2>
          <p className="text-xl mb-8">
            Whether you need support or want to support others, there's a place for you in our cooperative.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/join"
              className="bg-coop-gold text-coop-red px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors inline-block"
            >
              Join the Co-op
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-coop-green transition-colors inline-block"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;