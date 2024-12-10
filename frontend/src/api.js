// src/api.js
const BASE_URL = "http://localhost:8000";

export const getForecast = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/forecast/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Check if the response is OK
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', response.status, errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    // Log the entire result for debugging
    console.log('Full API Response:', result);

    // Validate the response structure
    if (!result || !Array.isArray(result.predictions)) {
      console.error('Invalid response structure:', result);
      throw new Error('Invalid forecast data format');
    }

    return result.predictions;
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    throw error;
  }
};

export const getSchedule = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/schedule/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Check if the response is OK
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', response.status, errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    // Log the entire result for debugging
    console.log('Full API Response:', result);

    // Validate the response structure
    if (!result || !Array.isArray(result.schedule)) {
      console.error('Invalid response structure:', result);
      throw new Error('Invalid schedule data format');
    }

    return result.schedule;
  } catch (error) {
    console.error("Error fetching schedule data:", error);
    throw error;
  }
};