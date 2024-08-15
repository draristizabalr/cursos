from fastapi import FastAPI
from routers import products, users
from fastapi.staticfiles import StaticFiles

# Inicia el server: uvicorn users:app --reload

app = FastAPI()

# Routers
app.include_router(products.router)
app.include_router(users.router)

# Exponer recursos estáticos
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get('/')
async def root():
  return '¡Hola FastAPI!'

@app.get('/url')
async def url():
  return { "url_curso": "https://mouredev.com/python" }

