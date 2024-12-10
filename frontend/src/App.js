import React, { useState } from 'react';
import Forecast from './components/Forecast';
import Scheduling from './components/Scheduling';

function App() {
  const [forecastData, setForecastData] = useState([]);

  return (
    <div className="App">
      <h1>Workforce Management</h1>
      <Forecast setForecastData={setForecastData} />
      <Scheduling forecastData={forecastData} />
    </div>
  );
}

export default App;