from pydantic import BaseModel
from typing import List

class SchedulingRequest(BaseModel):
    forecasted_calls: List[float]
    num_agents: int

class SchedulingResponse(BaseModel):
    schedule: List[str]  # Replace with the type of schedule (string for simplicity)

    class Config:
        orm_mode = True
