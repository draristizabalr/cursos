from http import HTTPStatus

from fastapi import APIRouter
from sqlmodel import select

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


# POST
@router.post("", status_code=HTTPStatus.CREATED, response_model=Plan)
async def create_plan(plan: CreatePlan, session: SessionDep):
    plan_db = Plan.model_validate(plan.model_dump())
    session.add(plan_db)
    session.commit()
    session.refresh(plan_db)

    return plan_db
