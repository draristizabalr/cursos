from fastapi import FastAPI
from router.user import user

app = FastAPI()

# Routes
app.include_router(user)


@app.get('/')
def helloWorld():
    return {"message": "Welcome to FastAPI"}
