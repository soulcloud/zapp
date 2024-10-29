import React, { useState } from 'react';
import axios from 'axios';
import './SpeedTest.css'; // Import the CSS file for styling

const SpeedTest = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const performTest = async () => {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/speedtest/test/`);
      setResult(response.data); // Assuming the response data structure contains speed info
    } catch (err) {
      setError('Failed to perform speed test.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="speed-test-container">
      <h1 className="title">Zapp Speed Test</h1>
      <button className={`test-button ${loading ? 'loading' : ''}`} onClick={performTest} disabled={loading}>
        {loading ? 'Testing...' : 'Start Test'}
      </button>

      {result && (
        <div className="results-container">
          <div className="result-item">
            <span className="result-label">Download:</span>
            <span className="result-value">{result.download} Mbps</span>
          </div>
          <div className="result-item">
            <span className="result-label">Upload:</span>
            <span className="result-value">{result.upload} Mbps</span>
          </div>
          <div className="result-item">
            <span className="result-label">Ping:</span>
            <span className="result-value">{result.ping} ms</span>
          </div>
          <div className="result-item">
            <span className="result-label">Server:</span>
            <span className="result-value">{result.server}</span>
          </div>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SpeedTest;
