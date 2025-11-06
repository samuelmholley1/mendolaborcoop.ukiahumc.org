import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const RecordsPage: React.FC = () => {
  return (
    <>
      <Layout
        title="Co-op Records | Mendo Labor Cooperative"
        description="Meeting minutes, financial records, and organizational history of the Mendo Labor Cooperative."
      >
        {/* Hero Section */}
        <section className="bg-moss text-cream py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">
                Co-op Records
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Meeting minutes, financial records, and organizational history
              </p>
              <p className="text-lg mt-4 opacity-80">
                Maintained by Samuel Holley, Financial Secretary & Digital Systems Steward
              </p>
            </div>
          </div>
        </section>

        {/* Current Balance */}
        <section className="py-12 bg-sand">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border-l-8 border-l-moss p-8 rounded-r-lg shadow-lg text-center">
              <h2 className="text-2xl font-headline font-semibold text-redwood mb-2">
                Current Treasury Balance
              </h2>
              <p className="text-5xl font-headline font-bold text-moss mb-2">
                $17.00
              </p>
              <p className="text-sm text-moss font-body italic">
                Cash maintained by Financial Secretary
              </p>
            </div>
          </div>
        </section>

        {/* Transaction History */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-headline font-bold text-redwood mb-8 text-center">
              Transaction History
            </h2>

            <div className="space-y-6">
              {/* Transaction 3 - Initial Deposit */}
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">💰</span>
                      <h3 className="text-xl font-headline font-semibold text-redwood">
                        Initial Deposit
                      </h3>
                    </div>
                    <p className="text-moss font-body ml-11">
                      Founding deposit to establish co-op treasury
                    </p>
                    <p className="text-sm text-moss font-body mt-2 ml-11">
                      Date: November 6, 2025
                    </p>
                  </div>
                  <div className="text-right md:text-left md:min-w-[120px]">
                    <p className="text-3xl font-headline font-bold text-moss">
                      +$20.00
                    </p>
                    <p className="text-sm text-moss font-body">Deposit</p>
                  </div>
                </div>
              </div>

              {/* Transaction 2 - Job Payment from Ed Dick */}
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🚜</span>
                      <h3 className="text-xl font-headline font-semibold text-redwood">
                        Farm Labor Job - Ed Dick
                      </h3>
                    </div>
                    <p className="text-moss font-body ml-11">
                      <strong>Workers:</strong> Dale and Louie<br />
                      <strong>Client:</strong> Ed Dick (Founding Member & First Client)<br />
                      <strong>Work:</strong> Physical labor on Ed's farm<br />
                      <strong>Hours:</strong> 6 hours @ $3/hour to co-op = $18.00<br />
                      <strong>Tip:</strong> $2.00 cash tip to co-op
                    </p>
                    <p className="text-sm text-moss font-body mt-2 ml-11">
                      Date: October 31, 2025 (Friday)
                    </p>
                  </div>
                  <div className="text-right md:text-left md:min-w-[120px]">
                    <p className="text-3xl font-headline font-bold text-moss">
                      +$20.00
                    </p>
                    <p className="text-sm text-moss font-body">Job Revenue</p>
                  </div>
                </div>
              </div>

              {/* Transaction 1 - Payment to Cheryl */}
              <div className="bg-cream border-l-8 border-l-redwood p-6 rounded-r-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">📤</span>
                      <h3 className="text-xl font-headline font-semibold text-redwood">
                        Coordinator Payment - Cheryl
                      </h3>
                    </div>
                    <p className="text-moss font-body ml-11">
                      Payment for coordinator work already completed<br />
                      <strong>Recipient:</strong> Cheryl Vinson, Coordinator<br />
                      <strong>Authorization:</strong> Unanimous approval by membership
                    </p>
                    <p className="text-sm text-moss font-body mt-2 ml-11">
                      Date: November 6, 2025
                    </p>
                  </div>
                  <div className="text-right md:text-left md:min-w-[120px]">
                    <p className="text-3xl font-headline font-bold text-redwood">
                      -$5.00
                    </p>
                    <p className="text-sm text-moss font-body">Expense</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Records */}
        <section className="py-16 bg-sand">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-headline font-bold text-redwood mb-8 text-center">
              Meeting Records
            </h2>
            <p className="text-center text-moss font-body mb-8">
              For full attendance records, see the <Link href="/attendance" className="text-redwood font-semibold hover:underline">Attendance page</Link>
            </p>

            <div className="space-y-6">
              {/* Meeting 2 - November 6, 2025 */}
              <div className="bg-white border-l-8 border-l-moss p-6 rounded-r-lg shadow-md">
                <div className="mb-4">
                  <h3 className="text-2xl font-headline font-bold text-redwood mb-2">
                    📋 Meeting #2 - November 6, 2025
                  </h3>
                  <p className="text-sm text-moss font-body">
                    <strong>Attendees:</strong> 7 members present
                  </p>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-headline font-semibold text-moss mb-1">Financial Transactions:</h4>
                    <ul className="list-disc list-inside text-moss font-body ml-4 space-y-1">
                      <li>Initial deposit of $20.00 to establish co-op treasury</li>
                      <li>Motion passed unanimously to pay Cheryl Vinson $5.00 for coordinator work completed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-moss mb-1">Key Decisions:</h4>
                    <ul className="list-disc list-inside text-moss font-body ml-4 space-y-1">
                      <li>Samuel Holley officially appointed as Financial Secretary & Digital Systems Steward</li>
                      <li>Cheryl Vinson officially recognized as Coordinator</li>
                      <li>Website updates approved for transparency and record-keeping</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Meeting 1 - October 29, 2025 */}
              <div className="bg-white border-l-8 border-l-river p-6 rounded-r-lg shadow-md">
                <div className="mb-4">
                  <h3 className="text-2xl font-headline font-bold text-redwood mb-2">
                    📋 Meeting #1 - October 29, 2025
                  </h3>
                  <p className="text-sm text-moss font-body">
                    <strong>Attendees:</strong> 5 founding members present
                  </p>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-headline font-semibold text-moss mb-1">First Job Completed:</h4>
                    <ul className="list-disc list-inside text-moss font-body ml-4 space-y-1">
                      <li>Ed Dick (founding member) hired Dale and Louie for farm labor - October 31, 2025</li>
                      <li>6 hours of physical labor on Ed's farm</li>
                      <li>Co-op earned $18.00 ($3/hour × 6 hours) + $2.00 tip = $20.00 total</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-moss mb-1">Key Decisions:</h4>
                    <ul className="list-disc list-inside text-moss font-body ml-4 space-y-1">
                      <li>Founding meeting to establish cooperative structure</li>
                      <li>Initial organizational planning and goal-setting</li>
                      <li>First client engagement and job placement success</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Summary */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-headline font-bold text-redwood mb-8 text-center">
              Financial Summary
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-l-8 border-l-moss p-6 rounded-r-lg shadow-md text-center">
                <h3 className="text-lg font-headline font-semibold text-redwood mb-2">
                  Total Income
                </h3>
                <p className="text-3xl font-headline font-bold text-moss">
                  $40.00
                </p>
              </div>

              <div className="bg-white border-l-8 border-l-redwood p-6 rounded-r-lg shadow-md text-center">
                <h3 className="text-lg font-headline font-semibold text-redwood mb-2">
                  Total Expenses
                </h3>
                <p className="text-3xl font-headline font-bold text-redwood">
                  $5.00
                </p>
              </div>

              <div className="bg-white border-l-8 border-l-river p-6 rounded-r-lg shadow-md text-center">
                <h3 className="text-lg font-headline font-semibold text-redwood mb-2">
                  Current Balance
                </h3>
                <p className="text-3xl font-headline font-bold text-river">
                  $17.00
                </p>
                <p className="text-xs text-moss mt-1">($20 initial + $20 job - $5 payment - $18 disbursed to workers)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Principles */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-headline font-bold text-redwood mb-8 text-center">
              Our Financial Principles
            </h2>

            <div className="space-y-4">
              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-redwood mb-2">
                  🔍 Full Transparency
                </h3>
                <p className="text-moss font-body">
                  All financial transactions are recorded and accessible to all cooperative members. This page is updated to reflect current account status.
                </p>
              </div>

              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-redwood mb-2">
                  🗳️ Democratic Control
                </h3>
                <p className="text-moss font-body">
                  All expenses require membership approval. Major financial decisions are made democratically by the cooperative membership.
                </p>
              </div>

              <div className="bg-cream border-l-8 border-l-moss p-6 rounded-r-lg">
                <h3 className="text-xl font-headline font-semibold text-redwood mb-2">
                  💪 Worker-Centered
                </h3>
                <p className="text-moss font-body">
                  Our finances exist to support worker livelihoods, not extract profit. All members share equitably in the cooperative's success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-redwood text-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-headline font-bold mb-6">
              Questions About Our Finances?
            </h2>
            <p className="text-xl mb-8 opacity-90 font-body">
              We believe in complete transparency. Contact us to learn more.
            </p>
            <Link
              href="/contact"
              className="bg-cream text-redwood px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block font-headline"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default RecordsPage;
