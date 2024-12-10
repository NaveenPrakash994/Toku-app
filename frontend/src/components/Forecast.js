import React, { useState } from "react";
import { getForecast } from "../api";

const Forecast = ({ setForecastData }) => {
  const [localForecastData, setLocalForecastData] = useState([]);
  const [startWeek, setStartWeek] = useState(1);
  const [endWeek, setEndWeek] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetForecast = async () => {
    setIsLoading(true);
    setError(null);
    const data = { 
      start_week: Number(startWeek),  // Explicitly convert to number
      end_week: Number(endWeek)       // Explicitly convert to number
    };
    
    console.log("Sending forecast request:", data);
  
    try {
      const predictions = await getForecast(data);
      
      console.log("Received predictions:", predictions);
      
      // Validate predictions
      if (Array.isArray(predictions)) {
        setForecastData(predictions);
      } else {
        setError("Received invalid prediction format");
        setForecastData([]);
      }
    } catch (error) {
      console.error("Forecast request error:", error);
      setError(error.message || "Failed to fetch forecast");
      setForecastData([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Forecast Data</h2>
      <input
        type="number"
        value={startWeek}
        onChange={(e) => setStartWeek(Number(e.target.value))}
        placeholder="Start Week"
      />
      <input
        type="number"
        value={endWeek}
        onChange={(e) => setEndWeek(Number(e.target.value))}
        placeholder="End Week"
      />
      <button 
        onClick={handleGetForecast} 
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Get Forecast"}
      </button>

      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          {error}
        </div>
      )}

      <div>
        <h3>Predictions:</h3>
        {isLoading ? (
          <p>Loading predictions...</p>
        ) : localForecastData.length > 0 ? (
          <ul>
            {localForecastData.map((prediction, index) => (
              <li key={index}>Week {index + 1}: {prediction}</li>
            ))}
          </ul>
        ) : (
          <p>No predictions available</p>
        )}
      </div>
    </div>
  );
};

export default Forecast;