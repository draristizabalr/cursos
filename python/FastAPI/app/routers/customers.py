from sqlmodel import select
from http import HTTPStatus
from fastapi import HTTPException, APIRouter

from ..models.customer import Customer, CustomerCreate, CustomerUpdate
from db import SessionDep

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


@router.post("", response_model=Customer, status_code=HTTPStatus.CREATED)
async def create_customer(customer_data: CustomerCreate, session: SessionDep):
    customer = Customer.model_validate(customer_data.model_dump())

    session.add(customer)
    session.commit()
    session.refresh(customer)

    return customer


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
