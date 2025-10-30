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
        { name: 'Ed Dick', phone: '707 952 2134' },
        { name: 'Samuel Holley', phone: '714-496-7006' },
        { name: 'Dale Klingsorge', phone: '916-639-7141' },
        { name: 'Sheryl Vinson', phone: '916-639-7174' },
        { name: 'Louie Cedano', phone: '707 510-7199' }
      ]
    },
    {
      date: 'October 16, 2025',
      time: '10:00 AM - 11:00 AM',
      location: 'Building Bridges Homeless Resource Center',
      attendees: [
        { name: 'Ed Dick', phone: '707 952 2134' },
        { name: 'Samuel Holley', phone: '714-496-7006' },
        { name: 'Dale Klingsorge', phone: '916-639-7141' },
        { name: 'Sheryl Vinson', phone: '916-639-7174' },
        { name: 'Louie Cedano', phone: '707 510-7199' },
        { name: 'Braven', phone: '559 880 0960' }
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-redwood mb-4">
              Meeting Attendance Log
            </h1>
            <p className="text-xl font-body text-moss">
              Mendo Labor Cooperative Board & Planning Meetings
            </p>
          </div>

          <div className="space-y-8">
            {meetings.map((meeting, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border-4 border-moss p-8">
                <div className="border-b border-sand pb-6 mb-6">
                  <h2 className="text-2xl font-headline font-bold text-redwood mb-2">
                    {meeting.date}
                  </h2>
                  <p className="text-lg font-body text-moss mb-1">
                    <span className="font-semibold">Time:</span> {meeting.time}
                  </p>
                  <p className="text-lg font-body text-moss">
                    <span className="font-semibold">Location:</span> {meeting.location}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-headline font-semibold text-redwood mb-4">
                    Attendees ({meeting.attendees.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {meeting.attendees.map((attendee, attendeeIndex) => (
                      <div key={attendeeIndex} className="bg-sand rounded-lg p-4">
                        <div className="font-headline font-semibold text-redwood">
                          {attendee.name}
                        </div>
                        <div className="font-body text-moss mt-1">
                          {attendee.phone}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-moss text-cream rounded-lg p-6">
              <h3 className="text-xl font-headline font-semibold mb-2">
                Meeting Coordinator
              </h3>
              <p className="font-body">
                Sheryl Vinson • (916) 639-7174
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MeetingLogPage;