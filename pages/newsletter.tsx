import React from 'react';
import Head from 'next/head';

const NewsletterPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Newsletter Article - Mendo Labor Cooperative</title>
        <meta name="description" content="Newsletter article about the Mendo Labor Cooperative for church and community distribution" />
        <meta name="robots" content="noindex, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Newsletter Article - No Nav/Footer */}
      <section className="bg-white min-h-screen py-8">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Header with Logo */}
          <div className="text-center mb-6 border-b-4 border-moss pb-6">
            <img
              src="/mendo_labor_coop_logo.png"
              alt="Mendo Labor Cooperative Logo"
              className="w-40 h-40 mx-auto mb-4"
            />
            <h1 className="text-4xl font-headline font-bold text-moss mb-4">
              Mendo Labor Cooperative
            </h1>
            <p className="text-base leading-relaxed max-w-2xl mx-auto">
              <strong>Mission Statement:</strong> <em>Local workers. Local jobs. Local prosperity. We connect unemployed and underemployed 
              community members with opportunities that build economic stability, support housing 
              security, and keep wealth where we live.</em>
            </p>
          </div>

          {/* Article Content */}
          <article className="space-y-5 text-black font-body leading-relaxed text-base">
            <h2 className="text-2xl font-headline font-bold text-moss mb-4 text-center">
              A New Way to Help Our Neighbors
            </h2>

            <p className="text-lg leading-loose">
              Dear Church Family,
            </p>

            <p className="leading-loose">
              You may have noticed that some of our neighbors in Ukiah are struggling to find steady 
              work. At the same time, many of us have tasks around the house or yard that we could 
              use help with—raking leaves, cleaning gutters, organizing the garage, or light repairs.
            </p>

            <p className="leading-loose">
              That's why our church is proud to sponsor the <strong>Mendo Labor Cooperative</strong>—a 
              new program that brings these two needs together. It's a simple idea: connect local 
              people who need work with local people who need help.
            </p>

            <p className="leading-loose">
              The co-op grew out of meetings at Building Bridges Homeless Resource Center, where 
              a few of us from church began meeting with folks staying at the center. Together, we realized 
              we could create real job opportunities for our neighbors. We've already had success—Ed 
              recently hired two workers through the co-op for a job, and it went great!
            </p>

            <h3 className="text-xl font-semibold text-moss mt-8 mb-3">
              How It Works
            </h3>
            <div className="space-y-3 text-base leading-loose ml-4">
              <p>
                <strong>1.</strong> You call or text Cheryl at <strong>(369) 216-1512</strong> and 
                tell her what kind of help you need.
              </p>
              <p>
                <strong>2.</strong> Cheryl matches you with a worker from our co-op who has 
                the right skills.
              </p>
              <p>
                <strong>3.</strong> You, the worker, and the co-op sign a simple work agreement 
                to ensure everyone is protected and knows what to expect.
              </p>
              <p>
                <strong>4.</strong> The worker comes to your home, does quality work, and you pay 
                them directly at the agreed rate.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-moss mt-8 mb-3">
              What Kind of Work?
            </h3>

            <ul className="space-y-2 text-base leading-loose ml-4">
              <li>• <strong>Yard Work:</strong> Raking leaves, weeding, mowing, trimming bushes</li>
              <li>• <strong>House Cleaning:</strong> Inside cleaning, organizing, decluttering</li>
              <li>• <strong>Small Repairs:</strong> Fixing fences, minor carpentry, painting</li>
              <li>• <strong>Moving & Hauling:</strong> Help moving furniture or taking things to the dump</li>
              <li>• <strong>Storm Cleanup:</strong> Clearing branches, cleaning up after weather</li>
              <li>• <strong>Whatever You Need:</strong> If you're not sure, just call and ask!</li>
            </ul>

            <h3 className="text-xl font-headline font-semibold text-moss mt-8 mb-3">
              Why Your Help Matters
            </h3>

            <p className="leading-loose">
              We're just getting started, and we need <strong>patient, supportive church members</strong> who 
              are willing to give us a try. Your first job with the co-op might take a little extra 
              communication as we learn, but you'll be directly helping a neighbor get back on their feet.
            </p>

            <p className="leading-loose">
              Every job we book—no matter how small—helps someone in Ukiah pay for food, medicine, or a 
              place to stay. And it helps us build something that can serve our community for years to come.
            </p>

            <p className="leading-loose">
              If you have questions about the co-op or want to learn more, please reach out to 
              Pastor Michele, Ed Dick, or Samuel Holley.
            </p>

            <p className="text-base leading-loose italic text-black mt-6 text-center">
              Thank you for supporting our neighbors and helping us build a stronger, 
              more caring Ukiah community. Every call makes a difference.
            </p>
            <p className="mt-3 text-base text-black text-center">
              With Gratitude,<br />
              Mendo Labor Co-op Team
            </p>

            <div className="border-4 border-moss p-8 rounded-lg my-8 text-center bg-sand">
              <h3 className="text-3xl font-bold mb-4 text-moss">
                Ready to Help?
              </h3>
              <p className="text-xl mb-6 leading-relaxed text-black font-semibold">
                Call or text Cheryl to schedule work
              </p>
              <div className="border-2 border-moss px-8 py-8 rounded-lg mb-6 bg-white">
                <p className="text-lg font-bold mb-3 text-black">Cheryl Vinson, Coordinator</p>
                <p className="text-6xl font-bold text-moss mb-2" style={{ letterSpacing: '0.02em' }}>
                  (369) 216-1512
                </p>
                <p className="text-lg text-black mt-5 pt-5 border-t-2 border-gray-300 font-semibold">
                  mendolaborcoop@gmail.com
                </p>
                
                {/* QR Code integrated in CTA */}
                <div className="mt-8 pt-6 border-t-2 border-gray-300">
                  <p className="text-base text-gray-700 mb-4 font-semibold">
                    Visit our website:
                  </p>
                  <div className="w-48 h-48 mx-auto bg-white border-3 border-moss rounded-lg flex items-center justify-center mb-3">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://mendolaborcoop.ukiahumc.org')}`}
                      alt="QR Code for mendolaborcoop.ukiahumc.org"
                      className="w-full h-full p-2"
                    />
                  </div>
                  <p className="text-sm text-gray-700 font-semibold">
                    mendolaborcoop.ukiahumc.org
                  </p>
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        * {
          font-family: 'Montserrat', sans-serif;
        }
        body {
          font-family: 'Montserrat', sans-serif;
        }
        .text-moss {
          color: #39714B;
        }
        .text-gold {
          color: #E2A673;
        }
        .bg-moss {
          background-color: #39714B;
        }
        .bg-sand {
          background-color: #E6D9C7;
        }
        .bg-cream {
          background-color: #FAF7F2;
        }
        .border-moss {
          border-color: #39714B;
        }
        .border-gold {
          border-color: #E2A673;
        }
        .border-sand {
          border-color: #E6D9C7;
        }
        @media print {
          .bg-sand {
            background-color: #f5f5f5 !important;
          }
          .border-moss {
            border-color: #000 !important;
          }
          .text-moss {
            color: #000 !important;
          }
        }
      `}</style>
    </>
  );
};

export default NewsletterPage;
