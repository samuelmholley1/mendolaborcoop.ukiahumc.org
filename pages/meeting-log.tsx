import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

const MeetingLogPage: React.FC = () => {
  const meetings = [
    {
      date: 'October 30, 2025',
      time: '10:00 AM - 11:00 AM',
      location: 'Building Bridges Homeless Resource Center',
      attendees: [
        { name: 'Ed Dick', phone: '707-952-2134' },
        { name: 'Samuel Holley', phone: '714-496-7006' },
        { name: 'Dale Klingsorge', phone: '916-639-7141' },
        { name: 'Cheryl Vinson', phone: '916-639-7174' },
        { name: 'Louie Cedano', phone: '707-510-7199' }
      ]
    },
    {
      date: 'October 16, 2025',
      time: '10:00 AM - 11:00 AM',
      location: 'Building Bridges Homeless Resource Center',
      attendees: [
        { name: 'Ed Dick', phone: '707-952-2134' },
        { name: 'Samuel Holley', phone: '714-496-7006' },
        { name: 'Dale Klingsorge', phone: '916-639-7141' },
        { name: 'Cheryl Vinson', phone: '916-639-7174' },
        { name: 'Louie Cedano', phone: '707-510-7199' },
        { name: 'Braven', phone: '559-880-0960' },
        { name: 'Michele Robbins', phone: '530-801-1030' }
      ]
    }
  ];

  return (
    <Layout
      title="Meeting Attendance Log - Mendo Labor Cooperative"
      description="Meeting attendance records for Mendo Labor Cooperative board and planning meetings."
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-redwood mb-4">
              Meeting Attendance Log
            </h1>
            <p className="text-xl font-body text-moss">
              Mendo Labor Cooperative Board & Planning Meetings
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

export default MeetingLogPage;