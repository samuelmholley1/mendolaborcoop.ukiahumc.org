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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Treasury Balance */}
              <div className="bg-white border-l-8 border-l-moss p-8 rounded-r-lg shadow-lg text-center">
                <h2 className="text-2xl font-headline font-semibold text-redwood mb-2">
                  Current Treasury Balance
                </h2>
                <p className="text-5xl font-headline font-bold text-moss mb-2">
                  $15.00
                </p>
                <p className="text-sm text-moss font-body italic">
                  Cash maintained by Financial Secretary
                </p>
              </div>

              {/* Member List */}
              <div className="bg-white border-l-8 border-l-redwood p-8 rounded-r-lg shadow-lg">
                <h2 className="text-2xl font-headline font-semibold text-redwood mb-4">
                  Founding Members
                </h2>
                <ul className="space-y-2 text-moss font-body text-sm">
                  <li>• Ed Dick - Lead Organizer</li>
                  <li>• Michele Robbins - Pastor, Ukiah United Methodist Church (Co-op Sponsor)</li>
                  <li>• Samuel Holley - Financial Secretary & Digital Systems Steward</li>
                  <li>• Cheryl Vinson - Coordinator</li>
                  <li>• Braven Haynes - Backup Coordinator</li>
                  <li>• Dale Klingsorge</li>
                  <li>• Louie Cedano</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Transaction History */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-headline font-bold text-black mb-6 uppercase tracking-wide">
              Transaction Ledger
            </h2>

            {/* Ledger Table */}
            <div className="overflow-x-auto border border-gray-300">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-400">
                    <th className="px-4 py-3 text-left text-xs font-bold text-black uppercase tracking-wider border-r border-gray-300">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-black uppercase tracking-wider border-r border-gray-300">
                      Description
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-bold text-black uppercase tracking-wider border-r border-gray-300">
                      Debit
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-bold text-black uppercase tracking-wider border-r border-gray-300">
                      Credit
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-bold text-black uppercase tracking-wider">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {/* Transaction 1 - Initial Deposit */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-300 whitespace-nowrap">
                      10/31/2025
                    </td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-300">
                      <strong>Farm Labor Job - Ed Dick</strong><br/>
                      <span className="text-xs text-gray-600">Workers: Dale Klingsorge, Louie Cedano<br/>
                      6 hrs @ $3/hr to co-op ($18.00) + $2.00 tip<br/>
                      Initial deposit establishing treasury</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-300 text-right">
                      —
                    </td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-300 text-right font-mono">
                      $20.00
                    </td>
                    <td className="px-4 py-3 text-sm text-black text-right font-mono font-bold">
                      $20.00
                    </td>
                  </tr>

                  {/* Transaction 2 - Payment to Cheryl */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-300 whitespace-nowrap">
                      11/06/2025
                    </td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-300">
                      <strong>Coordinator Payment - Cheryl Vinson</strong><br/>
                      <span className="text-xs text-gray-600">Payment for coordinator work completed<br/>
                      Authorization: Unanimous membership approval</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-300 text-right font-mono">
                      $5.00
                    </td>
                    <td className="px-4 py-3 text-sm text-black border-r border-gray-300 text-right">
                      —
                    </td>
                    <td className="px-4 py-3 text-sm text-black text-right font-mono font-bold">
                      $15.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Ledger Footer */}
            <div className="mt-6 bg-gray-100 border border-gray-300 p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-black uppercase">Current Balance:</span>
                <span className="text-2xl font-mono font-bold text-black">$15.00</span>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Records */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-headline font-bold text-black mb-2 uppercase tracking-wide">
              Meeting Minutes
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              For full attendance records, see the <Link href="/attendance" className="text-black font-semibold hover:underline">Attendance page</Link>
            </p>

            <div className="space-y-4">
              {/* Meeting - November 6, 2025 */}
              <div className="bg-white border border-gray-300 p-6">
                <div className="border-b border-gray-300 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-black mb-1">
                    November 6, 2025
                  </h3>
                  <p className="text-sm text-gray-600">
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
              <div className="bg-white border border-gray-300 p-6">
                <div className="border-b border-gray-300 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-black mb-1">
                    October 30, 2025
                  </h3>
                  <p className="text-sm text-gray-600">
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
              <div className="bg-white border border-gray-300 p-6">
                <div className="border-b border-gray-300 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-black mb-1">
                    October 16, 2025
                  </h3>
                  <p className="text-sm text-gray-600">
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
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-black mb-6 uppercase tracking-wide">
              Financial Summary
            </h2>

            <div className="border border-gray-300">
              <table className="w-full bg-white">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-3 text-sm font-bold text-black">Total Credits (Income)</td>
                    <td className="px-4 py-3 text-sm text-right font-mono">$20.00</td>
                  </tr>
                  <tr className="border-b-2 border-gray-400">
                    <td className="px-4 py-3 text-sm font-bold text-black">Total Debits (Expenses)</td>
                    <td className="px-4 py-3 text-sm text-right font-mono">$5.00</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-4 text-base font-bold text-black uppercase">Current Balance</td>
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
