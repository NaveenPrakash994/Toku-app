
from pydantic import BaseModel
from typing import List

class ForecastRequest(BaseModel):
    start_week: int  # Changed from str to int
    end_week: int    # Changed from str to int

class ForecastResponse(BaseModel):
    predictions: List[float]

    class Config:
        orm_mode = True