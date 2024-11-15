import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SpeedTest.css'; // for enhanced styling

const SpeedTest = () => {
  const [loading, setLoading] = useState(false);
  const [downloadRate, setDownloadRate] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const performTest = async () => {
    setLoading(true);
    setDownloadRate(0);
    setResult(null);
    setError(null);

    let interval;

    try {
      // Simulate live download rate updates
      interval = setInterval(() => {
        const randomRate = Math.random() * (500 - 100) + 100; // Random rate between 100 and 500 Mbps
        setDownloadRate(randomRate.toFixed(2)); // Update the download rate
      }, 500); // Update every half second

      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/speedtest/test/`);

      clearInterval(interval); // Stop the interval when the test is done
      setResult(response.data); // Update with real data from backend

    } catch (err) {
      clearInterval(interval); // Ensure interval is cleared if there's an error
      setError('Failed to perform speed test.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="speedtest-container">
      <h1 className="title">Zapp Speed Test</h1>
      
      <div className="status">
        {loading ? (
          <>
            <p>Current Download Rate: <strong>{downloadRate} Mbps</strong></p>
            <div className="progress-bar" />
          </>
        ) : (
          <button onClick={performTest} disabled={loading} className="start-button">
            {loading ? 'Testing...' : 'Start Test'}
          </button>
        )}
      </div>

      {result && (
        <div className="result">
          <h2>Test Results:</h2>
          <p><strong>Download:</strong> {result.download} Mbps</p>
          <p><strong>Upload:</strong> {result.upload} Mbps</p>
          <p><strong>Ping:</strong> {result.ping} ms</p>
          <p><strong>Server:</strong> {result.server}</p>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SpeedTest;
