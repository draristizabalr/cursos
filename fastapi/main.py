from fastapi import FastAPI
import users

app = FastAPI()

@app.get('/')
async def root():
  return '¡Hola FastAPI!'

@app.get('/url')
async def url():
  return { "url_curso": "https://mouredev.com/python" }

