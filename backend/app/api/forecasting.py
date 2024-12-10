from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.base import get_db
from app.ml.forecast_model import forecast_calls
from app.schemas.forecasting import ForecastRequest, ForecastResponse
from app.db.crud import get_call_data_by_week

router = APIRouter()

@router.post("/", response_model=ForecastResponse)
async def forecast(data: ForecastRequest, db: Session = Depends(get_db)):
    # Fetch historical data from the database based on the start and end week
    historical_data = get_call_data_by_week(db, data.start_week)

    # Forecast call volumes based on historical data
    predictions = forecast_calls(historical_data, data.end_week)

    return {"predictions": predictions}
