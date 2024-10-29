import React, { useState } from 'react';
import axios from 'axios';

const SpeedTest = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const performTest = async () => {
    setLoading(true);
    setResult(null);
    setError(null);
    const apiUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';  // Fallback URL
    
    try {
      const response = await axios.get(`${apiUrl}/speedtest/test/`);
      console.log("Response data:", response.data);  // Check the response structure
      setResult(response.data);  // Set the result with the response data
      
    } catch (err) {
      console.error("Error performing speed test:", err);
      setError('Failed to perform speed test.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Fast Clone Speed Test</h1>
      <button onClick={performTest} disabled={loading}>
        {loading ? 'Testing...' : 'Start Test'}
      </button>

      {result && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>Download:</strong> {result.download} Mbps</p>
          <p><strong>Upload:</strong> {result.upload} Mbps</p>
          <p><strong>Ping:</strong> {result.ping} ms</p>
          <p><strong>Server:</strong> {result.server}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SpeedTest;
