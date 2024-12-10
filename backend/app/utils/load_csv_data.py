import sys
import os
from pathlib import Path

# Add the project root directory to the system path
sys.path.append(str(Path(__file__).resolve().parent.parent))

from app.db.base import SessionLocal
from app.models import CallData
import pandas as pd

def load_csv_to_db(csv_file: str):
    # Load CSV into pandas DataFrame
    df = pd.read_csv(csv_file)

    # Create a database session
    db = SessionLocal()

    # Iterate over DataFrame rows and insert each row into the database
    for _, row in df.iterrows():
        call_data = CallData(
            week=row['Week'],
            start_hour=row['Start_Hour'],
            end_hour=row['End_Hour'],
            call_volume=row['Call_Volume']
        )
        db.add(call_data)

    # Commit changes and close the session
    db.commit()
    db.close()

if __name__ == "__main__":
    load_csv_to_db('data/raw_call_data.csv')
