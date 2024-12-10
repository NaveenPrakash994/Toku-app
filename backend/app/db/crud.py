from sqlalchemy.orm import Session
from app.models import CallData

def get_call_data_by_week(db: Session, week: str):
    return db.query(CallData).filter(CallData.week == week).all()

def create_schedule(db: Session, schedule_data: dict):
    db_schedule = Schedule(**schedule_data)
    db.add(db_schedule)
    db.commit()
    db.refresh(db_schedule)
    return db_schedule
