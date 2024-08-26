from fastapi import APIRouter, HTTPException, status
from db.models.user import User
from db.client import db_client

router = APIRouter(tags=["users", "mongo"],
                   prefix="/user_db",
                   responses={status.HTTP_404_NOT_FOUND: {"message": "No encontrado"}})

users_list = []

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

@router.post('/', response_model=User, status_code=status.HTTP_201_CREATED)
async def user(user: User):
    if type(search_user(user.id)) == User:
      raise HTTPException(status_code=status.HTTP_204_NO_CONTENT, detail="El usuario ya existe")
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
      