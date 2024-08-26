from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(tags=["users", "mongo"],
                   prefix="/user_db")

# Entidad user
class User(BaseModel):
  id: int
  name: str
  surname: str
  url: str
  age: int

users_list = [
    User(id=0, name="Brais", surname="Moure", url="https://moure.dev", age=35),
    User(id=1, name="Moure", surname="Dev", url="https://mouredev.com", age=35),
    User(id=2, name="Haakon", surname="Dahlberg", url="https://haakon.com", age=35),
    User(id=3, name="David", surname="Aristizabal", url="https://david-aristizabal.com", age=32),
  ]

@router.get("/users")
async def users():
  return users_list

@router.get('/{id}')
async def user(id: int):
    user = filter(lambda user: user.id == id, users_list)
    try:
       return list(user)[0]
    except:
       return {"error": "No se ha encontrado al usuario"}
    
@router.get('/userquery')
async def user(id: int):
    user = filter(lambda user: user.id == id, users_list)
    try:
       return list(user)[0]
    except:
       return { "error": "No se ha encontrado el usuario"}

@router.post('/', response_model=User, status_code=201)
async def user(user: User):
    if type(search_user(user.id)) == User:
      raise HTTPException(status_code=204, detail="El usuario ya existe")
    else:
      users_list.append(user)
      return user

def search_user(id: int):
    user = filter(lambda user: user.id == id, users_list)
    try:
      return list(user)[0]
    except:
      return { "error": "No se ha encontrado el usuario"}

@router.put('/')
async def user(user: User):
  found = False

  for index, saved_user in enumerate(users_list):
    if saved_user.id == user.id:
      users_list[index] = user
      found = True

  if not found:
    return { "error": "No se ha encontrado el usuario"}
  else:
     return user

@router.delete("/{id}")
async def user(id: int):
  found = False

  for index, user in enumerate(users_list):
    if user.id == id:
      user_index = index
      found = True

  if found:
    return users_list.pop(user_index)
  else:
    return { "error": "No existe ningún usuario con ese ID"}
      