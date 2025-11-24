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
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet" />
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
            <h1 className="text-4xl font-headline font-bold text-moss mb-3">
              Mendo Labor Cooperative
            </h1>
            <p className="text-base font-body text-moss italic leading-relaxed max-w-2xl mx-auto border-2 border-moss rounded-lg p-4 bg-sand">
              "Local workers. Local jobs. Local prosperity. We connect unemployed and underemployed 
              community members with opportunities that build economic stability, support housing 
              security, and keep wealth where we live."
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

            <div className="bg-sand p-6 rounded-lg border-2 border-moss my-6">
              <h3 className="text-xl font-headline font-semibold text-moss mb-3 text-center">
                How It Works
              </h3>
              <div className="space-y-3 text-base leading-loose">
                <p>
                  <strong>1.</strong> You call or text Cheryl at <strong>(369) 216-1512</strong> and 
                  tell her what kind of help you need.
                </p>
                <p>
                  <strong>2.</strong> Cheryl matches you with a worker from our cooperative who has 
                  the right skills.
                </p>
                <p>
                  <strong>3.</strong> The worker comes to your home, does quality work, and you pay 
                  them a fair wage directly.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-headline font-semibold text-moss mt-8 mb-3">
              What Kind of Work?
            </h3>

            <div className="bg-cream p-5 rounded-lg my-4 border border-moss">
              <ul className="space-y-2 text-base leading-loose">
                <li>• <strong>Yard Work:</strong> Raking leaves, weeding, mowing, trimming bushes</li>
                <li>• <strong>House Cleaning:</strong> Inside cleaning, organizing, decluttering</li>
                <li>• <strong>Small Repairs:</strong> Fixing fences, minor carpentry, painting</li>
                <li>• <strong>Moving & Hauling:</strong> Help moving furniture or taking things to the dump</li>
                <li>• <strong>Storm Cleanup:</strong> Clearing branches, cleaning up after weather</li>
                <li>• <strong>Whatever You Need:</strong> If you're not sure, just call and ask!</li>
              </ul>
            </div>

            <h3 className="text-xl font-headline font-semibold text-moss mt-8 mb-3">
              Why Your Help Matters
            </h3>

            <p className="leading-loose">
              We're just getting started, and we need <strong>patient, supportive church members</strong> who 
              are willing to give us a try. Your first job with the cooperative might take a little extra 
              communication as we learn, but you'll be directly helping a neighbor get back on their feet.
            </p>

            <p className="leading-loose">
              Every job we book—no matter how small—helps someone in Ukiah pay for food, medicine, or a 
              place to stay. And it helps us build something that can serve our community for years to come.
            </p>

            <div className="bg-moss text-white p-8 rounded-lg my-8 text-center">
              <h3 className="text-2xl font-headline font-bold mb-4">
                Ready to Help?
              </h3>
              <p className="text-xl mb-6 leading-relaxed">
                Call or text Cheryl to schedule work
              </p>
              <div className="bg-white text-moss px-8 py-6 rounded-lg mb-6">
                <p className="text-base font-semibold mb-2">Cheryl Vinson, Coordinator</p>
                <p className="text-5xl font-headline font-bold text-moss mb-1">
                  (369) 216-1512
                </p>
                <p className="text-sm text-gray-600 mt-2 mb-4">
                  Call or Text • Available Daily
                </p>
                <p className="text-base text-gray-700 mt-4 pt-4 border-t border-gray-300">
                  Email: mendolaborcoop@gmail.com
                </p>
                
                {/* QR Code integrated in CTA */}
                <div className="mt-6 pt-4 border-t border-gray-300">
                  <p className="text-sm text-gray-700 mb-3">
                    Or visit our website:
                  </p>
                  <div className="w-40 h-40 mx-auto bg-white border-2 border-moss rounded-lg flex items-center justify-center mb-2">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent('https://mendolaborcoop.ukiahumc.org')}`}
                      alt="QR Code for mendolaborcoop.ukiahumc.org"
                      className="w-full h-full p-1"
                    />
                  </div>
                  <p className="text-xs text-gray-600 font-body">
                    mendolaborcoop.ukiahumc.org
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-moss pt-6 mt-8 text-center">
              <p className="text-base leading-loose italic">
                Thank you for supporting our neighbors and helping us build a stronger, 
                more caring Ukiah community. Every call makes a difference.
              </p>
              <p className="mt-4 text-base font-semibold">
                — With gratitude, The Mendo Labor Cooperative Team
              </p>
            </div>
          </article>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t-2 border-sand text-center text-sm text-gray-700">
            <p className="font-body leading-relaxed">
              <strong>The Mendo Labor Cooperative</strong><br />
              A ministry project of Ukiah United Methodist Church<br />
              Connecting neighbors • Building community • Sharing God's love through service
            </p>
          </div>

        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        body {
          font-family: 'Source Sans 3', sans-serif;
        }
        .font-headline {
          font-family: 'Public Sans', sans-serif;
        }
        .font-body {
          font-family: 'Source Sans 3', sans-serif;
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
      `}</style>
    </>
  );
};

export default NewsletterPage;
