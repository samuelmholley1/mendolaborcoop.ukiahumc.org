import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

const AttendancePage: React.FC = () => {
  const meetings: Array<{
    date: string;
    time: string;
    location: string;
    notes?: string;
    attendees: Array<{ name: string; phone: string; email?: string }>;
  }> = [
    {
      date: 'December 11, 2025',
      time: '10:00 AM',
      location: 'Building Bridges Homeless Resource Center',
      attendees: [
        { name: 'Samuel Holley', phone: '714-496-7006', email: 'sam@samuelholley.com' },
        { name: 'Braven Haynes', phone: '559-880-0960', email: 'bravenhaynes@gmail.com' },
        { name: 'Louie Cedano', phone: '707-510-7199', email: 'louieboy3182@gmail.com' },
        { name: 'Ed Dick', phone: '707-952-2134', email: 'edwardpdick@gmail.com' },
        { name: 'Tony Maples', phone: '707-510-9708' },
        { name: 'David', phone: 'Pending' }
      ]
    },
    {
      date: 'November 18, 2025',
      time: '10:00 AM - 11:00 AM',
      location: 'Ukiah Natural Foods Co-op',
      attendees: [
        { name: 'Braven Haynes', phone: '559-880-0960', email: 'bravenhaynes@gmail.com' },
        { name: 'Ed Dick', phone: '707-952-2134', email: 'edwardpdick@gmail.com' },
        { name: 'Samuel Holley', phone: '714-496-7006', email: 'sam@samuelholley.com' }
      ]
    },
    {
      date: 'November 13, 2025',
      time: '10:00 AM - 11:00 AM',
      location: 'Building Bridges Homeless Resource Center',
  attendees: [
  { name: 'Braven Haynes', phone: '559-880-0960', email: 'bravenhaynes@gmail.com' },
        { name: 'Louie Cedano', phone: '707-510-7199', email: 'louieboy3182@gmail.com' },
        { name: 'Ed Dick', phone: '707-952-2134', email: 'edwardpdick@gmail.com' },
        { name: 'Samuel Holley', phone: '714-496-7006', email: 'sam@samuelholley.com' },
        { name: 'Cheryl Vinson', phone: '369-216-1512', email: 'cvinson@gmail.com' }
      ]
    },
    {
      date: 'November 6, 2025',
      time: '10:00 AM - 11:00 AM',
      location: 'Building Bridges Homeless Resource Center',
  attendees: [
  { name: 'Braven Haynes', phone: '559-880-0960', email: 'bravenhaynes@gmail.com' },
        { name: 'Louie Cedano', phone: '707-510-7199', email: 'louieboy3182@gmail.com' },
        { name: 'Ed Dick', phone: '707-952-2134', email: 'edwardpdick@gmail.com' },
        { name: 'Samuel Holley', phone: '714-496-7006', email: 'sam@samuelholley.com' },
        { name: 'Michele Robbins', phone: '530-801-1030', email: 'shalompastor3@gmail.com' },
        { name: 'Cheryl Vinson', phone: '369-216-1512', email: 'cvinson@gmail.com' }
      ]
    },
    {
      date: 'October 30, 2025',
      time: '10:00 AM - 11:00 AM',
      location: 'Building Bridges Homeless Resource Center',
      attendees: [
        { name: 'Louie Cedano', phone: '707-510-7199', email: 'louieboy3182@gmail.com' },
        { name: 'Ed Dick', phone: '707-952-2134', email: 'edwardpdick@gmail.com' },
        { name: 'Samuel Holley', phone: '714-496-7006', email: 'sam@samuelholley.com' },
        { name: 'Dale Klingsorge', phone: '916-639-7141' },
        { name: 'Cheryl Vinson', phone: '369-216-1512', email: 'cvinson@gmail.com' }
      ]
    },
    {
      date: 'October 16, 2025',
      time: '10:00 AM - 11:00 AM',
      location: 'Building Bridges Homeless Resource Center',
  attendees: [
  { name: 'Braven Haynes', phone: '559-880-0960', email: 'bravenhaynes@gmail.com' },
        { name: 'Louie Cedano', phone: '707-510-7199', email: 'louieboy3182@gmail.com' },
        { name: 'Ed Dick', phone: '707-952-2134', email: 'edwardpdick@gmail.com' },
        { name: 'Samuel Holley', phone: '714-496-7006', email: 'sam@samuelholley.com' },
        { name: 'Dale Klingsorge', phone: '916-639-7141' },
        { name: 'Michele Robbins', phone: '530-801-1030', email: 'shalompastor3@gmail.com' },
        { name: 'Cheryl Vinson', phone: '369-216-1512', email: 'cvinson@gmail.com' }
      ]
    }
  ];

  return (
    <Layout
      title="Meeting Attendance Records | Mendo Labor Cooperative"
      description="Complete meeting attendance records for Mendo Labor Cooperative. Transparent documentation of member participation and organizational meetings."
      keywords="meeting attendance, cooperative transparency, member participation, Mendo Labor meetings, organizational records"
      canonical="https://mendolaborcoop.ukiahumc.org/attendance"
    >
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-gold mb-4">
              Meeting Attendance
            </h1>
            <p className="text-xl font-body text-moss">
              Detailed attendance records for all co-op meetings
            </p>
          </div>

          <div className="space-y-12">
            {meetings.map((meeting, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-moss overflow-hidden">
                {/* Meeting Header */}
                <div className="bg-moss text-cream px-6 py-4">
                  <h2 className="text-xl font-headline font-bold text-cream">
                    {meeting.date}
                  </h2>
                  <p className="text-sm font-body opacity-90">
                    {meeting.time} • {meeting.location}
                  </p>
                  {meeting.notes && (
                    <p className="text-sm font-body mt-2 italic">
                      📋 {meeting.notes}
                    </p>
                  )}
                </div>

                {/* Spreadsheet Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-sand border-b border-moss">
                        <th className="px-6 py-3 text-left text-sm font-headline font-semibold text-black uppercase tracking-wider">
                          Attendee Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-headline font-semibold text-black uppercase tracking-wider">
                          Phone Number
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-headline font-semibold text-black uppercase tracking-wider">
                          Email
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sand">
                      {meeting.attendees.map((attendee, attendeeIndex) => (
                        <tr key={attendeeIndex} className={attendeeIndex % 2 === 0 ? 'bg-white' : 'bg-cream'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-body text-moss">
                            {attendee.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-body text-moss">
                            {attendee.phone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-body text-moss">
                            {attendee.email || '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Footer with count */}
                <div className="bg-sand px-6 py-3 border-t border-moss">
                  <p className="text-sm font-body text-black">
                    Total Attendees: {meeting.attendees.length}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AttendancePage;