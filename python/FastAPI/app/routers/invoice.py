from fastapi import APIRouter

from ..models.invoice import Invoice

router = APIRouter(tags=["Invoice"])


@router.post("")
async def create_invoice(invoice_data: Invoice):
    return invoice_data
