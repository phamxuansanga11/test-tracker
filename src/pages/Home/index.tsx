import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [searchParams] = useSearchParams();

  const refererCode = searchParams.get('refererCode');

  console.log({ refererCode });

  const [trackingData, setTrackingData] = useState<any>({
    referrer: null,
    userAgent: null,
    timestamp: null,
  });

  useEffect(() => {
    if (refererCode) {
      sessionStorage.setItem('@refererCode', refererCode);
    }
  }, [refererCode]);

  useEffect(() => {
    const trackVisit = async () => {
      const referrer = document.referrer; // Lấy nguồn truy cập
      const userAgent = navigator.userAgent; // Lấy thông tin trình duyệt
      const timestamp = new Date().toISOString(); // Lấy thời gian hiện tại

      // try {
      //   await axios.post('http://localhost:5000/track', { referrer, userAgent, timestamp });
      //   console.log('Tracking data sent successfully!');
      // } catch (error) {
      //   console.error('Error sending tracking data:', error);
      // }

      setTrackingData({
        referrer: referrer,
        userAgent: userAgent,
        timestamp: timestamp,
      });

      sessionStorage.setItem('@my-session', `abcd...${Math.random()}`);
    };

    trackVisit();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
      }}
    >
      <h1>Welcome to My Website</h1>
      <p>Tracking referrer sources...</p>
      <div>
        <p>referrer: {trackingData.referrer}</p>
        <p>userAgent: {trackingData.userAgent}</p>
        <p>timestamp: {trackingData.timestamp}</p>
      </div>
    </div>
  );
};

export default HomePage;
