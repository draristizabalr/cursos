from fastapi import FastAPI
from routers import jwt_auth_users, products, users, basic_auth_users, users_db
from fastapi.staticfiles import StaticFiles

# Inicia el server: uvicorn users:app --reload

app = FastAPI()

# Routers
app.include_router(products.router)
app.include_router(users.router)
app.include_router(users_db.router)
app.include_router(basic_auth_users.router)
app.include_router(jwt_auth_users.router)


# Exponer recursos estáticos
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get('/')
async def root():
  return '¡Hola FastAPI!'

@app.get('/url')
async def url():
  return { "url_curso": "https://mouredev.com/python" }

