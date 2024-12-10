from fastapi import FastAPI
from app.api.forecasting import router as forecasting_router
from app.api.scheduling import router as scheduling_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="Workforce Management API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers for forecasting and scheduling
app.include_router(forecasting_router, prefix="/forecast", tags=["Forecasting"])
app.include_router(scheduling_router, prefix="/schedule", tags=["Scheduling"])

@app.get("/")
def root():
    return {"message": "Welcome to the Workforce Management API"}
