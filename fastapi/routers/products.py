from fastapi import APIRouter

router = APIRouter(prefix="/products",
                   tags=["products"],
                   responses={404: {"message": "No encontrado"}})

products_list = [ "Producto1", "Producto2", "Producto3", "Producto4", "Producto5", "Producto6"]

@router.get('/')
async def productos():
    return products_list

@router.get("/{id}")
async def producto(id: int):
    return products_list[id]