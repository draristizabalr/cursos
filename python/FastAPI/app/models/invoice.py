from pydantic import BaseModel

from app.models.customer import Customer
from app.models.transaction import Transaction


class Invoice(BaseModel):
    id: int
    customer: Customer
    transaction: list[Transaction]
    total: int

    @property
    def ammount_total(self) -> int:
        return sum(transaction.ammount for transaction in self.transaction)
