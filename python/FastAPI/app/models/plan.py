from sqlmodel import SQLModel, Field, Relationship
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from app.models.customer import Customer


class CustomerPlan(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True, nullable=False)
    plan_id: int = Field(default=1, foreign_key="plan.id", nullable=False)
    customer_id: int = Field(foreign_key="customer.id", nullable=False)


class PlanBase(SQLModel):
    name: str = Field(default=None)
    price: int = Field(default=None)
    description: str = Field(default=None)


class CreatePlan(PlanBase):
    pass


class Plan(PlanBase, table=True):
    id: int = Field(default=None, primary_key=True)
    customers: list[Customer] = Relationship(
        back_populates="plans", link_model=CustomerPlan
    )


class PlanCreate(PlanBase):
    pass
