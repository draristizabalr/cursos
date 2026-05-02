from http import HTTPStatus

from fastapi import APIRouter, HTTPException, Query
from sqlmodel import select

from app.models.customer import Customer
from db import SessionDep

from ..models.transaction import Transaction, TransactionCreate

router = APIRouter(tags=["Transaction"])


@router.get("")
async def list_transaction(
    session: SessionDep,
    skip: int = Query(0, description="Registros a omitir"),
    limit: int = Query(10, description="Número de registros"),
):
    query = select(Transaction).offset(skip).limit(limit)
    transaction = session.exec(query).all()

    return transaction


@router.post("", status_code=HTTPStatus.CREATED)
async def create_transation(transaction: TransactionCreate, session: SessionDep):
    transaction_data = transaction.model_dump()
    customer = session.get(Customer, transaction_data.get("customer_id"))

    if customer is None:
        raise HTTPException(
            status_code=HTTPStatus.NOT_FOUND, detail="Id de usuario no encontrado"
        )

    transaction_db = Transaction.model_validate(transaction_data)

    session.add(transaction_db)
    session.commit()
    session.refresh(transaction_db)

    return transaction_db
