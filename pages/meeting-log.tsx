import { useEffect } from 'react';
import { useRouter } from 'next/router';

const MeetingLogRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/attendance');
  }, [router]);

  return null;
};

export default MeetingLogRedirect;
