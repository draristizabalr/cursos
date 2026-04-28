from sqlmodel import Relationship, Field, SQLModel
from app.models.customer import Customer

class TransactionBase(SQLModel):
    ammount: int = Field(default=None)
    description: str = Field(default=None)
    
class Transaction(TransactionBase, table=True):
    id: int = Field(default=None, primary_key=True)
    customer_id: int = Field(foreign_key="customer.id", nullable=False)
    customer: Customer = Relationship(back_populates="transactions")

class TransactionCreate(TransactionBase):
    customer_id: int = Field(default=None)