import numpy as np
from typing import List

# Example forecasting function using basic time series (replace with your actual model)
def forecast_calls(historical_data: List[dict], end_week: str) -> List[float]:
    # In real implementation, this would use a machine learning model for forecasting
    predictions = []

    # Example: Generate dummy forecasts for simplicity
    for data in historical_data:
        predictions.append(data['call_volume'] * np.random.uniform(0.8, 1.2))  # Random forecast

    return predictions
