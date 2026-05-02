from http import HTTPStatus

from fastapi import APIRouter, HTTPException, Query
from sqlalchemy.exc import IntegrityError
from sqlmodel import select

from app.models.plan import CustomerPlan, Plan, StatusEnum
from db import SessionDep

from ..models.customer import Customer, CustomerCreate, CustomerUpdate

router = APIRouter(tags=["Customer"])


@router.get("", response_model=list[Customer])
async def list_customers(session: SessionDep):
    return session.exec(select(Customer)).all()


@router.get("/{customer_id}", response_model=Customer)
async def get_customer_by_id(customer_id: int, session: SessionDep):

    customer = session.get(Customer, customer_id)
    if customer is None:
        raise HTTPException(HTTPStatus.NOT_FOUND, detail="Id de usuario no encontrado")

    return customer


@router.get("/{customer_id}/plan", response_model=Plan)
async def customer_subscription(session: SessionDep, customer_id: int):
    customer_db = session.get(Customer, customer_id)

    if customer_db is None:
        raise HTTPException(HTTPStatus.NOT_FOUND, detail="Id de usuario, no encontrado")

    if customer_db.plan:
        return customer_db.plan
    else:
        raise HTTPException(
            HTTPStatus.INTERNAL_SERVER_ERROR,
            detail="El usuario no está suscrito a ningún plan",
        )


@router.post("", response_model=Customer, status_code=HTTPStatus.CREATED)
async def create_customer(customer_data: CustomerCreate, session: SessionDep):

    customer = Customer.model_validate(customer_data.model_dump())

    try:
        session.add(customer)
        session.commit()
        session.refresh(customer)
    except IntegrityError:
        dict_error = {
            "error": "Correo electrónico único",
            "mensaje": f"El correo electrónico '{customer.email}', ya está registrado",
        }
        raise HTTPException(HTTPStatus.BAD_REQUEST, dict_error)

    return customer


@router.post(
    "/{customer_id}/plan/{plan_id}",
    status_code=HTTPStatus.CREATED,
    response_model=CustomerPlan,
)
async def subscribe_customer_to_plan(
    session: SessionDep,
    customer_id: int,
    plan_id: int,
    plan_status: StatusEnum = Query(),
):
    customer_db = session.get(Customer, customer_id)

    if customer_db is None:
        raise HTTPException(HTTPStatus.NOT_FOUND, detail="Id de usuario, no encontrado")

    plan_db = session.get(Plan, plan_id)

    if plan_db is None:
        raise HTTPException(HTTPStatus.NOT_FOUND, detail="Id de plan, no encontrado")

    if customer_db.plan and plan_db in customer_db.plan:
        raise HTTPException(
            HTTPStatus.BAD_REQUEST, detail="El usuario ya está suscrito a este plan"
        )

    assert customer_db.id is not None

    customer_plan_db = CustomerPlan(
        plan_id=plan_db.id, customer_id=customer_db.id, status=plan_status
    )

    session.add(customer_plan_db)
    session.commit()
    session.refresh(customer_plan_db)

    return customer_plan_db


@router.patch(
    "/{customer_id}",
    response_model=Customer,
    status_code=HTTPStatus.CREATED,
)
async def update_customer(
    customer_id: int, customer: CustomerUpdate, session: SessionDep
):
    db_customer = session.get(Customer, customer_id)

    if db_customer is None:
        raise HTTPException(
            status_code=HTTPStatus.NOT_FOUND, detail="Id de usuario no encontrado"
        )

    customer_data = customer.model_dump(exclude_unset=True)
    db_customer.sqlmodel_update(customer_data)

    session.add(db_customer)
    session.commit()
    session.refresh(db_customer)

    return db_customer


@router.delete("/{customer_id}")
async def delete_customer_by_id(customer_id: int, session: SessionDep):
    customer = session.get(Customer, customer_id)
    if customer is None:
        raise HTTPException(HTTPStatus.NOT_FOUND, detail="Id de usuario no encontrado")

    session.delete(customer)
    session.commit()
    return {"message": "Usuario eliminado con exito"}
