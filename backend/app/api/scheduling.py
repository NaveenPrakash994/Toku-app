from fastapi import APIRouter, HTTPException
from app.ml.scheduling_model import generate_schedule
from app.schemas.scheduling import SchedulingRequest, SchedulingResponse

router = APIRouter()

@router.post("/", response_model=SchedulingResponse)
async def schedule(data: SchedulingRequest):
    # Endpoint to generate workforce schedules based on forecasted call volumes.
    try:
        schedule = generate_schedule(data.forecasted_calls, data.num_agents)
        return {"schedule": schedule}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
