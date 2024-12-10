from sqlalchemy import Column, Integer, Float, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class CallData(Base):
    __tablename__ = "call_data"
    id = Column(Integer, primary_key=True, index=True)
    week = Column(String, index=True)
    start_hour = Column(Integer)
    end_hour = Column(Integer)
    call_volume = Column(Float)

# You may also add the Schedule model here if needed for scheduling
