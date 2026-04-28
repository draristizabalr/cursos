from fastapi import FastAPI, Depends
from datetime import datetime

from db import create_all_tables
from app.shared.functions.zone_info import get_zone_info
from .routers import customers, invoice, transactions

app = FastAPI(lifespan=create_all_tables)
app.include_router(customers.router, prefix="/customer")
app.include_router(invoice.router, prefix="/invoice")
app.include_router(transactions.router, prefix="/transaction")

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/time/{iso_code}", tags=["Time"])
async def time(iso_code: str):
    tz = get_zone_info(iso_code)
    return {"time": datetime.now(tz=tz)}


@app.get("/hour/{iso_code}", tags=["Time"])
async def get_hour(iso_code: str):
    tz = get_zone_info(iso_code)
    date = datetime.now(tz=tz)
    hour_time = date.strftime("%H:%M:%S")
    return {"hour": hour_time}
