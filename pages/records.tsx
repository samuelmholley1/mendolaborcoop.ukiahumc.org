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
            </div>
          </div>
        </section>

        {/* Current Balance */}
        <section className="py-12 bg-sand">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Treasury Balance - Compact centered box */}
            <div className="flex justify-center mb-6">
              <div className="bg-white border-l-8 border-l-moss p-4 rounded-r-lg shadow-lg text-center inline-block">
                <h2 className="text-xl font-headline font-semibold text-redwood mb-1">
                  Current Treasury Balance
                </h2>
                <p className="text-4xl font-headline font-bold text-moss mb-1">
                  $15.00
                </p>
                <p className="text-xs text-moss font-body italic">
                  Cash maintained by Financial Secretary
                </p>
              </div>
            </div>

            {/* Member List - Full width below */}
            <div className="bg-white border-l-8 border-l-redwood p-4 rounded-r-lg shadow-lg">
              <h2 className="text-xl font-headline font-semibold text-redwood mb-3">
                Founding Members
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-moss font-body text-sm">
                <li>• <strong>Ed Dick</strong> - Lead Organizer</li>
                <li>• <strong>Michele Robbins</strong> - Pastor, Ukiah United Methodist Church (Co-op Sponsor)</li>
                <li>• <strong>Samuel Holley</strong> - Financial Secretary & Digital Systems Steward</li>
                <li>• <strong>Cheryl Vinson</strong> - Coordinator</li>
                <li>• <strong>Braven Haynes</strong> - Backup Coordinator</li>
                <li>• <strong>Dale Klingsorge</strong></li>
                <li>• <strong>Louie Cedano</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Transaction History */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-headline font-bold text-redwood mb-6 uppercase tracking-wide border-b-2 border-moss pb-2">
              Transaction Ledger
            </h2>

            {/* Ledger Table */}
            <div className="overflow-x-auto border-2 border-moss rounded-lg shadow-md">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-moss text-cream border-b-2 border-moss">
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-sand">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-sand">
                      Description
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wider border-r border-sand">
                      Debit
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wider border-r border-sand">
                      Credit
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wider">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Transaction 2 - Payment to Cheryl (Most Recent) */}
                  <tr className="bg-gray-50 hover:bg-sand/30 transition-colors">
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-200 whitespace-nowrap">
                      11/06/2025
                    </td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-200">
                      <strong>Coordinator Payment - Cheryl Vinson</strong><br/>
                      <span className="text-xs text-gray-600">Payment for coordinator work completed<br/>
                      Authorization: Unanimous membership approval</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-200 text-right font-mono">
                      $5.00
                    </td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-200 text-right">
                      —
                    </td>
                    <td className="px-4 py-3 text-sm text-black text-right font-mono font-bold">
                      $15.00
                    </td>
                  </tr>

                  {/* Transaction 1 - Initial Deposit */}
                  <tr className="bg-white hover:bg-sand/30 transition-colors">
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-200 whitespace-nowrap">
                      11/06/2025
                    </td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-200">
                      <strong>Farm Labor Job - Ed Dick</strong><br/>
                      <span className="text-xs text-gray-600">Workers: Dale Klingsorge, Louie Cedano<br/>
                      Job completed 10/31/2025: 6 hrs @ $3/hr to co-op ($18.00) + $2.00 tip<br/>
                      Co-op fee paid to treasury - Initial deposit</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-200 text-right">
                      —
                    </td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-200 text-right font-mono">
                      $20.00
                    </td>
                    <td className="px-4 py-3 text-sm text-black text-right font-mono font-bold">
                      $20.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Ledger Footer */}
            <div className="mt-6 bg-moss text-cream border-2 border-moss rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold uppercase">Current Balance:</span>
                <span className="text-2xl font-mono font-bold">$15.00</span>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Records */}
        <section className="py-16 bg-sand/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-headline font-bold text-redwood mb-2 uppercase tracking-wide border-b-2 border-moss pb-2">
              Meeting Minutes
            </h2>
            <p className="text-sm text-moss mb-6">
              For full attendance records, see the <Link href="/attendance" className="text-redwood font-semibold hover:underline">Attendance page</Link>
            </p>

            <div className="space-y-4">
              {/* Meeting - November 6, 2025 */}
              <div className="bg-white border-l-4 border-l-moss rounded-r-lg shadow-md p-6">
                <div className="border-b border-sand pb-3 mb-4">
                  <h3 className="text-lg font-bold text-redwood mb-1">
                    November 6, 2025
                  </h3>
                  <p className="text-sm text-moss">
                    Attendees: 6 members present
                  </p>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-bold text-black mb-1">Major Accomplishment:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Approved the provisional work agreement - historic milestone</li>
                      <li>Revisions: (1) Added phone number fields for coordinator contact, (2) Added photo/video opt-out clause</li>
                      <li>Discussed worker photos for website profiles and marketing</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-1">Financial Updates:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Ed Dick reported first paid job (Oct 31): $20 revenue</li>
                      <li>Motion passed: Pay Cheryl Vinson $5.00 for coordinator work</li>
                      <li>Treasury balance: $15.00</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-1">Official Appointments (Signed):</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Cheryl Vinson - Coordinator (confirmed)</li>
                      <li>Samuel Holley - Financial Secretary & Digital Systems Steward (confirmed)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Meeting - October 30, 2025 */}
              <div className="bg-white border-l-4 border-l-moss rounded-r-lg shadow-md p-6">
                <div className="border-b border-sand pb-3 mb-4">
                  <h3 className="text-lg font-bold text-redwood mb-1">
                    October 30, 2025
                  </h3>
                  <p className="text-sm text-moss">
                    Attendees: 5 members present
                  </p>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-bold text-black mb-1">Key Decisions:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Tentatively appointed Cheryl Vinson as Coordinator</li>
                      <li>Continued organizational planning and structure development</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-1">First Job Arranged:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Ed Dick hired Dale and Louie for farm labor on October 31</li>
                      <li>Job completed successfully, revenue reported at Nov 6 meeting</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Meeting - October 16, 2025 */}
              <div className="bg-white border-l-4 border-l-moss rounded-r-lg shadow-md p-6">
                <div className="border-b border-sand pb-3 mb-4">
                  <h3 className="text-lg font-bold text-redwood mb-1">
                    October 16, 2025
                  </h3>
                  <p className="text-sm text-moss">
                    Attendees: 7 members present
                  </p>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-bold text-black mb-1">Key Activities:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Continued cooperative planning and organization</li>
                      <li>Member engagement and goal-setting discussions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Summary */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-redwood mb-6 uppercase tracking-wide border-b-2 border-moss pb-2">
              Financial Summary
            </h2>

            <div className="border-2 border-moss rounded-lg shadow-md overflow-hidden">
              <table className="w-full bg-white">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-sm font-bold text-black">Total Credits (Income)</td>
                    <td className="px-4 py-3 text-sm text-right font-mono">$20.00</td>
                  </tr>
                  <tr className="border-b-2 border-moss">
                    <td className="px-4 py-3 text-sm font-bold text-black">Total Debits (Expenses)</td>
                    <td className="px-4 py-3 text-sm text-right font-mono">$5.00</td>
                  </tr>
                  <tr className="bg-moss text-cream">
                    <td className="px-4 py-4 text-base font-bold uppercase">Current Balance</td>
                    <td className="px-4 py-4 text-xl text-right font-mono font-bold">$15.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default RecordsPage;
