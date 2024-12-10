import React, { useState } from "react";
import { getSchedule } from "../api";

const Scheduling = ({ forecastData }) => {
  const [scheduleData, setScheduleData] = useState([]);
  const [numAgents, setNumAgents] = useState(10);

  const handleGetSchedule = async () => {
    const data = { 
      forecasted_calls: forecastData.length > 0 ? forecastData : [100, 150, 200], 
      num_agents: numAgents 
    };

    try {
      const schedule = await getSchedule(data);
      setScheduleData(schedule);
    } catch (error) {
      console.error("Error generating schedule:", error);
    }
  };

  return (
    <div>
      <h2>Scheduling Data</h2>
      <input
        type="number"
        value={numAgents}
        onChange={(e) => setNumAgents(Number(e.target.value))}
        placeholder="Number of Agents"
      />
      <button onClick={handleGetSchedule}>Generate Schedule</button>

      <div>
        <h3>Schedule:</h3>
        {scheduleData.length > 0 ? (
          <ul>
            {scheduleData.map((agents, index) => (
              <li key={index}>Week {index + 1}: {agents} agents</li>
            ))}
          </ul>
        ) : (
          <p>No schedule generated</p>
        )}
      </div>
    </div>
  );
};

export default Scheduling;