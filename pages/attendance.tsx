import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

const CORRECT_PASSWORD = 'labor1coop!MENDO@';

const AttendancePage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = sessionStorage.getItem('internal_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('internal_auth', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const meetings: Array<{
    date: string;
    time: string;
    location: string;
    notes?: string;
    attendees: Array<{ name: string; phone: string; email?: string }>;
  }> = [
    {
      date: 'January 22, 2026',
      time: '10:00 AM',
      location: 'Building Bridges Homeless Resource Center',
      notes: 'Motioned to pay Braven $25 for ongoing admin work coordinating jobs and working on website',
      attendees: [
        { name: 'Samuel Holley', phone: '714-496-7006', email: 'sam@samuelholley.com' },
        { name: 'Braven Haynes', phone: '559-880-0960', email: 'bravenhaynes@gmail.com' },
        { name: 'Louie Cedano', phone: '707-510-7199', email: 'louieboy3182@gmail.com' },
        { name: 'Ed Dick', phone: '707-952-2134', email: 'edwardpdick@gmail.com' },
        { name: 'Tony Maples', phone: '707-510-9708' },
        { name: 'David Churchill', phone: '707-313-2339' },
        { name: 'Joel (Tony) Gama', phone: 'Pending' }
      ]
    },
    {
      date: 'December 11, 2025',
      time: '10:00 AM',
      location: 'Building Bridges Homeless Resource Center',
      notes: 'Joel (Tony) Gama arrived late',
      attendees: [
        { name: 'Samuel Holley', phone: '714-496-7006', email: 'sam@samuelholley.com' },
        { name: 'Braven Haynes', phone: '559-880-0960', email: 'bravenhaynes@gmail.com' },
        { name: 'Louie Cedano', phone: '707-510-7199', email: 'louieboy3182@gmail.com' },
        { name: 'Ed Dick', phone: '707-952-2134', email: 'edwardpdick@gmail.com' },
        { name: 'Tony Maples', phone: '707-510-9708' },
        { name: 'David Churchill', phone: '707-313-2339' },
        { name: 'Joel (Tony) Gama', phone: 'Pending' }
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

  if (isLoading) {
    return (
      <Layout title="Meeting Attendance | Mendo Labor Cooperative">
        <div className="min-h-screen bg-cream flex items-center justify-center">
          <div className="text-moss text-lg">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (!isAuthenticated) {
    return (
      <Layout title="Meeting Attendance | Mendo Labor Cooperative">
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        
        <section className="min-h-screen bg-cream py-20">
          <div className="max-w-md mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-moss rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-headline font-bold text-gold mb-2">
                  Meeting Attendance
                </h1>
                <p className="text-moss/70">
                  This page contains internal records. Please enter the password to access.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-moss mb-2">
                    Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-sand rounded-lg focus:ring-2 focus:ring-moss focus:border-moss transition-colors"
                    placeholder="Enter password"
                    autoFocus
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-moss text-cream font-semibold py-3 px-6 rounded-lg hover:bg-moss/90 transition-colors"
                >
                  Access Records
                </button>
              </form>

              <p className="text-center text-sm text-moss/60 mt-6">
                Contact Cheryl at (369) 216-1512 if you need access.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout
      title="Meeting Attendance Records | Mendo Labor Cooperative"
      description="Complete meeting attendance records for Mendo Labor Cooperative."
    >
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-12">
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-gold mb-4">
                Meeting Attendance
              </h1>
              <p className="text-xl font-body text-moss">
                Detailed attendance records for all co-op meetings
              </p>
            </div>
            <button
              onClick={() => {
                sessionStorage.removeItem('internal_auth');
                setIsAuthenticated(false);
              }}
              className="bg-moss/10 hover:bg-moss/20 text-moss px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Log Out
            </button>
          </div>

          <div className="space-y-12">
            {meetings.map((meeting, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-moss overflow-hidden">
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
