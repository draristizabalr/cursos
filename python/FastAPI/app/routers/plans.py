from http import HTTPStatus

from fastapi import APIRouter, HTTPException
from sqlmodel import select

from app.models.customer import Customer
from app.models.plan import CreatePlan, CustomerPlan, Plan
from db import SessionDep

router = APIRouter(tags=["Plans"])


# GET
@router.get("", response_model=list[Plan])
async def plans_list(session: SessionDep):
    plans_query = select(Plan)
    plans = session.exec(plans_query).all()

    return plans


@router.get(path="/subscriptions", response_model=list[CustomerPlan])
async def list_subscriptions(session: SessionDep):
    customer_plan_query = select(CustomerPlan)
    customer_plan = session.exec(customer_plan_query).all()

    return customer_plan


@router.get("/subscription/{customer_id}", response_model=list[Plan])
async def customer_subscription(session: SessionDep, customer_id: int):
    customer_db = session.get(Customer, customer_id)

    if customer_db is None:
        raise HTTPException(HTTPStatus.NOT_FOUND, detail="Id de usuario, no encontrado")

    return customer_db.plans


# POST
@router.post("", status_code=HTTPStatus.CREATED, response_model=Plan)
async def create_plan(plan: CreatePlan, session: SessionDep):
    plan_db = Plan.model_validate(plan.model_dump())
    session.add(plan_db)
    session.commit()
    session.refresh(plan_db)

    return plan_db


@router.post(
    "/{customer_id}/{plan_id}",
    status_code=HTTPStatus.CREATED,
    response_model=CustomerPlan,
)
async def subscribe_customer_to_plan(
    customer_id: int, plan_id: int, session: SessionDep
):
    customer_db = session.get(Customer, customer_id)

    if customer_db is None:
        raise HTTPException(HTTPStatus.NOT_FOUND, detail="Id de usuario, no encontrado")

    plan_db = session.get(Plan, plan_id)

    if plan_db is None:
        raise HTTPException(HTTPStatus.NOT_FOUND, detail="Id de plan, no encontrado")

    if plan_db in customer_db.plans:
        raise HTTPException(
            HTTPStatus.BAD_REQUEST, detail="El usuario ya está suscrito a este plan"
        )

    customer_plan_db = CustomerPlan(plan_id=plan_db.id, customer_id=customer_db.id)

    session.add(customer_plan_db)
    session.commit()
    session.refresh(customer_plan_db)

    return customer_plan_db
