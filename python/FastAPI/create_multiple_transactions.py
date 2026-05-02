from sqlmodel import Session

from app.models.customer import Customer
from app.models.transaction import Transaction
from db import engine

session = Session(engine)
customer = Customer(
    name="Fernanda", description="Mi amocito", email="fernanda@mail.com", age=30
)

session.add(customer)
session.commit()

assert customer.id is not None

for amount in range(20, 120):
    session.add(
        Transaction(
            customer_id=customer.id, description=f"Test number {amount}", ammount=amount
        )
    )

session.commit()
