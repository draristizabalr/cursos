import time
from datetime import datetime
from http import HTTPStatus
from typing import Annotated

from fastapi import Depends, FastAPI, HTTPException, Request
from fastapi.security import HTTPBasic, HTTPBasicCredentials

from app.routers import plans
from app.shared.functions.zone_info import get_zone_info
from db import create_all_tables

from .routers import customers, invoice, transactions

app = FastAPI(lifespan=create_all_tables)
app.include_router(customers.router, prefix="/customer")
app.include_router(invoice.router, prefix="/invoice")
app.include_router(transactions.router, prefix="/transaction")
app.include_router(plans.router, prefix="/plan")


@app.middleware("http")
async def log_request_time(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    print(f"Request: {request.url} completed in: {process_time:.4f}s")

    return response


@app.middleware("http")
async def log_request_headers(request: Request, call_next):
    response = await call_next(request)
    print(request.headers)

    return response


security = HTTPBasic()


@app.get("/")
async def root(credentials: Annotated[HTTPBasicCredentials, Depends(security)]):
    print(credentials)

    if credentials.username == "david" and credentials.password == "qwerty":
        return {"message": f"Hola, {credentials.username}"}
    else:
        raise HTTPException(
            HTTPStatus.UNAUTHORIZED, detail="Usuario o contraseña invalidos"
        )


@app.get("/time/{iso_code}", tags=["Time"])
async def get_date(iso_code: str):
    tz = get_zone_info(iso_code)
    return {"time": datetime.now(tz=tz)}


@app.get("/hour/{iso_code}", tags=["Time"])
async def get_hour(iso_code: str):
    tz = get_zone_info(iso_code)
    date = datetime.now(tz=tz)
    hour_time = date.strftime("%H:%M:%S")
    return {"hour": hour_time}
