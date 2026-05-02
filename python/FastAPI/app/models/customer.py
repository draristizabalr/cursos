from typing import TYPE_CHECKING

from pydantic import EmailStr
from sqlmodel import Field, Relationship, Session, SQLModel

from app.models.plan import CustomerPlan, Plan
from db import engine

if TYPE_CHECKING:
    from app.models.transaction import Transaction

session = Session(engine)


class CustomerBase(SQLModel):
    name: str = Field(default=None)
    description: str | None = Field(default=None)
    email: EmailStr = Field(default=None, unique=True)
    age: int = Field(default=None)

    # Si no se usa el unique en el field, esto funciona como validador
    # @field_validator("email")
    # @classmethod
    # def validate_email(cls, value):
    #     query = select(Customer).where(Customer.email == value)
    #     result = session.exec(query).first()

    #     if result:
    #         raise ValueError("Este correo ya existe")

    #     return value


class CustomerCreate(CustomerBase):
    pass


class CustomerUpdate(CustomerBase):
    pass


class Customer(CustomerBase, SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    plan: Plan = Relationship(back_populates="customers", link_model=CustomerPlan)
    transactions: list[Transaction] = Relationship(back_populates="customer")
