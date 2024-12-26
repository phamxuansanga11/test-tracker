import queryString from 'query-string';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [referrer, setReferrer] = useState<string | null>(null);
  const [utmSource, setUtmSource] = useState<string | null>(null);

  useEffect(() => {
    // Lấy referrer từ document.referrer
    const referrerUrl = document.referrer;
    console.log({referrerUrl});
    
    setReferrer(referrerUrl || "Truy cập trực tiếp");

    // Lấy các thông tin UTM từ URL nếu có
    const queryParams = queryString.parse(window.location.search);
    if (queryParams.utm_source) {
      setUtmSource(queryParams.utm_source as string);
    }
  }, []);

  return (
    <div>
      <h1>Tracking Redirect</h1>
      <p>
        <strong>Nguồn referrer:</strong> {referrer}
      </p>
      {utmSource && (
        <p>
          <strong>UTM Source:</strong> {utmSource}
        </p>
      )}
    </div>
  );
}

export default App
